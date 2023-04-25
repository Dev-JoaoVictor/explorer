import {
  buttonPlay,
  buttonPause,
  buttonStop,
  buttonSet,
  buttonSoundOn,
  buttonSoundOff,
} from "./elements.js";

export default function ({ controls, timer, sound }) {
  buttonPlay.addEventListener("click", () => {
    controls.play();
    timer.countdown();
    sound.pressButton();
  });

  buttonPause.addEventListener("click", () => {
    controls.pause();
    timer.hold();
    sound.pressButton();
  });

  buttonStop.addEventListener("click", () => {
    controls.reset();
    timer.reset();
    sound.pressButton();
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
    sound.bgAudio.play();
  });

  buttonSoundOff.addEventListener("click", () => {
    controls.soundCheck();
    sound.bgAudio.pause();
  });
}
