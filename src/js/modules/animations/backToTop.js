// Script para button: voltar ao topo

export function initBackToTop() {
    const topButton = document.querySelector('.top-button');

    if (!topButton) return;

    const SCROLL_THRESHOLD = 200;

    const toggleButtonVisibility = () => {
        const scrollPosition =
            window.scrollY || document.documentElement.scrollTop;
        const shouldShow = scrollPosition > SCROLL_THRESHOLD;

        if (shouldShow) {
            topButton.classList.add('visible');
            topButton.setAttribute('aria-label', 'Voltar ao topo');
        } else {
            topButton.classList.remove('visible');
            topButton.setAttribute('aria-label', '');
        }
    };

    const scrollToTop = (event) => {
        event.preventDefault();
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    };

    window.addEventListener('scroll', toggleButtonVisibility);
    topButton.addEventListener('click', scrollToTop);

    toggleButtonVisibility();
}
