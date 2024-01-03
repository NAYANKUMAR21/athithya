// Iteration 8: Making scoreboard functional
const scoreBoard = document.querySelector('#score-board');
const playAgainButton = document.querySelector('#play-again-button');

let scoreEarned = localStorage.getItem('score');
scoreBoard.innerHTML = scoreEarned;
playAgainButton.addEventListener('click', function () {
  window.location.href = 'game.html';
});
