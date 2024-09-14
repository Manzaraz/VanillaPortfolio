
export function Header() {
  const $headerCnt = document.createElement("div")

  $headerCnt.classList.add("header-container")

  $headerCnt.innerHTML = `
    <div class="header-container">
      <header>
        <div class="logo">
          <a href="#intro">
            <title>Home Section</title>
            <title>Home Logo</title>
            <img src="app/assets/favicon.png" alt="Menu del header">
            <p>iManzi</p>
          </a>
        </div>
        <nav id="nav">
          <ul>
            <li><a href="#intro"><title>Intro</title>Inicio</a></li>
            <li><a href="#about"><title>About</title>Sobre Mí</a></li>
            <li><a href="#skills"><title>Skills</title>Skills</a></li>
            <li><a href="#resume"><title>Curriculum Vitae</title>Currículum</a></li>
            <li><a href="#portfolio"><title>Portfolio</title>Portfolio</a></li>
            <li><a href="#contact"><title><Contact/title>Contact</a></li>
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