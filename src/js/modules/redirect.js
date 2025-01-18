// Redirect pages
export function initRedirectButtonCadastro() {
    const btnCadastro = document.getElementById('btnRedCadastre');

    btnCadastro.addEventListener('click', () => {
        window.location.href = '../html/cadastrar.html';
    });
}
