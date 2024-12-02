let slideIndex = 0;
const slides = document.querySelectorAll('.container-portifolios');
const pontos = document.querySelectorAll('.ponto');
const nextButton = document.querySelector('.direita');
const prevButton = document.querySelector('.esquerda');
let isAnimating = false; // Para evitar que a animação comece enquanto uma já está em progresso

function fadeOut(slide, direction, callback) {
    let opacity = 1; // Começa com opacidade total
    let position = 0; // Posição inicial do slide
    const fade = setInterval(() => {
        if (opacity <= 0) {
            clearInterval(fade);
            slide.style.opacity = 0;
            slide.style.transform = `translateX(${direction === 'left' ? '-100%' : '100%'})`;
            if (callback) callback(); // Chama o callback quando terminar de esconder
        } else {
            opacity -= 0.1; // Diminui a opacidade gradativamente
            position += 10; // Move o slide gradativamente
            slide.style.opacity = opacity;
            slide.style.transform = `translateX(${direction === 'left' ? -position : position}px)`; // Move para a esquerda ou direita
        }
    }, 25); // Velocidade da animação
}

function fadeIn(slide, direction) {
    let opacity = 0; // Começa com opacidade 0
    let position = direction === 'left' ? -100 : 100; // Começa fora da tela dependendo da direção
    slide.style.opacity = 0;
    slide.style.transform = `translateX(${position}%)`; // Posiciona fora da tela
    slide.style.display = 'block'; // Garante que o slide está visível
    const fade = setInterval(() => {
        if (opacity >= 1 && position === 0) {
            clearInterval(fade);
            slide.style.opacity = 1;
            slide.style.transform = 'translateX(0)'; // Volta para a posição original
            isAnimating = false; // Libera a animação para outras interações
        } else {
            opacity += 0.1; // Aumenta a opacidade gradativamente
            position += (direction === 'left' ? 10 : -10); // Move o slide gradativamente para o centro
            if (position >= 0 && direction === 'left') {
                position = 0; // Garante que chegue à posição central ao final
            } else if (position <= 0 && direction === 'right') {
                position = 0; // Garante que chegue à posição central ao final
            }
            slide.style.opacity = opacity;
            slide.style.transform = `translateX(${position}px)`; // Move para o centro
        }
    }, 25); // Velocidade da animação
}

function nextSlide() {
    if (isAnimating) return; // Evita múltiplas animações ao mesmo tempo
    isAnimating = true; // Marca que a animação está em progresso

    const currentSlide = slides[slideIndex];
    slideIndex = (slideIndex + 1) % slides.length; // Avança para o próximo slide, e reseta no último
    const nextSlide = slides[slideIndex];

    fadeOut(currentSlide, 'right', () => {
        currentSlide.style.display = 'none'; // Esconde o slide atual ao fim da animação
        fadeIn(nextSlide, 'left'); // Exibe o próximo slide, movendo da esquerda para o centro
    });

    updateDots(); // Atualiza os pontos
}

function prevSlide() {
    if (isAnimating) return; // Evita múltiplas animações ao mesmo tempo
    isAnimating = true; // Marca que a animação está em progresso

    const currentSlide = slides[slideIndex];
    slideIndex = (slideIndex - 1 + slides.length) % slides.length; // Volta para o slide anterior, ou vai para o último se estiver no primeiro
    const prevSlide = slides[slideIndex];

    fadeOut(currentSlide, 'left', () => {
        currentSlide.style.display = 'none'; // Esconde o slide atual ao fim da animação
        fadeIn(prevSlide, 'right'); // Exibe o slide anterior, movendo da direita para o centro
    });

    updateDots(); // Atualiza os pontos
}

// Função para atualizar os pontos
function updateDots() {
    pontos.forEach((ponto, index) => {
        if (index === slideIndex) {
            ponto.classList.remove('ponto-desativo');
        } else {
            ponto.classList.add('ponto-desativo');
        }
    });
}

// Inicializa a opacidade e posição do primeiro slide e oculta os outros
slides.forEach((slide, index) => {
    if (index === 0) {
        slide.style.opacity = 1; // O primeiro slide começa visível
        slide.style.transform = 'translateX(0)'; // Começa no centro
    } else {
        slide.style.opacity = 0; // Os outros slides começam ocultos
        slide.style.display = 'none';
        slide.style.transform = 'translateX(100%)'; // Começa fora da tela
    }
});

// Event listeners
nextButton.addEventListener('click', nextSlide);
prevButton.addEventListener('click', prevSlide);
