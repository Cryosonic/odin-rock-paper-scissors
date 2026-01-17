const controls = document.getElementById("controls");
const round = document.getElementById("round");
const playerScore = document.getElementById("player-score");
const computerScore = document.getElementById("computer-score");
const history = document.getElementById("history");
const resetBtn = document.getElementById("reset-button");

const resetGame = () => {
    roundCounter = 1;
    playerScore.textContent = 0;
    computerScore.textContent = 0;
    round.textContent = 1;
    history.innerHTML = "";
    for (let i = 0; i < controls.children.length; i++) {
        controls.children[i].classList.remove("hidden");
    }
}

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

const getHumanChoice = (e) => {
    if (e.target.id == "rock" || e.target.id == "paper" || e.target.id == "scissors") {
        playRound(e.target.id);
    }
}


const playRound = (humanChoice) => {
    const computerChoice = getComputerChoice();

    const para = document.createElement("p")
    para.textContent = `You selected ${humanChoice}, Computer Selected ${computerChoice}: `

    if((humanChoice == "rock" && computerChoice == "scissors") || (humanChoice == "paper" && computerChoice == "rock") || (humanChoice == "scissors" && computerChoice == "rock")) {
        para.textContent += `You scored!`
        playerScore.textContent = Number(playerScore.textContent) + 1;
    } else if((humanChoice == "rock" && computerChoice == "paper") || (humanChoice == "paper" && computerChoice == "scissors") || (humanChoice == "scissors" && computerChoice == "rock")) {
        para.textContent += `Computer scored!`
        computerScore.textContent = Number(computerScore.textContent) +1 ;
    } else {
        para.textContent += `it's a tie!`;
    }
    history.appendChild(para);
    
    if (Number(round.textContent) < 5) {
        round.textContent = Number(round.textContent) +1;
    } else {
        for(let i = 0; i < controls.children.length; i++) {
            controls.children[i].classList.add("hidden");
        }
        const bold = document.createElement("strong");
        const endGame = document.createElement("p");
        if (Number(playerScore.textContent) > Number(computerScore.textContent)) {
            endGame.textContent = "Game Over! You win!"
        } else if (Number(computerScore.textContent) > Number(playerScore.textContent)) {
            endGame.textContent = "Game Over! You Lose!"
        } else {
            endGame.textContent = "Game Over! It's a tie!"
        }

        bold.appendChild(endGame);
        history.appendChild(bold);
    }
}

// if (computerScore > playerScore) {
//     console.log(`Game over! You Lose! Computer scored: ${computerScore} and you scored ${playerScore}`)
// } else if (playerScore > computerScore) {
//     console.log(`Game over! You Win! You scored: ${playerScore} and computer scored ${computerScore}`)    
// } else {
//     console.log(`Game Over! Tie! You scored: ${playerScore} and computer scored ${computerScore}`)
// }

resetBtn.addEventListener("click", resetGame);
controls.addEventListener("click", getHumanChoice);