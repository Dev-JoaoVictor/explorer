import { modal } from "./modal.js";

//Varáveis - variables
const form = document.querySelector("form");
export let inputWeight = document.querySelector("#weight");
export let inputHeight = document.querySelector("#height");

//Funções
form.onsubmit = (event) => {
  event.preventDefault(); // Tira o recarregamento da página

  const weight = inputWeight.value;
  const height = inputHeight.value;

  const showAlertError = notANumber(weight) || notANumber(height);

  if (showAlertError) {
    console.log("mostrar erro");
    return;
  }

  const result = IMC(weight, height);
  const message = `Seu IMC é de ${result}`;

  modal.message.innerText = message;
  modal.open();
};

function IMC(weight, height) {
  return (weight / ((height / 100) * 2)).toFixed(2);
}

function notANumber(value) {
  return isNaN(value) || value == "";
}
