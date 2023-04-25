let placar = JSON.parse(localStorage.getItem ('placar')) || {
    ganhos: 0,
    perdas: 0,
    empates: 0
  };

  updatePlacarElement();
  
/* o de cima é um atalho para utilizar esse codigo de baixo.
if (!placar) {
  placar = {
    ganhos: 0,
    perdas: 0,
    empates: 0
  };
}
*/
function jogarGame(movimentoJogador) {
  const computadorMove = pegaComputadorMove();

  let result = "";

  if (movimentoJogador === "tesoura") {
    if (computadorMove === "pedra") {
      result = "Perdeu!";
    } else if (computadorMove === "papel") {
      result = "Vc ganhou!";
    } else if (computadorMove === "tesoura") {
      result = "Empatou!";
    }
  } else if (movimentoJogador === "papel") {
    if (computadorMove === "pedra") {
      result = "Vc ganhou!";
    } else if (computadorMove === "papel") {
      result = "Empatou!";
    } else if (computadorMove === "tesoura") {
      result = "Perdeu!";
    }
  } else if (movimentoJogador === "pedra") {
    if (computadorMove === "pedra") {
      result = "Empatou!";
    } else if (computadorMove === "papel") {
      result = "Perdeu!";
    } else if (computadorMove === "tesoura") {
      result = "Vc ganhou!";
    }
  }

  if (result === 'Vc ganhou!') {
    placar.ganhos += 1;
  } else if (result === 'Perdeu!') {
    placar.perdas += 1;
  } else if (result === 'Empatou!') {
    placar.empates += 1;
  }

  localStorage.setItem('placar', JSON.stringify (placar));

  updatePlacarElement();

  document.querySelector('.js-resultado')
  .innerHTML = result;

  document.querySelector('.js-movimentos')
  .innerHTML = `Você
<img src="images/${movimentoJogador}-emoji.png" class="move-icon">
<img src="images/${computadorMove}-emoji.png" class="move-icon">
Computador`; 

}

function updatePlacarElement(){
  document.querySelector('.js-placar')
  .innerHTML = `ganhos: ${placar.ganhos}, perdas: ${placar.perdas}, empates: ${placar.empates}`;
}

function pegaComputadorMove() {
  const numeroAleatorio = Math.random();
  let computadorMove = "";
  if (numeroAleatorio >= 0 && numeroAleatorio < 1 / 3) {
    computadorMove = "pedra";
  } else if (numeroAleatorio >= 1 / 3 && numeroAleatorio < 2 / 3) {
    computadorMove = "papel";
  } else if (numeroAleatorio >= 2 / 3 && numeroAleatorio < 1) {
    computadorMove = "tesoura";
  }

  return computadorMove;
}