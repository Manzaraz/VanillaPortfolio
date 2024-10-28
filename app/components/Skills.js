const languages = ["JavaScript", "Swift", "Objective-C"]
const frameworksJs = [
  { item: "HTML", icon: "fa-html5" },
  { item: "CSS", icon: "" },
  { item: "VanillaJS", icon: "" },
  { item: "ReactJS", icon: "" },
  { item: "NodeJS", icon: "" },
  { item: "ExpressJS", icon: "" }]
const frameworksSwift = ["UIKit", "SwiftUI", "iOS", "MacOS", "VisionOS"]

function showLanguages(languages) {
  const $row = document.querySelector(".row")

}


export function Skills() {
  const $section = document.createElement("section")

  $section.id = "skills";
  $section.classList.add("skills", "sectionHighlight");

  $section.innerHTML = `
    <div class="section-content">
      <h2>Skills</h2>
      <fieldset class="languages-content" data-aos="flip-up">
        <legend> Lenguajes de Programación </legend>
        <div class="language" data-aos="flip-left" data-aos-easing="ease-in-back" data-aos-delay="150">
          <i class="fa-brands fa-swift"></i>
          Swift
        </div>
        <div class="language" data-aos="flip-left" data-aos-easing="ease-in-back" data-aos-delay="150">
          <i class="fa-regular fa-copyright"></i>
          Objective-C
        </div>
        <div class="language" data-aos="flip-left" data-aos-easing="ease-in-back" data-aos-delay="300">
          <i class="fa-brands fa-js"></i>
          JavaScript
        </div>
        <div class="language" data-aos="flip-left" data-aos-easing="ease-in-back" data-aos-delay="450">
          <i class="fa-brands fa-html5"></i>
          HTML
        </div>
        <div class="language" data-aos="flip-left" data-aos-easing="ease-in-back" data-aos-delay="600">
          <i class="fa-brands fa-css3-alt"></i>
          CSS
        </div>
      </fieldset>
      <div class="row">
        <!-- Desarrollo Móvil -->
        <div class="col">
          <h3>Desarrollo Mobile</h3>
          <ul>
            <li>
              <strong>IDE:</strong>
              XCode
            </li>
            <li>
              <strong>Entornos:</strong>
              iOS, MacOS, iPadOS, WatchOS, VisionOS
            </li>
            <li>
              <strong>Frameworks Principales:</strong>
              SwiftUI, UIKit (trabajando con storyboards y de manera programática) 
            </li>
            <li>
              <strong>Frameworks:</strong>
              MapKit, CoreData, SwiftData, CoreML, CocoaPods, CloudKit
            </li>
            <li>
              <strong>Arquitectura:</strong>
              MVVM, MVC
            </li>
            <li>
              <strong>Patrones de Diseño:</strong>
              Observer, Delegate, Builder, Singleton, Principios de Gestión de Memoria (ARC)
            </li>
          </ul>                    
        </div>
        
        <!-- Web Development -->
        <div class="col">
          <h3>Desarrollo Web</h3>
          <ul>
            <li>
              <strong>IDE:</strong>
              Visual Studio Code
            </li>
            <li>
              <strong>Entornos:</strong>
              Sitios Web y Aplicaciones PWA
            </li>
            <li>
              <strong>Frameworks Principales:</strong>
              VanillaJS, ReactJS, NodeJS, Express
            </li>
            <li>
              <strong>Bases de datos:</strong>
              MySQL, PostgreSQL, MongoDB, Firestore
            </li>
            <li>
              <strong>Arquitectura:</strong>
              MVC, REST
            </li>
            <li>
              <strong>Servicios:</strong>
              Firebase, Autenticación
            </li>
          </ul>
        </div>

        </div>
        <!--Idima-->
        <div class="i-speak">
          <h3>Idiomas</h3>
          <ul>
            <li>
              <strong>🇪🇸 Español (Nativo):</strong>
              <span><p>Es mi lengua materna, con pinceladas de "tucumano"</p></span>
            </li>
            <li>
              <strong>🇺🇸 English (B1):</strong>
              <span>
                <a href="https://www.duolingo.com/profile/Chris-Manzi" target="_blank" rel="noopener noreferrer">
                  <title>Go to Manzaraz's Duolingo Profile</title>
                  <img src="/app/assets/icon.svg" alt="Link to my Duolingo Profile">
                </a>
                <p>
                  Every day I strive to improve my English skills. I read documentation and follow tutorials to familiarize myself with the language. I am a big fan of Duolingo, where I have achieved a score that reflects my progress.
                </p>
              </span>
            </li>
          </ul>
        </div>
    </div>
  `

  return $section
}