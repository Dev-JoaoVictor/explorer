import { inputHeight, inputWeight } from "./index.js";

export const modal = {
  wrapper: document.querySelector(".modal-wrapper"),
  message: document.querySelector(".modal .title span"),
  buttonClose: document.querySelector(".modal button.close"),

  open() {
    modal.wrapper.classList.add("open");
  },
  close() {
    modal.wrapper.classList.remove("open");
  },
  reset() {
    inputHeight.value = "";
    inputWeight.value = "";
  }
};

modal.buttonClose.onclick = () => {
  modal.close();
  modal.reset();
};

window.addEventListener('keydown', handleKeydown)

function handleKeydown(event) {
  if(event.key == 'Escape') {
    modal.close()
    modal.reset()
  }
}