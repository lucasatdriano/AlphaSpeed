const btnNav = document.querySelectorAll(".btn-nav")
const out = document.querySelector("main")
const navbar = document.getElementById('navBarMobile')
const btnMob = document.getElementById('menuMob')

function ToggleMenu() {
    navbar.classList.toggle('active')

    if(navbar.classList.contains("active")){
        btnMob.src = "imagens/fecharHam.png";
    }else{
        btnMob.src = "imagens/menuHam.png";
    }
}

function RemoveMenu() {
    navbar.classList.remove('active')
    btnMob.src = "imagens/menuHam.png";
}

btnMob.addEventListener('touchstart', ToggleMenu)

for(let i = 0; i < btnNav.length; i++){
    btnNav[i].addEventListener('touchstart', RemoveMenu)
}

out.addEventListener('touchstart', RemoveMenu)