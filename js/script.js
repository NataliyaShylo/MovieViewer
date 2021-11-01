"use strict";

const numberOfFilms = +prompt("How many films have you already seen?", "");
const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false,
};
let movie, rate;
for (let i = 0; i < 2; i++){
        movie = prompt("What was the last film you have seen?", "");
        rate = prompt("How are you rate it?", "");
        if (movie != "" && rate != "" && movie != null && rate != null && movie.length <= 50) {
            personalMovieDB.movies[movie] = rate;
            console.log("Save the answer");
        } else {
            console.log("Error. The entered data not valid");
            i--;
        }
}
if (personalMovieDB.count < 10) {
    console.log("You have seen too few films");
} else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
    console.log("You are a classical viewer");
} else if (personalMovieDB.count >= 30) {
    console.log("You are a movie fan");
} else {
    console.log("A mistake happens");
}
console.log(personalMovieDB);
