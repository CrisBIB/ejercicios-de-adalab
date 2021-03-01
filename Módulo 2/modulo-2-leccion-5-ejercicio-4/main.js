"use strict";

// elementos html

const container1Element = document.querySelector(".box");

//declaro funcion handler

function showColor() {
  const y = window.scrollY;
  if (y > 250) {
    container1Element.classList.add("color1");
  } else {
    container1Element.classList.remove("color1");
  }
}

// listener sobre el elemento, con tipo de evento y handler

window.addEventListener("scroll", showColor);


