window.game={"compiled":"{\"scenes\":{\"prevScene\":{\"id\":\"prevScene\",\"content\":{\"content\":\"\",\"type\":\"paragraph\"}},\"prevTopScene\":{\"id\":\"prevTopScene\",\"content\":{\"content\":\"\",\"type\":\"paragraph\"}},\"jumpScene\":{\"id\":\"jumpScene\",\"content\":{\"content\":\"\",\"type\":\"paragraph\"}},\"backSpecialScene\":{\"id\":\"backSpecialScene\",\"content\":{\"content\":\"\",\"type\":\"paragraph\"}},\"returnScene\":{\"id\":\"returnScene\",\"content\":{\"content\":\"\",\"type\":\"paragraph\"}},\"easy_discard\":{\"id\":\"easy_discard\",\"type\":\"scene\",\"title\":\"Return card to hand.\",\"goTo\":[{\"id\":\"root\"}],\"onArrival\":[{\"$code\":\"if (Q.month_actions > 0) {\\n    Q.month_actions -= 1;\\n}\\nvar card = this.state.lastPlayedCard;\\ncard.image = card.cardImage;\\nthis.state.currentHands['main'].push(card);\\nif (Q[card.id + \\\"_timer\\\"]) {\\n    Q[card.id + \\\"_timer\\\"] = 0;\\n}\\nif (this.state.visits[card.id]) {\\n    this.state.visits[card.id] -= 1;\\n}\"}],\"content\":{\"content\":\"\",\"type\":\"paragraph\"}},\"coalition.invite_sd\":{\"id\":\"coalition.invite_sd\",\"title\":{\"content\":[\"Invite SD (\",{\"type\":\"insert\",\"insert\":0},\" seats)\"],\"stateDependencies\":[{\"type\":\"insert\",\"fn\":{\"$code\":\"return (Q['sd_r'] || 0);\"}}]},\"subtitle\":\"Dejan Židan wants to be Speaker, and his party wants ministries.\",\"unavailableSubtitle\":\"SD does not trust you enough.\",\"viewIf\":{\"$code\":\"return (((Q['gov_sd'] || 0)===0) && ((Q['sd_r'] || 0) > 0));\"},\"chooseIf\":{\"$code\":\"return ((Q['rel_sd'] || 0) >= (40 + (Q['coal_penalty'] || 0)));\"},\"onArrival\":[{\"$code\":\"Q['gov_sd'] = 1;\\nQ['coalition_strain'] = (Q['coalition_strain'] || 0) + 5;\"}],\"goTo\":[{\"id\":\"coalition\"}],\"content\":{\"content\":\"The Social Democrats have been in half the governments since independence. They know where everything is kept. They want the Speaker's chair and three ministries, and they will remind you that they have thousands of members and you have 300.\",\"type\":\"paragraph\"}},\"discard_card\":{\"id\":\"discard_card\",\"type\":\"scene\",\"title\":\"We shall not do anything about this today.\",\"subtitle\":\"Discards the card. The month passes.\",\"goTo\":[{\"id\":\"root\"}],\"content\":{\"content\":\"\",\"type\":\"paragraph\"}},\"game_over\":{\"id\":\"game_over\",\"type\":\"scene\",\"title\":\"The end, for now\",\"newPage\":true,\"gameOver\":true,\"onArrival\":[{\"$code\":\"var S = window.SLO;\\nS.recompute(Q);\\nvar prog = 0;\\nfor (var i of S.ISSUES) {\\n    if (S.ISSUE[i].valence && Q['pos_lms_' + i] >= 1) { prog += 1; }\\n}\\nQ.programme_count = prog;\\nQ.est_dependence = Math.min(100, Q.est_debt * 20 + Q.captured);\\nvar score = 0;\\nif (Q.roots >= 35) { score += 1; }\\nif (prog >= 3) { score += 1; }\\nif (Q.leader_dependence <= 25 && Q.lms_votes >= 8 && Q.roots >= 20) { score += 1; }\\nif (Q.est_dependence <= 30) { score += 1; }\\nif (Q.ch_consolidated) { score -= 1; }\\nQ.inst_score = score;\\nQ.roots_disp = Math.round(Q.roots);\"}],\"content\":{\"content\":[{\"type\":\"heading\",\"content\":[\"\",{\"type\":\"insert\",\"insert\":0},\" \",{\"type\":\"insert\",\"insert\":1},\"\"]},{\"type\":\"paragraph\",\"content\":[{\"type\":\"conditional\",\"content\":[\"\",{\"type\":\"emphasis-2\",\"content\":\"Below the threshold.\"},\" LMŠ took \",{\"type\":\"insert\",\"insert\":3},\"% and did not enter parliament. The new face of 2018 turned out to be somebody else. \"],\"predicate\":2},\"\"]},{\"type\":\"paragraph\",\"content\":[{\"type\":\"conditional\",\"content\":[\"\",{\"type\":\"emphasis-2\",\"content\":\"Opposition.\"},\" You could not assemble a majority. Janez Janša did. LMŠ sits in opposition with \",{\"type\":\"insert\",\"insert\":5},\" MPs, a famous leader and nothing to do. The opposition years are not part of this proof of concept. \"],\"predicate\":4},\"\"]},{\"type\":\"paragraph\",\"content\":[{\"type\":\"conditional\",\"content\":[\"\",{\"type\":\"emphasis-2\",\"content\":\"Opposition.\"},\" Janez Janša did not need you: SDS, NSi and the nationalists have a majority of their own. LMŠ sits in opposition with \",{\"type\":\"insert\",\"insert\":7},\" MPs, a famous leader and nothing to do. The opposition years are not part of this proof of concept. \"],\"predicate\":6},\"\"]},{\"type\":\"paragraph\",\"content\":[{\"type\":\"conditional\",\"content\":[\"\",{\"type\":\"emphasis-2\",\"content\":\"Šarec resigns.\"},\" On 27 January 2020 the prime minister announces his resignation and calls for early elections. There are none. Within weeks SMC and DeSUS change sides and Janez Janša forms his third government. This is what happened. \"],\"predicate\":8},\"\"]},{\"type\":\"paragraph\",\"content\":[{\"type\":\"conditional\",\"content\":[\"\",{\"type\":\"emphasis-2\",\"content\":\"The coalition falls apart.\"},\" The partners stop answering calls. The government loses its majority and then its nerve, and Janez Janša starts counting to 46. \"],\"predicate\":9},\"\"]},{\"type\":\"paragraph\",\"content\":[{\"type\":\"conditional\",\"content\":[\"\",{\"type\":\"emphasis-2\",\"content\":\"The partners walk out.\"},\" \",{\"type\":\"insert\",\"insert\":11},\" The majority is gone. The prime minister resigns before he can be voted out, and Janez Janša starts counting to 46. \"],\"predicate\":10},\"\"]},{\"type\":\"paragraph\",\"content\":[{\"type\":\"conditional\",\"content\":[\"\",{\"type\":\"emphasis-2\",\"content\":\"The government holds.\"},\" Against the record, the Šarec government is still standing at the end of January 2020. A virus is in the news from Wuhan. Nobody in Ljubljana is paying attention yet. \"],\"predicate\":12},\"\"]},{\"type\":\"paragraph\",\"content\":[{\"type\":\"conditional\",\"content\":[\"\",{\"type\":\"emphasis-2\",\"content\":\"The government holds, without Šarec.\"},\" At the end of January 2020 LMŠ has a prime minister whose name is not on the party, and the coalition has voted the new one in. A virus is in the news from Wuhan. Nobody in Ljubljana is paying attention yet. \"],\"predicate\":13},\"\"]},{\"type\":\"heading\",\"content\":\"What you built\"},{\"type\":\"paragraph\",\"content\":[\"LMŠ polls at \",{\"type\":\"emphasis-2\",\"content\":[{\"type\":\"insert\",\"insert\":14},\"%\"]},\".\"]},{\"type\":\"paragraph\",\"content\":[{\"type\":\"emphasis-2\",\"content\":\"Roots:\"},\" \",{\"type\":\"insert\",\"insert\":15},\"/100. \",{\"type\":\"conditional\",\"content\":\"Still a list with a name on it. \",\"predicate\":16},{\"type\":\"conditional\",\"content\":\"Some branches, some members. Thin. \",\"predicate\":17},{\"type\":\"conditional\",\"content\":\"Real local organisation. \",\"predicate\":18},\"\"]},{\"type\":\"paragraph\",\"content\":[{\"type\":\"emphasis-2\",\"content\":\"Programme:\"},\" trusted on \",{\"type\":\"insert\",\"insert\":19},\" issue(s). \",{\"type\":\"conditional\",\"content\":\"Nobody can say what LMŠ is for. \",\"predicate\":20},{\"type\":\"conditional\",\"content\":\"People can say what LMŠ is for. \",\"predicate\":21},\"\"]},{\"type\":\"paragraph\",\"content\":[{\"type\":\"emphasis-2\",\"content\":\"Leader:\"},\" \",{\"type\":\"insert\",\"insert\":22},\"% of your support depends on Šarec personally.\"]},{\"type\":\"paragraph\",\"content\":[{\"type\":\"emphasis-2\",\"content\":\"The Establishment:\"},\" dependence \",{\"type\":\"insert\",\"insert\":23},\"/100.\"]},{\"type\":\"paragraph\",\"content\":[{\"type\":\"emphasis-2\",\"content\":\"Policy wins:\"},\" \",{\"type\":\"insert\",\"insert\":24},\".\"]},{\"type\":\"paragraph\",\"content\":[{\"type\":\"magic\",\"content\":\"<div data-slo=\\\"challenger\\\"></div>\"},\"\"]},{\"type\":\"heading\",\"content\":\"Verdict\"},{\"type\":\"paragraph\",\"content\":[{\"type\":\"conditional\",\"content\":[\"\",{\"type\":\"emphasis-2\",\"content\":\"A shell.\"},\" When the next new face arrives, and one is coming, there will be nothing holding your voters in place. In our timeline his name was Robert Golob, and LMŠ took 3.7% in 2022. \"],\"predicate\":25},\"\"]},{\"type\":\"paragraph\",\"content\":[{\"type\":\"conditional\",\"content\":[\"\",{\"type\":\"emphasis-2\",\"content\":\"Half a party.\"},\" There is something here beyond one man's name, but not enough to stop a determined saviour. 2022 will be a fight. \"],\"predicate\":26},\"\"]},{\"type\":\"paragraph\",\"content\":[{\"type\":\"conditional\",\"content\":[\"\",{\"type\":\"emphasis-2\",\"content\":\"A real party, almost.\"},\" Members, a programme, a life beyond its founder. Whoever comes next will have to beat you rather than replace you. \"],\"predicate\":27},\"\"]},{\"type\":\"paragraph\",\"content\":[{\"type\":\"emphasis-1\",\"content\":\"This is the end of the proof of concept. The opposition years, COVID and the 2022 election come later.\"},\"\"]},{\"type\":\"paragraph\",\"content\":{\"type\":\"magic\",\"content\":\"<div data-slo=\\\"polls\\\"></div>\"}}],\"stateDependencies\":[{\"type\":\"insert\",\"fn\":{\"$code\":\"return (Q['month'] || 0);\"},\"qdisplay\":\"month\"},{\"type\":\"insert\",\"fn\":{\"$code\":\"return (Q['year'] || 0);\"}},{\"type\":\"predicate\",\"fn\":{\"$code\":\"return (Q['ending'] == \\\"hard_loss\\\");\"}},{\"type\":\"insert\",\"fn\":{\"$code\":\"return (Q['lms_result'] || 0);\"}},{\"type\":\"predicate\",\"fn\":{\"$code\":\"return ((Q['ending'] == \\\"opposition\\\") && ((Q['right_majority'] || 0)===0));\"}},{\"type\":\"insert\",\"fn\":{\"$code\":\"return (Q['lms_r'] || 0);\"}},{\"type\":\"predicate\",\"fn\":{\"$code\":\"return ((Q['ending'] == \\\"opposition\\\") && ((Q['right_majority'] || 0)===1));\"}},{\"type\":\"insert\",\"fn\":{\"$code\":\"return (Q['lms_r'] || 0);\"}},{\"type\":\"predicate\",\"fn\":{\"$code\":\"return (Q['ending'] == \\\"resigned\\\");\"}},{\"type\":\"predicate\",\"fn\":{\"$code\":\"return (Q['ending'] == \\\"collapse\\\");\"}},{\"type\":\"predicate\",\"fn\":{\"$code\":\"return (Q['ending'] == \\\"walkout\\\");\"}},{\"type\":\"insert\",\"fn\":{\"$code\":\"return (Q['walk_line'] || 0);\"}},{\"type\":\"predicate\",\"fn\":{\"$code\":\"return ((Q['ending'] == \\\"survived\\\") && ((Q['replaced_sarec'] || 0)===0));\"}},{\"type\":\"predicate\",\"fn\":{\"$code\":\"return ((Q['ending'] == \\\"survived\\\") && ((Q['replaced_sarec'] || 0)===1));\"}},{\"type\":\"insert\",\"fn\":{\"$code\":\"return (Q['lms_votes'] || 0);\"}},{\"type\":\"insert\",\"fn\":{\"$code\":\"return (Q['roots_disp'] || 0);\"}},{\"type\":\"predicate\",\"fn\":{\"$code\":\"return ((Q['roots'] || 0) < 15);\"}},{\"type\":\"predicate\",\"fn\":{\"$code\":\"return (((Q['roots'] || 0) >= 15) && ((Q['roots'] || 0) < 35));\"}},{\"type\":\"predicate\",\"fn\":{\"$code\":\"return ((Q['roots'] || 0) >= 35);\"}},{\"type\":\"insert\",\"fn\":{\"$code\":\"return (Q['programme_count'] || 0);\"}},{\"type\":\"predicate\",\"fn\":{\"$code\":\"return ((Q['programme_count'] || 0)===0);\"}},{\"type\":\"predicate\",\"fn\":{\"$code\":\"return ((Q['programme_count'] || 0) >= 3);\"}},{\"type\":\"insert\",\"fn\":{\"$code\":\"return (Q['leader_dependence'] || 0);\"}},{\"type\":\"insert\",\"fn\":{\"$code\":\"return (Q['est_dependence'] || 0);\"}},{\"type\":\"insert\",\"fn\":{\"$code\":\"return (Q['wins'] || 0);\"}},{\"type\":\"predicate\",\"fn\":{\"$code\":\"return ((Q['inst_score'] || 0) <= 0);\"}},{\"type\":\"predicate\",\"fn\":{\"$code\":\"return (((Q['inst_score'] || 0)===1) || ((Q['inst_score'] || 0)===2));\"}},{\"type\":\"predicate\",\"fn\":{\"$code\":\"return ((Q['inst_score'] || 0) >= 3);\"}}]}},\"post_event.events_choice\":{\"id\":\"post_event.events_choice\",\"options\":[{\"id\":\"#event\"}],\"content\":{\"content\":\"\",\"type\":\"paragraph\"}},\"post_event\":{\"id\":\"post_event\",\"type\":\"scene\",\"title\":\"Post Event\",\"newPage\":true,\"onArrival\":[{\"$code\":\"var S = window.SLO;\\nQ.last_advisor_action = 0;\\nif (Q.month_actions >= 1) {\\n    Q.time += 1;\\n    Q.month_actions = 0;\\n    Q.month += 1;\\n    if (Q.month >= 13) {\\n        Q.month = 1;\\n        Q.year += 1;\\n    }\\n    for (var timer of Q.timers) {\\n        if (Q[timer + '_timer'] && Q[timer + '_timer'] > 0) {\\n            Q[timer + '_timer'] -= 1;\\n        }\\n    }\\n    // political capital trickles in\\n    if (Q.resources < 5) {\\n        Q.resources += 1;\\n    }\\n    // passing the month (the wait card) adds one more on top of the trickle\\n    if (Q.pass_bonus) { Q.resources += 1; Q.pass_bonus = 0; }\\n    S.tick(Q);\\n}\\n// clamp the meters\\nfor (var m of ['cohesion', 'roots', 'coalition_strain', 'levica_agreement', 'rel_est', 'rel_media', 'rel_ngo', 'rel_mayors',\\n               'rel_sd', 'rel_smc', 'rel_sab', 'rel_desus', 'rel_levica', 'rel_nsi', 'rel_sds', 'captured']) {\\n    if (Q[m] < 0) { Q[m] = 0; }\\n    if (Q[m] > 100) { Q[m] = 100; }\\n    Q[m] = Math.round(Q[m] * 10) / 10;   // one decimal, so the model's 1.5-a-month steps survive\\n}\\n// a cabinet partner whose relation with LMŠ has broken down leaves (the partner_walkout event)\\nQ.walk_pending = 0;\\nif (Q.in_government && !Q.ending) {\\n    for (var wp of ['sd', 'smc', 'sab', 'desus', 'nsi']) {\\n        if (Q['gov_' + wp] && Q['rel_' + wp] < 30) { Q.walk_pending = 1; }\\n    }\\n}\\n// a cabinet without 46 votes behind it (Levica gone, defections) cannot pass its programme; SLO.tick adds strain\\nQ.no_majority = (Q.in_government && !Q.ending && S.govSeats(Q) + (Q.levica_support ? Q.levica_r : 0) + 2 < 46) ? 1 : 0;\\nif (Q.resources < 0) { Q.resources = 0; }\\nif (Q.resources > 8) { Q.resources = 8; }\\n// two decimals, so the 0.15 monthly decay is not rounded away; 0-10 as in the content guide\\nQ.leader_bonus = Math.min(10, Math.max(0, Math.round(Q.leader_bonus * 100) / 100));\\nS.recompute(Q);\\n\\nQ.has_event = 0;\\nvar scene = this.game.scenes['post_event.events_choice'];\\nvar choices = this._compileChoices(scene);\\nif (choices && choices.length && choices[0].title != \\\"Continue...\\\") {\\n    Q.has_event = 1;\\n}\"}],\"goTo\":[{\"id\":\"post_event.events_choice\",\"predicate\":{\"$code\":\"return ((Q['has_event'] || 0)===1);\"}},{\"id\":\"main\",\"predicate\":{\"$code\":\"return ((Q['has_event'] || 0)===0);\"}}],\"content\":{\"content\":{\"type\":\"heading\",\"content\":[\"\",{\"type\":\"insert\",\"insert\":0},\" \",{\"type\":\"insert\",\"insert\":1}]},\"stateDependencies\":[{\"type\":\"insert\",\"fn\":{\"$code\":\"return (Q['month'] || 0);\"},\"qdisplay\":\"month\"},{\"type\":\"insert\",\"fn\":{\"$code\":\"return (Q['year'] || 0);\"}}]}},\"library\":{\"id\":\"library\",\"type\":\"scene\",\"title\":\"How to play\",\"newPage\":true,\"isSpecial\":true,\"options\":[{\"id\":\"@backSpecialScene\",\"title\":\"Back\"}],\"content\":[{\"type\":\"heading\",\"content\":\"How to play\"},{\"type\":\"paragraph\",\"content\":\"Each month you draw cards and play one. Playing a card ends the month. Events arrive between months.\"},{\"type\":\"paragraph\",\"content\":[{\"type\":\"emphasis-2\",\"content\":\"Voters\"},\" are split into eight groups. Each group cares about two to four issues and has a mood. An angry group that switches easily goes looking for someone new. An angry group that is loyal stays home.\"]},{\"type\":\"paragraph\",\"content\":[{\"type\":\"emphasis-2\",\"content\":\"Issues\"},\" come in two kinds. On \",{\"type\":\"emphasis-1\",\"content\":\"who delivers?\"},\" issues (healthcare, wages, housing) everyone wants the same thing and the question is who is trusted. On \",{\"type\":\"emphasis-1\",\"content\":\"which side?\"},\" issues (migration, culture wars) voters disagree, and taking a side wins some groups and loses others. Only issues high on the agenda move votes, and the agenda is a fixed size.\"]},{\"type\":\"paragraph\",\"content\":[{\"type\":\"emphasis-2\",\"content\":\"Credibility\"},\" on an issue is slow to build (three steps for one point) and quick to lose.\"]},{\"type\":\"paragraph\",\"content\":[{\"type\":\"emphasis-2\",\"content\":\"Challengers.\"},\" When people who care about an issue are unhappy and no liberal party is trusted on it, a new face appears. That is how LMŠ got here. It is also how LMŠ ends.\"]},{\"type\":\"heading\",\"content\":\"Who is who\"},{\"type\":\"paragraph\",\"content\":[{\"type\":\"emphasis-2\",\"content\":\"LMŠ\"},\", the List of Marjan Šarec. You. Liberal, vague, new.\"]},{\"type\":\"paragraph\",\"content\":[{\"type\":\"emphasis-2\",\"content\":\"SDS\"},\", Janez Janša's party. The disciplined right. Largest party; almost nobody will govern with it.\"]},{\"type\":\"paragraph\",\"content\":[{\"type\":\"emphasis-2\",\"content\":\"SD\"},\", the Social Democrats. The old centre-left, heirs of the League of Communists. Roots everywhere.\"]},{\"type\":\"paragraph\",\"content\":[{\"type\":\"emphasis-2\",\"content\":\"SMC\"},\", the Modern Centre Party of Miro Cerar. The new face of 2014. Look at it closely.\"]},{\"type\":\"paragraph\",\"content\":[{\"type\":\"emphasis-2\",\"content\":\"Levica\"},\", The Left. Democratic socialists. Anti-NATO, anti-privatisation.\"]},{\"type\":\"paragraph\",\"content\":[{\"type\":\"emphasis-2\",\"content\":\"NSi\"},\", New Slovenia. Christian democrats. Pro-business, traditional.\"]},{\"type\":\"paragraph\",\"content\":[{\"type\":\"emphasis-2\",\"content\":\"SAB\"},\", the Party of Alenka Bratušek. A former prime minister's personal list.\"]},{\"type\":\"paragraph\",\"content\":[{\"type\":\"emphasis-2\",\"content\":\"DeSUS\"},\", the pensioners' party. In every government since 1997.\"]},{\"type\":\"paragraph\",\"content\":[{\"type\":\"emphasis-2\",\"content\":\"SNS\"},\", the Slovenian National Party. Zmago Jelinčič's nationalists.\"]},{\"type\":\"paragraph\",\"content\":[{\"type\":\"emphasis-2\",\"content\":\"The Establishment\"},\" is nobody in particular: the network of managers, lawyers, editors and former officials that has backed every liberal party since independence. It does not back losers.\"]}]},\"return\":{\"id\":\"return\",\"type\":\"scene\",\"title\":\"Back to main\",\"goTo\":[{\"id\":\"root\"}],\"onArrival\":[{\"$code\":\"if (((Q['difficulty'] || 0) < 0) ) { Q['month_actions'] = (Q['month_actions'] || 0) - 1; }\"}],\"content\":{\"content\":\"\",\"type\":\"paragraph\"}},\"main.party\":{\"id\":\"main.party\",\"title\":\"Party Affairs\",\"cardImage\":\"img/card_partyaffairs.jpg\",\"isDeck\":true,\"options\":[{\"id\":\"#party_affairs\"}],\"content\":{\"content\":\"\",\"type\":\"paragraph\"}},\"root.start_menu\":{\"id\":\"root.start_menu\",\"newPage\":true,\"goTo\":[{\"id\":\"root.start_menu_2\"}],\"content\":[{\"type\":\"heading\",\"content\":\"Slovenian Liberalism: A Story of Decline\"},{\"type\":\"paragraph\",\"content\":{\"type\":\"emphasis-1\",\"content\":\"Grounded alternate history. Real parties and people, plausible divergences, no conspiracy theories.\"}}]},\"status.electorate\":{\"id\":\"status.electorate\",\"content\":[{\"type\":\"heading\",\"content\":\"Who votes\"},{\"type\":\"paragraph\",\"content\":{\"type\":\"magic\",\"content\":\"<div data-slo=\\\"electorate\\\"></div>\"}}]},\"levica_talks.deliver\":{\"id\":\"levica_talks.deliver\",\"title\":\"Deliver an item from their list.\",\"subtitle\":\"-2 political capital. Patience up a lot. The Establishment and partners frown.\",\"unavailableSubtitle\":\"Needs 2 political capital.\",\"chooseIf\":{\"$code\":\"return ((Q['resources'] || 0) >= 2);\"},\"onArrival\":[{\"$code\":\"Q['resources'] = (Q['resources'] || 0) - 2;\\nQ['levica_agreement'] = (Q['levica_agreement'] || 0) + 20;\\nQ['rel_est'] = (Q['rel_est'] || 0) - 5;\\nQ['coalition_strain'] = (Q['coalition_strain'] || 0) + 4;\"}],\"content\":{\"content\":\"A measure from page two of their programme gets through the cabinet on a Thursday. Levica is pleased. The business groups are alarmed, and the coalition partners ask why the junior-most voice gets a result.\",\"type\":\"paragraph\"}},\"appointments.open\":{\"id\":\"appointments.open\",\"title\":\"Open competitions for every post.\",\"subtitle\":\"Civil society approves. The Establishment and partners do not.\",\"onArrival\":[{\"$code\":\"Q.rel_ngo += 6;\\nQ.rel_est -= 8;\\nwindow.SLO.claim(Q, 'corruption');\\nQ.coalition_strain += 5;\"}],\"content\":{\"content\":\"Candidates are interviewed by panels, and the results are published. The civic groups are impressed. The partners wanted the posts for their own people, and have now lost them. The Establishment finds this very inconvenient.\",\"type\":\"paragraph\"}},\"public_pay.wages\":{\"id\":\"public_pay.wages\",\"title\":\"Raise public sector pay.\",\"subtitle\":\"-2 political capital. Public employees up, the self-employed pay the bill.\",\"unavailableSubtitle\":\"Needs 2 political capital.\",\"chooseIf\":{\"$code\":\"return ((Q['resources'] || 0) >= 2);\"},\"onArrival\":[{\"$code\":\"Q.resources -= 2;\\nwindow.SLO.mood(Q, 'public', 10);\\nwindow.SLO.claim(Q, 'jobs');\\nwindow.SLO.mood(Q, 'self_emp', -5);\"}],\"content\":{\"content\":\"The agreement is signed after a night of talks. Teachers and nurses get raises. The self-employed read the deficit forecast and note that someone has to pay.\",\"type\":\"paragraph\"}},\"coalition_management.summit\":{\"id\":\"coalition_management.summit\",\"title\":\"A coalition summit at Brdo. Everyone talks, nothing is decided.\",\"subtitle\":\"Lowers strain a little. Free.\",\"onArrival\":[{\"$code\":\"Q['coalition_strain'] = (Q['coalition_strain'] || 0) - 8;\"}],\"content\":{\"content\":\"Six hours, a joint statement of four sentences, and a photograph in which everyone is smiling. It buys a month.\",\"type\":\"paragraph\"}},\"housing_policy.rental\":{\"id\":\"housing_policy.rental\",\"title\":\"A public rental housing fund.\",\"subtitle\":\"-3 political capital. Real supply. The left likes it.\",\"unavailableSubtitle\":\"Needs 3 political capital.\",\"chooseIf\":{\"$code\":\"return ((Q['resources'] || 0) >= 3);\"},\"onArrival\":[{\"$code\":\"Q.resources -= 3;\\nwindow.SLO.claim(Q, 'housing');\\nwindow.SLO.claim(Q, 'housing');\\nwindow.SLO.mood(Q, 'youth', 6);\\nwindow.SLO.mood(Q, 'urban_prol', 6);\\nif (Q.levica_support) { Q.levica_agreement += 6; }\\nQ.wins += 1;\"}],\"content\":{\"content\":\"The fund buys and builds flats and rents them at cost. It will take years. The first announcement is in the papers within a week, and the young read it with cautious hope.\",\"type\":\"paragraph\"}},\"healthcare_reform.money\":{\"id\":\"healthcare_reform.money\",\"title\":\"Money to cut the waiting lists.\",\"subtitle\":\"-2 political capital. Fast and visible, but the structure stays the same.\",\"unavailableSubtitle\":\"Needs 2 political capital.\",\"chooseIf\":{\"$code\":\"return ((Q['resources'] || 0) >= 2);\"},\"onArrival\":[{\"$code\":\"Q.resources -= 2;\\nwindow.SLO.claim(Q, 'healthcare');\\nwindow.SLO.moodEvent(Q, 'healthcare', 6);\"}],\"content\":{\"content\":\"Extra funds for hospitals that clear their lists. Within a few months the worst waits drop, and the ministry has numbers to show. The system is as it was, with a larger budget.\",\"type\":\"paragraph\"}},\"budget_2020.social\":{\"id\":\"budget_2020.social\",\"title\":\"Spend on pensions and health.\",\"subtitle\":{\"content\":[\"Two steps toward credibility on healthcare. Pensioners and DeSUS are pleased. Uses up to 2 political capital, and the self-employed pay for it.\",{\"type\":\"conditional\",\"content\":\"NSi takes it badly.\",\"predicate\":0}],\"stateDependencies\":[{\"type\":\"predicate\",\"fn\":{\"$code\":\"return ((Q['gov_nsi'] || 0)===1);\"}}]},\"onArrival\":[{\"$code\":\"Q.resources = Math.max(0, Q.resources - 2);\\nwindow.SLO.claim(Q, 'healthcare');\\nwindow.SLO.claim(Q, 'healthcare');\\nwindow.SLO.aff(Q, 'pensioners', 'lms', 2);\\nwindow.SLO.aff(Q, 'self_emp', 'lms', -2);\\nwindow.SLO.mood(Q, 'pensioners', 7);\\nwindow.SLO.mood(Q, 'self_emp', -4);\\nQ.rel_desus += 6;\\nQ.coalition_strain -= 5;\\nif (Q.gov_nsi) { Q.rel_nsi -= 8 * (Q.nsi_pogorelec ? 0.5 : 1); Q.rel_sd += 4; Q.coalition_strain += 9; }\"}],\"content\":{\"content\":\"Erjavec, the DeSUS leader, holds a press conference about pensions before the budget is even published. The finance ministry notes that the money is spent.\",\"type\":\"paragraph\"}},\"candidate_lists.mayors\":{\"id\":\"candidate_lists.mayors\",\"title\":\"Local mayors and councillors.\",\"subtitle\":\"Roots, mayors and cohesion. Few famous names.\",\"onArrival\":[{\"$code\":\"Q.roots += 4;\\nQ.cohesion += 4;\\nwindow.SLO.rel(Q, 'mayors', 6);\"}],\"content\":{\"content\":\"They know their districts, bring their own networks, and ask little. They also bring few votes beyond their own towns.\",\"type\":\"paragraph\"}},\"cerar_resigns.attack\":{\"id\":\"cerar_resigns.attack\",\"title\":\"\\\"Four years, and this is what is left. Slovenia deserves people who finish what they start.\\\"\",\"subtitle\":\"Corruption and competence become your theme. Cerar will remember.\",\"onArrival\":[{\"$code\":\"window.SLO.claim(Q, 'corruption');\\nwindow.SLO.salience(Q, 'corruption', 0.4);\\nwindow.SLO.aff(Q, 'urban_prof', 'lms', 1);\\nwindow.SLO.aff(Q, 'suburban', 'lms', 1);\\nQ.leader_bonus += 1;\\nQ.rel_smc -= 15;\"}],\"content\":{\"content\":\"It leads every bulletin. Half of SMC's 2014 voters were already looking at you; now they have permission. In Cerar's office the clip is watched several times.\",\"type\":\"paragraph\"}},\"climate_strike.join\":{\"id\":\"climate_strike.join\",\"title\":\"Join the march and promise a climate law.\",\"subtitle\":\"Young people and activists applaud. Suburban commuters and small firms do not.\",\"onArrival\":[{\"$code\":\"window.SLO.aff(Q, 'youth', 'lms', 3);\\nwindow.SLO.aff(Q, 'urban_prof', 'lms', 2);\\nwindow.SLO.salience(Q, 'environment', 0.2);\\nwindow.SLO.mood(Q, 'youth', 6);\\nwindow.SLO.mood(Q, 'suburban', -3);\\nwindow.SLO.mood(Q, 'self_emp', -3);\\nwindow.SLO.aff(Q, 'self_emp', 'lms', -2);\\nQ.rel_ngo += 6;\\nQ.rel_est -= 5;\"}],\"content\":{\"content\":\"The prime minister walks the last hundred metres with the students and says a law will be drafted. Business groups ask what it will cost. Nobody has an answer yet.\",\"type\":\"paragraph\"}},\"challenger_consolidated\":{\"id\":\"challenger_consolidated\",\"type\":\"scene\",\"title\":\"The challenger arrives\",\"newPage\":true,\"tags\":[\"event\"],\"priority\":2,\"viewIf\":{\"$code\":\"return (((Q['ch_consolidated'] || 0)===1) && ((Q['ch_cons_seen'] || 0)===0));\"},\"onArrival\":[{\"$code\":\"Q.ch_cons_seen = 1;\\nfor (var d of ['urban_prof', 'suburban', 'youth', 'public', 'self_emp']) {\\n    window.SLO.aff(Q, d, 'lms', -2.5);\\n    window.SLO.aff(Q, d, 'other', 4);\\n}\\nQ.rel_est -= 15; Q.rel_mayors -= 10; Q.cohesion -= 10;\"}],\"options\":[{\"id\":\"@root\",\"title\":\"So this is how it felt to Cerar.\"}],\"content\":{\"content\":[{\"type\":\"heading\",\"content\":\"The challenger arrives\"},{\"type\":\"paragraph\",\"content\":[\"There is a founding congress, a logo, a hall full of people who were not in politics last year. The talk about \",{\"type\":\"insert\",\"insert\":0},\" has become a party, and the party has one message: \",{\"type\":\"emphasis-1\",\"content\":\"we are not them.\"},\"\"]},{\"type\":\"paragraph\",\"content\":\"By \\\"them\\\" they mean you.\"},{\"type\":\"paragraph\",\"content\":\"The first poll puts them in double digits, with voters who were yours. Two mayors who campaigned for Šarec are in the front row. The Establishment's phone calls are getting shorter.\"}],\"stateDependencies\":[{\"type\":\"insert\",\"fn\":{\"$code\":\"return (Q['ch_issue_name'] || 0);\"}}]}},\"coalition_collapse\":{\"id\":\"coalition_collapse\",\"type\":\"scene\",\"title\":\"The coalition collapses\",\"newPage\":true,\"tags\":[\"event\"],\"priority\":3,\"viewIf\":{\"$code\":\"return ((((Q['in_government'] || 0)) !== 0) && ((Q['coalition_strain'] || 0) >= 100));\"},\"onArrival\":[{\"$code\":\"Q['ending'] = \\\"collapse\\\";\"}],\"options\":[{\"id\":\"@game_over\",\"title\":\"The end.\"}],\"content\":[{\"type\":\"heading\",\"content\":\"The coalition collapses\"},{\"type\":\"paragraph\",\"content\":\"It is not one thing. It is a minister who resigns by press release, a budget vote that is postponed, a partner who has started having coffee with the opposition.\"}]},\"coalition_troubles\":{\"id\":\"coalition_troubles\",\"type\":\"scene\",\"title\":\"Levica withdraws\",\"newPage\":true,\"tags\":[\"event\"],\"priority\":2,\"viewIf\":{\"$code\":\"return (((((Q['in_government'] || 0)) !== 0) && ((Q['levica_support'] || 0)===1)) && ((Q['levica_agreement'] || 0) <= 0));\"},\"onArrival\":[{\"$code\":\"Q.levica_support = 0; Q.levica_gone = 1; Q.coalition_strain += 25; Q.rel_levica -= 20;\\nQ.coal_total = window.SLO.govSeats(Q) + 2;\\nQ.no_majority = Q.coal_total < 46 ? 1 : 0;\"}],\"options\":[{\"id\":\"@root\",\"title\":\"Continue.\"}],\"content\":{\"content\":[{\"type\":\"heading\",\"content\":\"Levica withdraws\"},{\"type\":\"paragraph\",\"content\":\"Luka Mesec calls a press conference. The agreement, he says, has not been honoured: the projects on the list are late, watered down or dead. Levica is withdrawing its support.\"},{\"type\":\"paragraph\",\"content\":[\"The government has not fallen. \",{\"type\":\"conditional\",\"content\":[\"It has \",{\"type\":\"insert\",\"insert\":1},\" votes of 90, and from now on every vote has to be bought. Strain will rise each month until it has a majority again. \"],\"predicate\":0},{\"type\":\"conditional\",\"content\":[\"Without Levica it still has \",{\"type\":\"insert\",\"insert\":3},\" votes of 90.\"],\"predicate\":2}]}],\"stateDependencies\":[{\"type\":\"predicate\",\"fn\":{\"$code\":\"return ((Q['no_majority'] || 0)===1);\"}},{\"type\":\"insert\",\"fn\":{\"$code\":\"return (Q['coal_total'] || 0);\"}},{\"type\":\"predicate\",\"fn\":{\"$code\":\"return ((Q['no_majority'] || 0)===0);\"}},{\"type\":\"insert\",\"fn\":{\"$code\":\"return (Q['coal_total'] || 0);\"}}]}},\"croatia_arbitration.loud\":{\"id\":\"croatia_arbitration.loud\",\"title\":\"Press the lawsuit loudly.\",\"subtitle\":\"Popular at home. Brussels sighs.\",\"onArrival\":[{\"$code\":\"window.SLO.mood(Q, 'rural_cath', 4);\\nwindow.SLO.mood(Q, 'pensioners', 4);\\nwindow.SLO.salience(Q, 'euroatlantic', 0.3);\\nQ.rel_est -= 5;\"}],\"content\":{\"content\":\"The prime minister stands in front of a map and says that law is law. Croatian papers answer in kind. The evening news is on your side.\",\"type\":\"paragraph\"}},\"defection\":{\"id\":\"defection\",\"type\":\"scene\",\"title\":\"An MP leaves the group\",\"newPage\":true,\"tags\":[\"event\"],\"viewIf\":{\"$code\":\"return ((((((Q['in_government'] || 0)) !== 0) && ((Q['cohesion'] || 0) < 30)) && ((Q['defection_timer'] || 0) <= 0)) && ((Q['lms_r'] || 0) > 6));\"},\"onArrival\":[{\"$code\":\"Q['lms_r'] = (Q['lms_r'] || 0) - 1;\\nQ['defection_timer'] = 5;\\nQ['cohesion'] = (Q['cohesion'] || 0) + 8;\\nQ['defections'] = (Q['defections'] || 0) + 1;\\nQ['coalition_strain'] = (Q['coalition_strain'] || 0) + 6;\"}],\"options\":[{\"id\":\"@root\",\"title\":\"Continue.\"}],\"content\":{\"content\":[{\"type\":\"heading\",\"content\":\"An MP leaves the group\"},{\"type\":\"paragraph\",\"content\":[\"One of your MPs announces that she can no longer recognise the party she joined. She will sit as an independent. LMŠ now has \",{\"type\":\"insert\",\"insert\":0},\" seats.\"]},{\"type\":\"paragraph\",\"content\":\"She was a headteacher before last year and had never been to a party meeting. Neither had most of the others.\"}],\"stateDependencies\":[{\"type\":\"insert\",\"fn\":{\"$code\":\"return (Q['lms_r'] || 0);\"}}]}},\"election_2018.below_threshold\":{\"id\":\"election_2018.below_threshold\",\"onArrival\":[{\"$code\":\"Q['ending'] = \\\"hard_loss\\\";\"}],\"options\":[{\"id\":\"@game_over\",\"title\":\"The end.\"}],\"content\":[{\"type\":\"paragraph\",\"content\":[{\"type\":\"magic\",\"content\":\"<div data-slo=\\\"election\\\"></div>\"},\"\"]},{\"type\":\"paragraph\",\"content\":\"The polls close at seven. By eight it is clear that LMŠ will not reach four percent.\"}]},\"december_exodus.wins\":{\"id\":\"december_exodus.wins\",\"title\":\"Give them visible wins.\",\"subtitle\":\"Costs 2 political capital. Calms the coalition.\",\"chooseIf\":{\"$code\":\"return ((Q['resources'] || 0) >= 2);\"},\"unavailableSubtitle\":\"Needs 2 political capital.\",\"onArrival\":[{\"$code\":\"Q['resources'] = (Q['resources'] || 0) - 2;\\nQ['coalition_strain'] = (Q['coalition_strain'] || 0) - 12;\"}],\"content\":{\"content\":\"A pension measure for DeSUS, a regional road for SMC. Each partner gets a press conference. The coffee meetings become less frequent.\",\"type\":\"paragraph\"}},\"establishment_bill.oblige\":{\"id\":\"establishment_bill.oblige\",\"title\":\"Do it.\",\"subtitle\":\"Pays one favour. Costs you in the eyes of civil society.\",\"onArrival\":[{\"$code\":\"Q['est_debt'] = (Q['est_debt'] || 0) - 1;\\nQ['captured'] = (Q['captured'] || 0) + 12;\\nQ['rel_ngo'] = (Q['rel_ngo'] || 0) - 6;\\nQ['rel_est'] = (Q['rel_est'] || 0) + 5;\"}],\"content\":{\"content\":\"The appointment is made on a Thursday and noticed by a handful of people. The debt is closed. A line in a ledger somewhere is changed.\",\"type\":\"paragraph\"}},\"donor_dinner.accept\":{\"id\":\"donor_dinner.accept\",\"title\":\"Accept, and take what is offered.\",\"subtitle\":\"+3 political capital. Establishment goodwill. Owes a favour. Raises the captured perception.\",\"onArrival\":[{\"$code\":\"Q.resources += 3;\\nQ.est_debt += 1;\\nQ.captured += 8;\\nwindow.SLO.rel(Q, 'est', 6);\"}],\"content\":{\"content\":\"The food is good, and the cheques are written discreetly. Nobody asks for anything. Everybody remembers who was at the table.\",\"type\":\"paragraph\"}},\"family_tender.stand\":{\"id\":\"family_tender.stand\",\"title\":\"The commission has decided. Let it stand.\",\"subtitle\":\"NSi and rural Catholics approve. The Social Democrats mind a good deal, SMC and SAB a little. NGOs, urban professionals and the young are angry.\",\"onArrival\":[{\"$code\":\"Q.rel_nsi += 6;\\nQ.rel_sd -= 10;\\nQ.rel_smc -= 5;\\nQ.rel_sab -= 5;\\nQ.coalition_strain += 3;\\nwindow.SLO.rel(Q, 'ngo', -10);\\nwindow.SLO.own(Q, 'lms', 'culture', -1);\\nwindow.SLO.mood(Q, 'urban_prof', -6);\\nwindow.SLO.mood(Q, 'youth', -5);\\nwindow.SLO.mood(Q, 'rural_cath', 4);\"}],\"content\":{\"content\":\"Šarec says he does not interfere in tenders. The protest comes back the next Friday, and the one after, with more people and better placards. Two ministers from other coalition parties are photographed at the second one.\",\"type\":\"paragraph\"}},\"final_week.tour\":{\"id\":\"final_week.tour\",\"title\":\"A rally tour of the regions.\",\"subtitle\":\"-2 political capital. Roots, suburban and rural voters.\",\"unavailableSubtitle\":\"Needs 2 political capital.\",\"chooseIf\":{\"$code\":\"return ((Q['resources'] || 0) >= 2);\"},\"onArrival\":[{\"$code\":\"Q.resources -= 2;\\nQ.roots += 5;\\nwindow.SLO.aff(Q, 'suburban', 'lms', 2);\\nwindow.SLO.aff(Q, 'rural_cath', 'lms', 2);\"}],\"content\":{\"content\":\"Seven towns in six days, mostly in town squares with a stage and a sound system. The crowds are not large. The people in them sign things.\",\"type\":\"paragraph\"}},\"insurance_bill_2.push\":{\"id\":\"insurance_bill_2.push\",\"title\":\"Push it through anyway.\",\"subtitle\":\"A real reform, and a coalition crisis.\",\"onArrival\":[{\"$code\":\"Q.coalition_strain += 20;\\nQ.finance_minister_resigned = 1;\\nQ.rel_est -= 15;\\nQ.wins += 1;\\nwindow.SLO.claim(Q, 'healthcare');\\nwindow.SLO.claim(Q, 'healthcare');\\nwindow.SLO.mood(Q, 'pensioners', 6);\\nwindow.SLO.mood(Q, 'urban_prol', 6);\"}],\"content\":{\"content\":\"The finance minister resigns on the evening of the vote. The bill passes by a single seat. Premium notices stop arriving in the post, and the markets go quiet for a few days.\",\"type\":\"paragraph\"}},\"european_elections.leader\":{\"id\":\"european_elections.leader\",\"title\":\"Šarec campaigns in person.\",\"subtitle\":\"Uses up some of his pull. A good result on the night, +1 political capital.\",\"onArrival\":[{\"$code\":\"Q.leader_bonus -= 1;\\nQ.resources += 1;\\nwindow.SLO.moodAll(Q, 1);\"}],\"content\":{\"content\":\"He does rallies in market squares for a fortnight. The party does well. He returns from the road tired, and the crowds are a little smaller each time.\",\"type\":\"paragraph\"}},\"mayors_drift.money\":{\"id\":\"mayors_drift.money\",\"title\":\"Money for local projects.\",\"subtitle\":\"Costs 2 political capital. Wins them back and builds the party locally.\",\"chooseIf\":{\"$code\":\"return ((Q['resources'] || 0) >= 2);\"},\"unavailableSubtitle\":\"Needs 2 political capital.\",\"onArrival\":[{\"$code\":\"Q['resources'] = (Q['resources'] || 0) - 2;\\nQ['rel_mayors'] = (Q['rel_mayors'] || 0) + 15;\\nQ['roots'] = (Q['roots'] || 0) + 2;\"}],\"content\":{\"content\":\"A list of projects is announced, each with a mayor's name on it. Several mayors who had been talking to other parties stop returning those calls.\",\"type\":\"paragraph\"}},\"insurance_bill_1.draft\":{\"id\":\"insurance_bill_1.draft\",\"title\":\"Draft the bill as Levica wants.\",\"subtitle\":\"Levica is pleased. The insurers and the finance ministry are not.\",\"onArrival\":[{\"$code\":\"Q.levica_agreement += 15;\\nQ.rel_est -= 10;\\nQ.insurance_committed = 1;\"}],\"content\":{\"content\":\"The health ministry begins writing. The insurers' lawyers begin writing too. From now on the government has said that it will do this.\",\"type\":\"paragraph\"}},\"mvp_end\":{\"id\":\"mvp_end\",\"type\":\"scene\",\"title\":\"February 2020\",\"newPage\":true,\"tags\":[\"event\"],\"priority\":5,\"viewIf\":{\"$code\":\"return (((Q['year'] || 0)===2020) && ((Q['month'] || 0) >= 2));\"},\"onArrival\":[{\"$code\":\"if (((Q['ending'] || 0)===0) ) { Q['ending'] = \\\"survived\\\"; }\"}],\"goTo\":[{\"id\":\"game_over\"}],\"content\":{\"type\":\"heading\",\"content\":\"February 2020\"}},\"media_scandal.resign\":{\"id\":\"media_scandal.resign\",\"title\":\"He resigns at once.\",\"subtitle\":\"The party loses a loyal officer. The story ends.\",\"onArrival\":[{\"$code\":\"Q['cohesion'] = (Q['cohesion'] || 0) - 6;\"}],\"content\":{\"content\":\"He resigns before the evening news. The story runs for two days and then disappears behind another one.\",\"type\":\"paragraph\"}},\"minimum_wage.pass\":{\"id\":\"minimum_wage.pass\",\"title\":\"Pass it in full.\",\"subtitle\":\"Levica is delighted. Small businesses and property owners are not.\",\"onArrival\":[{\"$code\":\"Q.levica_agreement += 15;\\nQ.wins += 1;\\nQ.rel_est -= 5;\\nwindow.SLO.mood(Q, 'urban_prol', 6);\\nwindow.SLO.mood(Q, 'suburban', 4);\\nwindow.SLO.mood(Q, 'self_emp', -6);\"}],\"content\":{\"content\":\"The bill passes with a comfortable majority. Wages at the bottom rise in January. Chambers of commerce warn of closures; the first month's figures show no wave of them.\",\"type\":\"paragraph\"}},\"new_faces_pitch.vague\":{\"id\":\"new_faces_pitch.vague\",\"title\":\"\\\"New faces, new politics.\\\"\",\"subtitle\":\"Šarec's pull grows. Nothing is built.\",\"onArrival\":[{\"$code\":\"Q.leader_bonus += 1;\\nwindow.SLO.moodAll(Q, 1);\"}],\"content\":{\"content\":\"It fits on a poster and offends nobody. Voters project onto it whatever they are tired of. The risk is that on election night nobody can say what they voted for.\",\"type\":\"paragraph\"}},\"migration_rhetoric.firm\":{\"id\":\"migration_rhetoric.firm\",\"title\":\"A firm-borders line.\",\"subtitle\":\"Suburban and rural voters approve. Urban professionals and NGOs do not.\",\"onArrival\":[{\"$code\":\"window.SLO.own(Q, 'lms', 'migration', -1);\\nwindow.SLO.aff(Q, 'suburban', 'lms', 1);\\nwindow.SLO.aff(Q, 'rural_cath', 'lms', 1);\\nwindow.SLO.aff(Q, 'urban_prof', 'lms', -1.5);\\nwindow.SLO.rel(Q, 'ngo', -8);\\nQ.rel_nsi += 3;\"}],\"content\":{\"content\":\"The line is careful, but nobody quotes the careful part. Aid groups call it a retreat. In Domžale it is called common sense.\",\"type\":\"paragraph\"}},\"murmurs.coopt\":{\"id\":\"murmurs.coopt\",\"title\":\"Co-opt them. Offer a post, a commission, a seat at the table.\",\"subtitle\":\"-3 political capital. The Establishment makes the introductions, and remembers.\",\"unavailableSubtitle\":\"Needs 3 political capital and a working relationship with the Establishment.\",\"chooseIf\":{\"$code\":\"return (((Q['resources'] || 0) >= 3) && ((Q['rel_est'] || 0) >= 45));\"},\"onArrival\":[{\"$code\":\"Q['resources'] = (Q['resources'] || 0) - 3;\\nQ['ch_active'] = 0;\\nQ['ch_momentum'] = 0;\\nQ['ch_cooldown'] = 8;\\nQ['est_debt'] = (Q['est_debt'] || 0) + 1;\\nQ['captured'] = (Q['captured'] || 0) + 10;\\nQ['coopted'] = (Q['coopted'] || 0) + 1;\"}],\"content\":{\"content\":\"A lunch is arranged. An advisory council is created, with a budget and a chairman. The talk of a new party stops. The discontent that produced it has not gone anywhere, and you now owe a favour.\",\"type\":\"paragraph\"}},\"nlb_question.sell\":{\"id\":\"nlb_question.sell\",\"title\":\"Sell it, as promised.\",\"subtitle\":\"Establishment approves. The Left and the Social Democrats do not.\",\"onArrival\":[{\"$code\":\"window.SLO.rel(Q, 'est', 6);\\nwindow.SLO.own(Q, 'lms', 'privatisation', 1);\\nQ.rel_levica -= 8;\\nQ.rel_sd -= 5;\"}],\"content\":{\"content\":\"It is a promise made by a previous government, and you say so plainly. The business press is satisfied. The Left, for whom the bank is a symbol, is not.\",\"type\":\"paragraph\"}},\"nlb_sale.sell\":{\"id\":\"nlb_sale.sell\",\"title\":\"Go ahead with the full sale.\",\"subtitle\":\"Brussels and the markets are pleased. The left is not.\",\"onArrival\":[{\"$code\":\"Q.rel_est += 8;\\nwindow.SLO.own(Q, 'lms', 'privatisation', 1);\\nif (Q.levica_support) { Q.levica_agreement -= 12; }\\nwindow.SLO.mood(Q, 'urban_prol', -5);\"}],\"content\":{\"content\":\"The shares are listed and the offering is oversubscribed. The commission says nothing, which is its way of saying thank you. On the left, \\\"privatisation\\\" is the word of the week.\",\"type\":\"paragraph\"}},\"partner_walkout.fallen\":{\"id\":\"partner_walkout.fallen\",\"title\":\"Count again.\",\"viewIf\":{\"$code\":\"return ((Q['coal_total'] || 0) < 46);\"},\"options\":[{\"id\":\"@game_over\",\"title\":\"The end.\"}],\"content\":{\"content\":\"The count does not change. A government without a majority can last for a while; a government whose ministers have walked out cannot. Janez Janša, the leader of the opposition, starts making calls.\",\"type\":\"paragraph\"}},\"nsi_forum21.silence\":{\"id\":\"nsi_forum21.silence\",\"title\":\"Say nothing. It is a quarrel on the right.\",\"subtitle\":\"The attacks go on, and NSi bleeds rural Catholic voters to SDS.\",\"onArrival\":[{\"$code\":\"window.SLO.DEMOS.forEach(function(d) { window.SLO.aff(Q, d, 'nsi', -1); window.SLO.aff(Q, d, 'sds', 1); });\"}],\"content\":{\"content\":\"The story runs for three weeks and then becomes background. In the parishes it stays.\",\"type\":\"paragraph\"}},\"ngo_open_letter.open\":{\"id\":\"ngo_open_letter.open\",\"title\":\"Open the appointment process.\",\"subtitle\":\"Civil society is pleased. The people who liked the old way are not.\",\"onArrival\":[{\"$code\":\"Q.rel_ngo += 12;\\nQ.rel_est -= 10;\\nwindow.SLO.claim(Q, 'corruption');\"}],\"content\":{\"content\":\"Vacancies are advertised. Candidate lists are posted online. A few well-connected names are no longer on them, and a few of their friends say so.\",\"type\":\"paragraph\"}},\"nsi_council.back_him\":{\"id\":\"nsi_council.back_him\",\"title\":\"The members back him.\",\"subtitle\":\"Nothing changes. NSi stays with Tonin.\",\"goTo\":[{\"id\":\"coalition\"}],\"content\":{\"content\":\"The vote is not close. Tonin thanks the council, says the result was a good one in a hard year, and goes back to the talks.\",\"type\":\"paragraph\"}},\"private_schools.fund\":{\"id\":\"private_schools.fund\",\"title\":\"Fund them fully, as the court ruled.\",\"subtitle\":{\"content\":[\"Rural Catholics approve. The left and urban professionals do not.\",{\"type\":\"conditional\",\"content\":\"The Social Democrats may not stay in the government after this, and SMC and SAB mind too.\",\"predicate\":0}],\"stateDependencies\":[{\"type\":\"predicate\",\"fn\":{\"$code\":\"return ((Q['gov_nsi'] || 0)===1);\"}}]},\"onArrival\":[{\"$code\":\"window.SLO.own(Q, 'lms', 'culture', -1);\\nwindow.SLO.mood(Q, 'rural_cath', 7);\\nwindow.SLO.mood(Q, 'urban_prof', -6);\\nQ.rel_nsi += 15;\\nif (Q.levica_support) { Q.levica_agreement -= 15; }\\nif (Q.gov_nsi) { Q.rel_sd -= 20; Q.rel_smc -= 5; Q.rel_sab -= 5; Q.coalition_strain += 5; } else if (Q.gov_sd) { Q.rel_sd -= 5; }\"}],\"content\":{\"content\":{\"type\":\"paragraph\",\"content\":[{\"type\":\"conditional\",\"content\":\"The law passes with NSi votes. The opposition benches, for once, are helpful. Levica's leaders do not forgive it quickly. \",\"predicate\":0},{\"type\":\"conditional\",\"content\":\"The law passes with the votes of the right-wing opposition and against those of the Social Democrats, who sit in the same cabinet. Židan calls a meeting of his party's presidency.\",\"predicate\":1}]},\"stateDependencies\":[{\"type\":\"predicate\",\"fn\":{\"$code\":\"return ((Q['gov_nsi'] || 0)===0);\"}},{\"type\":\"predicate\",\"fn\":{\"$code\":\"return ((Q['gov_nsi'] || 0)===1);\"}}]}},\"poll_peak.party\":{\"id\":\"poll_peak.party\",\"title\":\"Spend it on the party. A membership drive under his name.\",\"subtitle\":\"Uses a lot of his pull. Builds the party.\",\"onArrival\":[{\"$code\":\"Q['leader_bonus'] = (Q['leader_bonus'] || 0) - 1.5;\\nQ['roots'] = (Q['roots'] || 0) + 6;\"}],\"content\":{\"content\":\"Billboards show his face and a form to fill in. People who have never been to a party meeting join. Whether they come back is a different matter.\",\"type\":\"paragraph\"}},\"public_pay_deal.generous\":{\"id\":\"public_pay_deal.generous\",\"title\":\"Sign the deal the unions asked for.\",\"subtitle\":\"Public sector is happy. The finance minister is not. Self-employed pay for it.\",\"onArrival\":[{\"$code\":\"window.SLO.mood(Q, 'public', 8);\\nwindow.SLO.mood(Q, 'self_emp', -4);\\nQ.wins += 1;\\nQ.coalition_strain += 6;\"}],\"content\":{\"content\":\"The unions call off the strike and thank the prime minister in public. The finance minister signs, and says in a closed meeting that he does so under protest.\",\"type\":\"paragraph\"}},\"tonin_leader.push_back\":{\"id\":\"tonin_leader.push_back\",\"title\":\"\\\"Slovenia is a secular state.\\\"\",\"subtitle\":\"Secular voters and Levica like it. NSi does not.\",\"onArrival\":[{\"$code\":\"Q.rel_nsi -= 10;\\nQ.rel_levica += 4;\\nwindow.SLO.aff(Q, 'urban_prof', 'lms', 0.5);\\nwindow.SLO.aff(Q, 'rural_cath', 'lms', -0.5);\"}],\"content\":{\"content\":\"The line runs for a day. Tonin says LMŠ has a problem with believers, and that he will remember it in June.\",\"type\":\"paragraph\"}},\"public_sector_strikes.back_unions\":{\"id\":\"public_sector_strikes.back_unions\",\"title\":\"Back the unions.\",\"subtitle\":\"Public sector voters warm to you. Raises expectations. Self-employed voters cool.\",\"onArrival\":[{\"$code\":\"window.SLO.moodEvent(Q, 'jobs', 4);\\nwindow.SLO.aff(Q, 'public', 'lms', 1.5);\\nwindow.SLO.aff(Q, 'self_emp', 'lms', -1);\\nQ.promise_public_pay = 1;\\nQ.rel_nsi -= 2;\"}],\"content\":{\"content\":\"Šarec says the pay talks should be settled, and says it on a picket line. The unions note the sentence and will quote it back.\",\"type\":\"paragraph\"}},\"social_cap.cap\":{\"id\":\"social_cap.cap\",\"title\":\"Pass the cap, as agreed.\",\"subtitle\":\"NSi and business are pleased. The Social Democrats mind a good deal, DeSUS a little. Pensioners and the public sector take it badly.\",\"onArrival\":[{\"$code\":\"Q.rel_nsi += 6;\\nQ.rel_sd -= 10;\\nQ.rel_desus -= 5;\\nQ.coalition_strain += 3;\\nwindow.SLO.rel(Q, 'est', 5);\\nwindow.SLO.salience(Q, 'taxation', 0.4);\\nwindow.SLO.mood(Q, 'self_emp', 6);\\nwindow.SLO.mood(Q, 'public', -5);\\nwindow.SLO.mood(Q, 'pensioners', -4);\"}],\"content\":{\"content\":\"The cap passes with the votes of the whole coalition and the faces of half of it. The chamber of commerce sends a letter of thanks. The Social Democrat deputies vote for it and then explain, one by one, why they wish they had not.\",\"type\":\"paragraph\"}},\"sarec_decision.resign\":{\"id\":\"sarec_decision.resign\",\"title\":\"Let him resign and call for early elections.\",\"subtitle\":\"This is what happened.\",\"onArrival\":[{\"$code\":\"Q['ending'] = \\\"resigned\\\";\\nQ['gov_lms'] = 0;\"}],\"options\":[{\"id\":\"@game_over\",\"title\":\"The end.\"}],\"content\":{\"content\":\"Šarec resigns. He says the government can no longer deliver what people expect of it, and that the honest thing is to ask the voters. The voters are not asked.\",\"type\":\"paragraph\"}},\"tv_debate.attack\":{\"id\":\"tv_debate.attack\",\"title\":\"Go after Janša hard.\",\"subtitle\":\"Urban professionals cheer. SDS hardens. Puts culture and media on the agenda.\",\"onArrival\":[{\"$code\":\"window.SLO.aff(Q, 'urban_prof', 'lms', 1.5);\\nwindow.SLO.salience(Q, 'media', 0.3);\\nwindow.SLO.salience(Q, 'culture', 0.3);\\nQ.rel_sds -= 10;\"}],\"content\":{\"content\":\"The exchange is sharp and gets clipped for the evening. Janša is at his best when attacked, but the people who wanted someone to do it are grateful.\",\"type\":\"paragraph\"}},\"workfare.pass_it\":{\"id\":\"workfare.pass_it\",\"title\":\"Pass it. Benefits in return for work.\",\"subtitle\":\"NSi, mayors and the self-employed approve. The Social Democrats mind a good deal, DeSUS a little. Charities and poorer city voters do not forgive it.\",\"onArrival\":[{\"$code\":\"Q.rel_nsi += 6;\\nQ.rel_sd -= 10;\\nQ.rel_desus -= 5;\\nQ.coalition_strain += 3;\\nwindow.SLO.rel(Q, 'ngo', -8);\\nwindow.SLO.rel(Q, 'mayors', 4);\\nwindow.SLO.mood(Q, 'urban_prol', -6);\\nwindow.SLO.mood(Q, 'self_emp', 4);\\nwindow.SLO.mood(Q, 'rural_cath', 3);\"}],\"content\":{\"content\":\"By the summer there are people in orange vests raking municipal gravel on television. The vacancies stay unfilled. The labour minister says the point was the principle.\",\"type\":\"paragraph\"}},\"waiting_lists.money\":{\"id\":\"waiting_lists.money\",\"title\":\"Emergency money for extra operations.\",\"subtitle\":\"Costs 2 political capital. Visible results.\",\"chooseIf\":{\"$code\":\"return ((Q['resources'] || 0) >= 2);\"},\"unavailableSubtitle\":\"Needs 2 political capital.\",\"onArrival\":[{\"$code\":\"Q.resources -= 2;\\nwindow.SLO.claim(Q, 'healthcare');\\nwindow.SLO.moodEvent(Q, 'healthcare', 8);\"}],\"content\":{\"content\":\"Hospitals run weekend operating lists on special pay. The numbers fall by a fifth within weeks. Opposition says it cannot last, and it is probably right.\",\"type\":\"paragraph\"}},\"korce.front\":{\"id\":\"korce.front\",\"title\":\"Front the campaign\",\"subtitle\":\"Young and urban voters warm to LMŠ. Less of the party rests on Šarec.\",\"unavailableSubtitle\":{\"content\":[{\"type\":\"insert\",\"insert\":0},\" month(s) before the next action.\"],\"stateDependencies\":[{\"type\":\"insert\",\"fn\":{\"$code\":\"return (Q['advisor_action_timer'] || 0);\"}}]},\"chooseIf\":{\"$code\":\"return ((Q['advisor_action_timer'] || 0) <= 0);\"},\"onArrival\":[{\"$code\":\"Q.advisor_action_timer = 4;\\nQ.last_advisor_action = 1;\\nwindow.SLO.aff(Q, 'youth', 'lms', 2);\\nwindow.SLO.aff(Q, 'urban_prof', 'lms', 2);\\nQ.leader_bonus -= 0.3;\"}],\"content\":{\"content\":\"She does the morning programmes, the student radio and a long evening debate. People ask her questions about the party, not about the prime minister. It is a small change, and a useful one.\",\"type\":\"paragraph\"}},\"sarec.interview\":{\"id\":\"sarec.interview\",\"title\":\"The big interview\",\"subtitle\":\"Šarec at his best: plain, funny, slightly annoyed. Lifts his personal pull, which is not the party's.\",\"unavailableSubtitle\":{\"content\":[{\"type\":\"insert\",\"insert\":0},\" month(s) before the next action.\"],\"stateDependencies\":[{\"type\":\"insert\",\"fn\":{\"$code\":\"return (Q['advisor_action_timer'] || 0);\"}}]},\"chooseIf\":{\"$code\":\"return ((Q['advisor_action_timer'] || 0) <= 0);\"},\"onArrival\":[{\"$code\":\"Q['advisor_action_timer'] = 4;\\nQ['last_advisor_action'] = 1;\\nQ['leader_bonus'] = (Q['leader_bonus'] || 0) + 1;\\nQ['rel_media'] = (Q['rel_media'] || 0) + 3;\"}],\"content\":{\"content\":\"Forty minutes on national television and not one sentence a lawyer could object to. The polls move. They move for him.\",\"type\":\"paragraph\"}},\"wait.pass\":{\"id\":\"wait.pass\",\"title\":\"Pass the month.\",\"subtitle\":\"+1 political capital, on top of the monthly one.\",\"onArrival\":[{\"$code\":\"Q['month_actions'] = (Q['month_actions'] || 0) + 1;\\nQ['pass_bonus'] = 1;\"}],\"content\":{\"content\":\"The month goes by. Nothing you did made the news.\",\"type\":\"paragraph\"}},\"wait\":{\"id\":\"wait\",\"type\":\"scene\",\"title\":\"Let the month pass\",\"isPinnedCard\":true,\"tags\":[\"advisor\"],\"cardImage\":\"img/card_monthpass.jpg\",\"newPage\":true,\"options\":[{\"id\":\"@wait.pass\"},{\"id\":\"@root\",\"title\":\"Back\"}],\"content\":[{\"type\":\"heading\",\"content\":\"Let the month pass\"},{\"type\":\"paragraph\",\"content\":\"Do nothing in particular. Answer the post, keep the money.\"}]},\"golubovic.count\":{\"id\":\"golubovic.count\",\"title\":\"Count the votes\",\"subtitle\":\"He knows who is wavering before they do. Raises group cohesion.\",\"unavailableSubtitle\":{\"content\":[{\"type\":\"insert\",\"insert\":0},\" month(s) before the next action.\"],\"stateDependencies\":[{\"type\":\"insert\",\"fn\":{\"$code\":\"return (Q['advisor_action_timer'] || 0);\"}}]},\"chooseIf\":{\"$code\":\"return ((Q['advisor_action_timer'] || 0) <= 0);\"},\"onArrival\":[{\"$code\":\"Q['advisor_action_timer'] = 4;\\nQ['last_advisor_action'] = 1;\\nQ['cohesion'] = (Q['cohesion'] || 0) + 10;\"}],\"content\":{\"content\":\"He goes down the list of MPs with a pencil, name by name. By the evening everyone has had a call, and everyone knows how they will vote.\",\"type\":\"paragraph\"}},\"court_media.exclusives\":{\"id\":\"court_media.exclusives\",\"title\":\"Exclusives and access for the big outlets.\",\"subtitle\":\"Media relations up a lot. The elite notices who your friends are.\",\"onArrival\":[{\"$code\":\"Q['rel_media'] = (Q['rel_media'] || 0) + 8;\\nQ['captured'] = (Q['captured'] || 0) + 3;\"}],\"content\":{\"content\":\"First interview, first photograph, first call from the prime minister's office. The big outlets are grateful. So is everyone who owns them.\",\"type\":\"paragraph\"}},\"claim_issue.healthcare\":{\"id\":\"claim_issue.healthcare\",\"title\":\"Healthcare: waiting lists and the health insurance fund.\",\"subtitle\":\"-2 political capital. A step toward credibility on healthcare.\",\"unavailableSubtitle\":\"Needs 2 political capital.\",\"chooseIf\":{\"$code\":\"return ((Q['resources'] || 0) >= 2);\"},\"onArrival\":[{\"$code\":\"Q.resources -= 2;\\nQ.claimed = window.SLO.claim(Q, 'healthcare') ? 1 : 0;\"}],\"content\":{\"content\":{\"type\":\"paragraph\",\"content\":[{\"type\":\"conditional\",\"content\":\"A doctor, a health economist and a former hospital director produce a plan that fits on six pages. People start quoting it. \",\"predicate\":0},{\"type\":\"conditional\",\"content\":\"The plan is sound but the numbers are hard to explain. It is read by the people who write about health policy, and by few others. Another round would help.\",\"predicate\":1}]},\"stateDependencies\":[{\"type\":\"predicate\",\"fn\":{\"$code\":\"return ((Q['claimed'] || 0)===1);\"}},{\"type\":\"predicate\",\"fn\":{\"$code\":\"return ((Q['claimed'] || 0)===0);\"}}]}},\"answer_challenger.outwork\":{\"id\":\"answer_challenger.outwork\",\"title\":\"Outwork them on their own issue.\",\"subtitle\":\"-2 political capital. A step toward credibility on the issue, and the challenger loses momentum.\",\"unavailableSubtitle\":\"Needs 2 political capital.\",\"chooseIf\":{\"$code\":\"return ((Q['resources'] || 0) >= 2);\"},\"onArrival\":[{\"$code\":\"Q.resources -= 2;\\nwindow.SLO.claim(Q, Q.ch_issue);\\nQ.ch_momentum -= 12;\"}],\"content\":{\"content\":{\"type\":\"paragraph\",\"content\":[\"You put three people on \",{\"type\":\"insert\",\"insert\":0},\" and give them a deadline. A plan appears, then another. It is less colourful than the challenger's slogans, and harder to dismiss.\"]},\"stateDependencies\":[{\"type\":\"insert\",\"fn\":{\"$code\":\"return (Q['ch_issue_name'] || 0);\"}}]}},\"ngo_outreach.consultation\":{\"id\":\"ngo_outreach.consultation\",\"title\":\"A public consultation on a cause chosen by the activists.\",\"subtitle\":\"Civil society up. The Establishment dislikes being consulted last.\",\"onArrival\":[{\"$code\":\"Q['rel_ngo'] = (Q['rel_ngo'] || 0) + 8;\\nQ['rel_est'] = (Q['rel_est'] || 0) - 4;\"}],\"content\":{\"content\":\"A hall in Ljubljana, a hundred people, and a rule that the party speaks last. It is the most listening LMŠ has done in a year. The people who usually make the phone calls in the capital note that nobody called them first.\",\"type\":\"paragraph\"}},\"call_favour.story\":{\"id\":\"call_favour.story\",\"title\":\"Make a bad story go away.\",\"subtitle\":\"Needs standing with the Establishment at 35. Media up. A favour owed.\",\"unavailableSubtitle\":\"Needs relations with the Establishment at 35 or more.\",\"chooseIf\":{\"$code\":\"return ((Q['rel_est'] || 0) >= 35);\"},\"onArrival\":[{\"$code\":\"Q['rel_media'] = (Q['rel_media'] || 0) + 6;\\nQ['est_debt'] = (Q['est_debt'] || 0) + 1;\\nQ['captured'] = (Q['captured'] || 0) + 6;\"}],\"content\":{\"content\":\"The article is not printed. Nobody says why. The following week, someone remarks, casually, that you owe them lunch.\",\"type\":\"paragraph\"}},\"field_campaign.suburbs\":{\"id\":\"field_campaign.suburbs\",\"title\":\"The commuter towns: Domžale, Kamnik, Grosuplje.\",\"subtitle\":\"-2 political capital. Roots, and suburban workers.\",\"unavailableSubtitle\":\"Needs 2 political capital.\",\"chooseIf\":{\"$code\":\"return ((Q['resources'] || 0) >= 2);\"},\"onArrival\":[{\"$code\":\"Q.resources -= 2;\\nQ.roots += 4;\\nwindow.SLO.aff(Q, 'suburban', 'lms', 1.5);\\nwindow.SLO.mood(Q, 'suburban', 4);\"}],\"content\":{\"content\":\"Šarec's own ground. People here know him as the mayor who fixed the road, and three of them sign membership forms before the evening is over.\",\"type\":\"paragraph\"}},\"membership_drive.leader\":{\"id\":\"membership_drive.leader\",\"title\":\"A drive under Šarec's name.\",\"subtitle\":\"-1 political capital. Roots up, but they join him, not the party.\",\"unavailableSubtitle\":\"Needs 1 political capital.\",\"chooseIf\":{\"$code\":\"return ((Q['resources'] || 0) >= 1);\"},\"onArrival\":[{\"$code\":\"Q['resources'] = (Q['resources'] || 0) - 1;\\nQ['roots'] = (Q['roots'] || 0) + 3;\\nQ['leader_bonus'] = (Q['leader_bonus'] || 0) + 0.3;\"}],\"content\":{\"content\":\"The forms come in quickly. Under \\\"reason for joining\\\", most say some version of \\\"Šarec\\\". If he leaves, many of them go with him.\",\"type\":\"paragraph\"}},\"mayors_network.council\":{\"id\":\"mayors_network.council\",\"title\":\"Found a council of mayors inside the party.\",\"subtitle\":\"-2 political capital. Mayors up, roots up.\",\"unavailableSubtitle\":\"Needs 2 political capital.\",\"chooseIf\":{\"$code\":\"return ((Q['resources'] || 0) >= 2);\"},\"onArrival\":[{\"$code\":\"Q['resources'] = (Q['resources'] || 0) - 2;\\nQ['rel_mayors'] = (Q['rel_mayors'] || 0) + 10;\\nQ['roots'] = (Q['roots'] || 0) + 3;\"}],\"content\":{\"content\":\"Twenty mayors in a hall in Kamnik. They get a seat at the table and a direct line to the party leader, and they notice that the second one is more valuable than the first.\",\"type\":\"paragraph\"}},\"online_campaign.corruption\":{\"id\":\"online_campaign.corruption\",\"title\":\"Push corruption.\",\"subtitle\":\"Free. Corruption rises on the agenda, whoever owns it.\",\"onArrival\":[{\"$code\":\"window.SLO.salience(Q, 'corruption', 0.3);\\nwindow.SLO.mood(Q, 'urban_prof', 1);\"}],\"content\":{\"content\":\"A thread on state company contracts, a chart, a hashtag. It gets shared well beyond your own followers, including by people who have their own opinions about who should be fixing it.\",\"type\":\"paragraph\"}},\"coalition.invite_smc\":{\"id\":\"coalition.invite_smc\",\"title\":{\"content\":[\"Invite SMC (\",{\"type\":\"insert\",\"insert\":0},\" seats)\"],\"stateDependencies\":[{\"type\":\"insert\",\"fn\":{\"$code\":\"return (Q['smc_r'] || 0);\"}}]},\"subtitle\":\"Miro Cerar wants the foreign ministry.\",\"unavailableSubtitle\":\"Miro Cerar does not want to serve under the man who replaced him as the new face.\",\"viewIf\":{\"$code\":\"return (((Q['gov_smc'] || 0)===0) && ((Q['smc_r'] || 0) > 0));\"},\"chooseIf\":{\"$code\":\"return ((Q['rel_smc'] || 0) >= (40 + (Q['coal_penalty'] || 0)));\"},\"onArrival\":[{\"$code\":\"Q['gov_smc'] = 1;\\nQ['coalition_strain'] = (Q['coalition_strain'] || 0) + 5;\"}],\"goTo\":[{\"id\":\"coalition\"}],\"content\":{\"content\":\"Four years ago Miro Cerar was you: the new face, 35% of the vote, a party named after him. Now he would like to be foreign minister. He does not seem to find this funny.\",\"type\":\"paragraph\"}},\"main.govt\":{\"id\":\"main.govt\",\"title\":\"Government Affairs\",\"viewIf\":{\"$code\":\"return (((Q['in_government'] || 0)) !== 0);\"},\"cardImage\":\"img/card_governmentaffairs.jpg\",\"isDeck\":true,\"options\":[{\"id\":\"#govt_affairs\"}],\"content\":{\"content\":\"\",\"type\":\"paragraph\"}},\"main\":{\"id\":\"main\",\"type\":\"scene\",\"title\":\"Next month\",\"isHand\":true,\"onArrival\":[{\"$code\":\"if (Q.advisor_action_timer <= 0) {\\n    Q.pinnedCardsDescription = 'People - an action is available.';\\n} else {\\n    Q.pinnedCardsDescription = 'People - next action available in ' + Q.advisor_action_timer + ' month(s).';\\n}\"}],\"maxCards\":3,\"options\":[{\"id\":\"@main.party\"},{\"id\":\"@main.govt\"},{\"id\":\"#advisor\"}],\"content\":{\"content\":{\"type\":\"paragraph\",\"content\":[{\"type\":\"conditional\",\"content\":\"The election is on 3 June 2018. \",\"predicate\":0},{\"type\":\"conditional\",\"content\":\"You lead a minority government kept alive by Levica. \",\"predicate\":1},{\"type\":\"conditional\",\"content\":\"You lead a majority government. \",\"predicate\":2},{\"type\":\"conditional\",\"content\":\"You lead a minority government with no majority behind it. \",\"predicate\":3},\" Draw from a deck, then play one card to end the month. Your people's actions do not use up the month.\"]},\"stateDependencies\":[{\"type\":\"predicate\",\"fn\":{\"$code\":\"return (((Q['in_campaign'] || 0)) !== 0);\"}},{\"type\":\"predicate\",\"fn\":{\"$code\":\"return ((((Q['in_government'] || 0)) !== 0) && ((Q['levica_support'] || 0)===1));\"}},{\"type\":\"predicate\",\"fn\":{\"$code\":\"return (((((Q['in_government'] || 0)) !== 0) && ((Q['levica_support'] || 0)===0)) && ((Q['no_majority'] || 0)===0));\"}},{\"type\":\"predicate\",\"fn\":{\"$code\":\"return (((((Q['in_government'] || 0)) !== 0) && ((Q['levica_support'] || 0)===0)) && ((Q['no_majority'] || 0)===1));\"}}]}},\"root.start_menu_2\":{\"id\":\"root.start_menu_2\",\"options\":[{\"id\":\"@root.start\",\"title\":\"Start game\"},{\"id\":\"@library\",\"title\":\"How to play, and who is who\"},{\"id\":\"@root.credits\",\"title\":\"Credits\"}],\"content\":{\"content\":\"\",\"type\":\"paragraph\"}},\"status.issues\":{\"id\":\"status.issues\",\"content\":[{\"type\":\"heading\",\"content\":\"The agenda\"},{\"type\":\"paragraph\",\"content\":{\"type\":\"magic\",\"content\":\"<div data-slo=\\\"issues\\\"></div>\"}}]},\"levica_talks.meeting\":{\"id\":\"levica_talks.meeting\",\"title\":\"A long friendly meeting with Luka Mesec.\",\"subtitle\":\"Free. Patience up a little.\",\"onArrival\":[{\"$code\":\"Q['levica_agreement'] = (Q['levica_agreement'] || 0) + 8;\"}],\"content\":{\"content\":\"Luka Mesec, the Levica coordinator, arrives with a list and leaves with a promise to look at it. The talk is warm and long, and nobody commits to anything, which is also useful.\",\"type\":\"paragraph\"}},\"appointments.share\":{\"id\":\"appointments.share\",\"title\":\"Share the posts among the coalition partners.\",\"subtitle\":\"Strain falls a lot. Looks like the old politics.\",\"onArrival\":[{\"$code\":\"Q['coalition_strain'] = (Q['coalition_strain'] || 0) - 12;\\nQ['captured'] = (Q['captured'] || 0) + 5;\\nQ['rel_ngo'] = (Q['rel_ngo'] || 0) - 4;\"}],\"content\":{\"content\":\"Each partner gets a few boards and a few directors. Everybody is content. The civic groups say, in public, that this is the way it was done before.\",\"type\":\"paragraph\"}},\"public_pay.pensions\":{\"id\":\"public_pay.pensions\",\"title\":\"Raise pensions.\",\"subtitle\":{\"content\":[\"-2 political capital. Pensioners up\",{\"type\":\"conditional\",\"content\":\", but DeSUS gets much of the credit \",\"predicate\":0},\".\"],\"stateDependencies\":[{\"type\":\"predicate\",\"fn\":{\"$code\":\"return (((Q['gov_desus'] || 0)) !== 0);\"}}]},\"unavailableSubtitle\":\"Needs 2 political capital.\",\"chooseIf\":{\"$code\":\"return ((Q['resources'] || 0) >= 2);\"},\"onArrival\":[{\"$code\":\"Q.resources -= 2;\\nwindow.SLO.mood(Q, 'pensioners', 8);\\nQ.rel_desus += 6;\\nif (Q.gov_desus) { window.SLO.aff(Q, 'pensioners', 'desus', 1.5); }\"}],\"content\":{\"content\":\"The pension supplement goes to those on the lowest pensions. Karl Erjavec, the DeSUS leader, announces it himself, in front of a pensioners' club. The pensioners remember who stood next to the microphone.\",\"type\":\"paragraph\"}},\"coalition_management.buy_peace\":{\"id\":\"coalition_management.buy_peace\",\"title\":\"Give each partner something for their own voters.\",\"subtitle\":\"-2 political capital. Lowers strain a lot and mends relations with every partner. Their wins, not yours.\",\"unavailableSubtitle\":\"Needs 2 political capital.\",\"chooseIf\":{\"$code\":\"return ((Q['resources'] || 0) >= 2);\"},\"onArrival\":[{\"$code\":\"Q.resources -= 2;\\nQ.coalition_strain -= 18;\\nQ.rel_sd += 5; Q.rel_smc += 5; Q.rel_sab += 5; Q.rel_desus += 5;\\nif (Q.gov_nsi) { Q.rel_nsi += 5; window.SLO.aff(Q, 'rural_cath', 'nsi', 1.5); }\\nwindow.SLO.aff(Q, 'pensioners', 'desus', 1.5);\\nwindow.SLO.aff(Q, 'suburban', 'sab', 1.5);\\nwindow.SLO.aff(Q, 'public', 'sd', 1.5);\"}],\"content\":{\"content\":\"A pension supplement for Erjavec to announce, a road for Bratušek to open, a directorship for a friend of the Social Democrats. Everybody goes home with something to say. You go home with a quiet month.\",\"type\":\"paragraph\"}},\"housing_policy.subsidy\":{\"id\":\"housing_policy.subsidy\",\"title\":\"A subsidy for first-time buyers.\",\"subtitle\":\"-2 political capital. Quick, popular, and pushes prices up.\",\"unavailableSubtitle\":\"Needs 2 political capital.\",\"chooseIf\":{\"$code\":\"return ((Q['resources'] || 0) >= 2);\"},\"onArrival\":[{\"$code\":\"Q.resources -= 2;\\nwindow.SLO.claim(Q, 'housing');\\nwindow.SLO.mood(Q, 'youth', 3);\"}],\"content\":{\"content\":\"Young buyers get a grant towards the deposit. It helps some of them. Economists note, politely, that more money chasing the same flats has an effect on prices.\",\"type\":\"paragraph\"}},\"healthcare_reform.insurers\":{\"id\":\"healthcare_reform.insurers\",\"title\":\"Take on the insurers and doctors' private practice.\",\"subtitle\":\"-3 political capital. Real reform. The Establishment objects and partners wobble.\",\"unavailableSubtitle\":\"Needs 3 political capital.\",\"chooseIf\":{\"$code\":\"return ((Q['resources'] || 0) >= 3);\"},\"onArrival\":[{\"$code\":\"Q.resources -= 3;\\nwindow.SLO.claim(Q, 'healthcare');\\nwindow.SLO.claim(Q, 'healthcare');\\nQ.rel_est -= 8;\\nQ.coalition_strain += 6;\"}],\"content\":{\"content\":\"Public hospital doctors may not do private work on the same shift. The insurers lose a monopoly on supplementary cover. The medical chamber is furious. The partners ask whether this is the right month for it.\",\"type\":\"paragraph\"}},\"budget_2020.surplus\":{\"id\":\"budget_2020.surplus\",\"title\":\"Keep a surplus.\",\"subtitle\":{\"content\":[\"+2 political capital. Markets and Brussels approve. Voters see nothing.\",{\"type\":\"conditional\",\"content\":\"Levica is angry.\",\"predicate\":0}],\"stateDependencies\":[{\"type\":\"predicate\",\"fn\":{\"$code\":\"return (((Q['levica_support'] || 0)) !== 0);\"}}]},\"onArrival\":[{\"$code\":\"Q.rel_est += 6;\\nQ.resources += 2;\\nwindow.SLO.moodAll(Q, -2);\\nif (Q.levica_support) { Q.levica_agreement -= 8; }\\nif (Q.gov_nsi) { Q.rel_nsi += 3; }\"}],\"content\":{\"content\":\"The deficit goes to zero and stays there. Rating agencies write kind words. In the street, people ask what the surplus is for.\",\"type\":\"paragraph\"}},\"candidate_lists.outsiders\":{\"id\":\"candidate_lists.outsiders\",\"title\":\"Well-known outsiders, recommended by \\\"people who have helped liberal parties before\\\".\",\"subtitle\":\"Leader pull and Establishment goodwill. Owes a favour.\",\"onArrival\":[{\"$code\":\"Q.leader_bonus += 1;\\nQ.est_debt += 1;\\nwindow.SLO.rel(Q, 'est', 6);\"}],\"content\":{\"content\":\"A former diplomat, a professor, a television face. The names arrive with warm phone calls and no conditions, yet. Somebody will remember who made the calls.\",\"type\":\"paragraph\"}},\"cerar_resigns.statesman\":{\"id\":\"cerar_resigns.statesman\",\"title\":\"\\\"The prime minister made a responsible decision. The railway still has to be built.\\\"\",\"subtitle\":\"Dull, and it keeps doors open.\",\"onArrival\":[{\"$code\":\"window.SLO.claim(Q, 'transport');\\nQ.rel_smc += 8;\\nQ.rel_sd += 4;\\nQ.rel_est += 4;\"}],\"content\":{\"content\":\"It is the eighth item on the news. Several people whose opinion matters after an election make a note of it.\",\"type\":\"paragraph\"}},\"climate_strike.praise\":{\"id\":\"climate_strike.praise\",\"title\":\"Praise the students and change nothing.\",\"subtitle\":\"Warm words are cheap, and noticed.\",\"onArrival\":[{\"$code\":\"window.SLO.salience(Q, 'environment', 0.2);\\nwindow.SLO.mood(Q, 'youth', 2);\\nQ.rel_ngo -= 5;\"}],\"content\":{\"content\":\"A press release thanks young people for caring. Activists read it twice and feel patronised.\",\"type\":\"paragraph\"}},\"croatia_arbitration.quiet\":{\"id\":\"croatia_arbitration.quiet\",\"title\":\"Quiet diplomacy, no speeches.\",\"subtitle\":\"Capitals and the commission appreciate it.\",\"onArrival\":[{\"$code\":\"Q['rel_est'] = (Q['rel_est'] || 0) + 5;\"}],\"content\":{\"content\":\"Meetings are held in corridors. Nothing is announced. Diplomats of larger countries remember the restraint.\",\"type\":\"paragraph\"}},\"election_2018.jansa_majority\":{\"id\":\"election_2018.jansa_majority\",\"onArrival\":[{\"$code\":\"Q['ending'] = \\\"opposition\\\";\\nQ['pm_party'] = \\\"sds\\\";\\nQ['gov_sds'] = 1;\\nQ['gov_nsi'] = 1;\\nQ['gov_sns'] = 1;\"}],\"options\":[{\"id\":\"@game_over\",\"title\":\"The end.\"}],\"content\":{\"content\":[{\"type\":\"paragraph\",\"content\":[{\"type\":\"magic\",\"content\":\"<div data-slo=\\\"election\\\"></div>\"},\"\"]},{\"type\":\"paragraph\",\"content\":[\"The last polls had LMŠ at \",{\"type\":\"insert\",\"insert\":0},\" percent; it took \",{\"type\":\"insert\",\"insert\":1},\", and \",{\"type\":\"insert\",\"insert\":2},\" seats.\"]},{\"type\":\"paragraph\",\"content\":[\"Janez Janša's SDS is first, as everyone expected, and this time it is not alone. SDS, NSi and the nationalists of SNS have \",{\"type\":\"insert\",\"insert\":3},\" seats between them, and with the two minority MPs that is a majority. President Pahor gives Janša the mandate. He does not need you.\"]}],\"stateDependencies\":[{\"type\":\"insert\",\"fn\":{\"$code\":\"return (Q['lms_poll'] || 0);\"}},{\"type\":\"insert\",\"fn\":{\"$code\":\"return (Q['lms_votes'] || 0);\"}},{\"type\":\"insert\",\"fn\":{\"$code\":\"return (Q['lms_r'] || 0);\"}},{\"type\":\"insert\",\"fn\":{\"$code\":\"return (Q['right_seats'] || 0);\"}}]}},\"december_exodus.threaten\":{\"id\":\"december_exodus.threaten\",\"title\":\"Threaten early elections.\",\"subtitle\":\"Disciplines the partners, and frightens them. LMŠ rallies.\",\"onArrival\":[{\"$code\":\"Q['coalition_strain'] = (Q['coalition_strain'] || 0) - 4;\\nQ['cohesion'] = (Q['cohesion'] || 0) + 5;\\n if (((Q['gov_smc'] || 0)===1) ) { Q['rel_smc'] = (Q['rel_smc'] || 0) - 5; } \\n if (((Q['gov_desus'] || 0)===1) ) { Q['rel_desus'] = (Q['rel_desus'] || 0) - 5; }\"}],\"content\":{\"content\":\"The prime minister says that if the coalition cannot govern, voters will decide. Your own MPs line up behind him. The partners are furious and, for the moment, quiet.\",\"type\":\"paragraph\"}},\"establishment_bill.refuse\":{\"id\":\"establishment_bill.refuse\",\"title\":\"Refuse.\",\"subtitle\":\"Pays the debt in a different way.\",\"onArrival\":[{\"$code\":\"Q.est_debt -= 1;\\nQ.rel_est -= 20;\\nQ.rel_media -= 8;\"}],\"content\":{\"content\":\"The friend is told no, courteously. Two weeks later the first hostile article on the government's competence appears, in a paper that had been friendly. After that there are more.\",\"type\":\"paragraph\"}},\"establishment_bill\":{\"id\":\"establishment_bill\",\"type\":\"scene\",\"title\":\"A favour is called in\",\"subtitle\":\"A name for a board\",\"newPage\":true,\"tags\":[\"event\"],\"viewIf\":{\"$code\":\"return ((((((Q['in_government'] || 0)) !== 0) && ((Q['est_debt'] || 0) >= 1)) && ((Q['time'] || 0) >= 12)) && ((Q['est_bill_timer'] || 0) <= 0));\"},\"onArrival\":[{\"$code\":\"// the next favour is called in 3 to 9 months from now\\nQ.est_bill_timer = 3 + Math.floor(Math.random() * 7);\"}],\"options\":[{\"id\":\"@establishment_bill.oblige\"},{\"id\":\"@establishment_bill.refuse\"}],\"content\":[{\"type\":\"heading\",\"content\":\"A favour is called in\"},{\"type\":\"paragraph\",\"content\":\"It comes in the form of a polite phone call, and then a lunch. An old acquaintance who helped when it counted would like a certain person to be appointed to the supervisory board of a large state company. The candidate is qualified enough. It is not about that.\"},{\"type\":\"paragraph\",\"content\":\"Nothing is said about what happens if the answer is no. Nothing needs to be said.\"}]},\"donor_dinner.advice_only\":{\"id\":\"donor_dinner.advice_only\",\"title\":\"Attend, but take only advice.\",\"subtitle\":\"Some goodwill. Smaller risk.\",\"onArrival\":[{\"$code\":\"Q.captured += 2;\\nwindow.SLO.rel(Q, 'est', 3);\"}],\"content\":{\"content\":\"You listen to three hours of opinions on tax policy and the right people to hire. The envelope is not touched. The host seems to understand, and also to remember.\",\"type\":\"paragraph\"}},\"family_tender.shelters\":{\"id\":\"family_tender.shelters\",\"title\":\"Let it stand, and find money for the shelters from the reserve.\",\"subtitle\":\"-1 political capital. Everyone gets something and nobody is satisfied.\",\"unavailableSubtitle\":\"Needs 1 political capital.\",\"chooseIf\":{\"$code\":\"return ((Q['resources'] || 0) >= 1);\"},\"onArrival\":[{\"$code\":\"Q.resources -= 1;\\nQ.rel_sd -= 4;\\nQ.rel_nsi -= 3;\\nQ.coalition_strain += 4;\\nwindow.SLO.rel(Q, 'ngo', -3);\"}],\"content\":{\"content\":\"The shelters are funded for a year from the budget reserve. The institute keeps its three. The protest organisers do the arithmetic on a banner.\",\"type\":\"paragraph\"}},\"final_week.saturation\":{\"id\":\"final_week.saturation\",\"title\":\"Saturation television and Facebook advertising.\",\"subtitle\":\"-2 political capital. Šarec's pull grows.\",\"unavailableSubtitle\":\"Needs 2 political capital.\",\"chooseIf\":{\"$code\":\"return ((Q['resources'] || 0) >= 2);\"},\"onArrival\":[{\"$code\":\"Q.resources -= 2;\\nQ.leader_bonus += 1;\"}],\"content\":{\"content\":\"His face is everywhere for six days. It is the same face that brought you here, and it will carry you the rest of the way. It will not be there afterwards for the work.\",\"type\":\"paragraph\"}},\"insurance_bill_2.amend\":{\"id\":\"insurance_bill_2.amend\",\"title\":\"Amend it until Levica rejects it.\",\"subtitle\":\"The bill dies, and Levica is furious.\",\"onArrival\":[{\"$code\":\"if (Q.levica_support) { Q.levica_agreement -= 60; }\\nQ.coalition_strain += 10;\\nif (Q.insurance_committed) { window.SLO.moodAll(Q, -3); }\\nwindow.SLO.moodEvent(Q, 'healthcare', -8);\"}],\"content\":{\"content\":\"The amendments make the bill unrecognisable. Levica votes against its own proposal, and says whose fault that is. The insurers say nothing, which is a luxury.\",\"type\":\"paragraph\"}},\"european_elections.local\":{\"id\":\"european_elections.local\",\"title\":\"Run local candidates and build branches around them.\",\"subtitle\":\"Costs 2 political capital. Builds the party.\",\"chooseIf\":{\"$code\":\"return ((Q['resources'] || 0) >= 2);\"},\"unavailableSubtitle\":\"Needs 2 political capital.\",\"onArrival\":[{\"$code\":\"Q['resources'] = (Q['resources'] || 0) - 2;\\nQ['roots'] = (Q['roots'] || 0) + 4;\"}],\"content\":{\"content\":\"Each candidate is told to find twenty people to hand out leaflets. A good number of them stay on as members after the vote.\",\"type\":\"paragraph\"}},\"mayors_drift.tour\":{\"id\":\"mayors_drift.tour\",\"title\":\"A tour of the municipalities, with promises.\",\"subtitle\":\"Costs time, not money. A week away from Ljubljana strains the coalition.\",\"onArrival\":[{\"$code\":\"Q['rel_mayors'] = (Q['rel_mayors'] || 0) + 6;\\nQ['coalition_strain'] = (Q['coalition_strain'] || 0) + 5;\"}],\"content\":{\"content\":\"Šarec drives to eight towns in a week, eats in each, and listens. People are touched by the effort. The promises will need to be kept, and the coalition partners note who was not at the table that week.\",\"type\":\"paragraph\"}},\"insurance_bill_1.compromise\":{\"id\":\"insurance_bill_1.compromise\",\"title\":\"Propose a slower compromise that keeps the insurers.\",\"subtitle\":\"Levica sees a retreat.\",\"onArrival\":[{\"$code\":\"Q['levica_agreement'] = (Q['levica_agreement'] || 0) - 20;\"}],\"content\":{\"content\":\"A transition period, a ceiling on premiums, a role for the insurers. Levica reads it as a way of saying never.\",\"type\":\"paragraph\"}},\"media_scandal.defend\":{\"id\":\"media_scandal.defend\",\"title\":\"Defend him for a week first.\",\"subtitle\":\"Loyalty has a price. The story grows.\",\"onArrival\":[{\"$code\":\"window.SLO.aff(Q, 'urban_prof', 'lms', -2);\\nwindow.SLO.aff(Q, 'pensioners', 'lms', -1);\\nQ.cohesion += 3;\\nQ.rel_media -= 10;\\nwindow.SLO.moodEvent(Q, 'corruption', -8);\"}],\"content\":{\"content\":\"The prime minister says there is nothing to see. More messages appear. The resignation comes a week later, and by then it reads as a confession.\",\"type\":\"paragraph\"}},\"media_scandal\":{\"id\":\"media_scandal\",\"type\":\"scene\",\"title\":\"The secretary-general\",\"subtitle\":\"April 2019\",\"newPage\":true,\"tags\":[\"event\"],\"viewIf\":{\"$code\":\"return (((((Q['in_government'] || 0)) !== 0) && ((Q['year'] || 0)===2019)) && ((Q['month'] || 0)===4));\"},\"maxVisits\":1,\"onArrival\":[{\"$code\":\"Q['scandal_small'] = 0;\\n if (((Q['rel_media'] || 0) >= 60) ) { Q['scandal_small'] = 1; }\"}],\"options\":[{\"id\":\"@media_scandal.resign\"},{\"id\":\"@media_scandal.defend\"}],\"content\":{\"content\":[{\"type\":\"heading\",\"content\":\"The secretary-general\"},{\"type\":\"paragraph\",\"content\":\"The party's secretary-general, who is also a state secretary, is reported to have pressed a state company to hire an acquaintance. The news site that broke it has text messages. He says nothing improper happened.\"},{\"type\":\"paragraph\",\"content\":[{\"type\":\"conditional\",\"content\":\"Friendly editors give the story little space, and by evening it has slipped down the page. \",\"predicate\":0},{\"type\":\"conditional\",\"content\":\"The story leads every bulletin. \",\"predicate\":1},\"\"]},{\"type\":\"paragraph\",\"content\":\"The prime minister has to decide how long to stand behind him.\"}],\"stateDependencies\":[{\"type\":\"predicate\",\"fn\":{\"$code\":\"return ((Q['scandal_small'] || 0)===1);\"}},{\"type\":\"predicate\",\"fn\":{\"$code\":\"return ((Q['scandal_small'] || 0)===0);\"}}]},\"countVisitsMax\":1},\"minimum_wage.water_down\":{\"id\":\"minimum_wage.water_down\",\"title\":\"Pass a smaller rise, phased in over two years.\",\"subtitle\":\"Costs Levica's patience. Business grumbles less.\",\"onArrival\":[{\"$code\":\"Q['levica_agreement'] = (Q['levica_agreement'] || 0) - 15;\"}],\"content\":{\"content\":\"A committee trims the number and adds exemptions for the smallest firms. Levica votes for it through gritted teeth. Its leaders let it be known that this is not what was agreed.\",\"type\":\"paragraph\"}},\"new_faces_pitch.corruption\":{\"id\":\"new_faces_pitch.corruption\",\"title\":\"Corruption and honest government.\",\"subtitle\":\"Claims the corruption issue. A loud theme, with many rivals.\",\"onArrival\":[{\"$code\":\"window.SLO.claim(Q, 'corruption');\\nwindow.SLO.salience(Q, 'corruption', 0.4);\\nwindow.SLO.aff(Q, 'urban_prof', 'lms', 1);\"}],\"content\":{\"content\":\"It is the safest word in Slovenian politics, and every party uses it. Still, a mayor with a clean record can say it with a straighter face than most.\",\"type\":\"paragraph\"}},\"migration_rhetoric.humane\":{\"id\":\"migration_rhetoric.humane\",\"title\":\"An open and humane line.\",\"subtitle\":\"Urban professionals and NGOs approve. Suburban and rural voters do not.\",\"onArrival\":[{\"$code\":\"window.SLO.own(Q, 'lms', 'migration', 1);\\nwindow.SLO.aff(Q, 'urban_prof', 'lms', 1.5);\\nwindow.SLO.aff(Q, 'suburban', 'lms', -1);\\nwindow.SLO.aff(Q, 'rural_cath', 'lms', -1);\\nwindow.SLO.rel(Q, 'ngo', 8);\\nQ.rel_nsi -= 3;\"}],\"content\":{\"content\":\"It is principled and it is easy to attack. SDS uses the clip on its own channels within the hour.\",\"type\":\"paragraph\"}},\"murmurs.discredit\":{\"id\":\"murmurs.discredit\",\"title\":\"Discredit them. Let friendly journalists do the digging.\",\"subtitle\":\"Works if the media like you. Backfires if they do not.\",\"onArrival\":[{\"$code\":\"Q['discredit_worked'] = 0;\\n if (((Q['rel_media'] || 0) >= 55) ) { Q['discredit_worked'] = 1; } \\n if (((Q['discredit_worked'] || 0)===1) ) { Q['ch_momentum'] = (Q['ch_momentum'] || 0) - 10; } \\n if (((Q['discredit_worked'] || 0)===0) ) { Q['ch_momentum'] = (Q['ch_momentum'] || 0) + 25; } \\nQ['rel_media'] = (Q['rel_media'] || 0) - 8;\\nQ['rel_ngo'] = (Q['rel_ngo'] || 0) - 5;\"}],\"content\":{\"content\":{\"type\":\"paragraph\",\"content\":[{\"type\":\"conditional\",\"content\":\"A few unflattering stories appear. Old business dealings, an awkward quote. The shine comes off a little. \",\"predicate\":0},{\"type\":\"conditional\",\"content\":\"The stories appear, and so does the story of who planted them. The prime minister's office attacking a private citizen is a better headline than anything you found.\",\"predicate\":1}]},\"stateDependencies\":[{\"type\":\"predicate\",\"fn\":{\"$code\":\"return ((Q['discredit_worked'] || 0)===1);\"}},{\"type\":\"predicate\",\"fn\":{\"$code\":\"return ((Q['discredit_worked'] || 0)===0);\"}}]}},\"nlb_question.stall\":{\"id\":\"nlb_question.stall\",\"title\":\"Sell it eventually, on good terms.\",\"subtitle\":\"Vague. Offends few, impresses none.\",\"onArrival\":[{\"$code\":\"Q.rel_est += 1;\"}],\"content\":{\"content\":\"\\\"Not at any price, and not in a hurry.\\\" It is a sentence nobody can disagree with, which is its strength and its weakness.\",\"type\":\"paragraph\"}},\"nlb_sale.minimum\":{\"id\":\"nlb_sale.minimum\",\"title\":\"Sell the minimum and keep a blocking share.\",\"subtitle\":\"A compromise nobody loves.\",\"onArrival\":[{\"$code\":\"Q.rel_est += 3;\\nif (Q.levica_support) { Q.levica_agreement -= 5; }\\nwindow.SLO.mood(Q, 'urban_prol', -2);\"}],\"content\":{\"content\":\"The state sells just enough to satisfy the commitment and keeps a stake large enough to veto major decisions. Investors call it timid. Critics call it a sale all the same.\",\"type\":\"paragraph\"}},\"partner_walkout.carry_on\":{\"id\":\"partner_walkout.carry_on\",\"title\":\"Reshuffle and carry on.\",\"viewIf\":{\"$code\":\"return ((Q['coal_total'] || 0) >= 46);\"},\"content\":{\"content\":\"The majority is still there, on paper. The ministries are handed out again among those who stayed, and each of them now knows what leaving is worth.\",\"type\":\"paragraph\"}},\"partner_walkout\":{\"id\":\"partner_walkout\",\"type\":\"scene\",\"title\":\"A partner leaves\",\"newPage\":true,\"tags\":[\"event\"],\"priority\":2,\"viewIf\":{\"$code\":\"return ((((Q['in_government'] || 0)) !== 0) && ((Q['walk_pending'] || 0)===1));\"},\"onArrival\":[{\"$code\":\"var S = window.SLO;\\nvar out = [];\\nfor (var p of ['sd', 'smc', 'sab', 'desus', 'nsi']) {\\n    if (Q['gov_' + p] && Q['rel_' + p] < 30) { out.push(p); }\\n}\\nQ.walk_left = (Q.gov_nsi && out.indexOf('sd') >= 0) ? 1 : 0;\\nQ.walk_nsi = (out.indexOf('nsi') >= 0) ? 1 : 0;\\n// DeSUS does not stay in a cabinet with NSi once the Social Democrats have gone\\nQ.walk_desus_follows = 0;\\nif (Q.walk_left && Q.gov_desus && Q.rel_desus < 45 && out.indexOf('desus') < 0) {\\n    out.push('desus');\\n    Q.walk_desus_follows = 1;\\n}\\nvar names = [];\\nfor (var o of out) {\\n    Q['gov_' + o] = 0;\\n    names.push(S.PARTY[o].name);\\n}\\nQ.walk_names = names.join(' and ');\\nQ.walk_line = Q.walk_names + (names.length > 1 ? ' have' : ' has') + ' left the government.';\\nQ.walk_pending = 0;\\nQ.partners_lost = (Q.partners_lost || 0) + names.length;\\nQ.coal_total = S.govSeats(Q) + (Q.levica_support ? Q.levica_r : 0) + 2;\\nif (Q.coal_total < 46) {\\n    Q.ending = 'walkout';\\n} else {\\n    Q.coalition_strain += 20;\\n}\\nS.recompute(Q);\"}],\"options\":[{\"id\":\"@partner_walkout.fallen\"},{\"id\":\"@partner_walkout.carry_on\"}],\"content\":{\"content\":[{\"type\":\"heading\",\"content\":\"A partner leaves\"},{\"type\":\"paragraph\",\"content\":[{\"type\":\"emphasis-2\",\"content\":{\"type\":\"insert\",\"insert\":0}},\"\"]},{\"type\":\"paragraph\",\"content\":[{\"type\":\"conditional\",\"content\":\"Dejan Židan, the Social Democrat leader, reads a statement in the lobby of parliament. His party, he says, did not enter this government to carry out New Slovenia's programme. The Social Democrat ministers resign the same afternoon. \",\"predicate\":1},{\"type\":\"conditional\",\"content\":\"Karl Erjavec, the leader of the pensioners' party DeSUS, waits a day and follows him. \",\"predicate\":2},\"\"]},{\"type\":\"paragraph\",\"content\":[{\"type\":\"conditional\",\"content\":[\"\",{\"type\":\"insert\",\"insert\":4},\", the NSi leader, says the coalition agreement has been ignored page by page, and that his party will not lend its name to a government of the left. The NSi ministers resign. \"],\"predicate\":3},\"\"]},{\"type\":\"paragraph\",\"content\":[{\"type\":\"conditional\",\"content\":\"Its ministers resign by letter. Its leader says the prime minister stopped listening months ago, and that nobody should be surprised. \",\"predicate\":5},\"\"]},{\"type\":\"paragraph\",\"content\":[\"That leaves \",{\"type\":\"insert\",\"insert\":6},\" votes out of 90.\"]}],\"stateDependencies\":[{\"type\":\"insert\",\"fn\":{\"$code\":\"return (Q['walk_line'] || 0);\"}},{\"type\":\"predicate\",\"fn\":{\"$code\":\"return ((Q['walk_left'] || 0)===1);\"}},{\"type\":\"predicate\",\"fn\":{\"$code\":\"return ((Q['walk_desus_follows'] || 0)===1);\"}},{\"type\":\"predicate\",\"fn\":{\"$code\":\"return ((Q['walk_nsi'] || 0)===1);\"}},{\"type\":\"insert\",\"fn\":{\"$code\":\"return (Q['nsi_leader'] || 0);\"}},{\"type\":\"predicate\",\"fn\":{\"$code\":\"return (((Q['walk_left'] || 0)===0) && ((Q['walk_nsi'] || 0)===0));\"}},{\"type\":\"insert\",\"fn\":{\"$code\":\"return (Q['coal_total'] || 0);\"}}]}},\"nsi_forum21.defend\":{\"id\":\"nsi_forum21.defend\",\"title\":\"Defend Pogorelec in public.\",\"subtitle\":\"NSi is grateful. SDS media now have their proof, and LMŠ is in the story with him.\",\"onArrival\":[{\"$code\":\"Q.rel_nsi += 8;\\nif (Q.gov_nsi) { Q.coalition_strain -= 3; }\\nwindow.SLO.DEMOS.forEach(function(d) { window.SLO.aff(Q, d, 'nsi', -0.4); window.SLO.aff(Q, d, 'sds', 0.4); });\\nwindow.SLO.aff(Q, 'rural_cath', 'lms', -2);\\nwindow.SLO.aff(Q, 'urban_prof', 'lms', 2);\\nQ.rel_media -= 2;\"}],\"content\":{\"content\":\"Šarec says that a man who sits at a table with people he disagrees with is doing his job. Demokracija prints the quote under a new photograph, this one of Šarec and Pogorelec shaking hands, and asks who else was at the table.\",\"type\":\"paragraph\"}},\"ngo_open_letter.meet\":{\"id\":\"ngo_open_letter.meet\",\"title\":\"Meet them and promise to look into it.\",\"subtitle\":\"A kind gesture. A small gain.\",\"onArrival\":[{\"$code\":\"Q['rel_ngo'] = (Q['rel_ngo'] || 0) + 3;\"}],\"content\":{\"content\":\"Šarec receives their representatives for an hour and says he takes the letter seriously. The photographs are good. Nothing changes.\",\"type\":\"paragraph\"}},\"nsi_council.pogorelec\":{\"id\":\"nsi_council.pogorelec\",\"title\":\"Ask your friends on the council to vote for Janez Pogorelec.\",\"subtitle\":\"Costs 2 political capital. NSi returns to Christian democracy under a leader who will not wait for Janša. SDS media turn on it, and some of its voters go to SDS.\",\"viewIf\":{\"$code\":\"return ((Q['nsi_pragmatists'] || 0)===1);\"},\"chooseIf\":{\"$code\":\"return ((Q['resources'] || 0) >= 2);\"},\"unavailableSubtitle\":\"Needs 2 political capital.\",\"goTo\":[{\"id\":\"coalition\"}],\"onArrival\":[{\"$code\":\"Q.resources -= 2;\\nQ.nsi_pogorelec = 1;\\nQ.nsi_leader = 'Janez Pogorelec'; Q.nsi_surname = 'Pogorelec';\\nwindow.SLO.ideology(Q, 'nsi', 'Christian democracy');\\nQ.rel_nsi += 5;\\nwindow.SLO.DEMOS.forEach(function(d) { window.SLO.aff(Q, d, 'nsi', -1); window.SLO.aff(Q, d, 'sds', 1); });\\nQ.nsi_mp_lost = 0;\\nif (Q.nsi_r >= 2) { Q.nsi_r -= 1; Q.nsi_mp_lost = 1; }\"}],\"content\":{\"content\":{\"type\":\"paragraph\",\"content\":[\"The council accepts Tonin's resignation by a few votes, and then elects Pogorelec. He says NSi will be judged by what it does in government, not by whom it waits for. By the evening the SDS papers call him the left's candidate.\",{\"type\":\"conditional\",\"content\":\"One of Tonin's deputies leaves the NSi group and will sit as an independent.\",\"predicate\":0}]},\"stateDependencies\":[{\"type\":\"predicate\",\"fn\":{\"$code\":\"return (((Q['nsi_mp_lost'] || 0)) !== 0);\"}}]}},\"nsi_council\":{\"id\":\"nsi_council\",\"type\":\"scene\",\"title\":\"The NSi council\",\"subtitle\":\"June 2018\",\"newPage\":true,\"onArrival\":[{\"$code\":\"Q.nsi_council_seen = 1;\"}],\"options\":[{\"id\":\"@nsi_council.back_him\"},{\"id\":\"@nsi_council.pogorelec\"}],\"content\":{\"content\":[{\"type\":\"heading\",\"content\":\"The NSi council\"},{\"type\":\"paragraph\",\"content\":[\"Matej Tonin promised ten percent. NSi took \",{\"type\":\"insert\",\"insert\":0},\". On the Monday after the count he offers the party council his resignation, as he said he would.\"]},{\"type\":\"paragraph\",\"content\":\"The council meets behind closed doors in Ljubljana. Whoever leads NSi out of that room will sit across the table from you within a week.\"}],\"stateDependencies\":[{\"type\":\"insert\",\"fn\":{\"$code\":\"return (Q['nsi_votes'] || 0);\"}}]}},\"private_schools.compulsory\":{\"id\":\"private_schools.compulsory\",\"title\":\"Fund only the compulsory programme.\",\"subtitle\":\"What the coalition actually did. Both sides are mildly annoyed.\",\"onArrival\":[{\"$code\":\"Q.coalition_strain += 4;\\nif (Q.gov_nsi) { if (!Q.nsi_pogorelec) { Q.rel_nsi -= 4; } Q.rel_sd -= 5; } else { Q.rel_nsi -= 2 * (Q.nsi_pogorelec ? 0.5 : 1); }\\nwindow.SLO.mood(Q, 'rural_cath', 2);\\nwindow.SLO.mood(Q, 'urban_prof', -2);\"}],\"content\":{\"content\":\"The compulsory curriculum is paid in full, the rest is not. NSi calls it half a ruling. The left calls it a gift. Neither is quite wrong.\",\"type\":\"paragraph\"}},\"poll_peak.reform\":{\"id\":\"poll_peak.reform\",\"title\":\"Spend it on a hard reform.\",\"subtitle\":\"Uses his pull. Strains the coalition.\",\"onArrival\":[{\"$code\":\"Q.leader_bonus -= 1;\\nwindow.SLO.claim(Q, 'healthcare');\\nwindow.SLO.claim(Q, 'healthcare');\\nQ.coalition_strain += 6;\"}],\"content\":{\"content\":\"He takes a hospital reform to the cabinet and puts his name on it. Partners grumble about being told what to do, but they are not going to say so aloud while the polls look like this.\",\"type\":\"paragraph\"}},\"public_pay_deal.partial\":{\"id\":\"public_pay_deal.partial\",\"title\":\"Offer a smaller rise, staged over three years.\",\"subtitle\":\"Both sides grumble.\",\"onArrival\":[{\"$code\":\"window.SLO.mood(Q, 'public', 2);\\nwindow.SLO.mood(Q, 'self_emp', -1);\"}],\"content\":{\"content\":\"Unions accept the first stage and promise to fight for the rest. It is not a victory for anyone, which is the point of it.\",\"type\":\"paragraph\"}},\"tonin_leader.shrug\":{\"id\":\"tonin_leader.shrug\",\"title\":\"\\\"That is a matter for NSi.\\\"\",\"subtitle\":\"Nothing gained, nothing lost.\",\"content\":{\"content\":\"It is printed in the eleventh paragraph.\",\"type\":\"paragraph\"}},\"public_sector_strikes.restraint\":{\"id\":\"public_sector_strikes.restraint\",\"title\":\"Call for \\\"responsible\\\" restraint.\",\"subtitle\":\"Self-employed voters and the Establishment approve. The public sector does not.\",\"onArrival\":[{\"$code\":\"window.SLO.aff(Q, 'self_emp', 'lms', 1);\\nwindow.SLO.aff(Q, 'public', 'lms', -1);\\nwindow.SLO.rel(Q, 'est', 4);\\nQ.rel_nsi += 3;\"}],\"content\":{\"content\":\"Responsible is a word that sounds good in a boardroom and poor in a school staff room. The business press is pleased.\",\"type\":\"paragraph\"}},\"social_cap.holiday_pay\":{\"id\":\"social_cap.holiday_pay\",\"title\":\"Offer something smaller: holiday pay free of tax and contributions.\",\"subtitle\":\"Every employee gets a little. Nobody gets a reform. NSi and the Social Democrats are both mildly annoyed.\",\"onArrival\":[{\"$code\":\"Q.rel_nsi -= 3 * (Q.nsi_pogorelec ? 0.5 : 1);\\nQ.rel_sd -= 4;\\nQ.coalition_strain += 4;\\nQ.wins += 1;\\nwindow.SLO.moodAll(Q, 2);\"}],\"content\":{\"content\":{\"type\":\"paragraph\",\"content\":[\"The annual holiday allowance will reach workers whole. It is popular and it costs less than the cap. \",{\"type\":\"insert\",\"insert\":0},\" calls it a tip. The Social Democrats ask who is going to fill the hole.\"]},\"stateDependencies\":[{\"type\":\"insert\",\"fn\":{\"$code\":\"return (Q['nsi_surname'] || 0);\"}}]}},\"sarec_decision.carry_on\":{\"id\":\"sarec_decision.carry_on\",\"title\":\"Talk him out of it. Govern with what you have.\",\"unavailableSubtitle\":\"The coalition is too far gone: strain must be below 60 and you need 46 votes.\",\"chooseIf\":{\"$code\":\"return (((Q['coalition_strain'] || 0) < 60) && ((Q['coal_total'] || 0) >= 46));\"},\"onArrival\":[{\"$code\":\"Q['ending'] = \\\"survived\\\";\\nQ['cohesion'] = (Q['cohesion'] || 0) + 5;\"}],\"options\":[{\"id\":\"@game_over\",\"title\":\"The end.\"}],\"content\":{\"content\":\"It takes most of a night. The argument that works is the simplest one: nobody will give you the election, and whoever walks away from the table loses it.\",\"type\":\"paragraph\"}},\"tv_debate.calm\":{\"id\":\"tv_debate.calm\",\"title\":\"Play the calm mayor.\",\"subtitle\":\"Suburbs and pensioners like it. Not exciting.\",\"onArrival\":[{\"$code\":\"window.SLO.aff(Q, 'suburban', 'lms', 1.2);\\nwindow.SLO.aff(Q, 'pensioners', 'lms', 1.2);\"}],\"content\":{\"content\":\"Šarec answers every question about roads, schools and budgets. Janša interrupts. The comparison does the rest, for viewers who like quiet.\",\"type\":\"paragraph\"}},\"workfare.checks\":{\"id\":\"workfare.checks\",\"title\":\"Tighten the checks instead: fewer job offers that can be refused.\",\"subtitle\":\"Half a measure. NSi and the Social Democrats are both mildly annoyed.\",\"onArrival\":[{\"$code\":\"Q.rel_nsi -= 3 * (Q.nsi_pogorelec ? 0.5 : 1);\\nQ.rel_sd -= 4;\\nQ.coalition_strain += 4;\\nwindow.SLO.rel(Q, 'ngo', -3);\\nwindow.SLO.mood(Q, 'urban_prol', -2);\"}],\"content\":{\"content\":\"The employment service gets a new circular and no new staff. NSi says nothing has changed. The Social Democrats say that something has, and that they will remember who asked for it.\",\"type\":\"paragraph\"}},\"waiting_lists.blame\":{\"id\":\"waiting_lists.blame\",\"title\":\"Blame the previous government.\",\"subtitle\":\"Costs nothing. Your MPs like having a line. SMC, which ran that government, does not. Does not help patients.\",\"onArrival\":[{\"$code\":\"window.SLO.moodEvent(Q, 'healthcare', -3);\\nQ.cohesion += 3;\\nQ.rel_smc -= 6;\\nif (Q.gov_smc) { Q.coalition_strain += 4; }\"}],\"content\":{\"content\":\"It is true, and it is also what every government says. Patients on the list do not feel any shorter.\",\"type\":\"paragraph\"}},\"korce.working_group\":{\"id\":\"korce.working_group\",\"title\":\"Programme working group\",\"subtitle\":\"-1 political capital. A step toward credibility on housing.\",\"unavailableSubtitle\":{\"content\":[\"Needs 1 political capital, and \",{\"type\":\"insert\",\"insert\":0},\" month(s) before the next action.\"],\"stateDependencies\":[{\"type\":\"insert\",\"fn\":{\"$code\":\"return (Q['advisor_action_timer'] || 0);\"}}]},\"chooseIf\":{\"$code\":\"return (((Q['advisor_action_timer'] || 0) <= 0) && ((Q['resources'] || 0) >= 1));\"},\"onArrival\":[{\"$code\":\"Q.advisor_action_timer = 4;\\nQ.last_advisor_action = 1;\\nQ.resources -= 1;\\nwindow.SLO.claim(Q, 'housing');\"}],\"content\":{\"content\":\"She brings together young economists, tenants and one architect in a back room of the parliament. They argue, and in the end they write down what they agree on.\",\"type\":\"paragraph\"}},\"korce\":{\"id\":\"korce\",\"type\":\"scene\",\"title\":\"Jerca Korče\",\"isPinnedCard\":true,\"tags\":[\"advisor\"],\"cardImage\":\"img/adv_korce.jpg\",\"newPage\":true,\"options\":[{\"id\":\"@korce.front\"},{\"id\":\"@korce.working_group\"},{\"id\":\"@root\",\"title\":\"Back\"}],\"content\":[{\"type\":\"heading\",\"content\":\"Jerca Korče\"},{\"type\":\"paragraph\",\"content\":\"A young LMŠ MP and one of the party's public faces. She is thirty, she is on television, and she is not Šarec. That is the point.\"}]},\"sarec.discipline\":{\"id\":\"sarec.discipline\",\"title\":\"A word with the MPs\",\"subtitle\":\"Restores group cohesion. He is not a patient man.\",\"unavailableSubtitle\":{\"content\":[{\"type\":\"insert\",\"insert\":0},\" month(s) before the next action.\"],\"stateDependencies\":[{\"type\":\"insert\",\"fn\":{\"$code\":\"return (Q['advisor_action_timer'] || 0);\"}}]},\"chooseIf\":{\"$code\":\"return ((Q['advisor_action_timer'] || 0) <= 0);\"},\"onArrival\":[{\"$code\":\"Q['advisor_action_timer'] = 4;\\nQ['last_advisor_action'] = 1;\\nQ['cohesion'] = (Q['cohesion'] || 0) + 12;\"}],\"content\":{\"content\":\"The group meeting is short. Nobody enjoys it. Nobody talks to the press afterwards either.\",\"type\":\"paragraph\"}},\"sarec\":{\"id\":\"sarec\",\"type\":\"scene\",\"title\":\"Marjan Šarec\",\"isPinnedCard\":true,\"tags\":[\"advisor\"],\"cardImage\":\"img/adv_sarec.jpg\",\"newPage\":true,\"options\":[{\"id\":\"@sarec.interview\"},{\"id\":\"@sarec.discipline\"},{\"id\":\"@root\",\"title\":\"Back\"}],\"content\":{\"content\":[{\"type\":\"heading\",\"content\":\"Marjan Šarec\"},{\"type\":\"paragraph\",\"content\":[\"Mayor of Kamnik, former comedian, the name on the list. Personal pull: \",{\"type\":\"emphasis-2\",\"content\":{\"type\":\"insert\",\"insert\":0}},\". \",{\"type\":\"insert\",\"insert\":1},\"% of LMŠ's support depends on him.\"]}],\"stateDependencies\":[{\"type\":\"insert\",\"fn\":{\"$code\":\"return (Q['leader_bonus'] || 0);\"}},{\"type\":\"insert\",\"fn\":{\"$code\":\"return (Q['leader_dependence'] || 0);\"}}]}},\"golubovic.branches\":{\"id\":\"golubovic.branches\",\"title\":\"Open branches\",\"subtitle\":\"-1 political capital. Roots up.\",\"unavailableSubtitle\":{\"content\":[\"Needs 1 political capital, and \",{\"type\":\"insert\",\"insert\":0},\" month(s) before the next action.\"],\"stateDependencies\":[{\"type\":\"insert\",\"fn\":{\"$code\":\"return (Q['advisor_action_timer'] || 0);\"}}]},\"chooseIf\":{\"$code\":\"return (((Q['advisor_action_timer'] || 0) <= 0) && ((Q['resources'] || 0) >= 1));\"},\"onArrival\":[{\"$code\":\"Q['advisor_action_timer'] = 4;\\nQ['last_advisor_action'] = 1;\\nQ['resources'] = (Q['resources'] || 0) - 1;\\nQ['roots'] = (Q['roots'] || 0) + 3;\"}],\"content\":{\"content\":\"Three local offices open in a month, each in a rented room above a shop. They are small, but each one has a key and a person who answers the door.\",\"type\":\"paragraph\"}},\"golubovic\":{\"id\":\"golubovic\",\"type\":\"scene\",\"title\":\"Brane Golubović\",\"isPinnedCard\":true,\"tags\":[\"advisor\"],\"cardImage\":\"img/adv_golubovic.jpg\",\"newPage\":true,\"options\":[{\"id\":\"@golubovic.count\"},{\"id\":\"@golubovic.branches\"},{\"id\":\"@root\",\"title\":\"Back\"}],\"content\":{\"content\":[{\"type\":\"heading\",\"content\":\"Brane Golubović\"},{\"type\":\"paragraph\",\"content\":[\"LMŠ secretary-general and later head of the parliamentary group. The organiser: he counts the votes, the branches and the people who answer their phones. Cohesion: \",{\"type\":\"emphasis-2\",\"content\":{\"type\":\"insert\",\"insert\":0}},\"/100. Roots: \",{\"type\":\"emphasis-2\",\"content\":{\"type\":\"insert\",\"insert\":1}},\"/100.\"]}],\"stateDependencies\":[{\"type\":\"insert\",\"fn\":{\"$code\":\"return (Q['cohesion'] || 0);\"}},{\"type\":\"insert\",\"fn\":{\"$code\":\"return (Q['roots'] || 0);\"}}]}},\"court_media.open_press\":{\"id\":\"court_media.open_press\",\"title\":\"A regular open press conference.\",\"subtitle\":\"Media relations up. A little goodwill from civil society too.\",\"onArrival\":[{\"$code\":\"Q['rel_media'] = (Q['rel_media'] || 0) + 4;\\nQ['rel_ngo'] = (Q['rel_ngo'] || 0) + 2;\"}],\"content\":{\"content\":\"Every Monday, in the party office, any journalist, any question. Some of the questions are rude. The independent outlets and the civic groups take note of the openness.\",\"type\":\"paragraph\"}},\"claim_issue.housing\":{\"id\":\"claim_issue.housing\",\"title\":\"Housing: rents, flats and the young.\",\"subtitle\":\"-2 political capital. A step toward credibility on housing.\",\"unavailableSubtitle\":\"Needs 2 political capital.\",\"chooseIf\":{\"$code\":\"return ((Q['resources'] || 0) >= 2);\"},\"onArrival\":[{\"$code\":\"Q.resources -= 2;\\nQ.claimed = window.SLO.claim(Q, 'housing') ? 1 : 0;\\nwindow.SLO.aff(Q, 'urban_prol', 'lms', 1.5);\"}],\"content\":{\"content\":{\"type\":\"paragraph\",\"content\":[{\"type\":\"conditional\",\"content\":\"A young architect and an economist from the Ljubljana housing fund write the paper. For once, a party has something concrete to say about rent. \",\"predicate\":0},{\"type\":\"conditional\",\"content\":\"The working group agrees on the problem and argues for three evenings about the solution. The paper is not ready, but it is closer.\",\"predicate\":1}]},\"stateDependencies\":[{\"type\":\"predicate\",\"fn\":{\"$code\":\"return ((Q['claimed'] || 0)===1);\"}},{\"type\":\"predicate\",\"fn\":{\"$code\":\"return ((Q['claimed'] || 0)===0);\"}}]}},\"answer_challenger.invite\":{\"id\":\"answer_challenger.invite\",\"title\":\"Invite them in: an alliance or a joint list.\",\"subtitle\":\"-3 political capital. Momentum falls a lot. Costs cohesion, brings roots.\",\"unavailableSubtitle\":\"Needs 3 political capital, and civil society at 50 or mayors at 60.\",\"chooseIf\":{\"$code\":\"return (((Q['resources'] || 0) >= 3) && ((((Q['rel_ngo'] || 0) >= 50) || ((Q['rel_mayors'] || 0) >= 60))));\"},\"onArrival\":[{\"$code\":\"Q['resources'] = (Q['resources'] || 0) - 3;\\nQ['ch_momentum'] = (Q['ch_momentum'] || 0) - 30;\\nQ['cohesion'] = (Q['cohesion'] || 0) - 6;\\nQ['roots'] = (Q['roots'] || 0) + 4;\"}],\"content\":{\"content\":\"The challenger's people are invited to dinner, and then to a meeting, and then to a place on the list. Their following comes with them, as do their opinions. The MPs ask who is in charge.\",\"type\":\"paragraph\"}},\"ngo_outreach.campaign\":{\"id\":\"ngo_outreach.campaign\",\"title\":\"Fund and attend a civic campaign on the environment.\",\"subtitle\":\"Civil society up. Environment on the agenda, young voters pleased.\",\"onArrival\":[{\"$code\":\"Q.rel_ngo += 6;\\nwindow.SLO.salience(Q, 'environment', 0.3);\\nwindow.SLO.mood(Q, 'youth', 3);\"}],\"content\":{\"content\":\"A river clean-up, a petition, a stage with no logos. Šarec carries a rubbish bag in front of the cameras. The students on the bank see him, and some clap.\",\"type\":\"paragraph\"}},\"call_favour.money\":{\"id\":\"call_favour.money\",\"title\":\"Ask for money and people.\",\"subtitle\":\"Needs standing with the Establishment at 35. +3 political capital. A favour owed.\",\"unavailableSubtitle\":\"Needs relations with the Establishment at 35 or more.\",\"chooseIf\":{\"$code\":\"return ((Q['rel_est'] || 0) >= 35);\"},\"onArrival\":[{\"$code\":\"Q['resources'] = (Q['resources'] || 0) + 3;\\nQ['est_debt'] = (Q['est_debt'] || 0) + 1;\\nQ['captured'] = (Q['captured'] || 0) + 6;\"}],\"content\":{\"content\":\"Donations arrive from people who prefer not to be named, and two experienced staffers with excellent contacts join the office. It is a generous gift. Like all gifts, it has a giver.\",\"type\":\"paragraph\"}},\"field_campaign.countryside\":{\"id\":\"field_campaign.countryside\",\"title\":\"The villages, through friendly mayors.\",\"subtitle\":\"-2 political capital. Roots, if the mayors are with you.\",\"unavailableSubtitle\":\"Needs 2 political capital.\",\"chooseIf\":{\"$code\":\"return ((Q['resources'] || 0) >= 2);\"},\"onArrival\":[{\"$code\":\"Q.resources -= 2;\\nQ.roots += (Q.rel_mayors >= 50 ? 5 : 2);\\nwindow.SLO.aff(Q, 'rural_cath', 'lms', 0.8);\\nwindow.SLO.rel(Q, 'mayors', 3);\"}],\"content\":{\"content\":{\"type\":\"paragraph\",\"content\":[{\"type\":\"conditional\",\"content\":\"The mayor introduces you himself, which here is worth more than a billboard. A branch is founded in the back room of a gostilna. \",\"predicate\":0},{\"type\":\"conditional\",\"content\":\"The mayor is polite and busy. You hold the meeting without him, and the hall is half empty.\",\"predicate\":1}]},\"stateDependencies\":[{\"type\":\"predicate\",\"fn\":{\"$code\":\"return ((Q['rel_mayors'] || 0) >= 50);\"}},{\"type\":\"predicate\",\"fn\":{\"$code\":\"return ((Q['rel_mayors'] || 0) < 50);\"}}]}},\"membership_drive.programme\":{\"id\":\"membership_drive.programme\",\"title\":\"A drive around a programme point.\",\"subtitle\":\"-2 political capital. Roots up, and the group gets a shared purpose.\",\"unavailableSubtitle\":\"Needs 2 political capital.\",\"chooseIf\":{\"$code\":\"return ((Q['resources'] || 0) >= 2);\"},\"onArrival\":[{\"$code\":\"Q['resources'] = (Q['resources'] || 0) - 2;\\nQ['roots'] = (Q['roots'] || 0) + 3;\\nQ['cohesion'] = (Q['cohesion'] || 0) + 4;\"}],\"content\":{\"content\":\"Fewer sign up, but they know what they signed. They show up to meetings with opinions and, occasionally, with arguments. The MPs find it easier to know what the party wants.\",\"type\":\"paragraph\"}},\"mayors_network.projects\":{\"id\":\"mayors_network.projects\",\"title\":\"Promise local projects.\",\"subtitle\":\"Mayors up. In government, partners notice the favours and strain rises.\",\"onArrival\":[{\"$code\":\"Q['rel_mayors'] = (Q['rel_mayors'] || 0) + 6;\\n if ((((Q['in_government'] || 0)) !== 0) ) { Q['coalition_strain'] = (Q['coalition_strain'] || 0) + 3; }\"}],\"content\":{\"content\":\"A bypass here, a school roof there. In opposition it is only a promise. In government, someone else's minister has to agree to the money, and the partners remember who asked.\",\"type\":\"paragraph\"}},\"online_campaign.healthcare\":{\"id\":\"online_campaign.healthcare\",\"title\":\"Push healthcare.\",\"subtitle\":\"-1 political capital. Waiting lists become the story.\",\"unavailableSubtitle\":\"Needs 1 political capital.\",\"chooseIf\":{\"$code\":\"return ((Q['resources'] || 0) >= 1);\"},\"onArrival\":[{\"$code\":\"Q.resources -= 1;\\nwindow.SLO.salience(Q, 'healthcare', 0.3);\\nwindow.SLO.moodEvent(Q, 'healthcare', -1);\"}],\"content\":{\"content\":\"Patients post their own waiting times under your hashtag. The issue is now on the table, and so is the question of who has been in charge of it.\",\"type\":\"paragraph\"}},\"coalition.invite_sab\":{\"id\":\"coalition.invite_sab\",\"title\":{\"content\":[\"Invite SAB (\",{\"type\":\"insert\",\"insert\":0},\" seats)\"],\"stateDependencies\":[{\"type\":\"insert\",\"fn\":{\"$code\":\"return (Q['sab_r'] || 0);\"}}]},\"subtitle\":\"Alenka Bratušek wants infrastructure.\",\"unavailableSubtitle\":\"Bratušek is not interested.\",\"viewIf\":{\"$code\":\"return (((Q['gov_sab'] || 0)===0) && ((Q['sab_r'] || 0) > 0));\"},\"chooseIf\":{\"$code\":\"return ((Q['rel_sab'] || 0) >= (40 + (Q['coal_penalty'] || 0)));\"},\"onArrival\":[{\"$code\":\"Q['gov_sab'] = 1;\\nQ['coalition_strain'] = (Q['coalition_strain'] || 0) + 4;\"}],\"goTo\":[{\"id\":\"coalition\"}],\"content\":{\"content\":\"A former prime minister with five MPs and a long memory. She takes the infrastructure ministry and the second-track railway that comes with it.\",\"type\":\"paragraph\"}},\"root.credits\":{\"id\":\"root.credits\",\"title\":\"Credits\",\"options\":[{\"id\":\"@root.start_menu_2\",\"title\":\"Back\"}],\"content\":{\"type\":\"paragraph\",\"content\":[\"A total conversion of \",{\"type\":\"emphasis-1\",\"content\":\"Social Democracy: An Alternate History\"},\" by Autumn Chen (MIT licence), built with DendryNexus. This is an early proof of concept: it covers February 2018 to January 2020.\"]}},\"status.relations\":{\"id\":\"status.relations\",\"content\":{\"content\":[{\"type\":\"heading\",\"content\":\"Outside actors\"},{\"type\":\"paragraph\",\"content\":[{\"type\":\"magic\",\"content\":\"<div data-slo=\\\"relations\\\"></div>\"},\"\"]},{\"type\":\"paragraph\",\"content\":[{\"type\":\"conditional\",\"content\":[\"Favours owed to the Establishment: \",{\"type\":\"emphasis-2\",\"content\":{\"type\":\"insert\",\"insert\":1}},\" \"],\"predicate\":0},\"\"]},{\"type\":\"heading\",\"content\":\"Other parties\"},{\"type\":\"paragraph\",\"content\":[\"SD: \",{\"type\":\"insert\",\"insert\":2},\"\"]},{\"type\":\"paragraph\",\"content\":[\"SMC: \",{\"type\":\"insert\",\"insert\":3},\"\"]},{\"type\":\"paragraph\",\"content\":[\"SAB: \",{\"type\":\"insert\",\"insert\":4},\"\"]},{\"type\":\"paragraph\",\"content\":[\"DeSUS: \",{\"type\":\"insert\",\"insert\":5},\"\"]},{\"type\":\"paragraph\",\"content\":[\"Levica: \",{\"type\":\"insert\",\"insert\":6},\"\"]},{\"type\":\"paragraph\",\"content\":[\"NSi: \",{\"type\":\"insert\",\"insert\":7},\"\"]},{\"type\":\"paragraph\",\"content\":[\"SDS: \",{\"type\":\"insert\",\"insert\":8},\"\"]},{\"type\":\"paragraph\",\"content\":[{\"type\":\"conditional\",\"content\":\"A cabinet partner whose relation with you turns cold or worse leaves the government. \",\"predicate\":9},\"\"]},{\"type\":\"paragraph\",\"content\":[{\"type\":\"magic\",\"content\":\"<div data-slo=\\\"coalition\\\"></div>\"},\"\"]},{\"type\":\"paragraph\",\"content\":[{\"type\":\"conditional\",\"content\":[\"Coalition: \",{\"type\":\"emphasis-2\",\"content\":{\"type\":\"insert\",\"insert\":11}},\" \"],\"predicate\":10},\"\"]},{\"type\":\"paragraph\",\"content\":[{\"type\":\"conditional\",\"content\":[\"Levica's patience with the support agreement: \",{\"type\":\"emphasis-2\",\"content\":{\"type\":\"insert\",\"insert\":13}},\"/100 \"],\"predicate\":12},\"\"]},{\"type\":\"paragraph\",\"content\":{\"type\":\"conditional\",\"content\":\"Levica has withdrawn its support.\",\"predicate\":14}}],\"stateDependencies\":[{\"type\":\"predicate\",\"fn\":{\"$code\":\"return ((Q['est_debt'] || 0) > 0);\"}},{\"type\":\"insert\",\"fn\":{\"$code\":\"return (Q['est_debt'] || 0);\"}},{\"type\":\"insert\",\"fn\":{\"$code\":\"return (Q['rel_sd'] || 0);\"},\"qdisplay\":\"relationships\"},{\"type\":\"insert\",\"fn\":{\"$code\":\"return (Q['rel_smc'] || 0);\"},\"qdisplay\":\"relationships\"},{\"type\":\"insert\",\"fn\":{\"$code\":\"return (Q['rel_sab'] || 0);\"},\"qdisplay\":\"relationships\"},{\"type\":\"insert\",\"fn\":{\"$code\":\"return (Q['rel_desus'] || 0);\"},\"qdisplay\":\"relationships\"},{\"type\":\"insert\",\"fn\":{\"$code\":\"return (Q['rel_levica'] || 0);\"},\"qdisplay\":\"relationships\"},{\"type\":\"insert\",\"fn\":{\"$code\":\"return (Q['rel_nsi'] || 0);\"},\"qdisplay\":\"relationships\"},{\"type\":\"insert\",\"fn\":{\"$code\":\"return (Q['rel_sds'] || 0);\"},\"qdisplay\":\"relationships\"},{\"type\":\"predicate\",\"fn\":{\"$code\":\"return (((Q['in_government'] || 0)) !== 0);\"}},{\"type\":\"predicate\",\"fn\":{\"$code\":\"return (((Q['in_government'] || 0)) !== 0);\"}},{\"type\":\"insert\",\"fn\":{\"$code\":\"return (Q['coalition_strain'] || 0);\"},\"qdisplay\":\"strain\"},{\"type\":\"predicate\",\"fn\":{\"$code\":\"return ((((Q['in_government'] || 0)) !== 0) && (((Q['levica_support'] || 0)) !== 0));\"}},{\"type\":\"insert\",\"fn\":{\"$code\":\"return (Q['levica_agreement'] || 0);\"}},{\"type\":\"predicate\",\"fn\":{\"$code\":\"return ((((Q['in_government'] || 0)) !== 0) && (((Q['levica_gone'] || 0)) !== 0));\"}}]}},\"status\":{\"id\":\"status\",\"type\":\"scene\",\"title\":\"Status\",\"newPage\":true,\"isSpecial\":true,\"content\":{\"content\":[{\"type\":\"heading\",\"content\":[\"\",{\"type\":\"insert\",\"insert\":0},\" \",{\"type\":\"insert\",\"insert\":1},\"\"]},{\"type\":\"paragraph\",\"content\":[{\"type\":\"conditional\",\"content\":[\"\",{\"type\":\"emphasis-2\",\"content\":\"Campaign.\"},\" Election on 3 June 2018. \"],\"predicate\":2},{\"type\":\"conditional\",\"content\":[\"\",{\"type\":\"emphasis-2\",\"content\":\"In government.\"},\" Prime Minister Šarec leads a minority coalition. \"],\"predicate\":3},{\"type\":\"conditional\",\"content\":[\"\",{\"type\":\"emphasis-2\",\"content\":\"In government.\"},\" Prime Minister Šarec leads a majority coalition that includes NSi. \"],\"predicate\":4},\"\"]},{\"type\":\"paragraph\",\"content\":[\"Political capital: \",{\"type\":\"emphasis-2\",\"content\":{\"type\":\"insert\",\"insert\":5}},\"\"]},{\"type\":\"heading\",\"content\":\"Polls\"},{\"type\":\"paragraph\",\"content\":[{\"type\":\"magic\",\"content\":\"<div data-slo=\\\"polls\\\"></div>\"},\"\"]},{\"type\":\"heading\",\"content\":\"The party\"},{\"type\":\"paragraph\",\"content\":[{\"type\":\"magic\",\"content\":\"<div data-slo=\\\"party\\\"></div>\"},\"\"]},{\"type\":\"heading\",\"content\":\"Challengers\"},{\"type\":\"paragraph\",\"content\":{\"type\":\"magic\",\"content\":\"<div data-slo=\\\"challenger\\\"></div>\"}}],\"stateDependencies\":[{\"type\":\"insert\",\"fn\":{\"$code\":\"return (Q['month'] || 0);\"},\"qdisplay\":\"month\"},{\"type\":\"insert\",\"fn\":{\"$code\":\"return (Q['year'] || 0);\"}},{\"type\":\"predicate\",\"fn\":{\"$code\":\"return (((Q['in_campaign'] || 0)) !== 0);\"}},{\"type\":\"predicate\",\"fn\":{\"$code\":\"return ((((Q['in_government'] || 0)) !== 0) && ((Q['gov_nsi'] || 0)===0));\"}},{\"type\":\"predicate\",\"fn\":{\"$code\":\"return ((((Q['in_government'] || 0)) !== 0) && ((Q['gov_nsi'] || 0)===1));\"}},{\"type\":\"insert\",\"fn\":{\"$code\":\"return (Q['resources'] || 0);\"}}]}},\"levica_talks.janssa\":{\"id\":\"levica_talks.janssa\",\"title\":\"Remind them that the alternative is Janša.\",\"subtitle\":\"Free. Patience down, but the coalition partners like it.\",\"onArrival\":[{\"$code\":\"Q['levica_agreement'] = (Q['levica_agreement'] || 0) - 5;\\nQ['coalition_strain'] = (Q['coalition_strain'] || 0) - 6;\"}],\"content\":{\"content\":\"It is true, and everyone in the room knows it. Levica does not enjoy hearing it. The coalition partners, who have been saying the same thing for months, are glad someone finally did.\",\"type\":\"paragraph\"}},\"levica_talks\":{\"id\":\"levica_talks\",\"type\":\"scene\",\"title\":\"Talks with Levica\",\"subtitle\":\"Their votes keep the government alive. Keep them patient.\",\"newPage\":true,\"isCard\":true,\"tags\":[\"govt_affairs\"],\"viewIf\":{\"$code\":\"return (((((Q['in_government'] || 0)) !== 0) && ((Q['levica_support'] || 0)===1)) && ((Q['levica_talks_timer'] || 0) <= 0));\"},\"onArrival\":[{\"$code\":\"Q['month_actions'] = (Q['month_actions'] || 0) + 1;\\nQ['levica_talks_timer'] = 3;\"}],\"cardImage\":\"img/card_levica.jpg\",\"options\":[{\"id\":\"@levica_talks.deliver\"},{\"id\":\"@levica_talks.meeting\"},{\"id\":\"@levica_talks.janssa\"},{\"id\":\"@discard_card\"},{\"id\":\"@easy_discard\"}],\"content\":{\"content\":[{\"type\":\"heading\",\"content\":\"Talks with Levica\"},{\"type\":\"paragraph\",\"content\":[\"Levica, the radical left party, does not sit in the cabinet but supports it in parliament, in exchange for a list of items. Their patience is at \",{\"type\":\"emphasis-2\",\"content\":{\"type\":\"insert\",\"insert\":0}},\"/100. At zero they walk. What do you offer?\"]}],\"stateDependencies\":[{\"type\":\"insert\",\"fn\":{\"$code\":\"return (Q['levica_agreement'] || 0);\"}}]}},\"appointments.shortlist\":{\"id\":\"appointments.shortlist\",\"title\":\"Take the Establishment's shortlist.\",\"subtitle\":\"Establishment up a lot. It also looks captured.\",\"onArrival\":[{\"$code\":\"Q['rel_est'] = (Q['rel_est'] || 0) + 10;\\nQ['captured'] = (Q['captured'] || 0) + 10;\"}],\"content\":{\"content\":\"The names arrive on one sheet of paper, with qualifications. They are all competent. They are also all the same people as before. The favour is noted, and it is not forgotten.\",\"type\":\"paragraph\"}},\"appointments\":{\"id\":\"appointments\",\"type\":\"scene\",\"title\":\"Appointments\",\"subtitle\":\"Who runs the state companies and agencies?\",\"newPage\":true,\"isCard\":true,\"tags\":[\"govt_affairs\"],\"viewIf\":{\"$code\":\"return ((((Q['in_government'] || 0)) !== 0) && ((Q['appointments_timer'] || 0) <= 0));\"},\"onArrival\":[{\"$code\":\"Q['month_actions'] = (Q['month_actions'] || 0) + 1;\\nQ['appointments_timer'] = 5;\"}],\"cardImage\":\"img/card_appointments.jpg\",\"options\":[{\"id\":\"@appointments.open\"},{\"id\":\"@appointments.share\"},{\"id\":\"@appointments.shortlist\"},{\"id\":\"@discard_card\"},{\"id\":\"@easy_discard\"}],\"content\":[{\"type\":\"heading\",\"content\":\"Appointments\"},{\"type\":\"paragraph\",\"content\":\"Supervisory boards, agencies and state companies all need people, and every party in the coalition has a list of names. The appointments decide more than the laws do. How do you fill the posts?\"}]},\"public_pay.hold\":{\"id\":\"public_pay.hold\",\"title\":\"Hold the line.\",\"subtitle\":\"Free. The Establishment approves. Public employees do not.\",\"onArrival\":[{\"$code\":\"Q.rel_est += 4;\\nwindow.SLO.mood(Q, 'public', -6);\"}],\"content\":{\"content\":\"The finance minister is pleased. The unions threaten a strike for the autumn, and hold a protest in front of the parliament to prove they mean it.\",\"type\":\"paragraph\"}},\"public_pay\":{\"id\":\"public_pay\",\"type\":\"scene\",\"title\":\"Public sector pay\",\"subtitle\":\"Unions, pensioners and a budget that does not stretch.\",\"newPage\":true,\"isCard\":true,\"tags\":[\"govt_affairs\"],\"viewIf\":{\"$code\":\"return ((((Q['in_government'] || 0)) !== 0) && ((Q['public_pay_timer'] || 0) <= 0));\"},\"onArrival\":[{\"$code\":\"Q['month_actions'] = (Q['month_actions'] || 0) + 1;\\nQ['public_pay_timer'] = 5;\"}],\"cardImage\":\"img/card_publicsector.jpg\",\"options\":[{\"id\":\"@public_pay.wages\"},{\"id\":\"@public_pay.pensions\"},{\"id\":\"@public_pay.hold\"},{\"id\":\"@discard_card\"},{\"id\":\"@easy_discard\"}],\"content\":[{\"type\":\"heading\",\"content\":\"Public sector pay\"},{\"type\":\"paragraph\",\"content\":\"The unions have put their demands in writing. Nurses, teachers and police want wages restored after the austerity years. The pensioners' party wants something for pensions. The finance minister wants neither. What do you do?\"}]},\"coalition_management.show_strength\":{\"id\":\"coalition_management.show_strength\",\"title\":\"Remind them who the prime minister is.\",\"subtitle\":\"Šarec's personal pull holds them in line, while he has it. Raises strain if he does not.\",\"onArrival\":[{\"$code\":\"Q['show_ok'] = 0;\\n if (((Q['leader_bonus'] || 0) >= 4) ) { Q['show_ok'] = 1; } \\n if (((Q['show_ok'] || 0)===1) ) { Q['coalition_strain'] = (Q['coalition_strain'] || 0) - 10; } \\n if (((Q['show_ok'] || 0)===0) ) { Q['coalition_strain'] = (Q['coalition_strain'] || 0) + 10; } \\nQ['cohesion'] = (Q['cohesion'] || 0) + 5;\"}],\"content\":{\"content\":{\"type\":\"paragraph\",\"content\":[{\"type\":\"conditional\",\"content\":\"He does it in public, on the evening news, without raising his voice. The partners check the polls, see his numbers and theirs, and stay quiet. \",\"predicate\":0},{\"type\":\"conditional\",\"content\":\"He does it in public, on the evening news. The partners check the polls and see that his numbers are no longer what they were. Erjavec gives an interview of his own.\",\"predicate\":1}]},\"stateDependencies\":[{\"type\":\"predicate\",\"fn\":{\"$code\":\"return ((Q['show_ok'] || 0)===1);\"}},{\"type\":\"predicate\",\"fn\":{\"$code\":\"return ((Q['show_ok'] || 0)===0);\"}}]}},\"coalition_management\":{\"id\":\"coalition_management\",\"type\":\"scene\",\"title\":\"Coalition management\",\"subtitle\":\"Keep the partners at the table.\",\"newPage\":true,\"isCard\":true,\"tags\":[\"govt_affairs\"],\"viewIf\":{\"$code\":\"return ((((Q['in_government'] || 0)) !== 0) && ((Q['coalition_management_timer'] || 0) <= 0));\"},\"onArrival\":[{\"$code\":\"Q['month_actions'] = (Q['month_actions'] || 0) + 1;\\nQ['coalition_management_timer'] = 3;\"}],\"cardImage\":\"img/card_coalition.jpg\",\"options\":[{\"id\":\"@coalition_management.summit\"},{\"id\":\"@coalition_management.buy_peace\"},{\"id\":\"@coalition_management.show_strength\"},{\"id\":\"@discard_card\"},{\"id\":\"@easy_discard\"}],\"content\":{\"content\":[{\"type\":\"heading\",\"content\":\"Coalition management\"},{\"type\":\"paragraph\",\"content\":[\"Several parties, one of them yours\",{\"type\":\"conditional\",\"content\":\", and one more outside the door with a list \",\"predicate\":0},\". The coalition is \",{\"type\":\"emphasis-2\",\"content\":{\"type\":\"insert\",\"insert\":1}},\". A partner whose relation with you turns cold leaves the cabinet.\"]},{\"type\":\"paragraph\",\"content\":[{\"type\":\"conditional\",\"content\":[\"SD: \",{\"type\":\"insert\",\"insert\":3},\" \"],\"predicate\":2},\"\"]},{\"type\":\"paragraph\",\"content\":[{\"type\":\"conditional\",\"content\":[\"SMC: \",{\"type\":\"insert\",\"insert\":5},\" \"],\"predicate\":4},\"\"]},{\"type\":\"paragraph\",\"content\":[{\"type\":\"conditional\",\"content\":[\"SAB: \",{\"type\":\"insert\",\"insert\":7},\" \"],\"predicate\":6},\"\"]},{\"type\":\"paragraph\",\"content\":[{\"type\":\"conditional\",\"content\":[\"DeSUS: \",{\"type\":\"insert\",\"insert\":9},\" \"],\"predicate\":8},\"\"]},{\"type\":\"paragraph\",\"content\":[{\"type\":\"conditional\",\"content\":[\"NSi: \",{\"type\":\"insert\",\"insert\":11},\" \"],\"predicate\":10},\"\"]},{\"type\":\"paragraph\",\"content\":\"Who gets your Thursday evening?\"}],\"stateDependencies\":[{\"type\":\"predicate\",\"fn\":{\"$code\":\"return (((Q['levica_support'] || 0)) !== 0);\"}},{\"type\":\"insert\",\"fn\":{\"$code\":\"return (Q['coalition_strain'] || 0);\"},\"qdisplay\":\"strain\"},{\"type\":\"predicate\",\"fn\":{\"$code\":\"return (((Q['gov_sd'] || 0)) !== 0);\"}},{\"type\":\"insert\",\"fn\":{\"$code\":\"return (Q['rel_sd'] || 0);\"},\"qdisplay\":\"relationships\"},{\"type\":\"predicate\",\"fn\":{\"$code\":\"return (((Q['gov_smc'] || 0)) !== 0);\"}},{\"type\":\"insert\",\"fn\":{\"$code\":\"return (Q['rel_smc'] || 0);\"},\"qdisplay\":\"relationships\"},{\"type\":\"predicate\",\"fn\":{\"$code\":\"return (((Q['gov_sab'] || 0)) !== 0);\"}},{\"type\":\"insert\",\"fn\":{\"$code\":\"return (Q['rel_sab'] || 0);\"},\"qdisplay\":\"relationships\"},{\"type\":\"predicate\",\"fn\":{\"$code\":\"return (((Q['gov_desus'] || 0)) !== 0);\"}},{\"type\":\"insert\",\"fn\":{\"$code\":\"return (Q['rel_desus'] || 0);\"},\"qdisplay\":\"relationships\"},{\"type\":\"predicate\",\"fn\":{\"$code\":\"return (((Q['gov_nsi'] || 0)) !== 0);\"}},{\"type\":\"insert\",\"fn\":{\"$code\":\"return (Q['rel_nsi'] || 0);\"},\"qdisplay\":\"relationships\"}]}},\"housing_policy.study\":{\"id\":\"housing_policy.study\",\"title\":\"Commission a study.\",\"subtitle\":\"Free. It will be thorough.\",\"onArrival\":[{\"$code\":\"Q['month_actions'] = (Q['month_actions'] || 0) + 0;\"}],\"content\":{\"content\":\"The study is commissioned. It will report after the next election.\",\"type\":\"paragraph\"}},\"housing_policy\":{\"id\":\"housing_policy\",\"type\":\"scene\",\"title\":\"Housing policy\",\"subtitle\":\"Rents rise and the young cannot buy.\",\"newPage\":true,\"isCard\":true,\"tags\":[\"govt_affairs\"],\"viewIf\":{\"$code\":\"return ((((Q['in_government'] || 0)) !== 0) && ((Q['housing_policy_timer'] || 0) <= 0));\"},\"onArrival\":[{\"$code\":\"Q['month_actions'] = (Q['month_actions'] || 0) + 1;\\nQ['housing_policy_timer'] = 5;\"}],\"cardImage\":\"img/card_housing.jpg\",\"options\":[{\"id\":\"@housing_policy.rental\"},{\"id\":\"@housing_policy.subsidy\"},{\"id\":\"@housing_policy.study\"},{\"id\":\"@discard_card\"},{\"id\":\"@easy_discard\"}],\"content\":[{\"type\":\"heading\",\"content\":\"Housing policy\"},{\"type\":\"paragraph\",\"content\":\"A one-bedroom flat in Ljubljana now costs more than a young couple earns in a year. Rents have gone up faster than wages. The ministry has two proposals. Which one goes forward?\"}]},\"healthcare_reform.paper\":{\"id\":\"healthcare_reform.paper\",\"title\":\"Commission a strategy paper.\",\"subtitle\":\"Free. Nothing happens, and people notice.\",\"onArrival\":[{\"$code\":\"window.SLO.moodEvent(Q, 'healthcare', -2);\"}],\"content\":{\"content\":\"A working group, a deadline in the autumn, a document of eighty pages. It is competent. Meanwhile, the lists get longer.\",\"type\":\"paragraph\"}},\"healthcare_reform\":{\"id\":\"healthcare_reform\",\"type\":\"scene\",\"title\":\"Healthcare reform\",\"subtitle\":\"Waiting lists, insurers and doctors. Everyone has a view.\",\"newPage\":true,\"isCard\":true,\"tags\":[\"govt_affairs\"],\"viewIf\":{\"$code\":\"return ((((Q['in_government'] || 0)) !== 0) && ((Q['healthcare_reform_timer'] || 0) <= 0));\"},\"onArrival\":[{\"$code\":\"Q['month_actions'] = (Q['month_actions'] || 0) + 1;\\nQ['healthcare_reform_timer'] = 4;\"}],\"cardImage\":\"img/card_health.jpg\",\"options\":[{\"id\":\"@healthcare_reform.money\"},{\"id\":\"@healthcare_reform.insurers\"},{\"id\":\"@healthcare_reform.paper\"},{\"id\":\"@discard_card\"},{\"id\":\"@easy_discard\"}],\"content\":[{\"type\":\"heading\",\"content\":\"Healthcare reform\"},{\"type\":\"paragraph\",\"content\":\"Waiting lists are the first thing people mention when they are asked what is wrong with the country. The health minister has two ideas and a budget that covers one. What is the plan?\"}]},\"budget_2020.relief\":{\"id\":\"budget_2020.relief\",\"title\":\"Tax relief for the middle.\",\"subtitle\":{\"content\":[\"Self-employed and suburban households gain.\",{\"type\":\"conditional\",\"content\":\"Levica objects. \",\"predicate\":0},{\"type\":\"conditional\",\"content\":\"It is NSi's budget, so the Social Democrats mind a good deal and DeSUS a little.\",\"predicate\":1}],\"stateDependencies\":[{\"type\":\"predicate\",\"fn\":{\"$code\":\"return (((Q['levica_support'] || 0)) !== 0);\"}},{\"type\":\"predicate\",\"fn\":{\"$code\":\"return ((Q['gov_nsi'] || 0)===1);\"}}]},\"onArrival\":[{\"$code\":\"window.SLO.mood(Q, 'self_emp', 6);\\nwindow.SLO.mood(Q, 'suburban', 5);\\nwindow.SLO.aff(Q, 'self_emp', 'lms', 4);\\nwindow.SLO.aff(Q, 'suburban', 'lms', 3);\\nif (Q.levica_support) { Q.levica_agreement -= 12; }\\nif (Q.gov_nsi) { Q.rel_nsi += 6; Q.rel_sd -= 10; Q.rel_desus -= 5; Q.coalition_strain += 3; }\"}],\"content\":{\"content\":\"The income tax bracket is moved a little. Most households notice about forty euros a month. Levica calls it a cut for those who need it least.\",\"type\":\"paragraph\"}},\"budget_2020\":{\"id\":\"budget_2020\",\"type\":\"scene\",\"title\":\"The budget for 2020 and 2021\",\"subtitle\":\"September 2019\",\"newPage\":true,\"tags\":[\"event\"],\"viewIf\":{\"$code\":\"return (((((Q['in_government'] || 0)) !== 0) && ((Q['year'] || 0)===2019)) && ((Q['month'] || 0)===9));\"},\"maxVisits\":1,\"options\":[{\"id\":\"@budget_2020.social\"},{\"id\":\"@budget_2020.surplus\"},{\"id\":\"@budget_2020.relief\"}],\"content\":[{\"type\":\"heading\",\"content\":\"The budget for 2020 and 2021\"},{\"type\":\"paragraph\",\"content\":\"Slovenia is growing, and the treasury has more money than it has had for a decade. Every minister has a list. Pensioners' groups want a higher pension, the health ministry wants a new wing, and business wants a tax cut. The finance minister wants a surplus.\"},{\"type\":\"paragraph\",\"content\":\"The two-year budget is the biggest statement the government will make this year.\"}],\"countVisitsMax\":1},\"candidate_lists.friends\":{\"id\":\"candidate_lists.friends\",\"title\":\"Loyal friends of Šarec from Kamnik.\",\"subtitle\":\"Cohesion. Little else.\",\"onArrival\":[{\"$code\":\"Q.cohesion += 6;\"}],\"content\":{\"content\":\"They will not rebel, and they will not impress. The lists are quiet and uniform, and nobody will have to be taught the leader's name.\",\"type\":\"paragraph\"}},\"candidate_lists\":{\"id\":\"candidate_lists\",\"type\":\"scene\",\"title\":\"The candidate lists\",\"subtitle\":\"February 2018\",\"newPage\":true,\"tags\":[\"event\"],\"viewIf\":{\"$code\":\"return (((((Q['in_campaign'] || 0)) !== 0) && ((Q['year'] || 0)===2018)) && ((Q['month'] || 0)===2));\"},\"maxVisits\":1,\"options\":[{\"id\":\"@candidate_lists.mayors\"},{\"id\":\"@candidate_lists.outsiders\"},{\"id\":\"@candidate_lists.friends\"}],\"content\":[{\"type\":\"heading\",\"content\":\"The candidate lists\"},{\"type\":\"paragraph\",\"content\":\"Eight electoral districts, eleven names each. A party with no history has no bench, so every name on the lists says something about what LMŠ is. The deadline is close and the offers are many.\"}],\"countVisitsMax\":1},\"cerar_resigns.silence\":{\"id\":\"cerar_resigns.silence\",\"title\":\"Say nothing. Let them fill the silence with whatever they hope you are.\",\"subtitle\":\"Vagueness is why you are ahead.\",\"onArrival\":[{\"$code\":\"Q['leader_bonus'] = (Q['leader_bonus'] || 0) + 0.5;\\nQ['rel_media'] = (Q['rel_media'] || 0) - 5;\"}],\"content\":{\"content\":\"\\\"Šarec declined to comment.\\\" For now this still reads as being above it all.\",\"type\":\"paragraph\"}},\"cerar_resigns\":{\"id\":\"cerar_resigns\",\"type\":\"scene\",\"title\":\"Cerar resigns\",\"subtitle\":\"14 March 2018\",\"newPage\":true,\"tags\":[\"event\"],\"viewIf\":{\"$code\":\"return (((Q['year'] || 0)===2018) && ((Q['month'] || 0)===3));\"},\"maxVisits\":1,\"onArrival\":[{\"$code\":\"window.SLO.salience(Q, 'transport', 0.5);\\nwindow.SLO.salience(Q, 'corruption', 0.4);\\nwindow.SLO.moodEvent(Q, 'transport', -8);\"}],\"options\":[{\"id\":\"@cerar_resigns.attack\"},{\"id\":\"@cerar_resigns.statesman\"},{\"id\":\"@cerar_resigns.silence\"}],\"content\":[{\"type\":\"heading\",\"content\":\"Cerar resigns\"},{\"type\":\"paragraph\",\"content\":\"The Supreme Court has annulled last year's referendum on the second railway track to the port of Koper, the government's largest project. That evening Prime Minister Miro Cerar resigns. The strikes, the coalition partners and now the court, he says: enough.\"},{\"type\":\"paragraph\",\"content\":\"The election will be in early June instead of later in the month. The difference is small. The picture is not: the new face of 2014 walking out of the building.\"},{\"type\":\"paragraph\",\"content\":\"Every journalist wants a reaction from the new face of 2018.\"}],\"countVisitsMax\":1},\"climate_strike.ignore\":{\"id\":\"climate_strike.ignore\",\"title\":\"Ignore it.\",\"subtitle\":\"Nothing changes.\",\"onArrival\":[{\"$code\":\"window.SLO.salience(Q, 'environment', 0.1);\\nwindow.SLO.mood(Q, 'youth', -2);\"}],\"content\":{\"content\":\"The students stand in the rain for two hours and go back to school. The photos run anyway, without a government face in them.\",\"type\":\"paragraph\"}},\"climate_strike\":{\"id\":\"climate_strike\",\"type\":\"scene\",\"title\":\"Students on strike\",\"subtitle\":\"March 2019\",\"newPage\":true,\"tags\":[\"event\"],\"viewIf\":{\"$code\":\"return (((((Q['in_government'] || 0)) !== 0) && ((Q['year'] || 0)===2019)) && ((Q['month'] || 0)===3));\"},\"maxVisits\":1,\"options\":[{\"id\":\"@climate_strike.join\"},{\"id\":\"@climate_strike.praise\"},{\"id\":\"@climate_strike.ignore\"}],\"content\":[{\"type\":\"heading\",\"content\":\"Students on strike\"},{\"type\":\"paragraph\",\"content\":\"On a Friday morning several thousand school pupils gather in front of parliament in Ljubljana, copying the Swedish student Greta Thunberg. They want a climate law with real targets and a date for ending coal.\"},{\"type\":\"paragraph\",\"content\":\"Cameras are there. A government minister is expected to come out and say something.\"}],\"countVisitsMax\":1},\"croatia_arbitration.cerar\":{\"id\":\"croatia_arbitration.cerar\",\"title\":\"Leave it to the foreign minister.\",\"subtitle\":\"Miro Cerar, the former prime minister, gets the stage.\",\"viewIf\":{\"$code\":\"return ((Q['gov_smc'] || 0)===1);\"},\"onArrival\":[{\"$code\":\"Q['rel_smc'] = (Q['rel_smc'] || 0) + 8;\"}],\"content\":{\"content\":\"Miro Cerar, now foreign minister, gives the interviews and takes the credit or the blame. LMŠ is not in the pictures.\",\"type\":\"paragraph\"}},\"croatia_arbitration\":{\"id\":\"croatia_arbitration\",\"type\":\"scene\",\"title\":\"The border with Croatia\",\"subtitle\":\"January 2019\",\"newPage\":true,\"tags\":[\"event\"],\"viewIf\":{\"$code\":\"return (((((Q['in_government'] || 0)) !== 0) && ((Q['year'] || 0)===2019)) && ((Q['month'] || 0)===1));\"},\"maxVisits\":1,\"options\":[{\"id\":\"@croatia_arbitration.loud\"},{\"id\":\"@croatia_arbitration.quiet\"},{\"id\":\"@croatia_arbitration.cerar\"}],\"content\":[{\"type\":\"heading\",\"content\":\"The border with Croatia\"},{\"type\":\"paragraph\",\"content\":\"An international arbitration court ruled in 2017 on the land and sea border between Slovenia and Croatia, most importantly the Bay of Piran. Croatia says the ruling is void because Slovenia's side was caught talking to its own arbitrator, and refuses to follow it. Slovenia has now decided to take the case to the European Court of Justice.\"},{\"type\":\"paragraph\",\"content\":\"It is an old quarrel and a popular one. The question is how loudly the government wants to be seen to pursue it.\"}],\"countVisitsMax\":1},\"election_2018.results\":{\"id\":\"election_2018.results\",\"options\":[{\"id\":\"@election_2018.after_count\",\"title\":\"Start counting to 46.\"}],\"content\":{\"content\":[{\"type\":\"paragraph\",\"content\":[{\"type\":\"magic\",\"content\":\"<div data-slo=\\\"election\\\"></div>\"},\"\"]},{\"type\":\"paragraph\",\"content\":[\"The last polls had LMŠ at \",{\"type\":\"insert\",\"insert\":0},\" percent; it took \",{\"type\":\"insert\",\"insert\":1},\".\"]},{\"type\":\"paragraph\",\"content\":[\"Janez Janša's SDS is first, as everyone expected. \",{\"type\":\"conditional\",\"content\":[\"LMŠ is second with \",{\"type\":\"insert\",\"insert\":3},\" seats. \"],\"predicate\":2},{\"type\":\"conditional\",\"content\":[\"LMŠ has \",{\"type\":\"insert\",\"insert\":5},\" seats, but it is not the largest of the parties that refuse to govern with Janša, and the others have noticed. \"],\"predicate\":4},\"\"]},{\"type\":\"paragraph\",\"content\":\"President Pahor will give Janša the first attempt. He will fail: only NSi and the nationalists will sit with him. Then it is your turn.\"}],\"stateDependencies\":[{\"type\":\"insert\",\"fn\":{\"$code\":\"return (Q['lms_poll'] || 0);\"}},{\"type\":\"insert\",\"fn\":{\"$code\":\"return (Q['lms_votes'] || 0);\"}},{\"type\":\"predicate\",\"fn\":{\"$code\":\"return (((Q['second_largest'] || 0)) !== 0);\"}},{\"type\":\"insert\",\"fn\":{\"$code\":\"return (Q['lms_r'] || 0);\"}},{\"type\":\"predicate\",\"fn\":{\"$code\":\"return (!(((Q['second_largest'] || 0)) !== 0));\"}},{\"type\":\"insert\",\"fn\":{\"$code\":\"return (Q['lms_r'] || 0);\"}}]}},\"december_exodus.nothing\":{\"id\":\"december_exodus.nothing\",\"title\":\"Do nothing.\",\"subtitle\":\"Hope the partners hold.\",\"onArrival\":[{\"$code\":\"Q['coalition_strain'] = (Q['coalition_strain'] || 0) + 6;\"}],\"content\":{\"content\":\"No call is made and no concession is offered. The rumours do not stop.\",\"type\":\"paragraph\"}},\"december_exodus\":{\"id\":\"december_exodus\",\"type\":\"scene\",\"title\":\"Nervous partners\",\"subtitle\":\"December 2019\",\"newPage\":true,\"tags\":[\"event\"],\"viewIf\":{\"$code\":\"return (((((Q['in_government'] || 0)) !== 0) && ((Q['year'] || 0)===2019)) && ((Q['month'] || 0)===12));\"},\"maxVisits\":1,\"options\":[{\"id\":\"@december_exodus.wins\"},{\"id\":\"@december_exodus.threaten\"},{\"id\":\"@december_exodus.nothing\"}],\"content\":[{\"type\":\"heading\",\"content\":\"Nervous partners\"},{\"type\":\"paragraph\",\"content\":\"SMC and DeSUS are both polling below four percent, the threshold for entering parliament. Their leaders have stopped coming to some meetings. In the corridors it is said that they have been seen having coffee with Janez Janša, the leader of the opposition SDS.\"},{\"type\":\"paragraph\",\"content\":\"The next election is not due until 2022. For some of your partners the only question is whether they can last that long.\"}],\"countVisitsMax\":1},\"donor_dinner.decline\":{\"id\":\"donor_dinner.decline\",\"title\":\"Decline, and say so publicly.\",\"subtitle\":\"NGOs and reformers approve. The Establishment cools.\",\"onArrival\":[{\"$code\":\"window.SLO.rel(Q, 'ngo', 6);\\nwindow.SLO.rel(Q, 'est', -6);\\nwindow.SLO.aff(Q, 'urban_prof', 'lms', 0.5);\"}],\"content\":{\"content\":\"You publish the invitation with a short reply. It is praised for a day. The villa has other guests, and other parties to invite.\",\"type\":\"paragraph\"}},\"donor_dinner\":{\"id\":\"donor_dinner\",\"type\":\"scene\",\"title\":\"A private dinner\",\"subtitle\":\"April 2018\",\"newPage\":true,\"tags\":[\"event\"],\"viewIf\":{\"$code\":\"return (((((Q['in_campaign'] || 0)) !== 0) && ((Q['year'] || 0)===2018)) && ((Q['month'] || 0)===4));\"},\"maxVisits\":1,\"options\":[{\"id\":\"@donor_dinner.accept\"},{\"id\":\"@donor_dinner.advice_only\"},{\"id\":\"@donor_dinner.decline\"}],\"content\":[{\"type\":\"heading\",\"content\":\"A private dinner\"},{\"type\":\"paragraph\",\"content\":\"An invitation arrives on heavy paper: a dinner in a villa outside Ljubljana, with businessmen and a few former officials. The note says that the guests admire what LMŠ is doing, and would like to be useful with money, advice and airtime.\"},{\"type\":\"paragraph\",\"content\":\"The campaign is short of all three.\"}],\"countVisitsMax\":1},\"family_tender.annul\":{\"id\":\"family_tender.annul\",\"title\":\"Have the tender annulled and run again.\",\"subtitle\":\"NSi takes it as an insult. NGOs and urban professionals approve. Rural Catholics do not.\",\"onArrival\":[{\"$code\":\"Q.rel_nsi -= 12;\\nQ.rel_sd += 3;\\nQ.coalition_strain += 9;\\nwindow.SLO.rel(Q, 'ngo', 6);\\nwindow.SLO.mood(Q, 'urban_prof', 4);\\nwindow.SLO.mood(Q, 'rural_cath', -5);\"}],\"content\":{\"content\":\"The government's legal service finds a flaw in the scoring. Nobody believes that the flaw is the reason. Tonin says his minister has been overruled by a demonstration.\",\"type\":\"paragraph\"}},\"family_tender\":{\"id\":\"family_tender\",\"type\":\"scene\",\"title\":\"The family tender\",\"subtitle\":\"October 2019\",\"newPage\":true,\"tags\":[\"event\"],\"viewIf\":{\"$code\":\"return (((((((Q['in_government'] || 0)) !== 0) && ((Q['gov_nsi'] || 0)===1)) && ((Q['nsi_pogorelec'] || 0)===0)) && ((Q['year'] || 0)===2019)) && ((Q['month'] || 0)===10));\"},\"maxVisits\":1,\"onArrival\":[{\"$code\":\"window.SLO.salience(Q, 'culture', 0.5);\"}],\"options\":[{\"id\":\"@family_tender.stand\"},{\"id\":\"@family_tender.shelters\"},{\"id\":\"@family_tender.annul\"}],\"content\":[{\"type\":\"heading\",\"content\":\"The family tender\"},{\"type\":\"paragraph\",\"content\":\"The family ministry, which New Slovenia (NSi) holds, has published the results of its tender for family support programmes. Among the winners, with three years of funding, is an institute that runs a counselling line for pregnant women and campaigns against abortion. Two women's shelters with long records scored lower and got nothing.\"},{\"type\":\"paragraph\",\"content\":\"Abortion has been legal in Slovenia since the 1970s, and the freedom to decide whether to have children is written into the constitution. By evening there is a protest outside the ministry. The Social Democrats want the tender annulled. Matej Tonin, the NSi leader, says the commission followed the rules, and that a secular state can fund believers too.\"}],\"countVisitsMax\":1},\"final_week.save\":{\"id\":\"final_week.save\",\"title\":\"Save the money for after the election.\",\"subtitle\":\"Nothing spent, nothing gained.\",\"content\":{\"content\":\"The week goes quietly. Some of the team think this is prudent. Some think it is the thing they will regret.\",\"type\":\"paragraph\"}},\"final_week\":{\"id\":\"final_week\",\"type\":\"scene\",\"title\":\"The final week\",\"subtitle\":\"May 2018\",\"newPage\":true,\"tags\":[\"event\"],\"viewIf\":{\"$code\":\"return (((((Q['in_campaign'] || 0)) !== 0) && ((Q['year'] || 0)===2018)) && ((Q['month'] || 0)===5));\"},\"maxVisits\":1,\"options\":[{\"id\":\"@final_week.tour\"},{\"id\":\"@final_week.saturation\"},{\"id\":\"@final_week.save\"}],\"content\":[{\"type\":\"heading\",\"content\":\"The final week\"},{\"type\":\"paragraph\",\"content\":\"The last polls put LMŠ second, behind the Slovenian Democratic Party (SDS) and ahead of everyone else. The gap to first is narrower than anyone expected in January. The gap to third is narrower still.\"},{\"type\":\"paragraph\",\"content\":\"There is money for one big push, or for none.\"}],\"countVisitsMax\":1},\"insurance_bill_2.withdraw\":{\"id\":\"insurance_bill_2.withdraw\",\"title\":\"Withdraw the bill.\",\"subtitle\":\"Finance is relieved. Levica and patients are not.\",\"onArrival\":[{\"$code\":\"if (Q.levica_support) { Q.levica_agreement -= 80; }\\nwindow.SLO.moodEvent(Q, 'healthcare', -12);\\nQ.rel_est += 8;\\nif (Q.insurance_committed) { window.SLO.moodAll(Q, -3); }\"}],\"content\":{\"content\":\"The prime minister says the country cannot afford it. Levica's leaders hear this as a divorce. Patients hear it as a premium that is staying exactly where it is.\",\"type\":\"paragraph\"}},\"insurance_bill_2\":{\"id\":\"insurance_bill_2\",\"type\":\"scene\",\"title\":\"The insurance fight\",\"subtitle\":\"November 2019\",\"newPage\":true,\"tags\":[\"event\"],\"viewIf\":{\"$code\":\"return ((((((Q['in_government'] || 0)) !== 0) && ((Q['levica_support'] || 0)===1)) && ((Q['year'] || 0)===2019)) && ((Q['month'] || 0)===11));\"},\"maxVisits\":1,\"options\":[{\"id\":\"@insurance_bill_2.push\"},{\"id\":\"@insurance_bill_2.amend\"},{\"id\":\"@insurance_bill_2.withdraw\"}],\"content\":{\"content\":[{\"type\":\"heading\",\"content\":\"The insurance fight\"},{\"type\":\"paragraph\",\"content\":\"The finance ministry has done its sums: abolishing supplemental health insurance leaves a hole of 500 million euros a year, and there is no agreed way to fill it. The insurers have hired lobbyists and are meeting every coalition MP they can find.\"},{\"type\":\"paragraph\",\"content\":[{\"type\":\"conditional\",\"content\":\"The government has said publicly that it will abolish the premium. Backing down now will be noticed. \",\"predicate\":0},\"\"]},{\"type\":\"paragraph\",\"content\":\"The finance minister has made it known that he cannot sign.\"}],\"stateDependencies\":[{\"type\":\"predicate\",\"fn\":{\"$code\":\"return ((Q['insurance_committed'] || 0)===1);\"}}]},\"countVisitsMax\":1},\"european_elections.sideshow\":{\"id\":\"european_elections.sideshow\",\"title\":\"Treat it as a sideshow.\",\"subtitle\":\"The party hears that it is not a priority.\",\"onArrival\":[{\"$code\":\"Q['cohesion'] = (Q['cohesion'] || 0) - 5;\"}],\"content\":{\"content\":\"The campaign is a few posters and an interview. Candidates complain that headquarters has forgotten them. The result is modest and the grumbling lasts longer.\",\"type\":\"paragraph\"}},\"european_elections\":{\"id\":\"european_elections\",\"type\":\"scene\",\"title\":\"European elections\",\"subtitle\":\"May 2019\",\"newPage\":true,\"tags\":[\"event\"],\"viewIf\":{\"$code\":\"return (((((Q['in_government'] || 0)) !== 0) && ((Q['year'] || 0)===2019)) && ((Q['month'] || 0)===5));\"},\"maxVisits\":1,\"options\":[{\"id\":\"@european_elections.leader\"},{\"id\":\"@european_elections.local\"},{\"id\":\"@european_elections.sideshow\"}],\"content\":[{\"type\":\"heading\",\"content\":\"European elections\"},{\"type\":\"paragraph\",\"content\":\"Slovenians choose eight members of the European Parliament. It is not an important election, and everyone treats it as a test of the government. Turnout will be low. The result will be read as a verdict on you.\"},{\"type\":\"paragraph\",\"content\":\"The party has few candidates known outside Ljubljana. In reality LMŠ will win two seats.\"}],\"countVisitsMax\":1},\"mayors_drift.let_go\":{\"id\":\"mayors_drift.let_go\",\"title\":\"Let them go.\",\"subtitle\":\"+1 political capital. The local network withers.\",\"onArrival\":[{\"$code\":\"Q.resources += 1;\\nQ.roots -= 4;\\nwindow.SLO.aff(Q, 'suburban', 'lms', -1);\"}],\"content\":{\"content\":\"Some mayors stay quiet, others join other lists. By spring, the party has lost a number of local branches that cost nothing to lose and a long time to build.\",\"type\":\"paragraph\"}},\"mayors_drift\":{\"id\":\"mayors_drift\",\"type\":\"scene\",\"title\":\"The mayors feel forgotten\",\"subtitle\":\"Local discontent\",\"newPage\":true,\"tags\":[\"event\"],\"viewIf\":{\"$code\":\"return (((((Q['in_government'] || 0)) !== 0) && ((Q['rel_mayors'] || 0) < 40)) && ((Q['time'] || 0) >= 14));\"},\"maxVisits\":1,\"options\":[{\"id\":\"@mayors_drift.money\"},{\"id\":\"@mayors_drift.tour\"},{\"id\":\"@mayors_drift.let_go\"}],\"content\":[{\"type\":\"heading\",\"content\":\"The mayors feel forgotten\"},{\"type\":\"paragraph\",\"content\":\"Many of the mayors who backed Šarec in 2018 did so because he was one of them: a small-town mayor who had made good. They expected a prime minister who answered the phone.\"},{\"type\":\"paragraph\",\"content\":\"He does not. Their calls go to advisers. Funds for local roads and kindergartens are not coming through. At a municipal association meeting someone says the word \\\"betrayal\\\".\"}],\"countVisitsMax\":1},\"insurance_bill_1.stall\":{\"id\":\"insurance_bill_1.stall\",\"title\":\"Stall.\",\"subtitle\":\"Costs a great deal of Levica's patience.\",\"onArrival\":[{\"$code\":\"Q['levica_agreement'] = (Q['levica_agreement'] || 0) - 35;\"}],\"content\":{\"content\":\"A study of costs is commissioned. Levica's leaders tell the press that the study was commissioned instead of the bill.\",\"type\":\"paragraph\"}},\"insurance_bill_1\":{\"id\":\"insurance_bill_1\",\"type\":\"scene\",\"title\":\"Supplemental health insurance\",\"subtitle\":\"October 2019\",\"newPage\":true,\"tags\":[\"event\"],\"viewIf\":{\"$code\":\"return ((((((Q['in_government'] || 0)) !== 0) && ((Q['levica_support'] || 0)===1)) && ((Q['year'] || 0)===2019)) && ((Q['month'] || 0)===10));\"},\"maxVisits\":1,\"options\":[{\"id\":\"@insurance_bill_1.draft\"},{\"id\":\"@insurance_bill_1.compromise\"},{\"id\":\"@insurance_bill_1.stall\"}],\"content\":[{\"type\":\"heading\",\"content\":\"Supplemental health insurance\"},{\"type\":\"paragraph\",\"content\":\"Almost every adult in Slovenia pays about 35 euros a month to one of three insurers for supplemental health insurance, which covers the gap between what the public system pays and the full price of treatment. It is the cheapest big tax nobody calls a tax.\"},{\"type\":\"paragraph\",\"content\":\"Levica wants it abolished and the money found elsewhere. It was in the coalition agreement. They have come to collect.\"}],\"countVisitsMax\":1},\"minimum_wage.delay\":{\"id\":\"minimum_wage.delay\",\"title\":\"Send it to a working group.\",\"subtitle\":\"Costs a lot of Levica's patience.\",\"onArrival\":[{\"$code\":\"Q['levica_agreement'] = (Q['levica_agreement'] || 0) - 25;\"}],\"content\":{\"content\":\"A working group on \\\"economic effects\\\" is formed and told to report in the spring. Nobody in Levica believes it will. Mesec says so, in public.\",\"type\":\"paragraph\"}},\"minimum_wage\":{\"id\":\"minimum_wage\",\"type\":\"scene\",\"title\":\"The minimum wage bill\",\"subtitle\":\"November 2018\",\"newPage\":true,\"tags\":[\"event\"],\"viewIf\":{\"$code\":\"return ((((((Q['in_government'] || 0)) !== 0) && ((Q['levica_support'] || 0)===1)) && ((Q['year'] || 0)===2018)) && ((Q['month'] || 0)===11));\"},\"maxVisits\":1,\"options\":[{\"id\":\"@minimum_wage.pass\"},{\"id\":\"@minimum_wage.water_down\"},{\"id\":\"@minimum_wage.delay\"}],\"content\":[{\"type\":\"heading\",\"content\":\"The minimum wage bill\"},{\"type\":\"paragraph\",\"content\":\"Levica, the radical left party whose votes keep the government alive in parliament, has tabled its bill: raise the minimum wage well above what employers say they can pay. Its leader Luka Mesec wants a vote before Christmas. The employers' association calls it a job-killer. The unions call it overdue.\"},{\"type\":\"paragraph\",\"content\":\"Your own ministers are split. The bill is popular in the lower-paid suburbs and hated by small firms.\"}],\"countVisitsMax\":1},\"new_faces_pitch.waiting_lists\":{\"id\":\"new_faces_pitch.waiting_lists\",\"title\":\"Healthcare waiting lists.\",\"subtitle\":\"Claims healthcare. Less flashy, more concrete.\",\"onArrival\":[{\"$code\":\"window.SLO.claim(Q, 'healthcare');\\nwindow.SLO.salience(Q, 'healthcare', 0.3);\\nwindow.SLO.aff(Q, 'pensioners', 'lms', 1);\"}],\"content\":{\"content\":\"Waiting months for a specialist is something everyone has lived through. It makes a dull poster and a good conversation at a kitchen table.\",\"type\":\"paragraph\"}},\"new_faces_pitch\":{\"id\":\"new_faces_pitch\",\"type\":\"scene\",\"title\":\"What is LMŠ for?\",\"subtitle\":\"February 2018\",\"newPage\":true,\"tags\":[\"event\"],\"viewIf\":{\"$code\":\"return (((((Q['in_campaign'] || 0)) !== 0) && ((Q['year'] || 0)===2018)) && ((Q['month'] || 0)===2));\"},\"maxVisits\":1,\"options\":[{\"id\":\"@new_faces_pitch.vague\"},{\"id\":\"@new_faces_pitch.corruption\"},{\"id\":\"@new_faces_pitch.waiting_lists\"}],\"content\":[{\"type\":\"heading\",\"content\":\"What is LMŠ for?\"},{\"type\":\"paragraph\",\"content\":\"Marjan Šarec, the mayor of Kamnik and a former comedian, has a party that is a few months old and polls at around ten percent. Journalists keep asking the same question: what does it want? So far the answer has been a face and a mood.\"},{\"type\":\"paragraph\",\"content\":\"The campaign team has one evening to settle it before the posters are printed.\"}],\"countVisitsMax\":1},\"migration_rhetoric.change_subject\":{\"id\":\"migration_rhetoric.change_subject\",\"title\":\"Change the subject to healthcare and corruption.\",\"subtitle\":\"-1 political capital. Moves the agenda away.\",\"unavailableSubtitle\":\"Needs 1 political capital.\",\"chooseIf\":{\"$code\":\"return ((Q['resources'] || 0) >= 1);\"},\"onArrival\":[{\"$code\":\"Q.resources -= 1;\\nwindow.SLO.salience(Q, 'migration', -0.5);\\nwindow.SLO.salience(Q, 'healthcare', 0.4);\\nwindow.SLO.salience(Q, 'corruption', 0.3);\"}],\"content\":{\"content\":\"Every answer ends with a waiting list or an affair. Interviewers notice, and some push back. The tactic works only if you are consistent about it.\",\"type\":\"paragraph\"}},\"migration_rhetoric\":{\"id\":\"migration_rhetoric\",\"type\":\"scene\",\"title\":\"The migration campaign\",\"subtitle\":\"April 2018\",\"newPage\":true,\"tags\":[\"event\"],\"viewIf\":{\"$code\":\"return (((((Q['in_campaign'] || 0)) !== 0) && ((Q['year'] || 0)===2018)) && ((Q['month'] || 0)===4));\"},\"maxVisits\":1,\"onArrival\":[{\"$code\":\"window.SLO.salience(Q, 'migration', 0.5);\"}],\"options\":[{\"id\":\"@migration_rhetoric.firm\"},{\"id\":\"@migration_rhetoric.humane\"},{\"id\":\"@migration_rhetoric.change_subject\"}],\"content\":[{\"type\":\"heading\",\"content\":\"The migration campaign\"},{\"type\":\"paragraph\",\"content\":\"The Slovenian Democratic Party (SDS) has put migration at the centre of its campaign, with posters, rallies and the open backing of Hungarian prime minister Viktor Orbán. Few migrants stop in Slovenia now. The fear works anyway.\"},{\"type\":\"paragraph\",\"content\":\"Every candidate is asked the same question on every programme.\"}],\"countVisitsMax\":1},\"murmurs.outbuild\":{\"id\":\"murmurs.outbuild\",\"title\":\"Outbuild them. Make their issue yours.\",\"subtitle\":\"-2 political capital. One step toward credibility on the issue.\",\"unavailableSubtitle\":\"Needs 2 political capital.\",\"chooseIf\":{\"$code\":\"return ((Q['resources'] || 0) >= 2);\"},\"onArrival\":[{\"$code\":\"Q.resources -= 2;\\nQ.outbuilt = window.SLO.claim(Q, Q.ch_issue) ? 1 : 0;\\nwindow.SLO.salience(Q, Q.ch_issue, 0.3);\\nQ.ch_momentum -= 5;\"}],\"content\":{\"content\":{\"type\":\"paragraph\",\"content\":[\"You put a minister and a deadline on it. \",{\"type\":\"conditional\",\"content\":\"People notice: LMŠ is now taken seriously on this. \",\"predicate\":0},{\"type\":\"conditional\",\"content\":\"It is a start. Credibility takes more than one announcement, and you have also just told everyone the problem is real.\",\"predicate\":1}]},\"stateDependencies\":[{\"type\":\"predicate\",\"fn\":{\"$code\":\"return ((Q['outbuilt'] || 0)===1);\"}},{\"type\":\"predicate\",\"fn\":{\"$code\":\"return ((Q['outbuilt'] || 0)===0);\"}}]}},\"nlb_question.oppose\":{\"id\":\"nlb_question.oppose\",\"title\":\"Keep it public.\",\"subtitle\":\"Moves LMŠ against privatisation. Levica pleased. The Establishment is not.\",\"onArrival\":[{\"$code\":\"window.SLO.own(Q, 'lms', 'privatisation', -1);\\nQ.rel_levica += 8;\\nwindow.SLO.rel(Q, 'est', -8);\"}],\"content\":{\"content\":\"You say that a bank rescued with public money should not be handed over cheaply. Levica agrees with you, for once. The European Commission does not comment.\",\"type\":\"paragraph\"}},\"nlb_question\":{\"id\":\"nlb_question\",\"type\":\"scene\",\"title\":\"The NLB question\",\"subtitle\":\"May 2018\",\"newPage\":true,\"tags\":[\"event\"],\"viewIf\":{\"$code\":\"return (((((Q['in_campaign'] || 0)) !== 0) && ((Q['year'] || 0)===2018)) && ((Q['month'] || 0)===5));\"},\"maxVisits\":1,\"onArrival\":[{\"$code\":\"window.SLO.salience(Q, 'privatisation', 0.4);\"}],\"options\":[{\"id\":\"@nlb_question.sell\"},{\"id\":\"@nlb_question.stall\"},{\"id\":\"@nlb_question.oppose\"}],\"content\":[{\"type\":\"heading\",\"content\":\"The NLB question\"},{\"type\":\"paragraph\",\"content\":\"Nova Ljubljanska Banka (NLB) is the largest bank in Slovenia and belongs to the state, which rescued it in 2013. In return for that rescue Slovenia promised the European Commission it would sell most of it.\"},{\"type\":\"paragraph\",\"content\":\"A business daily has asked every party the same question in writing. Left-leaning parties say no. The right says yes.\"}],\"countVisitsMax\":1},\"nlb_sale.stop\":{\"id\":\"nlb_sale.stop\",\"title\":\"Stop the sale.\",\"subtitle\":{\"content\":[\"Trouble with the EU.\",{\"type\":\"conditional\",\"content\":\"Levica approves.\",\"predicate\":0}],\"stateDependencies\":[{\"type\":\"predicate\",\"fn\":{\"$code\":\"return (((Q['levica_support'] || 0)) !== 0);\"}}]},\"onArrival\":[{\"$code\":\"window.SLO.moodAll(Q, -3);\\nwindow.SLO.own(Q, 'lms', 'privatisation', -1);\\nQ.rel_est -= 12;\\nif (Q.levica_support) { Q.levica_agreement += 10; }\\nQ.coalition_strain += 10;\\nif (Q.gov_nsi) { Q.rel_nsi -= 8; }\"}],\"content\":{\"content\":\"Brussels reminds the government, in polite letters, of what it signed. Ratings agencies take note. Levica is pleased, and several coalition ministers are visibly not.\",\"type\":\"paragraph\"}},\"nlb_sale\":{\"id\":\"nlb_sale\",\"type\":\"scene\",\"title\":\"Selling the bank\",\"subtitle\":\"November 2018\",\"newPage\":true,\"tags\":[\"event\"],\"viewIf\":{\"$code\":\"return (((((Q['in_government'] || 0)) !== 0) && ((Q['year'] || 0)===2018)) && ((Q['month'] || 0)===11));\"},\"maxVisits\":1,\"options\":[{\"id\":\"@nlb_sale.sell\"},{\"id\":\"@nlb_sale.minimum\"},{\"id\":\"@nlb_sale.stop\"}],\"content\":[{\"type\":\"heading\",\"content\":\"Selling the bank\"},{\"type\":\"paragraph\",\"content\":\"Nova Ljubljanska banka, NLB, is the largest bank in Slovenia and almost entirely owned by the state. After the banking crisis the country promised the European Commission that it would sell 65 percent of it. The deadline is near, and the stock market window is open.\"},{\"type\":\"paragraph\",\"content\":\"The finance ministry wants to go ahead. The left says the family silver should not be sold to foreigners, and the sceptics in your own ranks agree.\"}],\"countVisitsMax\":1},\"nsi_forum21.win\":{\"id\":\"nsi_forum21.win\",\"title\":\"Give Pogorelec something to take home to the parishes.\",\"subtitle\":\"Costs 1 political capital. A family tax allowance with NSi's name on it. NSi wins back some of what it lost; the Social Democrats grumble.\",\"viewIf\":{\"$code\":\"return ((Q['gov_nsi'] || 0)===1);\"},\"chooseIf\":{\"$code\":\"return ((Q['resources'] || 0) >= 1);\"},\"unavailableSubtitle\":\"Needs 1 political capital.\",\"onArrival\":[{\"$code\":\"Q.resources -= 1;\\nQ.rel_nsi += 6;\\nQ.rel_sd -= 4;\\nQ.coalition_strain += 2;\\nwindow.SLO.DEMOS.forEach(function(d) { window.SLO.aff(Q, d, 'nsi', 1.5); window.SLO.aff(Q, d, 'sds', -1.5); });\\nwindow.SLO.mood(Q, 'rural_cath', 3);\"}],\"content\":{\"content\":\"Pogorelec announces a higher tax allowance for third and later children in a parish hall in Ribnica. Nova24TV reports it as a crumb from Kučan's table. The parish newsletter prints the figures.\",\"type\":\"paragraph\"}},\"ngo_open_letter.dismiss\":{\"id\":\"ngo_open_letter.dismiss\",\"title\":\"Dismiss it as politics.\",\"subtitle\":\"Saves effort. Costs goodwill.\",\"onArrival\":[{\"$code\":\"Q['rel_ngo'] = (Q['rel_ngo'] || 0) - 12;\"}],\"content\":{\"content\":\"A spokesperson says the groups are free to write what they like. They do, in a longer letter.\",\"type\":\"paragraph\"}},\"ngo_open_letter\":{\"id\":\"ngo_open_letter\",\"type\":\"scene\",\"title\":\"An open letter\",\"subtitle\":\"August 2019\",\"newPage\":true,\"tags\":[\"event\"],\"viewIf\":{\"$code\":\"return (((((Q['in_government'] || 0)) !== 0) && ((Q['year'] || 0)===2019)) && ((Q['month'] || 0)===8));\"},\"maxVisits\":1,\"options\":[{\"id\":\"@ngo_open_letter.open\"},{\"id\":\"@ngo_open_letter.meet\"},{\"id\":\"@ngo_open_letter.dismiss\"}],\"content\":[{\"type\":\"heading\",\"content\":\"An open letter\"},{\"type\":\"paragraph\",\"content\":\"A coalition of civil society groups publishes an open letter. The government talks about transparency, it says, but senior appointments are made behind closed doors, in meetings nobody records. It asks for public criteria and published candidate lists.\"},{\"type\":\"paragraph\",\"content\":\"The letter is polite. It is also on the front page.\"}],\"countVisitsMax\":1},\"private_schools.refuse\":{\"id\":\"private_schools.refuse\",\"title\":\"Refuse outright.\",\"subtitle\":{\"content\":[\"The secular side applauds. The church does not.\",{\"type\":\"conditional\",\"content\":\"For NSi this is the worst answer you could give.\",\"predicate\":0}],\"stateDependencies\":[{\"type\":\"predicate\",\"fn\":{\"$code\":\"return ((Q['gov_nsi'] || 0)===1);\"}}]},\"onArrival\":[{\"$code\":\"window.SLO.own(Q, 'lms', 'culture', 1);\\nQ.rel_nsi -= 15 * (Q.nsi_pogorelec ? 0.5 : 1);\\nif (Q.gov_nsi) { Q.coalition_strain += 12; Q.rel_sd += 4; }\\nwindow.SLO.mood(Q, 'urban_prof', 5);\\nwindow.SLO.mood(Q, 'rural_cath', -6);\"}],\"content\":{\"content\":{\"type\":\"paragraph\",\"content\":[\"The answer is no, in clear sentences. The archbishop's office says it is disappointed. \",{\"type\":\"conditional\",\"content\":\"NSi announces it will go back to the courts. \",\"predicate\":0},{\"type\":\"conditional\",\"content\":[\"\",{\"type\":\"insert\",\"insert\":2},\" says his party was promised this in writing, and that it will now consider what the rest of the agreement is worth.\"],\"predicate\":1}]},\"stateDependencies\":[{\"type\":\"predicate\",\"fn\":{\"$code\":\"return ((Q['gov_nsi'] || 0)===0);\"}},{\"type\":\"predicate\",\"fn\":{\"$code\":\"return ((Q['gov_nsi'] || 0)===1);\"}},{\"type\":\"insert\",\"fn\":{\"$code\":\"return (Q['nsi_surname'] || 0);\"}}]}},\"private_schools\":{\"id\":\"private_schools\",\"type\":\"scene\",\"title\":\"Funding private schools\",\"subtitle\":\"June 2019\",\"newPage\":true,\"tags\":[\"event\"],\"viewIf\":{\"$code\":\"return (((((Q['in_government'] || 0)) !== 0) && ((Q['year'] || 0)===2019)) && ((Q['month'] || 0)===6));\"},\"maxVisits\":1,\"options\":[{\"id\":\"@private_schools.fund\"},{\"id\":\"@private_schools.compulsory\"},{\"id\":\"@private_schools.refuse\"}],\"content\":{\"content\":[{\"type\":\"heading\",\"content\":\"Funding private schools\"},{\"type\":\"paragraph\",\"content\":[\"Years ago the Constitutional Court ruled that private primary schools, nearly all of them Catholic, must be funded as fully as public ones. Successive governments have found ways not to do it. \",{\"type\":\"conditional\",\"content\":\"NSi, the Christian-democratic opposition party, now demands the law be changed to follow the ruling. \",\"predicate\":0},{\"type\":\"conditional\",\"content\":[\"NSi, the Christian-democratic party in your cabinet, had the ruling written into the coalition agreement. \",{\"type\":\"conditional\",\"content\":\"Its leader wants full funding written into law before the summer. \",\"predicate\":2},{\"type\":\"conditional\",\"content\":\"Its leader, Janez Pogorelec, says he could live with full funding for the compulsory programme only. \",\"predicate\":3},\" \"],\"predicate\":1},\"\"]},{\"type\":\"paragraph\",\"content\":[{\"type\":\"conditional\",\"content\":\"Levica and the Social Democrats are against. \",\"predicate\":4},{\"type\":\"conditional\",\"content\":\"For the Social Democrats this is the line. Their leader Dejan Židan has said that full public funding for church schools is the one thing his deputies will not vote for. \",\"predicate\":5},\" A teachers' union is against. The church is watching.\"]}],\"stateDependencies\":[{\"type\":\"predicate\",\"fn\":{\"$code\":\"return ((Q['gov_nsi'] || 0)===0);\"}},{\"type\":\"predicate\",\"fn\":{\"$code\":\"return ((Q['gov_nsi'] || 0)===1);\"}},{\"type\":\"predicate\",\"fn\":{\"$code\":\"return ((Q['nsi_pogorelec'] || 0)===0);\"}},{\"type\":\"predicate\",\"fn\":{\"$code\":\"return (((Q['nsi_pogorelec'] || 0)) !== 0);\"}},{\"type\":\"predicate\",\"fn\":{\"$code\":\"return ((Q['gov_nsi'] || 0)===0);\"}},{\"type\":\"predicate\",\"fn\":{\"$code\":\"return ((Q['gov_nsi'] || 0)===1);\"}}]},\"countVisitsMax\":1},\"poll_peak.keep\":{\"id\":\"poll_peak.keep\",\"title\":\"Keep it, and see how long it lasts.\",\"subtitle\":\"Nothing is spent.\",\"onArrival\":[{\"$code\":\"Q['resources'] = (Q['resources'] || 0) + 0;\"}],\"content\":{\"content\":\"Popularity is not savings. It will fade by itself, as it does for every prime minister, and the advisers know it.\",\"type\":\"paragraph\"}},\"poll_peak\":{\"id\":\"poll_peak\",\"type\":\"scene\",\"title\":\"The best numbers ever\",\"subtitle\":\"December 2018\",\"newPage\":true,\"tags\":[\"event\"],\"viewIf\":{\"$code\":\"return (((((Q['in_government'] || 0)) !== 0) && ((Q['year'] || 0)===2018)) && ((Q['month'] || 0)===12));\"},\"maxVisits\":1,\"options\":[{\"id\":\"@poll_peak.party\"},{\"id\":\"@poll_peak.reform\"},{\"id\":\"@poll_peak.keep\"}],\"content\":[{\"type\":\"heading\",\"content\":\"The best numbers ever\"},{\"type\":\"paragraph\",\"content\":\"The December poll shows Šarec with the highest approval ever recorded for a Slovenian prime minister. The party is behind him, a long way behind, but behind him.\"},{\"type\":\"paragraph\",\"content\":\"His advisers gather around the table. Numbers like these do not last. The question is what to buy with them.\"}],\"countVisitsMax\":1},\"public_pay_deal.refuse\":{\"id\":\"public_pay_deal.refuse\",\"title\":\"Refuse. The budget cannot take it.\",\"subtitle\":\"Saves money. The public sector turns on you.\",\"onArrival\":[{\"$code\":\"window.SLO.mood(Q, 'public', -9);\\nwindow.SLO.mood(Q, 'self_emp', 2);\"}],\"content\":{\"content\":\"The unions hold a rally in front of the government building. Teachers carry placards with the prime minister's face on them. The budget is intact.\",\"type\":\"paragraph\"}},\"public_pay_deal\":{\"id\":\"public_pay_deal\",\"type\":\"scene\",\"title\":\"The public sector pay deal\",\"subtitle\":\"December 2018\",\"newPage\":true,\"tags\":[\"event\"],\"viewIf\":{\"$code\":\"return (((((Q['in_government'] || 0)) !== 0) && ((Q['year'] || 0)===2018)) && ((Q['month'] || 0)===12));\"},\"maxVisits\":1,\"options\":[{\"id\":\"@public_pay_deal.generous\"},{\"id\":\"@public_pay_deal.partial\"},{\"id\":\"@public_pay_deal.refuse\"}],\"content\":{\"content\":[{\"type\":\"heading\",\"content\":\"The public sector pay deal\"},{\"type\":\"paragraph\",\"content\":[\"Teachers, nurses, police and clerks have waited years for the pay rises that unions negotiated before the crisis. Now the unions are at the door of the government, with strike notices drafted. \",{\"type\":\"conditional\",\"content\":\"In the campaign LMŠ stood next to the strikers, and the unions have brought the photographs. \",\"predicate\":0},\"\"]},{\"type\":\"paragraph\",\"content\":\"The finance minister says the sum is more than the budget can bear.\"}],\"stateDependencies\":[{\"type\":\"predicate\",\"fn\":{\"$code\":\"return ((Q['promise_public_pay'] || 0)===1);\"}}]},\"countVisitsMax\":1},\"tonin_leader.call\":{\"id\":\"tonin_leader.call\",\"title\":\"Call Tonin to congratulate him.\",\"subtitle\":\"NSi warms to you. Levica notices.\",\"onArrival\":[{\"$code\":\"Q.rel_nsi += 8;\\nQ.rel_levica -= 4;\\nwindow.SLO.aff(Q, 'rural_cath', 'lms', 0.3);\"}],\"content\":{\"content\":\"The call lasts twenty minutes, most of it about Kamnik. Tonin says afterwards that after the election NSi will talk to anyone. Luka Mesec of Levica asks which Šarec to expect in the autumn: the one on the posters or the one from Kamnik.\",\"type\":\"paragraph\"}},\"public_sector_strikes.stay_out\":{\"id\":\"public_sector_strikes.stay_out\",\"title\":\"Stay out of it.\",\"subtitle\":\"Nothing gained, nothing promised.\",\"onArrival\":[{\"$code\":\"window.SLO.moodEvent(Q, 'jobs', -2);\"}],\"content\":{\"content\":\"It is the government's strike, you say. A teacher notes that you were not asked about the government, only about the strike.\",\"type\":\"paragraph\"}},\"public_sector_strikes\":{\"id\":\"public_sector_strikes\",\"type\":\"scene\",\"title\":\"Strikes in the public sector\",\"subtitle\":\"March 2018\",\"newPage\":true,\"tags\":[\"event\"],\"viewIf\":{\"$code\":\"return (((((Q['in_campaign'] || 0)) !== 0) && ((Q['year'] || 0)===2018)) && ((Q['month'] || 0)===3));\"},\"maxVisits\":1,\"onArrival\":[{\"$code\":\"window.SLO.salience(Q, 'jobs', 0.4);\"}],\"options\":[{\"id\":\"@public_sector_strikes.back_unions\"},{\"id\":\"@public_sector_strikes.restraint\"},{\"id\":\"@public_sector_strikes.stay_out\"}],\"content\":[{\"type\":\"heading\",\"content\":\"Strikes in the public sector\"},{\"type\":\"paragraph\",\"content\":\"Teachers, nurses and police officers are on strike, or about to be, over pay that has not caught up since the austerity years. The outgoing government of Miro Cerar says there is no money. The unions say there was money for the banks.\"},{\"type\":\"paragraph\",\"content\":\"A union leader asks where LMŠ stands.\"}],\"countVisitsMax\":1},\"social_cap.refuse\":{\"id\":\"social_cap.refuse\",\"title\":{\"content\":[\"Tell \",{\"type\":\"insert\",\"insert\":0},\" that the pension fund comes first.\"],\"stateDependencies\":[{\"type\":\"insert\",\"fn\":{\"$code\":\"return (Q['nsi_surname'] || 0);\"}}]},\"subtitle\":\"A broken promise. NSi takes it hard. DeSUS and pensioners approve.\",\"onArrival\":[{\"$code\":\"Q.rel_nsi -= 10 * (Q.nsi_pogorelec ? 0.5 : 1);\\nQ.rel_desus += 4;\\nQ.coalition_strain += 9;\\nwindow.SLO.mood(Q, 'pensioners', 3);\\nwindow.SLO.mood(Q, 'self_emp', -5);\"}],\"content\":{\"content\":{\"type\":\"paragraph\",\"content\":[\"The bill goes back to the ministry for further study. \",{\"type\":\"insert\",\"insert\":0},\" holds the coalition agreement up at a press conference, open at the page. Erjavec says that he never liked that page.\"]},\"stateDependencies\":[{\"type\":\"insert\",\"fn\":{\"$code\":\"return (Q['nsi_surname'] || 0);\"}}]}},\"social_cap\":{\"id\":\"social_cap\",\"type\":\"scene\",\"title\":\"The social cap\",\"subtitle\":\"November 2018\",\"newPage\":true,\"tags\":[\"event\"],\"viewIf\":{\"$code\":\"return ((((((Q['in_government'] || 0)) !== 0) && ((Q['gov_nsi'] || 0)===1)) && ((Q['year'] || 0)===2018)) && ((Q['month'] || 0)===11));\"},\"maxVisits\":1,\"options\":[{\"id\":\"@social_cap.cap\"},{\"id\":\"@social_cap.holiday_pay\"},{\"id\":\"@social_cap.refuse\"}],\"content\":{\"content\":[{\"type\":\"heading\",\"content\":\"The social cap\"},{\"type\":\"paragraph\",\"content\":[\"New Slovenia (NSi) has brought its first bill to the cabinet: a cap on social contributions for the highest salaries, so that the best-paid engineers and managers cost their employers less. It is in the coalition agreement. \",{\"type\":\"insert\",\"insert\":0},\", the NSi leader, calls it the reason his party is in the government, and the employers agree with him.\"]},{\"type\":\"paragraph\",\"content\":\"The pension fund would lose the money. Karl Erjavec, the leader of the pensioners' party DeSUS, has noticed. The Social Democrats call it a tax cut for a few percent of employees, and the unions have booked a square.\"}],\"stateDependencies\":[{\"type\":\"insert\",\"fn\":{\"$code\":\"return (Q['nsi_leader'] || 0);\"}}]},\"countVisitsMax\":1},\"sarec_decision.replace\":{\"id\":\"sarec_decision.replace\",\"title\":\"Accept the resignation, and put forward a different prime minister from LMŠ.\",\"subtitle\":\"The party without the name on it. -4 political capital.\",\"unavailableSubtitle\":\"Needs 4 political capital, group cohesion of 60, coalition strain below 75 and 46 votes.\",\"chooseIf\":{\"$code\":\"return (((((Q['resources'] || 0) >= 4) && ((Q['cohesion'] || 0) >= 60)) && ((Q['coalition_strain'] || 0) < 75)) && ((Q['coal_total'] || 0) >= 46));\"},\"onArrival\":[{\"$code\":\"Q['ending'] = \\\"survived\\\";\\nQ['resources'] = (Q['resources'] || 0) - 4;\\nQ['leader_bonus'] = 0;\\nQ['replaced_sarec'] = 1;\\nQ['bandwagon'] = 0;\\nQ['coalition_strain'] = (Q['coalition_strain'] || 0) - 15;\"}],\"options\":[{\"id\":\"@game_over\",\"title\":\"The end.\"}],\"content\":{\"content\":\"Nobody expected a party called the List of Marjan Šarec to have a second candidate. The partners are surprised enough to say yes. The polls drop at once, and what is left belongs to the party.\",\"type\":\"paragraph\"}},\"sarec_decision\":{\"id\":\"sarec_decision\",\"type\":\"scene\",\"title\":\"The prime minister's decision\",\"subtitle\":\"27 January 2020\",\"newPage\":true,\"tags\":[\"event\"],\"priority\":-1,\"viewIf\":{\"$code\":\"return (((((Q['in_government'] || 0)) !== 0) && ((Q['year'] || 0)===2020)) && ((Q['month'] || 0)===1));\"},\"maxVisits\":1,\"onArrival\":[{\"$code\":\"Q.coal_total = window.SLO.govSeats(Q) + (Q.levica_support ? Q.levica_r : 0) + 2;\"}],\"options\":[{\"id\":\"@sarec_decision.resign\"},{\"id\":\"@sarec_decision.carry_on\"},{\"id\":\"@sarec_decision.replace\"}],\"content\":{\"content\":[{\"type\":\"heading\",\"content\":\"27 January 2020\"},{\"type\":\"paragraph\",\"content\":[{\"type\":\"conditional\",\"content\":\"The finance minister has resigned over the health insurance bill. \",\"predicate\":0},\" The coalition has \",{\"type\":\"insert\",\"insert\":1},\" votes it can count on out of 90, on a good day. The coalition is \",{\"type\":\"insert\",\"insert\":2},\".\"]},{\"type\":\"paragraph\",\"content\":\"Marjan Šarec has an idea. He is still the most popular politician in the country. If he resigns now and forces an early election, LMŠ could come back with twenty-five seats and a government that works. All it needs is for the other parties to agree to dissolve parliament.\"},{\"type\":\"paragraph\",\"content\":\"They will not agree. SMC and DeSUS are polling below the threshold; an election would end them. Janša has already been to see them.\"}],\"stateDependencies\":[{\"type\":\"predicate\",\"fn\":{\"$code\":\"return (((Q['finance_minister_resigned'] || 0)) !== 0);\"}},{\"type\":\"insert\",\"fn\":{\"$code\":\"return (Q['coal_total'] || 0);\"}},{\"type\":\"insert\",\"fn\":{\"$code\":\"return (Q['coalition_strain'] || 0);\"},\"qdisplay\":\"strain\"}]},\"countVisitsMax\":1},\"tv_debate.jokes\":{\"id\":\"tv_debate.jokes\",\"title\":\"Make jokes. It is what he knows.\",\"subtitle\":\"Pull and media goodwill. Nothing is built.\",\"onArrival\":[{\"$code\":\"Q.leader_bonus += 1;\\nwindow.SLO.rel(Q, 'media', 5);\"}],\"content\":{\"content\":\"One line is quoted for days. Whether it is an argument is a different question, and the columnists ask it on Monday.\",\"type\":\"paragraph\"}},\"tv_debate\":{\"id\":\"tv_debate\",\"type\":\"scene\",\"title\":\"The Janša debate\",\"subtitle\":\"April 2018\",\"newPage\":true,\"tags\":[\"event\"],\"viewIf\":{\"$code\":\"return (((((Q['in_campaign'] || 0)) !== 0) && ((Q['year'] || 0)===2018)) && ((Q['month'] || 0)===4));\"},\"maxVisits\":1,\"options\":[{\"id\":\"@tv_debate.attack\"},{\"id\":\"@tv_debate.calm\"},{\"id\":\"@tv_debate.jokes\"}],\"content\":[{\"type\":\"heading\",\"content\":\"The Janša debate\"},{\"type\":\"paragraph\",\"content\":\"The first big television debate puts Šarec opposite Janez Janša, the leader of the Slovenian Democratic Party (SDS) and a former prime minister, a man who has been debating for thirty years. Šarec has been a mayor for eight, and a stage impressionist before that.\"},{\"type\":\"paragraph\",\"content\":\"The studio is cold. The red light comes on.\"}],\"countVisitsMax\":1},\"workfare.refuse\":{\"id\":\"workfare.refuse\",\"title\":\"Leave the welfare law alone.\",\"subtitle\":\"NSi takes it badly, and so do employers. Charities approve.\",\"onArrival\":[{\"$code\":\"Q.rel_nsi -= 8 * (Q.nsi_pogorelec ? 0.5 : 1);\\nQ.coalition_strain += 8;\\nwindow.SLO.rel(Q, 'ngo', 4);\\nwindow.SLO.mood(Q, 'self_emp', -4);\"}],\"content\":{\"content\":{\"type\":\"paragraph\",\"content\":[\"The prime minister says the government will not make policy out of anecdotes. \",{\"type\":\"insert\",\"insert\":0},\" replies that every employer in the country has the same anecdote.\"]},\"stateDependencies\":[{\"type\":\"insert\",\"fn\":{\"$code\":\"return (Q['nsi_surname'] || 0);\"}}]}},\"workfare\":{\"id\":\"workfare\",\"type\":\"scene\",\"title\":\"Work for benefits\",\"subtitle\":\"February 2019\",\"newPage\":true,\"tags\":[\"event\"],\"viewIf\":{\"$code\":\"return ((((((Q['in_government'] || 0)) !== 0) && ((Q['gov_nsi'] || 0)===1)) && ((Q['year'] || 0)===2019)) && ((Q['month'] || 0)===2));\"},\"maxVisits\":1,\"options\":[{\"id\":\"@workfare.pass_it\"},{\"id\":\"@workfare.checks\"},{\"id\":\"@workfare.refuse\"}],\"content\":[{\"type\":\"heading\",\"content\":\"Work for benefits\"},{\"type\":\"paragraph\",\"content\":\"Social assistance was raised by almost a third last year. Employers say that a family on benefits and supplements now comes within sight of a minimum wage, and that they cannot fill their vacancies. New Slovenia (NSi) has a bill: anyone who is fit to work and has been on assistance for more than a few months does community work for the municipality, or loses part of the payment.\"},{\"type\":\"paragraph\",\"content\":\"Mayors like the idea. The Social Democrats, who wrote the welfare law, call it punishing the poor. Charities say that the people concerned are mostly ill, old or looking after someone.\"}],\"countVisitsMax\":1},\"waiting_lists.commission\":{\"id\":\"waiting_lists.commission\",\"title\":\"Announce a reform commission.\",\"subtitle\":\"Nothing happens now, and patients notice. Health experts and civic groups are glad to be asked.\",\"onArrival\":[{\"$code\":\"window.SLO.moodEvent(Q, 'healthcare', -4);\\nwindow.SLO.rel(Q, 'ngo', 4);\"}],\"content\":{\"content\":\"Experts are appointed, and are asked to report by the autumn. The lists keep growing in the meantime.\",\"type\":\"paragraph\"}},\"waiting_lists\":{\"id\":\"waiting_lists\",\"type\":\"scene\",\"title\":\"Waiting lists at record length\",\"subtitle\":\"February 2019\",\"newPage\":true,\"tags\":[\"event\"],\"viewIf\":{\"$code\":\"return (((((Q['in_government'] || 0)) !== 0) && ((Q['year'] || 0)===2019)) && ((Q['month'] || 0)===2));\"},\"maxVisits\":1,\"options\":[{\"id\":\"@waiting_lists.money\"},{\"id\":\"@waiting_lists.blame\"},{\"id\":\"@waiting_lists.commission\"}],\"content\":[{\"type\":\"heading\",\"content\":\"Waiting lists at record length\"},{\"type\":\"paragraph\",\"content\":\"Waiting lists for specialists and operations have never been so long. A patient who needs a hip replacement may wait more than a year. Doctors' unions say they have had enough, and some warn they will leave for Austria and Germany.\"},{\"type\":\"paragraph\",\"content\":\"The newspapers print the numbers each week. The health minister asks the prime minister for a decision.\"}],\"countVisitsMax\":1},\"court_media.complain\":{\"id\":\"court_media.complain\",\"title\":\"Complain publicly about the coverage.\",\"subtitle\":\"Media relations down. Šarec's outsider image gets stronger.\",\"onArrival\":[{\"$code\":\"Q['rel_media'] = (Q['rel_media'] || 0) - 8;\\nQ['leader_bonus'] = (Q['leader_bonus'] || 0) + 0.5;\"}],\"content\":{\"content\":\"Šarec says on air that the papers have been unfair, in the tone of a man who says it only because it is true. The voters like it. The papers do not.\",\"type\":\"paragraph\"}},\"court_media\":{\"id\":\"court_media\",\"type\":\"scene\",\"title\":\"Court the media\",\"subtitle\":\"Friendly editors are useful. Friendly editors are not free.\",\"newPage\":true,\"isCard\":true,\"tags\":[\"party_affairs\"],\"viewIf\":{\"$code\":\"return ((Q['court_media_timer'] || 0) <= 0);\"},\"onArrival\":[{\"$code\":\"Q['month_actions'] = (Q['month_actions'] || 0) + 1;\\nQ['court_media_timer'] = 3;\"}],\"cardImage\":\"img/card_media.jpg\",\"options\":[{\"id\":\"@court_media.exclusives\"},{\"id\":\"@court_media.open_press\"},{\"id\":\"@court_media.complain\"},{\"id\":\"@discard_card\"},{\"id\":\"@easy_discard\"}],\"content\":{\"content\":[{\"type\":\"heading\",\"content\":\"Court the media\"},{\"type\":\"paragraph\",\"content\":[\"Your relations with the press are \",{\"type\":\"emphasis-2\",\"content\":{\"type\":\"insert\",\"insert\":0}},\"/100. Editors decide what a story looks like, and whether it runs at all. How do you deal with them?\"]}],\"stateDependencies\":[{\"type\":\"insert\",\"fn\":{\"$code\":\"return (Q['rel_media'] || 0);\"}}]}},\"claim_issue.jobs\":{\"id\":\"claim_issue.jobs\",\"title\":\"Jobs: wages, contracts and the economy.\",\"subtitle\":\"-2 political capital. A step toward credibility on jobs.\",\"unavailableSubtitle\":\"Needs 2 political capital.\",\"chooseIf\":{\"$code\":\"return ((Q['resources'] || 0) >= 2);\"},\"onArrival\":[{\"$code\":\"Q.resources -= 2;\\nQ.claimed = window.SLO.claim(Q, 'jobs') ? 1 : 0;\"}],\"content\":{\"content\":{\"type\":\"paragraph\",\"content\":[{\"type\":\"conditional\",\"content\":\"An economist and a union lawyer find, to everyone's surprise, a plan they can both sign. It is quoted in the business papers and by the unions. \",\"predicate\":0},{\"type\":\"conditional\",\"content\":\"The employers want one thing and the unions the opposite. The paper tries to please both and persuades neither. Not yet.\",\"predicate\":1}]},\"stateDependencies\":[{\"type\":\"predicate\",\"fn\":{\"$code\":\"return ((Q['claimed'] || 0)===1);\"}},{\"type\":\"predicate\",\"fn\":{\"$code\":\"return ((Q['claimed'] || 0)===0);\"}}]}},\"answer_challenger.attack\":{\"id\":\"answer_challenger.attack\",\"title\":\"Attack them in the press.\",\"subtitle\":\"-1 political capital. Needs media at 55. Momentum falls a little. Civil society dislikes it.\",\"unavailableSubtitle\":\"Needs 1 political capital and relations with the media at 55 or more.\",\"chooseIf\":{\"$code\":\"return (((Q['resources'] || 0) >= 1) && ((Q['rel_media'] || 0) >= 55));\"},\"onArrival\":[{\"$code\":\"Q['resources'] = (Q['resources'] || 0) - 1;\\nQ['ch_momentum'] = (Q['ch_momentum'] || 0) - 10;\\nQ['rel_ngo'] = (Q['rel_ngo'] || 0) - 5;\"}],\"content\":{\"content\":\"The papers that like you run pieces about who funds the challenger and what they really want. It dents them a little. It also looks like what it is, and the civic groups do not enjoy watching.\",\"type\":\"paragraph\"}},\"answer_challenger\":{\"id\":\"answer_challenger\",\"type\":\"scene\",\"title\":\"Answer the challenger\",\"subtitle\":\"A new force is taking your voters. Deal with it.\",\"newPage\":true,\"isCard\":true,\"tags\":[\"party_affairs\"],\"viewIf\":{\"$code\":\"return ((((Q['ch_active'] || 0)===1) && ((Q['ch_consolidated'] || 0)===0)) && ((Q['answer_challenger_timer'] || 0) <= 0));\"},\"onArrival\":[{\"$code\":\"Q['month_actions'] = (Q['month_actions'] || 0) + 1;\\nQ['answer_challenger_timer'] = 2;\"}],\"cardImage\":\"img/card_debate.jpg\",\"options\":[{\"id\":\"@answer_challenger.outwork\"},{\"id\":\"@answer_challenger.invite\"},{\"id\":\"@answer_challenger.attack\"},{\"id\":\"@discard_card\"},{\"id\":\"@easy_discard\"}],\"content\":{\"content\":[{\"type\":\"heading\",\"content\":\"Answer the challenger\"},{\"type\":\"paragraph\",\"content\":[{\"type\":\"insert\",\"insert\":0},\" is growing on the back of \",{\"type\":\"insert\",\"insert\":1},\", and some of the voters were once yours. Momentum: \",{\"type\":\"emphasis-2\",\"content\":{\"type\":\"insert\",\"insert\":2}},\". A new movement is only young once. How do you answer the challenger?\"]}],\"stateDependencies\":[{\"type\":\"insert\",\"fn\":{\"$code\":\"return (Q['ch_name'] || 0);\"}},{\"type\":\"insert\",\"fn\":{\"$code\":\"return (Q['ch_issue_name'] || 0);\"}},{\"type\":\"insert\",\"fn\":{\"$code\":\"return (Q['ch_momentum'] || 0);\"}}]}},\"ngo_outreach.lists\":{\"id\":\"ngo_outreach.lists\",\"title\":\"Invite activists onto the party lists.\",\"subtitle\":\"Needs civil society at 55. Roots up, corruption claim, but old members grumble.\",\"unavailableSubtitle\":\"Needs relations with civil society at 55 or more.\",\"chooseIf\":{\"$code\":\"return ((Q['rel_ngo'] || 0) >= 55);\"},\"onArrival\":[{\"$code\":\"Q.roots += 4;\\nQ.cohesion -= 5;\\nwindow.SLO.claim(Q, 'corruption');\"}],\"content\":{\"content\":\"An anti-corruption campaigner and a tenants' rights lawyer accept places on the list. They bring a credible name and independent views, and the old members, who waited their turn, do not forgive either.\",\"type\":\"paragraph\"}},\"ngo_outreach\":{\"id\":\"ngo_outreach\",\"type\":\"scene\",\"title\":\"Civil society outreach\",\"subtitle\":\"Activists, NGOs and consultations. Credibility, not votes.\",\"newPage\":true,\"isCard\":true,\"tags\":[\"party_affairs\"],\"viewIf\":{\"$code\":\"return ((Q['ngo_outreach_timer'] || 0) <= 0);\"},\"onArrival\":[{\"$code\":\"Q['month_actions'] = (Q['month_actions'] || 0) + 1;\\nQ['ngo_outreach_timer'] = 4;\"}],\"cardImage\":\"img/card_civilsociety.jpg\",\"options\":[{\"id\":\"@ngo_outreach.consultation\"},{\"id\":\"@ngo_outreach.campaign\"},{\"id\":\"@ngo_outreach.lists\"},{\"id\":\"@discard_card\"},{\"id\":\"@easy_discard\"}],\"content\":{\"content\":[{\"type\":\"heading\",\"content\":\"Civil society outreach\"},{\"type\":\"paragraph\",\"content\":[\"Slovenia has a lively civic sector of environmental groups, youth organisations and anti-corruption watchdogs. They know how to organise and they hate being used. Your standing with them is \",{\"type\":\"emphasis-2\",\"content\":{\"type\":\"insert\",\"insert\":0}},\"/100.\"]}],\"stateDependencies\":[{\"type\":\"insert\",\"fn\":{\"$code\":\"return (Q['rel_ngo'] || 0);\"}}]}},\"call_favour.quarrel\":{\"id\":\"call_favour.quarrel\",\"title\":\"Ask them to smooth over a coalition quarrel.\",\"subtitle\":\"Needs standing with the Establishment at 35. In government only. Strain falls a lot. A favour owed.\",\"unavailableSubtitle\":\"Needs relations with the Establishment at 35 or more.\",\"viewIf\":{\"$code\":\"return (((Q['in_government'] || 0)) !== 0);\"},\"chooseIf\":{\"$code\":\"return ((Q['rel_est'] || 0) >= 35);\"},\"onArrival\":[{\"$code\":\"Q['coalition_strain'] = (Q['coalition_strain'] || 0) - 15;\\nQ['est_debt'] = (Q['est_debt'] || 0) + 1;\\nQ['captured'] = (Q['captured'] || 0) + 8;\"}],\"content\":{\"content\":\"Dinners happen without you. By Friday two of the partners have remembered why they like working together. Nobody tells you how this was arranged, and you do not ask.\",\"type\":\"paragraph\"}},\"call_favour\":{\"id\":\"call_favour\",\"type\":\"scene\",\"title\":\"Call in a favour\",\"subtitle\":\"The Establishment can help. Favours are repaid later.\",\"newPage\":true,\"isCard\":true,\"tags\":[\"party_affairs\"],\"viewIf\":{\"$code\":\"return (((Q['call_favour_timer'] || 0) <= 0) && ((Q['rel_est'] || 0) >= 35));\"},\"onArrival\":[{\"$code\":\"Q['month_actions'] = (Q['month_actions'] || 0) + 1;\\nQ['call_favour_timer'] = 5;\"}],\"cardImage\":\"img/card_favors.jpg\",\"options\":[{\"id\":\"@call_favour.story\"},{\"id\":\"@call_favour.money\"},{\"id\":\"@call_favour.quarrel\"},{\"id\":\"@discard_card\"},{\"id\":\"@easy_discard\"}],\"content\":{\"content\":[{\"type\":\"heading\",\"content\":\"Call in a favour\"},{\"type\":\"paragraph\",\"content\":[\"There are people in Slovenia who can make a problem disappear with one phone call. They never ask for anything at the time. Favours owed so far: \",{\"type\":\"emphasis-2\",\"content\":{\"type\":\"insert\",\"insert\":0}},\". Your standing with them is \",{\"type\":\"emphasis-2\",\"content\":{\"type\":\"insert\",\"insert\":1}},\"/100.\"]}],\"stateDependencies\":[{\"type\":\"insert\",\"fn\":{\"$code\":\"return (Q['est_debt'] || 0);\"}},{\"type\":\"insert\",\"fn\":{\"$code\":\"return (Q['rel_est'] || 0);\"}}]}},\"field_campaign.city\":{\"id\":\"field_campaign.city\",\"title\":\"Ljubljana and Maribor, door to door.\",\"subtitle\":\"-2 political capital. Roots, and the urban proletariat.\",\"unavailableSubtitle\":\"Needs 2 political capital.\",\"chooseIf\":{\"$code\":\"return ((Q['resources'] || 0) >= 2);\"},\"onArrival\":[{\"$code\":\"Q.resources -= 2;\\nQ.roots += 3;\\nwindow.SLO.aff(Q, 'urban_prol', 'lms', 1.2);\\nwindow.SLO.aff(Q, 'urban_prof', 'lms', 0.6);\"}],\"content\":{\"content\":\"The tower blocks in Fužine have not seen a canvasser from a liberal party in twenty years. Most doors stay shut. A few do not.\",\"type\":\"paragraph\"}},\"field_campaign\":{\"id\":\"field_campaign\",\"type\":\"scene\",\"title\":\"Field work\",\"subtitle\":\"Slow and expensive. Builds roots.\",\"newPage\":true,\"isCard\":true,\"tags\":[\"party_affairs\"],\"viewIf\":{\"$code\":\"return ((Q['field_campaign_timer'] || 0) <= 0);\"},\"onArrival\":[{\"$code\":\"Q['month_actions'] = (Q['month_actions'] || 0) + 1;\\nQ['field_campaign_timer'] = 3;\"}],\"cardImage\":\"img/card_fieldwork.jpg\",\"options\":[{\"id\":\"@field_campaign.suburbs\"},{\"id\":\"@field_campaign.countryside\"},{\"id\":\"@field_campaign.city\"},{\"id\":\"@discard_card\"},{\"id\":\"@easy_discard\"}],\"content\":[{\"type\":\"heading\",\"content\":\"Field work\"},{\"type\":\"paragraph\",\"content\":\"Somebody has to drive to Ribnica on a Tuesday evening and sit in a fire station with eleven people. LMŠ has very few somebodies. Where do you send them?\"}]},\"membership_drive.youth\":{\"id\":\"membership_drive.youth\",\"title\":\"Build a youth wing.\",\"subtitle\":\"-2 political capital. Roots up, young voters warm to LMŠ.\",\"unavailableSubtitle\":\"Needs 2 political capital.\",\"chooseIf\":{\"$code\":\"return ((Q['resources'] || 0) >= 2);\"},\"onArrival\":[{\"$code\":\"Q.resources -= 2;\\nQ.roots += 3;\\nwindow.SLO.aff(Q, 'youth', 'lms', 1.5);\"}],\"content\":{\"content\":\"A dozen students, a room at the faculty, a Telegram group that is never quiet. They do not agree with each other about anything, which in a young party is a good sign.\",\"type\":\"paragraph\"}},\"membership_drive\":{\"id\":\"membership_drive\",\"type\":\"scene\",\"title\":\"Membership drive\",\"subtitle\":\"Members are what a party has that a leader does not.\",\"newPage\":true,\"isCard\":true,\"tags\":[\"party_affairs\"],\"viewIf\":{\"$code\":\"return ((Q['membership_drive_timer'] || 0) <= 0);\"},\"onArrival\":[{\"$code\":\"Q['month_actions'] = (Q['month_actions'] || 0) + 1;\\nQ['membership_drive_timer'] = 4;\"}],\"cardImage\":\"img/card_members.jpg\",\"options\":[{\"id\":\"@membership_drive.leader\"},{\"id\":\"@membership_drive.programme\"},{\"id\":\"@membership_drive.youth\"},{\"id\":\"@discard_card\"},{\"id\":\"@easy_discard\"}],\"content\":[{\"type\":\"heading\",\"content\":\"Membership drive\"},{\"type\":\"paragraph\",\"content\":\"Members pay dues, deliver leaflets and sit through meetings. LMŠ has about as many as a mid-sized football club. The question is who they are joining.\"}]},\"mayors_network.recruit\":{\"id\":\"mayors_network.recruit\",\"title\":\"Recruit a popular independent mayor.\",\"subtitle\":\"Needs mayors at 60. Roots up, but local members resent the arrival.\",\"unavailableSubtitle\":\"Needs relations with mayors at 60 or more.\",\"chooseIf\":{\"$code\":\"return ((Q['rel_mayors'] || 0) >= 60);\"},\"onArrival\":[{\"$code\":\"Q['roots'] = (Q['roots'] || 0) + 5;\\nQ['cohesion'] = (Q['cohesion'] || 0) - 4;\"}],\"content\":{\"content\":\"He has won four elections without any party. He joins on the condition that nobody tells him what to say. The local branch is delighted, until he is given the place on the list that three of them wanted.\",\"type\":\"paragraph\"}},\"mayors_network\":{\"id\":\"mayors_network\",\"type\":\"scene\",\"title\":\"Mayors' network\",\"subtitle\":\"Šarec's own world. Local leaders carry the party into villages.\",\"newPage\":true,\"isCard\":true,\"tags\":[\"party_affairs\"],\"viewIf\":{\"$code\":\"return ((Q['mayors_network_timer'] || 0) <= 0);\"},\"onArrival\":[{\"$code\":\"Q['month_actions'] = (Q['month_actions'] || 0) + 1;\\nQ['mayors_network_timer'] = 4;\"}],\"cardImage\":\"img/card_mayors.jpg\",\"options\":[{\"id\":\"@mayors_network.council\"},{\"id\":\"@mayors_network.projects\"},{\"id\":\"@mayors_network.recruit\"},{\"id\":\"@discard_card\"},{\"id\":\"@easy_discard\"}],\"content\":{\"content\":[{\"type\":\"heading\",\"content\":\"Mayors' network\"},{\"type\":\"paragraph\",\"content\":[\"Šarec was a mayor, and mayors trust one of their own. Your standing with them is \",{\"type\":\"emphasis-2\",\"content\":{\"type\":\"insert\",\"insert\":0}},\"/100. A mayor with a road to build is a good ally. A mayor you ignore is not.\"]}],\"stateDependencies\":[{\"type\":\"insert\",\"fn\":{\"$code\":\"return (Q['rel_mayors'] || 0);\"}}]}},\"online_campaign.anti_jansa\":{\"id\":\"online_campaign.anti_jansa\",\"title\":\"Push the anti-Janša line.\",\"subtitle\":\"Free. Urban professionals like it. It helps whoever owns this fight.\",\"onArrival\":[{\"$code\":\"window.SLO.salience(Q, 'media', 0.3);\\nwindow.SLO.mood(Q, 'urban_prof', 3);\"}],\"content\":{\"content\":\"Janša, the leader of the opposition SDS party, is an easy target and a reliable one. The urban professionals cheer. Anyone else who has been running against him for years cheers as well, and has more to show for it.\",\"type\":\"paragraph\"}},\"online_campaign\":{\"id\":\"online_campaign\",\"type\":\"scene\",\"title\":\"Online campaign\",\"subtitle\":\"Cheap. Sets the agenda for a week, builds nothing.\",\"newPage\":true,\"isCard\":true,\"tags\":[\"party_affairs\"],\"viewIf\":{\"$code\":\"return ((Q['online_campaign_timer'] || 0) <= 0);\"},\"onArrival\":[{\"$code\":\"Q['month_actions'] = (Q['month_actions'] || 0) + 1;\\nQ['online_campaign_timer'] = 2;\"}],\"cardImage\":\"img/card_socialmedia.jpg\",\"options\":[{\"id\":\"@online_campaign.corruption\"},{\"id\":\"@online_campaign.healthcare\"},{\"id\":\"@online_campaign.anti_jansa\"},{\"id\":\"@discard_card\"},{\"id\":\"@easy_discard\"}],\"content\":[{\"type\":\"heading\",\"content\":\"Online campaign\"},{\"type\":\"paragraph\",\"content\":\"Facebook and Twitter cost nothing but attention. A young staffer with a phone can decide what the country argues about this week. Which issue do you push?\"}]},\"coalition.invite_desus\":{\"id\":\"coalition.invite_desus\",\"title\":{\"content\":[\"Invite DeSUS (\",{\"type\":\"insert\",\"insert\":0},\" seats)\"],\"stateDependencies\":[{\"type\":\"insert\",\"fn\":{\"$code\":\"return (Q['desus_r'] || 0);\"}}]},\"subtitle\":\"Karl Erjavec wants defence, and a promise on pensions.\",\"unavailableSubtitle\":\"Erjavec is waiting to see who else is in.\",\"viewIf\":{\"$code\":\"return (((Q['gov_desus'] || 0)===0) && ((Q['desus_r'] || 0) > 0));\"},\"chooseIf\":{\"$code\":\"return ((Q['rel_desus'] || 0) >= (40 + (Q['coal_penalty'] || 0)));\"},\"onArrival\":[{\"$code\":\"Q['gov_desus'] = 1;\\nQ['coalition_strain'] = (Q['coalition_strain'] || 0) + 4;\\nQ['promise_pensions'] = 1;\"}],\"goTo\":[{\"id\":\"coalition\"}],\"content\":{\"content\":\"The pensioners' party has been in nearly every government since 1997 and has brought down several. Karl Erjavec takes defence. You promise that pensions will rise faster than the budget would like.\",\"type\":\"paragraph\"}},\"root.start\":{\"id\":\"root.start\",\"onArrival\":[{\"$code\":\"var S = window.SLO;\\nS.init(Q);\\nQ.started = 1;\\nQ.time = 1;\\nQ.year = 2018;\\nQ.month = 2;\\nQ.month_actions = 0;\\nQ.difficulty = 0;\\n\\n// phase flags\\nQ.in_campaign = 1;\\nQ.in_government = 0;\\nQ.election_done = 0;\\nQ.next_election_time = 5;\\n\\n// the outgoing Cerar government\\nQ.gov_smc = 1; Q.gov_sd = 1; Q.gov_desus = 1;\\nQ.pm_party = 'smc';\\n\\n// LMŠ: a mayor, a list, about 300 members\\nQ.resources = 3;\\nQ.nsi_leader = 'Matej Tonin'; Q.nsi_surname = 'Tonin';\\nQ.leader_bonus = 3;\\nQ.roots = 5;\\nQ.cohesion = 70;\\nQ.wins = 0;\\n\\n// outside actors, 0-100\\nQ.rel_est = 40;\\nQ.rel_media = 55;\\nQ.rel_ngo = 35;\\nQ.rel_mayors = 55;\\nQ.est_debt = 0;\\nQ.captured = 0;\\n\\n// other parties' willingness to work with LMŠ, 0-100\\nQ.rel_sd = 55;\\nQ.rel_smc = 50;\\nQ.rel_sab = 55;\\nQ.rel_desus = 50;\\nQ.rel_levica = 42;\\nQ.rel_nsi = 40;\\nQ.rel_sds = 15;\\n\\n// coalition state (set at formation)\\nQ.coalition_strain = 0;\\nQ.levica_support = 0;\\nQ.levica_agreement = 0;\\n\\n// every card or event cooldown must be listed here to count down\\nQ.timers = ['advisor_action', 'field_campaign', 'online_campaign', 'claim_issue', 'court_media',\\n            'mayors_network', 'ngo_outreach', 'call_favour', 'membership_drive', 'answer_challenger',\\n            'healthcare_reform', 'public_pay', 'housing_policy', 'coalition_management',\\n            'levica_talks', 'appointments', 'defection', 'est_bill'];\\nQ.advisor_action_timer = 0;\\n\\nS.recompute(Q);\"}],\"newPage\":true,\"options\":[{\"id\":\"@root\",\"title\":\"Begin.\"}],\"content\":[{\"type\":\"heading\",\"content\":\"February 2018\"},{\"type\":\"paragraph\",\"content\":\"Marjan Šarec is the mayor of Kamnik, a former comedian and impressionist, and the man who came within a few points of unseating President Pahor last autumn. He has a list with his name on it, about three hundred members, and no programme that anyone could quote.\"},{\"type\":\"paragraph\",\"content\":\"He also has what nobody else in Slovenian politics has this year: he is new. Every four years the liberal centre finds a new face, votes for it, and discards it. Jankovič in 2011. Cerar in 2014. The polls say it is your turn.\"},{\"type\":\"paragraph\",\"content\":\"You are the party leadership. Your task is not to win in June. That part is almost easy. Your task is to still exist in 2022.\"},{\"type\":\"paragraph\",\"content\":\"Each month you play one card. Watch the tabs on the left: voters, issues, allies.\"}]},\"root\":{\"id\":\"root\",\"type\":\"scene\",\"title\":\"Root Scene\",\"newPage\":true,\"goTo\":[{\"id\":\"post_event\",\"predicate\":{\"$code\":\"return ((Q['started'] || 0)===1);\"}},{\"id\":\"root.start_menu\",\"predicate\":{\"$code\":\"return ((Q['started'] || 0)===0);\"}}],\"content\":{\"content\":\"\",\"type\":\"paragraph\"}},\"election_2018.after_count\":{\"id\":\"election_2018.after_count\",\"goTo\":[{\"id\":\"nsi_council\",\"predicate\":{\"$code\":\"return (((Q['nsi_r'] || 0) > 0) && ((Q['nsi_votes'] || 0) <= 10));\"}},{\"id\":\"coalition\",\"predicate\":{\"$code\":\"return (((Q['nsi_r'] || 0)===0) || ((Q['nsi_votes'] || 0) > 10));\"}}],\"content\":{\"content\":\"\",\"type\":\"paragraph\"}},\"election_2018\":{\"id\":\"election_2018\",\"type\":\"scene\",\"title\":\"Election night\",\"subtitle\":\"3 June 2018\",\"newPage\":true,\"tags\":[\"event\"],\"priority\":-1,\"viewIf\":{\"$code\":\"return ((((Q['year'] || 0)===2018) && ((Q['month'] || 0)===6)) && ((Q['election_done'] || 0)===0));\"},\"maxVisits\":1,\"onArrival\":[{\"$code\":\"var S = window.SLO;\\nS.election(Q, true);\\nQ.election_done = 1;\\nQ.next_election_time = 53;\\nQ.in_campaign = 0;\\nQ.lms_result = Q.lms_votes;\\n// the Cerar government is now a caretaker\\nfor (var p of S.PARTIES) { Q['gov_' + p] = 0; }\\nQ.pm_party = '';\\nQ.second_largest = 1;\\nfor (var p of ['sd', 'smc', 'levica', 'nsi', 'sab', 'desus']) {\\n    if (Q[p + '_r'] > Q.lms_r) { Q.second_largest = 0; }\\n}\\nQ.coal_penalty = Q.second_largest ? 0 : 15;\\n// SDS, NSi and SNS with the two minority MPs: then Janša needs nobody else\\nQ.right_seats = Q.sds_r + Q.nsi_r + Q.sns_r;\\nQ.right_majority = (Q.right_seats + 2 >= 46) ? 1 : 0;\"}],\"goTo\":[{\"id\":\"election_2018.below_threshold\",\"predicate\":{\"$code\":\"return ((Q['lms_r'] || 0)===0);\"}},{\"id\":\"election_2018.jansa_majority\",\"predicate\":{\"$code\":\"return (((Q['lms_r'] || 0) > 0) && ((Q['right_majority'] || 0)===1));\"}},{\"id\":\"election_2018.results\",\"predicate\":{\"$code\":\"return (((Q['lms_r'] || 0) > 0) && ((Q['right_majority'] || 0)===0));\"}}],\"content\":{\"type\":\"heading\",\"content\":\"Election night, 3 June 2018\"},\"countVisitsMax\":1},\"murmurs.ignore\":{\"id\":\"murmurs.ignore\",\"title\":\"Ignore it. New parties are announced every month.\",\"onArrival\":[{\"$code\":\"Q['ch_momentum'] = (Q['ch_momentum'] || 0) + 15;\"}],\"content\":{\"content\":\"Most of them come to nothing. So did most of the ones before yours.\",\"type\":\"paragraph\"}},\"murmurs\":{\"id\":\"murmurs\",\"type\":\"scene\",\"title\":\"Murmurs of a new party\",\"subtitle\":\"Somebody is being talked about.\",\"newPage\":true,\"tags\":[\"event\"],\"viewIf\":{\"$code\":\"return ((Q['murmur_pending'] || 0)===1);\"},\"onArrival\":[{\"$code\":\"Q['murmur_pending'] = 0;\\nQ['ch_active'] = 1;\\nQ['ch_momentum'] = 15;\\nQ['murmurs_seen'] = (Q['murmurs_seen'] || 0) + 1;\"}],\"options\":[{\"id\":\"@murmurs.coopt\"},{\"id\":\"@murmurs.discredit\"},{\"id\":\"@murmurs.outbuild\"},{\"id\":\"@murmurs.ignore\"}],\"content\":{\"content\":[{\"type\":\"heading\",\"content\":\"Murmurs of a new party\"},{\"type\":\"paragraph\",\"content\":[\"It starts as a line in a weekend column, then a question in a poll: \",{\"type\":\"emphasis-1\",\"content\":\"would you vote for a new party if...?\"},\"\"]},{\"type\":\"paragraph\",\"content\":[\"The issue is \",{\"type\":\"emphasis-2\",\"content\":{\"type\":\"insert\",\"insert\":0}},\". The people who care about it are unhappy, and none of the liberal parties is trusted on it, yours included. The name going around: \",{\"type\":\"insert\",\"insert\":1},\".\"]},{\"type\":\"paragraph\",\"content\":\"You know exactly how this works. Two years ago the name going around was Marjan Šarec.\"}],\"stateDependencies\":[{\"type\":\"insert\",\"fn\":{\"$code\":\"return (Q['ch_issue_name'] || 0);\"}},{\"type\":\"insert\",\"fn\":{\"$code\":\"return (Q['ch_name'] || 0);\"}}]}},\"nsi_forum21.distance\":{\"id\":\"nsi_forum21.distance\",\"title\":\"Agree that NSi has questions to answer.\",\"subtitle\":\"Some rural Catholics like hearing it from you. NSi will not forget it.\",\"onArrival\":[{\"$code\":\"Q.rel_nsi -= 10;\\nif (Q.gov_nsi) { Q.coalition_strain += 6; }\\nwindow.SLO.DEMOS.forEach(function(d) { window.SLO.aff(Q, d, 'nsi', -0.6); window.SLO.aff(Q, d, 'sds', 0.6); });\\nwindow.SLO.aff(Q, 'rural_cath', 'lms', 2);\\nwindow.SLO.aff(Q, 'self_emp', 'lms', 1);\"}],\"content\":{\"content\":\"Šarec says that every party must explain whom it meets. Nova24TV quotes him approvingly for the first and only time. Pogorelec does not take his calls for a week.\",\"type\":\"paragraph\"}},\"nsi_forum21\":{\"id\":\"nsi_forum21\",\"type\":\"scene\",\"title\":\"The Christian wing of Forum 21\",\"subtitle\":\"September 2018\",\"newPage\":true,\"tags\":[\"event\"],\"viewIf\":{\"$code\":\"return ((((Q['nsi_pogorelec'] || 0)===1) && ((Q['year'] || 0)===2018)) && ((Q['month'] || 0)===9));\"},\"maxVisits\":1,\"onArrival\":[{\"$code\":\"// about 0.7 points from NSi to SDS\\nwindow.SLO.DEMOS.forEach(function(d) { window.SLO.aff(Q, d, 'nsi', -1); window.SLO.aff(Q, d, 'sds', 1); });\\nQ.rel_nsi -= 4;\"}],\"options\":[{\"id\":\"@nsi_forum21.silence\"},{\"id\":\"@nsi_forum21.defend\"},{\"id\":\"@nsi_forum21.win\"},{\"id\":\"@nsi_forum21.distance\"}],\"content\":{\"content\":[{\"type\":\"heading\",\"content\":\"The Christian wing of Forum 21\"},{\"type\":\"paragraph\",\"content\":\"Nova24TV and Demokracija, the media close to SDS, have found a photograph. It shows Janez Pogorelec at a round table in Ribnica, two chairs from Milan Kučan, the last leader of the Slovenian communists. The headline asks where NSi is going, and answers that it has become the Christian wing of Kučan's Forum 21.\"},{\"type\":\"paragraph\",\"content\":\"The pieces that follow are less subtle. Pogorelec is the man who spits at SDS for the left's newspapers. The Church, they say, has been sold to the transition left for five minutes of fame. Parish newsletters in Gorenjska and Dolenjska reprint them. NSi's own members ask their new leader why he is suddenly so popular with Mladina.\"},{\"type\":\"paragraph\",\"content\":[{\"type\":\"conditional\",\"content\":\"Pogorelec sits in your cabinet. \",\"predicate\":0},{\"type\":\"conditional\",\"content\":\"Pogorelec is in opposition, and alone there: SDS will not speak to him. \",\"predicate\":1},\" His office asks whether LMŠ will say anything.\"]}],\"stateDependencies\":[{\"type\":\"predicate\",\"fn\":{\"$code\":\"return (((Q['gov_nsi'] || 0)) !== 0);\"}},{\"type\":\"predicate\",\"fn\":{\"$code\":\"return ((Q['gov_nsi'] || 0)===0);\"}}]},\"countVisitsMax\":1},\"tonin_leader.pragmatists\":{\"id\":\"tonin_leader.pragmatists\",\"title\":\"Reach out to the party's pragmatic wing.\",\"subtitle\":\"Costs 2 political capital. Quiet lunches with Pogorelec's people, to see what can be done.\",\"chooseIf\":{\"$code\":\"return ((Q['resources'] || 0) >= 2);\"},\"unavailableSubtitle\":\"Needs 2 political capital.\",\"onArrival\":[{\"$code\":\"Q.resources -= 2;\\nQ.nsi_pragmatists = 1;\\nQ.rel_nsi += 2;\"}],\"content\":{\"content\":\"Nobody is quoted. Pogorelec says the party will count its votes in June, and that ten percent was Tonin's promise, not his.\",\"type\":\"paragraph\"}},\"tonin_leader\":{\"id\":\"tonin_leader\",\"type\":\"scene\",\"title\":\"Tonin takes NSi\",\"subtitle\":\"March 2018\",\"newPage\":true,\"tags\":[\"event\"],\"viewIf\":{\"$code\":\"return (((((Q['in_campaign'] || 0)) !== 0) && ((Q['year'] || 0)===2018)) && ((Q['month'] || 0)===3));\"},\"maxVisits\":1,\"onArrival\":[{\"$code\":\"Q.nsi_tonin = 1;\\nwindow.SLO.ideology(Q, 'nsi', 'Christian conservatism');\"}],\"options\":[{\"id\":\"@tonin_leader.shrug\"},{\"id\":\"@tonin_leader.call\"},{\"id\":\"@tonin_leader.push_back\"},{\"id\":\"@tonin_leader.pragmatists\"}],\"content\":[{\"type\":\"heading\",\"content\":\"Tonin takes NSi\"},{\"type\":\"paragraph\",\"content\":\"Ljudmila Novak, who led New Slovenia (NSi) for ten years and kept it at arm's length from Janez Janša, is gone. Matej Tonin is acting leader. He is thirty-four, comes from the Kamnik area like Šarec, and promises to take the party above ten percent.\"},{\"type\":\"paragraph\",\"content\":\"His first speeches are about family, faith and the nation. The talk of an independent centre-right is quieter, and SDS papers are kinder to NSi than they were. Some in the party, the lawyer Janez Pogorelec among them, still say that the right cannot win while Janša leads it.\"},{\"type\":\"paragraph\",\"content\":\"A reporter asks what LMŠ makes of the new NSi.\"}],\"countVisitsMax\":1},\"claim_issue.transport\":{\"id\":\"claim_issue.transport\",\"title\":\"Transport: rail, roads and the Koper railway.\",\"subtitle\":\"-2 political capital. A step toward credibility on transport.\",\"unavailableSubtitle\":\"Needs 2 political capital.\",\"chooseIf\":{\"$code\":\"return ((Q['resources'] || 0) >= 2);\"},\"onArrival\":[{\"$code\":\"Q.resources -= 2;\\nQ.claimed = window.SLO.claim(Q, 'transport') ? 1 : 0;\\nwindow.SLO.aff(Q, 'suburban', 'lms', 1.5);\"}],\"content\":{\"content\":{\"type\":\"paragraph\",\"content\":[{\"type\":\"conditional\",\"content\":\"A civil engineer who actually knows the railway project agrees to talk to the press for you. Her phrases get reused by journalists. \",\"predicate\":0},{\"type\":\"conditional\",\"content\":\"The railway question is too big to settle in one working group. You leave with a binder of options and a better understanding of why nobody has solved it.\",\"predicate\":1}]},\"stateDependencies\":[{\"type\":\"predicate\",\"fn\":{\"$code\":\"return ((Q['claimed'] || 0)===1);\"}},{\"type\":\"predicate\",\"fn\":{\"$code\":\"return ((Q['claimed'] || 0)===0);\"}}]}},\"claim_issue\":{\"id\":\"claim_issue\",\"type\":\"scene\",\"title\":\"Programme work\",\"subtitle\":\"Slow, serious work on one issue. Costs 2.\",\"newPage\":true,\"isCard\":true,\"tags\":[\"party_affairs\"],\"viewIf\":{\"$code\":\"return ((Q['claim_issue_timer'] || 0) <= 0);\"},\"onArrival\":[{\"$code\":\"Q['month_actions'] = (Q['month_actions'] || 0) + 1;\\nQ['claim_issue_timer'] = 3;\"}],\"cardImage\":\"img/card_programme.jpg\",\"options\":[{\"id\":\"@claim_issue.healthcare\"},{\"id\":\"@claim_issue.housing\"},{\"id\":\"@claim_issue.jobs\"},{\"id\":\"@claim_issue.transport\"},{\"id\":\"@discard_card\"},{\"id\":\"@easy_discard\"}],\"content\":[{\"type\":\"heading\",\"content\":\"Programme work\"},{\"type\":\"paragraph\",\"content\":\"Voters trust a party on an issue when it has a plan, people who can explain it and a record. LMŠ has a few of each. Which issue gets the working group this month? Three rounds of work on one issue earn a point of credibility; the Issues tab shows how far each has got.\"}]},\"coalition.speaker_tonin\":{\"id\":\"coalition.speaker_tonin\",\"title\":\"Offer Matej Tonin the Speaker's chair.\",\"subtitle\":\"NSi warms to you. The Social Democrats wanted that chair. If NSi stays out, you will have to take it back.\",\"viewIf\":{\"$code\":\"return ((((((Q['gov_nsi'] || 0)===0) && ((Q['nsi_r'] || 0) > 0)) && ((Q['speaker_offered'] || 0)===0)) && ((Q['levica_support'] || 0)===0)) && ((Q['nsi_pogorelec'] || 0)===0));\"},\"onArrival\":[{\"$code\":\"Q['speaker_offered'] = 1;\\nQ['rel_nsi'] = (Q['rel_nsi'] || 0) + 10;\\nQ['rel_sd'] = (Q['rel_sd'] || 0) - 8;\"}],\"goTo\":[{\"id\":\"coalition\"}],\"content\":[{\"type\":\"paragraph\",\"content\":\"The Speaker is elected by secret ballot with 46 votes, and the vote usually shows which coalition is coming. Matej Tonin, the leader of the Christian-democratic NSi, is elected with yours. It keeps him visible, and out of a ministry where he could be blamed for something.\"},{\"type\":\"paragraph\",\"content\":\"Dejan Židan, the Social Democrat leader, had expected the chair. He congratulates Tonin briefly.\"}]},\"coalition.invite_nsi\":{\"id\":\"coalition.invite_nsi\",\"title\":{\"content\":[\"Invite NSi (\",{\"type\":\"insert\",\"insert\":0},\" seats)\"],\"stateDependencies\":[{\"type\":\"insert\",\"fn\":{\"$code\":\"return (Q['nsi_r'] || 0);\"}}]},\"subtitle\":{\"content\":[{\"type\":\"conditional\",\"content\":\"Matej Tonin wants a cap on social contributions, full funding for private schools and the family ministry. He will not join a coalition that looks unstable. \",\"predicate\":0},{\"type\":\"conditional\",\"content\":\"Janez Pogorelec wants a cap on social contributions and the public administration ministry for himself. \",\"predicate\":1},\" Levica will not support a government with NSi in it.\"],\"stateDependencies\":[{\"type\":\"predicate\",\"fn\":{\"$code\":\"return ((Q['nsi_pogorelec'] || 0)===0);\"}},{\"type\":\"predicate\",\"fn\":{\"$code\":\"return (((Q['nsi_pogorelec'] || 0)) !== 0);\"}}]},\"unavailableSubtitle\":{\"content\":[{\"type\":\"conditional\",\"content\":\"Not while you have a deal with Levica. \",\"predicate\":0},{\"type\":\"conditional\",\"content\":\"Tonin has watched you give way to every partner in public. He doubts that six parties will last, and he is leaving the talks. \",\"predicate\":1},{\"type\":\"conditional\",\"content\":\"NSi would rather wait for Janša. A gesture might change that. \",\"predicate\":2},{\"type\":\"conditional\",\"content\":\"Pogorelec is new and his council is split. A gesture might help.\",\"predicate\":3}],\"stateDependencies\":[{\"type\":\"predicate\",\"fn\":{\"$code\":\"return (((Q['levica_support'] || 0)) !== 0);\"}},{\"type\":\"predicate\",\"fn\":{\"$code\":\"return ((((Q['levica_support'] || 0)===0) && ((Q['sweetened'] || 0) >= 2)) && (((Q['nsi_wary'] || 0)) !== 0));\"}},{\"type\":\"predicate\",\"fn\":{\"$code\":\"return ((((Q['levica_support'] || 0)===0) && ((Q['rel_nsi'] || 0) < (Q['nsi_join'] || 0))) && (((Q['nsi_wary'] || 0)) !== 0));\"}},{\"type\":\"predicate\",\"fn\":{\"$code\":\"return ((((Q['levica_support'] || 0)===0) && ((Q['rel_nsi'] || 0) < (Q['nsi_join'] || 0))) && (((Q['nsi_pogorelec'] || 0)) !== 0));\"}}]},\"viewIf\":{\"$code\":\"return (((Q['gov_nsi'] || 0)===0) && ((Q['nsi_r'] || 0) > 0));\"},\"chooseIf\":{\"$code\":\"return ((((Q['rel_nsi'] || 0) >= (Q['nsi_join'] || 0)) && ((Q['levica_support'] || 0)===0)) && ((((Q['sweetened'] || 0) < 2) || ((Q['nsi_wary'] || 0)===0))));\"},\"onArrival\":[{\"$code\":\"Q.gov_nsi = 1; Q.coalition_strain += 12; Q.cohesion -= 8; Q.nsi_in = 1;\\nwindow.SLO.own(Q, 'lms', 'taxation', 1);\\nwindow.SLO.mood(Q, 'self_emp', 8);\\nwindow.SLO.mood(Q, 'public', -6);\"}],\"goTo\":[{\"id\":\"coalition\"}],\"content\":{\"content\":[{\"type\":\"paragraph\",\"content\":[{\"type\":\"conditional\",\"content\":\"Matej Tonin is young, careful and to the right of everyone else at the table. In July he came close to walking out: he said the programme was nearly agreed, and that he doubted six parties could govern together. This time he stays. \",\"predicate\":0},{\"type\":\"conditional\",\"content\":\"Janez Pogorelec has spent years saying that NSi should govern without Janša, and now he has to show it. He takes public administration and a seat at the head of the table. The SDS papers call it his reward. \",\"predicate\":1},\"\"]},{\"type\":\"paragraph\",\"content\":\"A government with NSi in it has a real majority and does not need Levica. It also has a tax policy, which is new for LMŠ, and a partner whose programme the Social Democrats have spent thirty years voting against. Some of your MPs did not sign up for this one.\"}],\"stateDependencies\":[{\"type\":\"predicate\",\"fn\":{\"$code\":\"return ((Q['nsi_pogorelec'] || 0)===0);\"}},{\"type\":\"predicate\",\"fn\":{\"$code\":\"return (((Q['nsi_pogorelec'] || 0)) !== 0);\"}}]}},\"coalition.levica_deal\":{\"id\":\"coalition.levica_deal\",\"title\":{\"content\":[\"Sign a support agreement with Levica (\",{\"type\":\"insert\",\"insert\":0},\" votes)\"],\"stateDependencies\":[{\"type\":\"insert\",\"fn\":{\"$code\":\"return (Q['levica_r'] || 0);\"}}]},\"subtitle\":\"Not ministers: votes from outside. In return, a higher minimum wage and an end to supplemental health insurance.\",\"unavailableSubtitle\":{\"content\":[{\"type\":\"conditional\",\"content\":\"Levica will not support a government with NSi in it. \",\"predicate\":0},{\"type\":\"conditional\",\"content\":\"Luka Mesec does not think you are serious.\",\"predicate\":1}],\"stateDependencies\":[{\"type\":\"predicate\",\"fn\":{\"$code\":\"return (((Q['gov_nsi'] || 0)) !== 0);\"}},{\"type\":\"predicate\",\"fn\":{\"$code\":\"return (!(((Q['gov_nsi'] || 0)) !== 0));\"}}]},\"viewIf\":{\"$code\":\"return (((Q['levica_support'] || 0)===0) && ((Q['levica_r'] || 0) > 0));\"},\"chooseIf\":{\"$code\":\"return (((Q['rel_levica'] || 0) >= 40) && ((Q['gov_nsi'] || 0)===0));\"},\"onArrival\":[{\"$code\":\"Q['levica_support'] = 1;\\nQ['levica_agreement'] = 60;\\nQ['promise_insurance'] = 1;\\nQ['promise_minimum_wage'] = 1;\"}],\"goTo\":[{\"id\":\"coalition\"}],\"content\":[{\"type\":\"paragraph\",\"content\":\"Levica will not join the cabinet. It will sign a list of projects and vote for the government while the list is being worked through. Near the top of the list: raise the minimum wage, and abolish supplemental health insurance, a 35-euro monthly payment to private insurers that almost every adult makes.\"},{\"type\":\"paragraph\",\"content\":\"You sign. The insurers are not at the table. They have other ways of making themselves heard.\"}]},\"coalition.sweeten\":{\"id\":\"coalition.sweeten\",\"title\":\"Offer more to everyone: posts, budget lines, a softer tone.\",\"subtitle\":\"-2 political capital. Every party becomes easier to persuade. The coalition starts under more strain.\",\"unavailableSubtitle\":{\"content\":[{\"type\":\"conditional\",\"content\":\"Needs 2 political capital. \",\"predicate\":0},{\"type\":\"conditional\",\"content\":\"NSi is in, and Tonin will not watch you give way to everyone a second time.\",\"predicate\":1}],\"stateDependencies\":[{\"type\":\"predicate\",\"fn\":{\"$code\":\"return ((Q['resources'] || 0) < 2);\"}},{\"type\":\"predicate\",\"fn\":{\"$code\":\"return (((Q['resources'] || 0) >= 2) && (((Q['nsi_wary'] || 0)) !== 0));\"}}]},\"chooseIf\":{\"$code\":\"return ((Q['can_sweeten'] || 0)===1);\"},\"onArrival\":[{\"$code\":\"Q['resources'] = (Q['resources'] || 0) - 2;\\nQ['sweetened'] = (Q['sweetened'] || 0) + 1;\\nQ['rel_sd'] = (Q['rel_sd'] || 0) + 8;\\nQ['rel_smc'] = (Q['rel_smc'] || 0) + 8;\\nQ['rel_sab'] = (Q['rel_sab'] || 0) + 8;\\nQ['rel_desus'] = (Q['rel_desus'] || 0) + 8;\\nQ['rel_levica'] = (Q['rel_levica'] || 0) + 8;\\nQ['rel_nsi'] = (Q['rel_nsi'] || 0) + 5;\\nQ['coalition_strain'] = (Q['coalition_strain'] || 0) + 6;\"}],\"goTo\":[{\"id\":\"coalition\"}],\"content\":{\"content\":\"You give away a state secretary here, a committee chair there, and apologise for one or two things said in May. It is noted that LMŠ can be made to pay.\",\"type\":\"paragraph\"}},\"coalition.form\":{\"id\":\"coalition.form\",\"title\":\"Go to the President with this coalition.\",\"unavailableSubtitle\":{\"content\":[\"You have \",{\"type\":\"insert\",\"insert\":0},\" of 46 votes.\"],\"stateDependencies\":[{\"type\":\"insert\",\"fn\":{\"$code\":\"return (Q['coal_total'] || 0);\"}}]},\"chooseIf\":{\"$code\":\"return ((Q['coal_total'] || 0) >= 46);\"},\"onArrival\":[{\"$code\":\"var S = window.SLO;\\nQ.forming = 0;\\nQ.in_government = 1;\\nQ.coalition_strain += 10;\\nif (Q.levica_support) { Q.coalition_strain += 5; }\\n// the Speaker's chair goes to a coalition party after all\\nif (Q.speaker_offered && !Q.gov_nsi) { Q.rel_nsi -= 15; Q.speaker_taken_back = 1; }\\n// talks ran all summer; card and adviser cooldowns run on through it\\nvar skip = 9 - Q.month;\\nfor (var t of Q.timers) {\\n    if (Q[t + '_timer'] > 0) { Q[t + '_timer'] = Math.max(0, Q[t + '_timer'] - skip); }\\n}\\nQ.time += skip;\\nQ.month = 9;\\nQ.month_actions = 0;\\nQ.leader_bonus += 2;\\nS.moodAll(Q, 8);\\nQ.resources += 2;\\nS.recompute(Q);\"}],\"options\":[{\"id\":\"@root\",\"title\":\"To work.\"}],\"content\":{\"content\":[{\"type\":\"heading\",\"content\":\"13 September 2018\"},{\"type\":\"paragraph\",\"content\":[\"The Šarec government is sworn in. At forty he is the youngest prime minister the country has had. \",{\"type\":\"conditional\",\"content\":[\"It is a minority government: \",{\"type\":\"insert\",\"insert\":1},\" partners in cabinet and Levica's signature on a piece of paper. \"],\"predicate\":0},{\"type\":\"conditional\",\"content\":\"It has a majority of its own, which is more than anyone expected. \",\"predicate\":2},{\"type\":\"conditional\",\"content\":\"It runs from the Social Democrats to the Christian democrats, and each has read the other's programme. \",\"predicate\":3},{\"type\":\"conditional\",\"content\":\"Matej Tonin is voted out of the Speaker's chair the same week, and a coalition deputy takes it. \",\"predicate\":4},\"\"]},{\"type\":\"paragraph\",\"content\":\"He is more popular tonight than he will ever be again. The comedian's timing is intact: he knows it.\"}],\"stateDependencies\":[{\"type\":\"predicate\",\"fn\":{\"$code\":\"return (((Q['levica_support'] || 0)) !== 0);\"}},{\"type\":\"insert\",\"fn\":{\"$code\":\"return (Q['partners'] || 0);\"}},{\"type\":\"predicate\",\"fn\":{\"$code\":\"return (!(((Q['levica_support'] || 0)) !== 0));\"}},{\"type\":\"predicate\",\"fn\":{\"$code\":\"return (((Q['gov_nsi'] || 0)) !== 0);\"}},{\"type\":\"predicate\",\"fn\":{\"$code\":\"return (((Q['speaker_taken_back'] || 0)) !== 0);\"}}]}},\"coalition.give_up\":{\"id\":\"coalition.give_up\",\"title\":\"Give up. Let Janša try again.\",\"subtitle\":\"This ends the game.\",\"onArrival\":[{\"$code\":\"Q['ending'] = \\\"opposition\\\";\\nQ['forming'] = 0;\\nQ['gov_lms'] = 0;\\nQ['pm_party'] = \\\"sds\\\";\\nQ['gov_sds'] = 1;\"}],\"options\":[{\"id\":\"@game_over\",\"title\":\"The end.\"}],\"content\":{\"content\":\"You return the mandate.\",\"type\":\"paragraph\"}},\"coalition\":{\"id\":\"coalition\",\"type\":\"scene\",\"title\":\"Forming a government\",\"newPage\":true,\"onArrival\":[{\"$code\":\"var S = window.SLO;\\nQ.forming = 1;\\nQ.gov_lms = 1;\\nQ.pm_party = 'lms';\\nQ.coal_total = S.govSeats(Q) + (Q.levica_support ? Q.levica_r : 0) + 2;\\nQ.partners = 0;\\nfor (var p of ['sd', 'smc', 'sab', 'desus', 'nsi']) { if (Q['gov_' + p]) { Q.partners += 1; } }\\n// NSi leaves the talks if you give way to everyone twice, also when it is already in\\n// a Pogorelec NSi does not mind; it also joins at a lower relation\\nQ.nsi_wary = Q.nsi_pogorelec ? 0 : 1;\\nQ.nsi_join = (Q.nsi_pogorelec ? 35 : 45) + Q.coal_penalty;\\nQ.can_sweeten = (Q.resources >= 2 && !(Q.gov_nsi && Q.nsi_wary && Q.sweetened >= 1)) ? 1 : 0;\"}],\"options\":[{\"id\":\"@coalition.invite_sd\"},{\"id\":\"@coalition.invite_smc\"},{\"id\":\"@coalition.invite_sab\"},{\"id\":\"@coalition.invite_desus\"},{\"id\":\"@coalition.speaker_tonin\"},{\"id\":\"@coalition.invite_nsi\"},{\"id\":\"@coalition.levica_deal\"},{\"id\":\"@coalition.sweeten\"},{\"id\":\"@coalition.form\"},{\"id\":\"@coalition.give_up\"}],\"content\":{\"content\":[{\"type\":\"heading\",\"content\":\"Forming a government\"},{\"type\":\"paragraph\",\"content\":[{\"type\":\"magic\",\"content\":\"<div data-slo=\\\"coalition\\\"></div>\"},\"\"]},{\"type\":\"paragraph\",\"content\":[\"You need 46 of 90. The two minority MPs vote with whoever governs, so you need 44 from parties. Every partner wants something. \",{\"type\":\"conditional\",\"content\":\"Because LMŠ is not the largest liberal party, everyone is harder to persuade.\",\"predicate\":0}]}],\"stateDependencies\":[{\"type\":\"predicate\",\"fn\":{\"$code\":\"return ((Q['coal_penalty'] || 0) > 0);\"}}]}}},\"qualities\":{},\"qdisplays\":{\"month\":{\"id\":\"month\",\"type\":\"qdisplay\",\"content\":[{\"min\":1,\"max\":1,\"output\":\"January\"},{\"min\":2,\"max\":2,\"output\":\"February\"},{\"min\":3,\"max\":3,\"output\":\"March\"},{\"min\":4,\"max\":4,\"output\":\"April\"},{\"min\":5,\"max\":5,\"output\":\"May\"},{\"min\":6,\"max\":6,\"output\":\"June\"},{\"min\":7,\"max\":7,\"output\":\"July\"},{\"min\":8,\"max\":8,\"output\":\"August\"},{\"min\":9,\"max\":9,\"output\":\"September\"},{\"min\":10,\"max\":10,\"output\":\"October\"},{\"min\":11,\"max\":11,\"output\":\"November\"},{\"min\":12,\"max\":12,\"output\":\"December\"}]},\"relationships\":{\"id\":\"relationships\",\"type\":\"qdisplay\",\"content\":[{\"max\":5,\"output\":\"hostile\"},{\"min\":5,\"max\":14.9,\"output\":\"frigid\"},{\"min\":14.9,\"max\":29.9,\"output\":\"cold\"},{\"min\":29.9,\"max\":39.9,\"output\":\"cool\"},{\"min\":39.9,\"max\":54.9,\"output\":\"neutral\"},{\"min\":54.9,\"max\":64.9,\"output\":\"warm\"},{\"min\":64.9,\"max\":74.9,\"output\":\"friendly\"},{\"min\":74.9,\"output\":\"very friendly\"}]},\"meter\":{\"id\":\"meter\",\"type\":\"qdisplay\",\"content\":[{\"max\":19.9,\"output\":\"very low\"},{\"min\":19.9,\"max\":39.9,\"output\":\"low\"},{\"min\":39.9,\"max\":59.9,\"output\":\"middling\"},{\"min\":59.9,\"max\":79.9,\"output\":\"high\"},{\"min\":79.9,\"output\":\"very high\"}]},\"strain\":{\"id\":\"strain\",\"type\":\"qdisplay\",\"content\":[{\"max\":14.9,\"output\":\"calm\"},{\"min\":14.9,\"max\":34.9,\"output\":\"uneasy\"},{\"min\":34.9,\"max\":59.9,\"output\":\"strained\"},{\"min\":59.9,\"max\":79.9,\"output\":\"fractious\"},{\"min\":79.9,\"output\":\"on the brink\"}]}},\"tagLookup\":{\"event\":{\"challenger_consolidated\":true,\"coalition_collapse\":true,\"coalition_troubles\":true,\"defection\":true,\"mvp_end\":true,\"establishment_bill\":true,\"media_scandal\":true,\"partner_walkout\":true,\"budget_2020\":true,\"candidate_lists\":true,\"cerar_resigns\":true,\"climate_strike\":true,\"croatia_arbitration\":true,\"december_exodus\":true,\"donor_dinner\":true,\"family_tender\":true,\"final_week\":true,\"insurance_bill_2\":true,\"european_elections\":true,\"mayors_drift\":true,\"insurance_bill_1\":true,\"minimum_wage\":true,\"new_faces_pitch\":true,\"migration_rhetoric\":true,\"nlb_question\":true,\"nlb_sale\":true,\"ngo_open_letter\":true,\"private_schools\":true,\"poll_peak\":true,\"public_pay_deal\":true,\"public_sector_strikes\":true,\"social_cap\":true,\"sarec_decision\":true,\"tv_debate\":true,\"workfare\":true,\"waiting_lists\":true,\"election_2018\":true,\"murmurs\":true,\"nsi_forum21\":true,\"tonin_leader\":true},\"advisor\":{\"wait\":true,\"korce\":true,\"sarec\":true,\"golubovic\":true},\"govt_affairs\":{\"levica_talks\":true,\"appointments\":true,\"public_pay\":true,\"coalition_management\":true,\"housing_policy\":true,\"healthcare_reform\":true},\"party_affairs\":{\"court_media\":true,\"answer_challenger\":true,\"ngo_outreach\":true,\"call_favour\":true,\"field_campaign\":true,\"membership_drive\":true,\"mayors_network\":true,\"online_campaign\":true,\"claim_issue\":true}}}"};(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
/* dendry
 * http://github.com/idmillington/dendry
 *
 * MIT License
 */
/*jshint indent:2 */
(function() {
  'use strict';

  // To avoid the need to include any utility libraries when this is
  // used in a browser, define some helper functions we'd normally
  // rely on libraries for.

  var assert = function(mustBeTrue) {
    /* istanbul ignore if */
    if (!mustBeTrue) {
      throw new Error('Assertion failed.');
    }
  };

  var each = function(array, fn) {
    for (var i = 0; i < array.length; ++i) {
      fn(array[i]);
    }
  };

  var objEach = function(obj, fn) {
    for (var key in obj) {
      fn(key, obj[key]);
    }
  };

  var merge = function() {
    var result = {};
    for (var i = 0; i < arguments.length; ++i) {
      var obj = arguments[i];
      for (var key in obj) {
        result[key] = obj[key];
      }
    }
    return result;
  };

  // Credit: Taken from Lodash (MIT License). See CREDITS.
  var isObject = function(value) {
    var type = typeof value;
    return type === 'function' || (value && type === 'object') || false;
  };

  var makeFunctionFromSource = function(source) {
    source = source.trim();
    /*jshint -W054 */
    var fn = new Function('state', 'Q', source);
    /*jshint +W054 */
    fn.source = source;
    return fn;
  };

  var runActions = function(actions, context, state) {
    if (actions === undefined) {
      return;
    }
    each(actions, function(fn) {
      try {
        fn.call(context, state, state.qualities);
      } catch (err) {
        // Ignore errors. TODO: Log them somehow?
        console.log('Error:', err);
      }
    });
  };

  var runPredicate = function(predicate, default_, context, state) {
    var result = default_;
    if (predicate === undefined) {
      return result;
    }
    try {
      result = !!predicate.call(context, state, state.qualities);
    } catch (err) {
      // Ignore errors. TODO: Log them somehow?
      console.log('Error:', err);
    }
    return result;
  };

  var runExpression = function(expression, default_, context, state) {
    var result = default_;
    if (expression === undefined) {
      return result;
    }
    try {
      result = expression.call(context, state, state.qualities);
    } catch (err) {
      // Ignore errors. TODO: Log them somehow?
      console.log('Error in expression', expression, ':', err);
    }
    return result;
  };

  var convertJSONToGame = function(json, callback) {
    var reviver = function(key, value) {
      if (isObject(value) && value.$code !== undefined) {
        return makeFunctionFromSource(value.$code);
      } else {
        return value;
      }
    };

    try {
      var game = JSON.parse(json, reviver);
      return callback(null, game);
    } catch (err) {
      return callback(err);
    }
  };

  var simpleContent = function(text) {
    return [{type:'paragraph', content:text}];
  };

  var getCardinalNumber = function(value) {
    if (Math.floor(value) === value && value >= 0 && value <= 12) {
      // Integer, so use word.
      return ['zero', 'one', 'two', 'three', 'four', 'five', 'six',
              'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve'][value];
    } else {
      return value.toString();
    }
  };

  var getOrdinalNumber = function(value) {
    if (Math.floor(value) === value && value >= 0) {
      if (value <= 12) {
        return ['zeroth', 'first', 'second', 'third', 'fourth', 'fifth',
                'sixth', 'seventh', 'eighth', 'ninth', 'tenth', 'eleventh',
                'twelfth'][value];
      } else {
        value = value.toString();
        if (/1[0-9]$/.test(value)) {
          return value + 'th';
        } else {
          var last = value.substr(value.length - 1, 1);
          switch (last) {
            case '1': return value + 'st';
            case '2': return value + 'nd';
            case '3': return value + 'rd';
            default: return value + 'th';
          }
        }
      }
    } else {
      return value.toString();
    }
  };

  var getFudgeDisplay = function(value) {
    if (Math.floor(value) === value) {
      if (value > 3) {
        return 'superb+' + (value - 3);
      } else if (value < -3) {
        return 'terrible' + (value + 3);
      } else {
        switch (value) {
          case  3: return 'superb';
          case  2: return 'great';
          case  1: return 'good';
          case  0: return 'fair';
          case -1: return 'mediocre';
          case -2: return 'poor';
          case -3: return 'terrible';
        }
      }
    } else {
      return value.toString();
    }
  };

  var getUserQDisplay = function(value, qdisplay) {
    for (var i = 0; i < qdisplay.content.length; ++i) {
      var case_ = qdisplay.content[i];
      var min = case_.min;
      var max = case_.max;
      if ((min === undefined || min <= value) &&
          (max === undefined || max >= value)) {
        if (case_.output !== undefined) {
          return case_.output;
        } else {
          return value.toString();
        }
      }
    }
    return value.toString();
  };

  // broad difficulty from https://fallenlondon.wiki/wiki/Broad_difficulty
  
  var calculateBroadDifficulty = function(quality, difficulty, scaler, random) {
    if (!scaler) {
      scaler = 0.6;
    }
    if (scaler > 1) {
      scaler = scaler/100;
    }
    var success_prob = scaler*(quality/difficulty);
    if (success_prob > 1) {
      success_prob = 1;
    }
    return success_prob;
 };

  // narrow difficulty from https://fallenlondon.wiki/wiki/Narrow_difficulty
  var calculateNarrowDifficulty = function(quality, difficulty, increment) {
    if (!increment) {
      increment = 0.1;
    }
    if (increment > 1) {
      increment = increment/100;
    }
    var success_prob = (quality - difficulty)*increment + 0.5;
    if (success_prob > 1) {
      success_prob = 1;
    } else if (success_prob < increment) {
      success_prob = increment;
    }
    return success_prob;
  };

  // this function actually does the roll for success.
  var rollDifficulty = function(success_prob, random) {
    var rn;
    if (random) {
      rn = random.random();

    } else {
      rn = Math.random();
    }
    if (rn < success_prob) {
      return true;
    }
    return false;   
  };


  // use the storynexus adjectives
  var displayDifficulty = function(success_prob) {
    if (success_prob <= 0.1) {
      return "almost impossible";
    } else if (success_prob <= 0.3) {
      return "high-risk";
    } else if (success_prob <= 0.4) {
      return "tough";
    } else if (success_prob <= 0.5) {
      return "very chancy";
    } else if (success_prob <= 0.6) {
      return "chancy";
    } else if (success_prob <= 0.7) {
      return "modest";
    } else if (success_prob <= 0.8) {
      return "very modest";
    } else if (success_prob <= 0.9) {
      return "low risk";
    } else {
      return "straightforward";
    }
  };


  // ------------------------------------------------------------------------

  // Objects with this interface are passed to a game state to have it
  // display content.
  var UserInterface = function() {};
  UserInterface.prototype.beginGame = function() {};
  UserInterface.prototype.displayContent = function(paragraphs, faceImage) {};
  // these are the dendrynexus display functions
  // displays the decks
  UserInterface.prototype.displayDecks = function(decks) {};
  // displays cards in hand
  UserInterface.prototype.displayHand = function(hand) {};
  // displays pinned cards (these are basically an alternate way of displaying choices)
  UserInterface.prototype.displayPinnedCards = function(cards) {};

  UserInterface.prototype.displayChoices = function(choices) {};
  UserInterface.prototype.displayGameOver = function() {
    this.displayContent(simpleContent('Game Over'));
  };
  UserInterface.prototype.removeChoices = function() {};
  // Called when the player makes a choice and new content is about to be
  // added (i.e. isn't called between output when the next scene is arrived
  // at via go-to).
  UserInterface.prototype.beginOutput = function() {};
  UserInterface.prototype.endOutput = function() {};
  UserInterface.prototype.newPage = function() {};
  UserInterface.prototype.setStyle = function(style) {};
  UserInterface.prototype.signal = function(data) {};
  UserInterface.prototype.setBg = function(img) {};
  UserInterface.prototype.setSprites = function(data) {};
  UserInterface.prototype.setSpriteStyle = function(loc, style) {};
  UserInterface.prototype.audio = function(audio) {};
  // Not part of the UI, but allows us to simply subclass.
  UserInterface.makeParentOf = function(OtherConstructor) {
    OtherConstructor.prototype = new UserInterface();
    OtherConstructor.constructor = OtherConstructor;
  };

  // ------------------------------------------------------------------------

  // An engine is given a user interface, the game and the current
  // game state (can be omitted). It is responsible for the logic of
  // the game.
  var DendryEngine = function(ui, game) {
    this.ui = ui;
    this.game = game;
  };

  DendryEngine.prototype.displayGameOver = function() {
    this.ui.displayGameOver();
    return this;
  };

  DendryEngine.prototype.displayChoices = function() {
    // TODO: dendrynexus - if the current scene is a hand, display the decks, hand, and pinned cards.
    var choices = this.getCurrentChoices();
    assert(choices);
    var scene = this.getCurrentScene();
    if (scene.isHand) {
      // separate choices into decks and pinned cards
      var decks = [];
      var pinnedCards = [];
      for (var c of choices) {
        var choiceScene = this.game.scenes[c.id];
        if (choiceScene.isDeck) {
          // if the deck has
          if (!this._drawFromDeck(c.id)) {
            c.canChoose = false;
            c.subtitle = c.unavailableSubtitle || "No cards available from deck.";
          } else {
            c.canChoose = true;
          }
          c.isDeck = true;
          c.image = choiceScene.cardImage;
          decks.push(c);
        } else if (choiceScene.isPinnedCard) {
          c.isDeck = false;
          c.image = choiceScene.cardImage;
          pinnedCards.push(c);
        }
      }
      if (!this.state.currentHands[this.state.sceneId]) {
        this.state.currentHands[this.state.sceneId] = [];
      }
      var currentHand = this.state.currentHands[this.state.sceneId];
      // TODO: check the viewIf/chooseIf conditions for all cards in the current hand, and filter them if they no longer work...
      var handIds = {};
      for (var card of currentHand) {
        handIds[card.id] = card;
      }
      handIds = this.__filterViewable(handIds);
      for (var i = 0; i < currentHand.length; i++) {
        while (currentHand[i] && !handIds[currentHand[i].id]) {
          currentHand.splice(i, 1);
        }
      }
      if (decks.length > 0) {
          this.ui.displayDecks(decks);
      }
      if (scene.maxCards > 0) {
          this.ui.displayHand(currentHand, scene.maxCards);
      }
      this.ui.displayPinnedCards(pinnedCards);
    } else {
      if (this.state.enableTranscript) {
        this.transcript.push(choices);
      }
      this.ui.displayChoices(choices);
    }
    return this;
  };

  DendryEngine.prototype.displaySceneContent = function(restorePage) {
    var scene = this.getCurrentScene();
    assert(scene);
    // TODO: displaying images
    var faceImage = null;
    if (scene.faceImage) {
      faceImage = scene.faceImage;
    }
    var sceneSignal = scene.signal || this.game.sceneSignal;
    if (sceneSignal !== undefined) {
      this.ui.signal({signal:sceneSignal,
                      event:'scene-display',
                      id:this.state.sceneId});
    }
    if (restorePage) {
      this.ui.newPage();
      this.ui.displayContent(this.state.tempCurrentContent, faceImage);
      this.state.currentContent = this.state.tempCurrentContent.slice();
    } else if (scene.newPage) {
      this.ui.newPage();
      this.state.currentContent = [];
    }
    this.ui.setStyle(scene.style);
    this.ui.removeChoices();

    if (scene.content !== undefined && !restorePage) {
      var displayContent = this._makeDisplayContent(scene.content, true);
      if (this.state.enableTranscript) {
        this.transcript = this.transcript.concat(displayContent);
      }
      this.state.currentContent = this.state.currentContent.concat(displayContent);
      this.ui.displayContent(displayContent, faceImage);
    }
    this._runActions(scene.onDisplay);

    return this;
  };

  DendryEngine.prototype.choose = function(choiceIndex) {
    var choices = this.choiceCache;

    // Check for valid choice.
    assert(choices);
    if (choices.length <= choiceIndex) {
      throw new Error('No choice at index ' + choiceIndex + ', only ' +
                      choices.length + ' choices are available.');
    }

    // Commit the choice.
    var choice = choices[choiceIndex];
    if (!choice.canChoose) {
      throw new Error('Attempted to choose index ' + choiceIndex + ', but ' +
                      'that choice is unavailable.');
    }

    var id = choice.id;
    if (this.state.enableTranscript) {
      this.transcript.push('> ' + choice.title);
    }

    delete this.choiceCache;
    this.goToScene(id);

    return this;
  };

  DendryEngine.prototype.chooseSceneId = function(sceneId) {
    delete this.choiceCache;
    this.goToScene(id);

    return this;
  };

  // TODO: dendrynexus - draw card
  DendryEngine.prototype.drawCard = function(deckId) {
    var currentSceneId = this.state.sceneId;
    var scene = this.getCurrentScene();
    assert(scene);
    
    var currentHand = this.state.currentHands[currentSceneId];
    // return a message saying that there are too many cards
    if (scene.maxCards <= currentHand.length) {
      return {id: null, title: 'no_space_in_hand'};
    }
    // get an available card from deckId
    // card is {id: id, title: title}
    var card = this._drawFromDeck(deckId);
    // distinguish between the "no space left in hand" and "no card in deck" situations?
    if (!card) {
      return {id: null, title: 'no_card_in_deck'};
    }
    this.state.lastDrawnCard = card;
    var image = this.game.scenes[card.id].cardImage;
    card.image = image;
    this.state.currentHands[currentSceneId].push(card);

    // display the hand
    this.ui.displayHand(this.state.currentHands[currentSceneId], scene.maxCards);
    return card;
  };


  // dendrynexus - play a card (remove it from the current hand)
  // should this be the code for pinned cards as well?
  DendryEngine.prototype.playCard = function(cardId) {
    var currentSceneId = this.state.sceneId;
    var currentHand = this.state.currentHands[currentSceneId];
    // remove card from hand
    for (var i = 0; i < currentHand.length; i++) {
      if (currentHand[i].id == cardId) {
        currentHand.splice(i, 1);
        break;
      }
    }
    this.state.lastPlayedCard = this.game.scenes[cardId];
    delete this.choiceCache;
    this.goToScene(cardId);
  };

  DendryEngine.prototype.playPinnedCard = function(cardId) {
    delete this.choiceCache;
    this.goToScene(cardId);
  };

  DendryEngine.prototype.goToScene = function(id) {
    this.state.sceneIdsSinceGoTo = [];
    this.ui.beginOutput();
    this.__changeScene(id);
    this.ui.endOutput();
  };

  DendryEngine.prototype.beginGame = function(rndSeeds) {
    this.random = rndSeeds ? Random.fromSeeds(rndSeeds) : Random.fromUnique();
    this.state = {
      sceneId: null,
      sceneIdsSinceGoTo: [],
      rootSceneId: this.game.rootScene || this.game.firstScene || 'root',
      gameOver: false,
      visits: {},
      qualities: {},
      currentRandomState: null,
      currentContent: [],
      // tempCurrentContent is used for when the
      // player visits the stats or settings pages in order to remember
      // where the previous page was?
      tempCurrentContent: [],
      // prevSpecialSceneId is only set when visiting scene tagged with
      // isSpecial = true, and is the scene before the special scene.
      prevSpecialSceneId: null,
      prevSceneId: null,
      // every time a top-level scene changes,
      // this record the last-visited qualified id within that scene.
      prevTopSceneId: null,
      // jumpScene is defined within a scene file, indicating the scene that
      // @jumpScene will go to. Basically it's used to make subroutines.
      jumpSceneId: null,
      // achievements is a dict of all the current achievements.
      // persist achievements in the browser through localstorage?
      achievements: {},
      // current background image
      bg: null,
      // sceneStack is used for goSub
      sceneStack: [],
      // true if just popped out of a returnScene
      justReturned: false,
      // just returned from a goSubStart
      justReturnedStart: false,
      // just returned from a goSubEnd
      justReturnedEnd: false,
      // sprites is a mapping from location to file
      sprites: {},
      // dendrynexus stuff
      // mapping from sceneId to list of sceneIds - indicating the current hand in each of those scenes.
      currentHands: {},
      // last drawn card
      lastDrawnCard: null,
      lastPlayedCard: null,

      enableTranscript: false,
      // whether or not to disable saves
      disableSaves: false,
    };
    // TODO: transcript
    this.transcript = [];

    this._setUpQualities();
    this._loadAchievements();

    this.ui.beginGame();

    var id = this.game.firstScene || this.state.rootSceneId;
    this.goToScene(id);

    return this;
  };

  DendryEngine.prototype._loadAchievements = function() {
    if (typeof localStorage !== 'undefined') {
        if (localStorage[this.game.title + '_achievements']) {
            this.state.achievements = JSON.parse(
                localStorage[this.game.title + '_achievements']);
            // add a special quality named 'achievement_'
            for (var achievement in this.state.achievements) {
                this.state.qualities['achievement_' + achievement] = 1;
            }
        }
    }
  };

  DendryEngine.prototype.gameOver = function() {
    this.state.gameOver = true;
    this.displayGameOver();
    return this;
  };

  DendryEngine.prototype.isGameOver = function() {
    return this.state.gameOver;
  };

  DendryEngine.prototype.getCurrentScene = function() {
    var scene = this.game.scenes[this.state.sceneId];
    assert(scene !== undefined);
    return scene;
  };

  // Returns the choices for the current scene. Choices are objects
  // with an id and a title property, not to be confused with the
  // option objects in a scene (though options are used to generate
  // choices). Choices are compiled from the options belonging to the
  // current scene.
  DendryEngine.prototype.getCurrentChoices = function() {
    return this.choiceCache;
  };

  // Sets the current state of the engine from an exportable state.
  DendryEngine.prototype.setState = function(state) {
    // Set the state.
    this.state = state;
    this._setUpQualities();
    this.random = Random.fromState(this.state.currentRandomState);
    this._loadAchievements();

    // Display the current state.
    if (this.isGameOver()) {
      this.displayGameOver();
    } else {
      var scene = this.getCurrentScene();
      this.choiceCache = this._compileChoices(scene);
      this.ui.newPage();
      this.ui.removeChoices();
      this.ui.displayContent(this.state.currentContent);
      this.displayChoices();
      this.ui.setSprites(this.state.sprites);
      this.ui.setBg(this.state.bg);
    }
    return this;
  };

  // Returns a data structure for exporting without any accessors or
  // complex classes.
  DendryEngine.prototype.getExportableState = function() {
    // Because we only have complex state in the qualities (they have
    // accessors), and because we save with JSON (which calls
    // accessors correctly), we don't have to worry about giving the
    // actual state. Note that, if you want to keep this object, however,
    // you want to clone it somehow (turning it to and from json,
    // for example), otherwise it will change as the engine updates.
    return this.state;
  };

  // ------------------------------------------------------------------------

  DendryEngine.prototype._getQDisplay = function(value, qDisplayId) {
    switch (qDisplayId) {
    case 'cardinal': case 'number':
      return getCardinalNumber(value);
    case 'ordinal':
      return getOrdinalNumber(value);
    case 'fudge':
      return getFudgeDisplay(value);
    default:
      var qdisplay = this.game.qdisplays[qDisplayId];
      assert(qdisplay !== undefined);
      return getUserQDisplay(value, qdisplay);
    }
  };

  DendryEngine.prototype._evaluateStateDependencies = function(defs) {
    var result = [];

    for (var i = 0; i < defs.length; ++i) {
      var value;
      var def = defs[i];
      var fn = def.fn;
      switch (def.type) {
      case 'insert':
        value = this._runExpression(fn);
        if (def.qdisplay) {
          value = this._getQDisplay(value, def.qdisplay);
        } else {
          value = value.toString();
        }
        break;

      default:
        assert(def.type === 'predicate');
        value = this._runPredicate(fn);
        break;
      }

      // Recurse the resolution into the resulting value, if needed.
      if (value.stateDependencies !== undefined) {
        // We have to resolve the nested state dependencies.
        value = this._makeDisplayContent(value, false);
      }
      result.push(value);
    }
    return result;
  };

  DendryEngine.prototype._mergeStateEvalsInArray = function(array, evals) {
    if (!Array.isArray(array)) {
      array = [array];
    }
    var result = [];
    for (var i = 0; i < array.length; ++i) {
      result = result.concat(this._mergeStateEvals(array[i], evals));
    }
    return result;
  };

  DendryEngine.prototype._mergeStateEvals = function(content, evals) {
    if (content.type === undefined) {
      return [content];
    }

    var result;
    switch (content.type) {
    case 'conditional':
      if (evals[content.predicate]) {
        result = this._mergeStateEvalsInArray(content.content, evals);
      } else {
        result = [];
      }
      break;
    case 'insert':
      result = evals[content.insert];
      break;
    default:
      var newE = {type:content.type};
      newE.content = this._mergeStateEvalsInArray(content.content, evals);
      result = [newE];
      break;
    }
    return result;
  };

  DendryEngine.prototype._makeDisplayContent = function(content, useParas) {
    // Raw content can just be returned.
    if (content.content === undefined) {
      if (Array.isArray(content)) {
        return content;
      } else if (useParas) {
        return [{type:'paragraph', content:content}];
      } else {
        return [content];
      }
    } else if (content.stateDependencies === undefined &&
               content.type !== undefined) {
      return [content];
    }

    // Merge in dependencies if we have them
    var stateDepDefs = content.stateDependencies;
    var displayContent = content.content;
    if (stateDepDefs && stateDepDefs.length > 0) {
      var evals = this._evaluateStateDependencies(stateDepDefs);
      if (!Array.isArray(displayContent)) {
        displayContent = [displayContent];
      }
      displayContent = this._mergeStateEvalsInArray(
        displayContent, evals
      );
    }
    return displayContent;
  };

  DendryEngine.prototype._setUpQualities = function() {
    var _Q = this._qualitiesAccessorsPrivate = {};
    var Q = this.state.qualities;
    var that = this;
    objEach(this.game.qualities, function(id, quality) {
      var min = quality.min;
      var max = quality.max;
      var signal = quality.signal || that.game.qualitySignal;
      var predicate = quality.isValid;
      var needsAccessors = (
        min !== undefined ||
        max !== undefined ||
        signal !== undefined ||
        predicate !== undefined
      );
      if (needsAccessors) {
        if (Q[id] !== undefined) {
          _Q[id] = Q[id];
        }
        Q.__defineGetter__(id, function() {
          return _Q[id];
        });
        Q.__defineSetter__(id, function(value) {
          if (min !== undefined && value < min) {
            value = min;
          }
          if (max !== undefined && value > max) {
            value = max;
          }
          var was = _Q[id];
          _Q[id] = value;

          // Check if the new value is not allowed.
          if (!that._runPredicate(predicate, true)) {
            // Reverse the change.
            _Q[id] = value = was;
          }

          // Signal after the change is made.
          if (signal !== undefined && value !== was) {
            var signalObj = {
              signal: signal,
              event: 'quality-change',
              id: id,
              now: value
            };
            if (was !== undefined) {
              signalObj.was = was;
            }
            that.ui.signal(signalObj);
          }
        });
      }
      if (quality.initial !== undefined && Q[id] === undefined) {
        Q[id] = quality.initial;
      }
    });
  };

  DendryEngine.prototype._runActions = function(actions) {
    runActions(actions, this, this.state);
  };

  DendryEngine.prototype._runPredicate = function(predicate, default_) {
    return runPredicate(predicate, default_, this, this.state);
  };

  DendryEngine.prototype._runExpression = function(expression, default_) {
    return runExpression(expression, default_, this, this.state);
  };

  DendryEngine.prototype.__changeScene = function(id) {
    if (this.state.justReturned) {
        this.state.justReturned = false;
    }
    var scene = null;
    var restorePage = false;
    // if id is 'prevScene', go to the previous scene.
    if (id == 'prevScene') {
      if (this.prevSceneId === null) {
        // this really only comes up on the very first scene of the game.
      }
      scene = this.game.scenes[this.state.prevSceneId];
      id = this.state.prevSceneId;
      assert(scene);
    } else if (id == 'prevTopScene') {
      scene = this.game.scenes[this.state.prevTopSceneId];
      id = this.state.prevTopSceneId;
      assert(scene);
    } else if (id == 'jumpScene') {
      scene = this.game.scenes[this.state.jumpSceneId];
      id = this.state.jumpSceneId;
      assert(scene);
    } else if (id === 'backSpecialScene') {
      scene = this.game.scenes[this.state.prevSpecialSceneId];
      id = this.state.prevSpecialSceneId;
      restorePage = true;
      assert(scene);
      // if prevSpecialSceneId is null, this indicates that
      // we're not within a specialScene, and we can set a jump point.
      this.state.prevSpecialSceneId = null;
    } else {
      scene = this.game.scenes[id];
      assert(scene);
    }


    // Leave previous scene.
    var fromId = this.state.sceneId;
    var lastScene = this.game.scenes[fromId];
    if (!!fromId) {
      this.state.prevSceneId = fromId;
      if (lastScene.newPage) {
        this.state.prevTopSceneId = fromId;
      }
      if (scene.isSpecial && this.state.prevSpecialSceneId === null) {
        this.state.tempCurrentContent = this.state.currentContent.slice();
        this.state.prevSpecialSceneId = fromId;
      }
      var from = this.getCurrentScene();
      this._runActions(from.onDeparture);
      var fromSignal = from.signal || this.game.sceneSignal;
      if (fromSignal !== undefined) {
        this.ui.signal({signal:fromSignal,
                        event:'scene-departure',
                        id:this.state.sceneId,
                        'to':id});
      }
    }

    // Arrive at current scene.
    this.state.sceneId = id;
    this.state.sceneIdsSinceGoTo.push(id);

    if (scene.setRoot) {
      this.state.rootSceneId = id;
    }
    if (scene.setJump) {
      this.state.jumpSceneId = scene.setJump;
    }

    if (scene.countVisitsMax !== undefined) {
      if (this.state.visits[id] === undefined) {
        this.state.visits[id] = 1;
      } else if (this.state.visits[id] < scene.countVisitsMax) {
        this.state.visits[id]++;
      }
    }

    if (!restorePage && !this.state.justReturned) {
        // If we go back from a special scene (e.g. the stats page),
        // we probably don't want to run the scene actions again.
        this._runActions(scene.onArrival);
        // TODO: After running onArrival, we should run call if call has
        if (scene.call) {
          var callScene = this.game.scenes[scene.call];
          this._runActions(callScene.onArrival);
        }
    }
    var sceneSignal = scene.signal || this.game.sceneSignal;
    if (sceneSignal !== undefined) {
      var signal = {
        signal: sceneSignal,
        event: 'scene-arrival',
        id: id
      };
      if (!!fromId) {
        signal.from = fromId;
      }
      this.ui.signal(signal);
    }

    // We're done with any code that might generate random numbers
    // (except go-to, which will recurse into this method anyway), so we
    // can store the seed which can be used to replay the behavior
    // from here.
    this.state.currentRandomState = this.random.getState();
    //if (!this.state.justReturned) {
        // if the state has just returned from a goSub, we don't display
        // the content?
        // TODO: i'm not sure what the best logic for this is...
        // Maybe the text pre-gosub should be displayed only after the goSub?
    this.displaySceneContent(restorePage);
    //}
    // display background
    if (scene.setBg) {
        this.state.bg = scene.setBg;
        this.ui.setBg(scene.setBg);
    }
    if (scene.setSprites) {
        this.state.sprites = scene.setSprites;
        this.ui.setSprites(scene.setSprites);
    }
    if (scene.audio) {
        this.ui.audio(scene.audio);
    }
    // TODO: there has got to be a better way of doing this.
    if (scene.setTopLeftStyle) {
        this.ui.setSpriteStyle('topLeft', scene.setTopLeftStyle);
    }
    if (scene.setTopRightStyle) {
        this.ui.setSpriteStyle('topRight', scene.setTopRightStyle);
    }
    if (scene.setBottomLeftStyle) {
        this.ui.setSpriteStyle('bottomLeft', scene.setBottomLeftStyle);
    }
    if (scene.setBottomRightStyle) {
        this.ui.setSpriteStyle('bottomRight', scene.setBottomRightStyle);
    }
    // update achievement
    if (scene.achievement) {
        this.achieve(scene.achievement);

    }

    // Check if we have any reason to leave the scene, or end the game.
    var done = false;
    if (scene.gameOver === true) {
      done = true;
      this.gameOver();
    } else if (scene.goSubEnd && !this.state.justReturnedEnd) {
      // goSub
      var validSubs = [];
      for (var s1 = 0; s1 < scene.goSub.length; ++s1) {
        var sub = scene.goSub[s1];
        if (sub.predicate === undefined ||
            this._runPredicate(sub.predicate)) {
          validSubs.push(sub.id);
        }
      }
    } else if (scene.goTo) {
      // Find all valid gotos.
      var validGoToIds = [];
      for (var i = 0; i < scene.goTo.length; ++i) {
        var goTo = scene.goTo[i];
        if (goTo.predicate === undefined ||
            this._runPredicate(goTo.predicate)) {
          validGoToIds.push(goTo.id);
        }
      }
      if (validGoToIds.length === 1) {
        done = true;
        this.__changeScene(validGoToIds[0]);
      } else if (validGoToIds.length > 1) {
        var randomNumber = this.random.uint32();
        var choice = randomNumber % validGoToIds.length;
        var chosenGoToId = validGoToIds[choice];
        done = true;
        this.__changeScene(chosenGoToId);
      }
    } else if (scene.goToRef) {
      // do some gotoref
      var validRefs = [];
      for (var s = 0; s < scene.goToRef.length; ++s) {
        var ref = scene.goToRef[s];
        if (ref.predicate === undefined ||
            this._runPredicate(ref.predicate)) {
          validRefs.push(ref.id);
        }
      }
      if (validRefs.length === 1) {
        done = true;
        this.__changeScene(this.state.qualities[validRefs[0]]);
      } else if (validRefs.length > 1) {
        var c = this.random.uint32() % validRefs.length;
        var chosenRef = validRefs[c];
        done = true;
        this.__changeScene(this.state.qualities[chosenRef]);
      }
    }

    // dendrynexus: calculate checks
    // WHAT IF scenes have gotos and checks. huh. don't do that. Let's just say that is undefined behavior.
    var hasCheck = false;
    var successProb, isSuccess;
    if (scene.checkQuality && scene.broadDifficulty && scene.checkSuccessGoTo && scene.checkFailureGoTo) {
      var scaler = 0.6;
      if (scene.difficultyScaler) {
        scaler = scene.difficultyScaler;
      }
      successProb = calculateBroadDifficulty(this.state.qualities[scene.checkQuality] || 0, scene.broadDifficulty, scaler);
      hasCheck = true;
    } else if (scene.checkQuality && scene.narrowDifficulty && scene.checkSuccessGoTo && scene.checkFailureGoTo) {
      var increment = 0.1;
      if (scene.difficultyIncrement) {
        increment = scene.difficultyIncrement;
      }
      successProb = calculateNarrowDifficulty(this.state.qualities[scene.checkQuality] || 0, scene.narrowDifficulty, increment);
      hasCheck = true;
    }
    if (hasCheck) {
      isSuccess = rollDifficulty(successProb, this.random); 
      // logic for changing the scene on success/failure of the check
      done = true;
      if (isSuccess) {
        this.__changeScene(scene.checkSuccessGoTo);
      } else {
        this.__changeScene(scene.checkFailureGoTo);
      }
    }

    // If we've not ended, nor found a valid go-to, then we try choices.
    if (!done) {
      this.choiceCache = this._compileChoices(scene);
      if (this.choiceCache === null) {
        // Explicitly disallowing game over keeps us stuck here.
        if (scene.gameOver !== false) {
          this.gameOver();
        }
      } else {
        this.displayChoices();
      }
    }
  };

  DendryEngine.prototype.achieve = function(achievementName) {
    this.state.achievements[achievementName] = 1;
    // add a special quality named 'achievement_'
    this.state.qualities['achievement_' + achievementName] = 1;
    // add a new quality indicating that the achievement has been done for the current game
    this.state.qualities['game_achievement_' + achievementName] = 1;
    // set localStorage for achievement
    if (typeof localStorage !== 'undefined') {
      localStorage[this.game.title + '_achievements'] = JSON.stringify(this.state.achievements);
    }
    if (window && window.onAchieve) {
        window.onAchieve(achievementName);
    }
  };

  DendryEngine.prototype.__getChoiceSelectionData = function(idToInfoMap) {
    var result = [];
    for (var id in idToInfoMap) {
      var optionScene = this.game.scenes[id];
      var optionInfo = idToInfoMap[id];

      optionInfo.order = optionInfo.order || optionScene.order || 0;
      optionInfo.priority = optionInfo.priority || optionScene.priority || 1;
      // Because 'null' is a valid frequency, we can't use || to do this.
      if (optionInfo.frequency === undefined) {
        optionInfo.frequency = optionScene.frequency;
        if (optionInfo.frequency === undefined) {
          optionInfo.frequency = 100;
        }
      }
      // get variable frequencies
      if (optionScene.frequencyVar) {
        optionInfo.frequency = this.runExpression(optionScene.frequencyVar);
      }
      optionInfo.selectionPriority = 0; // Used by __filterByPriority

      result.push(optionInfo);
    }
    return result;
  };

  DendryEngine.prototype.__filterViewable = function(idToInfoMap) {
    var result = {};
    for (var id in idToInfoMap) {
      var thisScene = this.game.scenes[id];

      // This id fails if it is past its max visits.
      var maxVisits = thisScene.maxVisits;
      if (maxVisits !== undefined) {
        var visits = this.state.visits[id] || 0;
        if (visits >= maxVisits) {
          continue;
        }
      }
      if (thisScene.maxVisitsVar !== undefined) {
        maxVisits = this._runExpression(thisScene.maxVisitsVar);
        var v2 = this.state.visits[id] || 0;
        if (v2 >= maxVisits) {
          continue;
        }
      }

      // Fiter out scenes that can't be viewed.
      var canView = this._runPredicate(thisScene.viewIf, true);
      if (!canView) {
        continue;
      }

      // It passes otherwise.
      result[id] = idToInfoMap[id];
    }
    return result;
  };

  DendryEngine.prototype.__getChoiceIdsFromOptions = function(options) {
    var that = this;

    var choices = {};
    each(options, function(option) {
      // Filter out options that can't be viewed.
      if (!that._runPredicate(option.viewIf, true)) {
        return;
      }

      if (option.id.substr(0, 1) === '@') {
        // This is an id, use it.
        var trimmedId = option.id.substring(1);
        var choice = merge(option, {id:trimmedId});
        choices[trimmedId] = choice;
      } else {
        assert(option.id.substr(0, 1) === '#');
        // This is a tag, add all matching ids.
        var ids = that.game.tagLookup[option.id.substring(1)];
        objEach(ids, function(id) {
          if (choices[id] === undefined) {
            choices[id] = merge(option, {id:id});
          }
        });
      }
    });
    return choices;
  };

  // Code based on Undum (MIT License). See CREDITS.
  DendryEngine.prototype.__filterByPriority = function(choices,
                                                       minChoices,
                                                       maxChoices) {
    assert(minChoices === null ||
           maxChoices === null ||
           maxChoices >= minChoices);
    var that = this;

    var committed = [];
    var candidates = [];
    var choice;

    // Work in descending priority order.
    choices.sort(function(a, b) {
      return b.priority - a.priority;
    });

    // First phase: we make sure we have at least our minimum number
    // of choices, and that we consider the minimum possible number of
    // priorities to reach that minimum.
    var lastPriority;
    for (var i = 0; i < choices.length; ++i) {
      choice = choices[i];
      if (choice.priority !== lastPriority) {
        if (lastPriority !== undefined) {
          // Priority has decreased, use the candidates if there are enough.
          if (minChoices === null || i >= minChoices) {
            break;
          }
        }

        // We're going on, so commit our current candidates.
        committed.push.apply(committed, candidates);
        candidates = [];
        lastPriority = choice.priority;
      }
      candidates.push(choice);
    }

    // Second phase: we commit as many candidates as we can without
    // exceeding our maximum.
    // TODO: think about tag choices vs builtin choices
    var committedChoices = committed.length;
    var totalChoices = committedChoices + candidates.length;
    if (maxChoices === null || maxChoices >= totalChoices) {
      // We can use all the candidates without exceeding our maximum.
      committed.push.apply(committed, candidates);
    } else {
      // Take a subset of the candidates, using their relative frequency.
      each(candidates, function(choice) {
        if (choice.frequency === null) {
          choice.selectionPriority = 0; // Always choose.
        } else {
          choice.selectionPriority = that.random.random() / choice.frequency;
        }
      });
      candidates.sort(function(a, b) {
        return a.selectionPriority - b.selectionPriority;
      });
      var extraChoices = maxChoices - committedChoices;
      var chosen = candidates.slice(0, extraChoices);
      committed.push.apply(committed, chosen);
    }

    return committed;
  };

  DendryEngine.prototype.__getChoiceDisplayData = function(choicesSelected) {
    var choiceOutput = [];
    var numChoosable = 0;

    for (var i = 0; i < choicesSelected.length; ++i) {
      var choice = choicesSelected[i];
      var choiceScene = this.game.scenes[choice.id];

      // Figure out if this choice can be chosen.
      var canChoose = true;
      if (choice.chooseIf) {
        canChoose = this._runPredicate(choice.chooseIf, true);
      }
      if (canChoose && choiceScene.chooseIf) {
        canChoose = this._runPredicate(choiceScene.chooseIf, true);
      }

      var title = choice.title || choiceScene.title;
      assert(title);

      var subtitle = null;
      if (!canChoose) {
        subtitle = choice.unavailableSubtitle ||
                   choiceScene.unavailableSubtitle;
      }
      if (!subtitle) {
        subtitle = choice.subtitle || choiceScene.subtitle;
      }


      var finalChoice = {
        id:choice.id,
        canChoose:canChoose,
        title:this._makeDisplayContent(title, false)
      };
      if (subtitle) {
        finalChoice.subtitle = this._makeDisplayContent(subtitle, false);
      }
      // dendrynexus - add success/failure probabilities, and challenges.
      var successProb;
      if (choiceScene.checkQuality && choiceScene.broadDifficulty && choiceScene.checkSuccessGoTo && choiceScene.checkFailureGoTo) {
        var scaler = 0.6;
        if (choiceScene.difficultyScaler) {
          scaler = choiceScene.difficultyScaler;
        }
        successProb = calculateBroadDifficulty(this.state.qualities[choiceScene.checkQuality] || 0, choiceScene.broadDifficulty, scaler);
        finalChoice.checkQuality = choiceScene.checkQuality;
        finalChoice.successProb = successProb;
        finalChoice.difficulty = displayDifficulty(successProb);
      } else if (choiceScene.checkQuality && choiceScene.narrowDifficulty && choiceScene.checkSuccessGoTo && choiceScene.checkFailureGoTo) {
        var increment = 0.1;
        if (choiceScene.difficultyIncrement) {
          increment = choiceScene.difficultyIncrement;
        }
        successProb = calculateNarrowDifficulty(this.state.qualities[choiceScene.checkQuality] || 0, choiceScene.narrowDifficulty, increment);
        finalChoice.checkQuality = choiceScene.checkQuality;
        finalChoice.successProb = successProb;
        finalChoice.difficulty = displayDifficulty(successProb);
      }

      choiceOutput.push(finalChoice);
      if (canChoose) {
        ++numChoosable;
      }
    }

    return {choices:choiceOutput, numChoosable:numChoosable};
  };

  DendryEngine.prototype._compileChoices = function(scene) {
    assert(scene);

    var options = scene.options;
    var choiceOutput = [];
    var numChoosable = 0;
    if (options !== undefined) {

      var choiceIds = this.__getChoiceIdsFromOptions(options);
      choiceIds = this.__filterViewable(choiceIds);

      var validChoiceData = this.__getChoiceSelectionData(choiceIds);
      var minChoices = scene.minChoices || null;
      var maxChoices = scene.maxChoices || null;
      validChoiceData = this.__filterByPriority(validChoiceData,
                                                minChoices, maxChoices);

      // Sort the result into display order.
      validChoiceData.sort(function(a, b) {
        return a.order - b.order;
      });

      // Now we've chosen our selection, get the final displayable data.
      var data = this.__getChoiceDisplayData(validChoiceData);
      choiceOutput = data.choices;
      numChoosable = data.numChoosable;
    }

    if (numChoosable === 0) {
      // We have no choosable options, so add the default option (NB:
      // this may take us over the max-choices limit).
      var root = this.state.rootSceneId;
      if (root !== this.state.sceneId) {
        var rootSceneChoose = this.game.scenes[root].chooseIf;
        if (!rootSceneChoose || this._runPredicate(rootSceneChoose, true)) {
          choiceOutput.push({id:root, title:'Continue...', canChoose:true});
          ++numChoosable;
        }
      }
    }
    if (numChoosable > 0) {
      return choiceOutput;
    } else {
      return null;
    }
  };


  // dendrynexus - this returns a single available card from the given deck, formatted as an object of the type {id: id, title: title}
  DendryEngine.prototype._drawFromDeck = function(deckId) {
    var scene = this.game.scenes[deckId];
    var viewableScenes = this._compileChoices(scene);
    if (!viewableScenes) {
      return null;
    }
    var choosableScenes = [];
    var currentHand = this.state.currentHands[this.state.sceneId];
    if (!currentHand) {
        currentHand = [];
    }
    currentHand = currentHand.map((x)=>x.id);
    for (var x of viewableScenes) {
      var choiceScene = this.game.scenes[x.id];
      // filter for whether the card is in the hand
      if (x.canChoose && choiceScene.isCard &&  currentHand.indexOf(x.id) < 0) {
        choosableScenes.push(x);
      }
    }
    if (!choosableScenes) {
      return null;
    }
    var randomNumber = this.random.uint32();
    var choice = randomNumber % choosableScenes.length;
    // this.state.currentRandomState = this.random.getState();
    return choosableScenes[choice];
  };

  // ------------------------------------------------------------------------

  // Marsaglia, George (July 2003). 'Xorshift RNGs'.
  // Journal of Statistical Software 8 (14).
  var Random = function(v, w, x, y, z) {
    this.getState = function() {
      return [v, w, x, y, z];
    };
    var uint32Multiply = function(a, b) {
      var aHigh = (a >> 16) & 0xffff;
      var aLow = a & 0xffff;
      var bHigh = (b >> 16) & 0xffff;
      var bLow = b & 0xffff;
      var prodHigh = ((aHigh * bLow) + (aLow * bHigh)) & 0xffff;
      return ((prodHigh << 16) >>> 0) + (aLow * bLow);
    };
    this.uint32 = function() {
      var t = (x ^ (x >>> 7)) >>> 0;
      x = y;
      y = z;
      z = w;
      w = v;
      v = (v ^ (v << 6)) ^ (t ^ (t << 13)) >>> 0;
      return uint32Multiply((y + y + 1), v) >>> 0;
    };
    this.random = function() {
      return this.uint32() * 2.3283064365386963e-10;
    };
  };

  var __next = 1;
  Random.fromUnique = function() {
    var seed = new Date().getTime();
    return Random.fromSeeds([seed, __next++]);
  };

  Random.fromTime = function() {
    return Random.fromSeeds([new Date().getTime()]);
  };

  Random.fromSeeds = function(seeds) {
    var v = 886756453;
    var w = 88675123;
    var x = 123456789;
    var y = 362436069;
    var z = 521288629;

    // The seed hashing function is based on Mash 0.9 (MIT License).
    // See CREDITS.
    var hashSeed = function(data) {
      data = data.toString();
      var n = 0xefc8249d;
      for (var i = 0; i < data.length; i++) {
        n += data.charCodeAt(i);
        var h = 0.02519603282416938 * n;
        n = h >>> 0;
        h -= n;
        h *= n;
        n = h >>> 0;
        h -= n;
        n += h * 0x100000000;
      }
      return (n >>> 0) * 2.3283064365386963e-10;
    };

    for (var i = 0; i < seeds.length; i++) {
      var hashedSeed = hashSeed(seeds[i]) * 0x100000000;
      v ^= hashedSeed;
      w ^= hashedSeed;
      x ^= hashedSeed;
      y ^= hashedSeed;
      z ^= hashedSeed;
    }
    return new Random(v, w, x, y, z);
  };

  Random.fromState = function(state) {
    return new Random(state[0], state[1], state[2], state[3], state[4]);
  };

  // ------------------------------------------------------------------------

  module.exports = {
    makeFunctionFromSource: makeFunctionFromSource,
    runActions: runActions,
    runPredicate: runPredicate,
    runExpression: runExpression,
    convertJSONToGame: convertJSONToGame,
    simpleContent: simpleContent,

    getCardinalNumber: getCardinalNumber,
    getOrdinalNumber: getOrdinalNumber,
    getUserQDisplay: getUserQDisplay,
    getFudgeDisplay: getFudgeDisplay,

    DendryEngine: DendryEngine,
    UserInterface: UserInterface,
    NullUserInterface: UserInterface,

    Random: Random
  };
}());

},{}],2:[function(require,module,exports){
/* dendry
 * http://github.com/idmillington/dendry
 *
 * MIT License
 */
/*jshint indent:2 */
(function($) {
  'use strict';

  var contentToHTML = require('./content/html');
  var engine = require('../engine');

  var BrowserUserInterface = function(game, $content) {
    this.game = game;
    this.$content = $content;
    this._registerEvents();

    this.dendryEngine = new engine.DendryEngine(this, game);
    // TODO: refactor how the settings work - move it all within a single object
    this.base_settings = {'disable_bg': false, 'animate':false, 'animate_bg': true, 'disable_audio': false, 'show_portraits': true, 'dark_mode': false, 'font_size': 1.1, 'volume': 1};
    // current settings...
    // font size is in ems - 1.1em
    this.current_settings = {'disable_bg': false, 'animate':false, 'animate_bg': true, 'disable_audio': false, 'show_portraits': true, 'dark_mode': false, 'font_size': 1.1, 'volume': 1};
    this.disable_bg = false;
    this.animate = false;
    this.animate_bg = true;
    this.disable_audio = false;
    // backgrounds and portraits are 100% optional, and most games will not use them.
    this.show_portraits = true;
    this.fade_time = 600;
    this.bg_fade_out_time = 200;
    this.bg_fade_in_time = 1000;
    this.sound_fade_time = 2000;
    this.volume = 1;
    this.font_size = 1.1;
    this.contentToHTML = contentToHTML;

    // sprites
    this.spriteLocs = {'topLeft': 1, 'topRight': 1, 'bottomLeft': 1, 'bottomRight': 1};
    // current HTMLAudioElement
    this.currentAudio = null;
    // current audio url
    this.currentAudioURL = '';
    this.audioQueue = [];
    // playlist is used for shuffling...
    this.audioPlaylist = [];
    this.audioVolume = 1;
    // flag for determining if we're on a new page, up until the first choice.
    this.onNewPage = false;

    // for saving
    this.save_prefix = game.title + '_' + game.author + '_save';
    this.max_slots = 8; // max save slots
    this.DateOptions = {hour: 'numeric',
                 minute: 'numeric',
                 second: 'numeric',
                 year: 'numeric', 
                 month: 'short', 
                 day: 'numeric' };
  };
  engine.UserInterface.makeParentOf(BrowserUserInterface);

  // ------------------------------------------------------------------------
  // Main API

  //load a game as a json file from a url, and then run the game...
  BrowserUserInterface.prototype.loadGame = function(url) {
      var that = this;
      if (!url.endsWith('.json')) { 
          if (url.endsWith('/')) { 
              url = url + 'game.json';
          } else { 
              url = url + '/game.json';
          } 
      } 
      fetch(url)
      .then(response => response.text())
      .then(json => { 
          game = engine.convertJSONToGame(json, function(err, game) {
              if (err) {
                throw err;
              }
              return game;
          });
          that.game = game;
          that.dendryEngine = new engine.DendryEngine(that, game);

          that.dendryEngine.beginGame();
      })
      .catch(err => console.log(err));
  };


  BrowserUserInterface.prototype.displayContent = function(paragraphs, faceImage) {
    var $html = $(contentToHTML.convert(paragraphs));
    // TODO: maybe face image visibility should be controlled by a different setting?
    var hasImage = false;
    if (faceImage && this.show_portraits) {
        hasImage = true;
        // convert faceImage into an html object
        console.log(faceImage);
        //var cardEl = $('<div>').addClass('face-figure');
        var cardEl = document.createElement('div');
        cardEl.className = "face-figure";
        //var $image = $('<img>').addClass('face-img').attr({src : faceImage});
        var image = new Image();
        image.className = "face-img";
        cardEl.appendChild(image);
        $html.splice(1, 0, cardEl);
        image.src = faceImage;
        /*
        if (!this.animate) {
            var that = this;
            image.onload = function() {
                that.$content.append($html);
                console.log('image loaded');
            };
            image.src = faceImage;
        }
        */
    }
    if (this.animate) {
        $html.fadeIn(this.fade_time);
        this.$content.append($html);
    } else {
        if (!hasImage) {
            this.$content.append($html);
        } else {
            this.$content.append($html);
        }
    }
    $html.focus();
    // allow user to add custom stuff on display content (for sidebar in this case)
    if (window && window.onDisplayContent) {
        window.onDisplayContent();
    }
  };

  BrowserUserInterface.prototype.displayGameOver = function() {
    var $p = $('<p>').text(this.getGameOverMsg()).addClass('game-over');
    if (this.animate) {
        $p.fadeIn(this.fade_time);
        this.$content.append($p);
    } else {
        this.$content.append($p);
    }
    $p.focus();
  };

  BrowserUserInterface.prototype.displayChoices = function(choices) {
    var $ul = $('<ul>').addClass('choices');
    for (var i = 0; i < choices.length; ++i) {
      var choice = choices[i];

      var title = contentToHTML.convertLine(choice.title);
      var subtitle = "";
      if (choice.subtitle !== undefined) {
        subtitle = contentToHTML.convertLine(choice.subtitle);
      }

      var $li = $('<li>');
      var $titleHolder = $li;
      if (choice.canChoose) {
        $titleHolder = $('<a>').attr({href: '#', 'data-choice': i});
        $li.html($titleHolder);
      } else {
        $titleHolder.addClass('unavailable');
      }
      $titleHolder.html(title);
      if (choice.checkQuality && choice.difficulty && choice.successProb !== undefined) {
        if (subtitle) {
          subtitle += '<br>';
        }
        subtitle += 'Check: ' + choice.checkQuality + '<br>';
        subtitle += 'Difficulty: ' + choice.difficulty + ' (' + Math.floor(choice.successProb*100) + '%)';
      }
      if (subtitle) {
        $li.append($('<div>').addClass('subtitle').html(subtitle));
      }

      $ul.append($li);
    }
    if (this.animate) {
        $ul.fadeIn(this.fade_time);
        this.$content.append($ul);
    }
    else {
        this.$content.append($ul);
    }
    $ul.focus();
    if (this.onNewPage) {
      this.onNewPage = false;
      if (window && window.onNewPage) {
        window.onNewPage();
      }
    }
  };

  BrowserUserInterface.prototype.newPage = function() {
    if (this.animate) {
        var $content = this.$content;
        this.$content.empty();
        this.$content.children().fadeOut(this.fade_time, function() {
        });
    } else {
        this.$content.empty();
    }
    this.onNewPage = true;

  };

  BrowserUserInterface.prototype.setStyle = function(style) {
    this.$content.removeClass();
    if (style !== undefined) {
      this.$content.addClass(style);
    }
  };

  BrowserUserInterface.prototype.removeChoices = function() {
    $('.choices', this.$content).remove();
    $('.hidden', this.$content).remove();
  };

  BrowserUserInterface.prototype.beginOutput = function() {
    $("#read-marker", this.$content).remove();
    this.$content.append($('<hr>').attr('id', 'read-marker'));
  };

  BrowserUserInterface.prototype.endOutput = function() {
    var $marker = $("#read-marker");
    if (this.animate) {
        if ($marker.length > 0) {
          $('html, body').animate({scrollTop: $marker.offset().top}, this.fade_time);
        } else {
          $('html, body').animate({scrollTop: 0}, this.fade_time);
        }
    }
  };

  BrowserUserInterface.prototype.signal = function(data) {
    // TODO: implement signals - signals contain signal, event, and id
    console.log(data);
    var signal = data.signal;
    var event = data.event; // scene-arrival, scene-display, scene-departure, quality-change
    var scene_id = data.id;
    // TODO: handle this in the game.js for each specific game
    if (window && window.handleSignal) {
        window.handleSignal(signal, event, scene_id);
    }
  };

  // dendrynexus displays
  // displays the hand.
  BrowserUserInterface.prototype.displayHand = function(hand, maxCards) {
    if (window && window.displayHand) {
      window.displayHand(hand, maxCards);
      return null;
    }
    var handDescription = 'Hand - click a card to play.';
    if (window.handDescription) {
      handDescription = window.handDescription;
    }
    if (this.dendryEngine.state.qualities.handDescription) {
      handDescription = this.dendryEngine.state.qualities.handDescription;
    }
    var $handEl = $('.hand');
    var hasOldHand = false;
    if ($handEl.length == 0) {
        $handEl = $('<ul>').addClass('hand');
        this.$content.append($('<hr>'));
        this.$content.append($('<p>').addClass('hand-description').text(handDescription));
    } else {
        $handEl.empty();
        hasOldHand = true;
    }
    // display the hand
    for (var i = 0; i < maxCards; i++) {
      var $cardEl = $('<li>').addClass('card-in-hand');
      if (hand[i]) {
        var card = hand[i];
        // create an <a> element, with an image nested inside.
        var $cardLink = $('<a>').addClass('card').attr({href: '#', 'card-id': card.id, title: card.title});
        var $title = $('<span>').addClass('card-caption').text(card.title);
        // if there is an image, set the image; otherwise, set image to a gradient?
        if (card.image) {
          var $cardImage = $('<img>').addClass('card-img').attr({src: card.image});
          $cardLink.append($cardImage);
        } else {
        }
        if (card.subtitle) {
          var $cardSubtitle = $('<span>').addClass('card-tooltip').text(card.subtitle);
          $cardLink.append($cardSubtitle);
        }
        $cardEl.append($cardLink);
        $cardEl.append($title);
        $handEl.append($cardEl);
      } else {
        var $blankCardDiv = $('<div>').addClass('blank-card');
        $cardEl.append($blankCardDiv);
      }
      $handEl.append($cardEl);
    }
    if (!hasOldHand) {
        this.$content.append($handEl);
    }
  };


  BrowserUserInterface.prototype.displayDecks = function(decks) {
    if (window && window.displayDecks) {
      window.displayDecks(decks);
      return null;
    }
    var deckDescription = 'Decks - click a deck to draw a card.';
    if (window.deckDescription) {
      deckDescription = window.deckDescription;
    }
    if (this.dendryEngine.state.qualities.deckDescription) {
      deckDescription = this.dendryEngine.state.qualities.deckDescription;
    }
    this.$content.append($('<hr>'));
    this.$content.append($('<p>').addClass('deck-description').text(deckDescription));
    var $decksEl = $('<ul>').addClass('decks');
    for (var deck of decks) {
      var $deckEl = $('<li>').addClass('deck');
      // create an <a> element, with an image nested inside.
      var $deckLink = $('<a>').addClass('card').attr({href: '#', 'card-id': deck.id, title: deck.title});
      var $title = $('<span>').addClass('card-caption').text(deck.title);
      // if there is an image, set the image; otherwise, set image to a gradient?
      if (deck.image) {
        var $deckImage = $('<img>').addClass('card-img').attr({src: deck.image});
        $deckLink.append($deckImage);
      } else {
        // TODO: set alternative background for $deckLink to a gradient
      }
      if (deck.subtitle) {
        // if there's a subtitle, create a tooltip
        var $deckSubtitle = $('<span>').addClass('card-tooltip').text(deck.subtitle);
        $deckLink.append($deckSubtitle);
      }
      if (!deck.canChoose) {
        $deckEl = $deckEl.addClass('unavailable-card');
      }
      $deckEl.append($deckLink);
      $deckEl.append($title);
      $decksEl.append($deckEl);
    }
    this.$content.append($decksEl);
  };

  // displays pinned cards for dendrynexus
  BrowserUserInterface.prototype.displayPinnedCards = function(cards) {
    if (cards.length == 0) {
      return null;
    }
    if (window && window.displayPinnedCards) {
      window.displayPinnedCards(cards);
      return null;
    }
    var pinnedCardsDescription = 'Pinned cards - click a card to play.';
    if (window.pinnedCardsDescription) {
      pinnedCardsDescription = window.pinnedCardsDescription;
    }
    if (this.dendryEngine.state.qualities.pinnedCardsDescription) {
      pinnedCardsDescription = this.dendryEngine.state.qualities.pinnedCardsDescription;
    }
    this.$content.append($('<hr>'));
    this.$content.append($('<p>').addClass('pinned-text-description').text(pinnedCardsDescription));
    var $cardsEl = $('<ul>').addClass('pinned-cards');
    for (var card of cards) {
      var $cardEl = $('<li>').addClass('pinned-card');
      // create an <a> element, with an image nested inside.
      var $cardLink = $('<a>').addClass('card').attr({href: '#', 'card-id': card.id, title: card.title});
      var $title = $('<span>').addClass('card-caption').text(card.title);
      // if there is an image, set the image; otherwise, set image to a gradient?
      if (card.image) {
        var $cardImage = $('<img>').addClass('card-img').attr({src: card.image});
        $cardLink.append($cardImage);
      } else {
      }
      if (card.subtitle) {
        var $cardSubtitle = $('<span>').addClass('card-tooltip').text(card.subtitle);
        $cardLink.append($cardSubtitle);
      }
      $cardEl.append($cardLink);
      $cardEl.append($title);
      $cardsEl.append($cardEl);
    }
    this.$content.append($cardsEl);
  };

  // visual extensions

  BrowserUserInterface.prototype.setBg = function(image_url) {
      if (this.disable_bg) {
            $('#bg1').addClass('content_hidden');
            $('#bg1').removeClass('content_visible');
            $('#bg1').css('background-image', 'none'); 
      }
      else if (!image_url || image_url == 'none' || image_url == 'null') {
          if (this.animate_bg) {
            $('#bg1').addClass('content_hidden');
            $('#bg1').removeClass('content_visible');
            setTimeout(function() {
                $('#bg1').css('background-image', 'none'); 
                $('#bg1').removeClass('content_hidden');
                $('#bg1').addClass('content_visible');
            },
            100);
          } else {
              $('#bg1').css('background-image', 'none'); 
          }
      } else if (image_url.startsWith('#') || image_url.startsWith('rgba(') || image_url.startsWith('rgb(')) {
          if (this.animate_bg) {
            $('#bg1').fadeOut(this.bg_fade_out_time, function() {
                $('#bg1').css('background-image', 'none'); 
                $('#bg1').css('background-color', image_url);
            });
            $('#bg1').fadeIn(this.bg_fade_in_time, function() {
                $('#bg2').css('background-image', 'none'); 
            });
            console.log('changing background color ' + image_url);
          } else {
              $('#bg1').css('background-image', 'none'); 
              $('#bg1').css('bacground-color', image_url);
          }
      } else if (image_url.startsWith('linear-gradient(')) {
          if (this.animate_bg) {
            $('#bg1').fadeOut(this.bg_fade_out_time, function() {
                $('#bg1').css('background-image', image_url); 
            });
            $('#bg1').fadeIn(this.bg_fade_in_time, function() {
                $('#bg2').css('background-image', image_url); 
            });
            console.log('changing background gradient ' + image_url);
          } else {
              $('#bg1').css('background-image', image_url); 
          }
      } else {
          if (this.animate_bg) {
            $('#bg1').fadeOut(this.bg_fade_out_time, function() {
                $('#bg1').css('background-image', 'url("' + image_url + '")'); 
            });
            $('#bg1').fadeIn(this.bg_fade_in_time, function() {
                $('#bg2').css('background-image', $('#bg1').css('background-image'));
            });
      } else {
          $('#bg1').css('background-image', 'url("' + image_url + '")'); 
      }
    }
  };

  // set sprites given data
  // data is a list of two-element lists, where the first element is location
  // (one of topLeft, topRight, bottomLeft, bottomRight)
  // and the second element is the sprite.
  BrowserUserInterface.prototype.setSprites = function(data) {
      if (window && window.setSprites) {
          window.setSprites(data);
          return;
      }
      if (!this.show_portraits || data == 'none' || data == 'clear') {
          $('#topLeftSprite').children().fadeOut(this.fade_time, function() {$('#topLeftSprite').empty();});
          $('#topRightSprite').children().fadeOut(this.fade_time, function() {$('#topRightSprite').empty();});
          $('#bottomLeftSprite').children().fadeOut(this.fade_time, function() {$('#bottomLeftSprite').empty();});
          $('#bottomRightSprite').children().fadeOut(this.fade_time, function() {$('#bottomRightSprite').empty();});
          return;
      } else {
          if (data instanceof Array) {
              for (var i = 0; i < data.length; i++) {
                  var loc = data[i][0];
                  var img = data[i][1];
                  this.setSprite(loc, img);
              }
          } else if (data) {
                for (var key in Object.keys(data)) {
                  sprites.push([key, data[key]]);
              }
          }
      }
  };

  BrowserUserInterface.prototype.setSprite = function(loc, img) {
      if (!this.show_portraits) {
          return;
      }
      if (window && window.setSprite) {
          window.setSprite(loc, img);
          return;
      }
      loc = loc.toLowerCase();
      var targetSprite;
      if (loc == 'topleft') {
          targetSprite = $('#topLeftSprite');
      } else if (loc == 'topright') {
          targetSprite = $('#topRightSprite');
      } else if (loc == 'bottomleft') {
          targetSprite = $('#bottomLeftSprite');
      } else if (loc == 'bottomright') {
          targetSprite = $('#bottomRightSprite');
      }
      //targetSprite.empty();
      if (img == 'none' || img == 'clear') {
          delete this.dendryEngine.state.sprites[loc];
          targetSprite.fadeOut(this.fade_time, function() {targetSprite.empty();});
          return;
      } else {
          this.dendryEngine.state.sprites[loc] = img;
          targetSprite.fadeOut(this.fade_time, function() {
              targetSprite.emtpy();
              var image = new Image();
              image.src = img;
              targetSprite.append(image);
              console.log('fadeIn');
              targetSprite.fadeIn(this.fade_time);
          });
      }
  };

  BrowserUserInterface.prototype.setSpriteStyle = function(loc, style) {
      if (window && window.setSpriteStyle) {
          window.setSpriteStyle(loc, style);
          return;
      }
      var targetSprite;
      if (loc == 'topleft') {
          targetSprite = $('#topLeftSprite');
      } else if (loc == 'topright') {
          targetSprite = $('#topRightSprite');
      } else if (loc == 'bottomleft') {
          targetSprite = $('#bottomLeftSprite');
      } else if (loc == 'bottomright') {
          targetSprite = $('#bottomRightSprite');
      } else {
          return;
      }
      targetSprite.css(style);
  };

  // play audio with js
  // audio is a space-separated string with at least one entry.
  // the first entry will be a file url.
  // the second-nth entries are words describing how the file will be played:
  // 'queue' for playing the music next after the current audio ends
  // 'loop' if this music will loop indefinitely.
  // 'nofade' if the sound will be played instantly without a fadein or fadeout.
  // TODO: have a list of audio files...
  BrowserUserInterface.prototype.audio = function(audio) {
      if (this.disable_audio) {
          if (this.currentAudio) {
              this.currentAudio.pause();
              this.currentAudio.loop = false;
          }
          return;
      }
      var audioData = audio.split(' ');
      var audioFiles = [];
      var isLoop = false;
      var isQueue = false;
      var noFade = false;
      var isShuffle = false;
      var isClear = false;
      for (var name of audioData) {
          if (name == 'loop') {
              isLoop = true;
          } else if (name == 'queue') {
              isQueue = true;
          } else if (name == 'nofade') {
              noFade = true;
          } else if (name == 'shuffle') {
              isShuffle = true;
          } else if (name == 'clear') {
              isClear = true;
          } else {
              audioFiles.push(name);
          }
      }
      if (isClear) {
          this.audioPlaylist = [];
          this.audioQueue = [];
      }
      if (audioFiles.length >= 1 || isShuffle) {
          this.audioPlaylist = this.audioPlaylist.concat(audioFiles);
      }
      var audioFile = audioFiles[0];
      var currentAudio = this.currentAudio;
      var fadeTime = this.sound_fade_time;
      var loopCurrent = false;
      var playlist = this.audioPlaylist;
      // stop playing
      if (audioFile == 'null' || audioFile == 'none') {
          if (this.currentAudio) {
              $(currentAudio).animate({volume: 0},
                  this.sound_fade_time,
                  function() {
                      currentAudio.pause();
              });
              this.currentAudio.loop = false;
          }
      } else {
          // fadeout current audio, then fade-in new audio
          console.log('new audio:', audioFile, 'current audio:',  this.currentAudioURL);

          if (this.currentAudio && (this.currentAudioURL == audioFile || isQueue || isShuffle)) {
              if (!currentAudio.ended && !currentAudio.paused) {
                  console.log('adding music to queue');
                  this.audioQueue.push(audioFile);
                  var audioQueue = this.audioQueue;
                  this.currentAudio.onended = function() {
                      var newAudio;
                      if (isQueue) {
                          newAudio = audioQueue.pop();
                          console.log('playing from queue');
                      } else if (isShuffle) {
                          var index = Math.floor(Math.random()*playlist.length);
                          newAudio = playlist[index];
                          console.log('playing from playlist');
                      }
                      if (newAudio) {
                          currentAudio.src = newAudio;
                          console.log('Now playing', newAudio);
                          currentAudio.play();
                          $(currentAudio).animate({volume: this.volume},
                              fadeTime);
                          window.dendryUI.currentAudioURL = newAudio;
                          if (window && window.updateAudio) {
                              window.updateAudio();
                          }
                      }
                  };
              } else {
                  this.currentAudioURL = audioFile;
                  currentAudio.src = audioFile;
                  console.log('Fading in new audio');
                  currentAudio.volume = 0;
                  currentAudio.play();
                  $(currentAudio).animate({volume: this.volume},
                      fadeTime);
                  this.currentAudio.onended = function() {
                      var newAudio;
                      if (isQueue) {
                          newAudio = audioQueue.pop();
                          console.log('playing from queue');
                      } else if (isShuffle) {
                          var index = Math.floor(Math.random()*playlist.length);
                          newAudio = playlist[index];
                          console.log('playing from playlist');
                      }
                      if (newAudio) {
                          currentAudio.src = newAudio;
                          console.log('Now playing', newAudio);
                          currentAudio.play();
                          $(currentAudio).animate({volume: this.volume},
                              fadeTime);
                          window.dendryUI.currentAudioURL = newAudio;
                      }
                      if (window && window.updateAudio) {
                          window.updateAudio();
                      }
                  };
              }
          } else if (this.currentAudio) {
              // not queue or shuffle, so we stop playing the current audio.
              this.currentAudioURL = audioFile;
              console.log('currentAudio present,  fading out current audio');
              // reset the current audio function
              currentAudio.onended = function() {};
              if (noFade) {
                  currentAudio.pause();
                  currentAudio.src = audioFile;
                  currentAudio.play();
              } else {
                  $(currentAudio).animate({volume: 0},
                      this.sound_fade_time,
                      function() {
                          console.log(currentAudio);
                          currentAudio.src = audioFile;
                          console.log('Fading in new audio');
                          currentAudio.play();
                          $(currentAudio).animate({volume: this.volume},
                              fadeTime);
                          if (window && window.updateAudio) {
                              window.updateAudio();
                          }
                  });
              }
          } else if (!this.currentAudio) {
              this.currentAudio = new Audio(audioFile);
              this.currentAudio.volume = 0;
              this.currentAudio.play();
              $(this.currentAudio).animate({volume: this.volume}, this.sound_fade_time);
              currentAudio = this.currentAudio;
              if (isShuffle) {
                  this.currentAudio.onended = function() {
                    var index = Math.floor(Math.random()*playlist.length);
                    var newAudio = playlist[index];
                    if (newAudio) {
                       currentAudio.src = newAudio;
                       console.log('playing from shuffle');
                       console.log('Now playing', newAudio);
                       currentAudio.play();
                       $(currentAudio).animate({volume: this.volume},
                              fadeTime);
                          // asdkfl;;sajd;lkjafdsdsaf;kjldjsfa;kl
                       window.dendryUI.currentAudioURL = newAudio;
                    }
                    if (window && window.updateAudio) {
                        window.updateAudio();
                    }
                  };
              }
          }
          if (isLoop) {
              this.currentAudio.loop = true;
          } else {
              this.currentAudio.loop = false;
          }
          // https://stackoverflow.com/questions/7451508/html5-audio-playback-with-fade-in-and-fade-out
      }
      if (window && window.updateAudio) {
          console.log('updating audio display...');
          this.currentAudioURL = audioFile;
          window.updateAudio(audioFile);
      }
  };

  BrowserUserInterface.prototype.saveSettings = function() {
    if (typeof localStorage !== 'undefined') {
        localStorage[this.game.title + '_animate'] = this.animate;
        localStorage[this.game.title + '_disable_bg'] = this.disable_bg;
        localStorage[this.game.title + '_animate_bg'] = this.animate_bg;
        localStorage[this.game.title + '_show_portraits'] = this.show_portraits;
        localStorage[this.game.title + '_disable_audio'] = this.disable_audio;
        localStorage[this.game.title + '_dark_mode'] = this.dark_mode;
        localStorage[this.game.title + '_font_size'] = this.font_size;
        localStorage[this.game.title + '_settings'] = JSON.stringify(this.current_settings);
    }
  };

  // TODO: this could be much cleaner...
  BrowserUserInterface.prototype.loadSettings = function(defaultSettings) {
    if (typeof localStorage !== 'undefined') {
        if (localStorage[this.game.title + '_settings']) {
            this.current_settings = JSON.parse(localStorage[this.game.title + '_settings']);
        }
        for (var prop in this.base_settings) {
            var lsKey = this.game.title + '_' + prop;
            if (lsKey in localStorage) {
                if (prop == "font_size" || prop == "volume") {
                    this[prop] = Number(localStorage[lsKey]);
                    this.current_settings[prop] = Number(localStorage[lsKey]);
                } else {
                    this[prop] = localStorage[lsKey] != 'false';
                    this.current_settings[prop] = localStorage[lsKey] != 'false';
                }
            } else {
                if (defaultSettings && defaultSettings.hasOwnProperty(prop)) {
                    this[prop] = defaultSettings[prop];
                    this.current_settings[prop] = defaultSettings[prop];
                } else {
                    this[prop] = this.base_settings[prop];
                }
            }
        }
    }
  };

  BrowserUserInterface.prototype.toggle_audio = function(enable_audio) {
      if (enable_audio) {
          this.disable_audio = false;
          if (this.currentAudio) {
              this.currentAudio.play();
          }
      } else {
          if (this.currentAudio) {
              this.currentAudio.pause();
              this.currentAudio.loop = false;
          }
          this.disable_audio = true;
      }
  };


  // save functions
  BrowserUserInterface.prototype.autosave = function() {
      var oldData = localStorage[this.save_prefix+'_a0'];
      if (oldData) {
          localStorage[this.save_prefix+'_a1'] = oldData;
          localStorage[this.save_prefix+'_timestamp_a1'] = localStorage[this.save_prefix+'_timestamp_a0'];
        if (window && window.onSave) {
          window.onSave(this.save_prefix, 'a1', oldData, localStorage[this.save_prefix+'_timestamp_a0']);
        }
      }
      var slot = 'a0';
      var saveData = this.dendryEngine.getExportableState()
      saveData['audioPlaylist'] = this.audioPlaylist;
      saveData['audioQueue'] = this.audioQueue;
      saveData['currentAudioURL'] = this.currentAudioURL;
      var saveString = JSON.stringify(saveData);
      localStorage[this.save_prefix + '_' + slot] = saveString;
      var scene = this.dendryEngine.state.sceneId;
      var date = new Date(Date.now());
      date = scene + '\n(' + date.toLocaleString(undefined, this.DateOptions) + ')';
      localStorage[this.save_prefix +'_timestamp_' + slot] = date;
      if (window && window.onSave) {
        window.onSave(this.save_prefix, 'a0', saveString, date);
      }
      this.populateSaveSlots(slot + 1, 2);
  };

  BrowserUserInterface.prototype.quickSave = function() {
    var saveData = this.dendryEngine.getExportableState()
    saveData['audioPlaylist'] = this.audioPlaylist;
    saveData['audioQueue'] = this.audioQueue;
    saveData['currentAudioURL'] = this.currentAudioURL;
    var saveString = JSON.stringify(saveData);
    localStorage[this.save_prefix + '_q'] = saveString;
    window.alert('Saved.');
  };

  BrowserUserInterface.prototype.saveSlot = function(slot) {
    var saveData = this.dendryEngine.getExportableState()
    saveData['audioPlaylist'] = this.audioPlaylist;
    saveData['audioQueue'] = this.audioQueue;
    saveData['currentAudioURL'] = this.currentAudioURL;
    var saveString = JSON.stringify(saveData);
    localStorage[this.save_prefix + '_' + slot] = saveString;
    var scene = this.dendryEngine.state.sceneId;
    var date = new Date(Date.now());
    date = scene + '\n(' + date.toLocaleString(undefined, this.DateOptions) + ')';
    localStorage[this.save_prefix + '_timestamp_' + slot] = date;
    if (window && window.onSave) {
      window.onSave(this.save_prefix, slot, saveString, date);
    }
    this.populateSaveSlots(slot + 1, 2);
  };

  BrowserUserInterface.prototype.loadAudio = function(gameState) {
      var audioString = "";
      var hasAudio = false;
      if (gameState.currentAudioURL) {
          this.currentAudioURL = '';
          this.audioPlaylist = [];
          this.audioQueue = [];
          if (this.currentAudio) {
              this.currentAudio.pause();
              this.currentAudio = null;
          }
          hasAudio = true;
      }
      if (hasAudio) {
          // TODO: play the current audio - lol just construct a string...
          if (gameState.audioPlaylist) {
              audioString += "shuffle ";
          }
          if (gameState.audioQueue) {
              audioString += "queue ";
          }
          audioString += gameState.currentAudioURL + " ";
          if (gameState.audioPlaylist) {
              for (var song of gameState.audioPlaylist) {
                  audioString += song + " ";
              }
          }
          if (gameState.audioQueue) {
              for (var song of gameState.audioQueue) {
                  audioString += song + " ";
              }
          }
          gameState.currentAudioURL = null;
          gameState.audioPlaylist = null;
          gameState.audioQueue = null;
          this.audio(audioString);
      }
  };

  BrowserUserInterface.prototype.quickLoad = function() {
    if (localStorage[this.save_prefix + '_q']) {
      var saveString = localStorage[this.save_prefix + '_q'];
      var gameState = JSON.parse(saveString)
      this.loadAudio(gameState);
      this.dendryEngine.setState(gameState);
      if (window && window.onLoad) {
          window.onLoad(this.save_prefix + '_q', saveString);
      }
      window.alert('Loaded.');
    } else {
      window.alert('No save available.');
    }
  };

  BrowserUserInterface.prototype.loadSlot = function(slot) {
    if (localStorage[this.save_prefix + '_' + slot]) {
      var saveString = localStorage[this.save_prefix + '_' + slot];
      var gameState = JSON.parse(saveString)
      this.loadAudio(gameState);
      this.dendryEngine.setState(gameState);
      // have a function for loading the game...
      if (window && window.onLoad) {
          window.onLoad();
      }
      this.hideSaveSlots();
      window.alert('Loaded.');
    } else {
      window.alert('No save available.');
    }
  };

  BrowserUserInterface.prototype.deleteSlot = function(slot) {
    if (localStorage[this.save_prefix + '_' + slot]) {
      localStorage[this.save_prefix + '_' + slot] = '';
      localStorage[this.save_prefix + '_timestamp_' + slot] = '';
      this.populateSaveSlots(slot + 1, 2);
    } else {
      window.alert('No save available.');
    }
  };

  BrowserUserInterface.prototype.exportSlot = function(slot) {
    if (localStorage[this.save_prefix + '_' + slot]) {
      var data = localStorage[this.save_prefix + '_' + slot];
      var a = document.createElement("a");
      var file = new Blob([data], {type: 'text/plain'});
      a.href = URL.createObjectURL(file);
      a.download = 'save.txt';
      a.click();
    } else {
      window.alert('No save available.');
    }
  };

  BrowserUserInterface.prototype.importSave = function(doc_id) {
      var that = this;
      function onFileLoad(e) {
          var data = e.target.result;
          that.dendryEngine.setState(JSON.parse(data));
          that.hideSaveSlots();
          window.alert('Loaded.');
      }
      var uploader = document.getElementById(doc_id);
      var reader = new FileReader();
      var file = uploader.files[0];
      console.log(uploader.files);
      reader.onload = onFileLoad;
      reader.readAsText(file);
  };

  BrowserUserInterface.prototype.populateSaveSlots = function(max_slots, max_auto_slots) {
    // this fills in the save information
    var that = this;
    function createLoadListener(i) {
      return function(evt) {
        that.loadSlot(i);
      };
    }
    function createSaveListener(i) {
      return function(evt) {
        that.saveSlot(i);
      };
    }
    function createDeleteListener(i) {
      return function(evt) {
        that.deleteSlot(i);
      };
    }
    function createExportListener(i) {
      return function(evt) {
        that.exportSlot(i);
      };
    }
      function populateSlot(id) {
          var save_element = document.getElementById('save_info_' + id);
          var save_button = document.getElementById('save_button_' + id);
          var delete_button = document.getElementById('delete_button_' + id);
          if (localStorage[that.save_prefix + '_' + id]) {
              var timestamp = localStorage[that.save_prefix+'_timestamp_' + id];
              save_element.textContent = timestamp;
              save_button.textContent = "Load";
              save_button.onclick = createLoadListener(id);
              delete_button.onclick = createDeleteListener(id);
          } else {
              save_button.textContent = "Save";
              save_element.textContent = "Empty";
              save_button.onclick = createSaveListener(id);
          }
          try {
              var export_button = document.getElementById('export_button_' + id);
              if (localStorage[that.save_prefix + '_' + id]) {
                  export_button.onclick = createExportListener(id);
              }
          } catch(error) {
          }

      }
      for (var i = 0; i < max_slots; i++) {
          populateSlot(i);
      }
      for (i = 0; i < max_auto_slots; i++) {
          populateSlot('a'+i);
      }

  };

  BrowserUserInterface.prototype.showSaveSlots = function() {
    if (this.dendryEngine.state.disableSaves) {
        window.alert('Saving and loading is currently disabled.');
        return;
    }
    var save_element = document.getElementById('save');
    save_element.style.display = 'block';
    this.populateSaveSlots(this.max_slots, 2);
    var that = this;
    if (!save_element.onclick) {
      save_element.onclick = function(evt) {
        var target = evt.target;
        var save_element = document.getElementById('save');
        if (target == save_element) {
          that.hideSaveSlots();
        }
      };
    }
  };

  BrowserUserInterface.prototype.hideSaveSlots = function() {
    var save_element = document.getElementById('save');
    save_element.style.display = 'none';
  };


  // functions for dealing with options
  BrowserUserInterface.prototype.setOption = function(option, toggle) {
      this[option] = toggle; 
      this.saveSettings();
  };

  BrowserUserInterface.prototype.populateOptions = function() {
    var disable_bg = this.disable_bg;
    var animate = this.animate;
    var animate_bg = this.animate_bg;
    if (disable_bg) {
        $('#backgrounds_no')[0].checked = true;
    } else {
        $('#backgrounds_yes')[0].checked = true;
    }
    if (animate) {
        $('#animate_yes')[0].checked = true;
    } else {
        $('#animate_no')[0].checked = true;
    }
    if (animate_bg) {
        $('#animate_bg_yes')[0].checked = true;
    } else {
        $('#animate_bg_no')[0].checked = true;
    }
  };

  BrowserUserInterface.prototype.hideOptions = function() {
      var save_element = document.getElementById('options');
      save_element.style.display = "none";
  };

  BrowserUserInterface.prototype.showOptions = function() {
      var that = this;
      var save_element = document.getElementById('options');
      this.populateOptions();
      save_element.style.display = "block";
      if (!save_element.onclick) {
          save_element.onclick = function(evt) {
              var target = evt.target;
              var save_element = document.getElementById('options');
              if (target == save_element) {
                  that.hideOptions();
              }
          };
      }
  };

  // ------------------------------------------------------------------------
  // Additional methods

  BrowserUserInterface.prototype.getGameOverMsg = function() {
    return 'Game Over (reload to read again)';
  };

  BrowserUserInterface.prototype._registerEvents = function() {
    var that = this;
    this.$content.on('click', 'ul.choices li a', function(event) {
      event.preventDefault();
      event.stopPropagation();
      var choice = parseInt($(this).attr('data-choice'));
      that.dendryEngine.choose(choice);
      return false;
    });
    this.$content.on('click', 'ul.choices li', function(event) {
      event.preventDefault();
      event.stopPropagation();
      $('a', this).click();
      return false;
    });
    // dendrynexus - onclick for decks and cards
    this.$content.on('click', 'ul.decks li a', function(event) {
      event.preventDefault();
      event.stopPropagation();
      var choice = $(this).attr('card-id');
      that.dendryEngine.drawCard(choice);
      return false;
    });
    this.$content.on('click', 'ul.hand li a', function(event) {
      event.preventDefault();
      event.stopPropagation();
      var choice = $(this).attr('card-id');
      that.dendryEngine.playCard(choice);
      return false;
    });
    this.$content.on('click', 'ul.pinned-cards li a', function(event) {
      event.preventDefault();
      event.stopPropagation();
      var choice = $(this).attr('card-id');
      that.dendryEngine.playPinnedCard(choice);
      return false;
    });
  };

  // ------------------------------------------------------------------------
  // Run when loaded.

  var main = function() {
    engine.convertJSONToGame(window.game.compiled, function(err, game) {
      if (err) {
        throw err;
      }

      var ui = new BrowserUserInterface(game, $('#content'));
      window.dendryUI = ui;
      // Allow the ui system to be customized before use.
      if (window.dendryModifyUI !== undefined) {
        // If it returns true, then we don't need to begin the game.
        var dontStart = window.dendryModifyUI(ui);
        if (dontStart) {
          return;
        }
      }
      ui.dendryEngine.beginGame();
    });
  };
  $(main);

}(jQuery));

},{"../engine":1,"./content/html":3}],3:[function(require,module,exports){
/* dendry
 * http://github.com/idmillington/dendry
 *
 * MIT License
 */
/*jshint indent:2 */
(function() {
  'use strict';

  var _contentObjectToHTML = function(contentObj) {
    if (contentObj.type === undefined) {
      // if the game defines the function window.displayText, then that function is called to format the text.
      // this is used for game-specific formatting.
      if (typeof(window) !== "undefined" && window.displayText) {
          contentObj = window.displayText(contentObj);
      }
      return contentObj;
    } else {
      switch (contentObj.type) {
      case 'emphasis-1':
        return '<em>' + _contentToHTML(contentObj.content) + '</em>';
      case 'emphasis-2':
        return '<strong>' + _contentToHTML(contentObj.content) + '</strong>';
      case 'emphasis-3':
        return '<code>' + _contentToHTML(contentObj.content) + '</code>';
      case 'hidden':
        return '<span class="hidden">' + _contentToHTML(contentObj.content) +
          '</span>';
      case 'line-break':
        return '<br>';

      // We can't handle elements that require state-dependency.
      // raw html for magic
      case 'magic':
        return contentObj.content;
      case 'insert':
        /* falls through */
      case 'conditional':
        throw new Error(
          contentObj.type + ' should have been evaluated by now.'
          );
      }
    }
  };

  var _contentToHTML = function(content) {
    if (Array.isArray(content)) {
      var result = [];
      for (var i = 0; i < content.length; ++i) {
        var contentObj = content[i];
        result.push(_contentObjectToHTML(contentObj));
      }
      return result.join('');
    } else {
      return _contentObjectToHTML(content);
    }
  };

  var _paragraphsToHTML = function(paragraphs) {
    var result = [];
    for (var i = 0; i < paragraphs.length; ++i) {
      var paragraph = paragraphs[i];
      switch (paragraph.type) {
      case 'heading':
        result.push('<h1>');
        result.push(_contentToHTML(paragraph.content));
        result.push('</h1>');
        break;
      case 'paragraph':
        result.push('<p>');
        result.push(_contentToHTML(paragraph.content));
        result.push('</p>');
        break;
      case 'quotation':
        result.push('<blockquote>');
        result.push(_contentToHTML(paragraph.content));
        result.push('</blockquote>');
        break;
      case 'attribution':
        result.push('<blockquote class="attribution">');
        result.push(_contentToHTML(paragraph.content));
        result.push('</blockquote>');
        break;
      case 'magic':
        result.push(paragraph.content);
        break;
      case 'hrule':
        result.push('<hr>');
        break;
      }
    }
    return result.join('');
  };

  module.exports = {
    convert: _paragraphsToHTML,
    convertLine: _contentToHTML
  };
}());

},{}]},{},[2]);
