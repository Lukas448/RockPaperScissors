let humanScore = 0;
let computerScore = 0;

//function to generate random whole number

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

//function to use the random generated number and convert it to predefined string

function getComputerChoice() {
    const choice = getRandomInt(3);

    if (choice === 0) {
        return "paper";
    } else if (choice === 1) {
        return "rock";
    } else if (choice === 2) {
        return "scissors";
    }
}

function getHumanChoice() {
    let humanInput = prompt(`Choose: Rock, Paper, Scissors`);
    console.log(humanInput.toLowerCase());
    return humanInput.toLowerCase();
}
//let choice = getHumanChoice();

function playRound(humanChoice, computerChoice) {
    if (humanChoice === computerChoice) {
        console.log(`It's a tie! Both chose ${humanChoice}.`);
        return;
    }

    if (
        (humanChoice === "rock" && computerChoice === "scissors") ||
        (humanChoice === "paper" && computerChoice === "rock") ||
        (humanChoice === "scissors" && computerChoice === "paper")
    ) {
        console.log(`You win! ${humanChoice} beats ${computerChoice}.`);
        humanScore++;
    } else {
        console.log(`You lose! ${computerChoice} beats ${humanChoice}.`);
        computerScore++;
    }
}

function playGame() {
    for (let i = 0; i < 5; i++) {
        let humanChoice = getHumanChoice();
        let computerChoice = getComputerChoice();
        playRound(humanChoice, computerChoice);
    }

    console.log(`Final score — Human: ${humanScore}, Computer: ${computerScore}`);

    if (humanScore > computerScore) {
        console.log("You won the game!");
    } else if (computerScore > humanScore) {
        console.log("Computer won the game!");
    } else {
        console.log("The game is a tie!");
    }
}

playGame();

/*let humanChoice = getHumanChoice();
let computerChoice = getComputerChoice();
playRound(humanChoice, computerChoice);

console.log(`Human score: ${humanScore}`);
console.log(`Computer score: ${computerScore}`);*/