	
	
	function getAllFilms(){
		let xmlHttp = new XMLHttpRequest();
		xmlHttp.open("Get", "http://localhost:8080/api/film",false);
		xmlHttp.send(null);
		
		let jsonString = xmlHttp.responseText;
		films = JSON.parse(jsonString);
		
		for (i=0; i<films.length; i++){
			document.write("Film ID: " + films[i].filmId + "; Title: " + films[i].filmTitle + "; Description: " + films[i].filmDescription 
			+ "; Release Year: " + films[i].releaseYear + "; Length: " + films[i].filmLength + "; Ratings: " + films[i].filmRating + "<br>" + "<br>");
				
		}
	}
		
	function searchAllFilms(){
		let xmlHttp = new XMLHttpRequest();
		xmlHttp.open("Get", "http://localhost:8080/api/film",false);
		xmlHttp.send(null);
		
		let jsonString = xmlHttp.responseText;
		films = JSON.parse(jsonString);
		//button id link to user input
		let userText = document.getElementById("searching").value;
		let capsText = userText.toUpperCase();
		for(let i = 0; i < films.length; i++){
			if (String(films[i].filmTitle).includes(capsText)){
				document.write(films[i].filmTitle + "<br>");
			}
			else if (String(films[i].filmId) == (userText)){
				document.write("Film ID: " + films[i].filmId + "; Title: " + films[i].filmTitle + "; Description: " + films[i].filmDescription 
			+ "; Release Year: " + films[i].releaseYear + "; Length: " + films[i].filmLength + "; Ratings: " + films[i].filmRating + "<br>" + "<br>");
			}
			else if (String(films[i].filmLength) == (userText)){
				document.write("Film ID: " + films[i].filmId+ "; Title: " + films[i].filmTitle + "; Description: " + films[i].filmDescription 
			+ "; Release Year: " + films[i].releaseYear + "; Length: " + films[i].filmLength + "; Ratings: " + films[i].filmRating + "<br>" + "<br>");
			}
		}
	}
	function searchByLength(){
		let xmlHttp = new XMLHttpRequest();
		xmlHttp.open("Get", "http://localhost:8080/api/film",false);
		xmlHttp.send(null);
		
		let jsonString = xmlHttp.responseText;
		films = JSON.parse(jsonString);
		//button id link to user input
		let userText = document.getElementById("searching").value;
		let capsText = userText.toUpperCase();
		for(let i = 0; i < films.length; i++){
			if (String(films[i].filmLength) == (userText)){
				document.write("Film ID: " + films[i].filmId+ "; Title: " + films[i].filmTitle + "; Description: " + films[i].filmDescription 
			+ "; Release Year: " + films[i].releaseYear + "; Length: " + films[i].filmLength + "; Ratings: " + films[i].filmRating + "<br>" + "<br>");
			}
		}
	}
		