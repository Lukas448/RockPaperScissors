let humanScore = 0;
let computerScore = 0;
let playedRounds = 0;

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

function playRound(humanChoice, computerChoice) {
    if (humanChoice === computerChoice) {
        document.getElementById("result").innerHTML = `It's a tie! Both chose ${humanChoice}.`;
        playedRounds++;
        updateScore();
        return;
    }

    if (
        (humanChoice === "rock" && computerChoice === "scissors") ||
        (humanChoice === "paper" && computerChoice === "rock") ||
        (humanChoice === "scissors" && computerChoice === "paper")
    ) {
        document.getElementById("result").innerHTML = `You win! ${humanChoice} beats ${computerChoice}.`;
        humanScore++;
    } else {
        document.getElementById("result").innerHTML = `You lose! ${computerChoice} beats ${humanChoice}.`;
        computerScore++;
    }

    if (humanScore == 5) {
        document.getElementById("gameWin").innerHTML = `Human won the game`;
        document.getElementById("rock").disabled = true;
        document.getElementById("paper").disabled = true;
        document.getElementById("scissors").disabled = true;
    } else if (computerScore == 5) {
        document.getElementById("gameWin").innerHTML = `Computer won the game`;
        document.getElementById("rock").disabled = true;
        document.getElementById("paper").disabled = true;
        document.getElementById("scissors").disabled = true;
    }
    playedRounds++;
    updateScore();
} 

function resetGame() {
    humanScore = 0;
    computerScore = 0;
    playedRounds = 0;

    document.getElementById("result").innerHTML = "Click Your Choice To Play";
    document.getElementById("gameWin").innerHTML = "";

    document.getElementById("rock").disabled = false;
    document.getElementById("paper").disabled = false;
    document.getElementById("scissors").disabled = false;

    updateScore();
}

document.getElementById("reset").addEventListener("click", resetGame);

document.getElementById("rock").addEventListener("click", function() {
    playRound("rock", getComputerChoice());
    });
document.getElementById("paper").addEventListener("click", function() {
    playRound("paper", getComputerChoice());
    });
document.getElementById("scissors").addEventListener("click", function() {
    playRound("scissors", getComputerChoice());
    });

function updateScore() {
    document.getElementById("humanScore").innerHTML = `Human: ${humanScore}`;
    document.getElementById("computerScore").innerHTML = `Computer: ${computerScore}`;
    document.getElementById("playedRounds").innerHTML = `Played Rounds: ${playedRounds}`;
}
