const btnSedan = document.getElementById('btnScrollSedan')
const btnSuv = document.getElementById('btnScrollSuv')
const btnHatch = document.getElementById('btnScrollHatch')
const btnSport = document.getElementById('btnScrollSport')
const btnAll = document.getElementById('btnScrollAll')

const sedans = document.getElementById('sedan')
const suvs = document.getElementById('suv')
const hatchs = document.getElementById('hatch')
const sports = document.getElementById('esportivos')
const all = document.getElementById('todosCarros')

function scrollSedan() {
    sedans.scrollTo(1000, 0);
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

function scrollSports() {
    sports.scrollTo(3000, 0);
}
btnSport.addEventListener('click', scrollSports)

function scrollAll() {
    all.scrollTo(3000, 0);
}
btnAll.addEventListener('click', scrollAll)
