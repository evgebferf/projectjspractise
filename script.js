"use strict"
const numberOfFilms = prompt('сколько фильмов вы посмотрели?', '');

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

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

if (personalMovieDB.count < 10){
    console.log('malo');}
else if (personalMovieDB.count >= 10 && personalMovieDB.count <= 30){
    console.log('norm');}
else if (personalMovieDB.count > 30){
    console.log ('kinoman');}
else{
    console.log ('Error');}

console.log(personalMovieDB);

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

