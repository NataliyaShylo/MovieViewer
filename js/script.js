/* Задания на урок:

1) Удалить все рекламные блоки со страницы (правая часть сайта)

2) Изменить жанр фильма, поменять "комедия" на "драма"

3) Изменить задний фон постера с фильмом на изображение "bg.jpg". Оно лежит в папке img.
Реализовать только при помощи JS

4) Список фильмов на странице сформировать на основании данных из этого JS файла.
Отсортировать их по алфавиту 

5) Добавить нумерацию выведенных фильмов */

'use strict';

const movieDB = {
    movies: [
        "Логан",
        "Лига справедливости",
        "Ла-ла лэнд",
        "Одержимость",
        "Скотт Пилигрим против...",
        "Назад в будущее"
    ]
};

const divPromo = document.getElementsByClassName("promo__adv");
divPromo[0].remove();

const genre = document.querySelector(".promo__genre");
genre.textContent = "Drama";

const poster = document.querySelector(".promo__bg");
poster.style.backgroundImage = "url(img/bg.jpg)";

const movieList = document.querySelector(".promo__interactive-list");
movieList.innerHTML = "";
movieDB.movies.sort();

movieDB.movies.forEach((film, i) => {
    movieList.innerHTML += `
        <li class="promo__interactive-item">${i + 1} ${film}
            <div class="delete"></div>
        </li>
    `;
});

// const movieList = document.getElementsByClassName("promo__interactive-item");
// let movieArr = [];
// for (let i = 0; i < movieList.length; i++){
//     movieArr.push(movieList[i].innerHTML);
// }

// for (let key of movieDB.movies){
//     let isInList = -1;
//     movieArr.forEach((item, index) => {
//         if (item.indexOf(key.toUpperCase()) !== -1){
//             isInList = index;
//         }
//     });

//     if (isInList === -1){
//         const list = document.querySelector(".promo__interactive-list");
//         const li = document.createElement('li');
//         li.classList.add("promo__interactive-item");
//         li.textContent = key;
//         list.append(li);
//     }
// }

// const movieListUpd = document.getElementsByClassName("promo__interactive-item");
// movieArr.length = 0;
// for (let i = 0; i < movieListUpd.length; i++){
//     movieArr.push(movieListUpd[i].innerHTML);
// }
// movieArr.sort();

// const list = document.querySelector(".promo__interactive-list");
// list.innerHTML = "";

// movieArr.forEach((item, index) => {
//     const list = document.querySelector(".promo__interactive-list");
//     const li = document.createElement('li');
//     li.classList.add("promo__interactive-item");
//     li.innerHTML = `${index+1} ${item} <div class='delete'></div>`;
//     list.append(li);
// });
