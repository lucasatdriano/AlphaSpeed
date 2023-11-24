        // Script para rodar slides

var contador = 1;
var img1="imagens/carrossel/imgCarrossel2.jpg";
var img2="imagens/carrossel/imgCarrossel3.jpg";
var img3="imagens/carrossel/imgCarrossel4.jpg";
var img4="imagens/carrossel/imgCarrossel5.jpg";
var img5="imagens/carrossel/imgCarrossel6.jpg";
var img6="imagens/carrossel/imgCarrossel1.jpg";
var tempo=2500;
var exibir=setInterval("exibindo()",tempo);

function exibindo() {
    document.images["slide"].src=eval("img"+contador);
    document.getElementById("v"+contador).checked=true;

    if (contador<6)
        contador++;
    else
        contador=1;
}

function muda(x) {
    clearInterval(exibir);
    contador=x;
    exibir=setInterval(exibindo(),tempo);
}