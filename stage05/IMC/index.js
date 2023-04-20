//Varáveis - variables

const form = document.querySelector("form");
let inputWeight = document.querySelector("#weight");
let inputHeight = document.querySelector("#height");

const table = {
  tableIMC: document.querySelector(".table tbody tr"),
  tableClass: document.querySelector(".table tr"),

  checkIMC() {
    table.tableIMC.classList.add("check");
  },
  checkTable() {
    table.tableClass.classList.add("check");
  },
};

teste = console.log(table.tableIMC)

const modal = {
  wrapper: document.querySelector(".modal-wrapper"),
  message: document.querySelector(".modal .title span"),
  buttonClose: document.querySelector(".modal button.close"),

  open() {
    modal.wrapper.classList.add("open");
  },
  close() {
    modal.wrapper.classList.remove("open");
  },
};

//Funções
form.onsubmit = (event) => {
  event.preventDefault(); // Tira o recarregamento da página

  const weight = inputWeight.value;
  const height = inputHeight.value;

  const result = IMC(weight, height);
  const message = `Seu IMC é de ${result}`;

  modal.message.innerText = message;
  modal.open();

  if (result == 25) {
    table.checkIMC()
    table.checkClass()
  }
};

function IMC(weight, height) {
  return (weight / ((height / 100) * 2)).toFixed(2);
}

modal.buttonClose.onclick = () => {
  modal.close();
  resetForm();
};

function resetForm() {
  inputHeight.value = "";
  inputWeight.value = "";
}
