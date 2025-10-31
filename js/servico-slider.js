(function () {
  const slider = document.querySelector(".servico-individual-slider");
  const slides = document.querySelectorAll(".servico-slide");
  const arrowButton = document.querySelector(".servico-arrow");

  if (!slider || !slides.length || !arrowButton) return;

  let currentSlide = 0;
  let autoPlayInterval;

  function showSlide(index) {
    slides.forEach((slide) => {
      slide.classList.remove("active");
    });
    slides[index].classList.add("active");
  }

  function nextSlide() {
    currentSlide = (currentSlide + 1) % slides.length;
    showSlide(currentSlide);
  }

  function startAutoPlay() {
    autoPlayInterval = setInterval(nextSlide, 5000);
  }

  function resetAutoPlay() {
    clearInterval(autoPlayInterval);
    startAutoPlay();
  }

  arrowButton.addEventListener("click", () => {
    nextSlide();
    resetAutoPlay();
  });

  showSlide(currentSlide);
  startAutoPlay();
})();
