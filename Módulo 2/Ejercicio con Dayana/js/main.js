'use strict';

//Traigo elementos y los convierto en variables
const ageElement = document.querySelector('.js-age');
const buttonElement = document.querySelector('.js-button');
let messageElement = document.querySelector('.js-message');
let listElement = document.querySelector('.js-list');

function handleAgeGroup(ev) {
    console.log(ev.currentTarget);
    console.log(ev.target);
    const ageUser = ageElement.value;
    if (ageUser <= 25 && ageUser > 0) {
        messageElement.innerHTML = "Estás en el grupo de edad: joven."; 
    }
    else if (ageUser > 25 && ageUser <= 60) {
        messageElement.innerHTML = "Estás en el grupo de edad: adulto"
    }
    else if (ageUser > 60 && ageUser <= 110) {
        messageElement.innerHTML = "Estás en el grupo de edad: adulto mayor"
    }
    else {
        messageElement.innerHTML = "Esta edad es incorrecta"
    }
}

buttonElement.addEventListener('click', handleAgeGroup);

ageElement.addEventListener('keyup', handleAgeGroup);

function smallOne(ev) {
    console.log(ev.currentTarget);
    console.log(ev.target);
}

listElement.addEventListener('click', smallOne);

