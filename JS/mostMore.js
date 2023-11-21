// infos Um

const infosUm = document.getElementById("moreUm")
const arrowUm = document.getElementById("arrowUm")
const containerUm = document.getElementById("containerUm")

function moreInfosUm() {
    infosUm.classList.toggle('informacoes')

    if(infosUm.classList.contains("informacoes")){
        arrowUm.style.transform = "rotateX(180deg)"
        arrowUm.style.transition = "ease .3s"
    } else {
        arrowUm.style.transform = "rotateX(0deg)"
        arrowUm.style.transition = "ease .3s"
    }
}

containerUm.addEventListener('click', removeInfosDois)
containerUm.addEventListener('click', removeInfosTres)

containerUm.addEventListener('click', moreInfosUm);


            // infos Dois

const infosDois = document.getElementById("moreDois")
const arrowDois = document.getElementById("arrowDois")
const containerDois = document.getElementById("containerDois")

function moreInfosDois() {
    infosDois.classList.toggle('informacoes')

    if(infosDois.classList.contains("informacoes")){
        arrowDois.style.transform = "rotateX(180deg)"
        arrowDois.style.transition = "ease .3s"
    } else {
        arrowDois.style.transform = "rotateX(0deg)"
        arrowDois.style.transition = "ease .3s"
    }
}

containerDois.addEventListener('click', removeInfosUm)
containerDois.addEventListener('click', removeInfosTres)

containerDois.addEventListener('click', moreInfosDois);


            // infos Tres

const infosTres = document.getElementById("moreTres")
const arrowTres = document.getElementById("arrowTres")
const containerTres = document.getElementById("containerTres")

function moreInfosTres() {
    infosTres.classList.toggle('informacoes')

    if(infosTres.classList.contains("informacoes")){
        arrowTres.style.transform = "rotateX(180deg)"
        arrowTres.style.transition = "ease .3s"
    } else {
        arrowTres.style.transform = "rotateX(0deg)"
        arrowTres.style.transition = "ease .3s"
    }
}

containerTres.addEventListener('click', removeInfosUm)
containerTres.addEventListener('click', removeInfosDois)

containerTres.addEventListener('click', moreInfosTres);


            // Removes

function removeInfosUm() {
    infosUm.classList.remove('informacoes')
    
    arrowUm.style.transform = "rotateX(0deg)"
    arrowUm.style.transition = "ease .3s"
}

function removeInfosDois() {
    infosDois.classList.remove('informacoes')
    
    arrowDois.style.transform = "rotateX(0deg)"
    arrowDois.style.transition = "ease .3s"
}

function removeInfosTres() {
    infosTres.classList.remove('informacoes')

    arrowTres.style.transform = "rotateX(0deg)"
    arrowTres.style.transition = "ease .3s"
}