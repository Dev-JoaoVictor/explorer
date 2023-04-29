import {
  buttonMoon,
  buttonSun,
  buttonStop,
  buttonPlay,
  buttonPause,
  buttonMore,
  buttonAnyLess,
  minutesDisplay,
} from "./elements.js";

export function Events({ controls, time }) {
  buttonSun.addEventListener("click", () => {
    controls.themeDark();
  });

  buttonMoon.addEventListener("click", () => {
    controls.themeLight();
  });

  buttonPlay.addEventListener("click", () => {
    controls.play();
    time.countdown();
  });

  buttonStop.addEventListener("click", () => {
    controls.stop();
    time.reset();
    
  })

  buttonPause.addEventListener("click", () => {
    controls.stop();
    time.hold()
  });
  
  buttonMore.addEventListener("click", () => {
    let moreMinutes = Number(minutesDisplay.textContent);
    time.updateTimerDisplay(moreMinutes + 5, 0);
  });

  buttonAnyLess.addEventListener("click", () => {
    let lessMinutes = Number(minutesDisplay.textContent);

    if (lessMinutes <= 5 || lessMinutes <= 0) {
      return;
    }
    time.updateTimerDisplay(lessMinutes - 5, 0);
  });
}
