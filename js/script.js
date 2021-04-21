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
        "Скотт Пилигрим против..."
    ]
};

// 1)
const advImg = document.querySelectorAll('.promo__adv img'),
      advName = document.getElementsByClassName('promo__adv-title');

advImg.forEach(function (item) {
    item.remove()
});
advName[0].remove();

// 2)
const promoImg = document.querySelector('.promo__bg'),
      promoText = promoImg.querySelector('.promo__genre');

promoText.textContent = 'драма';
//3)
promoImg.style.backgroundImage = 'url("img/bg.jpg")';
//4 & 5)

const uls = document.querySelector('.promo__interactive-list'),
    sortedMovies = movieDB.movies.sort();

uls.innerHTML = ''
sortedMovies.forEach(function (film, number){
    uls.innerHTML += `<li class="promo__interactive-item">${number+1}. ${film}<div class="delete"></div></li>`
});

// урок 033_____________

// 1 и 2
const btn = document.querySelector('button'),
    chekArea = btn.previousElementSibling.previousElementSibling;
let inputArea = document.getElementsByClassName('adding__input');

inputArea = inputArea[0];
btn.addEventListener('click', (e) =>{
    e.preventDefault();
    let areaValue = inputArea.value[0].toUpperCase() + inputArea.value.slice(1, inputArea.value.length).toLowerCase()

    if (areaValue === '') {
        alert('Вы ввели пустую строку!')
    } else {
        if (areaValue.length > 21) {
        movieDB.movies.push(`${areaValue.slice(0,3)}...`)
    } else {
        movieDB.movies.push(areaValue);
    }
        uls.innerHTML = ''


        movieDB.movies.sort().forEach(function (film, number){
            uls.innerHTML += `<li class="promo__interactive-item">${number+1}. ${film}<div class="delete"></div></li>`
        });

        // uls.innerHTML += `<li class="promo__interactive-item">${movieDB.movies.length}. ${movieDB.movies[movieDB.movies.length-1]}<div class="delete"></div></li>`
        if (chekArea.checked === true) {
            console.log('Добавляем фильм в любимые')
    }}
})




