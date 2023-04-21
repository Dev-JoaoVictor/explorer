import { modal } from "./modal.js";
import { AlertError } from "./alert-error.js"
import { IMC, notANumber} from "./utils.js"

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
    AlertError.open()
    return;
  }

  AlertError.close()

  const result = IMC(weight, height);
  const message = `Seu IMC é de ${result}`;

  modal.message.innerText = message;
  modal.open();
};


