export function toggleTheme({ buttonSun, buttonMoon, theme }) {
  buttonSun.classList.toggle("hide");
  buttonMoon.classList.toggle("hide");
  theme.classList.toggle("dark");
}
