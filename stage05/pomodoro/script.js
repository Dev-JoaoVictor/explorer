const buttonPlay = document.querySelector(".play");
const buttonPause = document.querySelector(".pause");
const buttonStop = document.querySelector(".stop");
const buttonSet = document.querySelector(".set");
const buttonSoundOn = document.querySelector(".sound-on");
const buttonSoundOff = document.querySelector(".sound-off");
const minutesDisplay = document.querySelector(".minutes");
const secondsDisplay = document.querySelector(".seconds");
let minutes;

buttonPlay.addEventListener("click", start);
buttonPause.addEventListener("click", pause);
buttonStop.addEventListener("click", resetControls);
buttonSoundOn.addEventListener("click", soundCheck);
buttonSoundOff.addEventListener("click", soundCheck);
buttonSet.addEventListener("click", setTime);

function start() {
  buttonPlay.classList.add("hide");
  buttonPause.classList.remove("hide");
  buttonSet.classList.add("hide");
  buttonStop.classList.remove("hide");

  countdown();
}

function pause() {
  buttonPause.classList.add("hide");
  buttonPlay.classList.remove("hide");
}

function resetControls() {
  buttonPlay.classList.remove("hide");
  buttonPause.classList.add("hide");
  buttonSet.classList.remove("hide");
  buttonStop.classList.add("hide");
}

function soundCheck() {
  buttonSoundOff.classList.toggle("hide");
  buttonSoundOn.classList.toggle("hide");
}

function setTime() {
  minutes = prompt("Quantos minutos? ") || 0
  updateTimerDisplay(minutes, 0);
}

function countdown() {
  setTimeout(function () {
    let seconds = Number(secondsDisplay.textContent);
    let minutes = Number(minutesDisplay.textContent);

    updateTimerDisplay(minutes, 0);

    if (minutes <= 0) {
      resetControls();
      return;
    }

    if (seconds <= 0) {
      seconds = 2;
      --minutes;
    }

    updateTimerDisplay(minutes, String(seconds - 1));

    countdown();
  }, 1000);
}

function updateTimerDisplay(minutes, seconds) {
  minutesDisplay.textContent = String(minutes).padStart(2, "0");
  secondsDisplay.textContent = String(seconds).padStart(2, "0");
}
