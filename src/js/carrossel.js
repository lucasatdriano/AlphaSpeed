// Script para rodar slides

var contador = 1;
const img1 = 'src/images/carrossel/imgCarrossel2.jpg';
const img2 = 'src/images/carrossel/imgCarrossel3.jpg';
const img3 = 'src/images/carrossel/imgCarrossel4.jpg';
const img4 = 'src/images/carrossel/imgCarrossel5.jpg';
const img5 = 'src/images/carrossel/imgCarrossel6.jpg';
const img6 = 'src/images/carrossel/imgCarrossel1.jpg';
var tempo = 2500;
var exibir = setInterval('Exibindo()', tempo);

function Exibindo() {
    document.images['slide'].src = eval('img' + contador);
    document.getElementById('v' + contador).checked = true;

    if (contador < 6) {
        contador++;
    } else {
        contador = 1;
    }
}

function Muda(x) {
    clearInterval(exibir);
    contador = x;
    exibir = setInterval(Exibindo(), tempo);
}

const btnProx = document.querySelector('#setaSlidesProx');
const btnAnt = document.querySelector('#setaSlidesAnt');

function Anterior() {
    document.images['slide'].src = eval('img' + contador);

    if (contador == 6) {
        Muda(5);
        contador = 5;
    } else if (contador == 5) {
        Muda(4);
        contador = 4;
    } else if (contador == 4) {
        Muda(3);
        contador = 3;
    } else if (contador == 3) {
        Muda(2);
        contador = 2;
    } else if (contador == 2) {
        Muda(1);
        contador = 1;
    } else {
        Muda(6);
        contador = 6;
    }

    clearInterval(exibir);
    exibir = setInterval('Exibindo()', tempo);
}
btnAnt.addEventListener('click', Anterior);

function Proximo() {
    document.images['slide'].src = eval('img' + contador);

    if (contador == 1) {
        Muda(1);
        contador = 2;
    } else if (contador == 2) {
        Muda(2);
        contador = 3;
    } else if (contador == 3) {
        Muda(3);
        contador = 4;
    } else if (contador == 4) {
        Muda(4);
        contador = 5;
    } else if (contador == 5) {
        Muda(5);
        contador = 6;
    } else {
        Muda(6);
        contador = 1;
    }

    clearInterval(exibir);
    exibir = setInterval('Exibindo()', tempo);
}
btnProx.addEventListener('click', Proximo);
