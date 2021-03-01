'use strict';

// EJERCICIO 6

let aloneElement = document.querySelector('.js-alone');

aloneElement.innerHTML = "<h1></h1>"
aloneElement.innerHTML += '<img src="http://via.placeholder.com/350x150" alt="">';
aloneElement.innerHTML += '<p class="js-paragraph"></p>';

let paragraphElement = document.querySelector('.js-paragraph');

paragraphElement.innerHTML = "Lorem ipsum dolor sit amet, consectetur adipisicing elit."

// EJERCICIO 7

let listElement = document.querySelector('.js-list');

listElement.innerHTML = "<li>1</li><li>2</li><li>3</li>";

// EJERCICIO 8

const buttonElement1 = document.querySelector('.js-button1');
const buttonElement2 = document.querySelector('.js-button2');

buttonElement1.classList.add("hidden");