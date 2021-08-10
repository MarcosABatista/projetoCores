/*document.querySelector('#cor').innerHTML = 'Preto';
document.querySelector('#cores').classList.contens(preto);
document.querySelector('#cores').classList.add('preto');
document.querySelector('#cores').classList.remove('preto');*/

function preto() {
  document.querySelector('#cores').classList.add('preto')
  document.querySelector('#cor').innerHTML = 'Preta'
  document.querySelector('#cores').classList.remove('azul')
  document.querySelector('#cores').classList.remove('verde')
  document.querySelector('#cores').classList.remove('amarelo')
  document.querySelector('#cores').classList.remove('vermelho')
}
function azul() {
  document.querySelector('#cores').classList.add('azul')
  document.querySelector('#cor').innerHTML = 'Azul'
  document.querySelector('#cores').classList.remove('preto')
  document.querySelector('#cores').classList.remove('verde')
  document.querySelector('#cores').classList.remove('amarelo')
  document.querySelector('#cores').classList.remove('vermelho')
}
function verde() {
  document.querySelector('#cores').classList.add('verde')
  document.querySelector('#cor').innerHTML = 'Verde'
  document.querySelector('#cores').classList.remove('azul')
  document.querySelector('#cores').classList.remove('preto')
  document.querySelector('#cores').classList.remove('amarelo')
  document.querySelector('#cores').classList.remove('vermelho')
}
function amarelo() {
  document.querySelector('#cores').classList.add('amarelo')
  document.querySelector('#cor').innerHTML = 'Amarelo'
  document.querySelector('#cores').classList.remove('azul')
  document.querySelector('#cores').classList.remove('preto')
  document.querySelector('#cores').classList.remove('verde')
  document.querySelector('#cores').classList.remove('vermelho')
}
function vermelho() {
  document.querySelector('#cores').classList.add('vermelho')
  document.querySelector('#cor').innerHTML = 'Vermelho'
  document.querySelector('#cores').classList.remove('azul')
  document.querySelector('#cores').classList.remove('preto')
  document.querySelector('#cores').classList.remove('amarelo')
  document.querySelector('#cores').classList.remove('verde')
}
/*================= clean =============*/
function limpar() {
  document.querySelector('#cor').innerHTML = ''
  document.querySelector('#cores').classList.remove('preto')
  document.querySelector('#cores').classList.remove('azul')
  document.querySelector('#cores').classList.remove('amarelo')
  document.querySelector('#cores').classList.remove('verde')
  document.querySelector('#cores').classList.remove('vermelho')
}
