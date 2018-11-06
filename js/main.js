$(document).ready(function() {
	$(".teammatches").click(function(event) {
/*	$("#atleticommatches").click(function(event) { */
		let teamurl, teamName, teamId
		if (event.target.id == 'atleticommatches') {
			teamurl = 'https://api.football-data.org/v2/teams/78/matches?status=SCHEDULED';
			teamName = 'Atletico Madrid';
			teamSpanId = 'atleticom';
			teamId = 78;
		} else if (event.target.id == 'liverpoolmatches') {
			teamurl = 'https://api.football-data.org/v2/teams/64/matches?status=SCHEDULED';
			teamName = 'Liverpool';
			teamSpanId = 'liverpool';
			teamId = 64;
		} else if (event.target.id == 'chelseamatches') {
			teamurl = 'https://api.football-data.org/v2/teams/61/matches?status=SCHEDULED';
			teamName = 'Chelsea';
			teamSpanId = 'chelsea';
			teamId = 61;
		} else if (event.target.id == 'napolimatches') {
			teamurl = 'https://api.football-data.org/v2/teams/113/matches?status=SCHEDULED';
			teamName = 'Napoli';
			teamSpanId = 'napoli';
			teamId = 113;
		} else {
			return 1;
		};
		$.ajax({
			headers: { 'X-Auth-Token': '6b89a387b385470d833ab3b614a5eb67' },
			url: teamurl,
			dataType: 'text',
			type: 'GET',
			success: function(data, textStatus, jqXHR) {
				let parsedData = JSON.parse(data);
				$("#fixtures").empty();
				$("#fixtures").append('<p>' + teamName + ' next ' + parsedData.count + ' upcoming matches</p>');
				for (var i = 0; i < parsedData.matches.length; i++) {
					let localMatchTime = new Date(parsedData.matches[i].utcDate);
					$("#fixtures").append('<p class="matchtimes">On ' + localMatchTime.toString() + ' for <span class="competition">' + parsedData.matches[i].competition.name + '</span></p>');

					// take the ids of both teams to check if our team
					// is playing home or away, and accordingly colorize
					// the name
					let homeTeam = parsedData.matches[i].homeTeam.id;
					let awayTeam = parsedData.matches[i].awayTeam.id;
					if (homeTeam == teamId) {
						$("#fixtures").append('<p class="matchname"><span id="' + teamSpanId + '">' + parsedData.matches[i].homeTeam.name + '</span> vs ' + parsedData.matches[i].awayTeam.name + '</p>');
					} else {
						$("#fixtures").append('<p class="matchname">' + parsedData.matches[i].homeTeam.name + ' vs <span id="' + teamSpanId + '">' + parsedData.matches[i].awayTeam.name + '</span></p>');
					};
				}
			},
		});
	});
	$("#resetbtn").click(function(event) {
		$("#fixtures").html(" ");
		$("#standings").html(" ");
	});
	$("#ligarequest").click(function(event) {
		const ligaurl = 'https://api.football-data.org/v2/competitions/PD/standings';
		$.ajax({
			headers: { 'X-Auth-Token': '6b89a387b385470d833ab3b614a5eb67' },
			url: ligaurl,
			dataType: 'text',
			type: 'GET',
			success: function(data, textStatus, jqXHR) {
				let liga = JSON.parse(data);
				let localStandingsUpdated = new Date(liga.competition.lastUpdated);
				let tableStructure = []; // array to contain the standings' table
				// Header of the standings' table
				let tableHeader = '<thead class="thead-dark"><tr><th scope="col">Team</th><th scope="col">Games</th><th scope="col">Won</th><th scope="col">Drawn</th><th scope="col">Lost</th><th scope="col">Points</th></tr></thead><tbody>';

				$("#standings").empty();
				$("#standings").append('<p>Liga standings as of ' + localStandingsUpdated.toString() + '</p>');

				// push into array the initial <table> tag and then the
				// header
				tableStructure.push('<table class="table table-hover">', tableHeader);
				// for loop to push into array each team's data
				for (var j = 0; j < liga.standings[0].table.length; j++) {
					let currentTeam = liga.standings[0].table[j];
					tableStructure.push('<tr><th scope="row">' + currentTeam.team.name + '</th><td>' + currentTeam.playedGames + '</td><td>' + currentTeam.won + '</td><td>' + currentTeam.draw + '</td><td>' + currentTeam.lost + '</td><td>' + currentTeam.points + '</td></tr>');
				};
				// close <tbody> and <table> by pushing them as last
				// elements of array
				tableStructure.push('</tbody></table>');
				// finally, append standings' table to DOM
				$("#standings").append(tableStructure.join(''));
			},
		});
	});
	$("#plrequest").click(function(event) {
		const plurl = 'https://api.football-data.org/v2/competitions/PL/standings';
		$.ajax({
			headers: { 'X-Auth-Token': '6b89a387b385470d833ab3b614a5eb67' },
			url: plurl,
			dataType: 'text',
			type: 'GET',
			success: function(data, textStatus, jqXHR) {
				let pl = JSON.parse(data);
				let localStandingsUpdated = new Date(pl.competition.lastUpdated);
				let tableStructure = []; // array to contain the standings' table
				// Header of the standings' table
				let tableHeader = '<thead class="thead-dark"><tr><th scope="col">Team</th><th scope="col">Games</th><th scope="col">Won</th><th scope="col">Drawn</th><th scope="col">Lost</th><th scope="col">Points</th></tr></thead><tbody>';

				$("#standings").empty();
				$("#standings").append('<p>Premier League standings as of ' + localStandingsUpdated.toString() + '</p>');

				// push into array the initial <table> tag and then the
				// header
				tableStructure.push('<table class="table table-hover">', tableHeader);
				// for loop to push into array each team's data
				for (var j = 0; j < pl.standings[0].table.length; j++) {
					let currentTeam = pl.standings[0].table[j];
					tableStructure.push('<tr><th scope="row">' + currentTeam.team.name + '</th><td>' + currentTeam.playedGames + '</td><td>' + currentTeam.won + '</td><td>' + currentTeam.draw + '</td><td>' + currentTeam.lost + '</td><td>' + currentTeam.points + '</td></tr>');
				};
				// close <tbody> and <table> by pushing them as last
				// elements of array
				tableStructure.push('</tbody></table>');
				// finally, append standings' table to DOM
				$("#standings").append(tableStructure.join(''));
			},
		});
	});
	$("#bundesligarequest").click(function(event) {
		const bundesligaurl = 'https://api.football-data.org/v2/competitions/BL1/standings';
		$.ajax({
			headers: { 'X-Auth-Token': '6b89a387b385470d833ab3b614a5eb67' },
			url: bundesligaurl,
			dataType: 'text',
			type: 'GET',
			success: function(data, textStatus, jqXHR) {
				let bundesliga = JSON.parse(data);
				let localStandingsUpdated = new Date(bundesliga.competition.lastUpdated);
				let tableStructure = []; // array to contain the standings' table
				// Header of the standings' table
				let tableHeader = '<thead class="thead-dark"><tr><th scope="col">Team</th><th scope="col">Games</th><th scope="col">Won</th><th scope="col">Drawn</th><th scope="col">Lost</th><th scope="col">Points</th></tr></thead><tbody>';

				$("#standings").empty();
				$("#standings").append('<p>Bundesliga standings as of ' + localStandingsUpdated.toString() + '</p>');

				// push into array the initial <table> tag and then the
				// header
				tableStructure.push('<table class="table table-hover">', tableHeader);
				// for loop to push into array each team's data
				for (var j = 0; j < bundesliga.standings[0].table.length; j++) {
					let currentTeam = bundesliga.standings[0].table[j];
					tableStructure.push('<tr><th scope="row">' + currentTeam.team.name + '</th><td>' + currentTeam.playedGames + '</td><td>' + currentTeam.won + '</td><td>' + currentTeam.draw + '</td><td>' + currentTeam.lost + '</td><td>' + currentTeam.points + '</td></tr>');
				};
				// close <tbody> and <table> by pushing them as last
				// elements of array
				tableStructure.push('</tbody></table>');
				// finally, append standings' table to DOM
				$("#standings").append(tableStructure.join(''));
			},
		});
	});
	$("#seriearequest").click(function(event) {
		const serieaurl = 'https://api.football-data.org/v2/competitions/SA/standings';
		$.ajax({
			headers: { 'X-Auth-Token': '6b89a387b385470d833ab3b614a5eb67' },
			url: serieaurl,
			dataType: 'text',
			type: 'GET',
			success: function(data, textStatus, jqXHR) {
				let seriea = JSON.parse(data);
				let localStandingsUpdated = new Date(seriea.competition.lastUpdated);
				let tableStructure = []; // array to contain the standings' table
				// Header of the standings' table
				let tableHeader = '<thead class="thead-dark"><tr><th scope="col">Team</th><th scope="col">Games</th><th scope="col">Won</th><th scope="col">Drawn</th><th scope="col">Lost</th><th scope="col">Points</th></tr></thead><tbody>';

				$("#standings").empty();
				$("#standings").append('<p>Serie A standings as of ' + localStandingsUpdated.toString() + '</p>');

				// push into array the initial <table> tag and then the
				// header
				tableStructure.push('<table class="table table-hover">', tableHeader);
				// for loop to push into array each team's data
				for (var j = 0; j < seriea.standings[0].table.length; j++) {
					let currentTeam = seriea.standings[0].table[j];
					tableStructure.push('<tr><th scope="row">' + currentTeam.team.name + '</th><td>' + currentTeam.playedGames + '</td><td>' + currentTeam.won + '</td><td>' + currentTeam.draw + '</td><td>' + currentTeam.lost + '</td><td>' + currentTeam.points + '</td></tr>');
				};
				// close <tbody> and <table> by pushing them as last
				// elements of array
				tableStructure.push('</tbody></table>');
				// finally, append standings' table to DOM
				$("#standings").append(tableStructure.join(''));
			},
		});
	});
});

