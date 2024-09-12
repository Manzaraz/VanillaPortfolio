

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
      <div class="proyectoMobile" id="${id}" data-aos="fade-up">
        <h4>${name}</h4>
        <div class="row">
          <div class="col">
            <div class="p">
              <img src="${img}" alt="Screenshoot of ${img}" class="p__img">
            </div>
          </div>
          <div class="col">
            ${(!technologies || technologies.length < 1) ? "" : technologiesComponent(technologies)}
            <a href="${repo}" target="_blank" rel="noreferrer">
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

  $mobile.innerHTML = mobileComponent(mobileProducts)

  return $mobile
}