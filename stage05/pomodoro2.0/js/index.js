const buttonPlay = document.querySelector('.play')
const buttonPause = document.querySelector('.pause')
const buttonStop = document.querySelector('.stop')

buttonPlay.addEventListener("click", () => {
  buttonPlay.classList.toggle('hide')
  buttonPause.classList.toggle('hide')
})

buttonPause.addEventListener("click", () => {
  buttonPlay.classList.toggle('hide')
  buttonPause.classList.toggle('hide')
})