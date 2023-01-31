'use strict';
// console.log(document.querySelector('.message').textContent);

// document.querySelector('.message').textContent = '🥇 Correct Number';

// document.querySelector('.number').textContent = 13;
// document.querySelector('.score').textContent = 10;

// document.querySelector('.guess').value = 23;
// console.log(document.querySelector('.guess').value);

let number = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highScore = 0;

// display function
const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);

  //  when there is no input
  if (!guess) {
    // using the display function
    displayMessage('🚫 No number!');

    // When player win
  } else if (guess === number) {
    displayMessage('😉 Correct Number');

    document.querySelector('.number').textContent = number;
    // document.body.style.backgroundColor = 'green';
    document.querySelector('body').style.backgroundColor = '#60b347';

    document.querySelector('.number').style.width = '30rem';

    if (score > highScore) {
      highScore = score;
      document.querySelector('.highscore').textContent = highScore;
    }

    //   // When guess is wrong
  } else if (guess !== number) {
    if (score > 1) {
      displayMessage(guess > number ? '📈 too High!' : '📈 too low!');
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      displayMessage('You lost the game 😁');
      // document.body.style.backgroundColor = 'red';

      document.querySelector('body').style.backgroundColor = '#fe5874';

      document.querySelector('.score').textContent = 0;
    }
  }
  // this code below was before factoring  we ended up with the code in //When guess is wrong
  // When guess is too high
  // } else if (guess > number) {
  //   if (score > 1) {
  //     document.querySelector('.message').textContent = '📈 too High!';
  //     score--;
  //     document.querySelector('.score').textContent = score;
  //   } else {
  //     document.querySelector('.message').textContent = 'You lost the game 😁';
  //     // document.body.style.backgroundColor = 'red';
  //     document.querySelector('body').style.backgroundColor = '#fe5874';
  //     document.querySelector('.score').textContent = 0;
  //   }

  //   // When guess is too low
  // } else if (guess < number) {
  //   if (score > 1) {
  //     document.querySelector('.message').textContent = '📈 too low!';
  //     score--;
  //     document.querySelector('.score').textContent = score;
  //   } else {
  //     document.querySelector('.message').textContent = 'You lost the game 😁';
  //     document.body.style.backgroundColor = '#fe5874';
  //     document.querySelector('.score').textContent = 0;
  //   }
  // }
});

// play again button
document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  number = Math.trunc(Math.random() * 20) + 1;

  displayMessage('Start guessing...');

  document.querySelector('.score').textContent = score;

  document.querySelector('.number').textContent = '?';

  document.querySelector('.number').style.width = '15rem';

  document.querySelector('.guess').value = '';

  document.querySelector('body').style.backgroundColor = '#222';
});
