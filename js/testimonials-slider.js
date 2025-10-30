// Testimonials Slider
document.addEventListener("DOMContentLoaded", function () {
  const slider = document.querySelector(".testimonials-slider");
  const slides = document.querySelectorAll(".slider-testimonials");
  const prevButton = document.querySelector(".testimonials-arrow-left");
  const nextButton = document.querySelector(".testimonials-arrow-right");

  if (!slider || slides.length === 0) return;

  let currentSlide = 0;

  function showSlide(index) {
    // Remove active class from all slides
    slides.forEach((slide) => {
      slide.classList.remove("active");
    });

    // Add active class to current slide
    slides[index].classList.add("active");
  }

  function nextSlide() {
    currentSlide = (currentSlide + 1) % slides.length;
    showSlide(currentSlide);
  }

  function prevSlide() {
    currentSlide = (currentSlide - 1 + slides.length) % slides.length;
    showSlide(currentSlide);
  }

  // Event listeners for navigation buttons
  if (nextButton) {
    nextButton.addEventListener("click", nextSlide);
  }

  if (prevButton) {
    prevButton.addEventListener("click", prevSlide);
  }

  // Initialize first slide
  showSlide(currentSlide);
});
