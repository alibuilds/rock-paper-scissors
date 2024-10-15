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
