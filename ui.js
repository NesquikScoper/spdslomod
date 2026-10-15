/*
 * DOM renderers for the model. Scenes place <div data-slo="NAME"></div> through {! !} raw HTML,
 * and window.SLO_UI.fill() (called from game.js after every display) fills them in.
 */
(function() {
  var UI = {};
  function Q() { return window.dendryUI.dendryEngine.state.qualities; }
  function esc(s) { return String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;'); }
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
  function sign(n) { return n > 0 ? '+' + n : String(n); }
  function sortedParties(q, key) {
    return window.SLO.PARTIES.slice().sort(function(a, b) { return (q[b + key] || 0) - (q[a + key] || 0); });
  }

  UI.renderers = {
    polls: function(q) {
      var h = '<table class="slo-table">';
      sortedParties(q, '_votes').forEach(function(p) {
        var P = window.SLO.PARTY[p], v = q[p + '_votes'] || 0;
        h += '<tr' + (p === 'lms' ? ' class="slo-me"' : '') + '><td><span class="tooltip-text" title="' + esc(P.full) + '">' + P.name +
          '</span></td><td class="slo-num">' + v.toFixed(1) + '%</td><td class="slo-wide">' + bar(v * 2.5, P.color) + '</td></tr>';
      });
      return h + '</table>';
    },
    electorate: function(q) {
      var r = window.SLO.compute(q), h = '';
      window.SLO.DEMOS.forEach(function(d) {
        var D = window.SLO.DEMO[d], m = q['mood_' + d] || 0;
        var top = window.SLO.PARTIES.slice().sort(function(a, b) { return r.shares[d][b] - r.shares[d][a]; }).slice(0, 3);
        var lms = Math.round(r.shares[d].lms);
        var sg = window.SLO.SEG_SHARE[d].map(function(x) { return Math.round(x * 100); });
        h += '<div class="slo-card"><b>' + D.name + '</b> <span class="slo-dim">' + D.size + '% of voters &middot; left ' + sg[0] +
          ', centre ' + sg[1] + ', right ' + sg[2] + '</span><br>' +
          '<span class="slo-dim">' + esc(D.blurb) + '</span><br>Mood: <b style="color:' + moodColor(m) + '">' + moodWord(m) + '</b>' +
          ' &middot; Leans: ' + top.map(function(p) { return window.SLO.PARTY[p].name + ' ' + Math.round(r.shares[d][p]) + '%'; }).join(', ') +
          (top.indexOf('lms') < 0 ? ' &middot; LMŠ ' + lms + '%' : '') + '</div>';
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
          line = 'Trusted most: <b>' + (o ? window.SLO.PARTY[o].name : 'nobody') + '</b> &middot; LMŠ credibility: <b>' + sign(mine) + '</b>';
          if (q['own_progress_' + i] > 0) { line += ' <span class="slo-dim">(' + q['own_progress_' + i] + '/3 toward the next point)</span>'; }
          if (q['cooldown_' + i] > 0) { line += ' <span class="slo-dim">(damaged; ' + q['cooldown_' + i] + ' months)</span>'; }
        } else {
          line = 'LMŠ position: <b>' + sign(mine) + '</b> <span class="slo-dim">(' + (mine > 0 ? I.plus : (mine < 0 ? I.minus : 'vague')) + ')</span>';
        }
        h += '<div class="slo-card"><b>' + I.name + '</b> <span class="slo-dim">' + (I.valence ? 'who delivers?' : 'which side?') + '</span>' +
          bar((q['sal_' + i] || 0) * 30, '#555') + line + '</div>';
      });
      return h + '<p class="slo-dim">Only the six issues highest on the agenda are shown. Raising one pushes the others down.</p>';
    },
    relations: function(q) {
      var rows = [['rel_est', 'The Establishment', 'Favours now, bills later.'], ['rel_media', 'Media', 'Sets how loud scandals get.'],
        ['rel_ngo', 'NGOs and civil society', 'Credibility and mobilisation.'], ['rel_mayors', 'Mayors and local lists', 'Regional reach. Where LMŠ came from.']];
      var h = '';
      rows.forEach(function(r) {
        h += '<div class="slo-card"><b>' + r[1] + '</b> <span class="slo-num">' + Math.round(q[r[0]] || 0) + '</span>' + bar(q[r[0]] || 0, '#2c7fb8') +
          '<span class="slo-dim">' + r[2] + (r[0] === 'rel_est' ? ((q.rel_est || 0) < 25 ? ' <b>Cold: it is looking for someone else to back' + ((q.rel_est || 0) < 20 && q.in_government ? ', and the papers have turned' : '') + '.</b>' : ((q.rel_est || 0) >= 70 ? ' <b>Close: people are starting to say you are its creature.</b>' : '')) : '') + '</span></div>';
      });
      return h;
    },
    party: function(q) {
      var rows = [['cohesion', 'Group cohesion', '#8e44ad'], ['roots', 'Roots (members, branches)', '#27ae60']];
      var h = '';
      rows.forEach(function(r) {
        h += '<div><b>' + r[1] + '</b> <span class="slo-num">' + Math.round(q[r[0]] || 0) + '</span>' + bar(q[r[0]] || 0, r[2]) + '</div>';
      });
      h += '<div>Support that depends on Šarec personally: <b>' + (q.leader_dependence || 0) + '%</b></div>';
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
    coalition: function(q) {
      if (!q.in_government && !q.forming) { return ''; }
      var n = window.SLO.govSeats(q), support = q.levica_support ? (q.levica_r || 0) : 0;
      var names = window.SLO.PARTIES.filter(function(p) { return q['gov_' + p]; }).map(function(p) {
        return window.SLO.PARTY[p].name + ' (' + (q[p + '_r'] || 0) + ')'; });
      return '<div class="slo-card"><b>Coalition: ' + n + ' seats</b>' + (support ? ' + ' + support + ' from Levica\'s support agreement' : '') +
        '<br>' + names.join(' + ') + bar((n + support + 2) / 90 * 100, n + support + 2 >= 46 ? '#27ae60' : '#d68910') +
        '<span class="slo-dim">' + (n + support + 2) + ' of 90 with the two minority MPs; 46 needed to elect a prime minister.</span></div>';
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
