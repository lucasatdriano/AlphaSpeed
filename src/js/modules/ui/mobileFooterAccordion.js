// Script para mostrar mais no footer mobile

export function initMobileFooterAccordion() {
    const accordions = [
        { container: 'containerBuy', list: 'listBuy', arrow: 'arrowBuy' },
        { container: 'containerStore', list: 'listStore', arrow: 'arrowStore' },
        {
            container: 'containerSupport',
            list: 'listSupport',
            arrow: 'arrowSupport',
        },
    ];

    const elements = accordions.map(({ container, list, arrow }) => ({
        container: document.getElementById(container),
        list: document.getElementById(list),
        arrow: document.getElementById(arrow),
    }));

    const closeAllExcept = (exceptIndex) => {
        elements.forEach((element, index) => {
            if (
                index !== exceptIndex &&
                element.list.classList.contains('information')
            ) {
                element.list.classList.remove('information');
                if (element.arrow) {
                    element.arrow.style.transform = 'rotateX(0deg)';
                    element.arrow.style.transition = 'ease .3s';
                }
            }
        });
    };

    const toggleAccordion = (element, index) => {
        const isOpen = element.list.classList.contains('information');

        if (!isOpen) {
            closeAllExcept(index);
            element.list.classList.add('information');
            if (element.arrow) {
                element.arrow.style.transform = 'rotateX(180deg)';
                element.arrow.style.transition = 'ease .3s';
            }
        } else {
            element.list.classList.remove('information');
            if (element.arrow) {
                element.arrow.style.transform = 'rotateX(0deg)';
                element.arrow.style.transition = 'ease .3s';
            }
        }
    };

    elements.forEach((element, index) => {
        if (element.container) {
            element.container.addEventListener('click', () =>
                toggleAccordion(element, index),
            );
        }
    });
}
