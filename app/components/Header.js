
export function Header() {
  const $headerCnt = document.createElement("div")

  $headerCnt.classList.add("header-container")

  $headerCnt.innerHTML = `
    <div class="header-container">
      <header>
        <div class="logo">
          <a href="#intro">
            <img src="app/assets/favicon.png" alt="Menu del header">
            <p>iManzi</p>
          </a>
        </div>
        <nav id="nav">
          <ul>
            <li><a href="#intro">Inicio</a></li>
            <li><a href="#about">Sobre Mí</a></li>
            <li><a href="#skills">Skills</a></li>
            <li><a href="#resume">Currículum</a></li>
            <li><a href="#portfolio">Portfolio</a></li>
            <li><a href="#contact">Contact</a></li>
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