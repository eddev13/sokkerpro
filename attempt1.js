const calendar = document.getElementById('calendar');
const button = document.querySelector('button');

let data = null

calendar.addEventListener('change', (event) => {
  data = event.target.value;
})


button.addEventListener('click', () => {
  dataCrossing(data)

})

const check05 = async (leagueMedia, localMedia, visitorMedia) => {
  let teamsMedia = ((localMedia + visitorMedia) / 2)
  const probability = ((teamsMedia + leagueMedia) / 2)
  teamsMedia >= leagueMedia ? { prob: probability, status: true } : { prob: probability, status: false }
}
// const check15 = (leagueMedia, localMedia, visitorMedia) => {
//   let teamsMedia = ((localMedia + visitorMedia) / 2)
//   const probability = ((teamsMedia + leagueMedia) / 2)
//   teamsMedia >= leagueMedia ? { probability, status: true } : { probability, status: false }
// }

// const check25 = (leagueMedia, localMedia, visitorMedia) => {
//   let teamsMedia = ((localMedia + visitorMedia) / 2)
//   const probability = ((teamsMedia + leagueMedia) / 2)
//   teamsMedia >= leagueMedia ? { probabilit, status: true } : { probability, status: false }
// }

let selectedGames = []



const getLocalTeamStats = async (item) => {
  const getLocalTeamStats = await fetch(`https://api.sokkerpro.net/getTeamStatsDirect/${item.localteam_id}`)
  const localTeamStats = await getLocalTeamStats.json()
  // selectedGames.push(localTeamStats)
  return localTeamStats
}


const dataCrossing = async (date) => {

  console.log('Data selecionada ' + date)

  const getGamesToday = await fetch(`https://api.sokkerpro.net/eventApi/${date}/-180/web_4iiad5kscim16ca4`)
  const gamesToday = await getGamesToday.json()
  const { data } = await gamesToday
  // console.log(data)

  const dd = []
  for (let index = 0; index < 10; index++) {
    const item = await data[index];
    const getLeagueStats = await fetch(`https://api.sokkerpro.net/getLeagueInfo/${item.league_id}`)
    const leagueStats = await getLeagueStats.json()
    const avg05_league = await leagueStats.stats.stats.data.goal_line.over['0_5']
    // const avg15_league = await leagueStats.stats.stats.data.goal_line.over['1_5']
    // const avg25_league = await leagueStats.stats.stats.data.goal_line.over['2_5']

    const dd = await getLocalTeamStats(item)


    //const localTeamMedia = await {
    //avg_05: localTeamStats.stats.data[0].goal_line['0_5'] ? localTeamStats.stats.data[0].goal_line['0_5'] : data.splice(index, 1)
    // avg_15: localTeamStats.stats.data[0].goal_line.over['1_5'].home,
    // avg_25: localTeamStats.stats.data[0].goal_line.over['2_5'].home,
  }

  dd
  // const getVisitorTeamStats = await fetch(`https://api.sokkerpro.net/getTeamStatsDirect/${item.visitorteam_id}`)
  // const visitorTeamStats = await getVisitorTeamStats.json()


  // const visitorTeamMedia = {
  //   avg_05: visitorTeamStats.stats.data[0].goal_line.over['0_5'].away,
  //   avg_15: visitorTeamStats.stats.data[0].goal_line.over['1_5'].away,
  //   avg_25: visitorTeamStats.stats.data[0].goal_line.over['2_5'].away,
  // }


  console.log(selectedGames)



  // console.log("Jogos Selecionados" + selectedGames)

  // alert(selectedGames)


  // responseGamesToday.data.forEach((item) => {
  //   (
  //     gamesToday.push({
  //       game_id: item.id,
  //       league_id: item.league_id,
  //       localteam_id: item.localteam_id,
  //       localteam_name: item.localTeam.name,
  //       starting_time: item.starting_time,
  //       status: item.status,
  //       visitorteam_id: item.visitorteam_id,
  //       visitorteam_name: item.visitorTeam.name,
  //     })
  //   )
  // })






  // gamesToday.forEach(async (item) => {
  //   const leagueStats = await fetch(`https://api.sokkerpro.net/getLeagueInfo/${item.league_id}`)
  //   const responseLeagueStats = await leagueStats.json()
  //   const avg05_league = await responseLeagueStats.stats.stats.data.goal_line.over['0_5']

  //   const localTeamStats = await fetch(`https://api.sokkerpro.net/getTeamStatsDirect/${item.localteam_id}`)
  //   const responseLocalTeamStats = await localTeamStats.json()
  //   const localTeamMedia = await responseLocalTeamStats.stats.data[0].goal_line.over['0_5'].home

  //   const visitorTeamStats = await fetch(`https://api.sokkerpro.net/getTeamStatsDirect/${item.visitorteam_id}`)
  //   const responseVisitorTeamStats = await visitorTeamStats.json()
  //   const visitorTeamMedia = await responseVisitorTeamStats.stats.data[0].goal_line.over['0_5'].away

  //   // const calc = await (localTeamMedia + visitorTeamMedia) / 2
  //   // calc > leagueMedia ? selectedGames.push(item) : false

  //   if (avg05_league && localTeamMedia && visitorTeamMedia) {
  //     const avg05Teams = ((localTeamMedia + visitorTeamMedia) / 2)
  //     avg05Teams > avg05_league ? selectedGames.push(item) : false
  //   } else {
  //     return false
  //   }

  // })

  // selectedGames.sort((a, b) => {
  //   if (a.starting_time < b.starting_time) {
  //     return -1
  //   } else {
  //     return true
  //   }
  // })


  // selectedGames.forEach(() => {
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
  //   row.appendChild(td_data).innerHTML = "null"
  //   row.appendChild(td_horario).innerHTML = item.starting_time
  //   row.appendChild(td_timecasa).innerHTML = item.localTeam.name
  //   row.appendChild(td_versus).innerHTML = "X"
  //   row.appendChild(td_timefora).innerHTML = item.visitorTeam.name
  //   row.appendChild(td_over05).innerHTML = "null"
  //   row.appendChild(td_over15).innerHTML = "null"
  //   row.appendChild(td_over25).innerHTML = "null"
  //   table.appendChild(row)
  // })

  // console.log(selectedGames)
}








// const jogos = []

// eventos.forEach(async (item) => {

//   const visitorTeamStats = await fetch(`https://api.sokkerpro.net/getTeamStatsDirect/${item.visitorteam_id}`)
//   const responseVisitorTeamStats = await visitorTeamStats.json()

//   const avg05GoalsLeague = await responseLeagueStats.stats.stats.data.goal_line.over['0_5']
//   const avg05GoalsTeams = await ((responseLocalTeamStats.stats.data[0].goal_line.over['0_5'].home + responseVisitorTeamStats.stats.data[0].goal_line.over['0_5'].away) / 2)

//   avg05GoalsTeams >= avg05GoalsLeague ? jogos.push({ game_id: item.id }) : "nao passou no teste"
// })

// return jogos


