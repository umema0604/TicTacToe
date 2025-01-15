const prompt = require('prompt-sync')(); //import prompt-sync package to handle user input

let gameBoard = [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ']; //gameboard set up with 9 blank spaces

let currentPlayer = '🎀'; //player 1

let gameActive = true; //game state as active initially, game keeps going until there is a win or a draw

//game board getting the input from console and updating gameBoard array using string interpolation
function printBoard() {
    console.log(`
      ${gameBoard[0]} | ${gameBoard[1]} | ${gameBoard[2]}
      ---------
      ${gameBoard[3]} | ${gameBoard[4]} | ${gameBoard[5]}
      ---------
      ${gameBoard[6]} | ${gameBoard[7]} | ${gameBoard[8]}
    `);
  }

function handleMove(position) {
    if (gameBoard[position] === " ") {
      gameBoard[position] = currentPlayer;
    } else {
      console.log("Cell already taken, choose another one.");
      return false;
    }
  
    if (checkWin()) {
      printBoard();
      console.log(`Player ${currentPlayer} wins!`);
      gameActive = false;
      return true;
    }
  
    if (gameBoard.every(cell => cell !== " ")) {
      printBoard();
      console.log("It's a draw!");
      gameActive = false;
      return true;
    }
  
    currentPlayer = currentPlayer === "🎀" ? "🦋" : "🎀"; //for changing player symbol
    return true;
}

//checkwin function, to see for 3 places (rows, cols, diagonals)
function checkWin() {
    const conditions = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6]
    ];

    //to check if the 3 places are taken by same player
    return conditions.some(condition => {
        const [a, b, c] = condition;
        return gameBoard[a] === currentPlayer && gameBoard[b] === currentPlayer && gameBoard[c] === currentPlayer;
      });
  }

//user input for their position on the game board, this move is sent to handlemove function
while (gameActive) {
    printBoard();
    const position = prompt(`Player ${currentPlayer}, enter your move (0-8): `);
  
    if (position >= 0 && position <= 8) {
      handleMove(parseInt(position));
    } else {
      console.log("Invalid position, enter a number between 0 and 8.");
    }
  }



