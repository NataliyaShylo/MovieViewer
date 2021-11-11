"use strict";

const personalMovieDB = {
    count: 0,
    movies: {},
    actors: {},
    genres: [],
    privat: false,
    start: () => {
        personalMovieDB.count = +prompt("How many films have you already seen?", "");

        // While personalMovieDB.count not empty string or user click cancel or enter a string (isNaN return true)
        while (personalMovieDB.count == "" || personalMovieDB.count == null || isNaN(personalMovieDB.count)) {
            personalMovieDB.count = +prompt("How many films have you already seen?", "");
        }
        personalMovieDB.count = personalMovieDB.count;
    },
    rememberMyFilm: function () {
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
    },
    detectPersonalLevel: function () {
        if (personalMovieDB.count < 10) {
            console.log("You have seen too few films");
        } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
            console.log("You are a classical viewer");
        } else if (personalMovieDB.count >= 30) {
            console.log("You are a movie fan");
        } else {
            console.log("A mistake happens");
        }
    },
    writeYourGenres: function () {
        let genres;
        // for(let i = 0; i < 3; i++){
        //     genre = prompt(`What is your favorite genre ${i+1}?`, "");
        //     if (genre != "" && genre != null) {
        //         personalMovieDB.genres[i] = genre;
        //     } else {
        //         console.log("Error. The entered data not valid");
        //         i--;
        //     }
        // }
        for (let i = 0; i < 2; i++) {
            genres = prompt("Enter your favourite genres by a comma:", "").toLowerCase();
            if (genres != "" && genres != null) {
                personalMovieDB.genres = genres.split(", ");
                personalMovieDB.genres.sort();
            } else {
                console.log("Error. The entered data not valid");
                i--;
            }
        }
        personalMovieDB.genres.forEach((item, index) => {
            console.log(`My favorite genre ${index + 1} is ${item}`);
        });
    },
    toggleVisibleMyDB: function () {
        if (personalMovieDB.privat) {
            personalMovieDB.privat = false;
        } else {
            personalMovieDB.privat = true;
        }
    },
    showMyDB: function (hidden) {
        if (!hidden) {
            console.log(personalMovieDB);
        }
    }
};

// personalMovieDB.start();
// personalMovieDB.rememberMyFilm();
// personalMovieDB.detectPersonalLevel();
// personalMovieDB.writeYourGenres();
// //personalMovieDB.toggleVisibleMyDB();
// personalMovieDB.showMyDB(personalMovieDB.privat);
