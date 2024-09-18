import { Header } from "./components/Header.js"
import { Intro } from "./components/Intro.js"
import { About } from "./components/About.js"
import { Skills } from "./components/Skills.js"
import { Resume } from "./components/Resume.js"
import { Portfolio } from "./components/Portfolio.js"
import { Contact } from "./components/Contact.js"
import { listener } from "./helpers/listeners.js"
import { Footer } from "./components/Footer.js"

export function App() {
  const $root = document.querySelector("#root")

  $root.append(
    Header(),
    Intro(),
    Portfolio(),
    About(),
    Skills(),
    Resume(),
    Contact(),
    Footer()

  )


  listener()

  return $root
}