import { Contact } from "../components/Contact.js"
import { Footer } from "../components/Footer.js"
import { Header } from "../components/Header.js"
import { Intro } from "../components/Intro.js"
import { About } from "../components/About.js"
import { Skills } from "../components/Skills.js"
import { Resume } from "../components/Resume.js"


export function AboutPage() {
  const $html = document.createDocumentFragment()

  $html.append(
    // Intro(),
    About(),
    Skills(),
    Resume(),
    Contact()
  )



  return $html
}