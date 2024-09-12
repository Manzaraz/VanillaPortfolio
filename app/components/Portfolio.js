import { Mobile } from "./Mobile.js";
import { Web } from "./Web.js";


export function Portfolio() {
  const $portfolio = document.createElement("section"),
    $contentSection = document.createElement("div"),
    $h2 = document.createElement("h2"),
    $btnContainer = document.createElement("div"),
    $gallery = document.createElement("div");

  $portfolio.id = "portfolio";
  $portfolio.classList.add("portfolio", "sectionHighlight");

  $contentSection.classList.add("content-section")
  $h2.textContent = "Portfolio"
  $gallery.classList.add("gallery", "mobile")
  $btnContainer.classList.add("btn-conteiner")

  $btnContainer.innerHTML = `
    <button id="mobile">
      <i class="fa-solid fa-mobile-screen-button"></i>
      Mobile
    </button>
    <button id="web">
      <i class="fa-solid fa-laptop-code"></i>
      Web
    </button>
  `

  $gallery.innerHTML = `
    <div class="choose" data-aos="fade-up">
      <div class="card">
        <div class="card__top">
        <div class="card__browser"></div>
          <figure class="card__imgCnt">
            <iframe width="560" height="315" src="https://www.youtube.com/embed/9ugU1r96EXU?si=2qeSeyXTilVBbMPZ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
            </figure>
          </div>
          <div class="card__box">
          <div class="card__open"></div>
        </div>
        <div class="card__down"></div>
        <div class="card__caption">ManziBook Pro</div>
      </div>
    </div>
  `

  $contentSection.append(
    $h2,
    $btnContainer,
    $gallery
  )

  $portfolio.appendChild($contentSection)

  return $portfolio
}