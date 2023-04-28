const buttonPlay = document.querySelector(".play");
const buttonPause = document.querySelector(".pause");
const buttonStop = document.querySelector(".stop");
const buttonMore = document.querySelector(".more");
const buttonAnyLess = document.querySelector(".anyLess");
let minutesDisplay = document.querySelector(".minutes");
let secondsDisplay = document.querySelector(".seconds");
let minutes;

function setTime() {
  let setMinutes = prompt("Quantos minutos? ") || 0
  updateTimerDisplay(setMinutes, 0);
}

setTime();

function resetControls() {
  buttonPlay.classList.toggle("hide");
  buttonPause.classList.toggle("hide");
}

function updateTimerDisplay(minutes, seconds) {
  minutesDisplay.textContent = String(minutes).padStart(2, "0");
  secondsDisplay.textContent = String(seconds).padStart(2, "0");
}

function countdown() {
  setTimeout(() => {
    let seconds = Number(secondsDisplay.textContent);
    let minutes = Number(minutesDisplay.textContent);

    secondsDisplay.textContent = "00";

    updateTimerDisplay(minutes, 0);

    if (minutes <= 0) {
      resetControls();
      return;
    }

    if (seconds <= 0) {
      seconds = 60;
      --minutes
    }

    updateTimerDisplay(minutes, String(seconds - 1));
    countdown();
  }, 1000);
}

buttonPlay.addEventListener("click", () => {
  resetControls();
  countdown();
});

buttonPause.addEventListener("click", () => {
  resetControls();
});

buttonMore.addEventListener("click", () => {
  let moreMinutes = Number(minutesDisplay.textContent);
  updateTimerDisplay(moreMinutes, 0);
});

buttonAnyLess.addEventListener("click", () => {
  let lessMinutes = Number(minutesDisplay.textContent);

  if (lessMinutes <= 5 || lessMinutes <= 0) {
    return;
  }
  updateTimerDisplay(0, lessMinutes);
});

buttonStop.addEventListener("click", () => {
  resetControls();
});
