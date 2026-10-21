/*
 * The in-game wiki (window.SLO_WIKI): people, parties and terms.
 *
 * - The entries are in wiki_data.js (window.SLO_WIKI_DATA). Edit them with tools/wiki_editor.html.
 *   A new entry is linked everywhere, with no build step and no markup in the scenes.
 * - annotate(root) finds the first mention of each entry in the game text and turns it into a hover term.
 *   game.js calls it after every display.
 * - open(id) shows the wiki window; the "Wiki" link in the header opens the index.
 *
 * An entry, keyed by a short id:
 *   kind:     'person' | 'party' | 'org' | 'media' | 'term'
 *   title:    the heading
 *   role:     one short line under the title (optional). For a party: its full name
 *   ideology: parties only (optional)
 *   img:      portrait, a path under out/html such as 'img/adv_sarec.jpg' (optional; 5:7 like the cards)
 *   short:    one or two sentences of plain text for the hover box; aim for SHORT_MAX characters or fewer
 *   body:     the full entry in basic markdown (optional): blank line between paragraphs, **bold**, *italic*,
 *             "## " subheading, "- " list item, [text](https://...) for an outside link
 *   aliases:  extra spellings to link in the text (optional, case-sensitive)
 *   hidden:   a quality name (optional). The entry is not in the wiki, and not linked, until that quality is
 *             non-zero. A scene reveals it with one line: on-arrival: wiki_jenull = 1
 *   versions: later texts for the same entry (optional), in order:
 *               [{when: 'a quality name', note: 'one line for the pop-up',
 *                 role, ideology, short, body, img: each replaces the entry's own while the quality is non-zero}]
 *             When several apply, the later one wins field by field.
 *
 * The game shows a pop-up when an entry is revealed or a version starts to apply (check(), called by game.js
 * after every display). What the player has already been told is kept in the save, in Q.wiki_seen.
 *
 * Linked by themselves: the title; a person's surname (the last word of the title); a party's full name (role);
 * and for a term, the title and aliases with the first letter in either case.
 *
 * Keep to the public record. No invented scandals about real, named people.
 */
(function() {
  var WIKI = {};

  WIKI.KINDS = [['person', 'People'], ['party', 'Parties'], ['org', 'Organisations'], ['media', 'Media'], ['term', 'Terms']];
  WIKI.SHORT_MAX = 160;
  WIKI.ENTRIES = window.SLO_WIKI_DATA || {};
  // prefix for portrait paths; the editor in tools/ sets it to reach out/html
  WIKI.base = '';

  // ---------------------------------------------------------------- entries change with the game
  // the game's qualities; the editor has no game and sets WIKI.fake instead
  function state() {
    if (WIKI.fake) { return WIKI.fake; }
    var ui = window.dendryUI;
    return (ui && ui.dendryEngine && ui.dendryEngine.state && ui.dendryEngine.state.qualities) || {};
  }
  function on(q, name) { return !!(name && q[name] && q[name] !== '0'); }
  WIKI.visible = function(id) {
    var E = WIKI.ENTRIES[id];
    return !!E && (!E.hidden || on(state(), E.hidden));
  };
  function activeVersions(E) {
    var q = state();
    return (E.versions || []).filter(function(v) { return on(q, v.when); });
  }
  var VERSION_FIELDS = ['role', 'ideology', 'short', 'body', 'img'];
  // the entry with the given versions laid over it
  WIKI.merge = function(E, versions) {
    var out = {}, k;
    for (k in E) { if (k !== 'versions') { out[k] = E[k]; } }
    (versions || []).forEach(function(v) {
      VERSION_FIELDS.forEach(function(f) { if (v[f]) { out[f] = v[f]; } });
    });
    return out;
  };
  // the entry as the player should see it now
  WIKI.resolve = function(id) {
    var E = WIKI.ENTRIES[id];
    return E ? WIKI.merge(E, activeVersions(E)) : null;
  };

  function esc(s) { return String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;'); }

  // ---------------------------------------------------------------- which spellings link to an entry
  function flipFirst(a) {
    var c = a.charAt(0), up = c.toUpperCase();
    return (c === up ? c.toLowerCase() : up) + a.slice(1);
  }
  WIKI.aliasesOf = function(E) {
    var list = [], out = [];
    if (E.title) { list.push(E.title); }
    if (E.kind === 'person' && E.title && E.title.indexOf(' ') > 0) { list.push(E.title.split(' ').pop()); }
    if (E.kind === 'party' && E.role) { list.push(E.role); }
    list = list.concat(E.aliases || []);
    if (E.kind === 'term') { list = list.concat(list.map(flipFirst)); }
    list.forEach(function(a) { a = String(a).trim(); if (a && out.indexOf(a) < 0) { out.push(a); } });
    return out;
  };

  var matcher = null, prefixed = false, byAlias = null, builtFor = null;
  function visibleKey() { return Object.keys(WIKI.ENTRIES).filter(WIKI.visible).join(','); }
  function build() {
    var aliases = [];
    byAlias = {};
    builtFor = visibleKey();
    builtFor.split(',').filter(Boolean).forEach(function(id) {
      WIKI.aliasesOf(WIKI.ENTRIES[id]).forEach(function(a) {
        if (!byAlias[a]) { byAlias[a] = id; aliases.push(a); }
      });
    });
    // longest first, so "Slovenian Democratic Party" wins over "SD"
    aliases.sort(function(a, b) { return b.length - a.length; });
    var alt = aliases.map(function(a) { return a.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'); }).join('|');
    matcher = null; prefixed = false;
    if (!alt) { return; }
    try {
      matcher = new RegExp('(?<![\\p{L}\\p{N}])(' + alt + ')(?![\\p{L}\\p{N}])', 'gu');
    } catch (e) {
      // no lookbehind (Safari before 16.4): match the character before as group 1 and skip it
      matcher = new RegExp('(^|[^\\p{L}\\p{N}])(' + alt + ')(?![\\p{L}\\p{N}])', 'gu');
      prefixed = true;
    }
  }
  // call after changing ENTRIES at run time (the editor does)
  WIKI.refresh = function() { matcher = null; byAlias = null; };

  // Link the first mention of each entry under root. Text inside links and headings is left alone.
  WIKI.annotate = function(root, skipId) {
    if (!root) { return; }
    // hidden entries are not linked, so the list is rebuilt when one is revealed
    if (!byAlias || builtFor !== visibleKey()) { build(); }
    if (!matcher) { return; }
    var seen = {}, nodes = [], node, walker;
    if (skipId) { seen[skipId] = 1; }
    Array.prototype.forEach.call(root.querySelectorAll('.wiki-term'), function(el) { seen[el.getAttribute('data-wiki')] = 1; });
    walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT, {acceptNode: function(n) {
      return n.parentElement && n.parentElement.closest('a, button, h1, h2, h3, script, style, .wiki-term, [data-tip]') ?
        NodeFilter.FILTER_REJECT : NodeFilter.FILTER_ACCEPT;
    }});
    while ((node = walker.nextNode())) { nodes.push(node); }
    nodes.forEach(function(n) {
      var text = n.nodeValue, last = 0, m, id, frag = null, span;
      matcher.lastIndex = 0;
      while ((m = matcher.exec(text))) {
        var word = prefixed ? m[2] : m[1], at = m.index + (prefixed ? m[1].length : 0);
        id = byAlias[word];
        if (seen[id]) { continue; }
        seen[id] = 1;
        if (!frag) { frag = document.createDocumentFragment(); }
        frag.appendChild(document.createTextNode(text.slice(last, at)));
        span = document.createElement('span');
        span.className = 'wiki-term';
        span.setAttribute('data-wiki', id);
        span.setAttribute('tabindex', '0');
        span.setAttribute('role', 'button');
        span.textContent = word;
        frag.appendChild(span);
        last = at + word.length;
      }
      if (frag) {
        frag.appendChild(document.createTextNode(text.slice(last)));
        n.parentNode.replaceChild(frag, n);
      }
    });
  };

  // ---------------------------------------------------------------- basic markdown for the full entry
  function inline(s) {
    return esc(s)
      .replace(/\*\*([^*]+)\*\*/g, '<b>$1</b>')
      .replace(/\*([^*]+)\*/g, '<i>$1</i>')
      .replace(/\[([^\]]+)\]\((https?:\/\/(?:[^()\s]|\([^()\s]*\))+)\)/g, '<a href="$2" target="_blank" rel="noopener">$1</a>');
  }
  WIKI.markdown = function(text) {
    var h = '';
    String(text || '').replace(/\r/g, '').split(/\n\s*\n/).forEach(function(block) {
      var lines = block.split('\n').map(function(l) { return l.trim(); }).filter(Boolean);
      if (!lines.length) { return; }
      if (lines.every(function(l) { return /^[-*] /.test(l); })) {
        h += '<ul>' + lines.map(function(l) { return '<li>' + inline(l.slice(2)) + '</li>'; }).join('') + '</ul>';
      } else if (/^#{1,3} /.test(lines[0]) && lines.length === 1) {
        h += '<h4>' + inline(lines[0].replace(/^#+ /, '')) + '</h4>';
      } else {
        h += '<p>' + inline(lines.join(' ')) + '</p>';
      }
    });
    return h;
  };

  // ---------------------------------------------------------------- what an entry looks like
  function kindName(k) { var r = WIKI.KINDS.filter(function(x) { return x[0] === k; })[0]; return r ? r[1] : ''; }
  function subtitle(E) {
    var ideo = E.kind === 'party' ? E.ideology : '';
    if (E.role && ideo) return E.role + ' (' + ideo + ')';
    return E.role || ideo || '';
  }
  function portrait(E) {
    return E.img ? '<img class="wiki-portrait" src="' + esc(WIKI.base + E.img) + '" alt="' + esc(E.title || '') + '">' : '';
  }
  WIKI.tipHTML = function(E) {
    return portrait(E) + '<b>' + esc(E.title || '') + '</b>' +
      (subtitle(E) ? '<span class="wiki-role">' + esc(subtitle(E)) + '</span>' : '') +
      '<span class="wiki-short">' + esc(E.short || '') + '</span><span class="wiki-more">Click for the wiki</span>';
  };
  WIKI.entryHTML = function(E) {
    if (!E) {
      return '<h3>Wiki</h3><p>People, parties and terms that appear in the game. Words with a dotted underline in the text lead here.</p>';
    }
    return portrait(E) + '<span class="wiki-kind">' + kindName(E.kind) + '</span><h3>' + esc(E.title || '') + '</h3>' +
      (subtitle(E) ? '<p class="wiki-role">' + esc(subtitle(E)) + '</p>' : '') +
      '<p>' + esc(E.short || '') + '</p>' + WIKI.markdown(E.body);
  };
  WIKI.sortedIds = function(kind) {
    return Object.keys(WIKI.ENTRIES).filter(function(id) { return WIKI.ENTRIES[id].kind === kind && (WIKI.showHidden || WIKI.visible(id)); })
      .sort(function(a, b) { return String(WIKI.ENTRIES[a].title).localeCompare(String(WIKI.ENTRIES[b].title), 'sl'); });
  };

  // ---------------------------------------------------------------- hover box
  var tip = null;
  function showTip(el) {
    var E = null, r, left, top;
    if (el.hasAttribute('data-tip')) {
      // a stat or meter: data-tip-title (optional) and data-tip, plain text
      E = {html: (el.getAttribute('data-tip-title') ? '<b>' + esc(el.getAttribute('data-tip-title')) + '</b>' : '') +
        '<span class="wiki-short">' + esc(el.getAttribute('data-tip')) + '</span>' +
        (el.hasAttribute('data-wiki-go') ? '<span class="wiki-more">Click for the wiki</span>' : '')};
    } else {
      E = WIKI.resolve(el.getAttribute('data-wiki'));
      if (!E || el.closest('#wiki, .wiki-static')) { return; }
    }
    if (!tip) {
      tip = document.createElement('div');
      tip.id = 'wiki-tip';
      tip.className = 'wiki-tip';
      tip.setAttribute('role', 'tooltip');
      document.body.appendChild(tip);
    }
    tip.innerHTML = E.html || WIKI.tipHTML(E);
    tip.style.display = 'block';
    r = el.getBoundingClientRect();
    left = Math.max(8, Math.min(r.left, document.documentElement.clientWidth - tip.offsetWidth - 8));
    top = r.bottom + 6;
    if (top + tip.offsetHeight > window.innerHeight - 8) { top = Math.max(8, r.top - tip.offsetHeight - 6); }
    tip.style.left = left + 'px';
    tip.style.top = top + 'px';
  }
  function hideTip() { if (tip) { tip.style.display = 'none'; } }

  // ---------------------------------------------------------------- the wiki window
  function indexHTML(current) {
    var h = '', fresh = state().wiki_new || {};
    WIKI.KINDS.forEach(function(k) {
      var ids = WIKI.sortedIds(k[0]);
      if (!ids.length) { return; }
      h += '<h4>' + k[1] + '</h4><ul>';
      ids.forEach(function(id) {
        h += '<li><a href="#" data-wiki-go="' + esc(id) + '"' + (id === current ? ' class="current"' : '') + '>' + esc(WIKI.ENTRIES[id].title) +
          (fresh[id] ? ' <span class="wiki-fresh">' + (fresh[id] === 'new' ? 'new' : 'updated') + '</span>' : '') + '</a></li>';
      });
      h += '</ul>';
    });
    return h;
  }
  WIKI.open = function(id) {
    var box = document.getElementById('wiki'), entry, q = state();
    if (!box) { return; }
    hideTip();
    if (id && !WIKI.visible(id)) { id = null; }
    if (id && q.wiki_new && q.wiki_new[id]) { delete q.wiki_new[id]; }
    document.getElementById('wiki-index').innerHTML = indexHTML(id);
    entry = document.getElementById('wiki-entry');
    entry.innerHTML = WIKI.entryHTML(WIKI.resolve(id));
    WIKI.annotate(entry, id);
    entry.scrollTop = 0;
    box.style.display = 'block';
  };
  WIKI.close = function() {
    var box = document.getElementById('wiki');
    if (box) { box.style.display = 'none'; }
  };

  // ---------------------------------------------------------------- pop-ups for new and changed entries
  function toast(id, isNew, note) {
    var box = document.getElementById('wiki-toasts'), E = WIKI.resolve(id), el;
    if (!E || typeof document === 'undefined') { return; }
    if (!box) {
      box = document.createElement('div');
      box.id = 'wiki-toasts';
      box.setAttribute('aria-live', 'polite');
      document.body.appendChild(box);
    }
    el = document.createElement('button');
    el.className = 'wiki-toast';
    el.setAttribute('data-wiki-go', id);
    el.innerHTML = '<span class="wiki-kind">' + (isNew ? 'New in the wiki' : 'Wiki updated') + '</span><b>' + esc(E.title || '') + '</b>' +
      '<span class="wiki-note">' + esc(note || (isNew ? (E.role || '') : '')) + '</span>';
    box.appendChild(el);
    while (box.children.length > 4) { box.removeChild(box.firstChild); }
    el.addEventListener('click', function() { if (el.parentNode) { el.parentNode.removeChild(el); } });
    setTimeout(function() { if (el.parentNode) { el.parentNode.removeChild(el); } }, WIKI.TOAST_MS);
  }
  WIKI.TOAST_MS = 9000;
  // what the player can see of an entry now: '' if hidden, else 'v' and the versions that apply
  function signature(id) {
    if (!WIKI.visible(id)) { return ''; }
    return 'v' + activeVersions(WIKI.ENTRIES[id]).map(function(v) { return '|' + v.when; }).join('');
  }
  // Compare with what the save says the player has been told, and announce the differences.
  WIKI.check = function() {
    var q = state(), first = !q.wiki_seen, seen, shown = 0;
    if (first) { q.wiki_seen = {}; }
    seen = q.wiki_seen;
    Object.keys(WIKI.ENTRIES).forEach(function(id) {
      var now = signature(id), before = seen[id] || '', E = WIKI.ENTRIES[id], added;
      if (now === before) { return; }
      seen[id] = now;
      // nothing to announce at the start of a game, on an old save, or when something stops applying
      if (first || !now) { return; }
      added = activeVersions(E).filter(function(v) { return before.indexOf('|' + v.when) < 0; });
      if (before && !added.length) { return; }
      if (!q.wiki_new) { q.wiki_new = {}; }
      q.wiki_new[id] = before ? 'updated' : 'new';
      if (shown < 4) { toast(id, !before, before ? added[added.length - 1].note : ''); shown += 1; }
    });
  };

  // ---------------------------------------------------------------- events
  if (typeof document !== 'undefined' && document.addEventListener) {
    document.addEventListener('mouseover', function(e) {
      var el = e.target.closest && e.target.closest('.wiki-term, [data-tip]');
      if (el) { showTip(el); }
    });
    document.addEventListener('mouseout', function(e) {
      if (e.target.closest && e.target.closest('.wiki-term, [data-tip]')) { hideTip(); }
    });
    document.addEventListener('focusin', function(e) {
      if (e.target.classList && (e.target.classList.contains('wiki-term') || e.target.hasAttribute('data-tip'))) { showTip(e.target); }
    });
    document.addEventListener('focusout', hideTip);
    document.addEventListener('click', function(e) {
      var go = e.target.closest && e.target.closest('[data-wiki-go]');
      var term = e.target.closest && e.target.closest('.wiki-term');
      if (go) { e.preventDefault(); WIKI.open(go.getAttribute('data-wiki-go')); return; }
      if (term && document.getElementById('wiki')) { e.preventDefault(); WIKI.open(term.getAttribute('data-wiki')); return; }
      if (e.target.id === 'wiki') { WIKI.close(); }
    });
    document.addEventListener('keydown', function(e) {
      if (e.key === 'Escape') { WIKI.close(); return; }
      if ((e.key === 'Enter' || e.key === ' ') && e.target.classList && e.target.classList.contains('wiki-term')) {
        e.preventDefault();
        WIKI.open(e.target.getAttribute('data-wiki'));
      } else if ((e.key === 'Enter' || e.key === ' ') && e.target.hasAttribute && e.target.hasAttribute('data-wiki-go') && e.target.hasAttribute('data-tip')) {
        // a stat label with its own hover that also opens a wiki entry (ui.js, Politics tab)
        e.preventDefault();
        WIKI.open(e.target.getAttribute('data-wiki-go'));
      }
    });
  }

  window.SLO_WIKI = WIKI;
}());
