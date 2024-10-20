// Declare score variables globally for tracking the game
let humanScore = 0;
let computerScore = 0;

// Cache DOM elements for displaying score and results
const humanScoreDisplay = document.getElementById("human-score");
const computerScoreDisplay = document.getElementById("computer-score");
const resultMessage = document.getElementById("result-message");

function getComputerChoice() {
    // Generate a random number (0-2) and return the corresponding choice
    let randomNumber = Math.floor(Math.random() * 3);
    if (randomNumber === 0) {
        return "rock";
    } else if (randomNumber === 1) {
        return "paper";
    } else {
        return "scissors";
    }
}

function playRound(humanChoice, computerChoice) {
    if (humanChoice === computerChoice) {
        resultMessage.textContent = `It's a tie! Both chose ${humanChoice}`;
        return "tie";
    } else if (
        (humanChoice === "rock" && computerChoice === "scissors") ||
        (humanChoice === "paper" && computerChoice === "rock") ||
        (humanChoice === "scissors" && computerChoice === "paper")
    ) {
        resultMessage.textContent = `You win! ${humanChoice} beats ${computerChoice}`;
        return "human";
    } else {
        resultMessage.textContent = `You lose! ${computerChoice} beats ${humanChoice}`;
        return "computer";
    }
}

function playGame(humanSelection) {
    const computerSelection = getComputerChoice();
    const roundResult = playRound(humanSelection, computerSelection);

    // Update scores based on round result
    if (roundResult === "human") {
        humanScore++;
    } else if (roundResult === "computer") {
        computerScore++;
    }

    // Update the scoreboard in the UI
    humanScoreDisplay.textContent = humanScore;
    computerScoreDisplay.textContent = computerScore;

    // Check if someone has won and disable buttons if a player reaches 5 points
    if (humanScore === 5) {
        resultMessage.textContent = "Congratulations! You won the game.";
        disableButtons();
    } else if (computerScore === 5) {
        resultMessage.textContent = "Sorry, you lost the game.";
        disableButtons();
    }
}

function disableButtons() {
    // Disable game buttons after a player wins
    document.getElementById("rock").disabled = true;
    document.getElementById("paper").disabled = true;
    document.getElementById("scissors").disabled = true;
}

// Event listeners for buttons
document.getElementById("rock").addEventListener("click", () => playGame("rock"));
document.getElementById("paper").addEventListener("click", () => playGame("paper"));
document.getElementById("scissors").addEventListener("click", () => playGame("scissors"));