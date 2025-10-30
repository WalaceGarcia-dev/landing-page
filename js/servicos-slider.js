// Slider de Serviços
document.addEventListener('DOMContentLoaded', function() {
  const sliderGrid = document.querySelector('.servicos-grid');
  const dots = document.querySelectorAll('.servico-dot');
  const originalItems = document.querySelectorAll('.servico-item');

  if (!sliderGrid || !dots.length || !originalItems.length) return;

  // Clonar as 4 primeiras imagens e adicionar ao final para loop contínuo
  for (let i = 0; i < 4; i++) {
    const clone = originalItems[i].cloneNode(true);
    sliderGrid.appendChild(clone);
  }

  let currentSlide = 0;
  const totalSlides = 5;
  const gap = 20;

  function getItemWidth() {
    // Calcula a largura do item baseado na primeira imagem
    const firstItem = originalItems[0];
    return firstItem.offsetWidth;
  }

  function updateSlider(smooth = true) {
    if (!smooth) {
      sliderGrid.style.transition = 'none';
    } else {
      sliderGrid.style.transition = 'transform 0.5s ease';
    }

    const itemWidth = getItemWidth();
    const translateX = -(currentSlide * (itemWidth + gap));
    sliderGrid.style.transform = `translateX(${translateX}px)`;

    // Atualizar dots
    dots.forEach((dot, index) => {
      dot.classList.toggle('active', index === currentSlide);
    });
  }

  // Avançar slide
  function nextSlide() {
    currentSlide++;
    updateSlider(true);

    // Quando chegar no slide 5 (após a última imagem original)
    // Volta instantaneamente para o slide 0 sem animação
    if (currentSlide >= totalSlides) {
      setTimeout(() => {
        currentSlide = 0;
        updateSlider(false);
      }, 500); // Aguarda a animação terminar
    }
  }

  // Click nos dots
  dots.forEach((dot, index) => {
    dot.addEventListener('click', function() {
      currentSlide = index;
      updateSlider(true);
      resetAutoPlay();
    });
  });

  // Auto play - muda a cada 5 segundos
  let autoPlayInterval = setInterval(nextSlide, 5000);

  function resetAutoPlay() {
    clearInterval(autoPlayInterval);
    autoPlayInterval = setInterval(nextSlide, 5000);
  }

  // Recalcular ao redimensionar a janela
  let resizeTimeout;
  window.addEventListener('resize', function() {
    clearTimeout(resizeTimeout);
    resizeTimeout = setTimeout(() => {
      updateSlider(false);
    }, 250);
  });

  // Inicializar
  updateSlider(false);
});
