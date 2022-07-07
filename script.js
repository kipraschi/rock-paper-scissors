let playerScore = 0;
let computerScore = 0;

game();

function game() {
	for (let i = 1; i <= 5; i++) {
		let playerSelection = prompt(`Game ${i}/5: Rock, Paper, Scissors?`);
		if (
			playerSelection.toLowerCase() != `rock` &&
			playerSelection.toLowerCase() != `paper` &&
			playerSelection.toLowerCase() != `scissors`
		)
			alert(`Choose Rock, Paper or Scissors next time! Computer wins this round.`);
		let computerSelection = computerPlay();
		playRound(playerSelection, computerSelection);

		console.log(`Game ${i}:`);
		console.log(`Player: ${playerSelection}`);
		console.log(`Computer: ${computerSelection}`);
		console.log(`Player ${playerScore}:${computerScore} Computer \n\n`);
	}
	console.log(findWinner());
	alert(findWinner());
}

function computerPlay() {
	let random = Math.floor(Math.random() * 3) + 1;

	if (random == 1) return "Rock";
	else if (random == 2) return "Paper";
	else if (random == 3) return "Scissors";
}

function playRound(playerSelection, computerSelection) {
	if (
		(playerSelection.toLowerCase() == `rock` && computerSelection.toLowerCase() == `scissors`) ||
		(playerSelection.toLowerCase() == `paper` && computerSelection.toLowerCase() == `rock`) ||
		(playerSelection.toLowerCase() == `scissors` && computerSelection.toLowerCase() == `paper`)
	)
		return playerScore++;
	if (
		(playerSelection.toLowerCase() == `scissors` && computerSelection.toLowerCase() == `rock`) ||
		(playerSelection.toLowerCase() == `rock` && computerSelection.toLowerCase() == `paper`) ||
		(playerSelection.toLowerCase() == `paper` && computerSelection.toLowerCase() == `scissors`)
	)
		return computerScore++;

	// computer gains a point when the player choice is neither rock, paper
	else if (playerSelection.toLowerCase() != computerSelection.toLowerCase()) return computerScore++;
}

function findWinner() {
	if (playerScore > computerScore) return `You won!`;
	else return `You lose!`;
}
