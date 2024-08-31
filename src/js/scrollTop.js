// script para button: back to top e uso de biblioteca

const btnTopo = document.querySelector('.topo');

window.onscroll = function () {
    animarScroll();
};

function animarScroll() {
    if (
        document.body.scrollTop > 200 ||
        document.documentElement.scrollTop > 50
    ) {
        btnTopo.style.display = 'block';
    } else {
        btnTopo.style.display = 'none';
    }
}

const scrollRevealLeft = ScrollReveal({
    origin: 'left',
    distance: '40px',
    duration: 700,
    reset: false,
});

scrollRevealLeft.reveal(
    '#header #logo, #header #navBarDesktop li, #sobre .about .posicionamentoMob p, #sobre .about .posicionamentoMobDois img',
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
    '#header #navBarDesktop a.btnLogin, #header #nav #menuMob, #sobre .about .posicionamentoMobDois p, #sobre .about .posicionamentoMob img',
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

window.addEventListener('scroll', animarScroll);
