// Declare score variables globally
let humanScore = 0;
let computerScore = 0;

// Get references to HTML elements for score and result display
const humanScoreDisplay = document.getElementById("human-score");
const computerScoreDisplay = document.getElementById("computer-score");
const resultMessage = document.getElementById("result-message");

function getComputerChoice() {
    // Generate a random number between 0 and 2
    let randomNumber = Math.floor(Math.random() * 3);

    // Return "rock", "paper", or "scissors" based on the random number
    if (randomNumber === 0) {
        return "rock";
    } else if (randomNumber === 1) {
        return "paper";
    } else {
        return "scissors";
    }
}

// Removed the getHumanChoice function as it is no longer needed

function playRound(humanChoice, computerChoice) {
    if (humanChoice === computerChoice) {
        console.log("It's a tie! Both chose " + humanChoice);
        return "tie";
    } else if (
        (humanChoice === "rock" && computerChoice === "scissors") ||
        (humanChoice === "paper" && computerChoice === "rock") ||
        (humanChoice === "scissors" && computerChoice === "paper")
    ) {
        console.log("You win! " + humanChoice + " beats " + computerChoice);
        return "human";
    } else {
        console.log("You lose! " + computerChoice + " beats " + humanChoice);
        return "computer";
    }
}

// New playGame function that handles 5 rounds of play
function playGame(humanSelection) {

    const computerSelection = getComputerChoice();
    const roundResult = playRound(humanSelection, computerSelection);

    // Update scores based on the result of the round
    if (roundResult === "human") {
        humanScore++;
    } else if (roundResult === "computer") {
        computerScore++;
    }

    // Update the scoreboard in the UI
    humanScoreDisplay.textContent = humanScore;
    computerScoreDisplay.textContent = computerScore;

    // Check if someone has reached 5 points 
    if (humanScore === 5) {
        resultMessage.textContent = "Congratulations! You won the game.";
        disableButtons(); // Disable the buttons when the game ends
    } else if (computerScore === 5) {
        resultMessage.textContent = "Sorry, you lost the game.";
        disableButtons(); // Disable the buttons when the game ends
    }
}

function disableButtons() {
    document.getElementById("rock").disabled = true;
    document.getElementById("paper").disabled = true;
    document.getElementById("scissors").disabled = true;
}

// Event listeners for buttons
document.getElementById("rock").addEventListener("click", () => playGame("rock"));
document.getElementById("paper").addEventListener("click", () => playGame("paper"));
document.getElementById("scissors").addEventListener("click", () => playGame("scissors"));
