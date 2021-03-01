'use strict';

//EJERCICIO 1

for (let i = 0; i < 20; i++) {
    console.log('Voy por la vuelta ' + i);
  }

  //EJERCICIO 2

for (let u = 1; u < 11; u++) {
    console.log('Voy por la vuelta ' + u);
}
  
//EJERCICIO 3

for (let acc = 0; acc < 10; acc++) {
    console.log('El resultado es: ' + acc*3);
}

/* //Otra forma (by Amanda)
let acc = 0;
for (let i = 0; i < 10; i++) {
  acc += 2;
  console.log("El resultado es:  " + acc);
} */

//EJERCICIO 4
let lun = 2017;

for (let i = 0; i < 1; i++) {
    lun += 3;
    console.log('La próxima luna será en el año ' + lun);
    for (let i = 3; i < 17; i++) {
        lun += 3;
        console.log('Y la siguiente, en ' + lun);
    }
}

console.log("Para calcular los días exactos, habría que tener en cuenta los ciclos lunares (13 por año) y los años bisiestos.")

//EJERCICIO

//Paso 1
let numbers = [1, 2, 3, 4, 5];
numbers[5] = 6;

const sumNumbers = numbers.reduce((total, number) => total + number, 0);

console.log(sumNumbers / numbers.length);

/* for (let i = 0; i < 1; i++) {
    let numbersSum = numbers[0] + numbers[1] + numbers[2] + numbers[3] + numbers[4] + numbers[5];
    console.log(numbersSum)
}

let averageNumbers = numbersSum / numbers.length;

console.log(averageNumbers);




let sum = numbers.reduce((previous, current) => current += previous);

const acumulador =  sum / numbers.length;

console.log(acumulador); */

