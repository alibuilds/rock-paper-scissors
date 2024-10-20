# Rock Paper Scissors Game

This is a straightforward **Rock Paper Scissors** game built as part of [The Odin Project's Foundations Curriculum](https://www.theodinproject.com/lessons/foundations-rock-paper-scissors). The game allows you to compete against the computer through a web interface using buttons to make your choice.

## Features
- The game is played until either the player or the computer reaches 5 points.
- Each round, the player selects between **rock**, **paper**, or **scissors** by clicking a button.
- The computer makes a random choice each round.
- The winner of each round is determined based on standard game rules.
- Scores are tracked and updated in real-time, and the game ends when a player wins 5 rounds.

## Game Rules
1. Both the player and the computer choose **rock**, **paper**, or **scissors**.
2. The possible outcomes of a round are:
   - If both choose the same option, it’s a **tie**.
   - **Rock** beats **Scissors**.
   - **Paper** beats **Rock**.
   - **Scissors** beat **Paper**.
3. The game tracks the score for both the player and the computer. The game ends when either the player or the computer reaches 5 points, and the overall winner is announced.

## How to Play
1. Open the `index.html` file in a browser.
2. The game interface will display three buttons: Rock, Paper, and Scissors.
3. Click on a button to make your choice.
4. The result of each round, along with the running score, will be displayed on the screen.
5. The game will end once a player or the computer reaches 5 points, and the final result will be displayed.

## Code Structure
- **`index.html`**: The HTML file includes the basic structure of the game and links to the JavaScript file.
- **`script.js`**: Contains the game logic, including:
  - `getComputerChoice()`: Randomly selects rock, paper, or scissors for the computer.
  - `playRound()`: Determines the winner of a single round based on the player’s and computer’s choices.
  - `playGame()`: Manages the flow of each round, tracks scores, and ends the game when a player wins 5 rounds.
  - `disableButtons()`: Disables the buttons once the game ends.

## License
This project is licensed under the MIT License.


