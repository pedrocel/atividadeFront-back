function entrar(){

    var usuario = document.getElementById('usuario').value;
    var password = document.getElementById('password').value;

    const dataBody = {
      usuario: usuario,
      password: password
    }
  
  
    fetch('http://localhost:3000/login',{
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(dataBody)
  }
  )
  .then(function(response) {
    if (!response.ok) {
      throw new Error('Erro na requisição: ' + response.status);
    }
    return response.json();
  })
  .then(function(dataBody) {
    window.location="perfil.html"
  })
  .catch(function(error) {
    alert("error")
    window.location="index.html"
  });


}


function criarconta(){
window.location = 'criarconta.html'
}

var botaoentrar = document.getElementById('entrar');
var botaocriarconta = document.getElementById('criarconta');


botaoentrar.addEventListener('click',entrar);
botaocriarconta.addEventListener('click',criarconta)



