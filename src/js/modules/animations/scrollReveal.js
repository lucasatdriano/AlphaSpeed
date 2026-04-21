// Script para utilizar biblioteca Scroll Reveal

export function initScrollReveal() {
    const BASE_CONFIG = {
        distance: '40px',
        duration: 700,
        reset: false,
    };

    const REVEAL_INTERVAL = 200;

    const elementsByDirection = {
        left: [
            '#header #logo',
            '#header #desktopNav li',
            '#aboutSection .aboutContainer .aboutTextFirst',
            '#aboutSection .aboutContainer .aboutImageSecond',
        ],
        right: [
            '#header #desktopNav a.loginButton',
            '#header #mobileNav #mobileMenu',
            '#aboutSection .aboutContainer .aboutTextSecond',
            '#aboutSection .aboutContainer .aboutImageFirst',
        ],
        bottom: ['#filterSection #filterForm', 'footer .footerLinks'],
    };

    const createRevealAnimation = (origin, elements) => {
        const config = { ...BASE_CONFIG, origin };
        const scrollReveal = ScrollReveal(config);
        scrollReveal.reveal(elements.join(', '), { interval: REVEAL_INTERVAL });
    };

    Object.entries(elementsByDirection).forEach(([origin, elements]) => {
        createRevealAnimation(origin, elements);
    });
}
