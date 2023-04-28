const buttonPlay = document.querySelector(".play");
const buttonPause = document.querySelector(".pause");
const buttonStop = document.querySelector(".stop");
const buttonMore = document.querySelector(".more");
const buttonAnyLess = document.querySelector(".anyLess");
let minutesDisplay = document.querySelector(".minutes");
let secondsDisplay = document.querySelector(".seconds");
let minutes;

function setTime() {
  let setMinutes = prompt("Quantos minutos? ")
  minutesDisplay.textContent = String((setMinutes). padStart(2, "0"))
}

function countdown() {
  setTimeout(() => {
    let seconds = Number(secondsDisplay.textContent);
    let minutes = Number(minutesDisplay.textContent)

    if (seconds <= 0) {
      seconds = 2;
      minutesDisplay.textContent = String(minutes - 1).padStart(2, "0")
    }

    secondsDisplay.textContent = String(seconds - 1).padStart(2, "0")



    if (minutes <= 0) {
      buttonPlay.classList.toggle("hide");
      buttonPause.classList.toggle("hide");
      return
    }

    

    countdown();
  }, 1000);
}

buttonPlay.addEventListener("click", () => {
  setTime()
  buttonPlay.classList.toggle("hide");
  buttonPause.classList.toggle("hide");

  countdown();
});

buttonPause.addEventListener("click", () => {
  buttonPlay.classList.toggle("hide");
  buttonPause.classList.toggle("hide");
});

buttonMore.addEventListener("click", () => {
  let moreMinutes = Number(minutesDisplay.textContent);
  minutesDisplay.textContent = String(moreMinutes + 5).padStart(2, "0");
});

buttonAnyLess.addEventListener("click", () => {
  let lessMinutes = Number(minutesDisplay.textContent);

  if(lessMinutes <= 5 ||  lessMinutes <= 0) {
    return
  }
  minutesDisplay.textContent = String(lessMinutes - 5).padStart(2, "0")
});
