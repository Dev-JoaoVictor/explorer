import { buttonMoon, buttonSun, theme } from "./elements.js";

export function Events({controls}) {
  buttonSun.addEventListener("click", () => {
    controls.themeDark()
  });

  buttonMoon.addEventListener("click", () => {
    controls.themeLight()
  });
}
