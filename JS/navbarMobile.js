        // Script para abrir navbar mobile

const btnNav = document.querySelectorAll(".btn-nav")
const out = document.querySelector("main")
const btnMob = document.getElementById('menuMob')

function ToggleMenu(event) {
    if (event.type === 'touchstart') event.preventDefault(); {
        const navbar = document.getElementById('navBarMobile')
        navbar.classList.toggle('active')
        const active = navbar.classList.contains('active');
        event.currentTarget.setAttribute('aria-expanded', active);
        if (active) {
            event.currentTarget.setAttribute('aria-label', 'Fechar Menu');
        } else {
            event.currentTarget.setAttribute('aria-label', 'Abrir Menu');
        } 
    }
}

btnMob.addEventListener('click', ToggleMenu);
btnMob.addEventListener('touchstart', ToggleMenu);

function RemoveMenu() {
    navbar.classList.remove('active')
}

for(let i = 0; i < btnNav.length; i++){
    btnNav[i].addEventListener('click', RemoveMenu)
}

out.addEventListener('click', RemoveMenu)