export function Controls({
  buttonPause,
  buttonPlay,
  buttonSet,
  buttonStop,
  buttonSoundOn,
  buttonSoundOff,
}) {
  function play() {
    buttonPlay.classList.add("hide");
    buttonPause.classList.remove("hide");
    buttonSet.classList.add("hide");
    buttonStop.classList.remove("hide");
  }

  function pause() {
    buttonPause.classList.add("hide");
    buttonPlay.classList.remove("hide");
  }

  function soundCheck() {
    buttonSoundOff.classList.toggle("hide");
    buttonSoundOn.classList.toggle("hide");
  }

  function getMinutes() {
    let newMinutes = prompt("Quantos minutos? ");
    if (!newMinutes) {
      return false;
    }

    return newMinutes;
  }

  function reset() {
    buttonPlay.classList.remove("hide");
    buttonPause.classList.add("hide");
    buttonSet.classList.remove("hide");
    buttonStop.classList.add("hide");
  }

  return {
    play,
    pause,
    reset,
    getMinutes,
    soundCheck,
  };
}