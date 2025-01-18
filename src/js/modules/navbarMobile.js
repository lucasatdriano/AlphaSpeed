// Script para abrir navbar mobile

export function initToggleMenuMobile() {
    const buttonsNav = document.querySelectorAll('.btn-nav');
    const out = document.querySelector('main');
    const btnMob = document.getElementById('menuMob');
    const nav = document.getElementById('navBarMobile');

    function toggleMenuMobile(event) {
        nav.classList.toggle('active');
        const active = nav.classList.contains('active');
        event.currentTarget.setAttribute('aria-expanded', active);
        if (active) {
            event.currentTarget.setAttribute('aria-label', 'Fechar Menu');
        } else {
            event.currentTarget.setAttribute('aria-label', 'Abrir Menu');
        }
    }

    btnMob.addEventListener('click', toggleMenuMobile);

    function removeMenu() {
        nav.classList.remove('active');
    }

    buttonsNav.forEach((buttonNav) => {
        buttonNav.addEventListener('click', removeMenu);
    });

    out.addEventListener('click', removeMenu);
}
