const elements = [`Rock`, `Paper`, `Scissors`];

function getComputerChoice () {
    let randomNumber = Math.floor(Math.random() * 3);
    return elements[randomNumber];
}

function getHumanChoice() {
    let humanChoice = prompt("Choose your weapon: ");
    for (const e of elements)
        if (e.toLowerCase === humanChoice.toLowerCase) 
            return e;
        else 
            alert(`No such weapon!`);
}

const playGame = (rounds = 5) => {

    let humanScore = 0, computerScore = 0;

    const playRound = (humanChoice, computerChoice) => {
        const setRoundWinner = (winner) => {
            if (winner == "computer") {
                computerScore++;
                alert(`You Lose! ${computerChoice} beats ${humanChoice}!`)
            } 
            else {
                humanScore++;
                alert(`You Win! ${humanChoice} beats ${computerChoice}!`);
            }
        }
        
        if (humanChoice.toLowerCase() === computerChoice.toLowerCase()) {
            alert("It's a tie!");
        }
        else if ((humanChoice.toLowerCase() == "rock" && computerChoice.toLowerCase() === "paper") ||
        (humanChoice.toLowerCase() === "paper" && computerChoice.toLowerCase() === "scissors") ||
        (humanChoice.toLowerCase() === "scissors" && computerChoice.toLowerCase() === "rock")) {
            setRoundWinner("computer");
        }
        else {
            setRoundWinner("human");
        }
    
    }

    for (let i = 0; i < rounds; i++) {
        let humanChoice = getHumanChoice();
        let computerChoice = getComputerChoice();
        playRound(humanChoice, computerChoice);
        console.log(`Player (${humanChoice}) ${humanScore} : ${computerScore} Computer (${computerChoice})`);
    };

    if (humanScore != computerScore) {
        humanScore > computerScore ? alert("You won the game!") : alert ("You lost the game.")
    }
    
    // one more round if it's a tie
    // BUG: doesn't handle the case where it is also a tie
    else {
        playRound(humanChoice, computerChoice);
    }
}

playGame();