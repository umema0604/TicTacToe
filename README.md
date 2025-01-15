# Tic-Tac-Toe 🎀🦋

Welcome to my first coded game! This is a simple console-based implementation of the classic **Tic-Tac-Toe** game. Two players take turns to mark cells on a 3x3 grid until one player wins or the game ends in a draw.

## Features

- **Two-player mode**: Players alternate turns using unique emojis (`🎀` and `🦋`).
- **Dynamic game board**: The game board updates in real time.
- **Win or draw detection**: The game announces the winner or a draw at the end of each round.
- **Error handling**: Players are notified if they attempt to play in an already occupied cell or provide invalid input.

## How to Play

1. Clone this repository to your local machine.
2. Ensure you have [Node.js](https://nodejs.org/) installed.
3. Install the `prompt-sync` package for handling user input:
   ```bash
   npm install prompt-sync
   ```
4. Run the game:
   ```bash
   node tictactoe.js
   ```
5. Follow the prompts in the console:
   - Enter a number between `0` and `8` to make your move.
   - The board positions are numbered as follows:
     ```
     0 | 1 | 2
     ---------
     3 | 4 | 5
     ---------
     6 | 7 | 8
     ```
6. Play until one player wins or the game ends in a draw.

## Code Overview

### Core Functions

- **`printBoard()`**  
  Displays the current state of the game board in the console.

- **`handleMove(position)`**  
  Processes the player's move:
  - Updates the board.
  - Checks for a win or draw.
  - Switches to the other player if the game is still active.

- **`checkWin()`**  
  Evaluates all possible win conditions (rows, columns, and diagonals).

### Game Loop

The main game loop:
- Continuously displays the board.
- Prompts the current player for their move.
- Ends when a win or draw condition is met.

## Future Enhancements

Here are some potential improvements to the game:
- Add a single-player mode with an AI opponent.
- Implement a graphical user interface (GUI).
- Allow players to customize their symbols.
- Include a replay option at the end of the game.


---

Enjoy playing Tic-Tac-Toe! If you have any suggestions or feedback, feel free to open an issue or contribute. 😊
