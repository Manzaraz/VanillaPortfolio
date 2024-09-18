import { background } from "../helpers/data.js";


function displayEducation(items) {
  let html = ""
  items.forEach(item => {
    html += `
      <div class="item izq" data-aos="fade-right">
        <h4>${item.position}</h4>
        <span class="casa">${item.institution}</span>
        <span class="fecha">${item.time}</span>
        <p>${item.info}</p>
        <div class="conectori">
            <div class="circuloi"></div>
        </div>
      </div>  
    `
  });
  return html
}

function displayJobs(items) {
  let html = "";

  items.forEach(item => {
    if (item.comment) {
      html += `
        <div class="item der" data-aos="fade-left">
          <h4>${item.position}</h4>
          <span class="casa">${item.institution}</span>
          <span class="fecha">${item.time}</span>
          <p>${item.info}</p>

          <div class="conectord">
            <div class="circulod"></div>
          </div>

          <a class="btn" id="btn-open-modal">
            <title>Open Modal</title>
            <i class="fa-solid fa-comment-dots"></i>
            Ver Comentarios        
            <span class="overlay"></span>
          </a>

          <dialog id="modal">
            <div class="modal-header">
              <img src="${item.comment.urlImg}" alt="Post owner: ${item.comment.name}">
              <h3>${item.comment.name}</h2>
            </div>
            <p>"${item.comment.review}"</p>
            <div class="btn-conteiner">
              <a class="btn link" id="link" href="https://www.linkedin.com/in/manzaraz/" target="_blank" rel="noopener noreferrer">
                <title>Manzaraz's LinkedIn Profile</title>
                Ver en LinkedIn
                <span class="overlay"></span>
              </a>
              <button class="btn" id="btn-close-modal">
                <i class="fa-regular fa-circle-xmark"></i>
                Cerrar
                <span class="overlay"></span>
              </button>
            </div>
          </dialog>
        </div>  
    `
    } else {
      html += `
        <div class="item der" data-aos="fade-left">
          <h4>${item.position}</h4>
          <span class="casa">${item.institution}</span>
          <span class="fecha">${item.time}</span>
          <p>${item.info}</p>
          
          <div class="conectord">
              <div class="circulod"></div>
          </div>
        </div>  
    `}
  });
  return html
}

export function Resume() {
  const $resume = document.createElement("section"),
    $sectionContent = document.createElement("div"),
    $h2 = document.createElement("h2"),
    $row = document.createElement("div"),
    $colLeft = document.createElement("div"),
    $colRight = document.createElement("div");

  $resume.id = "resume"
  $resume.classList.add("resume", "sectionHighlight")

  $sectionContent.classList.add("content-section")
  $h2.textContent = "Curriculum"
  $row.classList.add("row")

  $sectionContent.append($h2, $row)
  $resume.appendChild($sectionContent)

  $colLeft.classList.add("col", "izquierda")
  $colLeft.innerHTML = `<h3>Educación</h3>`
  $colRight.classList.add("col", "derecha")
  $colRight.innerHTML = `<h3>Experiencia Laboral</h3>`

  $row.append($colLeft, $colRight)

  $colLeft.innerHTML += displayEducation(background[0].items)
  $colRight.innerHTML += displayJobs(background[1].items)

  return $resume
}