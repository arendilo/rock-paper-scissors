const RULES = {
  rock: 'scissors',
  paper: 'rock',
  scissors: 'paper'
};

const MOVES = Object.keys(RULES);

let score = { player: 0, computer: 0 };

const playerScoreEl = document.getElementById('player-score');
const computerScoreEl = document.getElementById('computer-score');
const movesEl = document.getElementById('moves');
const resultEl = document.getElementById('result');

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
    win: 'You win!',
    lose: 'Computer wins!',
    draw: "It's a tie."
  };

  playerScoreEl.textContent = score.player;
  computerScoreEl.textContent = score.computer;
  movesEl.textContent = `You chose ${playerMove} · Computer chose ${computerMove}`;
  resultEl.textContent = labels[outcome];
  resultEl.className = `result ${outcome}`;
}

function reset() {
  score = { player: 0, computer: 0 };
  playerScoreEl.textContent = '0';
  computerScoreEl.textContent = '0';
  movesEl.textContent = 'Pick a move below to start';
  resultEl.textContent = 'Ready?';
  resultEl.className = 'result';
}

document.querySelectorAll('.actions button').forEach((btn) => {
  btn.addEventListener('click', () => play(btn.dataset.move));
});

document.getElementById('reset').addEventListener('click', reset);