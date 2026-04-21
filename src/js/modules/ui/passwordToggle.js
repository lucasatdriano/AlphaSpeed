// Script para toggle de visibilidade de senha

const PASSWORD_TOGGLES = [
    { toggleId: 'loginTogglePassword', inputId: 'loginPasswordInput' },
    { toggleId: 'registerTogglePassword', inputId: 'registerPasswordInput' },
    {
        toggleId: 'registerToggleConfirmPassword',
        inputId: 'registerConfirmPasswordInput',
    },
];

function initPasswordToggle(toggleButtonId, passwordInputId) {
    const toggleButton = document.querySelector(`#${toggleButtonId}`);
    const passwordInput = document.querySelector(`#${passwordInputId}`);

    if (!toggleButton || !passwordInput) {
        return false;
    }

    const updateAriaLabel = (isPasswordVisible) => {
        const label = isPasswordVisible ? 'Ocultar senha' : 'Mostrar senha';
        toggleButton.setAttribute('aria-label', label);
    };

    const toggleVisibility = () => {
        const isPassword = passwordInput.type === 'password';
        passwordInput.type = isPassword ? 'text' : 'password';

        const icon =
            toggleButton.querySelector('.material-symbols-rounded') ||
            toggleButton;
        icon.textContent = isPassword ? 'visibility_off' : 'visibility';

        updateAriaLabel(isPassword);
        passwordInput.focus();
    };

    const handleKeyDown = (event) => {
        if (event.key === 'Enter' || event.key === ' ') {
            event.preventDefault();
            toggleVisibility();
        }
    };

    toggleButton.addEventListener('click', toggleVisibility);
    toggleButton.addEventListener('keydown', handleKeyDown);

    return true;
}

export function initAllPasswordToggles() {
    PASSWORD_TOGGLES.forEach(({ toggleId, inputId }) => {
        initPasswordToggle(toggleId, inputId);
    });
}
