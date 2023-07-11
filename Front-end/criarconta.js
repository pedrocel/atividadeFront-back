var botaosalvar = document.getElementById('salvar')
var botaocancelar = document.getElementById('cancelar')
var tempoEspera = 1000;


function salvar() {
  var nome = document.getElementById('nomecompleto').value;
  var cpf = document.getElementById('cpf').value;
  var usuario = document.getElementById('usuario').value;
  var password = document.getElementById('password').value;

  const dataBody = {
    nome: nome,
    cpf: cpf,
    usuario: usuario,
    password: password
  }


  fetch('http://localhost:3000/criarUser',{
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
  .then(function(data) {
    window.location="index.html"
  })
  .catch(function(error) {
    alert("error")
  });


}



function cancelar(){
  window.location = "index.html"
}

botaocancelar.addEventListener('click',cancelar);
botaosalvar.addEventListener('click',salvar);
