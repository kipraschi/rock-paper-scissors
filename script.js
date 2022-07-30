let playerScore = 0;
let computerScore = 0;

let resultsBoard = document.querySelector("#results");
let buttons = document.querySelectorAll("button");
// let roundInfo = document.querySelector("#roundInfo");

let scoreDisplay = document.createElement("h2");
let playerChoice = document.createElement("h2");
let computerChoice = document.createElement("h2");


// scoreDisplay.classList.add("score");
resultsBoard.appendChild(playerChoice);
resultsBoard.appendChild(scoreDisplay);
resultsBoard.appendChild(computerChoice);


buttons.forEach((button) => {
	button.addEventListener("click", () => game(button.id));
});

newGame();

function newGame() {
	scoreDisplay.textContent = "Rock, Paper, or Scissors?";
	playerChoice.textContent = "";
	computerChoice.textContent = "";
	playerScore = computerScore = 0;
}

function game(playerSelection) {
	if (
		playerSelection != `Rock` &&
		playerSelection != `Paper` &&
		playerSelection != `Scissors`
	)
		alert(
			`Choose Rock, Paper or Scissors next time! Computer wins this round.`
		);
	let computerSelection = computerPlay();
	playRound(playerSelection, computerSelection);

	playerChoice.textContent = `Player: ${playerSelection}`;
	computerChoice.textContent = ` Computer: ${computerSelection}`;
	scoreDisplay.textContent = `${playerScore} : ${computerScore}`;

	if (playerScore == 5 || computerScore == 5) {
		newGame();
		scoreDisplay.textContent = `${findWinner()}`;
	}
}

function computerPlay() {
	let random = Math.floor(Math.random() * 3) + 1;

	if (random == 1) return "Rock";
	else if (random == 2) return "Paper";
	else if (random == 3) return "Scissors";
}

function playRound(playerSelection, computerSelection) {
	if (
		(playerSelection.toLowerCase() == `rock` &&
			computerSelection.toLowerCase() == `scissors`) ||
		(playerSelection.toLowerCase() == `paper` &&
			computerSelection.toLowerCase() == `rock`) ||
		(playerSelection.toLowerCase() == `scissors` &&
			computerSelection.toLowerCase() == `paper`)
	)
		return playerScore++;
	if (
		(playerSelection.toLowerCase() == `scissors` &&
			computerSelection.toLowerCase() == `rock`) ||
		(playerSelection.toLowerCase() == `rock` &&
			computerSelection.toLowerCase() == `paper`) ||
		(playerSelection.toLowerCase() == `paper` &&
			computerSelection.toLowerCase() == `scissors`)
	)
		return computerScore++;
	// computer gains a point when the player choice is neither rock, paper
	else if (playerSelection.toLowerCase() != computerSelection.toLowerCase())
		return computerScore++;
}

function findWinner() {
	if (playerScore > computerScore) return `You won!`;
	else return `You lose!`;
}
