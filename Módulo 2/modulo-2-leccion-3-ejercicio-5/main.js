'use strict';

const notificationElement = document.querySelector('.notification');
const titleElement = document.querySelector('.title');
const messageElement = document.querySelector('.message');

const aviso = 'AVISO';
const tengaCuidado = 'Tenga cuidado';
const error = 'ERROR';
const haSurgidoError = 'Ha surgido un error';
const correcto = 'CORRECTO'; 
const losDatosSonCorrectos ='Los datos son correctos';

// Le preguntamos si notificationElement contiene la clase success (nosotras por defecto no se la hemos puesto)
if (notificationElement.classList.contains('success')) {
  // Si notificationElement contiene success, que no es el caso, elimínala (recuerda parece absurdo pero es un booleano debe tener doble valor)
  notificationElement.classList.remove('success');
// De lo contrario (es decir si no tiene la clase success, como es nuestro caso) añádesela
} else {
  notificationElement.classList.add('success');
  // además méteme en el H1 (.title) el valor declarado en la constante como correcto
  titleElement.innerHTML = correcto;
    // y méteme en el p (.message) el valor declarado en la constante como losDatosSonCrrectos
  messageElement.innerHTML = losDatosSonCorrectos;
}
/* 
if (notificationElement.classList.contains('error')) {
  notificationElement.classList.remove('error');
} else {
  notificationElement.classList.add('error');
  titleElement.innerHTML = error;
  messageElement.innerHTML = haSurgidoError;
}

if (notificationElement.classList.contains('warning')) {
  notificationElement.classList.remove('warning');
} else {
  notificationElement.classList.add('warning');
  titleElement.innerHTML = aviso;
  messageElement.innerHTML = tengaCuidado;
}
 */