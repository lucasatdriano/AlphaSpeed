// script para utilizar biblioteca scroll reveal

export function initScrollReveal() {
    const scrollRevealLeft = ScrollReveal({
        origin: 'left',
        distance: '40px',
        duration: 700,
        reset: false,
    });

    scrollRevealLeft.reveal(
        '#header #logo, #header #navBarDesktop li, #sobre .about .texto1, #sobre .about .imagem2',
        {
            interval: 200,
        },
    );

    const scrollRevealRight = ScrollReveal({
        origin: 'right',
        distance: '40px',
        duration: 700,
        reset: false,
    });

    scrollRevealRight.reveal(
        '#header #navBarDesktop a.btnLogin, #header #nav #menuMob, #sobre .about .texto2, #sobre .about .imagem1',
        {
            interval: 200,
        },
    );

    const scrollRevealBottom = ScrollReveal({
        origin: 'bottom',
        distance: '40px',
        duration: 700,
        reset: false,
    });

    scrollRevealBottom.reveal('#filtragem #filtro, #contato .services', {
        interval: 200,
    });
}
