export default function () {
  const kitchenTimer = new Audio(
    "https://github.com/maykbrito/automatic-video-creator/blob/master/audios/kichen-timer.mp3?raw=true"
  );
  

  function timeEnd() {
    kitchenTimer.play()
  }
    
  return {
    timeEnd,

  };
}
