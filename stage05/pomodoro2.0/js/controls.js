export function Controls({
  buttonMoon,
  buttonSun,
  theme,
  buttonPlay,
  buttonPause,
}) {
  function play() {
    buttonPause.classList.remove("hide");
    buttonPlay.classList.add("hide");
  }

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

  function stop() {
    buttonPause.classList.add("hide");
    buttonPlay.classList.remove("hide");
  }

  return {
    themeDark,
    themeLight,
    stop,
    play
  };
}
