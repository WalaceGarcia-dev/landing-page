// Mobile Menu Toggle
(function() {
const menuToggle = document.querySelector('.menu-toggle');
const mobileMenu = document.querySelector('.mobile-menu');
const header = document.querySelector('.header');
const mobileLinks = document.querySelectorAll('.mobile-link, .mobile-btn');

// Toggle menu on button click
if (menuToggle && mobileMenu) {
  menuToggle.addEventListener('click', () => {
    menuToggle.classList.toggle('active');
    mobileMenu.classList.toggle('active');
    if (header) {
      header.classList.toggle('menu-open');
    }
    document.body.style.overflow = mobileMenu.classList.contains('active') ? 'hidden' : '';
  });
}

// Close menu when clicking on a link
if (mobileLinks.length > 0) {
  mobileLinks.forEach(link => {
    link.addEventListener('click', () => {
      if (menuToggle && mobileMenu) {
        menuToggle.classList.remove('active');
        mobileMenu.classList.remove('active');
        if (header) {
          header.classList.remove('menu-open');
        }
        document.body.style.overflow = '';
      }
    });
  });
}

// Close menu when clicking outside
if (mobileMenu) {
  mobileMenu.addEventListener('click', (e) => {
    if (e.target === mobileMenu && menuToggle) {
      menuToggle.classList.remove('active');
      mobileMenu.classList.remove('active');
      if (header) {
        header.classList.remove('menu-open');
      }
      document.body.style.overflow = '';
    }
  });
}

// Scroll down functionality
const scrollButton = document.querySelector('.sobre-nos-scroll');
if (scrollButton) {
  scrollButton.addEventListener('click', () => {
    // Busca a próxima seção (Especialidades)
    const nextSection = document.querySelector('.nossos-servicos');
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: 'smooth' });
    }
  });
}
})();
