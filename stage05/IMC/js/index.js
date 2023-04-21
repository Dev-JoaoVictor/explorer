import { modal } from "./modal.js";
import { AlertError } from "./alert-error.js"
import { calculateIMC, notANumber} from "./utils.js"

//Varáveis - variables
const form = document.querySelector("form");
export let inputWeight = document.querySelector("#weight");
export let inputHeight = document.querySelector("#height");

//Funções
form.onsubmit = (event) => {
  event.preventDefault(); // Tira o recarregamento da página

  const weight = inputWeight.value;
  const height = inputHeight.value;

  const weightOrHeightIsNotANumber = notANumber(weight) || notANumber(height);

  if (weightOrHeightIsNotANumber) {
    AlertError.open()
    return;
  }

  AlertError.close()

  const result = calculateIMC(weight, height);
  displayResultMessage(result)
  
};

function displayResultMessage(result) {
  const message = `Seu IMC é de ${result}`;

  modal.message.innerText = message;
  modal.open();
}


