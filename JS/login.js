let btn = document.querySelector('.visibility')

btn.addEventListener('click', ()=>{
    let inputSenha = document.querySelector('#iSenha')
    
    if(inputSenha.getAttribute('type') == 'password'){
        inputSenha.setAttribute('type', 'text')
    } else {
        inputSenha.setAttribute('type', 'password')
    }
})

function login(){
    let usuario = document.querySelector('#iUsuario')
    
    let senha = document.querySelector('#iSenha')
    
    let msgError = document.querySelector('#msgError')
    let listaUser = []
  
    let userValid = {
        user: '',
        senha: ''
    }
  
    listaUser = JSON.parse(localStorage.getItem('listaUser'))
    
    listaUser.forEach((item) => {
        if(usuario.value == item.userCad && senha.value == item.senhaCad){
        
            userValid = {
                user: item.userCad,
                senha: item.senhaCad
            }
        
        }
    })
  
    if(usuario.value == userValid.user && senha.value == userValid.senha){
        location.href = 'index.html'
    
        let mathRandom = Math.random().toString(16).substr(2)
        let token = mathRandom + mathRandom
    
        localStorage.setItem('token', token)
        localStorage.setItem('userLogado', JSON.stringify(userValid))
    } else {
        usuario.setAttribute('style', 'border-color: red')
        senha.setAttribute('style', 'border-color: red')
        msgError.setAttribute('style', 'display: block')
        msgError.innerHTML = 'Usuário ou senha incorretos'
        usuario.focus()
    } 
}