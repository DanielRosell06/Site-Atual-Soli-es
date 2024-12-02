
let slideIndex = 0;
const slides = document.querySelectorAll('.carousel-slide');
const nextButton = document.querySelector('.next');
const prevButton = document.querySelector('.prev');

// Mostrar o slide atual
function showSlide(index) {
    slides.forEach(slide => {
        slide.classList.remove('active');
    });
    slides[index].classList.add('active');
}

// Próximo slide
function nextSlide() {
    slideIndex = (slideIndex + 1) % slides.length;
    showSlide(slideIndex);
    restarInterval()
}

// Slide anterior
function prevSlide() {
    slideIndex = (slideIndex - 1 + slides.length) % slides.length;
    showSlide(slideIndex);
    restarInterval()
}

function restarInterval() {
    clearInterval(intervalo)
    intervalo = setInterval(nextSlide, 10000);  // Remova esta linha se não quiser o carrossel automático
}

// Event listeners para os botões
nextButton.addEventListener('click', nextSlide);
prevButton.addEventListener('click', prevSlide);

// Auto avançar a cada 3 segundos (opcional)
var intervalo = setInterval(nextSlide, 10000);  // Remova esta linha se não quiser o carrossel automático



// SEGUNDO SLIDE
// Seleciona todos os slides do novo carrossel
const slides2 = document.querySelectorAll('.carousel-slide-2');
let currentIndex2 = 0;
let isTransitioning = false;

function showSlide2(index) {
    if (isTransitioning) return; // Evita cliques durante a transição
    isTransitioning = true;

    // Remove a classe active do slide atual
    slides2[currentIndex2].classList.remove('active');

    // Define o novo índice
    currentIndex2 = index;

    // Adiciona a classe active ao novo slide
    slides2[currentIndex2].classList.add('active');

    // Aguarda o tempo da transição para permitir nova mudança
    setTimeout(() => {
        isTransitioning = false;
    }, 500); // Tempo da transição (mesmo do CSS)
}

function moveSlides2(direction) {
    let nextIndex = currentIndex2 + direction;
    if (nextIndex >= slides2.length) {
        nextIndex = 0; // Volta ao primeiro slide se passar do último
    } else if (nextIndex < 0) {
        nextIndex = slides2.length - 1; // Vai para o último slide se passar do primeiro
    }
    showSlide2(nextIndex);
}

// Inicia o carrossel
showSlide2(currentIndex2);