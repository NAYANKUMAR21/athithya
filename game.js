let number1Div = document.getElementById('number1');
let number2Div = document.getElementById('number2');

let TimeForEachQuestion = 5;

let TimerDiv = document.getElementById('timer');
let referenceTimeInterval;
let randomNum1 = Math.floor(Math.random() * 100);
let randomNum2 = Math.floor(Math.random() * 100);

number1Div.innerHTML = randomNum1;
number2Div.innerHTML = randomNum2;

let greaterThanImage = document.getElementById('greater-than');
let equalToImage = document.getElementById('equal-to');
let lesserThanImage = document.getElementById('lesser-than');

let score = 0;

greaterThanImage.addEventListener('click', function () {
  if (randomNum1 > randomNum2) {
    score = score + 1;

    randomNum1 = Math.floor(Math.random() * 100);
    randomNum2 = Math.floor(Math.random() * 100);

    number1Div.innerHTML = randomNum1;
    number2Div.innerHTML = randomNum2;

    clearInterval(referenceTimeInterval);
    StartRestTimer();
  } else {
    localStorage.setItem('score', score);
    window.location.href = './gameover.html';
  }
});

equalToImage.addEventListener('click', function () {
  if (randomNum1 == randomNum2) {
    score = score + 1;

    randomNum1 = Math.floor(Math.random() * 100);
    randomNum2 = Math.floor(Math.random() * 100);

    number1Div.innerHTML = randomNum1;
    number2Div.innerHTML = randomNum2;

    clearInterval(referenceTimeInterval);
    StartRestTimer();
  } else {
    localStorage.setItem('score', score);
    window.location.href = './gameover.html';
  }
});

lesserThanImage.addEventListener('click', function () {
  if (randomNum1 < randomNum2) {
    score = score + 1;

    randomNum1 = Math.floor(Math.random() * 100);
    randomNum2 = Math.floor(Math.random() * 100);

    number1Div.innerHTML = randomNum1;
    number2Div.innerHTML = randomNum2;

    clearInterval(referenceTimeInterval);
    StartRestTimer();
  } else {
    localStorage.setItem('score', score);
    window.location.href = './gameover.html';
  }
});

function StartRestTimer() {
  TimeForEachQuestion = 5;
  TimerDiv.innerHTML = TimeForEachQuestion;

  referenceTimeInterval = setInterval(function () {
    TimeForEachQuestion--;

    TimerDiv.innerHTML = TimeForEachQuestion;

    if (TimeForEachQuestion == 0) {
      localStorage.setItem('score', score);
      return (window.location.href = './gameover.html');
    }
    console.log(TimeForEachQuestion);
  }, 1000);
}
StartRestTimer();
