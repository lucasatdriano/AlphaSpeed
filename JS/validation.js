let rnome = document.getElementById("iNome");
let rtel = document.getElementById("iTel");
let remail = document.getElementById("iEmail");
let rsenha = document.getElementById("iSenha");
let rconfSenha = document.getElementById("iConfSenha");

const spanNome = document.getElementById("spanNome");
const spanTel = document.getElementById("spanTel");
const spanEmail = document.getElementById("spanEmail");
const spanSenha = document.getElementById("spanSenha");
const spanConf = document.getElementById("spanConf");

function valida() {

    if (rnome.value == "") {
        spanNome.style.display = "inline";
        spanNome.innerText = "Preencha o campo Nome.";
        rnome.focus();
        return false;
    }
    else if (rtel.value == "") {
        spanNome.style.display = "none";
        spanTel.style.display = "inline";
        spanTel.innerText = 'Preencha o campo Telefone.';
        rtel.focus();
        return false;
    }
    else if (isNaN(rtel.value)) {
        spanNome.style.display = "none";
        spanTel.style.display = "inline";
        spanTel.innerText = 'Preencha o campo Telefone apenas com números.';
        rtel.focus();
        rtel.value = "";
        return false;
    }
    else if ( rtel.value.length < 9) {
        spanNome.style.display = "none";
        spanTel.style.display = "inline";
        spanTel.innerText = 'Preencha o campo Telefone com no mínimo 9 caracteres.';
        rtel.focus();
        return false;
    }
    else if (remail.value == "") {
        spanNome.style.display = "none";
        spanTel.style.display = "none";
        spanEmail.style.display = "inline";
        spanEmail.innerText = 'Preencha o campo Email.';
        remail.focus();
        return false;
    }
    else if (rsenha.value == "" ) {
        spanNome.style.display = "none";
        spanTel.style.display = "none";
        spanEmail.style.display = "none";
        spanSenha.style.display = "inline";
        spanSenha.innerText = 'Preencha o campo Senha.';
        rsenha.focus();
        return false;
    }
    else if (rsenha.value.length < 8) {
        spanNome.style.display = "none";
        spanTel.style.display = "none";
        spanEmail.style.display = "none";
        spanSenha.style.display = "inline";
        spanSenha.innerText = 'Preencha o campo Senha com no mínimo 8 caracteres.';
        rsenha.focus();
        return false;
    }
    else if ( rconfSenha.value == "") {
        spanNome.style.display = "none";
        spanTel.style.display = "none";
        spanEmail.style.display = "none";
        spanSenha.style.display = "none";
        spanConf.style.display = "inline";
        spanConf.innerText = 'Preencha o campo Confirmar Senha.';
        rconfSenha.focus();
        return false;
    }
    else if (rconfSenha.value != rsenha.value) {
        spanNome.style.display = "none";
        spanTel.style.display = "none";
        spanEmail.style.display = "none";
        spanSenha.style.display = "none";
        spanConf.style.display = "inline";
        spanConf.innerText = 'inconsistência encontrada. As senhas precisam ser iguais';
        rconfSenha.focus();
        return false;
    }
    else {
        location.href = "login.html";
        return true;
    }
}

function validaLog() {
    if (rnome.value == "") {
        spanNome.style.display = "inline";
        spanNome.innerText = "Preencha o campo Nome.";
        rnome.focus();
        return false;
    }
    else if (rsenha.value == "" ) {
        spanNome.style.display = "none";
        spanSenha.style.display = "inline";
        spanSenha.innerText = 'Preencha o campo Senha.';
        rsenha.focus();
        return false;
    }
    else if (rsenha.value.length < 8) {
        spanNome.style.display = "none";
        spanSenha.style.display = "inline";
        spanSenha.innerText = 'Preencha o campo Senha com no mínimo 8 caracteres.';
        rsenha.focus();
        return false;
    }
    else {
        location.href = "index.html";
        return true;
    }
}