import { Timer } from "./timer.js";
import { Events } from "./events.js";
import { Controls } from "./controls.js";
import Sound from "./sounds.js";
import {
  buttonMoon,
  buttonSun,
  theme,
  buttonPlay,
  buttonPause,
  minutesDisplay,
  secondsDisplay,
} from "./elements.js";

const controls = Controls({
  buttonMoon,
  buttonSun,
  theme,
  buttonPlay,
  buttonPause,
});

const time = Timer({
  minutesDisplay,
  secondsDisplay,
  resetControls: controls.reset,
});

time.setTime();

const sound = Sound();

Events({ controls, time, sound });

const container = document.querySelector(".container-cards");
const cards = container.querySelectorAll(".card");

cards.forEach((card) => {
  const audio = card.querySelector("audio");
  const volume = card.querySelector('input[type="range"]');

  card.addEventListener("click", () => {
    cards.forEach((otherCard) => {
      otherCard.classList.remove("select");
      const otherAudio = otherCard.querySelector("audio");
      otherAudio.pause();
    });
    card.classList.add("select");
    audio.currentTime = 0;
    audio.loop = true;
    audio.play();
  });

  volume.addEventListener("input", () => {
    const vol = volume.value / 100;
    if (vol >= 0 && vol <= 1) {
      audio.volume = vol;
    }
  });

  audio.addEventListener("ended", () => {
    card.classList.remove("select");
    audio.loop = false;
  });
});
