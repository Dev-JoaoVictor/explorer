export function Controls({buttonMoon, buttonSun, theme}) {
  function themeDark() {
    buttonSun.classList.toggle("hide");
    buttonMoon.classList.toggle("hide");
    theme.classList.toggle("dark");
  }

  function themeLight() {
    buttonSun.classList.toggle("hide");
    buttonMoon.classList.toggle("hide");
    theme.classList.toggle("dark");
  }

  return {
    themeDark,
    themeLight,
  };
}
