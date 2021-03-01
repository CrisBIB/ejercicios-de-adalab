'use strict';

// EJERCICIO 1

const myNum1 = 5;

const myNum2 = 7;

const result = myNum1 + myNum2;

console.log(result);

// EJERCICIO 2

let superWave = document.querySelector('.super-wave');

superWave.classList.add('js-newClass');

console.log(superWave);

// EJERCICIO 3

const kiwi = 5;
const pears = 2;
const graves = 4;

const totalQuantities = "Los kiwis me han costado " + (kiwi * 2) + "€, las peras me han costado " + (pears * 3) + "€ y las uvas me han costado " + (graves * 0.5) + "€.";

const totalAmount = "En total he pagado " + ((kiwi * 2) + (pears * 3) + (graves * 0.5)) + "€.";

console.log(totalQuantities);

console.log(totalAmount);

// EJERCICIO 6

const name = 'Cristina';
const surname = 'Blanco';

console.log(`My name is ${name} ${surname}.`);

// EJERCICIO 7

const element = document.querySelector('#element');
const textToShow = 'Hey, this is important.';

// ES5
element.innerHTML = '\
<div class="popup">\
  <span>' + textToShow + '</span>\
</div>';

// ES6
element.innerHTML = `
<div class="popup">
  <span>${textToShow}</span>
</div>`;

// Typeof

let text = '¿De qué tipo soy?'
console.log(text + ' es del tipo ' + typeof(text))
text = 123
console.log('ahora ' + text + ' es del tipo ' + typeof(text))
text = undefined
console.log('y ahora ' + text + ' es del tipo ' + typeof(text))