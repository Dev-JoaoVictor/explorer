//Variáveis
const screen1 = document.querySelector(".screen1");
const screen2 = document.querySelector(".screen2");
const btnTry = document.querySelector("#btnTry");
const btnReset = document.querySelector("#btnReset");
let randomNumber = Math.round(Math.random() * 10);
console.log(randomNumber);
let xAttempts = 1;

//Eventos
btnTry.addEventListener("click", handleTryClick);
btnReset.addEventListener("click", handleResetClick);
document.addEventListener("keydown", function (e) {
  if (e.key == "Enter" && screen1.classList.contains("hide")) {
    handleResetClick();
  }
});

//Funções
function handleTryClick(event) {
  event.preventDefault(); /* Tira o recarregamento automático da página */
  const inputNumber = document.querySelector("#inputNumber");
  numberVerification();
  inputValue();

  if (Number(inputNumber.value) == randomNumber) {
    toggleScreen();
    screen2.querySelector(
      "h2"
    ).innerText = `Acertou em ${xAttempts} tentativas`;
  }

  inputNumber.value = "";

  xAttempts++;
}

function handleResetClick() {
  toggleScreen();
  xAttempts = 1;
  randomNumber = Math.round(Math.random() * 10);
}

function toggleScreen() {
  screen1.classList.toggle("hide");
  screen2.classList.toggle("hide");
}

function numberVerification() {
  if (Number(inputNumber.value) < 0 || Number(inputNumber.value) > 10) {
    alert("Digite um número entre 0 e 10");
    xAttempts = 1;
  }
}

function inputValue() {
  if (inputNumber.value == "") {
    alert("Insira um número");
    xAttempts = 1;
  }
}
