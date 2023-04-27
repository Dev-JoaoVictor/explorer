import { Theme } from "./theme.toggle.js";

const sun = document.querySelector(".sun");
const moon = document.querySelector(".moon");

const configTheme = Theme({
  sun,
  moon,
});

sun.addEventListener("click", configTheme.ToggleTheme);
moon.addEventListener("click", configTheme.ToggleTheme);
