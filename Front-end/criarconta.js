var botaosalvar = document.getElementById('salvar')
var botaocancelar = document.getElementById('cancelar')
var tempoEspera = 1000;

function salvar() {

var nomecompleto = document.getElementById('nomecompleto').value;
var cpf = document.getElementById('cpf').value;
var usuario = document.getElementById('usuario').value;
var password = document.getElementById('password').value;

  if(nomecompleto !== '' && cpf !== '' && usuario !== '' && password !== ''){
    alert("Dados salvos com sucesso.");

    setTimeout(function() {
      window.location = 'index.html';
    }, tempoEspera);

 }else{
    alert("Existem campos vazios")
 }

 


}

function cancelar(){
    window.location = "index.html"
}
botaocancelar.addEventListener('click',cancelar);
botaosalvar.addEventListener('click',salvar);