import { Controls } from "./controls.js";
import { Timer } from "./timer.js";
import Sound from "./sounds.js";
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

const sound = Sound()

buttonPlay.addEventListener("click", () => {
  controls.play();
  timer.countdown();
  sound.pressButton()
});

buttonPause.addEventListener("click", () => {
  controls.pause();
  timer.hold();
  sound.pressButton()
});

buttonStop.addEventListener("click", () => {
  controls.reset();
  timer.reset();
  sound.pressButton()
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
  sound.bgAudio.play()
});

buttonSoundOff.addEventListener("click", () => {
  controls.soundCheck();
  sound.bgAudio.pause()
});
