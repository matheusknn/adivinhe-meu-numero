'use strict';
const campoDeInput = document.querySelector('input');
const btnDeVerificar = document.querySelector('[data-btn-verificar]');
const paragrafoDeDica = document.querySelector('.text');
const numero = document.querySelector('.number');
const chances = document.querySelector('.chances-numero');
const placarDeVitorias = document.querySelector('.vitorias');
const btnJogarNovamente = document.querySelector('.btn-jogar-novamente');

let numeroSurpresa = Math.trunc(Math.random() * 40) + 1;
let tentativas = 20;
let melhorPlacar = 0;

function aoCliqueVerificar() {
  const numeroDoUsuario = Number(campoDeInput.value);
  if (!numeroDoUsuario || numeroDoUsuario > 40) {
    paragrafoDeDica.textContent = 'número inválido!';
  } else if (numeroDoUsuario === numeroSurpresa) {
    paragrafoDeDica.textContent = '🎉 Número Correto!';
    numero.textContent = numeroSurpresa;
    mudarEstiloAoGanhar();
    atualizarMelhorPontuacao();
  } else if (numeroDoUsuario > numeroSurpresa && tentativas > 1) {
    paragrafoDeDica.textContent = 'você chutou muito alto!';
    atualizarTentativas();
  } else if (numeroDoUsuario < numeroSurpresa && tentativas > 1) {
    paragrafoDeDica.textContent = 'você chutou muito baixo!';
    atualizarTentativas();
  } else {
    paragrafoDeDica.textContent = '💔 você perdeu o jogo!';
    chances.textContent = 0;
    mudarEstiloAoPerder();
  }
}

function atualizarTentativas() {
  tentativas--;
  chances.textContent = tentativas;
}

function mudarEstiloAoPerder() {
  document.body.style.backgroundColor = '#520606';
}

function mudarEstiloAoGanhar() {
  document.body.style.backgroundColor = '#06740f';
}

function imprimirDica(dica) {}
btnDeVerificar.addEventListener('click', aoCliqueVerificar);

function reiniciarGame() {
  document.body.style.backgroundColor = 'rgb(38, 38, 38)';
  tentativas = 20;
  numeroSurpresa = Math.trunc(Math.random() * 40) + 1;
  paragrafoDeDica.textContent = 'Comece a adivinhar...';
  chances.textContent = tentativas;
  numero.textContent = '?';
  campoDeInput.value = '';
}

function atualizarMelhorPontuacao() {
  if (tentativas > melhorPlacar) {
    melhorPlacar = tentativas;
    placarDeVitorias.textContent = melhorPlacar;
  }
}

btnJogarNovamente.addEventListener('click', reiniciarGame);
