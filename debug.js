const dados = [
  {
    data: "22-11-2022",
    horario: "13:00",
    time_casa: "São Paulo",
    time_fora: "Palmeira",
    over_05: 92,
    over_15: 75,
    over_25: 53,
  },
  {
    data: "22-11-2022",
    horario: "13:00",
    time_casa: "Maccabi Haifa",
    time_fora: "Besiktas",
    over_05: 87,
    over_15: 66,
    over_25: 50,
  },
  {
    data: "22-11-2022",
    horario: "14:00",
    time_casa: "Juventus",
    time_fora: "Roma",
    over_05: 92,
    over_15: 75,
    over_25: 53,
  },
  {
    data: "22-11-2022",
    horario: "11:00",
    time_casa: "Holanda",
    time_fora: "Grécia",
    over_05: 92,
    over_15: 75,
    over_25: 53,
  },
  {
    data: "22-11-2022",
    horario: "13:00",
    time_casa: "Argentina",
    time_fora: "Arabia",
    over_05: 90,
    over_15: 71,
    over_25: 49,
  },
  {
    data: "22-11-2022",
    horario: "22:00",
    time_casa: "Brasil",
    time_fora: "sérvia",
    over_05: 95,
    over_15: 80,
    over_25: 61,
  },
  {
    data: "26-11-2022",
    horario: "17:00",
    time_casa: "Vizeu",
    time_fora: "Leixões",
    over_05: 88,
    over_15: 70,
    over_25: 45,
  },
]

dados.sort((a, b) => {
  if (a.horario < b.horario) {
    return -1
  } else {
    return true
  }
})


dados.forEach((item) => {
  const table = document.getElementById("dados")
  const row = document.createElement("tr")
  const td_data = document.createElement("td")
  const td_horario = document.createElement("td")
  const td_timecasa = document.createElement("td")
  const td_versus = document.createElement("td")
  const td_timefora = document.createElement("td")
  const td_over05 = document.createElement("td")
  const td_over15 = document.createElement("td")
  const td_over25 = document.createElement("td")
  row.appendChild(td_data).innerHTML = item.data
  row.appendChild(td_horario).innerHTML = item.horario
  row.appendChild(td_timecasa).innerHTML = item.time_casa
  row.appendChild(td_versus).innerHTML = "X"
  row.appendChild(td_timefora).innerHTML = item.time_fora
  row.appendChild(td_over05).innerHTML = item.over_05
  row.appendChild(td_over15).innerHTML = item.over_15
  row.appendChild(td_over25).innerHTML = item.over_25
  table.appendChild(row)
})





const h = {
  team_id,
  season_id,
  stage_id,
  win,draw,lost,goals_for,goals_against,clean_sheet,failed_to_score,penalties,scoring_minutes,goals_conceded_minutes,avg_goals_per_game_scored,avg_goals_per_game_conceded,avg_first_goal_scored,avg_first_goal_conceded,attacks,dangerous_attacks,avg_ball_possession_percentage,fouls,avg_fouls_per_game,offsides,redcards,yellowcards,shots_blocked,shots_off_target,avg_shots_off_target_per_game,shots_on_target,avg_shots_on_target_per_game,avg_corners,total_corners,btts,goal_line,avg_player_rating,avg_player_rating_per_match,tackles
}
