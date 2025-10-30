// Slider de Serviços
document.addEventListener('DOMContentLoaded', function() {
  const sliderWrapper = document.querySelector('.servicos-slider-wrapper');
  const leftArrow = document.querySelector('.arrow-left');
  const rightArrow = document.querySelector('.arrow-right');
  const originalCards = document.querySelectorAll('.servico-card');

  if (!sliderWrapper || !leftArrow || !rightArrow || originalCards.length === 0) return;

  // Clona todas as imagens para criar loop infinito
  // Ordem: [1,2,3,4,5] + [1,2,3,4,5] clonadas = total 10 cards
  originalCards.forEach(card => {
    const clone = card.cloneNode(true);
    sliderWrapper.appendChild(clone);
  });

  let currentIndex = 0;
  const cardWidth = 220;
  const gap = 20;
  const cardTotalWidth = cardWidth + gap;
  const totalOriginalCards = originalCards.length; // 5 cards originais
  const visibleCards = 4;

  function updateSliderPosition(smooth = true) {
    if (!smooth) {
      sliderWrapper.style.transition = 'none';
    } else {
      sliderWrapper.style.transition = 'transform 0.5s ease';
    }

    const translateX = -(currentIndex * cardTotalWidth);
    sliderWrapper.style.transform = `translateX(${translateX}px)`;
  }

  leftArrow.addEventListener('click', function() {
    currentIndex--;
    updateSliderPosition(true);

    // Se chegou antes da primeira imagem, pula para o clone no final
    if (currentIndex < 0) {
      setTimeout(() => {
        currentIndex = totalOriginalCards - 1; // posição 4 (última imagem do set original)
        updateSliderPosition(false);
      }, 500);
    }
  });

  rightArrow.addEventListener('click', function() {
    currentIndex++;
    updateSliderPosition(true);

    // Se passou da 5ª imagem (index 5), volta para o início (index 1)
    // Isso cria: 1,2,3,4 -> 2,3,4,5 -> 3,4,5,1 -> 4,5,1,2 -> 5,1,2,3 -> 1,2,3,4
    if (currentIndex >= totalOriginalCards) {
      setTimeout(() => {
        currentIndex = 0;
        updateSliderPosition(false);
      }, 500);
    }
  });

  // Inicializa mostrando img1, img2, img3, img4 (index 0)
  updateSliderPosition(false);
});
