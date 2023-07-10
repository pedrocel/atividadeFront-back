
var botaosair = document.getElementById('sair')
var tempoEspera = 1000;



function sair(){
    setTimeout(function() {
        window.location = 'index.html';
      }, tempoEspera);
}
botaosair.addEventListener('click',sair);
