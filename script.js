const getAllGamesToday = async (date) => {
  const modal_title = document.querySelector(".modal-title");

  const getAllGames = await fetch(
    `https://api.sokkerpro.net/eventApi/${date}/-180/web_4iiad5kscim16ca4`
  );
  const response = await getAllGames.json();
  const { data } = response;
  console.log(data);

  data.sort((a, b) => {
    if (a.starting_time.split(" ")[1] < b.starting_time.split(" ")[1]) {
      return -1;
    } else {
      return true;
    }
  });

  // const data = [
  //   {
  //     starting_time: "2022-12-04 17:00:00",
  //     localTeam: { name: "São Paulo" },
  //     visitorTeam: { name: "Palmeiras" },
  //   },
  // ];

  const clearTable = () => {
    const checkModal = document.getElementById("exampleModal");
    if (checkModal.hasAttribute("aria-hidden")) {
      modal_title.innerHTML = "";
      const elements = document.querySelectorAll("[probability]");
      elements.forEach((el) => {
        el.classList.contains("green") || el.classList.contains("pink")
          ? (el.classList.remove("green"), el.classList.remove("pink"))
          : null;
        el.innerHTML = "";
      });
    }
  };

  document.querySelector(".btn-close").addEventListener("click", clearTable);

  const tbody = document.querySelector("tbody");

  data.map((item) => {
    const row = document.createElement("tr");
    const td_data = document.createElement("td");
    const td_horario = document.createElement("td");
    const td_timecasa = document.createElement("td");
    const td_versus = document.createElement("td");
    const td_timefora = document.createElement("td");
    const td_over05 = document.createElement("td");
    const td_over15 = document.createElement("td");
    const td_over25 = document.createElement("td");
    row.appendChild(td_data).innerHTML = item.starting_time.split(" ")[0];
    row.appendChild(td_horario).innerHTML = item.starting_time.split(" ")[1];
    row.appendChild(td_timecasa).innerHTML = item.localTeam.name;
    row.appendChild(td_versus).innerHTML = "X";
    row.appendChild(td_timefora).innerHTML = item.visitorTeam.name;
    row.appendChild(td_over05).innerHTML = "---";
    row.appendChild(td_over15).innerHTML = "---";
    row.appendChild(td_over25).innerHTML = "---";
    row.setAttribute("scope", "row");
    row.setAttribute("data-bs-toggle", "modal");
    row.setAttribute("data-bs-target", "#exampleModal");
    tbody.appendChild(row);
    row.addEventListener("click", async () => {
      // clearTable();
      const getLeagueStats = await fetch(
        `https://api.sokkerpro.net/getLeagueInfo/${item.league_id}`
      );
      const getLocalTeamStats = await fetch(
        `https://api.sokkerpro.net/getTeamStatsDirect/${item.localteam_id}`
      );
      const getVisitorTeamStats = await fetch(
        `https://api.sokkerpro.net/getTeamStatsDirect/${item.visitorteam_id}`
      );
      const leagueStats = await getLeagueStats.json();
      const localTeamStats = await getLocalTeamStats.json();
      const visitorTeamStats = await getVisitorTeamStats.json();
      const leagueStats_avgGoals = await leagueStats.stats.stats.data.goal_line
        .over;
      const localTeam_avgGoals = await localTeamStats.stats.data[0].goal_line
        .over;
      const visitorTeam_avgGoals = await visitorTeamStats.stats.data[0]
        .goal_line.over;

      const avg_league_05 = leagueStats_avgGoals["0_5"];
      const avg_league_15 = leagueStats_avgGoals["1_5"];
      const avg_league_25 = leagueStats_avgGoals["2_5"];

      const avg_localTeam_05 = localTeam_avgGoals["0_5"].home;
      const avg_localTeam_15 = localTeam_avgGoals["1_5"].home;
      const avg_localTeam_25 = localTeam_avgGoals["2_5"].home;

      const avg_visitorTeam_05 = visitorTeam_avgGoals["0_5"].away;
      const avg_visitorTeam_15 = visitorTeam_avgGoals["1_5"].away;
      const avg_visitorTeam_25 = visitorTeam_avgGoals["2_5"].away;

      const teamsStats_05 = (await (avg_localTeam_05 + avg_visitorTeam_05)) / 2;
      const teamsStats_15 = (await (avg_localTeam_15 + avg_visitorTeam_15)) / 2;
      const teamsStats_25 = (await (avg_localTeam_25 + avg_visitorTeam_25)) / 2;

      const td_avg_league_05 = document.getElementById("avg_league_05");
      const td_avg_localTeam_05 = document.getElementById("avg_localTeam_05");
      const td_avg_visitorTeam_05 =
        document.getElementById("avg_visitorTeam_05");
      const td_avg_probability_05 =
        document.getElementById("avg_probability_05");

      const td_avg_league_15 = document.getElementById("avg_league_15");
      const td_avg_localTeam_15 = document.getElementById("avg_localTeam_15");
      const td_avg_visitorTeam_15 =
        document.getElementById("avg_visitorTeam_15");
      const td_avg_probability_15 =
        document.getElementById("avg_probability_15");

      const td_avg_league_25 = document.getElementById("avg_league_25");
      const td_avg_localTeam_25 = document.getElementById("avg_localTeam_25");
      const td_avg_visitorTeam_25 =
        document.getElementById("avg_visitorTeam_25");
      const td_avg_probability_25 =
        document.getElementById("avg_probability_25");

      modal_title.innerHTML = `
      ${item.starting_time.split(" ")[1]} - ${item.localTeam.name} X ${
        item.visitorTeam.name
      }`;

      //OVER 0.5 FT
      if (teamsStats_05 > avg_league_05) {
        td_avg_probability_05.classList.remove("pink");
        td_avg_probability_05.classList.add("green");
        // td_avg_probability_05.classList.add("green");
        td_avg_league_05.innerHTML = `${avg_league_05.toFixed(2)}%`;
        td_avg_localTeam_05.innerHTML = `${avg_localTeam_05.toFixed(2)}%`;
        td_avg_visitorTeam_05.innerHTML = `${avg_visitorTeam_05.toFixed(2)}%`;
        td_avg_probability_05.innerHTML = `${teamsStats_05.toFixed(2)}%`;
      } else {
        td_avg_probability_05.classList.remove("green");
        td_avg_probability_05.classList.add("pink");
        td_avg_league_05.innerHTML = `${avg_league_05.toFixed(2)}%`;
        td_avg_localTeam_05.innerHTML = `${avg_localTeam_05.toFixed(2)}%`;
        td_avg_visitorTeam_05.innerHTML = `${avg_visitorTeam_05.toFixed(2)}%`;
        td_avg_probability_05.innerHTML = `${teamsStats_05.toFixed(2)}%`;
      }

      //OVER 1.5 FT
      if (teamsStats_15 > avg_league_15) {
        td_avg_probability_15.classList.remove("pink");
        td_avg_probability_15.classList.add("green");
        td_avg_league_15.innerHTML = `${avg_league_15.toFixed(2)}%`;
        td_avg_localTeam_15.innerHTML = `${avg_localTeam_15.toFixed(2)}%`;
        td_avg_visitorTeam_15.innerHTML = `${avg_visitorTeam_15.toFixed(2)}%`;
        td_avg_probability_15.innerHTML = `${teamsStats_15.toFixed(2)}%`;
      } else {
        td_avg_probability_15.classList.remove("green");
        td_avg_probability_15.classList.add("pink");
        td_avg_league_15.innerHTML = `${avg_league_15.toFixed(2)}%`;
        td_avg_localTeam_15.innerHTML = `${avg_localTeam_15.toFixed(2)}%`;
        td_avg_visitorTeam_15.innerHTML = `${avg_visitorTeam_15.toFixed(2)}%`;
        td_avg_probability_15.innerHTML = `${teamsStats_15.toFixed(2)}%`;
      }

      //OVER 2.5 FT
      if (teamsStats_25 > avg_league_25) {
        td_avg_probability_25.classList.remove("pink");
        td_avg_probability_25.classList.add("green");
        td_avg_league_25.innerHTML = `${avg_league_25.toFixed(2)}%`;
        td_avg_localTeam_25.innerHTML = `${avg_localTeam_25.toFixed(2)}%`;
        td_avg_visitorTeam_25.innerHTML = `${avg_visitorTeam_25.toFixed(2)}%`;
        td_avg_probability_25.innerHTML = `${teamsStats_25.toFixed(2)}%`;
      } else {
        td_avg_probability_25.classList.remove("green");
        td_avg_probability_25.classList.add("pink");
        td_avg_league_25.innerHTML = `${avg_league_25.toFixed(2)}%`;
        td_avg_localTeam_25.innerHTML = `${avg_localTeam_25.toFixed(2)}%`;
        td_avg_visitorTeam_25.innerHTML = `${avg_visitorTeam_25.toFixed(2)}%`;
        td_avg_probability_25.innerHTML = `${teamsStats_25.toFixed(2)}%`;
      }
    });
  });
};

getAllGamesToday("2022-12-04");
