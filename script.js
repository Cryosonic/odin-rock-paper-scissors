const getComputerChoice = () => {
    let computerChoice = Math.floor(Math.random()*3)+1;
    switch (computerChoice) {
        case 1:
            return "rock";
        case 2:
            return "paper";
        case 3:
            return "scissors";
        default:
            return "Error in switch/case";
    }
}

const getHumanChoice = () => {
    let humanChoice = prompt("Select from Rock/Paper/Scissors", "rock");
    humanChoice = humanChoice.toLowerCase();
    if (humanChoice == "rock" || humanChoice == "paper" || humanChoice == "scissors") {
        return humanChoice;
    } else {
        alert("Please enter Rock, Paper or Scissors");
    }
}

const playGame = () => {
    let computerScore = 0;
    let playerScore = 0;

    const playRound = (humanChoice, computerChoice) => {
        if((humanChoice == "rock" && computerChoice == "scissors") || (humanChoice == "paper" && computerChoice == "rock") || (humanChoice == "scissors" && computerChoice == "rock")) {
            playerScore++;
        } else if((humanChoice == "rock" && computerChoice == "paper") || (humanChoice == "paper" && computerChoice == "scissors") || (humanChoice == "scissors" && computerChoice == "rock")) {
            computerScore++;
        }
    }

    for (let i = 0; i < 5; i++) {
        const humanSelection = getHumanChoice();
        const computerSelect = getComputerChoice();
        playRound(humanSelection, computerSelect);
    }

    if (computerScore > playerScore) {
        console.log(`Game over! You Lose! Computer scored: ${computerScore} and you scored ${playerScore}`)
    } else if (playerScore > computerScore) {
        console.log(`Game over! You Win! You scored: ${playerScore} and computer scored ${computerScore}`)    
    } else {
        console.log(`Game Over! Tie! You scored: ${playerScore} and computer scored ${computerScore}`)
    }
    computerScore = 0;
    playerScore = 0;
}

playGame();