// script para alterar botão em caso de usuário logado

export function initButtonLogged() {
    const btnsLogin = document.querySelectorAll('.btnLogin');
    const logged = localStorage.getItem('userLogado');

    if (logged) {
        let userLogado = JSON.parse(logged);

        if (userLogado && userLogado.user) {
            const firstName = userLogado.user.split(' ')[0];
            btnsLogin.forEach((btnLogin) => {
                btnLogin.innerText = `Olá, ${firstName}`;
            });
            // } else {
            //     btnLogin.innerText = 'Login';
        }
        // } else {
        //     btnLogin.innerText = 'Login';
    }
}
