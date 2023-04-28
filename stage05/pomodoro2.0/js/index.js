const buttonPlay = document.querySelector(".play");
const buttonPause = document.querySelector(".pause");
const buttonStop = document.querySelector(".stop");
const buttonMore = document.querySelector(".more");
const buttonAnyLess = document.querySelector(".anyLess");
let minutesDisplay = document.querySelector(".minutes");
let secondsDisplay = document.querySelector(".seconds");
let minutes;

function countdown() {
  setTimeout(() => {
    let seconds = Number(secondsDisplay.textContent);

    if (seconds <= 0) {
      seconds = 2;
    }

    secondsDisplay.textContent = seconds - 1;
    countdown();
  }, 1000);
}

buttonPlay.addEventListener("click", () => {
  buttonPlay.classList.toggle("hide");
  buttonPause.classList.toggle("hide");

  countdown();
});

buttonPause.addEventListener("click", () => {
  buttonPlay.classList.toggle("hide");
  buttonPause.classList.toggle("hide");
});

buttonMore.addEventListener("click", () => {
  let moreMinutes = Number(minutesDisplay.textContent);
  moreMinutes += 5;
  minutesDisplay.textContent = moreMinutes;
});

buttonAnyLess.addEventListener("click", () => {
  let lessMinutes = Number(minutesDisplay.textContent);
  lessMinutes -= 5;
  minutesDisplay.textContent = lessMinutes;
});
