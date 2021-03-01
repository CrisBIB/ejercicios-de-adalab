'use strict';

//Ejercicio 4
let num = true;

function isPair(a) {
   
    if (a % 2 == 0) {
        num = "par";
    } else { 
        num = "impar";
    }   
    console.log(`el numero ${a} es ${num}`);
}

isPair(5);

//Ejercicio 5

const main = document.querySelector('.btn', '.btl', '.bts');

function getEl() {
    let header= "Este es el header";
    let main = "Estoy en el main";
    let footer = "Esto es el footer";
}
getEl('.btl', '.btn', '.bts');



