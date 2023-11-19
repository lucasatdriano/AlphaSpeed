const carro = document.querySelector('div');
const price = document.querySelectorAll('span');
const btnMob = document.getElementById('menuMob')

function mostPrice() {
    carro.classList.toggle('active');
    price.style.visibility = 'visible';
    carro.style.background = 'red';

    if(carro.classList.contains("active")){
        btnMob.src = "/imagens/fecharHam.png";
    }else{
        btnMob.src = "/imagens/menuHam.png";
    }
}

carro.addEventListener('mouseover', mostPrice);


function teste() {
  alert('aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa');
}

carro.addEventListener('click', teste);