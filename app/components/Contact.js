
export function Contact() {
  const $section = document.createElement("section");
  $section.id = "contact"
  $section.classList.add("contact", "sectionHighlight");

  $section.innerHTML = `
    <div class="section-content">
      <h2>Contacto</h2>

      <div class="row">
      
        <!--Mapa-->
        <div class="col" data-aos="zoom-in-left">
          <div class="location">
            <div class="frame">
              <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d113927.15975822252!2d-65.3049955641985!3d-26.832835033024423!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94223792d6c56903%3A0xf88d5b92b5c56527!2sSan%20Miguel%20de%20Tucum%C3%A1n%2C%20Tucum%C3%A1n!5e0!3m2!1ses!2sar!4v1725310600696!5m2!1ses!2sar" width="400" height="300" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
            </div>
            <div class="place">
              <strong>Base: </strong>
              <span>
                <i class="fa-solid fa-location-dot"></i>San Miguel de Tucumán, Argentina
              </span>
            </div>
            <p>Me encuentro disponible para trabajar, de manera remota, en cualquier lugar del mundo... Y si la situación lo amerita, también estoy dispuesto a una relocación, a donde sea que el código me lleve.</p>
          </div>
        </div>
          
        <!--Contact Data-->
        <div class="col" data-aos="zoom-in-right">
          <div class="info">
            <em>¡Gracias por visitar mi portfolio! Si deseas ponerte en contacto, no dudes en hacer clic en los botones a continuación.</em>
            <ul>
              <li>
                  <button class="btn-contact copy-btn" data-aos="flip-up">
                    <i class="fa-solid fa-mobile-screen"></i>
                    Copiar Celular
                    <span class="overlay"></span>
                  </button>
              </li>
              <li>
                  <button class="btn-contact copy-btn email" data-aos="flip-up">
                    <i class="fa-regular fa-paste"></i>
                    Copiar E-mail
                    <span class="overlay"></span>
                  </button>
              </li>
              <li>
                  <a href="https://www.linkedin.com/in/manzaraz" target="_blank" rel="noopener noreferrer" data-aos="flip-up">
                    <i class="fa-brands fa-linkedin"></i>
                    Perfil de Linkedin
                    <span class="overlay"></span>
                  </a>
              </li>
              <li>
                  <a href="https://api.whatsapp.com/send?phone=+5493815091639&text=¡%F0%9F%91%8B%F0%9F%8F%BC%20Hola%20Christian!,%20vi%20tu%20portfolio%20y%20me%20decidí%20a%20enviarte%20este%20mensaje" target="_blank" rel="noopener noreferrer" data-aos="flip-up">
                    <i class="fa-brands fa-whatsapp"></i>
                    Envíame un WhatsApp
                    <span class="overlay"></span>
                  </a>
              </li>
              <li>
                  <a href="mailto:magnusmanz@gmail.com?subject=Vi%20tu%20Portfolio%20y..." data-aos="flip-up">
                    <i class="fa-solid fa-envelope"></i>
                    Envíame un E-mail
                    <span class="overlay"></span>
                  </a>
              </li>
            </ul>
          </div>
        </div>

      </div>
    </div>
  `

  return $section
}

