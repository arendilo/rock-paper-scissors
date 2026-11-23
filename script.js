const RULES = {  //instead of if else, use object to set the rules.
  rock: 'scissors',
  paper: 'rock',
  scissors: 'paper' //i can add more moves.
};

const IMAGES = {
  rock: 'assets/rock.png',
  paper: 'assets/paper.png',
  scissors: 'assets/scissors.png'
};

const MOVES = Object.keys(RULES);

let score = { player: 0, computer: 0 };

const playerScoreEl = document.getElementById('player-score');
const computerScoreEl = document.getElementById('computer-score');
const movesEl = document.getElementById('moves');
const resultEl = document.getElementById('result');
const matchupEl = document.getElementById('matchup');
const playerImgEl = document.getElementById('player-img');
const computerImgEl = document.getElementById('computer-img');

function getOutcome(player, computer) {
  if (player === computer) return 'draw';
  return RULES[player] === computer ? 'win' : 'lose';
}

function play(playerMove) {
  const computerMove = MOVES[Math.floor(Math.random() * MOVES.length)];
  const outcome = getOutcome(playerMove, computerMove);

  if (outcome === 'win') score.player++;
  if (outcome === 'lose') score.computer++;

  render(playerMove, computerMove, outcome);
}

function render(playerMove, computerMove, outcome) {
  const labels = {
    win: 'You win!!',
    lose: 'You lose :( go try again!',
    draw: "it's a tie!"
  };

  playerScoreEl.textContent = score.player;
  computerScoreEl.textContent = score.computer;
  movesEl.textContent = `You chose ${playerMove} · Computer chose ${computerMove}`;
  resultEl.textContent = labels[outcome];
  resultEl.className = `result ${outcome}`;
  matchupEl.classList.remove('hidden');
  playerImgEl.src = IMAGES[playerMove];
  playerImgEl.alt = playerMove;
  computerImgEl.src = IMAGES[computerMove];
  computerImgEl.alt = computerMove;
}

function reset() {
  score = { player: 0, computer: 0 };
  playerScoreEl.textContent = '0';
  computerScoreEl.textContent = '0';
  movesEl.textContent = 'Pick a move below to start';
  resultEl.textContent = 'Are You Ready?';
  resultEl.className = 'result';
  matchupEl.classList.add('hidden');
}

document.querySelectorAll('.actions button').forEach((btn) => {
  btn.addEventListener('click', () => play(btn.dataset.move));
});

document.getElementById('reset').addEventListener('click', reset);