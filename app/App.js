
import { Router } from "./components/Router.js"

export function App() {
  const $root = document.querySelector("#root")

  $root.innerHTML = null

  Router()
}