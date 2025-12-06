let humanScore = computerScore = 0;

const getComputerChoice = () => {
// COMPUTE random int between 0 and 2
    let randomNumber = Math.floor(Math.random() * 3);
// CASE number OF
// 0    : OUTPUT "rock"
// 1    : OUTPUT "paper"
// 2    : OUTPUT "scissors"
// ENDCASE
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
// SET humanChoice to humanChoice.toLowerCase
// IF  humanChoice == "rock"
//      OR  "paper" 
//      OR "scissors" THEN
// OUTPUT humanChoice
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
