
const numberOfFilms = +prompt('How many movies have you been?', '')
const personalMovieDB = {
	count: numberOfFilms,
	movies: {},
	actors: {},
	genres: [],
	privat: false
}

for(let i = 0; i < 2; i++) {
	const a = prompt('One of the movies you saw?', ''),
		b = prompt('The last movie you saw?')

	if(a != null && b != null && a != '' && b != '' && a.length < 50) {
		personalMovieDB.movies[a]= b
		console.log('done')
	} else {
		console.log('error')
		i--
	}
}

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

console.log(personalMovieDB)





