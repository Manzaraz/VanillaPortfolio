import { Mobile } from "../components/Mobile.js";
import { Web } from "../components/Web.js";

export function listener() {

  // Listener de botón de comentarios en Resume
  const $btnOpenModal = document.querySelector("#btn-open-modal"),
    $btnCloseModal = document.querySelector("#btn-close-modal"),
    $modal = document.querySelector("#modal");

  $btnOpenModal.addEventListener("click", () => {
    $modal.showModal();
  });

  $btnCloseModal.addEventListener("click", () => {
    $modal.close();
  });

  // Listener del Portfolio 
  const $mobile = document.querySelector("#mobile"),
    $web = document.querySelector("#web"),
    $gallery = document.querySelector(".gallery");

  $mobile.addEventListener("click", () => {
    $gallery.classList.add("mobile")
    $gallery.replaceChildren(Mobile())
  })

  $web.addEventListener("click", () => {
    $gallery.classList.remove("mobile")
    $gallery.replaceChildren(Web())
  })

  // Listener Copy Button
  const copyBtns = document.querySelectorAll(".copy-btn");

  copyBtns.forEach(copyBtn => {
    copyBtn.addEventListener("click", (e) => {
      //Copiar a Portapapeles
      let btn = e.target,
        hasEmail = btn.classList.contains("email")
      navigator.clipboard
        .writeText(hasEmail ? "magnusmanz@gmail.com" : "+5493815091639")
        .then(() => {
          btn.innerHTML = '<i class="fa-solid fa-circle-check"></i> Copiado'
          btn.style = "background: var(--color-green);"

          setTimeout(() => {
            btn.innerHTML = `
            <i class="fa-solid ${hasEmail ? "fa-envelope" : "fa-mobile-screen"}"></i>
            ${hasEmail ? "Copiar E-mail" : "Copiar Celular"}
            <span class="overlay"></span>
            `
            btn.style = "background: var(--color-black2);"
          }, 1750);
        })
        .catch(err => console.log("Error al copiar", err))
    })
  })

  // Responsive Functions
  const $navBtn = document.querySelector(".nav-responsive")
  const $nav = document.querySelector("nav")

  $navBtn.addEventListener("click", () => $nav.classList.toggle("responsive"))

  $nav.addEventListener("click", (e) => {
    $nav.classList.toggle("responsive");
  })

  // Scroll Effects
  // On Header
  const
    $header = document.querySelector("header"),
    linkBtns = $header.querySelectorAll("a");

  linkBtns.forEach(btn => {
    btn.addEventListener("click", (e) => {
      e.preventDefault();
      let target = e.currentTarget.getAttribute('href');

      document.querySelector(target).scrollIntoView({
        behavior: 'smooth'
      });
    })
  });

  // On Footer
  const $aFooter = document.querySelector("footer a")
  $aFooter.addEventListener("click", (e) => {
    e.preventDefault()
    let target = e.currentTarget.getAttribute("href")

    document.querySelector(target).scrollIntoView({
      behavior: 'smooth'
    });
  })

  // Resaltar links en el header
  // Obtener las secciones y los enlaces del header
  const sections = document.querySelectorAll('section');

  window.addEventListener('scroll', () => {
    sections.forEach(section => {
      const sectionTop = section.offsetTop - 75;
      const sectionHeight = section.clientHeight;
      if (window.scrollY >= sectionTop && window.scrollY <= sectionTop + sectionHeight) {
        highlightLink(section.id);
      }
    });
  });

  function highlightLink(activeSectionId) {
    const links = document.querySelectorAll('header nav a');
    links.forEach(link => {
      if (link.href.endsWith(`#${activeSectionId}`)) {
        link.classList.add("highlight")
      } else {
        link.classList.remove("highlight")
      }
    });
  }


}