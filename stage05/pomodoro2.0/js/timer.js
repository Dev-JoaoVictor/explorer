export function Timer({ minutesDisplay, secondsDisplay, resetControls }) {
  let timerTimeOut;
  let minutes = Number(minutesDisplay.textContent);

  function updateTimerDisplay(minutes, seconds) {
    minutesDisplay.textContent = String(minutes).padStart(2, "0");
    secondsDisplay.textContent = String(seconds).padStart(2, "0");
  }

  function countdown() {
    timerTimeOut = setTimeout(function () {
      let seconds = Number(secondsDisplay.textContent);
      let minutes = Number(minutesDisplay.textContent);
      let isFinished = minutes <= 0 && seconds <= 0;

      updateTimerDisplay(minutes, 0);

      if (isFinished) {
        resetControls();
        updateTimerDisplay();
        return;
      }

      if (seconds <= 0) {
        seconds = 60;
        --minutes;
      }

      updateTimerDisplay(minutes, String(seconds - 1));

      countdown();
    }, 1000);
  }

  function reset() {
    updateTimerDisplay(minutes, 0);
    clearTimeout(timerTimeOut);
  }

  function hold() {
    clearTimeout(timerTimeOut);
  }

  function setTime() {
    let minutes  = Number(prompt('Quanto minutos você deseja ?'))
    minutes = updateTimerDisplay(minutes, 0)
  }

  return {
    reset,
    updateTimerDisplay,
    countdown,
    hold,
    setTime
  };
}
