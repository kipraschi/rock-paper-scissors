var playerScore = 0;
var computerScore = 0;

game();

function game() {
	for (let i = 0; i < 5; i++) {
		var playerSelection = prompt(`Game ${i+1}/5: Rock, Paper, Scissors?`);
		if (
			playerSelection.toLowerCase() != `rock` &&
			playerSelection.toLowerCase() != `paper` &&
			playerSelection.toLowerCase() != `scissors`
		)
			alert(`Choose Rock, Paper or Scissors next time! Computer wins this round.`);
		var computerSelection = computerPlay();
		playRound(playerSelection, computerSelection);
        
		console.log(`Game ${i + 1}:`);
		console.log(`Player selection: ${playerSelection}, score: ${playerScore}`);
		console.log(`Computer selection: ${computerSelection}, score: ${computerScore}`);
        console.log(`Player ${playerScore}:${computerScore} Computer \n\n`);
	}
	console.log(findWinner());
    alert(findWinner());
}

function computerPlay() {
	let random = Math.floor(Math.random() * 3) + 1;
	let object;

	if (random == 1) object = "Rock";
	else if (random == 2) object = "Paper";
	else if (random == 3) object = "Scissors";

	return object;
}

//playRound() increases global score of the winner
function playRound(playerSelection, computerSelection) {
	// rock > scissors
	if (playerSelection.toLowerCase() == `rock` && computerSelection.toLowerCase() == `scissors`)
		playerScore++;
	if (playerSelection.toLowerCase() == `scissors` && computerSelection.toLowerCase() == `rock`)
		computerScore++;
	// paper > rock
	if (playerSelection.toLowerCase() == `paper` && computerSelection.toLowerCase() == `rock`)
		playerScore++;
	if (playerSelection.toLowerCase() == `rock` && computerSelection.toLowerCase() == `paper`)
		computerScore++;
	// scissors > paper
	if (playerSelection.toLowerCase() == `scissors` && computerSelection.toLowerCase() == `paper`)
		playerScore++;
	if (playerSelection.toLowerCase() == `paper` && computerSelection.toLowerCase() == `scissors`)
		computerScore++;
	//a tie keeps doesn't change the scores,
	//but if a player enters something else than the given selections computer gains a point
	else if (playerSelection.toLowerCase() != computerSelection.toLowerCase()) computerScore++;
}

function findWinner() {
	if (playerScore > computerScore) return `You won!`;
	else return `You lose!`;
}
