// Mobile Menu Toggle
const menuToggle = document.querySelector('.menu-toggle');
const mobileMenu = document.querySelector('.mobile-menu');
const mobileLinks = document.querySelectorAll('.mobile-link, .mobile-btn');

// Toggle menu on button click
menuToggle.addEventListener('click', () => {
  menuToggle.classList.toggle('active');
  mobileMenu.classList.toggle('active');
  document.body.style.overflow = mobileMenu.classList.contains('active') ? 'hidden' : '';
});

// Close menu when clicking on a link
mobileLinks.forEach(link => {
  link.addEventListener('click', () => {
    menuToggle.classList.remove('active');
    mobileMenu.classList.remove('active');
    document.body.style.overflow = '';
  });
});

// Close menu when clicking outside
mobileMenu.addEventListener('click', (e) => {
  if (e.target === mobileMenu) {
    menuToggle.classList.remove('active');
    mobileMenu.classList.remove('active');
    document.body.style.overflow = '';
  }
});

// Scroll down functionality
const scrollButton = document.querySelector('.sobre-nos-scroll');
if (scrollButton) {
  scrollButton.addEventListener('click', () => {
    const sobreNosSection = document.querySelector('.sobre-nos');
    const nextSection = sobreNosSection.nextElementSibling;

    if (nextSection) {
      nextSection.scrollIntoView({ behavior: 'smooth' });
    }
  });
}
