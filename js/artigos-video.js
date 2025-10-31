// Controle do botão de play nos vídeos de artigos
(function () {
  const artigoItems = document.querySelectorAll(".artigo-item");

  artigoItems.forEach((item) => {
    const video = item.querySelector("video");
    const overlay = item.querySelector(".video-overlay");
    const videoContainer = item.querySelector(".artigo-video");

    // Ao clicar no overlay ou container, reproduz o vídeo
    if (videoContainer && video && overlay) {
      videoContainer.addEventListener("click", function () {
        if (video.paused) {
          video.play();
          overlay.style.opacity = "0";
          overlay.style.pointerEvents = "none";
        }
      });

      // Quando o vídeo começar a tocar, esconde o overlay
      video.addEventListener("play", function () {
        overlay.style.opacity = "0";
        overlay.style.pointerEvents = "none";
      });

      // Quando o vídeo pausar, mostra o overlay novamente
      video.addEventListener("pause", function () {
        overlay.style.opacity = "1";
        overlay.style.pointerEvents = "all";
      });

      // Quando o vídeo terminar, mostra o overlay novamente
      video.addEventListener("ended", function () {
        overlay.style.opacity = "1";
        overlay.style.pointerEvents = "all";
      });
    }
  });
})();
