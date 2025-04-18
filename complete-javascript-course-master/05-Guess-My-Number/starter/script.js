'use strict';

let score = 20;
let hightScore = 0;
let secretNumber = Math.trunc(Math.random() * 20) + 1;

const displayMessage = message => {
  document.querySelector('.message').textContent = message;
};
const displayScore = scorePoint => {
  document.querySelector('.score').textContent = scorePoint;
};
const displayHighScore = hightScorePoint => {
  document.querySelector('.highscore').textContent = hightScorePoint;
};

document.querySelector('.check').addEventListener('click', () => {
  const guess = Number(document.querySelector('.guess').value);

  // When there is no input
  if (!guess) {
    // document.querySelector('.message').textContent = '🚫 No number';
    displayMessage('🚫 No number');

    // When player win
  } else if (guess === secretNumber) {
    // document.querySelector('.message').textContent = '🎉 Correct Number!';
    displayMessage('🎉 Correct Number!');
    document.querySelector('.number').textContent = secretNumber;
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';

    if (score > hightScore) {
      hightScore = score;
      // document.querySelector('.highscore').textContent = hightScore;
      displayHighScore(hightScore);
    }

    // When guess is wrong
  } else if (guess !== secretNumber) {
    if (score > 1) {
      //   document.querySelector('.message').textContent =
      //     guess > secretNumber ? '📈 Too high!' : '📉 Too low!';
      displayMessage(guess > secretNumber ? '📈 Too high!' : '📉 Too low!');
      score--;
      // document.querySelector('.score').textContent = score;
      displayScore(score);
    } else {
      //   document.querySelector('.message').textContent = '💥 You lost the game!';
      displayMessage('💥 You lost the game!');
      // document.querySelector('.score').textContent = 0;
      displayScore(0);
    }
  }
});

document.querySelector('.again').addEventListener('click', () => {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  //   document.querySelector('.message').textContent = 'Start guessing...';
  displayMessage('Start guessing...');
  // document.querySelector('.score').textContent = score;
  displayScore(score);
  // document.querySelector('.highscore').textContent = hightScore;
  displayHighScore(hightScore);
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';
  document.querySelector('.number').style.width = '15rem';
  document.querySelector('body').style.backgroundColor = '#222';
});
