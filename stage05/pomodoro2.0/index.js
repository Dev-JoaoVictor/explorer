const sun = document.querySelector(".sun");
const moon = document.querySelector(".moon");
const theme = document.documentElement;

sun.addEventListener('click', Toggle)
moon.addEventListener('click', Toggle)

function Toggle() {
  sun.classList.toggle('hide')
  moon.classList.toggle('hide')
  theme.classList.toggle('dark')
}
