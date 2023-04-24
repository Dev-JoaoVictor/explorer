import { start, pause, resetControls, soundCheck } from "./controls";
import { Timer } from "./timer";

const buttonPlay = document.querySelector(".play");
const buttonPause = document.querySelector(".pause");
const buttonStop = document.querySelector(".stop");
const buttonSet = document.querySelector(".set");
const buttonSoundOn = document.querySelector(".sound-on");
const buttonSoundOff = document.querySelector(".sound-off");
const minutesDisplay = document.querySelector(".minutes");
const secondsDisplay = document.querySelector(".seconds");

let minutes = Number(minutesDisplay.textContent);
let timerTimeOut;

const timer = Timer({
  minutesDisplay,
  secondsDisplay,
  timerTimeOut,
  resetControls,
  setTime,
});

buttonPlay.addEventListener("click", start);
buttonPause.addEventListener("click", pause);
buttonStop.addEventListener("click", resetControls);
buttonSoundOn.addEventListener("click", soundCheck);
buttonSoundOff.addEventListener("click", soundCheck);
buttonSet.addEventListener("click", timer.setTime);
