
export function Header() {
  const $headerCnt = document.createElement("div")

  $headerCnt.classList.add("header-container")

  $headerCnt.innerHTML = `
    <div class="header-container">
      <header>
        <div class="logo">
          <a href="/">
            <title>Home Logo</title>
            <img src="app/assets/favicon.png" alt="Menu del header">
            <p>iManzi</p>
          </a>
        </div>
        <nav id="nav">
          <ul>
            <li><a id="home-link" class="go" href="/"><title>Projects</title><i class="fa-solid fa-cubes"></i> Projects</a></li>
            <li><a id="about-link" class="go" href="#about"><title>About</title><i class="fa-solid fa-leaf"></i> Sobre Mí</a></li>
            <li><a a href="mailto:magnusmanz@gmail.com?subject=Vi%20tu%20Portfolio%20y..."><title>Contacto</title><i class="fa-solid fa-comments"></i> Contacto</a></li>
          </ul>
        </nav>
        <div class="nav-responsive" >
          <i class="fa-solid fa-bars"></i>
        </div>
      </header>
    </div>
  `

  return $headerCnt
}