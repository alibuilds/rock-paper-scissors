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

console.log(getComputerChoice());

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

console.log(getHumanChoice());

// Declare score variables in the global scope
let humanScore = 0;
let computerScore = 0;

