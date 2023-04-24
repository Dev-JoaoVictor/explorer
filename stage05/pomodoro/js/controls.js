import { resetTimer, countdown } from './timer'

export function resetControls() {
  buttonPlay.classList.remove("hide");
  buttonPause.classList.add("hide");
  buttonSet.classList.remove("hide");
  buttonStop.classList.add("hide");
  resetTimer()
}

export function start() {
  buttonPlay.classList.add("hide");
  buttonPause.classList.remove("hide");
  buttonSet.classList.add("hide");
  buttonStop.classList.remove("hide");

  countdown();
}

export function pause() {
  buttonPause.classList.add("hide");
  buttonPlay.classList.remove("hide");
  clearTimeout(timerTimeOut)
}

export function soundCheck() {
  buttonSoundOff.classList.toggle("hide");
  buttonSoundOn.classList.toggle("hide");
}