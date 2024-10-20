// Declare score variables globally
let humanScore = 0;
let computerScore = 0;

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

function getHumanChoice() {
    // Prompt the user for their choice
    let choice = prompt("Please enter your choice: rock, paper, or scissors");

    choice = choice.toLowerCase();

    // Check if the input is valid, if not, prompt again
    while (choice !== "rock" && choice !== "paper" && choice !== "scissors") {
        choice = prompt("Invalid choice. Please enter rock, paper, or scissors").toLowerCase();
    }

    return choice;
}

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
function playGame() {

    const humanSelection = getHumanChoice();
    const computerSelection = getComputerChoice();
    
    const roundResult = playRound(humanSelection, computerSelection);

    // Update scores based on the result of the round
    if (roundResult === "human") {
        humanScore++;
    } else if (roundResult === "computer") {
        computerScore++;
    }

    console.log(`Round ${i + 1} score - Human: ${humanScore}, Computer: ${computerScore}`);
    }

    // Final results after 5 rounds
    console.log(`Final score - Human: ${humanScore}, Computer: ${computerScore}`);
    
    if (humanScore > computerScore) {
        console.log("Congratulations! You won the game.");
    } else if (computerScore > humanScore) {
        console.log("Sorry, you lost the game.");
    } else {
        console.log("It's a tie game!");
    }
}

// Call playGame to start the 5 rounds
playGame();