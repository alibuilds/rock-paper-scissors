# Rock Paper Scissors Game

This is a straightforward **Rock Paper Scissors** game built as part of [The Odin Project's Foundations Curriculum](https://www.theodinproject.com/lessons/foundations-rock-paper-scissors). The game is fully interactive through the browser console, allowing you to compete against the computer.

## Features
- The game consists of 5 rounds of **Rock Paper Scissors**.
- Each round, the player selects between **rock**, **paper**, or **scissors**, and the computer makes a random choice.
- The winner of each round is determined based on standard game rules.
- The scores are tracked, and after 5 rounds, the final winner is determined.

## Game Rules
1. Both the player and the computer choose **rock**, **paper**, or **scissors**.
2. The possible outcomes of a round are:
   - If both choose the same option, it’s a **tie**.
   - **Rock** beats **Scissors**.
   - **Paper** beats **Rock**.
   - **Scissors** beat **Paper**.
3. The game tracks the score for both the player and the computer. After 5 rounds, the final score is displayed and the overall winner is announced.

## How to Play
1. Open the `index.html` file in a browser.
2. Open the browser's developer console (Right-click → Inspect → Console).
3. You will be prompted to enter your choice (rock, paper, or scissors) in the console.
4. The game will log the result of each round and track the score.
5. After 5 rounds, the game will display the final result in the console.

## Code Structure
- **`index.html`**: The HTML file includes the basic structure of the game and links to the JavaScript file.
- **`script.js`**: Contains the game logic, including:
  - `getComputerChoice()`: Randomly selects **rock**, **paper**, or **scissors** for the computer.
  - `getHumanChoice()`: Prompts the user to input their choice.
  - `playRound()`: Determines the winner of a single round based on the player’s and computer’s choices.
  - `playGame()`: Manages the flow of the game, plays 5 rounds, and tracks the scores.

## License
This project is licensed under the MIT License.


