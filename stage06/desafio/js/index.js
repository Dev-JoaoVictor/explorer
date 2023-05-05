import { Router } from "./router.js";

const linkHome = document.querySelector(".link-home");
const linkUniver = document.querySelector(".link-universe");
const linkExplorer = document.querySelector(".link-explorer");
const body = document.querySelector("body");

function removeBackground() {
  body.classList.remove("body-universe");
  body.classList.remove("body-explorer");
}

linkHome.addEventListener("click", () => {
  removeBackground();
});

linkUniver.addEventListener("click", () => {
  body.classList.add("body-universe");
  body.classList.remove("body-explorer");
});

linkExplorer.addEventListener("click", () => {
  body.classList.remove("body-universe");
  body.classList.add("body-explorer");
});

const router = new Router();
router.add("/", "/pages/home.html");
router.add("/universe", "/pages/universe.html");
router.add("/explorer", "/pages/explorer.html");

router.handle();

window.onpopstate = () => router.handle();
window.route = () => router.route();
