// Script para rodar slides

export function initImageSlider() {
    const CONFIG = {
        interval: 2500, // 2,5s
        images: [
            'src/assets/images/carrossel/imgCarrossel1.jpg',
            'src/assets/images/carrossel/imgCarrossel2.jpg',
            'src/assets/images/carrossel/imgCarrossel3.jpg',
            'src/assets/images/carrossel/imgCarrossel4.jpg',
            'src/assets/images/carrossel/imgCarrossel5.jpg',
            'src/assets/images/carrossel/imgCarrossel6.jpg',
        ],
    };

    let currentIndex = 0;
    let autoSlideTimer = null;

    const elements = {
        image: document.images['slide'],
        radios: document.querySelectorAll('input[name="slideControl"]'),
        next: document.querySelector('#nextSlide'),
        prev: document.querySelector('#prevSlide'),
    };

    const getTotalSlides = () => CONFIG.images.length;
    const getNextIndex = () => (currentIndex + 1) % getTotalSlides();
    const getPrevIndex = () =>
        (currentIndex - 1 + getTotalSlides()) % getTotalSlides();

    const updateSlide = () => {
        elements.image.src = CONFIG.images[currentIndex];
        const radio = document.getElementById(`radio${currentIndex + 1}`);
        if (radio) radio.checked = true;
    };

    const goToSlide = (index) => {
        currentIndex = index;
        updateSlide();
    };

    const nextSlide = () => goToSlide(getNextIndex());
    const prevSlide = () => goToSlide(getPrevIndex());

    const startAutoSlide = () => {
        stopAutoSlide();
        autoSlideTimer = setInterval(nextSlide, CONFIG.interval);
    };

    const stopAutoSlide = () => {
        if (autoSlideTimer) {
            clearInterval(autoSlideTimer);
            autoSlideTimer = null;
        }
    };

    const restartAutoSlide = () => {
        stopAutoSlide();
        startAutoSlide();
    };

    const setupEvents = () => {
        elements.radios.forEach((radio, i) => {
            radio.addEventListener('click', () => {
                goToSlide(i);
                restartAutoSlide();
            });
        });

        if (elements.next) {
            elements.next.addEventListener('click', () => {
                nextSlide();
                restartAutoSlide();
            });
        }

        if (elements.prev) {
            elements.prev.addEventListener('click', () => {
                prevSlide();
                restartAutoSlide();
            });
        }
    };

    const init = () => {
        setupEvents();
        updateSlide();
        startAutoSlide();
    };

    init();
}
