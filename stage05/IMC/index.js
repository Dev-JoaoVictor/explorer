//Varáveis - variables

const form = document.querySelector("form");
let inputWeight = document.querySelector("#weight");
let inputHeight = document.querySelector("#height");

const modalWrapper = document.querySelector('.modal-wrapper')
const modalMessage = document.querySelector('.modal .title span')
const modalBtnClose = document.querySelector('.modal button.close')





//Funções
form.onsubmit = (event) => {
  event.preventDefault(); // Tira o recarregamento da página

  const weight = inputWeight.value;
  const height = inputHeight.value;

  const result = IMC(weight, height)
  const message = `Seu IMC é de ${result}`

  modalMessage.innerText = message
  modalWrapper.classList.add('open')
  
};

modalBtnClose.onclick = () => {
    modalWrapper.classList.remove('open')
    inputHeight.value = ''
    inputWeight.value = ''
}

function IMC(weight, height) {
    return (weight / ((height / 100) * 2)).toFixed(2)
}
