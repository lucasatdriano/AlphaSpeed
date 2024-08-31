        // Script para abrir navbar mobile

const btnNav = document.querySelectorAll(".btn-nav");
const out = document.querySelector("main");
const btnMob = document.getElementById('menuMob');
const nav = document.getElementById('nav');

function ToggleMenu(event) {
    nav.classList.toggle('active')
    const active = nav.classList.contains('active');
    event.currentTarget.setAttribute('aria-expanded', active);
    if (active) {
        event.currentTarget.setAttribute('aria-label', 'Fechar Menu');
    } else {
        event.currentTarget.setAttribute('aria-label', 'Abrir Menu');
    } 
}

btnMob.addEventListener('click', ToggleMenu);

function RemoveMenu() {
    nav.classList.remove('active')
}

for(let i = 0; i < btnNav.length; i++){
    btnNav[i].addEventListener('click', RemoveMenu)
}

out.addEventListener('click', RemoveMenu)