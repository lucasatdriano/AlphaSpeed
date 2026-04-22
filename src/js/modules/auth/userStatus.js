// Script para alterar botão em caso de usuário logado

export function initUserStatus() {
    const loginButtons = document.querySelectorAll('.loginButton');
    const user = getAuthenticatedUser();

    const buttonText = user
        ? `Olá, ${capitalizeFirstLetter(user.username)}`
        : 'Login';

    loginButtons.forEach((button) => {
        button.innerText = buttonText;
    });
}

function getAuthenticatedUser() {
    try {
        const storedUser = localStorage.getItem('authUser');
        if (!storedUser) return null;

        const user = JSON.parse(storedUser);
        return user?.username ? user : null;
    } catch (error) {
        console.error('Erro ao recuperar usuário:', error);
        return null;
    }
}

function capitalizeFirstLetter(fullName) {
    if (!fullName) return 'Login';

    const firstName = fullName.split(' ')[0];
    return firstName.charAt(0).toUpperCase() + firstName.slice(1).toLowerCase();
}
