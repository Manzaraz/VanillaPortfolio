

export function About() {
  const $section = document.createElement("section")
  $section.id = "about";
  $section.classList.add("about", "sectionHighlight");

  $section.innerHTML = `
    <div class="section-content">
      <h2>Sobre Mí</h2>
      <p>
        <span>Hola, soy Christian.</span>
        Soy un apasionado del desarrollo web y docente en DigitalHouse, donde disfruto enseñar tecnologías como HTML, CSS, JavaScript y React. También me encanta introducir a mis alumnos en el mundo de las tecnologías móviles, como PWAs y Swift. Actualmente, tengo un sólido conocimiento en Swift y sus frameworks, lo que me permite explorar diversas arquitecturas y patrones de diseño. Busco un puesto como desarrollador iOS, siempre enfocado en la mejora continua y la colaboración en equipo.
      </p>

      <div class="row">
        <!-- datos Personales -->
        <div class="col">
          <h3>Datos Personales</h3>
          <ul>
            <li>
              <strong>Cumpleaños</strong>
              3 de Octubre
            </li>
        
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
      <button>
        <i class="fa-solid fa-download"></i>
        Descargar CV
        <span class="overlay"></span>
      </button>
    </div>
  `

  return $section
}