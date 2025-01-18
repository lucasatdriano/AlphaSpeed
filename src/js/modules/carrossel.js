// Script para rodar slides

export function initCarrossel() {
    let contador = 1;
    const tempo = 2500;
    const imagens = [
        'src/assets/images/carrossel/imgCarrossel1.jpg',
        'src/assets/images/carrossel/imgCarrossel2.jpg',
        'src/assets/images/carrossel/imgCarrossel3.jpg',
        'src/assets/images/carrossel/imgCarrossel4.jpg',
        'src/assets/images/carrossel/imgCarrossel5.jpg',
        'src/assets/images/carrossel/imgCarrossel6.jpg',
    ];
    let exibir = setInterval(Exibindo, tempo);

    function Exibindo() {
        document.images['slide'].src = imagens[contador - 1];
        document.getElementById('radio' + contador).checked = true;

        contador = contador < 6 ? contador + 1 : 1;
    }

    function Muda(number) {
        clearInterval(exibir);
        contador = number;
        Exibindo();
        exibir = setInterval(Exibindo, tempo);
    }

    const radios = document.querySelectorAll('input[name="mudaSlide"]');
    radios.forEach((radio, index) => {
        radio.addEventListener('click', () => Muda(index + 1));
    });

    const btnProx = document.querySelector('#setaSlidesProx');
    const btnAnt = document.querySelector('#setaSlidesAnt');

    function Anterior() {
        document.images['slide'].src = imagens[contador - 1];

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
        document.images['slide'].src = imagens[contador - 1];

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
}
