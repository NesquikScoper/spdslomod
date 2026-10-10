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
    youth:      {jobs: 0.2, housing: 0.45, culture: 0.1, environment: 0.25}
  };
  /*SJM_ATT_END*/

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
    lms:    [0, 0, 0, 0, 0, 1, 0,    0, 1, 0, 1, 1, 0, 1],
    sds:    [0, 1, 0, 0, 1, 0, 0,   -2, 1, 2, 2, -1, -2, -2],
    sd:     [1, 1, 1, 0, 0, 0, 1,    1, -1, -1, 1, 1, 1, 1],
    smc:    [-1, 1, 0, 0, -1, 0, 0,  0, 1, 1, 2, 0, 1, 1],
    levica: [1, 2, 2, 1, 0, 0, 0,    2, -2, -2, -2, 2, 2, 2],
    nsi:    [1, 1, 0, 0, 0, 0, 0,   -1, 2, 2, 2, 0, -2, -1],
    sab:    [0, 0, 0, 0, 0, 0, 1,    0, 0, 0, 1, 1, 1, 1],
    desus:  [1, 0, 0, 0, 0, 0, 2,    0, -1, 0, 1, 0, 0, 0],
    sns:    [0, 0, 0, 0, 0, 1, 0,   -2, -1, 0, -2, 0, -1, 0],
    other:  [0, 0, 0, 0, 0, 0, 0,    0, 0, 0, 0, 0, 0, 0]
  };

  // Affinity priors (identity and loyalty), in appeal points, per group and bloc. Column order = SLO.PARTIES.
  // Written by tools/calibrate.js so that a no-action start reproduces GROUP_2018 in every bloc of every group.
  /*AFF_BEGIN*/
  var AFF = {
    pensioners: [
      [7.2, 1.7, 20.7, 10.9, 14.2, 0.5, 10.7, 5.7, 1.6, 3],
      [9.5, 15.4, 9.1, 8.2, 1.3, 3.7, 4.7, 12, 1.1, 10.6],
      [0.4, 66.8, 2.6, 2, 1.3, 19, 1, 9.7, 1.1, 8.9]],
    urban_prof: [
      [7.3, 2.7, 11.8, 14.8, 38.1, 0.1, 8, 2.7, 0.6, 11.4],
      [7.9, 14.5, 5.1, 12.1, 4.7, 3.7, 1.9, 4.5, 6.9, 14.6],
      [0.1, 66.3, 1.5, 2.1, 0.3, 18.6, 5, 2.7, 1.9, 7.5]],
    rural_cath: [
      [19.3, 7.1, 21.1, 18.5, 28.6, 0.4, 14.8, 3.6, 7.4, 15.7],
      [5.2, 24.3, 5, 5, 1.2, 5, 1.3, 3.2, 5.3, 21.2],
      [1.7, 84.2, 2.4, 1.4, 0.1, 37.8, 0.6, 1.9, 3.5, 17.8]],
    urban_prol: [
      [12.7, 1.4, 10.6, 7.5, 27.6, 0.1, 4.5, 1.9, 0.9, 12.6],
      [8.6, 17.5, 6.5, 4.3, 1, 6.1, 2, 3.9, 16.2, 9.6],
      [0.1, 52.3, 5.2, 9.5, 0.3, 15.5, 4.7, 2.9, 2, 11.7]],
    suburban: [
      [12.8, 7.2, 14.2, 22, 27.2, 1.6, 6.2, 1.1, 3.7, 5.5],
      [10.1, 18, 8, 11.3, 2.3, 3.9, 5.8, 3.2, 14.7, 24.6],
      [1, 82.6, 4.1, 1.7, 0.3, 23.3, 0.6, 2.2, 11.1, 25.9]],
    public: [
      [38.6, 7.3, 43.4, 30.3, 61.3, 0.1, 22.5, 12.9, 4.6, 15.8],
      [13.6, 32.3, 16.1, 22.4, 5.3, 1.6, 12.7, 5, 7, 21],
      [1.4, 80.5, 4.1, 5.4, 0.3, 30.3, 0.6, 3, 3.6, 22.5]],
    self_emp: [
      [7.1, 1, 14.9, 30.2, 29.4, 0.1, 10.2, 1.5, 0.6, 2.6],
      [12.8, 17.8, 16.9, 11.8, 2.7, 5.8, 4.2, 3.8, 11.2, 14.5],
      [0.1, 108.7, 1.9, 13.4, 0.4, 34.8, 7, 3.8, 2.6, 10.4]],
    youth: [
      [10, 2.6, 15.4, 15, 49.9, 0.1, 5.5, 1.4, 0.6, 19.3],
      [7.2, 18.9, 9, 8.6, 2.1, 6.5, 2.3, 2.3, 4.9, 14.4],
      [1.8, 104.5, 3.1, 12.5, 0.1, 34.5, 0.9, 7.4, 12.5, 35.4]]
  };
  /*AFF_END*/
  SLO.AFF = AFF;
  // Per-party multipliers fitted last by tools/calibrate.js so the national total gives the 2018 result.
  /*AFF_SCALE*/ SLO.AFF_SCALE = [0.8697, 1.1280, 0.9091, 0.9610, 1.0424, 1.1699, 0.9265, 0.8711, 0.9836, 0.9938];
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
  var MIN_APPEAL = 0.3;
  var POS_FLOOR = 0.08;   // weight every voter puts on each positional issue
  var LEADER_DECAY = 0.15;      // leader_bonus lost per month in government
  var LEADER_HIGH = 5;          // above this the bonus is harder to hold:
  var LEADER_DECAY_HIGH = 0.2;  // extra monthly loss per point above LEADER_HIGH
  var BW_LEADER_CAP = 5;        // leader_bonus above this does not feed the bandwagon
  // Share of each party's support that rallies to a popular LMŠ prime minister at full bandwagon.
  // From the 2018-2020 polls (research/polls_2018_2020.csv): LMŠ went from 13% to 27% of decided voters
  // in early 2019 while SMC fell from 10% to 2%, SAB halved and SDS lost about five points.
  var BANDWAGON = {smc: 0.9, sab: 0.6, sds: 0.35, desus: 0.3, other: 0.45};   // on the right, 0.3 of these
  var SAL_BUDGET = SLO.ISSUES.length;   // mean salience is 1
  SLO.SAL0 = {};
  (function() {
    var sum = 0;
    SLO.ISSUES.forEach(function(i) { sum += SLO.ISSUE[i].base; });
    SLO.ISSUES.forEach(function(i) { SLO.SAL0[i] = SLO.ISSUE[i].base * SAL_BUDGET / sum; });
  })();
  SLO.SEATS = 88;
  SLO.THRESHOLD = 4;
  SLO.PRESSURE_THRESHOLD = 1.0;
  SLO.CHALLENGER_WINDOW = 6;   // a new face appears only this many months or fewer before a scheduled election

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
    for (d = 0; d < SLO.DEMOS.length; d++) {
      Q['mood_' + SLO.DEMOS[d]] = 0;
      for (p = 0; p < SLO.PARTIES.length; p++) {
        Q['aff_' + SLO.DEMOS[d] + '_' + SLO.PARTIES[p]] = 0;   // lasting change on top of the AFF table
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
  SLO.compute = function(Q, opts) {
    opts = opts || {};
    var votes = {}, shares = {}, seg = {}, total = 0;
    var bw = opts.noLeader ? 0 : clamp(num(Q.bandwagon), 0, 1);
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
          var a = AFF[d][b][pi] * SLO.AFF_SCALE[pi] + num(Q['aff_' + d + '_' + p]);
          var valTerm = 0, posTerm = 0, strid = 0;
          SLO.ISSUES.forEach(function(i, ii) {
            var pos = num(Q['pos_' + p + '_' + i]), pos0 = POS[p][ii];
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
            a += K_GOV * mood * blame;
          }
          if (p === 'lms') {
            a += num(Q.roots) * 0.06;
            if (!opts.noLeader) { a += num(Q.leader_bonus); }
          }
          a = Math.max(MIN_APPEAL, a);
          appeals[p] = a; sum += a;
        });
        // borrowed support: voters of nearby parties line up behind the prime minister; the right mostly does not
        if (bw > 0) {
          SLO.PARTIES.forEach(function(p) {
            var t = (BANDWAGON[p] || 0) * bw * (blocName === 'right' ? 0.3 : 1) * appeals[p];
            appeals[p] -= t; appeals.lms += t;
          });
        }
        var weight = D.size * SLO.SEG_SHARE[d][b] * SLO.SEG_TURNOUT[d][b] * stay;
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
    return {votes: votes, shares: shares, seg: seg, turnout: total};
  };

  // Writes poll numbers into Q: <party>_votes, leader_dependence, turnout.
  SLO.recompute = function(Q) {
    var r = SLO.compute(Q);
    SLO.PARTIES.forEach(function(p) { Q[p + '_votes'] = Math.round(r.votes[p] * 10) / 10; });
    Q.turnout = Math.round(r.turnout);
    var without = SLO.compute(Q, {noLeader: true}).votes.lms;
    Q.leader_dependence = r.votes.lms > 0 ? Math.round(100 * (r.votes.lms - without) / r.votes.lms) : 0;
    return r;
  };

  // Election: D'Hondt over SLO.SEATS with a 4% threshold. Two minority seats are added by the UI.
  SLO.election = function(Q) {
    SLO.recompute(Q);
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
  SLO.rel = function(Q, actor, amount) {
    Q['rel_' + actor] = clamp(num(Q['rel_' + actor]) + amount, 0, 100);
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
      var v = num(Q['pos_' + p + '_' + issue]);
      if (SLO.ISSUE[issue].valence && v > bv) { bv = v; best = p; }
    });
    return best;
  };
  SLO.govSeats = function(Q) {
    var n = 0;
    SLO.PARTIES.forEach(function(p) { if (Q['gov_' + p]) { n += num(Q[p + '_r']); } });
    return n;
  };

  // ---------------------------------------------------------------- monthly tick
  SLO.pressure = function(Q, issue) {
    var sum = 0;
    SLO.DEMOS.forEach(function(d) {
      var D = SLO.DEMO[d];
      sum += D.size * (D.w[issue] || 0) * Math.max(0, -num(Q['mood_' + d])) / 100;
    });
    // credible owners: the liberal and centre-left parties a new face would replace
    var own = 0;
    ['lms', 'sd', 'smc', 'sab'].forEach(function(p) { own = Math.max(own, num(Q['pos_' + p + '_' + issue])); });
    return num(Q['sal_' + issue]) * sum * (1 - clamp(own, 0, 2) / 2);
  };

  SLO.tick = function(Q) {
    // salience decays toward baseline
    SLO.ISSUES.forEach(function(i) {
      var base = SLO.ISSUE[i].base + num(Q['salbase_' + i]);
      Q['sal_' + i] = num(Q['sal_' + i]) + (base - num(Q['sal_' + i])) * 0.15;
      if (Q['cooldown_' + i] > 0) { Q['cooldown_' + i] -= 1; }
    });
    SLO.normaliseSalience(Q);
    // mood drifts back toward neutral; governing wears people down
    SLO.DEMOS.forEach(function(d) {
      Q['mood_' + d] = num(Q['mood_' + d]) * 0.95;
      if (Q.gov_lms) { SLO.mood(Q, d, -1.3); }
    });
    // coalitions fray and Levica's list gets longer by themselves
    if (Q.in_government) {
      Q.coalition_strain = num(Q.coalition_strain) + 1;
      if (Q.levica_support) { Q.levica_agreement = num(Q.levica_agreement) - 2; }
    }
    // the Establishment: cold means hostile coverage and nobody smoothing things over; close means capture
    if (Q.in_government && num(Q.rel_est) < 20) {
      Q.rel_media = clamp(num(Q.rel_media) - 1.5, 0, 100);
      Q.coalition_strain = num(Q.coalition_strain) + 1;
    }
    if (num(Q.rel_est) >= 70) { Q.captured = clamp(num(Q.captured) + 1.5, 0, 100); }
    // Šarec's novelty fades once he governs, slowly: he stayed popular through 2019
    if (Q.gov_lms && Q.leader_bonus > 0) {
      Q.leader_bonus = Math.max(0, Q.leader_bonus - LEADER_DECAY - LEADER_DECAY_HIGH * Math.max(0, Q.leader_bonus - LEADER_HIGH));
    }
    // the bandwagon: builds over the first months of an LMŠ premiership, as long as Šarec is popular,
    // the coalition looks calm and people are not angry. It drains when he leaves office.
    var bwTarget = 0;
    if (Q.gov_lms && Q.pm_party === 'lms') {
      var moodSum = 0;
      SLO.DEMOS.forEach(function(d) { moodSum += num(Q['mood_' + d]) * SLO.DEMO[d].size / 100; });
      Q.pm_months = num(Q.pm_months) + 1;
      bwTarget = clamp(0.3 + Math.min(num(Q.leader_bonus), BW_LEADER_CAP) / 10 - num(Q.coalition_strain) / 250 + moodSum / 150, 0, 1) *
        clamp((Q.pm_months - 2) / 3, 0, 1);
    }
    Q.bandwagon = Math.round((num(Q.bandwagon) + (bwTarget - num(Q.bandwagon)) * 0.3) * 1000) / 1000;
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
