function computerPlay() {
let random = Math.floor(Math.random() * 3 + 1);
let object;
switch (random) {
    case 1:
        object = 'Paper';
        break;
    case 2:
        object = 'Scissors';
        break; 
    default:
        object = 'Rock';
        break;
}
return object;
}


function playRound(playerSelection, computerSelection){
    // rock > scissors
    if (playerSelection.toLowerCase() == `rock` && 
        computerSelection.toLowerCase() == `scissors`)
        return `You Win! ${playerSelection} beats ${computerSelection}`;
    if (playerSelection.toLowerCase() == `scissors` && 
        computerSelection.toLowerCase() == `rock`)
        return `You Lose! ${computerSelection} beats ${playerSelection}`;
    // paper > rock
    if (playerSelection.toLowerCase() == `paper` && 
        computerSelection.toLowerCase() == `rock`)
        return `You Win! ${playerSelection} beats ${computerSelection}`;
    if (playerSelection.toLowerCase() == `rock` && 
        computerSelection.toLowerCase() == `paper`)
        return `You Lose! ${computerSelection} beats ${playerSelection}`;
    // scissors > paper
    if (playerSelection.toLowerCase() == `scissors` && 
        computerSelection.toLowerCase() == `paper`)
        return `You Win! ${playerSelection} beats ${computerSelection}`;
    if (playerSelection.toLowerCase() == `paper` && 
        computerSelection.toLowerCase() == `scissors`)
        return `You Lose! ${computerSelection} beats ${playerSelection}`;

    else
        return `It's a tie. Play another round`;
}

const playerSelection = 'Rock';
const computerSelection = computerPlay();

console.log(`Player: ${playerSelection}`); //debug
console.log(`Computer: ${computerSelection}`); //debug
console.log(playRound(playerSelection, computerSelection));