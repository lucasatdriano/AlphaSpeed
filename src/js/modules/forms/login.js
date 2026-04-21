// Script para realizar o login (com elements)

export function initLogin() {
    const elements = {
        submitButton: document.querySelector('#submitLoginButton'),
        username: document.querySelector('#loginUsernameInput'),
        password: document.querySelector('#loginPasswordInput'),
        errorMessage: document.querySelector('#loginErrorMessage'),
        successMessage: document.querySelector('#loginSuccessMessage'),
    };

    if (!elements.submitButton) return;

    elements.submitButton.addEventListener('click', handleLogin);

    function handleLogin(event) {
        event.preventDefault();

        elements.errorMessage.style.display = 'none';
        elements.successMessage.style.display = 'none';
        elements.username.style.borderColor = 'initial';
        elements.password.style.borderColor = 'initial';

        const username = elements.username.value.trim();
        const password = elements.password.value;

        if (!username || !password) {
            elements.username.style.borderColor = 'red';
            elements.password.style.borderColor = 'red';
            elements.errorMessage.style.display = 'block';
            elements.errorMessage.innerHTML =
                '<p>Preencha os campos para realizar o login.</p>';
            elements.username.focus();
            return;
        }

        const userList = JSON.parse(localStorage.getItem('userList') || '[]');
        const authenticatedUser = userList.find(
            (user) =>
                user.usernameRegister === username.toLowerCase() &&
                user.passwordRegister === password,
        );

        if (authenticatedUser) {
            const token =
                Math.random().toString(36).substring(2) +
                Date.now().toString(36);
            localStorage.setItem('authToken', token);
            localStorage.setItem(
                'authUser',
                JSON.stringify({
                    username: authenticatedUser.usernameRegister,
                }),
            );

            elements.successMessage.style.display = 'block';
            elements.successMessage.innerHTML = '<p>Realizando login...</p>';

            setTimeout(() => {
                window.location.href = '../../index.html';
            }, 500);
        } else {
            elements.username.style.borderColor = 'red';
            elements.password.style.borderColor = 'red';
            elements.errorMessage.style.display = 'block';
            elements.errorMessage.innerHTML =
                '<p>Usuário ou senha incorretos.</p>';
            elements.username.focus();
        }
    }
}
