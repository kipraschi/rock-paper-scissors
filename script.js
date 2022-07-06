function computerPlay() {
let random = Math.floor(Math.random() * 3) + 1;
let object;
        
if (random == 1) object = 'Rock';
else if (random == 2) object = 'Paper';
else if (random == 3) object = 'Scissors';

return object;
}

var playerScore = 0;
var computerScore = 0;

//playRound() increases global score of the winner
function playRound(playerSelection, computerSelection){ 
    // rock > scissors
    if (playerSelection.toLowerCase() == `rock` && 
    computerSelection.toLowerCase() == `scissors`)
        playerScore++;
    if (playerSelection.toLowerCase() == `scissors` && 
    computerSelection.toLowerCase() == `rock`)
        computerScore++;
    // paper > rock
    if (playerSelection.toLowerCase() == `paper` && 
    computerSelection.toLowerCase() == `rock`)
        playerScore++;
    if (playerSelection.toLowerCase() == `rock` && 
    computerSelection.toLowerCase() == `paper`)
        computerScore++;
    // scissors > paper
    if (playerSelection.toLowerCase() == `scissors` && 
    computerSelection.toLowerCase() == `paper`)
        playerScore++;
    if (playerSelection.toLowerCase() == `paper` && 
    computerSelection.toLowerCase() == `scissors`)
        computerScore++;
}

function findWinner(){
    if (playerScore > computerScore) return `You won!`;
    else return `You lose!`;
}

function game(){
    for (let i = 0; i < 5; i++) {
        let playerSelection = 'Rock';
        let computerSelection = computerPlay();
        playRound(playerSelection, computerSelection);
        console.log(`Game ${i + 1}:`);
        console.log(`Player selection: ${playerSelection}, score: ${playerScore}`);
        console.log(`Computer selection: ${computerSelection}, score: ${computerScore} \n\n`);
    }
    console.log(findWinner());
}

game();

// console.log(playRound(playerSelection, computerSelection));
