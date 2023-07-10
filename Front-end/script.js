function entrar(){

    var usuario = document.getElementById('usuario').value;
    var password = document.getElementById('password').value;

    if (usuario === 'mario' && password === '123') {
        alert("Acesso liberado");
        window.location.href = 'perfil.html';
      } else if (usuario === '' || password === '') {
        alert("Erro! Campos vazios");
        window.location.href = 'index.html';
      } else {
        alert("Usuário ou senha incorretos");
        window.location.href = 'index.html';
      }




}

function criarconta(){
window.location = 'criarconta.html'
}

var botaoentrar = document.getElementById('entrar');
var botaocriarconta = document.getElementById('criarconta');


botaoentrar.addEventListener('click',entrar);
botaocriarconta.addEventListener('click',criarconta)



