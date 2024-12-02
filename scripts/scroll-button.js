window.onscroll = function() { showButtonOnScroll() };

function showButtonOnScroll() {
    const button = document.getElementById("topButton");

    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        button.style.display = "block"; // Exibe o botão
    } else {
        button.style.display = "none"; // Oculta o botão
    }
}

// Função para rolar suavemente até o topo da página
function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' }); // Rola suavemente para o topo
}