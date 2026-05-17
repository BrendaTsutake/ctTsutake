document.addEventListener('DOMContentLoaded', () => {
    const slider = document.querySelector('.slider');
    const slides = document.querySelectorAll('.slide');
    const prevBtn = document.querySelector('.gallery-wrapper .slider-btn.prev');
    const nextBtn = document.querySelector('.gallery-wrapper .slider-btn.next');

    if (!slider || !prevBtn || !nextBtn || slides.length === 0) {
        console.warn('Slider da galeria não encontrado ou incompleto. Verifique o HTML.');
        return;
    }

    let currentIndex = 0;
    let slideWidth = 0;

    function calculateSlideWidthAndPosition() {

        slideWidth = slides[0].offsetWidth; 
        updateSliderPosition();
        // console.log('Slide width calculated:', slideWidth); // Para depuração
    }

    function updateSliderPosition() {
        slider.style.transform = `translateX(${-currentIndex * slideWidth}px)`;
    }
    calculateSlideWidthAndPosition();

    nextBtn.addEventListener('click', () => {
        if (currentIndex < slides.length - 1) {
            currentIndex++;
        } else {
            currentIndex = 0; // Loop infinito
        }
        updateSliderPosition();
    });

    prevBtn.addEventListener('click', () => {
        if (currentIndex > 0) {
            currentIndex--;
        } else {
            currentIndex = slides.length - 1; // Loop infinito
        }
        updateSliderPosition();
    });

    // recalcula a largura do slide e a posição sempre que a janela é redimensionada
    window.addEventListener('resize', calculateSlideWidthAndPosition);

    // recalcula a largura do slide e a posição depois que TODOS os recursos (incluindo imagens) foram carregados
    // garante que as imagens tenham suas dimensões finais antes do cálculo
    window.addEventListener('load', calculateSlideWidthAndPosition);
});

function openNav() {
    document.getElementById("contactSidebar").style.width="300px";
}

function closeNav() {
    document.getElementById("contactSidebar").style.width="0";
}

function abrirPopup(nome, preco, imagem) {
    document.getElementById("titulo-pop-up").textContent = nome;
    document.getElementById("preco-pop-up").textContent = preco;
    document.getElementById("foto-pop-up").src = imagem;
    document.getElementById("janela-pop-up").style.display = "block";
}

function fechar() {
    document.getElementById("janela-pop-up").style.display = "none";
}