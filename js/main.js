
'use strict'
const personalMovieDB = {
	count: 0,
	movies: {},
	actors: {},
	genres: [],
	privat: false,
	start: function() {
		personalMovieDB.count = +prompt('How many movies have you been?', '')
		while(personalMovieDB.count == '' || personalMovieDB.count == null|| isNaN(personalMovieDB.count)) {
			personalMovieDB.count = +prompt('How many movies have you been?', '')
		}
	},
	rememberMyFilms: function() {
		for(let i = 0; i < 2; i++) {
			const a = prompt('One of the movies you saw?', '').trim(),
				b = prompt('The last movie you saw?')
		
			if(a != null && b != null && a != '' && b != '' && a.length < 50) {
				personalMovieDB.movies[a]= b
				console.log('done')
			} else {
				console.log('error')
				i--
			}
		}
	},
	detectPersonalLevel:function() {
		if (personalMovieDB.count < 10) {
			console.log('Watched a fairly small number of movies')
		}
		else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
			console.log('You a classic spectator')
		} else if (personalMovieDB.count >= 30) {
			console.log('You a movie buff')
		} else {
			console.log('There was an error')
		}
	},
	showMyDB:function (hidden) {
		if(!hidden) {
			console.log(personalMovieDB)
		}
	},
	toggleVisibleMyDB:function() {
		if (personalMovieDB.privat) {
			personalMovieDB.privat = false
		} else {
			personalMovieDB.privat = true
		}

	},
	writeYouGenres:function() {
		for (let i = 1; i <= 3; i++ ) {
			let genre = prompt(` Your favorite genre is numbered ${i}`)
			if(genre === '' || genre === null) {
				console.log('You have entered incorrect data or no data at all')
				i--
			} else {
				personalMovieDB.genres[i - 1] = genre
			}
		}
		personalMovieDB.genres.forEach((item, i) => {
			console.log(`Favorite genre ${i + 1} - this ${item} `)
		})
	},
}