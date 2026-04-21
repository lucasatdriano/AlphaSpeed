// Script para abrir localização

export function initLocationToggle() {
    const container = document.querySelector('#location');
    const trigger = document.querySelector('#locationOpen');
    const arrow = document.querySelector('#locationArrow');

    if (!container || !trigger || !arrow) return;

    const updateAriaAttributes = (isActive) => {
        trigger.setAttribute('aria-expanded', isActive);
        trigger.setAttribute(
            'aria-label',
            isActive ? 'Fechar localização' : 'Abrir localização',
        );
    };

    const toggleLocation = () => {
        const isActive = container.classList.toggle('active');

        arrow.style.transform = isActive ? 'rotateX(180deg)' : 'rotateX(0deg)';
        arrow.style.transition = 'ease 0.5s';

        updateAriaAttributes(isActive);
    };

    const handleKeyDown = (event) => {
        if (event.key === 'Enter' || event.key === ' ') {
            event.preventDefault();
            toggleLocation();
        }
    };

    trigger.setAttribute('role', 'button');
    trigger.setAttribute('aria-expanded', 'false');
    trigger.setAttribute('aria-label', 'Abrir localização');

    // Event listeners
    trigger.addEventListener('click', toggleLocation);
    trigger.addEventListener('keydown', handleKeyDown);
}
