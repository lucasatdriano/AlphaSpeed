const localizacao = document.getElementById("local")
const seta = document.getElementById("seta")
const abrir = document.getElementById("openLocal")

function LocalAbrir() {
    localizacao.classList.toggle('ativo')

    if(localizacao.classList.contains("ativo")) {
        seta.style.transform = "rotateX(-180deg)"
        seta.style.transition = "ease .5s"
    } else {
        seta.style.transform = "rotateX(0deg)"
        seta.style.transition = "ease .5s"
    }
}

abrir.addEventListener('click', LocalAbrir)
abrir.addEventListener('touchstart', LocalAbrir)