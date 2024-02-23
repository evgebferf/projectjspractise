"use strict"
let numberOfFilms;

function start() {
    numberOfFilms = +prompt('сколько фильмов вы посмотрели?', '');

    while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
        numberOfFilms = +prompt('сколько фильмов вы посмотрели?', '');
    }
}

start();

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};


function rememberMyFilms() {
    for (let i = 0; i < 2; i++){
        const a = prompt('Один из фильмов?'),
              b = prompt ('Рейтинг?');
        if ( a != null && b != null && a != '' && b != '' && a.length < 50){
        personalMovieDB.movies[a] = b;
        console.log ('Done');
        } else {
            console.log('Error');
            i--;
        }
    };
}

rememberMyFilms();

function detectPersonalLevel() {
    if (personalMovieDB.count < 10){
        console.log('malo');}
    else if (personalMovieDB.count >= 10 && personalMovieDB.count <= 30){
        console.log('norm');}
    else if (personalMovieDB.count > 30){
        console.log ('kinoman');}
    else{
        console.log ('Error');
    }
}

detectPersonalLevel()

function showMyDB(hidden) {
    if (!hidden){
        console.log(personalMovieDB)
    }
}
showMyDB(personalMovieDB.privat);

function writeYourGenres(genre) {
    for (let i = 1; i<=3; i++){
        genre[i - 1] = prompt(`Ваш любимый жанр под номером ${i}`);
    }
}

writeYourGenres(personalMovieDB.genres);


// console.log(personalMovieDB);

// let j = 0;
// let result = '';
// for (let i = 1; i < 7; i++){
//     while ( j < i ){
//         result += "*";
//         j++;
//     }
//     result += "\n";
//     j = 0;
// };
// console.log( result );

// const str = "Hello world";
// console.log(str.slice(-6,1));


