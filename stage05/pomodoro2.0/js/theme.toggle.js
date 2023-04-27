export function Theme({ sun, moon }) {
  const theme = document.documentElement;
  function ToggleTheme() {
    sun.classList.toggle("hide");
    moon.classList.toggle("hide");
    theme.classList.toggle("dark");
  }

  return {
    ToggleTheme,
  };
}
