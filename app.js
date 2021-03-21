const status = document.querySelector('.status');
const reset = document.querySelector('.reset');
const cells = document.querySelectorAll('.grid-cell');

let currentGame = true;
let playerX = true;

const x = '✕';
const o = '○';

// Functions
const letterToSymbol = (letter) => (letter === 'x' ? x : o);

const handleWin = (letter) => {
  currentGame = false;
  if (letter === 'x') {
    status.innerHTML = `${letterToSymbol(letter)} has won!`;
  } else {
    status.innerHTML = `
          <span>${letterToSymbol(letter)} has won!</span>
          `;
  }
};

const checkGameStatus = () => {
  const cellOne = cells[0].classList[2];
  const cellTwo = cells[1].classList[2];
  const cellThree = cells[2].classList[2];
  const cellFour = cells[3].classList[2];
  const cellFive = cells[4].classList[2];
  const cellSix = cells[5].classList[2];
  const cellSeven = cells[6].classList[2];
  const cellEight = cells[7].classList[2];
  const cellNine = cells[8].classList[2];

  // Check for winner
  if (cellOne && cellOne === cellTwo && cellOne === cellThree) {
    handleWin(cellOne);
  } else if (cellFour && cellFour === cellFive && cellFour === cellSix) {
    handleWin(cellFour);
  } else if (cellSeven && cellSeven === cellEight && cellSeven === cellNine) {
    handleWin(cellSeven);
  } else if (cellOne && cellOne === cellFour && cellOne && cellSeven) {
    handleWin(cellOne);
  } else if (cellTwo && cellTwo === cellFive && cellTwo === cellEight) {
    handleWin(cellTwo);
  } else if (cellThree && cellThree === cellSix && cellThree === cellNine) {
    handleWin(cellThree);
  } else if (cellOne && cellOne === cellFive && cellOne === cellNine) {
    handleWin(cellOne);
  } else if (cellThree && cellThree === cellFive && cellThree === cellSeven) {
    handleWin(cellThree);
  } else if (
    cellOne &&
    cellTwo &&
    cellThree &&
    cellFour &&
    cellFive &&
    cellSix &&
    cellSeven &&
    cellEight &&
    cellNine
  ) {
    currentGame = false;
    status.innerHTML = 'Its a tie!';
  } else {
    playerX = !playerX;
    if (playerX) {
      status.innerHTML = `${x}'s turn`;
    } else {
      status.innerHTML = `<span>${o}'s turn</span>`;
    }
  }
};

// Event handlers
const resetGame = (e) => {
  playerX = true;
  status.innerHTML = `${x}'s turn`;
  winner = null;
  for (const cell of cells) {
    cell.classList.remove('x');
    cell.classList.remove('o');
  }
  currentGame = true;
};

const cellClicked = (e) => {
  const classList = e.target.classList;

  if (!currentGame || classList[2] == 'x' || classList[2] == 'o') {
    return;
  }

  if (playerX) {
    classList.add('x');
    checkGameStatus();
  } else {
    classList.add('o');
    checkGameStatus();
  }
};

// Event listeners
reset.addEventListener('click', resetGame);

for (const cell of cells) {
  cell.addEventListener('click', cellClicked);
}
