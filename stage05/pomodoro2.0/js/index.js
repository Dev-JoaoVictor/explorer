const buttonPlay = document.querySelector(".play");
const buttonPause = document.querySelector(".pause");
const buttonStop = document.querySelector(".stop");
const buttonMore = document.querySelector(".more");
const buttonAnyLess = document.querySelector(".anyLess");

const buttonSun = document.querySelector('.sun')
const buttonMoon = document.querySelector('.moon')
const theme = document.documentElement



let timerTimeOut;
let minutesDisplay = document.querySelector(".minutes");
let secondsDisplay = document.querySelector(".seconds");
let minutes = Number(minutesDisplay.textContent);

function toggleTheme() {
  buttonSun.classList.toggle('hide')
  buttonMoon.classList.toggle('hide')
  theme.classList.toggle('dark')
  
}

function setTime() {
  let newMinutes = prompt("Quantos minutos? ");
  if (!newMinutes) {
    resetTimer();
    return;
  }

  minutes = newMinutes;
  updateTimerDisplay(minutes, 0);
}

setTime();

function resetControls() {
  buttonPlay.classList.toggle("hide");
  buttonPause.classList.toggle("hide");
}

function resetTimer() {
  updateTimerDisplay(minutes, 0);
  clearTimeout(timerTimeOut);
}

function updateTimerDisplay(minutes, seconds) {
  minutesDisplay.textContent = String(minutes).padStart(2, "0");
  secondsDisplay.textContent = String(seconds).padStart(2, "0");
}

function countdown() {
  timerTimeOut = setTimeout(() => {
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
      --minutes;
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
  clearTimeout(timerTimeOut);
});

buttonStop.addEventListener("click", () => {
  buttonPause.classList.add("hide");
  buttonPlay.classList.remove("hide");
  resetTimer();
});

buttonMore.addEventListener("click", () => {
  let moreMinutes = Number(minutesDisplay.textContent);
  updateTimerDisplay(moreMinutes + 5, 0);
});

buttonAnyLess.addEventListener("click", () => {
  let lessMinutes = Number(minutesDisplay.textContent);

  if (lessMinutes <= 5 || lessMinutes <= 0) {
    return;
  }
  updateTimerDisplay(lessMinutes - 5, 0);
});

buttonSun.addEventListener("click", () => {
  toggleTheme()
})

buttonMoon.addEventListener("click", () => {
  toggleTheme()
})