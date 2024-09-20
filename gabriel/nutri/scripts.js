let currentIndex = 0;
const totalSlides = document.querySelectorAll('.carousel-images div').length;

function moveSlide(direction) {
    currentIndex = (currentIndex + direction + totalSlides) % totalSlides;
    updateCarousel();
}

function updateCarousel() {
    const slides = document.querySelector('.carousel-images');
    const offset = -currentIndex * 25; // Para mover 100% para cada imagem
    slides.style.transform = `translateX(${offset}%)`;
}

// Função para passar automaticamente as imagens
function autoSlide() {
    moveSlide(1);
}

// Inicia o carrossel automático
setInterval(autoSlide, 6000); // Muda a imagem a cada 4 segundos