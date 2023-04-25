import { Controls } from "./controls.js";
import { Timer } from "./timer.js";
import {
  buttonPlay,
  buttonPause,
  buttonStop,
  buttonSet,
  buttonSoundOn,
  buttonSoundOff,
  minutesDisplay,
  secondsDisplay,
} from "./elements.js";

const controls = Controls({
  buttonPause,
  buttonPlay,
  buttonSet,
  buttonStop,
  buttonSoundOn,
  buttonSoundOff,
});

const timer = Timer({
  minutesDisplay,
  secondsDisplay,
  resetControls: controls.reset,
});

buttonPlay.addEventListener("click", () => {
  controls.play();
  timer.countdown();
});

buttonPause.addEventListener("click", () => {
  controls.pause();
  timer.hold();
});

buttonStop.addEventListener("click", () => {
  controls.reset();
  timer.reset();
});

buttonSet.addEventListener("click", () => {
  let newMinutes = controls.getMinutes();

  if (!newMinutes) {
    timer.reset();
    return;
  }

  timer.updateDisplay(newMinutes, 0);
  timer.updateMinutes(newMinutes);
});

buttonSoundOn.addEventListener("click", () => {
  controls.soundCheck();
});

buttonSoundOff.addEventListener("click", () => {
  controls.soundCheck();
});
