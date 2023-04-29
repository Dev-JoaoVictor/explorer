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
