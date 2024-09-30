import { App } from "./App.js";
import { listener } from "./helpers/listeners.js";

AOS.init();
document.addEventListener("DOMContentLoaded", App)
// document.addEventListener("DOMContentLoaded", listener)