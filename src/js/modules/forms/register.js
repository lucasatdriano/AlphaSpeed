// Script para se cadastrar ao site salvando os seus dados em localStorage

export function initRegister() {
    const elements = {
        submitButton: document.querySelector('#submitRegisterButton'),
        username: document.querySelector('#registerUsernameInput'),
        email: document.querySelector('#registerEmailInput'),
        password: document.querySelector('#registerPasswordInput'),
        confirmPassword: document.querySelector(
            '#registerConfirmPasswordInput',
        ),
        usernameError: document.querySelector('#registerUsernameError'),
        emailError: document.querySelector('#registerEmailError'),
        passwordError: document.querySelector('#registerPasswordError'),
        confirmPasswordError: document.querySelector(
            '#registerConfirmPasswordError',
        ),
        errorMessage: document.querySelector('#registerErrorMessage'),
        successMessage: document.querySelector('#registerSuccessMessage'),
    };

    if (!elements.submitButton) return;

    elements.submitButton.addEventListener('click', handleRegister);

    elements.username.addEventListener('input', () => validateUsername());
    elements.email.addEventListener('input', () => validateEmail());
    elements.password.addEventListener('input', () => validatePassword());
    elements.confirmPassword.addEventListener('input', () =>
        validateConfirmPassword(),
    );

    function validateUsername() {
        const value = elements.username.value.trim();

        if (value === '') {
            elements.usernameError.style.display = 'inline';
            elements.usernameError.innerText = 'Preencha o campo Nome.';
            elements.username.style.borderColor = 'red';
            return false;
        }

        elements.usernameError.style.display = 'none';
        elements.username.style.borderColor = 'green';
        return true;
    }

    function validateEmail() {
        const value = elements.email.value.trim();

        if (value === '') {
            elements.emailError.style.display = 'inline';
            elements.emailError.innerText = 'Preencha o campo Email.';
            elements.email.style.borderColor = 'red';
            return false;
        }

        elements.emailError.style.display = 'none';
        elements.email.style.borderColor = 'green';
        return true;
    }

    function validatePassword() {
        const value = elements.password.value;

        if (value === '') {
            elements.passwordError.style.display = 'inline';
            elements.passwordError.innerText = 'Preencha o campo Senha.';
            elements.password.style.borderColor = 'red';
            return false;
        }

        if (value.length < 6) {
            elements.passwordError.style.display = 'inline';
            elements.passwordError.innerText =
                'Preencha o campo Senha com no mínimo 6 caracteres.';
            elements.password.style.borderColor = 'red';
            return false;
        }

        elements.passwordError.style.display = 'none';
        elements.password.style.borderColor = 'green';
        return true;
    }

    function validateConfirmPassword() {
        const isMatch =
            elements.confirmPassword.value === elements.password.value;

        if (!isMatch) {
            elements.confirmPasswordError.style.display = 'inline';
            elements.confirmPasswordError.innerText =
                'As senhas precisam ser iguais.';
            elements.confirmPassword.style.borderColor = 'red';
            return false;
        }

        elements.confirmPasswordError.style.display = 'none';
        elements.confirmPassword.style.borderColor = 'green';
        return true;
    }

    function isEmailAlreadyRegistered(email) {
        const userList = JSON.parse(localStorage.getItem('userList') || '[]');
        const emailLower = email.toLowerCase();
        return userList.some((user) => user.emailRegister === emailLower);
    }

    function handleRegister(event) {
        event.preventDefault();

        elements.errorMessage.style.display = 'none';
        elements.successMessage.style.display = 'none';
        elements.errorMessage.innerHTML = '';
        elements.successMessage.innerHTML = '';

        const isUsernameValid = validateUsername();
        const isEmailValid = validateEmail();
        const isPasswordValid = validatePassword();
        const isConfirmValid = validateConfirmPassword();

        if (
            !isUsernameValid ||
            !isEmailValid ||
            !isPasswordValid ||
            !isConfirmValid
        ) {
            elements.errorMessage.style.display = 'block';
            elements.errorMessage.innerHTML =
                '<p>Preencha todos os campos corretamente antes de cadastrar.</p>';
            return;
        }

        const email = elements.email.value.trim();
        const emailLower = email.toLowerCase();

        if (isEmailAlreadyRegistered(email)) {
            elements.emailError.style.display = 'inline';
            elements.emailError.innerText = 'Este email já está cadastrado!';
            elements.email.style.borderColor = 'red';
            elements.email.focus();
            return;
        }

        const userList = JSON.parse(localStorage.getItem('userList') || '[]');

        userList.push({
            usernameRegister: elements.username.value.trim().toLowerCase(),
            emailRegister: emailLower,
            passwordRegister: elements.password.value,
        });

        localStorage.setItem('userList', JSON.stringify(userList));

        elements.successMessage.style.display = 'block';
        elements.successMessage.innerHTML = '<p>Cadastrando usuário...</p>';

        setTimeout(() => {
            window.location.href = 'login.html';
        }, 500);
    }
}
