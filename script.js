"use strict";

// const btnSum = document.querySelector(".btn-sum");
// const btnMin = document.querySelector(".btn-min");
// const span = document.querySelector(".span");
// let contador = 0;

// btnSum.addEventListener("click", function () {
//   //   console.log("Mas 1");
//   contador++;
//   span.textContent = contador;
// });

// btnMin.addEventListener("click", function () {
//   //   console.log("Menos 1");
//   contador--;
//   span.textContent = contador;
// });

const container = document.querySelector(".container");
const span = document.querySelector(".span");
let contador = 0;

container.addEventListener("click", function (e) {
  //   console.log(e.target);
  console.log();
  if (e.target.classList.contains("btn-sum")) {
    contador++;
    span.textContent = contador;
  }

  if (e.target.classList.contains("btn-min")) {
    contador--;
    span.textContent = contador;
  }
});
