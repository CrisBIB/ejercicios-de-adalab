'use strict';

// EJERCICIO 2

//Opción 1
document.querySelector('h1').innerHTML = 'Esta página no es compatible con la versión actual de tu navegador. Por favor actualízalo a la versión más reciente.';

//Opción 2 (más correcta)
let titleElement = document.querySelector('.js-title');

titleElement.innerHTML = 'Esta página no es compatible con la versión actual de tu navegador. Por favor actualízalo a la versión más reciente.';

// EJERCICIO 4
let adalaberElement = document.querySelector('.js-Teresa');

adalaberElement.innerHTML = "Teresa";

titleElement.innerHTML = `La Adalaber seleccionada es: ` + adalaberElement.innerHTML;
    
// EJERCICIO 5
let labelElement = document.querySelector('.js-label');
let passwordElement = document.querySelector('.js-password');
let spanElement = document.querySelector('.js-span');

labelElement.innerHTML = "Mi contraseña es: ";
passwordElement.value = "Ada2020";
passwordElement.type = "password";
spanElement.innerHTML = labelElement.innerHTML + passwordElement.value;


