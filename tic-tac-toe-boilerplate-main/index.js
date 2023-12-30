//get
let AllBoxes = document.querySelectorAll('.box'); //array 0
let resultDiv = document.getElementById('result');
let message = document.getElementById('message');
let playAgain = document.getElementById('button');

let chances = 0;
let hasAnyoneWonOrNot = false;
let possibility = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
  [1, 4, 7],
  [2, 5, 8],
  [3, 6, 9],
  [1, 5, 9],
  [7, 5, 3],
];
let xChances = [];
let oChances = [];

let x = AllBoxes.forEach((element, index) => {
  element.addEventListener('click', clickedFunction);
});

function clickedFunction(e) {
  let index = Number(e.target.id) - 1;

  if (chances % 2 == 0) {
    //X
    AllBoxes[index].innerHTML = `<p style="color:#FAB201;">X</p>`;

    xChances.push(index + 1);
    chances++;
    result(xChances, 'X');
    //result checker
  } else {
    //O
    AllBoxes[index].innerHTML = `<p style="color:#FAB201;">O</p>`;

    oChances.push(index + 1);
    chances++;
    result(oChances, 'O');
  }
  console.log(xChances, oChances);
  AllBoxes[index].removeEventListener('click', clickedFunction);
  if (hasAnyoneWonOrNot == false && chances == 9) {
    resultDiv.style.visibility = 'visible';
    message.innerText = 'The Match is Draw';
  }
}

function result(chancesArray, playerXO) {
  console.log('Entering the fn');
  for (let i = 0; i < 8; i++) {
    let count = 0;
    for (let j = 0; j < 3; j++) {
      if (chancesArray.includes(possibility[i][j]) == true) {
        count = count + 1;
      }
    }
    if (count == 3) {
      console.log(playerXO, ' is the winner');
      hasAnyoneWonOrNot = true;
      resultDiv.style.visibility = 'visible';
      message.innerText = playerXO + ' Has Won the Match';
    }
  }
}

button.addEventListener('click', function () {
  window.location.href = './index.html';
});
