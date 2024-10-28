

import { mobileProducts } from "../helpers/data.js"

function technologiesComponent(technologies) {
  let technologiesContainer = "",
    tecnologia = "";

  technologies.forEach(technology => {
    tecnologia += `<span class="technology">${technology}</span>`
  });

  technologiesContainer = `
    <fieldset class="technology-container">
      <legend>Tecnologías</legend>
      ${tecnologia}
    </fieldset>
  `

  return technologiesContainer
}

function mobileComponent(items) {
  let html = ""

  items.forEach(item => {
    const { id, name, img, repo, technologies } = item

    html += `
      <div class="cardMobile" id="${id}" data-aos="fade-up">
        <h4>${name}</h4>
        <div class="row">
          <div class="col">
            <div class="p">
              <img src="${img}" alt="Screenshoot of ${name} portfgolio" class="p__img">
            </div>
          </div>
          <div class="col">
            ${(!technologies || technologies.length < 1) ? "" : technologiesComponent(technologies)}
            <a href="${repo}" target="_blank" rel="noreferrer">
              <title>Go to ${name}'s repository</title>
              <i class="fa-brands fa-github"></i>
              Repositorio
              <span class="overlay"></span>
            </a>
          </div>
        </div>
      </div>
    `
  });

  return html
}

export function Mobile() {
  const $mobile = document.createElement("article")


  $mobile.innerHTML = `
    <h3><i class="fa-solid fa-mobile-screen-button"></i> Proyectos Mobile: </h3>
    <p>Aquí podrás encontrar una selección de algunos de los proyectos más destacados en los que he trabajado recientemente utilizando Swift y Objective-C en el entorno iOS. Cada uno de estos proyectos refleja mi dedicación y habilidad en el desarrollo de aplicaciones móviles. Además, en mi repositorio encontrarás una variedad más amplia de proyectos, donde también verán que he incursionado en el desarrollo para otros dispositivos, incluyendo macOS, iPadOS, VisionOS y tvOS. Los invito a explorarlos y descubrir mi enfoque creativo y técnico.</p>
    <div class="projects">
      ${mobileComponent(mobileProducts)}
    </div>
  `
  return $mobile
}