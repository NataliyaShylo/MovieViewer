"use strict";

const numberOfFilms = +prompt("How many films have you already seen?", "");
const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false,
};
const movie1 = prompt("What was the fast film you have seen?", ""),
      rate1 = prompt("How are you rate it?", ""),
      movie2 = prompt("What was the fast film you have seen?", ""),
      rate2 = prompt("How are you rate it?", "");

personalMovieDB.movies[movie1] = rate1;
personalMovieDB.movies[movie2] = rate2;

console.log(personalMovieDB);