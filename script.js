let humanScore = computerScore = 0;


const getComputerChoice = () => {
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

const getHumanChoice = () => {
    let humanChoice = prompt("Choose your weapon: ");
    humanChoice = humanChoice.toLowerCase();
    return humanChoice;
}

const playRound = (humanChoice, computerChoice) => {
    const declareRoundWinner = (winner) => {
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
        declareRoundWinner("computer");
    }
    else {
        declareRoundWinner("human");
    }
    
}

    let humanChoice = getHumanChoice();
    let computerChoice = getComputerChoice();
    playRound(humanChoice, computerChoice)

const playGame = (rounds = 5) => {

    let humanChoice = getHumanChoice();
    let computerChoice = getComputerChoice();

    // FOR each round
    // CALL playRound();
    // ENDLOOP

    // IF humanScore > computerScore THEN
    // winner = human
    // ELSE 
    // winner = computer

    // PRINT winner
}

