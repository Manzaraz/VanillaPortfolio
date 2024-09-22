import { Mobile } from "../components/Mobile.js";
import { Web } from "../components/Web.js";

export function listener() {


  // Button Effects for show / hide / copy-paste
  const copyBtns = document.querySelectorAll(".copy-btn");
  copyBtns.forEach(copyBtn => {
    let isClicked = false; // Variable para controlar el estado del clic

    /* Listener for Mouseover */
    copyBtn.addEventListener("mouseover", () => {
      if (!isClicked) { // Solo cambiar el contenido si no ha sido clicado
        setTimeout(() => {
          const name = copyBtn.getAttribute("name");
          copyBtn.innerHTML = `${name}
            <span class="overlay"></span>
          `;
          copyBtn.style = "transition: 0.75"
        }, 250);
      }
    });

    /* Listener for Mouseleave */
    copyBtn.addEventListener("mouseleave", () => {
      if (!isClicked) { // Solo restaurar si no ha sido clicado
        setTimeout(() => {
          const dataName = copyBtn.getAttribute("data-name");
          copyBtn.innerHTML = `
            <i class="fa-solid fa-paste"></i>
            ${dataName}
            <span class="overlay"></span>
          `;
          copyBtn.style = "transition: 0.75"
        }, 250);
      }
    });

    /* Listener for Click */
    copyBtn.addEventListener("click", () => {
      isClicked = true; // Cambiar el estado a clicado
      const hasEmail = copyBtn.classList.contains("email");
      const textToCopy = hasEmail ? "magnusmanz@gmail.com" : "+5493815091639";

      navigator.clipboard.writeText(textToCopy)
        .then(() => {
          copyBtn.innerHTML = '<i class="fa-solid fa-circle-check"></i> Copiado';
          copyBtn.style.background = "#85C01B"; // Cambiar el color de fondo
          copyBtn.style.transition = '0.25s'

          setTimeout(() => {
            isClicked = false; // Restaurar el estado a no clicado
            copyBtn.innerHTML = `
            <i class="fa-solid ${hasEmail ? "fa-envelope" : "fa-mobile-screen"}"></i>
            ${hasEmail ? "Copiar E-mail" : "Copiar Celular"}
            <span class="overlay"></span>
          `;
            copyBtn.style.background = "#252a2e"; // Restaurar el color de fondo
            copyBtn.style.transition = "0.25s"
          }, 1750);
        })
        .catch(err => console.log("Error al copiar", err));
    });
  });

  /* Responsive Functions */
  const $navBtn = document.querySelector(".nav-responsive")
  const $nav = document.querySelector("nav")

  $navBtn.addEventListener("click", () => $nav.classList.toggle("responsive"))

  $nav.addEventListener("click", (e) => {
    console.log(e.target)
    $nav.classList.toggle("responsive");
  })

  /* Scroll Effects */
  /* On Footer */
  const $aFooter = document.querySelector("footer a")
  $aFooter.addEventListener("click", (e) => {
    e.preventDefault()
    let target = e.currentTarget.getAttribute("href")

    document.querySelector(target).scrollIntoView({
      behavior: 'smooth'
    });
  })
}


export function openModal() {
  /* Listener de botón de comentarios en Resume */
  const $btnOpenModal = document.querySelector("#btn-open-modal"),
    $btnCloseModal = document.querySelector("#btn-close-modal"),
    $modal = document.querySelector("#modal");

  $btnOpenModal.addEventListener("click", () => {
    $modal.showModal();
  });

  $btnCloseModal.addEventListener("click", () => {
    $modal.close();
  });
}