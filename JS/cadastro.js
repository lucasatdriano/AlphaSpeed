        // Script para se cadastrar ao site salvando os seus dados

let usuario = document.querySelector('#iUsuario')
let spanUsuario = document.querySelector("#spanNome");
let validUsuario = false

let telefone = document.querySelector('#iTel')
let spanTel = document.querySelector("#spanTel");
let validTel = false

let email = document.querySelector('#iEmail')
let spanEmail = document.querySelector("#spanEmail");
let validEmail = false

let senha = document.querySelector('#iSenha')
let spanSenha = document.querySelector("#spanSenha");
let validSenha = false

let confirmSenha = document.querySelector('#iConfSenha')
let spanConf = document.querySelector("#spanConf");
let validConfirmSenha = false

let msgError = document.querySelector('#msgError')
let msgSuccess = document.querySelector('#msgSuccess')

usuario.addEventListener('keyup', () => {
    if(usuario.value == ''){
        spanTel.style.display = "none";
        spanEmail.style.display = "none";
        spanSenha.style.display = "none";
        spanConf.style.display = "none";
        spanUsuario.style.display = "inline";
        spanUsuario.innerText = "Preencha o campo Nome.";
        usuario.focus();
        usuario.setAttribute('style', 'border-color: red')
        validUsuario = false
        return false
    } else {
        usuario.setAttribute('style', 'border-color: green')
        validUsuario = true
        return true
    }
})

telefone.addEventListener('keyup', () => {
    if(telefone.value == ''){
        spanUsuario.style.display = "none"
        spanEmail.style.display = "none"
        spanSenha.style.display = "none"
        spanConf.style.display = "none"
        spanTel.style.display = "inline"
        spanTel.innerText = 'Preencha o campo Telefone.'
        telefone.focus()
        telefone.setAttribute('style', 'border-color: red')
        validTel = false
        return false
    }
    else if (isNaN(telefone.value)) {
        spanUsuario.style.display = "none"
        spanEmail.style.display = "none"
        spanSenha.style.display = "none"
        spanConf.style.display = "none"
        spanTel.style.display = "inline"
        spanTel.innerText = 'Preencha o campo Telefone apenas com números.'
        telefone.focus()
        telefone.setAttribute('style', 'border-color: red')
        validTel = false
        return false
    }
    else if ( telefone.value.length < 9) {
        spanUsuario.style.display = "none"
        spanEmail.style.display = "none"
        spanSenha.style.display = "none"
        spanConf.style.display = "none"
        spanTel.style.display = "inline"
        spanTel.innerText = 'Preencha o campo Telefone com no mínimo 9 caracteres.'
        telefone.focus()
        telefone.setAttribute('style', 'border-color: red')
        validTel = false
        return false
    }
    else {
        telefone.setAttribute('style', 'border-color: green')
        validTel = true
        return true
    }
})

email.addEventListener('keyup', () => {
    if(email.value == ''){
        spanUsuario.style.display = "none"
        spanTel.style.display = "none"
        spanSenha.style.display = "none"
        spanConf.style.display = "none"
        spanEmail.style.display = "inline"
        spanEmail.innerText = 'Preencha o campo Email.'
        email.focus()
        email.setAttribute('style', 'border-color: red')
        validEmail = false
        return false
    } 
    else {
        email.setAttribute('style', 'border-color: green')
        validEmail = true
        return true
    }
})

senha.addEventListener('keyup', () => {
    if (senha.value == "" ) {
        spanUsuario.style.display = "none"
        spanTel.style.display = "none"
        spanEmail.style.display = "none"
        spanConf.style.display = "none"
        spanSenha.style.display = "inline"
        spanSenha.innerText = 'Preencha o campo Senha.'
        senha.focus()
        senha.setAttribute('style', 'border-color: red')
        validSenha = false
        return false
    } 
    else if(senha.value.length < 8){
        spanUsuario.style.display = "none"
        spanTel.style.display = "none"
        spanEmail.style.display = "none"
        spanConf.style.display = "none"
        spanSenha.style.display = "inline"
        spanSenha.innerText = 'Preencha o campo Senha com no mínimo 8 caracteres.'
        senha.focus()
        senha.setAttribute('style', 'border-color: red')
        validSenha = false
        return false
    } 
    else {
        senha.setAttribute('style', 'border-color: green')
        validSenha = true
        return true
    }
})

confirmSenha.addEventListener('keyup', () => {
    if(confirmSenha.value != senha.value){
        spanUsuario.style.display = "none"
        spanTel.style.display = "none"
        spanEmail.style.display = "none"
        spanSenha.style.display = "none"
        spanConf.style.display = "inline"
        spanConf.innerText = 'inconsistência encontrada. As senhas precisam ser iguais'
        confirmSenha.focus()
        confirmSenha.setAttribute('style', 'border-color: red')
        validConfirmSenha = false
        return false
    } else {
        confirmSenha.setAttribute('style', 'border-color: green')
        validConfirmSenha = true
        return true
    }
})

function cadastrar(){
    if(validUsuario && validTel && validEmail && validSenha && validConfirmSenha){
        let listaUser = JSON.parse(localStorage.getItem('listaUser') || '[]')
        
        listaUser.push(
        {
            userCad: usuario.value,
            telCad: telefone.value,
            emailCad: email.value,
            senhaCad: senha.value
        })
        
        localStorage.setItem('listaUser', JSON.stringify(listaUser))
        
    
        msgSuccess.setAttribute('style', 'display: block')
        msgSuccess.innerHTML = '<strong>Cadastrando usuário...</strong>'
        msgError.setAttribute('style', 'display: none')
        msgError.innerHTML = ''
        
        setTimeout(()=>{
            location.href = 'login.html'
        }, 2000)
    } 
    else {
        msgError.setAttribute('style', 'display: block')
        msgError.innerHTML = '<strong>Preencha todos os campos corretamente antes de cadastrar</strong>'
        msgSuccess.innerHTML = ''
        msgSuccess.setAttribute('style', 'display: none')
    }
}

let btn = document.querySelector('#verSenha')
let btnConfirm = document.querySelector('#verConfirmSenha')

btn.addEventListener('click', ()=>{
    let inputSenha = document.querySelector('#iSenha')
    
    if(inputSenha.getAttribute('type') == 'password'){
        inputSenha.setAttribute('type', 'text')
    } else {
        inputSenha.setAttribute('type', 'password')
    }
})

btnConfirm.addEventListener('click', ()=>{
    let inputConfirmSenha = document.querySelector('#iConfSenha')
    
    if(inputConfirmSenha.getAttribute('type') == 'password'){
        inputConfirmSenha.setAttribute('type', 'text')
    } else {
        inputConfirmSenha.setAttribute('type', 'password')
    }
})