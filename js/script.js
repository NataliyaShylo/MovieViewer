"use strict";

let numberOfFilms;

function start() {
    numberOfFilms = +prompt("How many films have you already seen?", "");

    // While numberOfFilms not empty string or user click cancel or enter a string (isNaN return true)
    while (numberOfFilms == "" || numberOfFilms == null || isNaN(numberOfFilms)) {
        numberOfFilms = +prompt("How many films have you already seen?", "");
    }
}

function rememberMyFilm() {
    for (let i = 0; i < 2; i++) {
        const movie = prompt("What was the last film you have seen?", ""),
            rate = prompt("How are you rate it?", "");
        if (movie != "" && rate != "" && movie != null && rate != null && movie.length <= 50) {
            personalMovieDB.movies[movie] = rate;
            console.log("Save the answer");
        } else {
            console.log("Error. The entered data not valid");
            i--;
        }
    }
}

function detectPersonalLevel() {
    if (personalMovieDB.count < 10) {
        console.log("You have seen too few films");
    } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
        console.log("You are a classical viewer");
    } else if (personalMovieDB.count >= 30) {
        console.log("You are a movie fan");
    } else {
        console.log("A mistake happens");
    }
}

function showMyDB(hidden){
    if (!hidden){-
        console.log(personalMovieDB);
    }
}

function writeYourGenres(){
    for(let i = 0; i < 3; i++){
        personalMovieDB.genres[i] = prompt(`What is your favorite genre ${i+1}?`, "");
    }
}

start();
const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false,
};
rememberMyFilm();
detectPersonalLevel();
writeYourGenres();
showMyDB(personalMovieDB.privat);
