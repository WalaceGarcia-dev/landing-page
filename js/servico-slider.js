(function () {
  const slider = document.querySelector(".servico-individual-slider");
  const slides = document.querySelectorAll(".servico-slide");
  const arrowButton = document.querySelector(".servico-arrow");

  if (!slider || !slides.length || !arrowButton) return;

  let currentSlide = 0;

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

  arrowButton.addEventListener("click", nextSlide);
  showSlide(currentSlide);
})();
