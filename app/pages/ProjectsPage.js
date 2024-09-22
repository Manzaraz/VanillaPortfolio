import { Header } from "../components/Header.js";
import { Intro } from "../components/Intro.js";
import { Portfolio } from "../components/Portfolio.js";
import { Contact } from "../components/Contact.js";
import { Footer } from "../components/Footer.js";



export function ProjectsPage() {
  const $html = document.createDocumentFragment()

  $html.append(
    Intro(),
    Portfolio(),
    Contact(),
  )

  return $html

}