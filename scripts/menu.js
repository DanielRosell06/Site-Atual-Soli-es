const botao = document.getElementById('menu-botao');

function toggleMenu() {
    const MenuNavbarLinks = document.querySelector('.menu-navbar-links');
    MenuNavbarLinks.classList.toggle('menu-ativo'); 
}

// Fecha o menu ao clicar fora dele
window.addEventListener('click', function(event) {
    const MenuNavbarLinks = document.querySelector('.menu-navbar-links');
    const menuIcon = document.querySelector('.menu-navbar');
    if (!MenuNavbarLinks.contains(event.target) && !menuIcon.contains(event.target)) {
        MenuNavbarLinks.classList.remove('menu-ativo');
    }
});
    

// Fecha o menu ao rolar a tela
window.addEventListener('scroll', function() {
    const MenuNavbarLinks = document.querySelector('.menu-navbar-links');
    MenuNavbarLinks.classList.remove('menu-ativo'); 
});

botao.addEventListener("click", toggleMenu);
