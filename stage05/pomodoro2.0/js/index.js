import { Theme } from "./theme.toggle.js";
import { sun, moon } from "./elements.js";

const configTheme = Theme({
  sun,
  moon,
});

sun.addEventListener("click", configTheme.ToggleTheme);
moon.addEventListener("click", configTheme.ToggleTheme);
