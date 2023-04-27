const sun = document.querySelector(".sun");
const moon = document.querySelector(".moon");
const theme = document.documentElement;

sun.addEventListener("click", ToggleTheme);
moon.addEventListener("click", ToggleTheme);

export function ToggleTheme() {
  sun.classList.toggle("hide");
  moon.classList.toggle("hide");
  theme.classList.toggle("dark");
}

const cardList = document.querySelector(".container-cards");
const card = cardList.querySelectorAll('.card')


