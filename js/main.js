$(document).ready(function() {
	$("#atleticommatches").click(function(event) {
		const atleticommatchesurl = 'https://api.football-data.org/v2/teams/78/matches?status=SCHEDULED';
		$.ajax({
			headers: { 'X-Auth-Token': '6b89a387b385470d833ab3b614a5eb67' },
			url: atleticommatchesurl,
			dataType: 'text',
			type: 'GET',
			success: function(data, textStatus, jqXHR) {
				let atleticom = JSON.parse(data);
				$("#fixtures").empty();
				$("#fixtures").append('<p>Atletico Madrid next ' + atleticom.count + ' upcoming matches</p>');
				for (var i = 0; i < atleticom.matches.length; i++) {
					let localMatchTime = new Date(atleticom.matches[i].utcDate);
					$("#fixtures").append('<p class="matchtimes">On ' + localMatchTime.toString() + ' for <span class="competition">' + atleticom.matches[i].competition.name + '</span></p>');

					// take the ids of both teams to check if our team
					// is playing home or away, and accordingly colorize
					// the name
					let homeTeam = atleticom.matches[i].homeTeam.id;
					let awayTeam = atleticom.matches[i].awayTeam.id;
					if (homeTeam == 78) { // 78 == Atletico Madrid
						$("#fixtures").append('<p class="matchname"><span id="atleticom">' + atleticom.matches[i].homeTeam.name + '</span> vs ' + atleticom.matches[i].awayTeam.name + '</p>');
					} else {
						$("#fixtures").append('<p class="matchname">' + atleticom.matches[i].homeTeam.name + ' vs <span id="atleticom">' + atleticom.matches[i].awayTeam.name + '</span></p>');
					};
				}
			},
		});
	});
	$("#chelseamatches").click(function(event) {
		const chelseamatchesurl = 'https://api.football-data.org/v2/teams/61/matches?status=SCHEDULED';
		$.ajax({
			headers: { 'X-Auth-Token': '6b89a387b385470d833ab3b614a5eb67' },
			url: chelseamatchesurl,
			dataType: 'text',
			type: 'GET',
			success: function(data, textStatus, jqXHR) {
				let chelsea = JSON.parse(data);
				$("#fixtures").empty();
				$("#fixtures").append('<p>Chelsea next ' + chelsea.count + ' upcoming matches</p>');
				for (var i = 0; i < chelsea.matches.length; i++) {
					let localMatchTime = new Date(chelsea.matches[i].utcDate);
					$("#fixtures").append('<p class="matchtimes">On ' + localMatchTime.toString() + ' for <span class="competition">' + chelsea.matches[i].competition.name + '</span></p>');
					// take the ids of both teams to check if our team
					// is playing home or away, and accordingly colorize
					// the name
					let homeTeam = chelsea.matches[i].homeTeam.id;
					let awayTeam = chelsea.matches[i].awayTeam.id;
					if (homeTeam == 61) { // 61 == Chelsea
						$("#fixtures").append('<p class="matchname"><span id="chelsea">' + chelsea.matches[i].homeTeam.name + '</span> vs ' + chelsea.matches[i].awayTeam.name + '</p>');
					} else {
						$("#fixtures").append('<p class="matchname">' + chelsea.matches[i].homeTeam.name + ' vs <span id="chelsea">' + chelsea.matches[i].awayTeam.name + '</span></p>');
					};
				}
			},
		});
	});
	$("#liverpoolmatches").click(function(event) {
		const liverpoolmatchesurl = 'https://api.football-data.org/v2/teams/64/matches?status=SCHEDULED';
		$.ajax({
			headers: { 'X-Auth-Token': '6b89a387b385470d833ab3b614a5eb67' },
			url: liverpoolmatchesurl,
			dataType: 'text',
			type: 'GET',
			success: function(data, textStatus, jqXHR) {
				let liverpool = JSON.parse(data);
				$("#fixtures").empty();
				$("#fixtures").append('<p>Liverpool next ' + liverpool.count + ' upcoming matches</p>');
				for (var i = 0; i < liverpool.matches.length; i++) {
					let localMatchTime = new Date(liverpool.matches[i].utcDate);
					$("#fixtures").append('<p class="matchtimes">On ' + localMatchTime.toString() + ' for <span class="competition">' + liverpool.matches[i].competition.name + '</span></p>')
					// take the ids of both teams to check if our team 
					// is playing home or away, and accordingly colorize 
					// the name
					let homeTeam = liverpool.matches[i].homeTeam.id;
					let awayTeam = liverpool.matches[i].awayTeam.id;
					if (homeTeam == 64) { // 64 == Liverpool
						$("#fixtures").append('<p class="matchname"><span id="liverpool">' + liverpool.matches[i].homeTeam.name + '</span> vs ' + liverpool.matches[i].awayTeam.name + '</p>');
					} else {
						$("#fixtures").append('<p class="matchname">' + liverpool.matches[i].homeTeam.name + ' vs <span id="liverpool">' + liverpool.matches[i].awayTeam.name + '</span></p>');
					};
				}
			},
		});
	});
	$("#napolimatches").click(function(event) {
		const napolimatchesurl = 'https://api.football-data.org/v2/teams/113/matches?status=SCHEDULED';
		$.ajax({
			headers: { 'X-Auth-Token': '6b89a387b385470d833ab3b614a5eb67' },
			url: napolimatchesurl,
			dataType: 'text',
			type: 'GET',
			success: function(data, textStatus, jqXHR) {
				let napoli = JSON.parse(data);
				$("#fixtures").empty();
				$("#fixtures").append('<p>Napoli next ' + napoli.count + ' upcoming matches</p>');
				for (var i = 0; i < napoli.matches.length; i++) {
					let localMatchTime = new Date(napoli.matches[i].utcDate);
					$("#fixtures").append('<p class="matchtimes">On ' + localMatchTime.toString() + ' for <span class="competition">' + napoli.matches[i].competition.name + '</span></p>');
					// take the ids of both teams to check if our team 
					// is playing home or away, and accordingly colorize 
					// the name
					let homeTeam = napoli.matches[i].homeTeam.id;
					let awayTeam = napoli.matches[i].awayTeam.id;
					if (homeTeam == 113) { // 113 == Napoli
						$("#fixtures").append('<p class="matchname"><span id="napoli">' + napoli.matches[i].homeTeam.name + '</span> vs ' + napoli.matches[i].awayTeam.name + '</p>');
					} else {
						$("#fixtures").append('<p class="matchname">' + napoli.matches[i].homeTeam.name + ' vs <span id="napoli">' + napoli.matches[i].awayTeam.name + '</span></p>');
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
