import { Timer } from "./timer.js";
import { Events } from "./events.js";
import { Controls } from "./controls.js";
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
  resetControls: controls.stop(),
});

time.setTime()

Events({ controls, time });
