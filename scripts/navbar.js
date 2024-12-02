let lastScrollTop = 0;
const navbar = document.getElementById("navbar");
let isScrollingToSection = false; // Variável de controle

// Função básica para a rolagem da tela
function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);

    // Oculta a barra de navegação antes de rolar
    isScrollingToSection = true;
    navbar.style.top = "-70px"; // Esconde a barra antes da rolagem

    section.scrollIntoView({ behavior: 'smooth' });

    // Usa um timeout para reativar o comportamento normal da navbar após a rolagem
    setTimeout(() => {
        isScrollingToSection = false;
    }, 1000); // Ajuste o tempo conforme o comportamento de rolagem desejado
}

// Adiciona a transição diretamente pelo JavaScript
navbar.style.transition = "top 0.2s"; // Transição suave de 0.2 segundos

// Evento para esconder ou mostrar a barra de navegação conforme a rolagem do usuário
window.addEventListener("scroll", function() {
    // Não executa a lógica de rolagem se estiver navegando para uma seção
    if (isScrollingToSection) return;

    let scrollTop = window.pageYOffset || document.documentElement.scrollTop;

    if (scrollTop > lastScrollTop) {
        // Usuário rolando para baixo
        navbar.style.top = "-70px"; // Esconde a barra suavemente
    } else {
        // Usuário rolando para cima
        navbar.style.top = "0"; // Mostra a barra suavemente
    }

    lastScrollTop = scrollTop;
});

function hideNavBar() {
    navbar.style.top = "-70px";
}
