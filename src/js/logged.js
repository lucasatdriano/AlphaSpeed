document.addEventListener('DOMContentLoaded', () => {
    let btnLogin = document.querySelector('.btnLogin');
    let logged = localStorage.getItem('userLogado');

    if (logged) {
        let userLogado = JSON.parse(logged);

        if (userLogado && userLogado.user) {
            const firstName = userLogado.user.split(' ')[0];
            btnLogin.innerText = `Olá, ${firstName}`;
        } else {
            btnLogin.innerText = 'Login';
        }
    } else {
        btnLogin.innerText = 'Login';
    }
});
