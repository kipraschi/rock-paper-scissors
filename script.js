let humanScore = computerScore = 0;


function getComputerChoice () {
    // generate random number 0-2
    let randomNumber = Math.floor(Math.random() * 3);
    console.log(randomNumber);
    
    // CONVERT the random int to a choice 
    switch (randomNumber) {
        case 0:
            return "rock"
        case 1:
            return "paper"
        case 2:
            return "scissors"
        default:
            alert("Computer didn't decide");
        break;
    }
}

function getHumanChoice() {
    let humanChoice = prompt("Choose your weapon: ");
    humanChoice = humanChoice.toLowerCase();
    return humanChoice;
}

const playRound = (humanChoice = getHumanChoice(), computerChoice = getComputerChoice()) => {
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
    
    if (humanChoice == computerChoice) {
        alert("It's a tie!");
    }
    else if ((humanChoice == "rock" && computerChoice === "paper") ||
    (humanChoice === "paper" && computerChoice === "scissors") ||
    (humanChoice === "scissors" && computerChoice === "rock")) {
        setRoundWinner("computer");
    }
    else {
        setRoundWinner("human");
    }
    
}

const playGame = (rounds = 5) => {

    // play multiple rounds
    for (i = 0; i < rounds; i++) {
        playRound();
        console.log(`Player ${humanScore} : ${computerScore} Computer`);
    };
    // check who won after all rounds
    if (humanScore != computerScore) {
        humanScore > computerScore ? alert("You won the game!") : alert ("You lost the game.")
    }
    // one more round if it's a tie
    else {
        playRound();
    }
}

playGame();