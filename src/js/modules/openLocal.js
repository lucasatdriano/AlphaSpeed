// Script para abrir localização

export function initOpenSectionLocal() {
    const localizacao = document.querySelector('#local');
    const abrir = document.querySelector('#openLocal');
    const seta = document.querySelector('#seta');

    function localAbrir() {
        localizacao.classList.toggle('ativo');

        if (localizacao.classList.contains('ativo')) {
            seta.style.transform = 'rotateX(-180deg)';
            seta.style.transition = 'ease .5s';
        } else {
            seta.style.transform = 'rotateX(0deg)';
            seta.style.transition = 'ease .5s';
        }
    }

    abrir.addEventListener('click', localAbrir);
}
