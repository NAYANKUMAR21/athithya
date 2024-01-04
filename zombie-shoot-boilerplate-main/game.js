// Iteration 1: Declare variables required for this game
let gameBody = document.getElementById('game-body');
let timerDiv = document.getElementById('timer');
timerDiv.innerHTML = 60;
let TimerSpan = 60;

let zombieArray = [
  './assets/zombie-1.png',
  './assets/zombie-2.png',
  './assets/zombie-3.png',
  './assets/zombie-4.png',
  './assets/zombie-5.png',
  './assets/zombie-6.png',
];
// Iteration 1.2: Add shotgun sound
gameBody.addEventListener('click', function () {
  let soundShotGun = new Audio('./assets/shotgun.wav');
  soundShotGun.play();
});
// Iteration 1.3: Add background sound
let backgroundSound = new Audio('./assets/bgm.mp3');
backgroundSound.play();
backgroundSound.loop = true;
// Iteration 1.4: Add lives
let lives = 4;
let uniqueId = 0;

// Iteration 2: Write a function to make a zombie
function createZombie() {
  let randomZombie = zombieArray[Math.floor(Math.random() * 6)]; // this will only give upto 5
  let randomSec = Math.floor(Math.random() * (7 - 3)) + 3;
  let transformNumber = Math.floor(Math.random() * (80 - 20)) + 20;

  gameBody.innerHTML += `<img src='${randomZombie}' alt='' id='zombieId-${uniqueId}' class='zombie-image'  />`;
  let getZombieImg = document.getElementById(`zombieId-${uniqueId}`);

  getZombieImg.style.transform = `translateX(${transformNumber}vw)`;
  getZombieImg.style.animationDuration = `${randomSec}s`;

  getZombieImg.addEventListener('click', function () {
    // zombie dead

    removeZombie(getZombieImg);
  });
}
// Iteration 4: Write a function to destroy a zombie when it is shot or missed
function removeZombie(getZombieImg) {
  //1. zombie died
  //2. createZombie

  getZombieImg.style.display = 'none';
  uniqueId++;
  createZombie();
}
// Iteration 3: Write a function to check if the player missed a zombie

// Iteration 5: Creating timer

setInterval(function () {
  TimerSpan = TimerSpan - 1;
  document.getElementById('timer').innerHTML = TimerSpan;

  let getZombieImg = document.getElementById(`zombieId-${uniqueId}`);

  if (getZombieImg.getBoundingClientRect().top <= 0) {
    lives--;
    removeZombie(getZombieImg);
  }
  if (TimerSpan == 0) {
    window.location.href = './win.html';
  }
  if (lives == 3) {
    document.querySelector('#max-lives').style.width = '75%';
  }
  if (lives == 2) {
    document.querySelector('#max-lives').style.width = '50%';
  }
  if (lives == 1) {
    document.querySelector('#max-lives').style.width = '25%';
  }
  if (lives == 0) {
    document.querySelector('#max-lives').style.width = '0%';
    window.location.href = './game-over.html';
  }
  //user has missed decrease one live each time
  console.log();
}, 1000);

// Iteration 6: Write a code to start the game by calling the first zombie
createZombie();
// Iteration 7: Write the helper function to get random integer
