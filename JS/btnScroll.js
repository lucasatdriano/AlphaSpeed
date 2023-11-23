const btnSedan = document.getElementById('btnScrollSedan')
const btnSuv = document.getElementById('btnScrollSuv')
const btnHatch = document.getElementById('btnScrollHatch')
const btnSport = document.getElementById('btnScrollSport')

const sedans = document.getElementById('sedan')
const suvs = document.getElementById('suv')
const hatchs = document.getElementById('hatch')
const sports = document.getElementById('esportivos')

function scrollSedan() {
    sedans.scrollTo(1000, 0);
}
btnSedan.addEventListener('click', scrollSedan)

function scrollSuv() {
    suvs.scrollTo(1000, 0);
}
btnSuv.addEventListener('click', scrollSuv)

function scrollHatch() {
    hatchs.scrollTo(1000, 0);
}
btnHatch.addEventListener('click', scrollHatch)

function scrollSports() {
    sports.scrollTo(1000, 0);
}
btnSport.addEventListener('click', scrollSports)


