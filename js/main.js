$(document).ready(function() {
	$(".teammatches").click(function(event) {
		// declare variables needed to differentiate the AJAX request
		// according to which team matches were requested
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
	$(".leaguerequests").click(function(event) {
		// declare variables needed to differentiate the AJAX request
		// according to which league standings was requested
		let leagueurl, leagueName
		if (event.target.id == 'ligarequest') {
			leagueurl = 'https://api.football-data.org/v2/competitions/PD/standings';
			leagueName = 'Liga';
		} else if (event.target.id == 'plrequest') {
			leagueurl = 'https://api.football-data.org/v2/competitions/PL/standings';
			leagueName = 'Premier League';
		} else if (event.target.id == 'bundesligarequest') {
			leagueurl = 'https://api.football-data.org/v2/competitions/BL1/standings';
			leagueName = 'Bundesliga';
		} else if (event.target.id == 'seriearequest') {
			leagueurl = 'https://api.football-data.org/v2/competitions/SA/standings';
			leagueName = 'Serie A';
		} else {
			return 1
		};
		$.ajax({
			headers: { 'X-Auth-Token': '6b89a387b385470d833ab3b614a5eb67' },
			url: leagueurl,
			dataType: 'text',
			type: 'GET',
			success: function(data, textStatus, jqXHR) {
				let parsedData = JSON.parse(data);
				let localStandingsUpdated = new Date(parsedData.competition.lastUpdated);
				let tableStructure = []; // array to contain the standings' table
				// Header of the standings' table
				let tableHeader = '<thead class="thead-dark"><tr><th scope="col">Team</th><th scope="col" class="text-right">Games</th><th scope="col" class="text-right">Won</th><th scope="col" class="text-right">Drawn</th><th scope="col" class="text-right">Lost</th><th scope="col" class="text-right">Points</th></tr></thead><tbody>';

				$("#standings").empty();
				$("#standings").append('<p>' + leagueName + ' standings as of ' + localStandingsUpdated.toString() + '</p>');

				// push into array the initial <table> tag and then the
				// header
				tableStructure.push('<table class="table table-hover">', tableHeader);
				// for loop to push into array each team's data
				for (var j = 0; j < parsedData.standings[0].table.length; j++) {
					let currentTeam = parsedData.standings[0].table[j];
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
	$("#championsrequest").click(function(event) {
		// Champions' League specific standings request
		let leagueurl, leagueName
		leagueurl = 'https://api.football-data.org/v2/competitions/CL/standings';
		leagueName = "UEFA Champions' League";
		$.ajax({
			headers: { 'X-Auth-Token': '6b89a387b385470d833ab3b614a5eb67' },
			url: leagueurl,
			dataType: 'text',
			type: 'GET',
			success: function(data, textStatus, jqXHR) {
				let parsedData = JSON.parse(data);
				let localStandingsUpdated = new Date(parsedData.competition.lastUpdated);
				let tableStructure = []; // array to contain the standings' table
				// Header of the standings' table
				let tableHeader = '<thead class="thead-dark"><tr><th scope="col">Team</th><th scope="col" class="text-right">Games</th><th scope="col" class="text-right">Won</th><th scope="col" class="text-right">Drawn</th><th scope="col" class="text-right">Lost</th><th scope="col" class="text-right">Points</th></tr></thead><tbody>';

				$("#standings").empty();
				$("#standings").append('<p>' + leagueName + ' standings as of ' + localStandingsUpdated.toString() + '</p>');

				// push into array the initial <table> tag and then the
				// header
				tableStructure.push('<table class="table table-hover">', tableHeader);
				// for loop to push into array each team's data
				for (var j = 0; j < parsedData.standings.length; j++) {
					if (parsedData.standings[j].type == "TOTAL") { // we want only the total standings, not home or away only
						for (var t = 0; t < 4; t++) { // 4 teams per group
							let currentTeam = parsedData.standings[j].table[t];
							tableStructure.push('<tr><th scope="row">' + currentTeam.team.name + '</th><td>' + currentTeam.playedGames + '</td><td>' + currentTeam.won + '</td><td>' + currentTeam.draw + '</td><td>' + currentTeam.lost + '</td><td>' + currentTeam.points + '</td></tr>');
						};
						// Group H is the last one, don't add a table
						// header after the standings of it
						if (parsedData.standings[j].group !== 'GROUP_H') {
							tableStructure.push('<table class="table table-hover">', tableHeader);
						};
					};
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

