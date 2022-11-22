const calendar = document.getElementById('calendar');
const button = document.querySelector('button');

let data = null

calendar.addEventListener('change', (event) => {
  data = event.target.value;
})


button.addEventListener('click', () => {
  dataCrossing(data)

})


const getHomeTeamStats = async (item) => {
  const getLocalTeamStats = await fetch(`https://api.sokkerpro.net/getTeamStatsDirect/${item.localteam_id}`)
  const localTeamStats = await getLocalTeamStats.json()
  // selectedGames.push(localTeamStats)
  return localTeamStats
}


const dataCrossing = async (date) => {

  const dd = []

  console.log('Data selecionada ' + date)


  const getGamesToday = await fetch(`https://api.sokkerpro.net/eventApi/${date}/-180/web_4iiad5kscim16ca4`)
  const gamesToday = await getGamesToday.json()
  const { data } = await gamesToday
  // console.log(data)

  for (let index = 0; index < 12; index++) {
    const item = await data[index];
    const getLeagueStats = await fetch(`https://api.sokkerpro.net/getLeagueInfo/${item.league_id}`)
    const leagueStats = await getLeagueStats.json()
    const avg05_league = await leagueStats.stats.stats.data.goal_line.over['0_5']
    // const avg15_league = await leagueStats.stats.stats.data.goal_line.over['1_5']
    // const avg25_league = await leagueStats.stats.stats.data.goal_line.over['2_5']

    await getHomeTeamStats(item)

  }


}





