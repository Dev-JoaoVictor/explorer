const sun = document.querySelector('.sun')
const moon = document.querySelector('.moon')
const darkmode = document.documentElement

sun.addEventListener('click', () => {
  sun.classList.toggle('hide')
  moon.classList.toggle('hide')
  darkmode.classList.toggle('dark')
})

moon.addEventListener('click', () => {
  sun.classList.toggle('hide')
  moon.classList.toggle('hide')
  darkmode.classList.toggle('dark')
})