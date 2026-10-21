/*
 * DOM renderers for the model. Scenes place <div data-slo="NAME"></div> through {! !} raw HTML,
 * and window.SLO_UI.fill() (called from game.js after every display) fills them in.
 */
(function() {
  var UI = {};
  function Q() { return window.dendryUI.dendryEngine.state.qualities; }
  function esc(s) { return String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;'); }
  function attr(s) { return esc(s).replace(/"/g, '&quot;'); }
  function cap(s) { return s.charAt(0).toUpperCase() + s.slice(1); }
  function captureColor(c) { return c < 15 ? '#27ae60' : (c < 40 ? '#b7950b' : (c < 70 ? '#d35400' : '#c0392b')); }
  // the same bands as source/qdisplays/strain.qdisplay.dry
  function strainWord(s) { return s < 15 ? 'calm' : s < 35 ? 'uneasy' : s < 60 ? 'strained' : s < 80 ? 'fractious' : 'on the brink'; }
  var STRAIN_INFO = 'How close the coalition is to breaking: calm, uneasy, strained, fractious, on the brink. It rises by itself every ' +
    'month in government, faster without a majority, while the Establishment is cold, in a cabinet across the culture war, ' +
    'and for each partner short-changed on ministries. Quarrels and broken promises raise it; concessions, summits and shared ' +
    'posts lower it, and each of them works less if used again within a few months. ' +
    'On the brink, the coalition can collapse.';

  function bar(pct, color) {
    pct = Math.max(0, Math.min(100, pct));
    return '<div class="slo-bar"><div class="slo-bar-fill" style="width:' + pct + '%;background:' + color + '"></div></div>';
  }
  function moodWord(m) {
    if (m <= -50) { return 'furious'; }
    if (m <= -25) { return 'angry'; }
    if (m <= -8) { return 'uneasy'; }
    if (m < 8) { return 'calm'; }
    if (m < 25) { return 'content'; }
    return 'happy';
  }
  function moodColor(m) { return m <= -25 ? '#c0392b' : (m <= -8 ? '#d68910' : (m < 8 ? '#7f8c8d' : '#27ae60')); }
  function relWord(r) {
    var w = [[5, 'hostile'], [15, 'frigid'], [30, 'cold'], [40, 'cool'], [55, 'neutral'], [65, 'warm'], [75, 'friendly']];
    for (var i = 0; i < w.length; i++) { if (r < w[i][0]) { return w[i][1]; } }
    return 'very friendly';
  }
  function sign(n) { return n > 0 ? '+' + n : String(n); }
  function sortedParties(q, key) {
    return window.SLO.PARTIES.slice().sort(function(a, b) { return (q[b + key] || 0) - (q[a + key] || 0); });
  }

  UI.renderers = {
    polls: function(q) {
      var h = '<table class="slo-table">';
      sortedParties(q, '_votes').forEach(function(p) {
        var P = window.SLO.PARTY[p], v = q[p + '_votes'] || 0;
        h += '<tr' + (p === 'lms' ? ' class="slo-me"' : '') + '><td><span class="slo-tip" tabindex="0"' + (p === 'other' ? '' : ' data-wiki-go="' + p + '"') +
          ' data-tip-title="' + attr(P.name) + '" data-tip="' + attr(P.full) + '">' + P.name +
          '</span></td><td class="slo-num">' + v.toFixed(1) + '%</td><td class="slo-wide">' + bar(v * 2.5, P.color) + '</td></tr>';
      });
      // the pool of the undecided, a share of all respondents, as the real polls print it (IDEAS.md section 8)
      h += '<tr class="slo-dim"><td><span class="slo-tip" tabindex="0" data-tip-title="Undecided" data-tip="' +
        attr('Respondents who name no party or do not know yet, as a share of all respondents. The parties above are shares of those who name one.') +
        '">Undecided</span></td><td class="slo-num">' + (q.undecided || 0).toFixed(1) + '%</td><td class="slo-wide"></td></tr>';
      return h + '</table>';
    },
    electorate: function(q) {
      var h = '', r = {shares: {}};
      // the shares stored by the last recompute (as the Polls tab); computed live only for a save without them
      if (q['gs_' + window.SLO.DEMOS[0] + '_lms'] === undefined) { r = window.SLO.compute(q); } else {
        window.SLO.DEMOS.forEach(function(d) {
          r.shares[d] = {};
          window.SLO.PARTIES.forEach(function(p) { r.shares[d][p] = q['gs_' + d + '_' + p] || 0; });
        });
      }
      window.SLO.DEMOS.forEach(function(d) {
        var D = window.SLO.DEMO[d], m = q['mood_' + d] || 0;
        var top = window.SLO.PARTIES.slice().sort(function(a, b) { return r.shares[d][b] - r.shares[d][a]; }).slice(0, 3);
        var lms = Math.round(r.shares[d].lms);
        var sg = window.SLO.SEG_SHARE[d].map(function(x) { return Math.round(x * 100); });
        h += '<div class="slo-card"><b>' + D.name + '</b> <span class="slo-dim">' + D.size + '% of voters &middot; left ' + sg[0] +
          ', centre ' + sg[1] + ', right ' + sg[2] + '</span><br>' +
          '<span class="slo-dim">' + esc(D.blurb) + '</span><br>Mood: <b style="color:' + moodColor(m) + '">' + moodWord(m) + '</b>' +
          ' &middot; Leans: ' + top.map(function(p) { return window.SLO.PARTY[p].name + ' ' + Math.round(r.shares[d][p]) + '%'; }).join(', ') +
          (top.indexOf('lms') < 0 ? ' &middot; ' + window.SLO.PARTY.lms.name + ' ' + lms + '%' : '') + '</div>';
      });
      return h;
    },
    issues: function(q) {
      var h = '';
      // the six most talked-about issues, plus any with programme work under way
      var list = window.SLO.topIssues(q, 6);
      window.SLO.ISSUES.forEach(function(i) { if (q['own_progress_' + i] > 0 && list.indexOf(i) < 0) { list.push(i); } });
      list.forEach(function(i) {
        var I = window.SLO.ISSUE[i], mine = q['pos_lms_' + i] || 0, line;
        if (I.valence) {
          var o = window.SLO.owner(q, i);
          line = 'Trusted most: <b>' + (o ? window.SLO.PARTY[o].name : 'nobody') + '</b> &middot; ' + window.SLO.PARTY.lms.name + ' credibility: <b>' + sign(mine) + '</b>';
          // corruption: capture discounts it (SLO.pos); show the discount once it is visible at one decimal
          var seen = Math.round(window.SLO.pos(q, 'lms', i) * 10) / 10;
          if (seen !== mine) { line += ' <span class="slo-dim">(' + sign(seen) + ' after capture)</span>'; }
          if (q['own_progress_' + i] > 0) { line += ' <span class="slo-dim">(' + q['own_progress_' + i] + '/3 toward the next point)</span>'; }
          if (q['cooldown_' + i] > 0) { line += ' <span class="slo-dim">(damaged; ' + q['cooldown_' + i] + ' months)</span>'; }
        } else {
          line = window.SLO.PARTY.lms.name + ' position: <b>' + sign(mine) + '</b> <span class="slo-dim">(' + (mine > 0 ? I.plus : (mine < 0 ? I.minus : 'vague')) + ')</span>';
        }
        h += '<div class="slo-card"><b>' + I.name + '</b> <span class="slo-dim">' + (I.valence ? 'who delivers?' : 'which side?') + '</span>' +
          bar((q['sal_' + i] || 0) * 30, '#555') + line + '</div>';
      });
      return h + '<p class="slo-dim">Only the six issues highest on the agenda are shown. Raising one pushes the others down.</p>';
    },
    relations: function(q) {
      // [quality, label, hover text, wiki entry opened on click]
      var rows = [['rel_est', 'The Establishment', 'Favours now, bills later.', 'establishment'], ['rel_media', 'Media', 'Sets how loud scandals get.', 'media'],
        ['rel_ngo', 'NGOs and civil society', 'Credibility and mobilisation.', 'civil_society'],
        ['rel_mayors', 'Mayors and local lists', 'Regional reach. Where Šarec came from.', 'mayors']];
      var h = '';
      rows.forEach(function(r) {
        // the description is hover text on the name (wiki pop-up, data-tip); only warnings about the state stay visible
        var warn = '';
        if (r[0] === 'rel_est') {
          warn = (q.rel_est || 0) < 25 ? 'Cold: it is looking for someone else to back' + ((q.rel_est || 0) < 20 && q.in_government ? ', and the papers have turned' : '') + '.' :
            ((q.rel_est || 0) >= 70 ? 'Close: people are starting to say you are its creature.' : '');
        }
        h += '<div class="slo-card"><b class="slo-tip" tabindex="0" data-wiki-go="' + r[3] + '" data-tip-title="' + attr(r[1]) + '" data-tip="' + attr(r[2]) + '">' + r[1] + '</b> ' +
          '<span class="slo-num">' + Math.round(q[r[0]] || 0) + '</span>' + bar(q[r[0]] || 0, '#2c7fb8') +
          (warn ? '<span class="slo-dim"><b>' + warn + '</b></span>' : '') +
          (r[0] === 'rel_est' ? '<div>Favours owed: <b class="slo-num">' + Math.max(0, Math.round(q.est_debt || 0)) + '</b></div>' : '') + '</div>';
      });
      return h;
    },
    // other parties, split into cabinet, support agreement and opposition once LMŠ governs
    parties: function(q) {
      var S = window.SLO, list = ['sd', 'smc', 'sab', 'desus', 'levica', 'nsi', 'sds', 'sns'];
      var groups = q.in_government ?
        [['In the cabinet', function(p) { return q['gov_' + p]; }],
         ['Support agreement', function(p) { return p === 'levica' && q.levica_support && !q.gov_levica; }],
         ['Opposition', function(p) { return !q['gov_' + p] && !(p === 'levica' && q.levica_support); }]] :
        [['Other parties', function() { return true; }]];
      var h = '';
      groups.forEach(function(g) {
        var ps = list.filter(g[1]);
        if (!ps.length) { return; }
        h += '<h4 class="slo-group">' + g[0] + '</h4>';
        ps.forEach(function(p) {
          var r = Math.round(q['rel_' + p] || 0), note = '';
          if (q.in_government && (q['gov_' + p] || (p === 'levica' && q.levica_support))) {
            note = r < 30 ? ' <b>About to walk out.</b>' : (r < 40 ? ' <b>Close to walking out.</b>' : '');
          }
          if (q.election_done && !q[p + '_r']) { note += ' <span class="slo-dim">Not in parliament.</span>'; }
          h += '<div class="slo-rel"><span class="box" style="background-color:' + S.PARTY[p].color + '"></span> <b>' + S.PARTY[p].name +
            '</b> <span class="slo-dim">' + relWord(r) + '</span> <span class="slo-num">' + r + '</span>' + bar(r, S.PARTY[p].color) +
            (note ? '<span class="slo-dim">' + note + '</span>' : '') + '</div>';
        });
      });
      return h;
    },
    party: function(q) {
      var rows = [['cohesion', 'Group cohesion', '#8e44ad'], ['roots', 'Roots (members, branches)', '#27ae60']];
      var h = '';
      rows.forEach(function(r) {
        h += '<div><b>' + r[1] + '</b> <span class="slo-num">' + Math.round(q[r[0]] || 0) + '</span>' + bar(q[r[0]] || 0, r[2]) + '</div>';
      });
      var who = q.replaced_sarec ? 'the prime minister' : 'Šarec';
      h += '<div><b>' + (q.replaced_sarec ? "The prime minister's" : "Šarec's") + ' personal pull</b> <span class="slo-num">' + (q.leader_bonus || 0).toFixed(1) + '/' + window.SLO.LEADER_MAX + '</span>' +
        bar((q.leader_bonus || 0) / window.SLO.LEADER_MAX * 100, '#00A7E1') +
        (q.gov_lms ? '<span class="slo-dim">Fades a little every month in government.</span>' : '') + '</div>';
      h += '<div>Support that depends on ' + who + ' personally: <b>' + (q.leader_dependence || 0) + '%</b></div>';
      // capture: a word, like mood; hover text on the label and on the value (wiki hover box, data-tip)
      var cb = window.SLO.captureBand(q);
      h += '<div><b class="slo-tip" tabindex="0" data-tip-title="Capture" data-tip="' + attr(window.SLO.CAPTURE_INFO) + '">Capture</b>: ' +
        '<b class="slo-tip" tabindex="0" style="color:' + captureColor(q.captured || 0) + '" data-tip-title="' + attr(cap(cb.name)) +
        '" data-tip="' + attr(cb.text) + '">' + esc(cb.name) + '</b></div>';
      return h;
    },
    challenger: function(q) {
      if (q.ch_consolidated) { return '<div class="slo-card slo-warn"><b>A challenger has consolidated</b> around ' + esc(q.ch_issue_name) + '.</div>'; }
      if (q.ch_active) {
        return '<div class="slo-card slo-warn"><b>Challenger forming</b> on ' + esc(q.ch_issue_name) + ': ' + esc(q.ch_name) + '.' +
          bar(q.ch_momentum || 0, '#c0392b') + '<span class="slo-dim">Momentum ' + Math.round(q.ch_momentum || 0) + '/100' +
          (q.est_hedging ? ' &middot; the Establishment is hedging' : '') + '</span></div>';
      }
      var I = q.top_pressure_issue ? window.SLO.ISSUE[q.top_pressure_issue] : null;
      if (I && q.field_open) {
        return '<div class="slo-card slo-warn"><b>The field is open</b> on ' + I.name + '. No new face yet: they arrive when an election is near.</div>';
      }
      return '<div class="slo-card"><span class="slo-dim">No challenger yet.' + (I && q.top_pressure > 0.3 ? ' Discontent is building on <b>' + I.name + '</b>.' : '') + '</span></div>';
    },
    election: function(q) {
      var h = '<svg id="parliament" style="width:500px;height:250px;"></svg><table class="slo-table"><tr><th>Party</th><th>Vote</th><th>Seats</th><th></th></tr>';
      sortedParties(q, '_votes').forEach(function(p) {
        var P = window.SLO.PARTY[p], d = (q[p + '_r'] || 0) - (q['old_' + p + '_r'] || 0);
        h += '<tr' + (p === 'lms' ? ' class="slo-me"' : '') + '><td><span class="box" style="background-color:' + P.color + '"></span> ' + P.name +
          '</td><td class="slo-num">' + (q[p + '_votes'] || 0).toFixed(1) + '%</td><td class="slo-num">' + (q[p + '_r'] || 0) +
          '</td><td class="slo-dim">' + (p === 'other' ? 'below 4%' : esc(P.full)) + '</td></tr>';
      });
      h += '<tr><td>Minorities</td><td></td><td class="slo-num">2</td><td class="slo-dim">Italian and Hungarian seats</td></tr></table>';
      return h;
    },
    // the post screen in the coalition builder: what each party holds and how each partner feels about it
    posts: function(q) {
      var S = window.SLO, h = '<table class="slo-table"><tr><th>Party</th><th>Holds</th><th></th></tr>';
      S.PARTIES.filter(function(p) { return p === 'lms' || (q['gov_' + p] && p !== 'levica'); }).forEach(function(p) {
        var m = p === 'lms' ? '' : S.postMood(q, p);
        // signing short costs goodwill (SLO.SIGN_REL); under 30 a partner leaves the government
        if (m === 'short-changed' && (q['rel_' + p] || 0) + S.SIGN_REL['short-changed'] < 30) { m = 'short-changed, and would leave'; }
        h += '<tr' + (p === 'lms' ? ' class="slo-me"' : '') + '><td><span class="box" style="background-color:' + S.PARTY[p].color + '"></span> ' +
          esc(S.PARTY[p].name) + '</td><td>' + esc(cap(S.postsOf(q, p))) + '</td><td>' + (m.indexOf('short-changed') === 0 ? '<b>' + m + '</b>' : m) + '</td></tr>';
      });
      return h + '</table>';
    },
    coalition: function(q) {
      if (!q.in_government && !q.forming) { return ''; }
      var n = window.SLO.govSeats(q), support = q.levica_support ? (q.levica_r || 0) : 0;
      // each party's name carries its patronage as hover text (IDEAS.md 7h); the label links to the Cartel party entry
      var names = window.SLO.PARTIES.filter(function(p) { return q['gov_' + p]; }).map(function(p) {
        var pat = window.SLO.patronage(p), nm = window.SLO.PARTY[p].name;
        var tip = 'Patronage: ' + pat + '. ' + (window.SLO.PATRONAGE_WHY[p] || '') +
          (p === 'lms' ? '' : (pat === 'none' ? ' Cleaning up costs nothing with them.' :
            (pat === 'deep' ? ' Cleaning up costs most with them, and their people are the likeliest to embarrass you.' :
            ' Cleaning up costs something with them.'))) +
          // the posts it holds, and, for a partner, how it feels about them (IDEAS.md 1a)
          (q.posts_signed ? ' Holds ' + window.SLO.postsOf(q, p) + '.' +
            (p === 'lms' ? '' : (q['shortchanged_' + p] ? ' Feels short-changed.' : ' ' + cap(window.SLO.postMood(q, p)) + '.')) : '');
        return '<span class="slo-tip" tabindex="0" data-wiki-go="cartel_party" data-tip-title="' + attr(nm) + '" data-tip="' + attr(tip) + '">' +
          nm + '</span> (' + (q[p + '_r'] || 0) + ')'; });
      var total = n + support + 2;
      var seatTip = total + ' of 90 with the two minority MPs; 46 are needed to elect a prime minister and pass laws.' +
        (q.levica_support ? ' If Levica\'s relation with you falls below 30, it withdraws its support.' : '') +
        (q.in_government ? ' A cabinet partner whose relation with you turns cold or worse leaves the government.' : '');
      var h = '<div class="slo-card"><b class="slo-tip" tabindex="0" data-tip-title="Coalition" data-tip="' + attr(seatTip) + '">Coalition: ' + n + ' seats</b>' +
        (support ? ' + ' + support + ' from Levica' : '') +
        '<br>' + names.join(' + ') + bar(total / 90 * 100, total >= 46 ? '#27ae60' : '#d68910') +
        (q.levica_support ? '<div>Levica supports the government from outside the cabinet.</div>' : '') +
        // Levica's list, as words (IDEAS.md 10a)
        (q.levica_support && q.lev_list ? '<div class="slo-dim">Levica&rsquo;s list: ' + window.SLO.levList(q).map(function(x) { return esc(x.title) + ': ' + x.word; }).join(' &middot; ') + '</div>' : '') +
        (q.levica_gone ? '<div>Levica has withdrawn its support.</div>' : '');
      if (q.in_government) {
        h += '<b class="slo-tip" tabindex="0" data-wiki-go="coalition_strain" data-tip-title="Coalition strain" data-tip="' + attr(STRAIN_INFO) + '">Strain</b>: <b>' + strainWord(q.coalition_strain || 0) + '</b>';
        if (q.gov_nsi && window.SLO.span(q) >= 2) { h += '<div>A cabinet across the culture war: it frays faster.</div>'; }
      }
      return h + '</div>';
    }
  };

  UI.parliament = function(q) {
    var svg = document.getElementById('parliament');
    if (!svg || !window.d3 || !window.d3.parliament || svg.getAttribute('data-done')) { return; }
    svg.setAttribute('data-done', '1');
    var order = ['levica', 'sd', 'lms', 'sab', 'smc', 'desus', 'nsi', 'sds', 'sns'];
    var data = order.filter(function(p) { return q[p + '_r'] > 0; }).map(function(p) {
      return {id: p, legend: window.SLO.PARTY[p].name, name: window.SLO.PARTY[p].name, seats: q[p + '_r'], color: window.SLO.PARTY[p].color};
    });
    data.splice(Math.floor(data.length / 2), 0, {id: 'minority', legend: 'Minorities', name: 'Minorities', seats: 2, color: '#cccccc'});
    var width = Math.min(500, document.getElementById('content').offsetWidth - 50);
    var parliament = window.d3.parliament();
    parliament.width(width).height(width / 2).innerRadiusCoef(0.4);
    parliament.enter.fromCenter(true).smallToBig(true);
    window.d3.select('#parliament').datum(data).call(parliament);
  };

  UI.fill = function() {
    if (!window.dendryUI || !window.dendryUI.dendryEngine) { return; }
    var q = Q();
    window.SLO.lmsName(q);
    var side = document.getElementById('stats_sidebar');
    if (side) { side.style.visibility = q.started ? 'visible' : 'hidden'; }
    var els = document.querySelectorAll('[data-slo]');
    for (var i = 0; i < els.length; i++) {
      var name = els[i].getAttribute('data-slo');
      if (name === 'election' && els[i].getAttribute('data-filled')) { continue; }
      if (UI.renderers[name]) { els[i].innerHTML = UI.renderers[name](q); els[i].setAttribute('data-filled', '1'); }
    }
    UI.parliament(q);
  };

  window.SLO_UI = UI;
}());
