// Depoimentos Slider
(function () {
  const slider = document.querySelector(".depoimentos-slider");
  const slides = document.querySelectorAll(".slide-depoimento");
  const prevButton = document.querySelector(".depoimento-arrow-left");
  const nextButton = document.querySelector(".depoimento-arrow-right");

  if (!slider || slides.length === 0) return;

  let currentSlide = 0;
  let autoPlayInterval;

  function showSlide(index) {
    // Remove active class from all slides
    slides.forEach((slide) => {
      slide.classList.remove("active");
    });

    // Add active class to current slide
    slides[index].classList.add("active");
    currentSlide = index;
  }

  function nextSlide() {
    const nextIndex = (currentSlide + 1) % slides.length;
    showSlide(nextIndex);
  }

  function prevSlide() {
    const prevIndex = (currentSlide - 1 + slides.length) % slides.length;
    showSlide(prevIndex);
  }

  // Auto play - muda a cada 5 segundos
  function startAutoPlay() {
    autoPlayInterval = setInterval(nextSlide, 5000);
  }

  function resetAutoPlay() {
    clearInterval(autoPlayInterval);
    startAutoPlay();
  }

  // Event listeners for navigation buttons
  if (nextButton) {
    nextButton.addEventListener("click", () => {
      nextSlide();
      resetAutoPlay();
    });
  }

  if (prevButton) {
    prevButton.addEventListener("click", () => {
      prevSlide();
      resetAutoPlay();
    });
  }

  // Initialize first slide
  showSlide(currentSlide);

  // Iniciar auto-play
  startAutoPlay();
})();
