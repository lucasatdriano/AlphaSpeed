// Script para abrir navbar mobile

export function initMobileMenu() {
    const elements = {
        button: document.getElementById('mobileMenu'),
        nav: document.getElementById('mobileNav'),
        navItems: document.querySelectorAll('.navItem'),
        main: document.querySelector('main'),
    };

    if (!elements.button || !elements.nav) return;

    const closeMenu = () => {
        elements.nav.classList.remove('active');
        elements.button.setAttribute('aria-expanded', 'false');
        elements.button.setAttribute('aria-label', 'Abrir Menu');
    };

    const openMenu = () => {
        elements.nav.classList.add('active');
        elements.button.setAttribute('aria-expanded', 'true');
        elements.button.setAttribute('aria-label', 'Fechar Menu');
    };

    const toggleMenu = () => {
        const isOpen = elements.nav.classList.contains('active');
        isOpen ? closeMenu() : openMenu();
    };

    const handleEscKey = (event) => {
        if (event.key === 'Escape' || event.key === 'Esc') {
            const isOpen = elements.nav.classList.contains('active');
            if (isOpen) {
                closeMenu();
            }
        }
    };

    elements.button.addEventListener('click', toggleMenu);
    elements.navItems.forEach((item) =>
        item.addEventListener('click', closeMenu),
    );
    if (elements.main) elements.main.addEventListener('click', closeMenu);
    document.addEventListener('keydown', handleEscKey);
}
