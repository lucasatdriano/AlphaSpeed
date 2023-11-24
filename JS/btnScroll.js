        // Script para scrollar carros para o lado

const btnSedan = document.getElementById('btnScrollSedan')
const btnSuv = document.getElementById('btnScrollSuv')
const btnHatch = document.getElementById('btnScrollHatch')
const btnSport = document.getElementById('btnScrollSport')
const btnAll = document.getElementById('btnScrollAll')

const btnSedanLeft = document.getElementById('btnScrollSedanLeft')
const btnSuvLeft = document.getElementById('btnScrollSuvLeft')
const btnHatchLeft = document.getElementById('btnScrollHatchLeft')
const btnSportLeft = document.getElementById('btnScrollSportLeft')
const btnAllLeft = document.getElementById('btnScrollAllLeft')

const sedans = document.getElementById('sedan')
const suvs = document.getElementById('suv')
const hatchs = document.getElementById('hatch')
const sports = document.getElementById('esportivos')
const all = document.getElementById('todosCarros')

function scrollSedan() {
    sedans.scrollTo(3000, 0);
}
btnSedan.addEventListener('click', scrollSedan)

function scrollSuv() {
    suvs.scrollTo(3000, 0);
}
btnSuv.addEventListener('click', scrollSuv)

function scrollHatch() {
    hatchs.scrollTo(3000, 0);
}
btnHatch.addEventListener('click', scrollHatch)

function scrollSport() {
    sports.scrollTo(3000, 0);
}
btnSport.addEventListener('click', scrollSport)

function scrollAll() {
    all.scrollTo(3000, 0);
}
btnAll.addEventListener('click', scrollAll)


    // btnScrool voltar para esquerda

function scrollSedanLeft() {
    sedans.scrollTo(-3000, 0);
}
btnSedanLeft.addEventListener('click', scrollSedanLeft)

function scrollSuvLeft() {
    suvs.scrollTo(-3000, 0);
}
btnSuvLeft.addEventListener('click', scrollSuvLeft)

function scrollHatchLeft() {
    hatchs.scrollTo(-3000, 0);
}
btnHatchLeft.addEventListener('click', scrollHatchLeft)

function scrollSportLeft() {
    sports.scrollTo(-3000, 0);
}
btnSportLeft.addEventListener('click', scrollSportLeft)

function scrollAllLeft() {
    all.scrollTo(-3000, 0);
}
btnAllLeft.addEventListener('click', scrollAllLeft)