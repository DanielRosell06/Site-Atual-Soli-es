// Fecha o menu ao clicar em um botão do menu
function toggleMenu() {
    const navbarLinks = document.querySelector('.navbar-links');
    navbarLinks.classList.toggle('active');
}

// Fecha o menu ao clicar em qualquer botão
document.querySelectorAll('.navbar-links button').forEach(button => {
    button.addEventListener('click', () => {
        document.querySelector('.navbar-links').classList.remove('active');
    });
});

// Fecha o menu ao clicar fora dele
window.addEventListener('click', function(event) {
    const navbarLinks = document.querySelector('.navbar-links');
    const menuIcon = document.querySelector('.menu-icon');
    if (!navbarLinks.contains(event.target) && !menuIcon.contains(event.target)) {
        navbarLinks.classList.remove('active');
    }
});

// Fecha o menu ao rolar a tela
window.addEventListener('scroll', function() {
    const navbarLinks = document.querySelector('.navbar-links');
    navbarLinks.classList.remove('active');
});
