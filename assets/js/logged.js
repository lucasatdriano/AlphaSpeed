document.addEventListener('DOMContentLoaded', () => {
    let btnLogin = document.querySelector('.btnLogin');
    let logged = localStorage.getItem('userLogado');
    let userLogado = JSON.parse(logged);
    if (logged !== null && userLogado !== null) {
        btnLogin.innerText = `Olá, ${userLogado.user}`;
    } else {
        btnLogin.innerText = 'Login';
    }
});
