async function test() {
  let league = await fetch("https://api.sokkerpro.net/getLeagueInfo/737");
  league = await league.json();
  console.log(league);
}

test();

// const dados = [
//   {
//     data: "22-11-2022",
//     horario: "13:00",
//     time_casa: "São Paulo",
//     time_fora: "Palmeira",
//     over_05: 92,
//     over_15: 75,
//     over_25: 53,
//   },
//   {
//     data: "22-11-2022",
//     horario: "13:00",
//     time_casa: "Maccabi Haifa",
//     time_fora: "Besiktas",
//     over_05: 87,
//     over_15: 66,
//     over_25: 50,
//   },
//   {
//     data: "22-11-2022",
//     horario: "14:00",
//     time_casa: "Juventus",
//     time_fora: "Roma",
//     over_05: 92,
//     over_15: 75,
//     over_25: 53,
//   },
//   {
//     data: "22-11-2022",
//     horario: "11:00",
//     time_casa: "Holanda",
//     time_fora: "Grécia",
//     over_05: 92,
//     over_15: 75,
//     over_25: 53,
//   },
//   {
//     data: "22-11-2022",
//     horario: "13:00",
//     time_casa: "Argentina",
//     time_fora: "Arabia",
//     over_05: 90,
//     over_15: 71,
//     over_25: 49,
//   },
//   {
//     data: "22-11-2022",
//     horario: "22:00",
//     time_casa: "Brasil",
//     time_fora: "sérvia",
//     over_05: 95,
//     over_15: 80,
//     over_25: 61,
//   },
//   {
//     data: "26-11-2022",
//     horario: "17:00",
//     time_casa: "Vizeu",
//     time_fora: "Leixões",
//     over_05: 88,
//     over_15: 70,
//     over_25: 45,
//   },
// ]

// dados.sort((a, b) => {
//   if (a.horario < b.horario) {
//     return -1
//   } else {
//     return true
//   }
// })

// dados.forEach((item) => {
//   const table = document.getElementById("dados")
//   const row = document.createElement("tr")
//   const td_data = document.createElement("td")
//   const td_horario = document.createElement("td")
//   const td_timecasa = document.createElement("td")
//   const td_versus = document.createElement("td")
//   const td_timefora = document.createElement("td")
//   const td_over05 = document.createElement("td")
//   const td_over15 = document.createElement("td")
//   const td_over25 = document.createElement("td")
//   row.appendChild(td_data).innerHTML = item.data
//   row.appendChild(td_horario).innerHTML = item.horario
//   row.appendChild(td_timecasa).innerHTML = item.time_casa
//   row.appendChild(td_versus).innerHTML = "X"
//   row.appendChild(td_timefora).innerHTML = item.time_fora
//   row.appendChild(td_over05).innerHTML = item.over_05
//   row.appendChild(td_over15).innerHTML = item.over_15
//   row.appendChild(td_over25).innerHTML = item.over_25
//   table.appendChild(row)
// })

// const h = {
//   team_id,
//   season_id,
//   stage_id,
//   win,draw,lost,goals_for,goals_against,clean_sheet,failed_to_score,penalties,scoring_minutes,goals_conceded_minutes,avg_goals_per_game_scored,avg_goals_per_game_conceded,avg_first_goal_scored,avg_first_goal_conceded,attacks,dangerous_attacks,avg_ball_possession_percentage,fouls,avg_fouls_per_game,offsides,redcards,yellowcards,shots_blocked,shots_off_target,avg_shots_off_target_per_game,shots_on_target,avg_shots_on_target_per_game,avg_corners,total_corners,btts,goal_line,avg_player_rating,avg_player_rating_per_match,tackles
// }

// const date = () => {
//   const year = new Date().getFullYear();
//   const mouth = new Date().getMonth() + 1;
//   const day = new Date().getDate();
//   return `${year}-${mouth}-${day}`;
// };

// const getGamesToday = async () => {
//   const getGamesToday = await fetch(
//     `https://api.sokkerpro.net/eventApi/${date()}/-180/web_4iiad5kscim16ca4`
//   );
//   const response = await getGamesToday.json();
//   const { data } = response;
//   // console.log(data);
//   // return data;

//   const selectedGames = [];

//   data.forEach(async (game) => {
//     const getLeagueStats = await fetch(
//       `https://api.sokkerpro.net/getLeagueInfo/${game.league_id}`
//     );
//     const leagueStats = await getLeagueStats.json();
//     // console.log(leagueStats);

//     if (leagueStats) {
//       const getLocalTeamStats = await fetch(
//         `https://api.sokkerpro.net/getTeamStatsDirect/${game.localteam_id}`
//       );
//       const localTeamStats = await getLocalTeamStats.json();
//       if (localTeamStats.stats) {
//         avg_localteam05 =
//           localTeamStats.stats.data[0].goal_line.over["0_5"].home;
//         selectedGames.push(game);
//       } else {
//         return;
//       }
//       // const getVisitorTeamStats = await fetch(
//       //   `https://api.sokkerpro.net/getTeamStatsDirect/${game.visitorteam_id}`
//       // );
//       // const visitorTeamStats = await getLocalTeamStats.json();
//     } else {
//       return;
//     }
//   });
//   console.log(selectedGames);
// };

// getGamesToday(date());

// console.log(date());

// const game =   {
//   country_id: '99474',
//   favorite: '1',
//   country_name: 'World',
//   league_id: '732',
//   league_name: 'World Cup',
//   id: '18494082',
//   season_id: '18017',
//   starting_time: '2022-11-28 10:00:00',
//   status: 'FT',
//   updated_at: '2022-11-28 11:30:26',
//   highlight_team: -1,
//   home_score: '350',
//   away_score: '542',
//   race_to_goal: '0',
//   scores: {
//     localteam_score: 3,
//     visitorteam_score: 3,
//     localteam_pen_score: null,
//     visitorteam_pen_score: null,
//     ht_score: '1-2',
//     ft_score: '3-3',
//     et_score: null,
//     ps_score: null
//   },
//   localTeam: {
//     id: 18780,
//     legacy_id: 1844,
//     name: 'Cameroon',
//     short_code: 'CMR',
//     twitter: null,
//     country_id: 593,
//     national_team: true,
//     founded: 1959,
//     logo_path: 'https://cdn.sportmonks.com/images/soccer/teams/28/18780.png',
//     venue_id: 343337,
//     current_season_id: 20776,
//     is_placeholder: false
//   },
//   visitorTeam: {
//     id: 18873,
//     legacy_id: 248,
//     name: 'Serbia',
//     short_code: 'SRB',
//     twitter: null,
//     country_id: 296,
//     national_team: true,
//     founded: 1919,
//     logo_path: 'https://cdn.sportmonks.com/images/soccer/teams/25/18873.png',
//     venue_id: 1590,
//     current_season_id: 18017,
//     is_placeholder: false
//   },
//   time: {
//     status: 'FT',
//     starting_at: [Object],
//     minute: 90,
//     second: null,
//     added_time: 6,
//     extra_minute: null,
//     injury_time: null
//   },
//   localteam_id: '18780',
//   visitorteam_id: '18873',
//   stats: [ [Object], [Object] ],
//   winner_team_id: null,
//   goals05ht: 70,
//   goals15ht: 10,
//   goals15ft: 78,
//   goals25ft: 75,
//   goals35ft: 40,
//   cornerprediction: 6.8,
//   winorlosemarket: 'X2',
//   winorlosevalue: 85,
//   bttsmarket: 'No',
//   bttsvalue: 56.8
// },
