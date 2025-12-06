let humanScore = computerScore = 0;

const getComputerChoice = () => {
// generate random number 0-2
    let randomNumber = Math.floor(Math.random() * 3);
// CONVERT the random int to a choice
    switch (randomNumber) {
        case 0:
            return "rock"
        case 1:
            return "paper"
        case 2:
            return "scissors"
        default:
            console.log("Computer didn't decide");
        break;
    }
}

const getHumanChoice = () => {
// PROMPT humanChoice
let humanChoice = prompt("Choose your weapon: ");
// convert humanChoice to LowerCase
humanChoice = humanChoice.toLowerCase();
// validate input
if (humanChoice === "rock" || humanChoice === "paper" || humanChoice === "scissors")
    return humanChoice;
else 
    console.log("No such weapon in the armory.");
}

const playRound = (humanChoice, computerChoice) => {
// IF humanChoice == computerChoice THEN
// OUTPUT "It's a tie!"
// ELSE IF humanChoice == "rock" && computerChoice == "paper" OR
//  humanChoice == "paper" && computerChoice == "scissors" OR
//  humanChoice == "scissors" && computerChoice == "rock" THEN
// SET computer as winner AND
// OUTPUT `You Lose! {computerChoice} beats {playerChoice}!`
// ELSE
// SET human as winner
// OUTPUT `You Win! {humanChoice} beats {computerChoice}!`
}

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
