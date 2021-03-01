'use strict';

// EJERCICIO 1

// avatar por defecto
const DEFAULT_AVATAR = 'http://placehold.it/300x300';

let imageAvatar = document.querySelector('.user__avatar').src;

// avatar que eligió el usuario al registrarse
let userAvatar = 'http://www.fillmurray.com/300/300';
imageAvatar = `${userAvatar || DEFAULT_AVATAR}`;

// Cuando el usuario NO sube una imagen
userAvatar= "";
imageAvatar = `${userAvatar || DEFAULT_AVATAR}`;

// EJERCICIO 2
let name = "Cristina" && "Teresa";

if (name !== "Teresa") {
    console.log(`Bienvenida ${name}`);
}
else {
    console.log(`Tú no eres una de nuestras adalabers`);
}

// EJERCICIO 4
const ageDog = 5;

if (ageDog <= 1) {
    console.log(`Tu perro tiene ${ageDog * 15} años de humano.`);
}
else if (ageDog <= 2) {
    console.log(`Tu perro tiene ${15 + 9(ageDog - 0.9)} años de humano.`);
}
else if (ageDog <= 3) {
    console.log(`Tu perro tiene ${15 + 9 + 5(ageDog - 1.9)} años de humano.`);
}
else {
    console.log(`Tu perro tiene ${15 + 9 + 5 * (ageDog - 2.9)} años de humano.`);
}
