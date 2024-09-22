import { Mobile } from "./Mobile.js";
import { Web } from "./Web.js";


export function Portfolio() {
  const $portfolio = document.createElement("section"),
    $contentSection = document.createElement("div"),
    $h2 = document.createElement("h2"),
    $btnContainer = document.createElement("div"),
    $galleryMobile = document.createElement("div"),
    $galleryWeb = document.createElement("div"),
    $hr = document.createElement("hr");

  $portfolio.id = "portfolio";
  $portfolio.classList.add("portfolio");
  console.log($portfolio)

  $contentSection.classList.add("content-section")
  $h2.textContent = "Portfolio"

  $galleryMobile.classList.add("gallery", "mobile")
  $galleryWeb.classList.add("gallery", "mobile")
  $btnContainer.classList.add("btn-conteiner")

  $galleryMobile.appendChild(Mobile())
  $galleryWeb.appendChild(Web())

  $contentSection.append(
    $h2,
    $btnContainer,
    $galleryMobile,
    $hr,
    $galleryWeb
  )

  $portfolio.appendChild($contentSection)

  return $portfolio
}