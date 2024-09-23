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
      <h1>
        Christian Manzaraz
        <title>Cristian Manzaraz, "Desarrollador iOS", "Desarrollador Frontend", "Profesor de Frontend en DigitalHouse", "Desarrollador Full-Stack en JavaScript", Xcode, Swift, SwiftUI UIKit, Javascript, React, Visual Studio Code</title>
      </h1>
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
    <div class="bio-content">
      <h3>Bienvenidos a mi Sitio Web</h3>
      <h2>Soy Chris un Desarrollador iOS Junior con un toque web y pasión por enseñar.</h2>
      <p>Cuento con un sólido background en Desarrollo Web y Frontend, estoy ampliando mis habilidades para crear experiencias móviles excepcionales. Mi experiencia enseñando me ha proporcionado excelentes habilidades de comunicación y resolución de problemas. Estoy buscando un entorno donde pueda aplicar mis conocimientos y crecer como Desarrollador iOS. ¡Contáctame para discutir cómo puedo agregar valor a tu equipo!</p>
      <p>Te invito a seguir explorando y descubrir mis proyectos. ¡Estoy seguro de que te encantarán!</p>

      <div class="scroll-me">
        <span class="scroll-btn">
          <div >
            <span class="mouse">
              <span>
              </span>
            </span>
            <i class="fa-brands fa-apple"></i>
          </div>
        </span>
      </div>
      
    </div>
  `


  return $section
}