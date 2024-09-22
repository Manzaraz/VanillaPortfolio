

export function About() {
  const $section = document.createElement("section")
  $section.id = "about";
  $section.classList.add("about", "sectionHighlight");

  $section.innerHTML = `
    <div class="section-content">
      <h2>Sobre Mí</h2>
      <p>
        <span>Hola, soy Christian.</span>
        Soy un desarrollador apasionado con una sólida base en desarrollo web y una creciente experiencia en el ecosistema Apple. Con 2 años como freelance, he construido soluciones web personalizadas para diversos clientes. Además, he compartido mis conocimientos como profesor de frontend en Digital House, inspirando a la próxima generación de desarrolladores. Actualmente, estoy ampliando mis horizontes hacia el desarrollo iOS, explorando las posibilidades de Swift para crear aplicaciones nativas para iPhone, iPad, Mac, visionOS y tvOS. Mi objetivo es combinar mi experiencia en web con las últimas tecnologías de Apple para ofrecer soluciones innovadoras y de alta calidad.
      </p>

      <div class="row">
        <!-- datos Personales -->
        <div class="col">
          <h3>Datos Personales</h3>
          <ul>        
            <li>
              <strong>Website</strong>
              www.manzaraz.com
            </li>
            <li>
              <strong>Dirección</strong>
              San Miguel de Tucumán, Argentina
            </li>
            <li>
              <strong>Cargo</strong>
              <span>Freelance</span>
              <span>Profesor</span>
            </li>
          </ul>
        </div>
        <!-- datos Personales -->
        <div class="col">
          <h3>Intereses</h3>
          <div class="interest-content">
            <div class="interest" data-aos="flip-up" data-aos-delay="150">
              <i class="fa-solid fa-paw"></i>
              Mascotas
            </div>
            <div class="interest" data-aos="flip-up" data-aos-delay="300">
              <i class="fa-solid fa-code"></i>
              Codear
            </div>
            <div class="interest" data-aos="flip-up" data-aos-delay="450">
              <i class="fa-brands fa-apple"></i>
              Entornos Apple
            </div>
            <div class="interest" data-aos="flip-up" data-aos-delay="600">
              <i class="fa-solid fa-book"></i>
              Libros
            </div>
            <div class="interest" data-aos="flip-up" data-aos-delay="750">
              <i class="fa-solid fa-palette"></i>
              Arte
            </div>
            <div class="interest" data-aos="flip-up" data-aos-delay="900">
              <i class="fa-solid fa-film"></i>
              Películas
            </div>
            <div class="interest" data-aos="flip-up" data-aos-delay="150">
              <i class="fa-solid fa-headphones"></i>
              Música
            </div>

            <div class="interest" data-aos="flip-up" data-aos-easing="ease-in-back" data-aos-delay="300">
              <i class="fa-solid fa-plane-departure"></i>
              Viajar
            </div>
          </div>
        </div>
      </div>
      <div class="btn-conteiner">
        <a class="btn link"  href="/app/assets/cvManzaraz2024.pdf" target="_blank" rel="noopener noreferrer">
          <title>Descargar mi Currículum</title>
          Descarga mi Curriculum
          <span class="overlay"></span>
        </a>
        <a class="btn link"  href="/app/assets/cvManzaraz2024en.pdf" target="_blank" rel="noopener noreferrer">
          <title>Download my Resume</title>
          Download my Resume
          <span class="overlay"></span>
        </a>
      </div>
    </div>
  `

  return $section
}