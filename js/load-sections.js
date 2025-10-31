// Carrega as seções da página dinamicamente
document.addEventListener("DOMContentLoaded", function () {
  // Define as seções e seus respectivos containers
  const sections = [
    { file: "header.html", container: "header-container" },
    { file: "slider.html", container: "slider-container" },
    { file: "sobre-nos.html", container: "sobre-nos-container" },
    { file: "especialidades.html", container: "especialidades-container" },
    {
      file: "servico-individual.html",
      container: "servico-individual-container",
    },
    { file: "depoimentos.html", container: "depoimentos-container" },
    { file: "galeria.html", container: "galeria-container" },
    { file: "artigos.html", container: "artigos-container" },
    { file: "footer.html", container: "footer-container" },
  ];

  // Função para carregar uma seção
  function loadSection(file, containerId) {
    const container = document.getElementById(containerId);
    if (!container) {
      console.error(`Container ${containerId} não encontrado`);
      return Promise.reject();
    }

    return fetch(`./sections/${file}`)
      .then((response) => {
        if (!response.ok) {
          throw new Error(`Erro ao carregar ${file}: ${response.statusText}`);
        }
        return response.text();
      })
      .then((html) => {
        container.innerHTML = html;
      })
      .catch((error) => {
        console.error(error);
        container.innerHTML = `<p>Erro ao carregar a seção ${file}</p>`;
      });
  }

  // Carrega todas as seções em sequência
  Promise.all(
    sections.map((section) => loadSection(section.file, section.container))
  ).then(() => {
    // Depois que todas as seções foram carregadas, inicializa os scripts
    console.log("Todas as seções foram carregadas!");

    // Recarrega os scripts que dependem do DOM
    initializeScripts();

    // Dispara evento customizado para sinalizar que as seções foram carregadas
    const event = new Event("sectionsLoaded");
    document.dispatchEvent(event);
  });

  // Função para carregar scripts dinamicamente
  function loadScript(src) {
    return new Promise((resolve, reject) => {
      const script = document.createElement("script");
      script.src = src;
      script.onload = resolve;
      script.onerror = reject;
      document.body.appendChild(script);
    });
  }

  // Função para inicializar scripts após as seções carregarem
  async function initializeScripts() {
    try {
      await loadScript("./js/slider.js");
      await loadScript("./js/menu.js");
      await loadScript("./js/servicos-slider.js");
      await loadScript("./js/servico-slider.js");
      await loadScript("./js/depoimentos-slider.js");
      await loadScript("./js/artigos-video.js");
      console.log("Todos os scripts foram carregados com sucesso!");
    } catch (error) {
      console.error("Erro ao carregar scripts:", error);
    }
  }
});
