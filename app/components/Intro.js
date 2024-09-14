import { escribirTexto } from "./Lineas.js"

export function Intro() {
  const $section = document.createElement("section")
  $section.id = "intro"
  $section.classList.add("intro")
  $section.innerHTML = `
    <div class="banner-conent" data-aos="flip-left"
     data-aos-easing="ease-out-cubic"
     data-aos-delay="450"
     data-aos-duration="450">
      <div class="img-container" >
        <img src="app/assets/hero.png" alt="Christian">
      </div>
      <h1>Christian Manzaraz</h1>
      <h2><span id="texto"></span></h2>
      <div class="s-media">
        <a href="https://github.com/Manzaraz" target="_blank" rel="noopener noreferrer">
          <title>GitHub</title>
          <i class="fa-brands fa-github"></i>
        </a>
        <a href="https://www.linkedin.com/in/manzaraz/" target="_blank" rel="noopener noreferrer">
          <title>LinkedIn</title>
          <i class="fa-brands fa-linkedin-in"></i>
        </a>
        <a href="https://x.com/MagnusManz" target="_blank" rel="noopener noreferrer">
          <title>X (ex Twitter)</title>
          <i class="fa-brands fa-x-twitter"></i>
        </a>
        <a href="mailto:magnusmanz@gmail.com?subject=Vi%20tu%20Portfolio%20y...">
          <i class="fa-regular fa-envelope"></i>
          <title>Email</title>
        </a>
        <a href="https://wa.me/5493815091639" target="_blank" rel="noopener noreferrer">
          <title>WhatsApp</title>
          <i class="fa-brands fa-whatsapp"></i>
        </a>
      </div>
    </div>
  `


  return $section
}