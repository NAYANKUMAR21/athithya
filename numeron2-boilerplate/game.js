let number1Div = document.getElementById('number1');
let number2Div = document.getElementById('number2');
let number3Div = document.getElementById('number3');

// Iteration 3: Creating variables required to make the game functional
const PlusSymblButton = document.querySelector('#plus');
const MinusSymblButton = document.querySelector('#minus');
const MultiSymblButton = document.querySelector('#mul');
const DivideSymblButton = document.querySelector('#divide');
const ModSymblButton = document.querySelector('#modulus');

let TimerDiv = document.getElementById('timer');

let num1;
let num2;
// Iteration 4: Creating a variable for number 3 and a variable for storing the html element with the Id "number3"
let num3;
let TimerCLock = 20;
TimerDiv.innerHTML = TimerCLock;
let score = 0;
let refINterval;
// Iteration 5: Creating a randomise function to make the game functional
function randomgGenerater() {
  // Iteration 2: Generating two random numbers (0 to 100) and displaying the same in the game.html
  num1 = Math.floor(Math.random() * 100) + 1;
  num2 = Math.floor(Math.random() * 100) + 1;
  number1Div.innerHTML = num1;
  number2Div.innerHTML = num2;
  randomOperater = Math.floor(Math.random() * 5) + 1;
  num3;
  if (randomOperater == 1) {
    //addition between number1 and number2
    num3 = num1 + num2;
  } else if (randomOperater == 2) {
    //subtraction between number1 and number2
    num3 = num1 - num2;
  } else if (randomOperater == 3) {
    //multiply between number1 and number2
    num3 = num1 * num2;
  } else if (randomOperater === 4) {
    //divide between number1 and number2
    num3 = Math.floor(num1 / num2);
  } else if (randomOperater == 5) {
    //modulus between number1 and number2
    num3 = num1 % num2;
  }
  number3Div.innerHTML = num3;
}
randomgGenerater();

// Iteration 6: Making the Operators (button) functional
PlusSymblButton.addEventListener('click', function () {
  if (num1 + num2 == num3) {
    score++;
    randomgGenerater();
    clearInterval(refINterval);
    //reset Timer
    console.log('correct ans next question');
    resetTimer();
  } else {
    console.log('wrong answer');
    //gameover
    // take him to game over page
    window.location.href = './gameover.html';
  }
});
MinusSymblButton.addEventListener('click', function () {
  if (num1 - num2 == num3) {
    score++;
    randomgGenerater();
    clearInterval(refINterval);
    resetTimer();
    localStorage.setItem('score', score);
    console.log('correct ans next question');
  } else {
    console.log('wrong answer');
    // game over
    //take him/her to next page
    window.location.href = './gameover.html';
  }
});
MultiSymblButton.addEventListener('click', function () {
  if (num1 * num2 == num3) {
    score++;
    randomgGenerater();
    clearInterval(refINterval);
    resetTimer();
    localStorage.setItem('score', score);
    console.log('correct ans next question');
  } else {
    // game over
    //take him/her to next page
    window.location.href = './gameover.html';
    console.log('wrong answer');
  }
});
DivideSymblButton.addEventListener('click', function () {
  if (Math.floor(num1 / num2) == num3) {
    score++;
    randomgGenerater();
    clearInterval(refINterval);
    resetTimer();
    localStorage.setItem('score', score);
    console.log('correct ans next question');
  } else {
    console.log('wrong answer');
    // game over
    //take him/her to next page
    window.location.href = './gameover.html';
  }
});
ModSymblButton.addEventListener('click', function () {
  if (num1 % num2 == num3) {
    score++;
    randomgGenerater();
    clearInterval(refINterval);
    resetTimer();
    localStorage.setItem('score', score);
    console.log('correct ans next question');
  } else {
    console.log('wrong answer');
    // game over
    //take him/her to next page
    window.location.href = './gameover.html';
  }
});

// Iteration 7: Making Timer functional

function resetTimer() {
  TimerCLock = 20;
  TimerDiv.innerHTML = TimerCLock;
  refINterval = setInterval(function () {
    TimerCLock = TimerCLock - 1;
    TimerDiv.innerHTML = TimerCLock;
    if (TimerCLock == 0) {
      window.location.href = './gameover.html';
    }
  }, 1000);
}
resetTimer();
