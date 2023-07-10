var botaosalvar = document.getElementById('salvar')
var botaocancelar = document.getElementById('cancelar')
var tempoEspera = 1000;




function salvar() {
  var nomecompleto = document.getElementById('nomecompleto').value;
  var cpf = document.getElementById('cpf').value;
  var usuario = document.getElementById('usuario').value;
  var password = document.getElementById('password').value;

  if (nomecompleto !== '' && cpf !== '' && usuario !== '' && password !== '') {
    const data = {
      nomecompleto: nomecompleto,
      cpf: cpf,
      usuario: usuario,
      password: password
    };

    fetch('http://localhost:3000/criarUser', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    })
      .then(response => {
        if (!response.ok) {
          alert("Dados salvos com sucesso.");
          window.location = 'index.html';
        }
        alert("Dados salvos com sucesso.");
        window.location = 'index.html';
      })
      .catch(error => {
        console.error('Erro na requisição:', error);
        alert("Erro ao salvar os dados. Por favor, tente novamente.");
      });
  } else {
    alert("Existem campos vazios.");
  }
}



function cancelar(){
  window.location = "index.html"
}

botaocancelar.addEventListener('click',cancelar);
botaosalvar.addEventListener('click',salvar);
