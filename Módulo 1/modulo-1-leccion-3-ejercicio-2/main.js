'use strict';

//Traer elemento

const nameElement = document.querySelector('.js-nameE');
console.log(nameElement);
const spanResult = document.querySelector('.js-result');

//Operación

if (nameElement.innerHTML === "Teresa" || nameElement.innerHTML === "Cristina") {
    spanResult.innerHTML
        = `Bienvenida, ${nameElement.innerHTML}.`;}
else {
        spanResult.innerHTML
        = `Bienvenida, deconocida.`;
};
