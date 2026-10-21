// Testing mode (window.SLO_TEST). Off by default; the checkbox on the start
// screen turns it on (localStorage 'slo_testmode'). While on, it records the
// current run as a list of events: scenes and the options shown, choices,
// cards, every change to Q, a full snapshot each month, script errors and
// sanity warnings. Only one run is kept (localStorage 'slo_testlog'); a new
// game replaces it. Export is JSON Lines, one event per line, made to be read
// by Claude Code. The format is described in docs/TESTING_MODE.md.
//
// Keys: F8 opens the panel at the note box, F9 downloads the log.
// When off, every hook returns after one flag check.
(function() {
  'use strict';

  var FLAG_KEY = 'slo_testmode', LOG_KEY = 'slo_testlog';
  var VERSION = 1;

  // Sanity ranges: a value outside them after a step is logged as a warning
  // (once, until it comes back in range).
  var RANGES = [
    [/^rel_/, 0, 100], [/^mood_/, -100, 100], [/^pos_/, -2, 2],
    [/^(cohesion|captured|coalition_strain|roots)$/, 0, 100],
    [/^leader_bonus$/, 0, 10], [/^resources$/, 0, Infinity]
  ];

  var on = false;
  try { on = localStorage.getItem(FLAG_KEY) === '1'; } catch (e) {}

  var log = [];          // the events of the current run
  var outOfRange = {};   // var -> true while it is outside its range
  var lastTime = null;   // Q.time of the last snapshot
  var shownAt = 0;       // when the last set of choices appeared
  var build = null;      // Last-Modified of core.js, a stand-in for a build id
  var saveTimer = null;
  var E = null;          // the engine

  // ---------------------------------------------------------------- helpers

  function Q() { return E && E.state ? E.state.qualities : {}; }
  function date(q) {
    q = q || Q();
    return q.year ? q.year + '-' + (q.month < 10 ? '0' : '') + q.month : null;
  }
  function now() { return Date.now(); }
  function safe(f) { try { return f(); } catch (e) { return null; } }

  // Display content (strings, arrays, {content}) to plain text.
  function text(c) {
    if (c == null) { return ''; }
    if (typeof c === 'string') { return c; }
    if (typeof c === 'number') { return String(c); }
    if (Array.isArray(c)) { return c.map(text).join(''); }
    if (typeof c === 'object') { return text(c.content !== undefined ? c.content : c.text); }
    return '';
  }
  function clip(s, n) { s = String(s).replace(/\s+/g, ' ').trim(); return s.length > n ? s.slice(0, n - 1) + '…' : s; }

  // A flat copy of Q. Objects (Q.timers and the like) are kept as JSON so
  // they compare by value.
  function snap(q) {
    var out = {}, k, v;
    for (k in q) {
      v = q[k];
      if (typeof v === 'function') { continue; }
      out[k] = (v !== null && typeof v === 'object') ? JSON.stringify(v) : v;
    }
    return out;
  }
  function full(q) {
    var out = {}, k, v;
    for (k in q) { v = q[k]; if (typeof v !== 'function') { out[k] = v; } }
    return JSON.parse(JSON.stringify(out));
  }
  function round(v) { return typeof v === 'number' && isFinite(v) ? Math.round(v * 1000) / 1000 : v; }
  function unjson(v) {
    if (typeof v === 'string' && (v[0] === '{' || v[0] === '[')) { try { return JSON.parse(v); } catch (e) {} }
    return v;
  }
  function same(a, b) { return a === b || (typeof a === 'number' && typeof b === 'number' && isNaN(a) && isNaN(b)); }

  // {var: [old, new]} for every quality that changed; null if none did.
  // A number that is NaN or Infinity is kept as a string, since JSON has no
  // way to write it.
  function out(v) { v = round(unjson(v)); return typeof v === 'number' && !isFinite(v) ? String(v) : v; }
  function diff(a, b) {
    var d = {}, n = 0, k;
    for (k in b) { if (!same(a[k], b[k])) { d[k] = [k in a ? out(a[k]) : null, out(b[k])]; n++; } }
    for (k in a) { if (!(k in b)) { d[k] = [out(a[k]), null]; n++; } }
    return n ? d : null;
  }

  function push(ev) {
    if (ev.date === undefined) { ev.date = date(); }
    log.push(ev);
    if (ev.t === 'error' || ev.t === 'warn') { badge(); }
    if (panelOpen) { renderPanel(); }
    scheduleSave();
  }

  // ---------------------------------------------------------------- storage

  function scheduleSave() {
    if (saveTimer) { return; }
    saveTimer = setTimeout(function() {
      saveTimer = null;
      if (window.requestIdleCallback) { window.requestIdleCallback(saveNow, {timeout: 2000}); } else { saveNow(); }
    }, 800);
  }
  function saveNow() {
    try { localStorage.setItem(LOG_KEY, JSON.stringify(log)); }
    catch (e) { console.log('Testing mode: could not store the log', e); }
  }
  function loadStored() {
    try { var s = localStorage.getItem(LOG_KEY); log = s ? (JSON.parse(s) || []) : []; } catch (e) { log = []; }
  }

  function newRun(reason) {
    log = [];
    outOfRange = {};
    lastTime = null;
    push({t: 'session', v: VERSION, reason: reason, build: build, started: new Date().toISOString(),
          ua: navigator.userAgent, screen: window.innerWidth + 'x' + window.innerHeight});
  }

  // ---------------------------------------------------------------- checks

  function rangeOf(k) {
    for (var i = 0; i < RANGES.length; i++) { if (RANGES[i][0].test(k)) { return RANGES[i]; } }
    return null;
  }
  function check(d, src, q) {
    for (var k in d) {
      var v = q[k];
      if (typeof v === 'number' && !isFinite(v)) { push({t: 'warn', kind: 'nan', src: src, var: k, value: String(v)}); continue; }
      if (v === undefined && d[k][0] !== null) { push({t: 'warn', kind: 'undefined', src: src, var: k}); continue; }
      var r = rangeOf(k);
      if (r && typeof v === 'number') {
        var bad = v < r[1] || v > r[2];
        if (bad && !outOfRange[k]) { push({t: 'warn', kind: 'range', src: src, var: k, value: round(v), range: [r[1], r[2] === Infinity ? null : r[2]]}); }
        outOfRange[k] = bad;
      }
    }
  }

  // ---------------------------------------------------------------- engine hooks

  function describeScene() {
    var id = E.state.sceneId, scene = E.game.scenes[id] || {};
    var ev = {t: 'scene', id: id, time: Q().time};
    var path = E.state.sceneIdsSinceGoTo || [];
    if (path.length > 1) { ev.path = path.slice(); }
    if (scene.title) { ev.title = clip(text(scene.title), 80); }
    var ch = E.choiceCache || [];
    if (scene.isHand) {
      ev.hand = (E.state.currentHands[id] || []).map(function(c) { return c.id; });
      ev.opts = ch.map(function(c) { return c.id + (c.canChoose ? '' : '!locked'); });
    } else {
      ev.opts = ch.map(function(c) {
        var o = {id: c.id, title: clip(text(c.title), 70)};
        if (!c.canChoose) { o.locked = true; if (c.subtitle) { o.why = clip(text(c.subtitle), 90); } }
        return o;
      });
    }
    if (E.isGameOver()) { ev.gameOver = true; }
    push(ev);
    if (!ch.length && !scene.isHand && !E.isGameOver()) { push({t: 'warn', kind: 'dead_end', src: id}); }
    shownAt = now();
  }

  // goToScene and drawCard: diff Q around the call, then describe where the
  // player now is. choose, playCard and playPinnedCard go through goToScene.
  function wrapStep(name) {
    var orig = E[name];
    E[name] = function() {
      if (!on) { return orig.apply(this, arguments); }
      var arg = arguments[0], q0 = snap(Q()), wasStarted = Q().started, res, err;
      try { res = orig.apply(this, arguments); } catch (e) { err = e; }
      safe(function() { afterStep(name, arg, q0, wasStarted); });
      if (err) {
        push({t: 'error', kind: 'engine', src: name + '(' + arg + ')', msg: String(err && err.message || err), stack: clip(err && err.stack || '', 1200)});
        throw err;
      }
      return res;
    };
  }

  function afterStep(name, arg, q0, wasStarted) {
    var q = Q();
    if (!wasStarted && q.started) { newRun('new_game'); }   // a new game replaces the stored run
    if (!log.length) { return; }                              // title screen, no run yet
    var src = E.state.sceneId;
    if (name === 'drawCard') {
      var c = E.state.lastDrawnCard;
      push({t: 'draw', deck: arg, got: c ? c.id : null});
    }
    var d = (!wasStarted && q.started) ? null : diff(q0, snap(q));   // the start's setup is in the first snapshot
    if (d) { push({t: 'delta', src: src, d: d}); check(d, src, q); }
    if (q.started && q.time !== lastTime) {
      lastTime = q.time;
      push({t: 'snapshot', time: q.time, q: full(q)});
    }
    if (name !== 'drawCard') { describeScene(); }
  }

  function install() {
    E = window.dendryUI && window.dendryUI.dendryEngine;
    if (!E || !E.state) { return false; }

    wrapStep('goToScene');
    wrapStep('drawCard');
    var choose = E.choose;
    E.choose = function(i) {
      if (on && log.length && E.choiceCache && E.choiceCache[i]) {
        var c = E.choiceCache[i];
        push({t: 'choice', id: c.id, title: clip(text(c.title), 70), ms: now() - shownAt});
      }
      return choose.apply(this, arguments);
    };
    var playCard = E.playCard;
    E.playCard = function(id) {
      if (on && log.length) { push({t: 'card', id: id, ms: now() - shownAt}); }
      return playCard.apply(this, arguments);
    };
    var playPinned = E.playPinnedCard;
    E.playPinnedCard = function(id) {
      if (on && log.length) { push({t: 'card', id: id, pinned: true, ms: now() - shownAt}); }
      return playPinned.apply(this, arguments);
    };
    var setState = E.setState;
    E.setState = function() {
      var r = setState.apply(this, arguments);
      if (on && Q().started) {
        if (!log.length) { newRun('loaded_save'); }
        push({t: 'load', scene: E.state.sceneId, q: full(Q())});
        lastTime = Q().time;
      }
      return r;
    };
    // the engine's hook for errors in scene code (engine/README.md, change 3)
    E.onScriptError = function(err, kind, fn) {
      if (!on || !log.length) { return; }
      push({t: 'error', kind: kind, src: E.state && E.state.sceneId, msg: String(err && err.message || err),
            stack: clip(err && err.stack || '', 800), code: clip(fn ? String(fn) : '', 400)});
    };
    return true;
  }

  window.addEventListener('error', function(e) {
    if (on && log.length) { push({t: 'error', kind: 'window', msg: e.message, at: (e.filename || '').split('/').pop() + ':' + e.lineno + ':' + e.colno, stack: clip(e.error && e.error.stack || '', 1200)}); }
  });
  window.addEventListener('unhandledrejection', function(e) {
    if (on && log.length) { push({t: 'error', kind: 'promise', msg: String(e.reason && e.reason.message || e.reason), stack: clip(e.reason && e.reason.stack || '', 1200)}); }
  });
  ['error', 'warn'].forEach(function(level) {
    var orig = console[level];
    console[level] = function() {
      if (on && log.length) {
        var msg = Array.prototype.map.call(arguments, function(a) {
          return a instanceof Error ? a.message : (typeof a === 'object' ? safe(function() { return JSON.stringify(a); }) : String(a));
        }).join(' ');
        push({t: level === 'error' ? 'error' : 'warn', kind: 'console', msg: clip(msg, 600)});
      }
      return orig.apply(console, arguments);
    };
  });
  window.addEventListener('pagehide', function() { if (on && log.length) { saveNow(); } });

  // ---------------------------------------------------------------- export

  var FINAL = ['lms_votes', 'resources', 'leader_bonus', 'coalition_strain', 'cohesion', 'roots', 'captured',
               'rel_est', 'rel_media', 'rel_ngo', 'rel_mayors', 'in_government', 'months_governed', 'field_open'];

  function summary() {
    var q = Q(), s = {choices: 0, cards: 0, months: 0, errors: 0, warnings: 0, notes: 0};
    var key = {choice: 'choices', card: 'cards', snapshot: 'months', error: 'errors', warn: 'warnings', note: 'notes'};
    log.forEach(function(e) { if (key[e.t]) { s[key[e.t]]++; } });
    var first = log[0] || {}, fin = {};
    FINAL.forEach(function(k) { if (q[k] !== undefined) { fin[k] = round(q[k]); } });
    return {t: 'summary', v: VERSION, build: first.build || build, started: first.started, exported: new Date().toISOString(),
            date: date(q), scene: E && E.state.sceneId, ending: q.ending || null, gameOver: !!(E && E.isGameOver()),
            counts: s, final: fin};
  }

  function jsonl() {
    return [summary()].concat(log).map(function(e) { return JSON.stringify(e); }).join('\n') + '\n';
  }

  function fileName() {
    var d = new Date(), p = function(n) { return (n < 10 ? '0' : '') + n; };
    return 'slo-playtest-' + d.getFullYear() + p(d.getMonth() + 1) + p(d.getDate()) + '-' + p(d.getHours()) + p(d.getMinutes()) + '.jsonl';
  }

  function download() {
    var a = document.createElement('a');
    a.href = URL.createObjectURL(new Blob([jsonl()], {type: 'application/x-ndjson'}));
    a.download = fileName();
    document.body.appendChild(a);
    a.click();
    setTimeout(function() { URL.revokeObjectURL(a.href); a.remove(); }, 1000);
  }

  // A short Markdown summary for pasting into chat.
  function markdown() {
    var s = summary(), c = s.counts, md = [];
    md.push('## Playtest summary (' + (s.started || '').slice(0, 16).replace('T', ' ') + ')');
    md.push('Reached ' + (s.date || '?') + ' at `' + s.scene + '`' + (s.ending ? ', ending `' + s.ending + '`' : '') + '. ' +
            c.choices + ' choices, ' + c.cards + ' cards, ' + c.months + ' months, ' + c.errors + ' errors, ' + c.warnings + ' warnings.');
    md.push('');
    md.push('Final: ' + Object.keys(s.final).map(function(k) { return k + ' ' + s.final[k]; }).join(', '));
    var errs = log.filter(function(e) { return e.t === 'error' || e.t === 'warn'; });
    if (errs.length) {
      md.push('', 'Errors and warnings:');
      errs.slice(0, 30).forEach(function(e) {
        md.push('- ' + (e.date || '') + ' ' + e.t + '/' + e.kind + ' at `' + (e.src || '') + '`: ' + (e.msg || (e.var ? e.var + ' = ' + e.value : '')));
      });
      if (errs.length > 30) { md.push('- ' + (errs.length - 30) + ' more in the full log'); }
    }
    var notes = log.filter(function(e) { return e.t === 'note'; });
    if (notes.length) {
      md.push('', 'Notes:');
      notes.forEach(function(e) { md.push('- ' + (e.date || '') + ' at `' + e.scene + '`: ' + e.text); });
    }
    md.push('', 'Path: ' + log.filter(function(e) { return (e.t === 'choice' || e.t === 'card') && e.id !== 'root'; }).map(function(e) { return e.id; }).join(' > '));
    return md.join('\n');
  }

  function copySummary(btn) {
    var md = markdown();
    var done = function() { btn.textContent = 'Copied'; setTimeout(function() { btn.textContent = 'Copy summary'; }, 1500); };
    if (navigator.clipboard) { navigator.clipboard.writeText(md).then(done, function() { window.prompt('Copy:', md); }); }
    else { window.prompt('Copy:', md); }
  }

  function note(value) {
    value = (value || '').trim();
    if (!value || !log.length) { return; }
    push({t: 'note', scene: E && E.state.sceneId, text: value});
  }

  // ---------------------------------------------------------------- UI

  var css = [
    '#slo-test{position:fixed;left:10px;bottom:10px;z-index:900;font:12px/1.4 Inter,"Segoe UI",system-ui,sans-serif;color:var(--text-color,#1f2d3a)}',
    '#slo-test-btn{width:24px;height:24px;border-radius:50%;border:1px solid var(--border-color,#7f9bb0);background:var(--content-bg-color,#f8fafc);color:inherit;opacity:.35;cursor:pointer;padding:0;font-size:11px;font-weight:600;line-height:22px;position:relative}',
    '#slo-test-btn:hover,#slo-test-btn:focus-visible,#slo-test.open #slo-test-btn{opacity:1}',
    '#slo-test-badge{position:absolute;top:-6px;right:-8px;min-width:15px;height:15px;border-radius:8px;background:#b3261e;color:#fff;font-size:10px;line-height:15px;padding:0 3px;display:none}',
    '#slo-test-pop{display:none;position:absolute;left:0;bottom:32px;width:330px;max-width:calc(100vw - 20px);box-sizing:border-box;background:var(--content-bg-color,#f8fafc);border:1px solid var(--card-border-color,#c3d1dc);border-radius:6px;box-shadow:0 4px 18px rgba(0,0,0,.18);padding:10px}',
    '#slo-test.open #slo-test-pop{display:block}',
    '#slo-test-pop .h{display:flex;justify-content:space-between;font-weight:600;margin-bottom:6px}',
    '#slo-test-pop .h span{font-weight:400;opacity:.7}',
    '#slo-test-feed{max-height:180px;overflow:auto;margin:0 0 8px;padding:0;list-style:none;font:11px/1.35 ui-monospace,Consolas,monospace}',
    '#slo-test-feed li{padding:1px 0;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}',
    '#slo-test-feed .error{color:#b3261e}#slo-test-feed .warn{color:#8a5a00}#slo-test-feed .delta,#slo-test-feed .snapshot{opacity:.65}',
    'body.dark-mode #slo-test-feed .error{color:#ff8a80}body.dark-mode #slo-test-feed .warn{color:#e3b341}',
    '#slo-test-note{width:100%;box-sizing:border-box;height:46px;resize:vertical;font:inherit;color:inherit;background:transparent;border:1px solid var(--card-border-color,#c3d1dc);border-radius:4px;padding:4px}',
    '#slo-test-pop .b{display:flex;gap:6px;margin-top:6px;flex-wrap:wrap}',
    '#slo-test-pop button{font:inherit;color:inherit;background:var(--tab-bg-color,#d3dfe9);border:1px solid var(--card-border-color,#c3d1dc);border-radius:4px;padding:3px 8px;cursor:pointer}',
    '.slo-test-toggle{margin-top:1.2em;font-size:.85em;opacity:.8}.slo-test-toggle label{cursor:pointer}',
    '.slo-test-toggle small{display:block;opacity:.8;margin-left:1.7em}'
  ].join('\n');

  var root = null, panelOpen = false, styled = false;

  function el(tag, attrs, kids) {
    var n = document.createElement(tag);
    for (var k in attrs || {}) { if (k === 'text') { n.textContent = attrs[k]; } else { n.setAttribute(k, attrs[k]); } }
    (kids || []).forEach(function(c) { n.appendChild(c); });
    return n;
  }
  function addStyle() { if (!styled) { document.head.appendChild(el('style', {text: css})); styled = true; } }

  function buildPanel() {
    addStyle();
    if (root) { root.style.display = ''; return; }
    var btn = el('button', {id: 'slo-test-btn', type: 'button', title: 'Testing mode (F8: note, F9: download)', 'aria-label': 'Testing mode panel', text: 'T'},
                 [el('span', {id: 'slo-test-badge'})]);
    var noteBox = el('textarea', {id: 'slo-test-note', placeholder: 'Note on this moment (Ctrl+Enter adds it)'});
    var add = el('button', {type: 'button', text: 'Add note'});
    var dl = el('button', {type: 'button', text: 'Download log'});
    var cp = el('button', {type: 'button', text: 'Copy summary'});
    var pop = el('div', {id: 'slo-test-pop', role: 'dialog', 'aria-label': 'Testing mode'}, [
      el('div', {'class': 'h'}, [el('div', {text: 'Testing mode'}), el('span', {id: 'slo-test-count'})]),
      el('ul', {id: 'slo-test-feed'}), noteBox, el('div', {'class': 'b'}, [add, dl, cp])
    ]);
    root = el('div', {id: 'slo-test'}, [pop, btn]);
    document.body.appendChild(root);

    btn.onclick = function() { togglePanel(); };
    add.onclick = function() { note(noteBox.value); noteBox.value = ''; };
    noteBox.onkeydown = function(e) {
      e.stopPropagation();
      if (e.key === 'Enter' && (e.ctrlKey || e.metaKey)) { add.onclick(); e.preventDefault(); }
      if (e.key === 'Escape') { togglePanel(false); }
    };
    dl.onclick = download;
    cp.onclick = function() { copySummary(cp); };
    badge();
  }

  function togglePanel(open, focusNote) {
    if (!root) { return; }
    panelOpen = open === undefined ? !panelOpen : open;
    root.classList.toggle('open', panelOpen);
    if (panelOpen) { renderPanel(); if (focusNote) { document.getElementById('slo-test-note').focus(); } }
  }

  function sign(v) { return (v >= 0 ? '+' : '') + round(v); }
  function line(e) {
    switch (e.t) {
      case 'session': return 'run started';
      case 'scene': return '→ ' + e.id;
      case 'choice': return '✓ ' + e.title;
      case 'card': return '▣ ' + e.id;
      case 'draw': return '+ ' + (e.got || 'nothing') + ' from ' + e.deck;
      case 'delta':
        // the per-cell model bookkeeping would drown out everything else
        var ks = Object.keys(e.d).filter(function(k) { return !/^(gs_|aft_|aff_|seg_|cap_hist)/.test(k); });
        return ks.length ? '  ' + ks.slice(0, 6).map(function(k) {
          var v = e.d[k];
          return k + ' ' + (typeof v[0] === 'number' && typeof v[1] === 'number' ? sign(v[1] - v[0]) : v[1]);
        }).join(', ') + (ks.length > 6 ? ' …' : '') : '';
      case 'snapshot': return '— ' + e.date + ' —';
      case 'load': return 'loaded a save';
      case 'error': return '✗ ' + e.kind + ' ' + (e.src || '') + ': ' + e.msg;
      case 'warn': return '! ' + e.kind + ' ' + (e.src || '') + (e.var ? ' ' + e.var + '=' + e.value : '') + (e.msg ? ': ' + e.msg : '');
      case 'note': return '✎ ' + e.text;
      default: return e.t;
    }
  }

  function renderPanel() {
    var feed = document.getElementById('slo-test-feed');
    if (!feed) { return; }
    feed.innerHTML = '';
    log.slice(-80).map(function(e) { return [e, line(e)]; }).filter(function(p) { return p[1]; }).slice(-14).forEach(function(p) {
      feed.appendChild(el('li', {'class': p[0].t, title: p[1], text: p[1]}));
    });
    feed.scrollTop = feed.scrollHeight;
    document.getElementById('slo-test-count').textContent = log.length ? log.length + ' events' : 'starts with a new game';
  }

  function badge() {
    var b = document.getElementById('slo-test-badge');
    if (!b) { return; }
    var n = log.filter(function(e) { return e.t === 'error'; }).length;
    b.textContent = n > 99 ? '99+' : n;
    b.style.display = n ? 'block' : 'none';
  }

  document.addEventListener('keydown', function(e) {
    if (!on || e.ctrlKey || e.altKey || e.metaKey) { return; }
    if (e.key === 'F8') { togglePanel(true, true); e.preventDefault(); }
    if (e.key === 'F9') { download(); e.preventDefault(); }
  });

  // The start-screen checkbox: root.scene.dry places <div data-slo-test="toggle">.
  // Called from onDisplayContent in game.js.
  function fill() {
    var slots = document.querySelectorAll('[data-slo-test="toggle"]');
    if (slots.length) { addStyle(); }
    Array.prototype.forEach.call(slots, function(slot) {
      if (slot.firstChild) { return; }
      var box = el('input', {type: 'checkbox', id: 'slo-test-check'});
      box.checked = on;
      box.onchange = function() { setEnabled(box.checked); };
      slot.className = 'slo-test-toggle';
      slot.appendChild(el('label', {'for': 'slo-test-check'}, [box, document.createTextNode(' Testing mode')]));
      slot.appendChild(el('small', {text: 'Records your choices, the numbers behind them and any errors, so you can download the run as a file.'}));
    });
  }

  function setEnabled(v) {
    on = !!v;
    try { localStorage.setItem(FLAG_KEY, on ? '1' : '0'); } catch (e) {}
    if (on) { loadStored(); buildPanel(); }
    else if (root) { togglePanel(false); root.style.display = 'none'; }
  }

  // ---------------------------------------------------------------- start

  function start() {
    if (!install()) { setTimeout(start, 50); return; }
    if (on) { loadStored(); buildPanel(); }
    safe(function() { fetch('core.js', {method: 'HEAD'}).then(function(r) { build = r.headers.get('Last-Modified'); }, function() {}); });
  }
  if (document.readyState === 'complete') { start(); } else { window.addEventListener('load', start); }

  window.SLO_TEST = {
    fill: fill,
    enable: function() { setEnabled(true); },
    disable: function() { setEnabled(false); },
    isOn: function() { return on; },
    log: function() { return log; },
    jsonl: jsonl,
    summary: summary,
    markdown: markdown,
    download: download,
    note: note,
    clear: function() { log = []; saveNow(); if (panelOpen) { renderPanel(); } badge(); }
  };
}());
