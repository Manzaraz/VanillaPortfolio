

export function Footer() {
  const $footer = document.createElement("footer")
  $footer.setAttribute("data-aos", "zoom-in-up")

  $footer.innerHTML = `
    <a href="#intro" class="up" data-aos="flip-up">
      <i class="fa-solid fa-angles-up"></i>
    </a>
    <div class="s-media">
        <a href="https://github.com/Manzaraz" target="_blank" rel="noopener noreferrer" data-aos="flip-right"  data-aos-delay="25">
          <i class="fa-brands fa-github"></i>
        </a>
        <a href="https://www.linkedin.com/in/manzaraz/" target="_blank" rel="noopener noreferrer" data-aos="flip-right" data-aos-delay="50">
          <i class="fa-brands fa-linkedin-in"></i>
        </a>
        <a href="https://x.com/MagnusManz" target="_blank" rel="noopener noreferrer" data-aos="flip-right" data-aos-delay="75">
          <i class="fa-brands fa-x-twitter"></i>
        </a>
        <a href="mailto:magnusmanz@gmail.com?subject=Vi%20tu%20Portfolio%20y..." data-aos="flip-right" data-aos-delay="100">
          <i class="fa-regular fa-envelope"></i>
        </a>
        <a href="https://wa.me/5493815091639" target="_blank" rel="noopener noreferrer" data-aos="flip-right" data-aos-delay="125">
          <i class="fa-brands fa-whatsapp"></i>
        </a>
    </div>
  `

  return $footer
}