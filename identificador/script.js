const nomeCompleto = prompt('Digite seu nome completo:');
const idadeDigitada = Number(prompt('Digite a sua idade:'));
const mes = Number(prompt('Digite o mês de nascimento:'));
const nomeTitulo = document.getElementById('nome-completo');
const idadeTitulo = document.getElementById('idade');
const mesTitulo = document.getElementById('mes');
const texto = document.getElementById('texto');

nomeTitulo.innerHTML = nomeCompleto;
idadeTitulo.innerHTML = idadeDigitada;
mesTitulo.innerHTML = mes;

texto.innerHTML = '';
texto.innerHTML = `<p>O nome completo é: <strong>${nomeCompleto}</strong> </p>`;
texto.innerHTML += `<p>Seu nome em um array: <strong>[${nomeCompleto.split(' ')}]</strong> </p>`;
texto.innerHTML += `<p>Quantas letras tem o seu nome: <strong>${nomeCompleto.length}</strong> </p>`;
texto.innerHTML += `<p>Qual o índice da primeira letra 'a':<strong> ${nomeCompleto.search(/a/)}</strong> </p>`;
texto.innerHTML += `<p>A data de nascimento para a sua idade: <strong> ${2021 - idadeDigitada}</strong> </p>`;

function initAniversario() {
  if (mes === 1) {
    texto.innerHTML += `<p>O mês de seu aniversário é <strong>janeiro</strong>!</p>`
  };
  if (mes === 2) {
    texto.innerHTML += `<p>O mês de seu aniversário é <strong>fevereiro</strong>!</p>`
  };
  if (mes === 3) {
    texto.innerHTML += `<p>O mês de seu aniversário é <strong>março</strong>!</p>`
  };
  if (mes === 4) {
    texto.innerHTML += `<p>O mês de seu aniversário é <strong>abril</strong>!</p>`
  };
  if (mes === 5) {
    texto.innerHTML += `<p>O mês de seu aniversário é <strong>maio</strong>!</p>`
  };
  if (mes === 6) {
    texto.innerHTML += `<p>O mês de seu aniversário é <strong>junho</strong>!</p>`
  };
  if (mes === 7) {
    texto.innerHTML += `<p>O mês de seu aniversário é <strong>julho</strong>!</p>`
  };
  if (mes === 8) {
    texto.innerHTML += `<p>O mês de seu aniversário é <strong>agosto</strong>!</p>`
  };
  if (mes === 9) {
    texto.innerHTML += `<p>O mês de seu aniversário é <strong>setembro</strong>!</p>`
  };
  if (mes === 10) {
    texto.innerHTML += `<p>O mês de seu aniversário é <strong>outubro</strong>!</p>`
  };
  if (mes === 11) {
    texto.innerHTML += `<p>O mês de seu aniversário é <strong>novembro</strong>!</p>`
  };
  if (mes === 12) {
    texto.innerHTML += `<p>O mês de seu aniversário é <strong>dezembro</strong>!</p>`
  };
};
initAniversario();