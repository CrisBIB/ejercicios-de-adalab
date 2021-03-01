'use strict';

//Adalaber
const adalaber = {
    name: 'Susana',
    age: 34,
    ocupation: 'periodista',
    showBio: function () { 
        return `Mi nombre es ` + this.name + `, tengo ` + this.age + ` años y soy ` + this.ocupation + `.`;
    }
}

//Adalaber2
const adalaber2 = {
    name: 'Rocío',
    age: 25,
    ocupation: 'actriz',
    run: (exercise) => `Estoy ${exercise}`,
    runAMarathon: (distance) => ` un maratón de ${distance} kilómetros.`,
    showBio: function () { 
        return `Mi nombre es ${this.name}, tengo + ${this.age} años y soy ${this.ocupation}.`;
    }
}

// EJERCICIO 1

//Adalaber
const phraseElement = document.querySelector('.phrase');

phraseElement.innerHTML = `Mi nombre es ${adalaber.name}, tengo ${adalaber.age}  años y soy ${adalaber.ocupation}.`;

//Adalaber2
const phraseElement2 = document.querySelector('.phrase2');

phraseElement2.innerHTML = `Mi nombre es ${adalaber2.name}, tengo ${adalaber2.age} años y soy ${adalaber2.ocupation}.`; 

//EJERCICIO 2

console.log(adalaber2.run(`corriendo`));

console.log(adalaber2.run(`corriendo`) + adalaber2.runAMarathon(50));  

//EJERCICIO 3

console.log(adalaber.showBio());
console.log(adalaber2.showBio());

//EJERCICIO 4

const button = document.querySelector('.alert');

button.innerHTML = "Este es un botón";

button.addEventListener('click', function showAlert() {
  console.log('alerta');
});

//EJERCICIO 5
const inputElement = document.querySelector('.js-input');
inputElement.placeholder = "prueba";
console.dir(inputElement);