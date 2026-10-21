/*
 * Vote model for "Slovenian Liberalism: A Story of Decline".
 * Pure JS, no DOM: loaded in the browser as window.SLO and in Node by tools/.
 * All dynamic state lives in flat qualities on Q so .dry one-liners can touch it:
 *   mood_<demo>, sal_<issue>, pos_<party>_<issue>, aff_<demo>_<party>
 */
(function(root) {
  var SLO = {};

  // ---------------------------------------------------------------- data
  SLO.PARTIES = ['lms', 'sds', 'sd', 'smc', 'levica', 'nsi', 'sab', 'desus', 'sns', 'other'];
  // LMŠ's name after a rebranding: whos_in_charge sets lms_short and lms_full, which scenes show as [+ lms_short +]
  SLO.lmsName = function(Q) {
    SLO.PARTY.lms.name = (typeof Q.lms_short === 'string' && Q.lms_short) || 'LMŠ';
    SLO.PARTY.lms.full = (typeof Q.lms_full === 'string' && Q.lms_full) || 'List of Marjan Šarec';
    return SLO.PARTY.lms.name;
  };
  SLO.PARTY = {
    lms:    {name: 'LMŠ',    full: 'List of Marjan Šarec',            color: '#00A7E1'},
    sds:    {name: 'SDS',    full: 'Slovenian Democratic Party',      color: '#F5D800'},
    sd:     {name: 'SD',     full: 'Social Democrats',                color: '#E3000F'},
    smc:    {name: 'SMC',    full: 'Modern Centre Party',             color: '#1B4D9B'},
    levica: {name: 'Levica', full: 'The Left',                        color: '#8B0000'},
    nsi:    {name: 'NSi',    full: 'New Slovenia',                    color: '#008B8B'},
    sab:    {name: 'SAB',    full: 'Party of Alenka Bratušek',        color: '#7B3FA0'},
    desus:  {name: 'DeSUS',  full: 'Pensioners\' Party',              color: '#8DC63F'},
    sns:    {name: 'SNS',    full: 'Slovenian National Party',        color: '#4A4A4A'},
    other:  {name: 'Others', full: 'Parties below the threshold',     color: '#a0a0a0'}
  };

  SLO.DEMOS = ['pensioners', 'urban_prof', 'rural_cath', 'urban_prol', 'suburban', 'public', 'self_emp', 'youth'];
  SLO.BLOCS = ['left', 'centre', 'right'];
  // vol: volatility 0..1 (hand-set). Everything else about a group comes from the SJM blocks below:
  // each group is split into a left, a centre and a right bloc with their own turnout, stances and 2018 vote.
  SLO.DEMO = {
    pensioners: {name: 'Pensioners', vol: 0.2,
      blurb: 'Care about pensions and healthcare. Loyal, and they always vote.'},
    urban_prof: {name: 'Urban professionals', vol: 0.8,
      blurb: 'Ljubljana and Maribor graduates. Rule of law, environment. Fickle.'},
    rural_cath: {name: 'Rural Catholics', vol: 0.2,
      blurb: 'Villages and parishes. Tradition, migration, roads. The right\'s base.'},
    urban_prol: {name: 'Urban proletariat', vol: 0.25,
      blurb: 'Renters and old industrial quarters. Housing and wages. Often stay home.'},
    suburban: {name: 'Suburban workers', vol: 0.75,
      blurb: 'Commuters in small towns. Wages and transport. They swing elections.'},
    public: {name: 'Public sector', vol: 0.5,
      blurb: 'Teachers, nurses, clerks. Pay, healthcare, independent institutions.'},
    self_emp: {name: 'Self-employed', vol: 0.75,
      blurb: 'Small business and trades. Taxes first, then red tape.'},
    youth: {name: 'Youth', vol: 0.85,
      blurb: 'Under 30. Housing, climate, precarious work. Fewer than half vote.'}
  };

  /*SJM_VOTE_BEGIN*/
  // Written by tools/sjm_fit.py from SJM 2018/2, 2019/1 and 2020/1. Do not edit by hand.
  // SIZE: % of the electorate. SEG_SHARE: left, centre, right inside each group.
  // SEG_TURNOUT: base turnout per bloc, scaled to the real 52.6%.
  // GROUP_2018: recalled 2018 vote per bloc, %, columns = SLO.PARTIES.
  SLO.SIZE = {
    pensioners: 31,
    urban_prof: 5,
    rural_cath: 7,
    urban_prol: 4,
    suburban:   17,
    public:     13,
    self_emp:   7,
    youth:      16
  };
  SLO.SEG_SHARE = {
    pensioners: [0.29, 0.46, 0.25],
    urban_prof: [0.4, 0.44, 0.16],
    rural_cath: [0.08, 0.51, 0.41],
    urban_prol: [0.19, 0.63, 0.18],
    suburban:   [0.21, 0.64, 0.15],
    public:     [0.34, 0.51, 0.15],
    self_emp:   [0.29, 0.55, 0.16],
    youth:      [0.22, 0.56, 0.23]
  };
  SLO.SEG_TURNOUT = {
    pensioners: [0.68, 0.54, 0.65],
    urban_prof: [0.57, 0.46, 0.56],
    rural_cath: [0.62, 0.56, 0.63],
    urban_prol: [0.49, 0.4, 0.42],
    suburban:   [0.55, 0.41, 0.52],
    public:     [0.64, 0.46, 0.64],
    self_emp:   [0.59, 0.48, 0.62],
    youth:      [0.53, 0.34, 0.5]
  };
  SLO.GROUP_2018 = {
    pensioners: [
      [16, 2.1, 25.2, 13.3, 17.3, 0.6, 13, 6.9, 1.9, 3.6],
      [19, 18.8, 11.2, 10, 1.6, 4.5, 5.8, 14.7, 1.3, 13],
      [5.4, 56.2, 2.2, 1.7, 1.1, 16, 0.8, 8.2, 0.9, 7.5]],
    urban_prof: [
      [12.8, 2.6, 11.4, 14.3, 36.7, 0.2, 7.7, 2.6, 0.6, 11],
      [17, 17.7, 6.2, 14.8, 5.7, 4.5, 2.3, 5.5, 8.4, 17.8],
      [5.3, 59.2, 1.3, 1.9, 0.3, 16.6, 4.5, 2.4, 1.7, 6.7]],
    rural_cath: [
      [17.8, 5, 14.8, 13, 20.1, 0.3, 10.4, 2.5, 5.2, 11],
      [13.5, 29.3, 6.1, 6.1, 1.4, 6, 1.6, 3.9, 6.4, 25.6],
      [4.9, 53.5, 1.5, 0.9, 0.1, 24, 0.4, 1.2, 2.2, 11.3]],
    urban_prol: [
      [21.8, 1.6, 12.3, 8.7, 32.1, 0.3, 5.2, 2.2, 1, 14.7],
      [17.8, 21.4, 8, 5.3, 1.2, 7.5, 2.4, 4.8, 19.8, 11.7],
      [5.3, 47.5, 4.7, 8.6, 0.3, 14.1, 4.3, 2.6, 1.8, 10.6]],
    suburban:   [
      [17.5, 6.7, 13.2, 20.5, 25.3, 1.5, 5.8, 1, 3.4, 5.1],
      [14.9, 16.7, 7.4, 10.5, 2.1, 3.6, 5.4, 3, 13.6, 22.8],
      [4.4, 52, 2.6, 1.1, 0.2, 14.7, 0.4, 1.4, 7, 16.3]],
    public:     [
      [18.4, 3, 17.9, 12.5, 25.3, 0.1, 9.3, 5.3, 1.9, 6.5],
      [13.7, 22.6, 11.3, 15.7, 3.7, 1.1, 8.9, 3.5, 4.9, 14.7],
      [4.7, 51.1, 2.6, 3.4, 0.2, 19.2, 0.4, 1.9, 2.3, 14.3]],
    self_emp:   [
      [12.6, 1, 14.4, 29.1, 28.3, 0.2, 9.8, 1.4, 0.6, 2.5],
      [17.5, 16.6, 15.7, 11, 2.5, 5.4, 3.9, 3.5, 10.4, 13.5],
      [3.1, 57.5, 1, 7.1, 0.2, 18.4, 3.7, 2, 1.4, 5.5]],
    youth:      [
      [12.7, 2.1, 12.2, 11.9, 39.6, 0.1, 4.4, 1.1, 0.5, 15.3],
      [16, 23, 10.9, 10.5, 2.5, 7.9, 2.8, 2.8, 6, 17.5],
      [3.6, 47.8, 1.4, 5.7, 0.1, 15.8, 0.4, 3.4, 5.7, 16.2]]
  };
  /*SJM_VOTE_END*/

  /*SJM_ATT_BEGIN*/
  // Written by tools/sjm_attitudes.py from SJM 2018/1, 2018/2 and 2020/1. Do not edit by hand.
  // SEG_ST: stance on each positional issue, -1..1, for the left, centre and right of each group.
  // W: issue weights of each group (sum 1): design guesses scaled by measured exposure.
  SLO.SEG_ST = {
    pensioners: [
      {migration: -0.15, culture: 0.45, euroatlantic: 0.32, environment: 0.81, privatisation: -0.64, taxation: -0.53, media: 0.3},
      {migration: -0.48, culture: 0.13, euroatlantic: 0.18, environment: 0.78, privatisation: -0.59, taxation: -0.43, media: 0.1},
      {migration: -0.51, culture: -0.09, euroatlantic: 0.38, environment: 0.73, privatisation: -0.3, taxation: -0.42, media: -0.2}],
    urban_prof: [
      {migration: 0.2, culture: 0.63, euroatlantic: 0.4, environment: 0.76, privatisation: -0.58, taxation: -0.43, media: 1},
      {migration: -0.15, culture: 0.37, euroatlantic: 0.26, environment: 0.7, privatisation: -0.47, taxation: -0.34, media: 0.9},
      {migration: -0.29, culture: 0.05, euroatlantic: 0.38, environment: 0.77, privatisation: -0.23, taxation: -0.34, media: 0.6}],
    rural_cath: [
      {migration: -0.1, culture: 0.4, euroatlantic: 0.2, environment: 0.77, privatisation: -0.56, taxation: -0.49, media: -0.1},
      {migration: -0.43, culture: -0.01, euroatlantic: 0.2, environment: 0.72, privatisation: -0.43, taxation: -0.38, media: -0.3},
      {migration: -0.41, culture: -0.12, euroatlantic: 0.4, environment: 0.7, privatisation: -0.29, taxation: -0.44, media: -0.6}],
    urban_prol: [
      {migration: -0.08, culture: 0.5, euroatlantic: 0.21, environment: 0.83, privatisation: -0.6, taxation: -0.51, media: 0.5},
      {migration: -0.23, culture: 0.28, euroatlantic: 0.23, environment: 0.84, privatisation: -0.39, taxation: -0.44, media: 0.3},
      {migration: -0.38, culture: 0.02, euroatlantic: 0.32, environment: 0.73, privatisation: -0.26, taxation: -0.35, media: 0}],
    suburban:   [
      {migration: -0.16, culture: 0.47, euroatlantic: 0.16, environment: 0.76, privatisation: -0.56, taxation: -0.53, media: 0.3},
      {migration: -0.37, culture: 0.21, euroatlantic: 0.12, environment: 0.66, privatisation: -0.39, taxation: -0.39, media: 0.1},
      {migration: -0.48, culture: 0.04, euroatlantic: 0.28, environment: 0.63, privatisation: -0.26, taxation: -0.34, media: -0.2}],
    public:     [
      {migration: 0.19, culture: 0.59, euroatlantic: 0.34, environment: 0.79, privatisation: -0.54, taxation: -0.53, media: 0.8},
      {migration: -0.25, culture: 0.35, euroatlantic: 0.19, environment: 0.77, privatisation: -0.45, taxation: -0.4, media: 0.6},
      {migration: -0.36, culture: -0, euroatlantic: 0.29, environment: 0.69, privatisation: -0.2, taxation: -0.36, media: 0.3}],
    self_emp:   [
      {migration: 0.12, culture: 0.59, euroatlantic: 0.39, environment: 0.82, privatisation: -0.5, taxation: -0.45, media: 0.2},
      {migration: -0.33, culture: 0.26, euroatlantic: 0.13, environment: 0.7, privatisation: -0.38, taxation: -0.31, media: 0},
      {migration: -0.33, culture: 0.17, euroatlantic: 0.26, environment: 0.61, privatisation: -0.22, taxation: -0.29, media: -0.3}],
    youth:      [
      {migration: 0.12, culture: 0.58, euroatlantic: 0.48, environment: 0.7, privatisation: -0.44, taxation: -0.49, media: 0.7},
      {migration: -0.13, culture: 0.25, euroatlantic: 0.34, environment: 0.77, privatisation: -0.29, taxation: -0.31, media: 0.5},
      {migration: -0.44, culture: 0.09, euroatlantic: 0.35, environment: 0.77, privatisation: -0.26, taxation: -0.25, media: 0.2}]
  };
  SLO.W = {
    pensioners: {healthcare: 0.15, cost: 0.1, corruption: 0.1, pensions: 0.55, culture: 0.1},
    urban_prof: {healthcare: 0.15, corruption: 0.25, environment: 0.25, media: 0.35},
    rural_cath: {jobs: 0.1, transport: 0.25, pensions: 0.05, migration: 0.25, culture: 0.35},
    urban_prol: {healthcare: 0.1, jobs: 0.3, housing: 0.45, cost: 0.15},
    suburban:   {healthcare: 0.1, jobs: 0.4, housing: 0.1, transport: 0.3, corruption: 0.1},
    public:     {healthcare: 0.3, jobs: 0.4, corruption: 0.1, media: 0.2},
    self_emp:   {jobs: 0.15, transport: 0.1, corruption: 0.2, taxation: 0.55},
    youth:      {jobs: 0.15, housing: 0.4, corruption: 0.1, culture: 0.1, environment: 0.25}
  };
  /*SJM_ATT_END*/

  // Taxation rests on proxy questions (income differences, socialism) that every group answers on the
  // "higher taxes" side. Centre it on the electorate's mean so the stance is relative: the right and the
  // self-employed lean to lower taxes, the left and pensioners to higher ones.
  (function() {
    var sum = 0, n = 0;
    SLO.DEMOS.forEach(function(d) {
      SLO.SEG_ST[d].forEach(function(st, b) { var w = SLO.SIZE[d] * SLO.SEG_SHARE[d][b]; sum += w * st.taxation; n += w; });
    });
    SLO.DEMOS.forEach(function(d) {
      SLO.SEG_ST[d].forEach(function(st) { st.taxation = Math.round((st.taxation - sum / n) * 100) / 100; });
    });
  })();

  // derived per-group values for the sidebar and the challenger maths
  SLO.DEMOS.forEach(function(d) {
    var D = SLO.DEMO[d], t = 0;
    SLO.SEG_SHARE[d].forEach(function(sh, b) { t += sh * SLO.SEG_TURNOUT[d][b]; });
    D.size = SLO.SIZE[d]; D.turnout = t; D.w = SLO.W[d];
  });

  SLO.ISSUES = ['healthcare', 'jobs', 'housing', 'cost', 'transport', 'corruption', 'pensions',
                'migration', 'privatisation', 'taxation', 'euroatlantic', 'environment', 'culture', 'media'];
  // base: baseline salience in 2018 (relative). plus: what + means on positional issues.
  SLO.ISSUE = {
    healthcare:    {name: 'Healthcare',            valence: true,  base: 1.5},
    jobs:          {name: 'Jobs and wages',        valence: true,  base: 1.3},
    housing:       {name: 'Housing',               valence: true,  base: 0.7},
    cost:          {name: 'Cost of living',        valence: true,  base: 0.4},
    transport:     {name: 'Transportation',        valence: true,  base: 0.8},
    corruption:    {name: 'Corruption',            valence: true,  base: 1.8},
    pensions:      {name: 'Pensions',              valence: true,  base: 1.1},
    migration:     {name: 'Migration',             valence: false, base: 1.5, plus: 'more open', minus: 'more closed'},
    privatisation: {name: 'Privatisation',         valence: false, base: 1.0, plus: 'pro-sale', minus: 'anti-sale'},
    taxation:      {name: 'Taxation',              valence: false, base: 0.9, plus: 'lower taxes', minus: 'higher taxes'},
    euroatlantic:  {name: 'Euro-Atlantic relations', valence: false, base: 0.6, plus: 'pro-NATO/EU', minus: 'sceptic'},
    environment:   {name: 'Environment',           valence: false, base: 0.6, plus: 'green', minus: 'growth first'},
    culture:       {name: 'Culture wars',          valence: false, base: 0.8, plus: 'progressive', minus: 'traditional'},
    media:         {name: 'Media and rule of law', valence: false, base: 0.6, plus: 'independent institutions', minus: 'political control'}
  };

  // Party numbers per issue, -2..+2. Valence: ownership. Positional: side and prominence.
  // order: healthcare jobs housing cost transport corruption pensions | migration privatisation taxation euroatlantic environment culture media
  var POS = {
    lms:    [0, 0, 0, 0, 0, 1, 0,    0, 0, 0, 1, 1, 0, 1],   // vague on privatisation until the NLB question
    sds:    [0, 1, 0, 0, 1, 0, 0,   -2, 1, 2, 2, -1, -2, -2],
    sd:     [1, 1, 1, 0, 0, 0, 1,    1, -1, -1, 1, 1, 1, 1],
    smc:    [-1, 1, 0, 0, -1, 0, 0,  0, 1, 1, 2, 0, 1, 1],
    levica: [1, 2, 2, 1, 0, 0, 0,    2, -2, -2, -2, 2, 2, 2],
    nsi:    [1, 1, 0, 0, 0, 0, 0,   -1, 2, 1, 2, 0, -1, -1],   // taxation and culture follow the ideology (IDEOLOGY)
    sab:    [0, 0, 0, 0, 0, 0, 1,    0, 0, 0, 1, 1, 1, 1],
    desus:  [1, 0, 0, 0, 0, 0, 2,    0, -1, 0, 1, 0, 0, 0],
    sns:    [0, 0, 0, 0, 0, 1, 0,   -2, -1, 0, -2, 0, -1, 0],
    other:  [0, 0, 0, 0, 0, 0, 0,    0, 0, 0, 0, 0, 0, 0]
  };

  // Ideology labels. A label can also set positions; changing it (SLO.ideology) moves the party there.
  // The start label must match POS. In the demo only NSi changes: Tonin in March 2018, Pogorelec after the election.
  SLO.IDEOLOGY = {
    sd: 'Social democracy', smc: 'Modern liberalism', sab: 'Social liberalism', desus: "Pensioners' interests",
    nsi: 'Christian democracy', sns: 'Slovenian nationalism', sds: 'Right-wing populism', levica: 'Democratic socialism'
  };
  SLO.IDEOLOGY_POS = {
    'Christian democracy':    {taxation: 1, culture: -1},
    'Christian conservatism': {taxation: 2, culture: -2}
  };
  SLO.ideology = function(Q, party, label) {
    Q['ideology_' + party] = label;
    var ps = SLO.IDEOLOGY_POS[label] || {};
    Object.keys(ps).forEach(function(i) { Q['pos_' + party + '_' + i] = ps[i]; });
  };

  // Affinity priors (identity and loyalty), in appeal points, per group and bloc. Column order = SLO.PARTIES.
  // Written by tools/calibrate.js so that a no-action start reproduces GROUP_2018 in every bloc of every group.
  /*AFF_BEGIN*/
  var AFF = {
    pensioners: [
      [26.8, 3.9, 52.6, 27.5, 35.8, 4.9, 27.8, 15.8, 3, 7.3],
      [12.8, 17.4, 12.3, 9.9, 1.7, 8.3, 6.9, 16.1, 0.1, 12.6],
      [0.5, 64.7, 4, 1.9, 1.5, 21.2, 2, 11.6, 0.1, 8.7]],
    urban_prof: [
      [8.8, 0.6, 13.3, 16, 40.2, 0.1, 9.7, 2.6, 0.2, 11.2],
      [8.7, 11.3, 6.5, 12.4, 7.3, 5.3, 3.4, 4.3, 5.8, 13.7],
      [0.2, 51.6, 2.8, 2.4, 0.1, 17.7, 5.4, 2.4, 1, 6.1]],
    rural_cath: [
      [22.4, 5.7, 24.1, 22.6, 32.5, 4.2, 17.3, 4, 6.8, 17.4],
      [5.7, 21.9, 6.2, 6.5, 2.1, 6.7, 1.6, 3.4, 2.8, 21.7],
      [2, 82.9, 3.3, 2.6, 0.1, 39.2, 0.7, 2.2, 1.2, 18]],
    urban_prol: [
      [13.2, 0.7, 10.9, 7.4, 28, 0.1, 4.9, 1.7, 0.3, 12.6],
      [8.6, 16.2, 6.9, 4, 1.5, 9.2, 2.3, 3.8, 15.3, 9.3],
      [0.1, 48.1, 5.4, 8.6, 1, 17.3, 4.7, 2.8, 1.1, 11]],
    suburban: [
      [13.3, 5.5, 14.4, 23.4, 26.8, 4.5, 6.7, 1.2, 3, 5.5],
      [10.7, 16.1, 8.3, 12.5, 1.4, 6.7, 6.2, 3.5, 13.9, 25.1],
      [4.6, 119.9, 6.3, 3.4, 0.1, 36.9, 1.1, 3.6, 15.4, 38.3]],
    public: [
      [39.4, 6, 43.9, 30.2, 61.6, 0.1, 23.4, 13.2, 4.4, 15.7],
      [14.2, 30.6, 16.7, 21.9, 5.7, 3.7, 13.4, 5.4, 6.3, 20.9],
      [1.9, 78.6, 4.7, 4.5, 0.2, 32.7, 1, 3.6, 2.8, 22.4]],
    self_emp: [
      [7.4, 0.5, 14.9, 31.1, 28.9, 0.1, 10.6, 1.2, 0.3, 2.6],
      [13.3, 17.3, 16.9, 12.8, 1.6, 7, 4.5, 3.6, 10.3, 14.7],
      [1.2, 129.8, 2, 16.8, 0.1, 42.5, 8.5, 4.5, 2.3, 12.5]],
    youth: [
      [10.7, 1.6, 16.2, 15.6, 51.2, 0.1, 6.6, 1.1, 0.1, 19.1],
      [7.4, 16.9, 9.5, 8.6, 4, 10, 3.1, 2, 4.2, 13.6],
      [2.1, 95, 3.9, 11.8, 0.1, 34.6, 1.6, 6.7, 10.5, 32.7]]
  };
  /*AFF_END*/
  SLO.AFF = AFF;
  // Per-party multipliers fitted last by tools/calibrate.js so the national total gives the 2018 result.
  /*AFF_SCALE*/ SLO.AFF_SCALE = [0.8793, 1.1304, 0.9078, 0.9564, 1.0270, 1.1329, 0.8873, 0.9005, 1.2147, 0.9345];
  SLO.TARGET_2018 = {lms: 12.6, sds: 24.9, sd: 9.9, smc: 9.8, levica: 9.3, nsi: 7.2, sab: 5.1, desus: 4.9, sns: 4.2, other: 12.1};

  // Latent challengers by trigger issue.
  SLO.ROSTER = {
    media: 'Robert Golob, an energy executive with a clean technocrat image',
    environment: 'a green list forming around the climate marches',
    healthcare: 'Erik Brecelj, the outspoken surgeon',
    corruption: 'Ivan Gale, a civil servant with a clean-hands reputation, and former minister Jure Leben',
    taxation: 'Boris Popovič, the businessman-mayor',
    jobs: 'Boris Popovič, the businessman-mayor',
    transport: 'Vladimir Prebilič, the mayor of Kočevje',
    euroatlantic: 'Milan Brglez and a left-liberal splinter',
    housing: 'a tenants\' movement looking for a ballot line',
    pensions: 'a new pensioners\' list',
    cost: 'an anti-prices protest list',
    migration: 'a new hard-line list',
    privatisation: 'a "national interest" list',
    culture: 'a single-issue culture-war list'
  };

  // tuning constants
  // The issue term works on CHANGE since the 2018 start: salience x position now, minus the same at the start.
  // The 2018 vote already contains the 2018 agenda, so at the start the term is zero and the affinity
  // table is the survey table. That leaves the strength free to set.
  var K_VAL = 15;         // appeal points per unit of change in weight x salience x ownership
  var K_POS = 40;         // appeal points per unit of change in weight x salience x stance x position
  var K_STRID = 1.5;      // stridency penalty per unit of salience
  var K_GOV = 0.12;       // appeal points per mood point for the PM's party
  var AFT_DECAY = 0.12;   // monthly fade of temporary swings (aft_<demo>_<party>): half gone in about 5 months
  var MIN_APPEAL = 0.3;
  var POS_FLOOR = 0.08;   // weight every voter puts on each positional issue
  var LEADER_DECAY = 0.15;      // leader_bonus lost per month in government
  var LEADER_HIGH = 5;          // above this the bonus is harder to hold:
  var LEADER_DECAY_HIGH = 0.2;  // extra monthly loss per point above LEADER_HIGH
  var BW_LEADER_CAP = 5;        // leader_bonus above this does not feed the bandwagon
  var BW_SUCCESSOR = 0.5;       // a prime minister who replaced Šarec gets this share of the office's rally
  SLO.LEADER_MAX = 10;          // leader_bonus is kept within 0..LEADER_MAX (SLO.recompute)
  // Share of each party's support that rallies to a popular LMŠ prime minister at full bandwagon.
  // From the 2018-2020 polls (research/polls_2018_2020.csv): LMŠ went from 13% to 27% of decided voters
  // in early 2019 while SMC fell from 10% to 2%, SAB halved and SDS lost about five points.
  // Cut from that fit, SDS most (October 2026 playtest: an active government stacked issue wins on top
  // and led SDS by twelve points; the real polls had them about level).
  var BANDWAGON = {smc: 1.8, sab: 1.2, sds: 0.2, desus: 0.25, other: 0.4};   // on the right, 0.3 of these
  var BW_STRAIN = 200;          // strain that costs the whole of the rally's base (bwTarget)
  var BW_FADE_START = 10;       // months as PM after which the novelty wears off...
  var BW_FADE_END = 17;         // ...until here, where the rally levels off
  var BW_FADE_FLOOR = 0.55;
  // The undecided (IDEAS.md section 8). What the rally took stays taken: each party keeps losing its share at the
  // rally's highest (bwp_<party>), LMŠ holds only the current rally, and the difference waits in the pool of the
  // undecided. Parties with roots win some of it back each month; personal vehicles (SNS, SAB, SMC) and the small
  // parties do not. The pool is shown as a share of all respondents; the parties stay shares of the decided.
  var POOL_ROOTED = {sds: 1, nsi: 1, sd: 1, desus: 1, levica: 1};
  var POOL_DRAIN = 0.04;        // share of a rooted party's parked voters that returns each month
  var BW_MAX_TAKE = 0.85;       // the rally never takes more than this share of a party's voters
  SLO.POOL_BASE = 30;           // % of respondents with no party or undecided before the 2018 election (Mediana, Parsifal)
  var POOL_FADE = 0.15;         // monthly fade of the pool's swings from events (und_extra)     // share of the rally left after the fade
  var SAL_BUDGET = SLO.ISSUES.length;   // mean salience is 1
  SLO.SAL0 = {};
  (function() {
    var sum = 0;
    SLO.ISSUES.forEach(function(i) { sum += SLO.ISSUE[i].base; });
    SLO.ISSUES.forEach(function(i) { SLO.SAL0[i] = SLO.ISSUE[i].base * SAL_BUDGET / sum; });
  })();
  SLO.SEATS = 88;
  SLO.THRESHOLD = 4;
  SLO.POLL_MOE = 3.5;   // margin of error of the polls, in points, for a party at 50%
  SLO.PRESSURE_THRESHOLD = 1.0;
  SLO.CHALLENGER_WINDOW = 6;   // a new face appears only this many months or fewer before a scheduled election
  // Capture (IDEAS.md section 5): how far the Establishment is inside the party and the government.
  SLO.CAPTURE_DISCOUNT = 50;   // LMŠ's credibility on corruption is lowered by captured / CAPTURE_DISCOUNT
  SLO.CAPTURE_FADE = 0.03;     // capture fades by this share a month
  SLO.EST_BETA = 2;            // the betrayal rule: losses with the Establishment grow with goodwill x capture (SLO.estHit)
  SLO.SAB_CAPTURE = 35;        // Establishment sabotage needs capture at least this high ...
  SLO.SAB_EST = 25;            // ... and rel_est under this, two months running, in government
  SLO.SAB_COOLDOWN = 18;       // months after sabotage ends before it can start again
  SLO.SAB_PEAK_MONTHS = 4;     // the trigger looks at the highest capture of this many months: a quick clean-up
                               // does not take away the leverage they already have

  function clamp(x, lo, hi) { return x < lo ? lo : (x > hi ? hi : x); }
  function num(x) { return (typeof x === 'number' && !isNaN(x)) ? x : 0; }

  // ---------------------------------------------------------------- init
  SLO.init = function(Q) {
    var i, d, p;
    Q.parties = SLO.PARTIES.slice();
    Q.demos = SLO.DEMOS.slice();
    Q.issues = SLO.ISSUES.slice();
    for (i = 0; i < SLO.ISSUES.length; i++) {
      Q['sal_' + SLO.ISSUES[i]] = SLO.ISSUE[SLO.ISSUES[i]].base;
      Q['own_progress_' + SLO.ISSUES[i]] = 0;
      Q['cooldown_' + SLO.ISSUES[i]] = 0;
      Q['press_' + SLO.ISSUES[i]] = 0;
      for (p = 0; p < SLO.PARTIES.length; p++) {
        Q['pos_' + SLO.PARTIES[p] + '_' + SLO.ISSUES[i]] = POS[SLO.PARTIES[p]][i];
      }
    }
    SLO.normaliseSalience(Q);
    Object.keys(SLO.IDEOLOGY).forEach(function(pp) { Q['ideology_' + pp] = SLO.IDEOLOGY[pp]; });
    for (d = 0; d < SLO.DEMOS.length; d++) {
      Q['mood_' + SLO.DEMOS[d]] = 0;
      for (p = 0; p < SLO.PARTIES.length; p++) {
        Q['aff_' + SLO.DEMOS[d] + '_' + SLO.PARTIES[p]] = 0;   // lasting change on top of the AFF table
        Q['aft_' + SLO.DEMOS[d] + '_' + SLO.PARTIES[p]] = 0;   // temporary change, fades by AFT_DECAY a month
      }
    }
    for (p = 0; p < SLO.PARTIES.length; p++) {
      Q['gov_' + SLO.PARTIES[p]] = 0;
      Q[SLO.PARTIES[p] + '_r'] = 0;
    }
    Q.pm_party = '';
    Q.leader_bonus = 0;
    Q.bandwagon = 0; Q.pm_months = 0;
    Q.roots = 0;
    Q.ch_active = 0; Q.ch_momentum = 0; Q.ch_issue = ''; Q.ch_name = '';
    Q.ch_consolidated = 0; Q.murmur_pending = 0; Q.ch_cooldown = 0;
  };

  SLO.normaliseSalience = function(Q) {
    var sum = 0, i;
    for (i = 0; i < SLO.ISSUES.length; i++) {
      Q['sal_' + SLO.ISSUES[i]] = Math.max(0.1, num(Q['sal_' + SLO.ISSUES[i]]));
      sum += Q['sal_' + SLO.ISSUES[i]];
    }
    for (i = 0; i < SLO.ISSUES.length; i++) {
      Q['sal_' + SLO.ISSUES[i]] *= SAL_BUDGET / sum;
    }
  };

  // ---------------------------------------------------------------- vote model
  // Returns {votes: {party: %}, shares: {demo: {party: %}}, seg: {demo: [{party: %} per bloc]}, turnout: %}
  // A party's number on an issue as voters see it: LMŠ's credibility on corruption is discounted by capture.
  SLO.pos = function(Q, party, issue) {
    var v = num(Q['pos_' + party + '_' + issue]);
    if (party === 'lms' && issue === 'corruption') { v = clamp(v - num(Q.captured) / SLO.CAPTURE_DISCOUNT, -2, 2); }
    return v;
  };
  SLO.compute = function(Q, opts) {
    opts = opts || {};
    var votes = {}, shares = {}, seg = {}, total = 0, parkedW = 0, stayW = 0;
    // a successor's rally belongs to the office, not to the person: it stays in the noLeader run
    var bw = (opts.noLeader && !Q.replaced_sarec) ? 0 : clamp(num(Q.bandwagon), 0, 1);
    SLO.PARTIES.forEach(function(p) { votes[p] = 0; });
    SLO.DEMOS.forEach(function(d) {
      var D = SLO.DEMO[d];
      var mood = num(Q['mood_' + d]);
      var sour = Math.max(0, -mood) / 100;
      var amp = 1 + D.vol * sour;                       // volatile groups move to issue owners
      var stay = 1 - (1 - D.vol) * sour * 0.5;          // loyal groups stay home
      var groupVotes = {}, groupTotal = 0;
      SLO.PARTIES.forEach(function(p) { groupVotes[p] = 0; });
      seg[d] = [];
      SLO.BLOCS.forEach(function(blocName, b) {
        var st = SLO.SEG_ST[d][b], appeals = {}, sum = 0;
        SLO.PARTIES.forEach(function(p, pi) {
          var a = AFF[d][b][pi] * SLO.AFF_SCALE[pi] + num(Q['aff_' + d + '_' + p]) + num(Q['aft_' + d + '_' + p]);
          var valTerm = 0, posTerm = 0, strid = 0;
          SLO.ISSUES.forEach(function(i, ii) {
            var pos = SLO.pos(Q, p, i), pos0 = POS[p][ii];
            var sal = num(Q['sal_' + i]), sal0 = SLO.SAL0[i];
            var delta = sal * pos - sal0 * pos0;
            if (SLO.ISSUE[i].valence) {
              valTerm += (D.w[i] || 0) * delta;
            } else {
              // everyone has a view on the positional issues; a group's own issues count on top
              posTerm += ((D.w[i] || 0) + POS_FLOOR) * (st[i] || 0) * delta;
              // a strident position puts off voters with no strong view, more so when the issue is hot
              if (Math.abs(st[i] || 0) < 0.3) {
                strid += K_STRID * (sal * (Math.abs(pos) >= 2 ? 1 : 0) - sal0 * (Math.abs(pos0) >= 2 ? 1 : 0));
              }
            }
          });
          a += amp * (K_VAL * valTerm + K_POS * posTerm) - strid;
          if (Q['gov_' + p]) {
            var blame = (Q.pm_party === p) ? 1 : 0.4;
            if (p === 'lms') { blame *= (1 - num(Q.roots) / 200); }
            // in the campaign the outgoing cabinet takes the blame for a sour mood but no credit for a good one
            a += K_GOV * (Q.in_campaign ? Math.min(0, mood) : mood) * blame;
          }
          if (p === 'lms') {
            a += num(Q.roots) * 0.06;
            if (!opts.noLeader) { a += num(Q.leader_bonus); }
          }
          a = Math.max(MIN_APPEAL, a);
          appeals[p] = a; sum += a;
        });
        // borrowed support: voters of nearby parties line up behind the prime minister; the right mostly does not
        // what it took at its highest is gone from the party; LMŠ keeps only the current rally, the rest is undecided
        var parkedCell = 0;
        SLO.PARTIES.forEach(function(p) {
          if (!BANDWAGON[p]) { return; }
          var f = BANDWAGON[p] * (blocName === 'right' ? 0.3 : 1), peak = Math.max(bw, clamp(num(Q['bwp_' + p]), 0, 1));
          if (peak <= 0) { return; }
          var take = Math.min(BW_MAX_TAKE, f * peak) * appeals[p], give = Math.min(BW_MAX_TAKE, f * bw) * appeals[p];
          appeals[p] -= take; appeals.lms += give; parkedCell += take - give;
        });
        var full = D.size * SLO.SEG_SHARE[d][b] * SLO.SEG_TURNOUT[d][b], weight = full * stay;
        parkedW += weight * parkedCell / sum; stayW += full - weight;
        sum -= parkedCell;
        seg[d][b] = {};
        SLO.PARTIES.forEach(function(p) {
          seg[d][b][p] = 100 * appeals[p] / sum;
          groupVotes[p] += weight * appeals[p] / sum;
          votes[p] += weight * appeals[p] / sum;
        });
        groupTotal += weight; total += weight;
      });
      shares[d] = {};
      SLO.PARTIES.forEach(function(p) { shares[d][p] = 100 * groupVotes[p] / groupTotal; });
    });
    SLO.PARTIES.forEach(function(p) { votes[p] = 100 * votes[p] / total; });
    return {votes: votes, shares: shares, seg: seg, turnout: total,
      parked: 100 * parkedW / total, stayed: 100 * stayW / (total + stayW)};
  };

  // Writes poll numbers into Q: <party>_votes, leader_dependence, turnout.
  SLO.recompute = function(Q) {
    // two decimals, so the 0.15 monthly decay is not rounded away
    Q.leader_bonus = clamp(Math.round(num(Q.leader_bonus) * 100) / 100, 0, SLO.LEADER_MAX);
    var r = SLO.compute(Q);
    SLO.PARTIES.forEach(function(p) { Q[p + '_votes'] = Math.round(r.votes[p] * 10) / 10; });
    Q.turnout = Math.round(r.turnout);
    // the pool of the undecided, as a share of all respondents: the base, voters the rally left behind, voters
    // drawn in by the leader's personal pull who have since drifted off, sour groups, and recent events
    Q.undecided = Math.round(clamp(SLO.POOL_BASE + num(Q.und_extra) + 0.3 * r.parked + 0.5 * r.stayed +
      0.4 * Math.max(0, num(Q.lb_peak) - num(Q.leader_bonus)), 5, 60) * 10) / 10;
    // the group shares as of this poll, so the Voters tab agrees with the Polls tab
    SLO.DEMOS.forEach(function(d) { SLO.PARTIES.forEach(function(p) { Q['gs_' + d + '_' + p] = Math.round(r.shares[d][p] * 10) / 10; }); });
    var without = SLO.compute(Q, {noLeader: true}).votes.lms;
    Q.leader_dependence = r.votes.lms > 0 ? Math.round(100 * (r.votes.lms - without) / r.votes.lms) : 0;
    return r;
  };

  // The adviser row (IDEAS.md section 6): adv_<name> = 1 is in the row, 0 on the bench or unavailable.
  // Two advisers at a time besides the prime minister; the shuffle card picks shuf_out (may be '') and shuf_in.
  SLO.ADVISERS = ['golubovic', 'kralj', 'korce', 'crncec', 'heferle', 'joveva', 'bertoncelj', 'golobic'];
  SLO.shuffle = function(Q) {
    if (Q.shuf_out) { Q['adv_' + Q.shuf_out] = 0; }
    if (Q.shuf_in) { Q['adv_' + Q.shuf_in] = 1; }
    Q.shuf_out = ''; Q.shuf_in = ''; Q.shuf_has = 0;
    Q.advisor_action_timer = 4; Q.last_advisor_action = 1;
  };
  // an adviser who can no longer serve leaves the row, freeing the chair (called monthly from post_event)
  SLO.advisersCheck = function(Q) {
    if (Q.kralj_gone) { Q.adv_kralj = 0; }
    // Bertoncelj is LMŠ's finance minister: he is not there if a partner holds finance (IDEAS.md 1a)
    if (Q.finance_minister_resigned || !Q.in_government || SLO.holder(Q, 'finance') !== 'lms') { Q.adv_bertoncelj = 0; }
    if (Q.sab_purged) { Q.adv_golobic = 0; }
    // the adviser who became prime minister leaves the row
    ['golubovic', 'heferle', 'bertoncelj'].forEach(function(n) { if (Q['succ_' + n]) { Q['adv_' + n] = 0; } });
  };

  // LMŠ puts forward a prime minister who is not Šarec: his pull goes with him, the rally starts again
  // from nothing and builds more weakly (BW_SUCCESSOR). Any event that removes Šarec calls this.
  SLO.replaceLeader = function(Q) {
    Q.leader_bonus = 0; Q.bandwagon = 0; Q.pm_months = 0; Q.replaced_sarec = 1;
    Q.bw_follow_seen = 0; Q.bw_stall_seen = 0; Q.bw_end_seen = 0;
    return SLO.recompute(Q);
  };

  // February 2020, after Šarec resigns: the cabinet partners Janša can take (SMC and DeSUS, as happened, and NSi
  // unless Pogorelec leads it), minus any the player has persuaded to stay (held_<party>).
  SLO.jansaSwitchers = function(Q) {
    return ['smc', 'desus', 'nsi'].filter(function(p) {
      return Q['gov_' + p] && num(Q[p + '_r']) > 0 && !Q['held_' + p] && !(p === 'nsi' && Q.nsi_pogorelec);
    });
  };
  // Votes Janša can count on to be elected: SDS, NSi outside the cabinet (not under Pogorelec), SNS, the
  // switchers and the two minority MPs.
  SLO.jansaVotes = function(Q) {
    var v = num(Q.sds_r) + num(Q.sns_r) + 2;
    if (!Q.gov_nsi && !Q.nsi_pogorelec) { v += num(Q.nsi_r); }
    SLO.jansaSwitchers(Q).forEach(function(p) { v += num(Q[p + '_r']); });
    return v;
  };

  // Election: D'Hondt over SLO.SEATS with a 4% threshold. Two minority seats are added by the UI.
  // pollError: the polls were off. Each party's result is drawn around its poll figure with the margin of error
  // of a survey of that size (POLL_MOE points for a party at 50%, less for small ones), then all are rescaled to 100.
  SLO.election = function(Q, pollError) {
    SLO.recompute(Q);
    if (pollError) {
      Q.und_extra = -10;   // just after an election fewer people say they do not know (Mediana: about 20%, then 30% by autumn)
      var sum = 0, drawn = {};
      SLO.PARTIES.forEach(function(pp) {
        var v = num(Q[pp + '_votes']), moe = SLO.POLL_MOE * Math.sqrt(v * (100 - v)) / 50;
        // a normal draw (Box-Muller); 95% of draws fall within the margin, and none beyond 1.5 times it
        var z = Math.sqrt(-2 * Math.log(1 - Math.random())) * Math.cos(2 * Math.PI * Math.random());
        Q[pp + '_poll'] = v;
        drawn[pp] = Math.max(0.1, v + clamp(z / 1.96, -1.5, 1.5) * moe);
        sum += drawn[pp];
      });
      SLO.PARTIES.forEach(function(pp) { Q[pp + '_votes'] = Math.round(drawn[pp] / sum * 1000) / 10; });
    }
    var seats = {}, eligible = [], n = 0, p, best, bestQ, q;
    SLO.PARTIES.forEach(function(pp) {
      Q['old_' + pp + '_r'] = num(Q[pp + '_r']);
      seats[pp] = 0;
      if (pp !== 'other' && Q[pp + '_votes'] >= SLO.THRESHOLD) { eligible.push(pp); }
    });
    while (n < SLO.SEATS && eligible.length) {
      best = null; bestQ = -1;
      for (p = 0; p < eligible.length; p++) {
        q = Q[eligible[p] + '_votes'] / (seats[eligible[p]] + 1);
        if (q > bestQ) { bestQ = q; best = eligible[p]; }
      }
      seats[best] += 1; n += 1;
    }
    SLO.PARTIES.forEach(function(pp) { Q[pp + '_r'] = seats[pp]; });
    return seats;
  };

  // ---------------------------------------------------------------- helpers for events and cards
  // Mood change for an issue, scaled by how much each group cares about it.
  // A group with weight 0.4 on the issue gets the full amount.
  SLO.moodEvent = function(Q, issue, amount) {
    SLO.DEMOS.forEach(function(d) {
      var w = SLO.DEMO[d].w[issue] || 0;
      if (w > 0) { SLO.mood(Q, d, amount * Math.min(1, w / 0.4)); }
    });
  };
  SLO.mood = function(Q, demo, amount) {
    Q['mood_' + demo] = clamp(num(Q['mood_' + demo]) + amount, -100, 100);
  };
  SLO.moodAll = function(Q, amount) {
    SLO.DEMOS.forEach(function(d) { SLO.mood(Q, d, amount); });
  };
  // Raise or lower an issue on the agenda. Zero-sum: everything else shrinks.
  SLO.salience = function(Q, issue, amount) {
    Q['sal_' + issue] = num(Q['sal_' + issue]) + amount;
    SLO.normaliseSalience(Q);
  };
  // Direct change to a party's number on an issue. A loss for LMŠ starts a cooldown.
  SLO.own = function(Q, party, issue, step) {
    var k = 'pos_' + party + '_' + issue;
    Q[k] = clamp(num(Q[k]) + step, -2, 2);
    if (party === 'lms' && step < 0 && SLO.ISSUE[issue].valence) {
      Q['cooldown_' + issue] = 4; Q['own_progress_' + issue] = 0;
    }
  };
  // One qualifying step toward +1 ownership for LMŠ. Three steps make a point. Returns true on a gain.
  SLO.claim = function(Q, issue) {
    if (!SLO.ISSUE[issue].valence) { return false; }   // credibility exists only on who-delivers issues
    if (num(Q['cooldown_' + issue]) > 0) { return false; }
    if (num(Q['pos_lms_' + issue]) >= 2) { return false; }
    Q['own_progress_' + issue] = num(Q['own_progress_' + issue]) + 1;
    if (Q['own_progress_' + issue] >= 3) {
      Q['own_progress_' + issue] = 0;
      Q['pos_lms_' + issue] = clamp(num(Q['pos_lms_' + issue]) + 1, -2, 2);
      return true;
    }
    return false;
  };
  SLO.aff = function(Q, demo, party, amount) {
    Q['aff_' + demo + '_' + party] = num(Q['aff_' + demo + '_' + party]) + amount;
  };
  // A temporary swing (a media campaign, a scandal): like aff, but it fades by AFT_DECAY a month.
  SLO.affTemp = function(Q, demo, party, amount) {
    Q['aft_' + demo + '_' + party] = num(Q['aft_' + demo + '_' + party]) + amount;
  };
  // Moves voters from one party to another where `from` actually has voters: each group's change is
  // `amount` times its share of `from` against the national share (0 to 2). temp: fades over time.
  SLO.drain = function(Q, from, to, amount, temp) {
    var r = SLO.compute(Q), nat = Math.max(0.5, r.votes[from]);
    var fn = temp ? SLO.affTemp : SLO.aff;
    SLO.DEMOS.forEach(function(d) {
      var w = clamp(r.shares[d][from] / nat, 0, 2);
      fn(Q, d, from, -amount * w); fn(Q, d, to, amount * w);
    });
  };
  // ---------------------------------------------------------------- text about the coalition
  // Scenes name only the parties that are in the cabinet now. Names as they read in a sentence:
  SLO.TXT = {sd: 'the Social Democrats', smc: 'SMC', sab: 'SAB', desus: 'DeSUS', nsi: 'NSi', levica: 'Levica'};
  var cap1 = function(t) { return t.charAt(0).toUpperCase() + t.slice(1); };
  // the cabinet partners of LMŠ, in the order of SLO.PARTIES
  SLO.partners = function(Q) {
    return SLO.PARTIES.filter(function(p) { return p !== 'lms' && p !== 'other' && Q['gov_' + p]; });
  };
  // ['sd', 'smc', 'sab'] -> 'the Social Democrats, SMC and SAB'
  SLO.names = function(list) {
    var n = list.map(function(p) { return SLO.TXT[p] || SLO.PARTY[p].name; });
    return n.length < 2 ? (n[0] || '') : n.slice(0, -1).join(', ') + ' and ' + n[n.length - 1];
  };
  SLO.Names = function(list) { return cap1(SLO.names(list)); };
  // How partners take a measure: SLO.mind(Q, 'mind', [['sd', 'a good deal'], ['smc', 'a little'], ['sab', 'a little']])
  // -> 'The Social Democrats mind a good deal, SMC and SAB a little.' Parties outside the cabinet are left out,
  // and the first one left keeps the verb. '' when none is a partner.
  SLO.mind = function(Q, verb, pairs) {
    var groups = [];
    pairs.forEach(function(pr) {
      if (!Q['gov_' + pr[0]]) { return; }
      var g = groups[groups.length - 1];
      if (g && g.deg === pr[1]) { g.who.push(pr[0]); } else { groups.push({who: [pr[0]], deg: pr[1]}); }
    });
    if (!groups.length) { return ''; }
    return cap1(groups.map(function(g, k) {
      return SLO.names(g.who) + ' ' + (k ? '' : verb + (g.deg ? ' ' : '')) + g.deg;
    }).join(', ')) + '.';
  };
  // A relation change that only a cabinet partner feels (a grievance inside the coalition)
  SLO.prel = function(Q, party, amount) {
    if (Q['gov_' + party]) { Q['rel_' + party] = num(Q['rel_' + party]) + amount; }
    // on the NSi route, the largest centre-left grievance of a decision; post_event passes 1.5 times it on to Levica
    // (CLOUDIDEAS.md 2b). Losses written directly to rel_<party> are not counted
    if (Q.gov_nsi && amount < 0 && SLO.CENTRE_LEFT.indexOf(party) >= 0 && Q['gov_' + party]) { Q.cl_loss = Math.max(num(Q.cl_loss), -amount); }
  };
  SLO.CENTRE_LEFT = ['sd', 'desus', 'smc', 'sab'];
  // the Family Code vote (family_code_vote, CLOUDIDEAS.md section 5): pass or fail, then NSi. Under Tonin it walks out
  // (goodwill 0: the partner_walkout path); under Pogorelec family_code_nsi asks whether to pay to keep it
  SLO.fcResult = function(Q) {
    Q.fc_pass = Q.fc_yes >= 46 ? 1 : 0;
    if (Q.fc_pass) {
      Q.rel_levica = num(Q.rel_levica) + 4; SLO.rel(Q, 'ngo', 8); Q.wins = num(Q.wins) + 1;
      SLO.salience(Q, 'culture', 0.4);
      SLO.drain(Q, 'lms', 'sds', 0.5, false); SLO.drain(Q, 'lms', 'nsi', 0.3, false);
      Q.coalition_strain = num(Q.coalition_strain) + 15;
    } else {
      Q.cohesion = num(Q.cohesion) - 5;
    }
    if (Q.gov_nsi) { if (Q.nsi_pogorelec) { Q.fc_nsi_pending = 1; } else { Q.rel_nsi = 0; } }
  };
  // cabinet partners polling under `cut` percent, weakest first
  SLO.weakPartners = function(Q, cut) {
    return SLO.partners(Q).filter(function(p) { return num(Q[p + '_votes']) < cut; })
      .sort(function(a, b) { return num(Q[a + '_votes']) - num(Q[b + '_votes']); });
  };
  // Promises made at formation or in the campaign: promise_<key> is 1 while open, 2 when broken, 3 when kept.
  // Breaking one costs mood in the groups that were promised and relations with the party that asked for it.
  SLO.PROMISES = {
    pensions:      {name: 'higher pensions',                     groups: ['pensioners'],           party: 'desus'},
    insurance:     {name: 'abolishing supplemental insurance',   groups: ['public', 'urban_prol'], party: 'levica'},
    housing:       {name: 'public rental housing',               groups: ['youth', 'urban_prol'],  party: 'levica'},
    precarious:    {name: 'a law on precarious work',            groups: ['youth', 'urban_prol'],  party: 'levica'},
    minimum_wage:  {name: 'a higher minimum wage',               groups: ['urban_prol', 'suburban'], party: 'levica'},
    public_pay:    {name: 'public sector pay',                   groups: ['public'],               party: null}
  };
  SLO.keepPromise = function(Q, key) {
    if (Q['promise_' + key] === 1) { Q['promise_' + key] = 3; }
  };
  SLO.breakPromise = function(Q, key) {
    if (Q['promise_' + key] !== 1) { return false; }
    var P = SLO.PROMISES[key];
    Q['promise_' + key] = 2;
    P.groups.forEach(function(d) { SLO.mood(Q, d, -6); });
    if (P.party) { Q['rel_' + P.party] = num(Q['rel_' + P.party]) - 8; }
    Q.und_extra = num(Q.und_extra) + 1.5;
    return true;
  };
  // How loud a scandal gets: 0.5 with friendly editors (rel_media 100), 1.5 with hostile ones (0), about 1 at the start
  SLO.mediaAmp = function(Q) { return 1.5 - clamp(num(Q.rel_media), 0, 100) / 100; };
  SLO.rel = function(Q, actor, amount) {
    Q['rel_' + actor] = clamp(num(Q['rel_' + actor]) + amount, 0, 100);
  };
  // The betrayal rule: a loss of Establishment goodwill from a choice the player makes about the Establishment.
  // base is positive (estHit(Q, 8) costs at least 8). It grows with goodwill x capture: their good ol' boy
  // turning on them, after they covered for him, costs most. Gains do not use it. Returns the loss.
  SLO.estHit = function(Q, base) {
    var R = clamp(num(Q.rel_est), 0, 100), C = clamp(num(Q.captured), 0, 100);
    var loss = base * (1 + SLO.EST_BETA * (R / 100) * (C / 50));
    Q.rel_est = clamp(R - loss, 0, 100);
    return loss;
  };
  // ---------------------------------------------------------------- patronage, clean-up, culture war, partner scandals
  // IDEAS.md section 7. Patronage: how far a party lives off its people in the state (the cartel party). It sets
  // what cleaning up costs with a partner and how likely that partner is to embarrass the coalition. Levica has none.
  SLO.NETWORK = {desus: 1.5, sd: 1, nsi: 1, smc: 0.5, sab: 0.5, levica: 0, lms: 0};
  SLO.patronage = function(p) {
    if (p === 'lms') { return 'none yet'; }
    var w = SLO.NETWORK[p] || 0;
    return w >= 1.5 ? 'deep' : (w >= 1 ? 'established' : (w > 0 ? 'thin' : 'none'));
  };
  SLO.PATRONAGE_WHY = {
    desus: 'In almost every government since 1996, with its people in the pension fund, health insurance and state companies.',
    sd: 'The party of the transition-era left, with local and state-company networks.',
    nsi: 'Church-linked and local networks, smaller in the state.',
    smc: 'A party of one leader and one term, with few people of its own.',
    sab: 'A party of one leader and one term, with few people of its own.',
    levica: 'Never in government, and no scandal on record.',
    lms: 'A new party with nobody in the state yet.'
  };
  // posts handed to a partner (spoils_<party>): each one makes cleaning up dearer and a scandal likelier
  SLO.spoil = function(Q, parties, n) {
    (parties || SLO.partners(Q)).forEach(function(p) {
      if (Q['gov_' + p]) { Q['spoils_' + p] = num(Q['spoils_' + p]) + (n || 1); }
    });
  };
  // what a clean act costs with one partner, before scaling
  var cleanLoss = function(Q, p) { return 3 * (SLO.NETWORK[p] || 0) * (1 + num(Q['spoils_' + p]) / 4); };
  // A clean act (anti-corruption commission, lobbying register, open competitions...): every partner with
  // people in the state minds, more the more posts it was given; Levica approves (outside an agreement). scale 1 for a big act.
  SLO.cleanAct = function(Q, scale) {
    var total = 0;
    SLO.partners(Q).forEach(function(p) {
      var loss = Math.round(cleanLoss(Q, p) * scale);
      if (loss > 0) { SLO.prel(Q, p, -loss); total += loss; }
    });
    Q.coalition_strain = num(Q.coalition_strain) + Math.round(total * 0.4 * 10) / 10;
    SLO.levGain(Q, 2);
    if (Q.in_government) { Q.clean_acts = num(Q.clean_acts) + 1; }
    return total;
  };
  // The subtitle band for a clean act: what the partners stand to lose. Set it in the parent's on-arrival.
  SLO.cleanBand = function(Q) {
    var c = 0;
    SLO.partners(Q).forEach(function(p) { c += cleanLoss(Q, p); });
    // a four-party cabinet with no posts handed out is about 10; about three posts each takes it past 16
    var t = c < 1 ? 'The partners will not notice.' : (c < 16 ? 'Partners who live off patronage will mind.' : 'The partners have a lot to lose here.');
    return t + (Q.levica_support ? ' Levica takes it as its due.' : '');
  };
  // The cabinet's span on the culture war: the gap between its most progressive and most traditional partner
  // (LMŠ itself is left out: the quarrels are between partners). SD, SMC and SAB are +1, DeSUS 0, NSi -1 (Pogorelec)
  // or -2 (Tonin). Each point above 1 adds SPAN_STRAIN a month; incidents need NSi in the cabinet as well.
  var SPAN_STRAIN = 0.5;
  // A hot culture war makes the span and the incidents dearer: culture salience over its baseline, between 1 and 2
  // (CLOUDIDEAS.md section 4; calm never makes them cheaper). Set each month in SLO.tick as Q.xb_mult.
  SLO.cultureMult = function(Q) { return clamp(num(Q.sal_culture) / SLO.SAL0.culture, 1, 2); };
  SLO.span = function(Q) {
    var lo = 9, hi = -9;
    SLO.partners(Q).forEach(function(p) {
      var v = num(Q['pos_' + p + '_culture']); lo = Math.min(lo, v); hi = Math.max(hi, v);
    });
    return hi < lo ? 0 : hi - lo;
  };
  // Culture-war incidents (events xb_<name>): who can be drawn and how often (relative weight)
  SLO.XB = [
    {id: 1, ok: function(Q) { return Q.gov_sd; }, w: 1},                                  // youth wings
    {id: 2, ok: function(Q) { return Q.gov_sd; }, w: 1},                                  // kulturkampf
    {id: 3, ok: function(Q) { return Q.gov_sd || Q.gov_sab; }, w: function(Q) { return Q.ft_stood ? 2 : 1; }},  // abortion
    {id: 4, ok: function(Q) { return Q.gov_sd; }, w: 1},                                  // the wreath
    {id: 5, ok: function(Q) { return Q.gov_smc; }, w: 1},                                 // shops on Sunday
    {id: 6, ok: function() { return true; }, w: 1}                                        // the picture book
  ];
  // Partner scandals (event partner_scandal, ps_id): pools per party; SMC, SAB and DeSUS share the liberal pool.
  // small: the second wave costs only media goodwill. seed: three times as likely while that party's Buy peace gift stands.
  // need: the partner must hold that post ('any': some ministry) (IDEAS.md 1a). Pool 'any': whichever partner holds it.
  // 17 is taken by the second-track affair (second_track_model).
  SLO.PS = {
    1: {pool: 'sd'}, 2: {pool: 'sd', small: 1}, 3: {pool: 'sd', seed: 'sd'},
    4: {pool: 'nsi'}, 5: {pool: 'nsi'}, 6: {pool: 'nsi', small: 1},
    7: {pool: 'lib', small: 1, seed: 'road'}, 8: {pool: 'lib', need: 'agriculture'}, 9: {pool: 'lib', small: 1, need: 'infra'},
    10: {pool: 'lib', need: 'any'}, 11: {pool: 'lib', need: 'any'}, 12: {pool: 'lib', need: 'interior'}, 13: {pool: 'lib', need: 'any'},
    14: {pool: 'lib', small: 1}, 15: {pool: 'lib', need: 'any'}, 16: {pool: 'lib', need: 'infra'},
    18: {pool: 'any', need: 'economy', seed: 'devsub'}
  };
  // does partner p hold what scandal s needs? Before the posts were divided (old saves, calibrate.js) only the
  // scenarios without a post of their own can be drawn as they were.
  var psHolds = function(Q, p, s) {
    if (!s.need) { return true; }
    if (!Q.posts_signed) { return s.pool !== 'any'; }
    if (s.need === 'any') {
      return SLO.POSTS.concat(SLO.MINOR).some(function(id) { return SLO.holder(Q, id) === p; });
    }
    return SLO.holder(Q, s.need) === p;
  };
  var PS_BASE = 0.02;      // monthly chance of a scandal for a partner of patronage weight 1 with no posts
  var PS_COOLDOWN = 4;     // months between partner scandals
  var psPool = function(p) { return p === 'sd' || p === 'nsi' ? p : 'lib'; };
  // Rolled in SLO.tick with the engine's generator: at most one scandal at a time, each scenario once.
  var rollScandal = function(Q, rnd) {
    if (num(Q.ps_cooldown) > 0) { Q.ps_cooldown -= 1; return; }
    if (Q.ps_pending || Q.ps2_pending || num(Q.ps2_timer) > 0) { return; }
    var used = Array.isArray(Q.ps_used) ? Q.ps_used : [];
    var parts = SLO.partners(Q).filter(function(p) { return p !== 'levica' && !(num(Q['ps_block_' + p]) > num(Q.time)); });
    for (var k = 0; k < parts.length; k++) {
      var p = parts[k];
      var chance = PS_BASE * (SLO.NETWORK[p] || 0) * (1 + num(Q['spoils_' + p]) / 6) * (Q.kpk_teeth ? 1.5 : 1);
      if (rnd() >= chance) { continue; }
      var pool = [], wsum = 0;
      Object.keys(SLO.PS).forEach(function(id) {
        var s = SLO.PS[id];
        if ((s.pool !== 'any' && s.pool !== psPool(p)) || used.indexOf(+id) >= 0 || !psHolds(Q, p, s)) { return; }
        var w = 1;
        if (s.seed === 'sd' && Q.gift_sd) { w = 3; }
        if (s.seed === 'road' && Q['gift_' + p]) { w = 3; }
        if (s.seed === 'devsub' && Q['devsub_' + p]) { w = 3; }
        pool.push([+id, w]); wsum += w;
      });
      if (!pool.length) { continue; }
      var x = rnd() * wsum, pick = pool[0][0];
      for (var j = 0; j < pool.length; j++) { x -= pool[j][1]; if (x <= 0) { pick = pool[j][0]; break; } }
      used.push(pick);
      Q.ps_used = used; Q.ps_id = pick; Q.ps_party = p; Q.ps_pending = 1; Q.ps_cooldown = PS_COOLDOWN;
      Q.ps_small = SLO.PS[pick].small ? 1 : 0;
      return;
    }
  };
  // names for scandal text: 'the Social Democrats' / 'The Social Democrats'
  SLO.psNames = function(Q) {
    var p = Q.ps_party;
    Q.ps_name = SLO.TXT[p] || (SLO.PARTY[p] ? SLO.PARTY[p].name : 'a partner');
    Q.ps_Name = cap1(Q.ps_name);
    Q.ps_patronage = SLO.patronage(p);
  };

  // Capture as the player sees it: a word, and hover text for the label and the value.
  SLO.CAPTURE_INFO = 'How far the Establishment is inside the party and the government: appointees placed, favours taken, ' +
    'things it knows. Favours and their shortlists raise it; open appointments and anti-corruption moves lower it, and it ' +
    'fades slowly. Voters notice: it eats into your credibility on corruption.';
  SLO.captureBand = function(Q) {
    var c = num(Q.captured), turn = ' Turning on them now will cost more than it used to.';
    if (c < 15) { return {name: 'clean', text: 'Voters still believe ' + SLO.PARTY.lms.name + ' is not like the others.'}; }
    if (c < 40) { return {name: 'compromised', text: 'Your credibility on corruption is starting to slip.' + turn}; }
    if (c < 70) {
      return {name: 'beholden', text: 'Your credibility on corruption is discounted. If the Establishment turns against you, ' +
        'it has the means to act.' + turn};
    }
    return {name: 'in their pocket', text: 'Voters no longer believe you on corruption, and the Establishment knows where ' +
      'everything is buried. If it turns against you, it has the means to act.' + turn};
  };
  SLO.meter = function(Q, name, amount) {
    Q[name] = clamp(num(Q[name]) + amount, 0, 100);
  };
  SLO.topIssues = function(Q, n) {
    return SLO.ISSUES.slice().sort(function(a, b) { return Q['sal_' + b] - Q['sal_' + a]; }).slice(0, n || 6);
  };
  SLO.owner = function(Q, issue) {
    var best = null, bv = 0;
    SLO.PARTIES.forEach(function(p) {
      var v = SLO.pos(Q, p, issue);
      if (SLO.ISSUE[issue].valence && v > bv) { bv = v; best = p; }
    });
    return best;
  };
  SLO.govSeats = function(Q) {
    var n = 0;
    SLO.PARTIES.forEach(function(p) { if (Q['gov_' + p]) { n += num(Q[p + '_r']); } });
    return n;
  };

  // ---------------------------------------------------------------- posts (IDEAS.md 1a)
  // Who holds which ministry. Holders are post_<id> = a party key ('lms' when unset). The player sees each post's
  // kind (prestige, spending, blame) and each partner's mood in words; the weights stay hidden. The minor posts
  // (SLO.MINOR) are never chosen by the player: SLO.minorFill hands them out to make up the partners' shares.
  SLO.POSTS = ['speaker', 'foreign', 'economy', 'infra', 'labour', 'education', 'finance', 'health', 'interior'];
  SLO.MINOR = ['defence', 'agriculture', 'justice'];
  SLO.POST = {
    speaker:     {short: 'the Speaker\'s chair', name: 'the Speaker\'s chair', title: 'Speaker of the National Assembly', kind: 'prestige', w: 2, wants: ['sd', 'nsi'], y2018: 'sd'},
    foreign:     {short: 'foreign affairs', name: 'foreign affairs', title: 'Foreign affairs', kind: 'prestige', w: 3, wants: ['smc'], y2018: 'smc'},
    economy:     {short: 'the economy', name: 'the economy', title: 'Economy', kind: 'spending', w: 2, wants: ['smc', 'nsi'], y2018: 'smc'},
    infra:       {short: 'infrastructure', name: 'infrastructure, environment and housing', title: 'Infrastructure, environment and housing', kind: 'spending', w: 2, wants: ['sab'], y2018: 'sab'},
    labour:      {short: 'labour', name: 'labour, family and social affairs', title: 'Labour, family and social affairs', kind: 'spending', w: 2, wants: ['sd', 'nsi', 'smc', 'desus'], y2018: 'smc'},
    education:   {short: 'education', name: 'education and culture', title: 'Education and culture', kind: 'spending', w: 2, wants: ['sd', 'nsi'], y2018: 'sd'},
    finance:     {short: 'finance', name: 'finance', title: 'Finance', kind: 'blame', w: 3, wants: [], y2018: 'lms'},
    health:      {short: 'health', name: 'health', title: 'Health', kind: 'blame', w: 2, wants: [], y2018: 'lms'},
    interior:    {short: 'the interior', name: 'the interior and public administration', title: 'Interior and public administration', kind: 'blame', w: 2, wants: ['nsi'], y2018: 'lms'},
    defence:     {name: 'defence', w: 1, nat: 'desus', prefer: ['desus', 'sd', 'smc', 'sab', 'nsi']},
    agriculture: {name: 'agriculture and regions', w: 1, nat: 'desus', prefer: ['desus', 'sab', 'nsi', 'sd', 'smc']},
    justice:     {name: 'justice', w: 1, nat: 'sd', prefer: ['sd', 'nsi', 'smc', 'sab', 'desus']}
  };
  SLO.KIND_TXT = {prestige: 'Prestige', spending: 'Money to spend', blame: 'Blame when things go wrong'};
  var POST_TOTAL = 23;          // the sum of all weights
  var SHORT_CUT = 1.5;          // a partner this far below its fair share is short-changed
  var WELL_PAID = 1;            // ... this far above it is well paid
  var SHORT_STRAIN = 0.5;       // monthly strain from each short-changed partner (SLO.tick)
  var SIGN_REL = {'well paid': 5, 'satisfied': 0, 'short-changed': -5};   // goodwill at signing (SLO.postsSign): being paid properly is the baseline
  SLO.SIGN_REL = SIGN_REL;
  // Goodwill sets the price, as in the base game ('As our relation with the DVP is poor, they are demanding more
  // minister posts'): a partner warm to LMŠ asks a little less than its seats are worth, a cold one more. Under the
  // floor it does not come to the table at all (the invites' choose-if: floor 30, NSi's own join level minus 10).
  var PRICE_WARM = 15;          // this far above the comfort level: one weight less
  var PRICE_COLD = 2;           // under the comfort level: this much more
  SLO.comfort = function(Q, p) { return p === 'nsi' ? num(Q.nsi_join) : 40 + num(Q.coal_penalty); };
  SLO.relPrice = function(Q, p) {
    var r = num(Q['rel_' + p]), c = SLO.comfort(Q, p);
    return r >= c + PRICE_WARM ? -1 : (r >= c ? 0 : PRICE_COLD);
  };
  // the band as the invites and the post screen say it
  SLO.priceWord = function(Q, p) {
    var k = SLO.relPrice(Q, p);
    return k < 0 ? 'warm' : (k > 0 ? 'cold' : '');
  };
  // each partner's must-have: it does not sign without it. A Pogorelec NSi wants public administration.
  SLO.mustHave = function(Q, p) {
    if (p === 'nsi') { return Q.nsi_pogorelec ? 'interior' : 'labour'; }
    return {sd: 'education', smc: 'foreign', sab: 'infra'}[p] || null;
  };
  SLO.holder = function(Q, id) { return (typeof Q['post_' + id] === 'string' && Q['post_' + id]) || 'lms'; };
  // the parties that may hold a post now, in cycling order, LMŠ last. Nobody asks for a blame post,
  // but any partner will take one if it is handed over: it counts toward its share.
  SLO.postChoices = function(Q, id) {
    var list = SLO.POST[id].kind === 'blame' ? SLO.POST[id].wants.concat(SLO.partners(Q)) : SLO.POST[id].wants;
    var w = list.filter(function(p, k) {
      if (list.indexOf(p) !== k || p === 'levica') { return false; }
      if (!Q['gov_' + p]) { return false; }
      if (p === 'nsi' && id === 'speaker' && Q.nsi_pogorelec) { return false; }
      return true;
    });
    return w.concat(['lms']);
  };
  // the Speaker's chair promised to Tonin stays his while NSi is in the cabinet
  SLO.postLocked = function(Q, id) {
    return !!(id === 'speaker' && Q.speaker_offered && Q.gov_nsi && !Q.nsi_pogorelec);
  };
  var postWeight = function(Q, p) {
    var n = 0;
    SLO.POSTS.concat(SLO.MINOR).forEach(function(id) { if (SLO.holder(Q, id) === p) { n += SLO.POST[id].w; } });
    return n;
  };
  // what a partner expects: its seats' share of the posts, priced by its goodwill (SLO.relPrice; not with raw)
  SLO.fairShare = function(Q, p, raw) {
    var seats = num(Q.lms_r);
    SLO.partners(Q).forEach(function(q) { if (q !== 'levica') { seats += num(Q[q + '_r']); } });
    return (seats > 0 ? num(Q[p + '_r']) / seats * POST_TOTAL : 0) + (raw ? 0 : SLO.relPrice(Q, p));
  };
  // posts held minus the share expected (raw: minus the seats' share alone), in weight
  SLO.postDiff = function(Q, p, raw) { return postWeight(Q, p) - SLO.fairShare(Q, p, raw); };
  SLO.postMood = function(Q, p) {
    var d = SLO.postDiff(Q, p);
    return d <= -SHORT_CUT ? 'short-changed' : (d >= WELL_PAID ? 'well paid' : 'satisfied');
  };
  // posts above the fair share, counted as spoils at signing
  SLO.concessions = function(Q, p) { return Math.max(0, Math.round(SLO.postDiff(Q, p, true) / 2)); };
  // the minor posts go to the party that held them in 2018 (nat) when it is in the cabinet; otherwise, one by one,
  // to the partner furthest below its share (ties: the post's own order). They do not even out the division by
  // themselves: with all three filling gaps, almost no division left anyone short-changed.
  SLO.minorFill = function(Q) {
    SLO.MINOR.forEach(function(id) { Q['post_' + id] = 'lms'; });
    SLO.MINOR.forEach(function(id) {
      if (Q['gov_' + SLO.POST[id].nat]) { Q['post_' + id] = SLO.POST[id].nat; return; }
      var best = 'lms', bd = 0;
      SLO.POST[id].prefer.forEach(function(p) {
        if (!Q['gov_' + p]) { return; }
        var d = -SLO.postDiff(Q, p);
        if (d > bd + 0.01) { bd = d; best = p; }
      });
      Q['post_' + id] = best;
    });
  };
  SLO.postCycle = function(Q, id) {
    if (SLO.postLocked(Q, id)) { return; }
    var c = SLO.postChoices(Q, id), k = c.indexOf(SLO.holder(Q, id));
    Q['post_' + id] = c[(k + 1) % c.length];
    SLO.minorFill(Q);
    SLO.postsText(Q);
  };
  // the real division of 2018 as far as the cabinet allows, every must-have met
  SLO.postsDefault = function(Q) {
    SLO.POSTS.forEach(function(id) {
      var y = SLO.POST[id].y2018;
      Q['post_' + id] = (y === 'lms' || Q['gov_' + y]) ? y : 'lms';
    });
    SLO.partners(Q).forEach(function(p) { var m = SLO.mustHave(Q, p); if (m) { Q['post_' + m] = p; } });
    if (SLO.postLocked(Q, 'speaker')) { Q.post_speaker = 'nsi'; }
    SLO.minorFill(Q);
    Q.posts_cab = SLO.partners(Q).join(',');
    SLO.postsText(Q);
  };
  var posName = function(Q, p) { return p === 'lms' ? SLO.lmsName(Q) : SLO.PARTY[p].name; };
  // What stops the signing, '' if nothing: a missing must-have, or a Tonin NSi that has watched the others overpaid
  SLO.postsBlock = function(Q) {
    var why = [];
    SLO.partners(Q).forEach(function(p) {
      var m = SLO.mustHave(Q, p);
      if (m && SLO.holder(Q, m) !== p) { why.push(posName(Q, p) + ' will not sign without ' + SLO.POST[m].name + '.'); }
    });
    if (Q.gov_nsi && !Q.nsi_pogorelec) {
      var paid = 0;
      SLO.partners(Q).forEach(function(p) { if (p !== 'nsi') { paid += SLO.concessions(Q, p); } });
      if (paid >= 2) {
        why.push('Tonin has watched you pay the others over the odds. He doubts that six parties bought this way will last, and he will not sign.');
      }
    }
    return why.join(' ');
  };
  // the text of the post screen: titles of the post choices (t_post_<id>) and what stops the signing
  SLO.postsText = function(Q) {
    SLO.POSTS.forEach(function(id) {
      Q['t_post_' + id] = SLO.POST[id].title + ': ' + posName(Q, SLO.holder(Q, id));
      Q['t_postk_' + id] = SLO.KIND_TXT[SLO.POST[id].kind] + '.' + (SLO.postLocked(Q, id) ? ' Promised to Tonin.' : '');
    });
    Q.posts_block = SLO.postsBlock(Q);
    Q.posts_ok = Q.posts_block ? 0 : 1;
  };
  // the posts a party holds, as a phrase: 'education and culture, the Speaker's chair and two smaller ministries'
  SLO.postsOf = function(Q, p) {
    var major = SLO.POSTS.filter(function(id) { return SLO.holder(Q, id) === p; }).map(function(id) { return SLO.POST[id].short; });
    var minor = SLO.MINOR.filter(function(id) { return SLO.holder(Q, id) === p; }).length;
    if (minor) { major.push(minor === 1 ? 'a smaller ministry' : (minor === 2 ? 'two smaller ministries' : 'three smaller ministries')); }
    if (!major.length) { return 'no ministry'; }
    return major.length < 2 ? major[0] : major.slice(0, -1).join(', ') + ' and ' + major[major.length - 1];
  };
  // signing: goodwill for the well paid, a grievance and a monthly strain for the short-changed, spoils for concessions
  SLO.postsSign = function(Q) {
    // read every mood before any goodwill moves, since goodwill sets the price
    var ps = SLO.partners(Q).filter(function(p) { return p !== 'levica'; });
    var moods = {}, conc = {};
    ps.forEach(function(p) { moods[p] = SLO.postMood(Q, p); conc[p] = SLO.concessions(Q, p); });
    ps.forEach(function(p) {
      Q['shortchanged_' + p] = moods[p] === 'short-changed' ? 1 : 0;
      // signing the coalition agreement: a partner that got its price is won over, one that did not signs sore
      Q['rel_' + p] = num(Q['rel_' + p]) + SIGN_REL[moods[p]];
      if (conc[p] > 0) { SLO.spoil(Q, [p], conc[p]); }
    });
    Q.posts_signed = 1;
    var shortL = ps.filter(function(p) { return moods[p] === 'short-changed'; });
    var paidL = ps.filter(function(p) { return conc[p] > 0; });
    Q.t_posts_sign = (shortL.length ? SLO.Names(shortL) + (shortL.length > 1 ? ' sign' : ' signs') + ' with a grudge: the ministries were not worth the price. ' : '') +
      (paidL.length ? SLO.Names(paidL) + ' got' + ' more ministries than ' + (paidL.length > 1 ? 'their' : 'its') + ' seats were worth, and everyone else noticed.' : '');
    Q.t_posts_sign_n = Q.t_posts_sign ? 1 : 0;
  };
  // a partner has left: its posts go to the remaining partner that wants each one and is furthest below its share,
  // or back to LMŠ; then the short-changed flags are checked again
  SLO.postsAfterWalkout = function(Q) {
    var moved = {};
    SLO.POSTS.forEach(function(id) {
      var h = SLO.holder(Q, id);
      if (h === 'lms' || Q['gov_' + h]) { return; }
      var best = 'lms', bd = -99;
      SLO.postChoices(Q, id).forEach(function(p) {
        if (p === 'lms') { return; }
        var d = -SLO.postDiff(Q, p);
        if (d > bd) { bd = d; best = p; }
      });
      Q['post_' + id] = best;
      (moved[best] = moved[best] || []).push(SLO.POST[id].short);
    });
    SLO.minorFill(Q);
    // 'Foreign affairs goes to SMC. The economy comes back to LMŠ.' for the walkout text (t_walk_posts)
    Q.t_walk_posts = Object.keys(moved).map(function(p) {
      var l = moved[p], t = l.length < 2 ? l[0] : l.slice(0, -1).join(', ') + ' and ' + l[l.length - 1];
      return cap1(t) + (p === 'lms' ? (l.length > 1 ? ' come back to ' : ' comes back to ') : (l.length > 1 ? ' go to ' : ' goes to ')) + posName(Q, p) + '.';
    }).join(' ');
    Q.t_walk_posts_n = Q.t_walk_posts ? 1 : 0;
    SLO.PARTIES.forEach(function(p) {
      if (p === 'lms') { return; }
      Q['shortchanged_' + p] = (Q['gov_' + p] && p !== 'levica' && SLO.postMood(Q, p) === 'short-changed') ? 1 : 0;
    });
  };
  // A card or event that works through a ministry a partner holds: the subtitle line, and the cost of going over
  // its minister (strain, and that partner's goodwill). '' and nothing when LMŠ holds it.
  SLO.overruleLine = function(Q, id) {
    var h = SLO.holder(Q, id);
    if (h === 'lms') { return ''; }
    return cap1(SLO.POST[id].name) + ' is ' + SLO.PARTY[h].name + '\'s ministry: going over its minister adds strain and costs ' + SLO.PARTY[h].name + '\'s goodwill.';
  };
  SLO.overrule = function(Q, id) {
    var h = SLO.holder(Q, id);
    if (h === 'lms') { return; }
    Q.coalition_strain = num(Q.coalition_strain) + 3;
    SLO.prel(Q, h, -3);
  };
  // LMŠ's share of a mood loss in a finance or health event: half when a partner holds the ministry
  SLO.blame = function(Q, id) { return SLO.holder(Q, id) === 'lms' ? 1 : 0.5; };
  // the line that tells the player so: sets t_blame and t_blame_n
  SLO.blameText = function(Q, id) {
    var h = SLO.holder(Q, id);
    Q.t_blame = h === 'lms' ? '' : cap1(SLO.POST[id].name) + ' is ' + SLO.PARTY[h].name + '\'s ministry, so ' + SLO.PARTY[h].name + '\'s minister takes half the questions.';
    Q.t_blame_n = Q.t_blame ? 1 : 0;
  };
  // Share the posts and Kralj's Fill the posts: the cut shrinks with the spoils the partners already hold
  SLO.shareCut = function(Q, base) {
    var ps = SLO.partners(Q).filter(function(p) { return p !== 'levica'; }), s = 0;
    ps.forEach(function(p) { s += num(Q['spoils_' + p]); });
    var avg = ps.length ? s / ps.length : 0;
    return Math.round(base / (1 + avg / 2));
  };
  SLO.shareBand = function(Q, base) {
    var c = SLO.shareCut(Q, base);
    if (c >= base * 0.8) { return 'Strain falls a lot.'; }
    if (c >= base * 0.55) { return 'Strain falls.'; }
    return 'Strain falls a little: the partners already have most of what there was to give.';
  };

  // ---------------------------------------------------------------- the agreement with Levica (IDEAS.md 10)
  // Levica's list is the promises it signed for, each with a date. rel_levica no longer decays by itself: it falls
  // only for items past their date (LEV_OVERDUE a month each, half when the cabinet has 46 votes without Levica)
  // and while Levica polls below its 2018 result (LEV_POLLS). Every delivery asks who announces it (levica_credit).
  SLO.LEV_ITEMS = {
    minimum_wage: {name: 'the minimum wage', title: 'Minimum wage', issue: 'jobs', due: [2018, 12]},
    housing:      {name: 'the public rental housing fund', title: 'Housing fund', issue: 'housing', due: [2019, 7]},
    precarious:   {name: 'the law on precarious work', title: 'Precarious work', issue: 'jobs', due: [2019, 9]},
    insurance:    {name: 'the end of supplemental health insurance', title: 'Supplemental insurance', issue: 'healthcare', due: [2019, 11]}
  };
  var LEV_OVERDUE = 1;
  var LEV_POLLS = 0.5;
  var MONTHS = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
  var ym = function(y, m) { return y * 12 + m; };
  // the item's date, pushed back 3 months if the player asked for more time (lev_delay_<key>)
  SLO.levDue = function(Q, key) {
    var d = SLO.LEV_ITEMS[key].due, t = ym(d[0], d[1]) + (Q['lev_delay_' + key] ? 3 : 0);
    return t;
  };
  SLO.levOverdue = function(Q, key) {
    return Q['promise_' + key] === 1 && ym(num(Q.year), num(Q.month)) > SLO.levDue(Q, key);
  };
  // does the cabinet need Levica's votes?
  SLO.levNeeded = function(Q) { return SLO.govSeats(Q) + 2 < 46; };
  SLO.levPollingBadly = function(Q) { return num(Q.levica_votes) < num(Q.lev_2018); };
  // monthly, from SLO.tick
  var levTick = function(Q) {
    if (!(Q.in_government && Q.levica_support)) { return; }
    // an agreement signed before the list existed (an old save) keeps the old flat decay
    if (!Q.lev_list) { Q.rel_levica = num(Q.rel_levica) - 1.4; return; }
    var k = SLO.levNeeded(Q) ? 1 : 0.5, loss = 0;
    Object.keys(SLO.LEV_ITEMS).forEach(function(key) { if (SLO.levOverdue(Q, key)) { loss += LEV_OVERDUE * k; } });
    if (SLO.levPollingBadly(Q)) { loss += LEV_POLLS; }
    Q.rel_levica = num(Q.rel_levica) - loss;
  };
  SLO.levTick = levTick;
  // An alliance of convenience, not a friendship (decided 18 October 2026): while the agreement stands, nothing
  // outside the Levica card raises Levica's goodwill; losses still count. Use this for every gain in rel_levica.
  SLO.levGain = function(Q, amount) {
    if (!Q.levica_support) { Q.rel_levica = num(Q.rel_levica) + amount; }
  };
  // a delivered item: the promise is kept, and while the agreement stands, the credit question follows
  SLO.levDeliver = function(Q, key) {
    if (Q['promise_' + key] !== 1) { return; }
    SLO.keepPromise(Q, key);
    if (Q.levica_support) { Q.lc_pending = 1; Q.lc_item = key; }
    // delivery is not free: the partners who oppose an item mind (IDEAS.md section 10). The minimum wage and the
    // insurance bill charge theirs in their own events
    if (key === 'precarious') { SLO.prel(Q, 'smc', -5); }
    if (key === 'housing') {
      var fin = SLO.holder(Q, 'finance');
      if (fin === 'lms') { Q.coalition_strain = num(Q.coalition_strain) + 2; } else { SLO.prel(Q, fin, -5); }
    }
  };
  // the list as the coalition card shows it: [{title, word}]
  SLO.levList = function(Q) {
    var out = [];
    Object.keys(SLO.LEV_ITEMS).forEach(function(key) {
      var v = Q['promise_' + key];
      if (!v) { return; }
      var I = SLO.LEV_ITEMS[key], t = SLO.levDue(Q, key), y = Math.floor((t - 1) / 12), m = t - y * 12;
      var word = v === 3 ? 'delivered' : (v === 2 ? 'dropped' : (SLO.levOverdue(Q, key) ? 'overdue' : 'due by ' + MONTHS[m - 1] + ' ' + y));
      out.push({key: key, title: I.title, word: word});
    });
    return out;
  };
  // the item the player can still ask more time for: the open one due soonest that has not been delayed
  SLO.levNextDelay = function(Q) {
    var best = null;
    Object.keys(SLO.LEV_ITEMS).forEach(function(key) {
      if (Q['promise_' + key] !== 1 || Q['lev_delay_' + key]) { return; }
      if (!best || SLO.levDue(Q, key) < SLO.levDue(Q, best)) { best = key; }
    });
    return best;
  };

  // ---------------------------------------------------------------- shared fatigue on strain relief (IDEAS.md 11b)
  // Every tool that cuts strain directly (Šarec's negotiations, Buy peace, the summit, Remind them who the prime
  // minister is, Share the posts, Kralj's Fill the posts, Golubović's Old friends at SAB, Heferle's order paper, the
  // favour that smooths over a quarrel) draws on one counter: each use works at RELIEF_K of its cut by how many came
  // before it, and the counter resets after RELIEF_RESET months without any relief. Goodwill gains are not scaled.
  var RELIEF_K = [1, 0.7, 0.5, 0.35];
  var RELIEF_RESET = 6;
  SLO.reliefK = function(Q) {
    if (num(Q.time) - (typeof Q.relief_last === 'number' ? Q.relief_last : -99) > RELIEF_RESET) { Q.relief_n = 0; }
    return RELIEF_K[Math.min(num(Q.relief_n), RELIEF_K.length - 1)];
  };
  // applies a relief of `base` strain at the current fatigue; returns the cut
  SLO.relief = function(Q, base) {
    var cut = Math.round(base * SLO.reliefK(Q) * 10) / 10;
    Q.coalition_strain = num(Q.coalition_strain) - cut;
    Q.relief_n = num(Q.relief_n) + 1; Q.relief_last = num(Q.time);
    return cut;
  };
  // the subtitle line (t_relief, t_relief_n), set in the parent's on-arrival
  SLO.reliefText = function(Q) {
    var k = SLO.reliefK(Q);
    Q.t_relief = k >= 1 ? '' : (k >= 0.7 ? 'It works a little less: the coalition has heard this before.' :
      (k >= 0.5 ? 'It works less: the coalition has heard this before.' : 'It barely works: the coalition has heard this too often.'));
    Q.t_relief_n = Q.t_relief ? 1 : 0;
  };

  // ---------------------------------------------------------------- monthly tick
  SLO.pressure = function(Q, issue) {
    // the liberal and centre-left parties a new face would replace
    var LIB = ['lms', 'sd', 'smc', 'sab'], valence = SLO.ISSUE[issue].valence, own = 0, sum = 0;
    if (valence) { LIB.forEach(function(p) { own = Math.max(own, SLO.pos(Q, p, issue)); }); }
    SLO.DEMOS.forEach(function(d) {
      var D = SLO.DEMO[d], rep = clamp(own, 0, 2) / 2;   // who-delivers: a credible owner
      if (!valence) {
        // which-side: a liberal party standing on the side this group leans to
        var st = 0;
        SLO.BLOCS.forEach(function(bn, b) { st += SLO.SEG_SHARE[d][b] * (SLO.SEG_ST[d][b][issue] || 0); });
        rep = 0;
        LIB.forEach(function(p) { rep = Math.max(rep, clamp(num(Q['pos_' + p + '_' + issue]) / 2 * st, 0, 1)); });
      }
      sum += D.size * (D.w[issue] || 0) * Math.max(0, -num(Q['mood_' + d])) / 100 * (1 - rep);
    });
    return num(Q['sal_' + issue]) * sum;
  };

  // rnd: a 0..1 generator (post_event passes the engine's seeded one); Math.random when omitted (calibrate.js)
  SLO.tick = function(Q, rnd) {
    rnd = rnd || Math.random;
    // salience decays toward baseline
    SLO.ISSUES.forEach(function(i) {
      var base = SLO.ISSUE[i].base + num(Q['salbase_' + i]);
      Q['sal_' + i] = num(Q['sal_' + i]) + (base - num(Q['sal_' + i])) * 0.15;
      if (Q['cooldown_' + i] > 0) { Q['cooldown_' + i] -= 1; }
    });
    SLO.normaliseSalience(Q);
    // temporary swings fade
    SLO.DEMOS.forEach(function(d) {
      SLO.PARTIES.forEach(function(p) {
        var k = 'aft_' + d + '_' + p;
        if (Q[k]) { Q[k] = Math.abs(Q[k]) < 0.02 ? 0 : Q[k] * (1 - AFT_DECAY); }
      });
    });
    // mood drifts back toward neutral; governing wears people down
    SLO.DEMOS.forEach(function(d) {
      Q['mood_' + d] = num(Q['mood_' + d]) * 0.95;
      if (Q.gov_lms) { SLO.mood(Q, d, -1.3); }
    });
    // coalitions fray and Levica's list gets longer by themselves
    if (Q.in_government) {
      Q.coalition_strain = num(Q.coalition_strain) + 1;
      // Levica's goodwill falls for overdue items on its list and while it polls badly (IDEAS.md 10)
      levTick(Q);
      // mayors drift away from a party busy in Ljubljana unless someone tends them (mayors_drift fires under 40)
      Q.rel_mayors = clamp(num(Q.rel_mayors) - 1.5, 0, 100);
      // without 46 votes (no_majority, set in post_event) every vote has to be bought
      // unless someone is finding the votes one by one (Golubović's whip, Heferle's order paper: nm_relief months)
      if (Q.no_majority && !(num(Q.nm_relief) > 0)) { Q.coalition_strain += 2; }
      if (num(Q.nm_relief) > 0) { Q.nm_relief = num(Q.nm_relief) - 1; }
      // a cabinet across the culture war frays faster (IDEAS.md 7a)
      Q.xb_mult = SLO.cultureMult(Q);
      Q.span = SLO.span(Q);
      Q.coalition_strain += SPAN_STRAIN * Math.max(0, Q.span - 1) * Q.xb_mult;
      // the relations card is drawn more often the colder the coldest partner (pr_need: how far under 50)
      Q.pr_need = Math.max(0, 50 - Math.min.apply(null, SLO.partners(Q).map(function(p) { return num(Q['rel_' + p]); }).concat([50])));
      // a partner signed short of its fair share of the posts (IDEAS.md 1a)
      SLO.partners(Q).forEach(function(p) { if (Q['shortchanged_' + p]) { Q.coalition_strain += SHORT_STRAIN; } });
    }
    // culture-war incidents: while the span is 2 or more, one every 2 to 5 months (xb_timer)
    if (Q.in_government && Q.gov_nsi && !Q.ending && num(Q.span) >= 2 && !Q.xb_pending) {
      if (!(num(Q.xb_timer) > 0)) { Q.xb_timer = 2 + Math.floor(rnd() * 4); }
      Q.xb_timer -= 1;
      if (Q.xb_timer <= 0) {
        var seen = Array.isArray(Q.xb_seen) ? Q.xb_seen : [], cand = [], cw = 0;
        SLO.XB.forEach(function(x) {
          if (seen.indexOf(x.id) >= 0 || !x.ok(Q)) { return; }
          var w = typeof x.w === 'function' ? x.w(Q) : x.w;
          cand.push([x.id, w]); cw += w;
        });
        if (cand.length) {
          var r = rnd() * cw, pick = cand[0][0];
          for (var c = 0; c < cand.length; c++) { r -= cand[c][1]; if (r <= 0) { pick = cand[c][0]; break; } }
          seen.push(pick); Q.xb_seen = seen; Q.xb_event = pick; Q.xb_pending = 1;
        }
      }
    }
    // the youth wings' second round, unless it was mediated (xb_youth2 months)
    if (num(Q.xb_youth2) > 0) {
      Q.xb_youth2 -= 1;
      if (Q.xb_youth2 <= 0 && Q.gov_sd && Q.gov_nsi && !Q.ending) { Q.xb_youth2_pending = 1; }
    }
    // partner scandals (IDEAS.md 7c) and their second waves
    if (Q.in_government && !Q.ending) {
      rollScandal(Q, rnd);
      if (num(Q.ps2_timer) > 0) {
        Q.ps2_timer -= 1;
        if (Q.ps2_timer <= 0) {
          if (Q['gov_' + Q.ps2_party] || Q.ps2_lms) { Q.ps2_pending = 1; } else { Q.ps2_timer = 0; }
        }
      }
    }
    // the Establishment: cold means hostile coverage and nobody smoothing things over; close means capture
    if (Q.in_government && num(Q.rel_est) < 20) {
      Q.rel_media = clamp(num(Q.rel_media) - 1.5, 0, 100);
      Q.coalition_strain = num(Q.coalition_strain) + 1;
    }
    // capture fades slowly (a half-life of about two years); closeness alone settles at 50 (1.5 / CAPTURE_FADE)
    Q.captured = num(Q.captured) * (1 - SLO.CAPTURE_FADE);
    if (num(Q.rel_est) >= 70) { Q.captured = clamp(num(Q.captured) + 1.5, 0, 100); }
    // Establishment sabotage (IDEAS.md section 5): est_sabotage counts the months left (set by centres_of_power);
    // while it runs, the blank cards (missing_party, missing_govt) are in both decks, weighted by the anger.
    if (num(Q.est_sabotage) > 0) {
      Q.est_sabotage -= 1;
      if (Q.est_sabotage <= 0) { Q.est_sabotage = 0; Q.sabotage_end_pending = 1; Q.est_sab_cooldown = SLO.SAB_COOLDOWN; }
    } else if (num(Q.est_sab_cooldown) > 0) {
      Q.est_sab_cooldown -= 1;
    }
    // recent peak capture: the last SAB_PEAK_MONTHS monthly values (cap_hist, kept in the save)
    var hist = Array.isArray(Q.cap_hist) ? Q.cap_hist.slice(-(SLO.SAB_PEAK_MONTHS - 1)) : [];
    hist.push(Math.round(num(Q.captured) * 10) / 10);
    Q.cap_hist = hist;
    Q.captured_peak = Math.max.apply(null, hist);
    Q.est_sab_watch = (Q.in_government && Q.captured_peak >= SLO.SAB_CAPTURE && num(Q.rel_est) < SLO.SAB_EST) ? num(Q.est_sab_watch) + 1 : 0;
    if (Q.est_sab_watch >= 2 && !num(Q.est_sabotage) && !num(Q.est_sab_cooldown) && !Q.sabotage_end_pending && !Q.ending) {
      Q.sabotage_pending = 1;
    }
    // Šarec's novelty fades once he governs, slowly: he stayed popular through 2019
    if (Q.gov_lms && Q.leader_bonus > 0) {
      Q.leader_bonus = Math.max(0, Q.leader_bonus - LEADER_DECAY - LEADER_DECAY_HIGH * Math.max(0, Q.leader_bonus - LEADER_HIGH));
    }
    // the bandwagon: builds over the first months of an LMŠ premiership, as long as Šarec is popular,
    // the coalition looks calm and people are not angry. It drains when he leaves office.
    var bwTarget = 0;
    if (Q.gov_lms) { Q.months_governed = num(Q.months_governed) + 1; }
    if (Q.gov_lms && Q.pm_party === 'lms') {
      var moodSum = 0;
      SLO.DEMOS.forEach(function(d) { moodSum += num(Q['mood_' + d]) * SLO.DEMO[d].size / 100; });
      Q.pm_months = num(Q.pm_months) + 1;
      var fade = 1 - (1 - BW_FADE_FLOOR) * clamp((Q.pm_months - BW_FADE_START) / (BW_FADE_END - BW_FADE_START), 0, 1);
      bwTarget = clamp(0.3 + Math.min(num(Q.leader_bonus), BW_LEADER_CAP) / 10 - num(Q.coalition_strain) / BW_STRAIN + moodSum / 150, 0, 1) *
        clamp((Q.pm_months - 2) / 3, 0, 1) * fade * (Q.replaced_sarec ? BW_SUCCESSOR : 1);
    }
    // a rally falls faster than it builds once the novelty is gone (the fade), so it reaches the floor within the term
    var bwRate = (bwTarget < num(Q.bandwagon) && num(Q.pm_months) > BW_FADE_START) ? 0.5 : 0.3;
    Q.bandwagon = Math.round((num(Q.bandwagon) + (bwTarget - num(Q.bandwagon)) * bwRate) * 1000) / 1000;
    // the rally's high-water mark per party (the one-way door); parties with roots win some back
    Object.keys(BANDWAGON).forEach(function(p) {
      var k = 'bwp_' + p, v = Math.max(num(Q[k]), num(Q.bandwagon));
      if (POOL_ROOTED[p]) { v -= (v - num(Q.bandwagon)) * POOL_DRAIN; }
      Q[k] = Math.round(v * 1000) / 1000;
    });
    Q.und_extra = Math.round(num(Q.und_extra) * (1 - POOL_FADE) * 100) / 100;
    if (Q.in_government) { Q.lb_peak = Math.max(num(Q.lb_peak), num(Q.leader_bonus)); }
    // the three bandwagon events, once each per premiership (SLO.replaceLeader resets them)
    if (Q.gov_lms && Q.pm_party === 'lms' && !Q.ending) {
      if (!Q.bw_follow_seen && Q.bandwagon >= 0.2) { Q.bw_follow_seen = 1; Q.bw_follow_pending = 1; }
      if (Q.bw_follow_seen && !Q.bw_stall_seen && Q.pm_months > BW_FADE_START) { Q.bw_stall_seen = 1; Q.bw_stall_pending = 1; }
      if (Q.bw_stall_seen && !Q.bw_end_seen && Q.pm_months >= BW_FADE_END) { Q.bw_end_seen = 1; Q.bw_end_pending = 1; }
    }
    // challenger pressure
    var top = null, topV = 0;
    SLO.ISSUES.forEach(function(i) {
      Q['press_' + i] = num(Q['press_' + i]) * 0.7 + SLO.pressure(Q, i);
      if (Q['press_' + i] > topV) { topV = Q['press_' + i]; top = i; }
    });
    Q.top_pressure = Math.round(topV * 100) / 100;
    Q.top_pressure_issue = top || '';
    if (Q.ch_cooldown > 0) { Q.ch_cooldown -= 1; }
    // a cold Establishment goes shopping for a replacement sooner
    var threshold = SLO.PRESSURE_THRESHOLD * (num(Q.rel_est) < 25 ? 0.75 : 1);
    // new faces arrive for an election, not mid-term: until one is near, the pressure only shows how open the field is
    var toElection = num(Q.next_election_time) - num(Q.time);
    Q.election_near = (num(Q.next_election_time) > 0 && toElection >= 0 && toElection <= SLO.CHALLENGER_WINDOW) ? 1 : 0;
    Q.field_open = (topV >= threshold) ? 1 : 0;
    if (Q.gov_lms && Q.election_near && !Q.ch_active && !Q.murmur_pending && !Q.ch_cooldown && topV >= threshold) {
      Q.murmur_pending = 1;
      Q.ch_issue = top;
      Q.ch_issue_name = SLO.ISSUE[top].name;
      Q.ch_name = SLO.ROSTER[top] || 'a new face';
    }
    if (Q.ch_active && !Q.ch_consolidated) {
      var gain = 2 + 3 * num(Q['press_' + Q.ch_issue]);
      // the Establishment does not back losers
      if (num(Q.lms_votes) < 10 || num(Q.cohesion) < 40) { gain += 3; Q.est_hedging = 1; } else { Q.est_hedging = 0; }
      if (num(Q.rel_media) < 35) { gain += 1.5; }
      if (num(Q.rel_est) < 25) { gain += 2.5; }
      Q.ch_momentum = clamp(num(Q.ch_momentum) + gain, 0, 100);
      if (Q.ch_momentum >= 100) { Q.ch_consolidated = 1; }
    }
    Q.ch_momentum_disp = Math.round(num(Q.ch_momentum));
  };

  root.SLO = SLO;
  if (typeof module !== 'undefined' && module.exports) { module.exports = SLO; }
}(typeof window !== 'undefined' ? window : globalThis));
