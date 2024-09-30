import { ProjectsPage } from "../pages/ProjectsPage.js";
import { AboutPage } from "../pages/AboutPage.js";
import { listener, openModal } from "../helpers/listeners.js"
import { escribirTexto } from "./Lineas.js";
import { Header } from "./Header.js";
import { Footer } from "./Footer.js";

const routes = {
  home: {
    href: "/",
    content: () => ProjectsPage()
  },
  about: {
    href: "/#about",
    content: () => AboutPage()
  },
}

export function Router() {
  const
    d = document,
    w = window,
    $root = d.getElementById("root"),
    $main = d.createElement("main");

  $root.appendChild(Header())
  $root.appendChild($main)
  // $root.appendChild(Footer())

  const homeLink = document.querySelector("#home-link")
  const aboutLink = document.querySelector("#about-link")

  function updateContent(route) {

    $main.innerHTML = null
    if (routes[route]) {
      $main.appendChild(routes[route].content())

      if (route == "home") {
        escribirTexto()
        // listener()
      }

      if (route == "about") openModal()
    } else {
      $main.innerHTML = "<h2>Page Not found</h2>"
    }
    listener()
  }

  function updateLinks(currentPage) {
    homeLink.classList.toggle("highlight", currentPage === "home")
    aboutLink.classList.toggle("highlight", currentPage === "about")
  }

  function handleRoute(event) {
    event.preventDefault()
    const href = event.target.href
    const page = href?.split("#")[1] || "home";
    w.history.pushState({}, "", href)

    updateContent(page)
    updateLinks(page)
  }

  w.addEventListener('hashchange', () => {
    const newPage = w.location.hash.slice(1) || 'home';

    updateContent(newPage);
    updateLinks(newPage);
  });

  // Agregar el event listener a los enlaces
  homeLink.addEventListener('click', handleRoute);
  aboutLink.addEventListener('click', handleRoute);

  // Cargar el contenido inicial
  const initialPage = 'home';
  updateContent(initialPage);
  updateLinks(initialPage);

  // listener()
}

