import { webProducts } from "../helpers/data.js";

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

function showProjects(items) {
  let html = "";

  items.forEach(item => {
    const { id, name, img, link, repo, technologies } = item;
    html += `
      <div id="${id}" class="proyectoWeb" data-aos="fade-up">
        <h4>${name}</h4>
        <div class="col">
          <div class="p" >
            <div class="p__browser">
              <div class="p__circle" style="background-color: #FF5733;"></div>
              <div class="p__circle" style="background-color: #F1C40F;"></div>
              <div class="p__circle" style="background-color: #2ECC71;"></div>
            </div>
            <img src="${img}" alt="example page" class="p__img"/>
          </div>
          ${(!technologies || technologies.length < 1) ? "" : technologiesComponent(technologies)}
          <div class="btn-conteiner">
            <a href="${link}" target="_blank" rel="noreferrer">
              <title>Watch Demo Deploy</title>
              <i class="fa-brands fa-safari"></i>
              Ver Demo
              <span class="overlay"></span>
            </a>
            <a href="${repo}" target="_blank" rel="noreferrer">
              <title>${name} GitHub Repository</title>
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
export function Web() {
  const $web = document.createElement("article")

  $web.innerHTML = showProjects(webProducts)

  return $web
}