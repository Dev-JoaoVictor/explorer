const buttonPlay = document.querySelector('.play')
const buttonPause = document.querySelector('.pause')
const buttonStop = document.querySelector('.stop')
const buttonSet = document.querySelector('.set')
const buttonSoundOn = document.querySelector('.sound-on')
const buttonSoundOff = document.querySelector('.sound-off')

buttonPlay.addEventListener('click', start)
buttonPause.addEventListener('click', pause)
buttonStop.addEventListener('click', resetControls)
buttonSoundOn.addEventListener('click', soundCheck)
buttonSoundOff.addEventListener('click', soundCheck)


function start() {
  buttonPlay.classList.add('hide')
  buttonPause.classList.remove('hide')
  buttonSet.classList.add('hide')
  buttonStop.classList.remove('hide')
}

function pause() {
  buttonPause.classList.add('hide')
  buttonPlay.classList.remove('hide')
}

function resetControls(){
  buttonPlay.classList.remove('hide')
  buttonPause.classList.add('hide')
  buttonSet.classList.remove('hide')
  buttonStop.classList.add('hide')
}

function soundCheck() {
  buttonSoundOff.classList.toggle('hide')
  buttonSoundOn.classList.toggle('hide')
}