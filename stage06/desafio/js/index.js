import { Router } from "./router.js";

const linkHome = document.querySelector('.link-home')
const linkUniver = document.querySelector('.link-universe')
const linkExplorer = document.querySelector('.link-explorer')
const body = document.querySelector('body')



const router = new Router();
router.add("/", "/pages/home.html");
router.add("/universe", "/pages/universe.html");
router.add("/explorer", "/pages/explorer.html");


router.handle();

window.onpopstate = () => router.handle();
window.route = () => router.route();