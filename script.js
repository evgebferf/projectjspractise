"use strict"
const numberOfFilms = +prompt('сколько', '');

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

const a = prompt('one of the films'),
      b = prompt('what is it rating?'),
      c= prompt('one of the films'),
      d = prompt('what is it rating?');

personalMovieDB.movies[a] = b;
personalMovieDB.movies[c] = d;

console.log(personalMovieDB);

