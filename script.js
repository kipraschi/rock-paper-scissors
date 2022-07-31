let playerScore = 0;
let computerScore = 0;

document.querySelector("#underline").textContent = `Choose your weapon!`;
newGame();

function newGame() {
	playerScore = computerScore = 0;
}

let playerChoice = document.querySelector("#playerSelection");
let computerChoice = document.querySelector("#computerSelection");
let playerScoreDisplay = document.querySelector(".playerScore");
let computerScoreDisplay = document.querySelector(".computerScore");

let playerRoundInfo = document.createElement("div");
playerRoundInfo.setAttribute("class", "text");
document.querySelector("#playerRound").appendChild(playerRoundInfo);

let computerRoundInfo = document.createElement("div");
computerRoundInfo.setAttribute("class", "text");
document.querySelector("#computerRound").appendChild(computerRoundInfo);

let buttons = document.querySelectorAll("button");

buttons.forEach((button) => {
	button.addEventListener("click", () => {
		playRound(button.id);
	});
});

function playRound(playerSelection) {
	buttons.forEach((button) => {
		button.removeAttribute("class", "clicked");
	});

	let computerSelection = computerPlay();

	if (
		//player wins
		(playerSelection == `Rock` && computerSelection == `Scissors`) ||
		(playerSelection == `Paper` && computerSelection == `Rock`) ||
		(playerSelection == `Scissors` && computerSelection == `Paper`)
	) {
		playerScore++;
		playerRoundInfo.style.color = "#5CCA35";
		computerRoundInfo.style.color = "#CE2F2F";
	} else if (
		//computer wins
		(playerSelection == `Scissors` && computerSelection == `Rock`) ||
		(playerSelection == `Rock` && computerSelection == `Paper`) ||
		(playerSelection == `Paper` && computerSelection == `Scissors`)
	) {
		computerScore++;
		computerRoundInfo.style.color = "#5CCA35";
		playerRoundInfo.style.color = "#CE2F2F";
	} else {
		//tie
		computerRoundInfo.style.color = "black";
		playerRoundInfo.style.color = "black";
	}

	updatePage(playerSelection, computerSelection);
}

function computerPlay() {
	let random = Math.floor(Math.random() * 3) + 1;

	if (random == 1) return "Rock";
	else if (random == 2) return "Paper";
	else if (random == 3) return "Scissors";
}

function updatePage(playerSelection, computerSelection) {
	playerChoice.src = getIconSrc(playerSelection);
	computerChoice.src = getIconSrc(computerSelection);

	document
		.querySelector(`#${playerSelection}`)
		.setAttribute("class", "clicked");

	displayScore();

	if (isGameOver()) {
		document.querySelector("#underline").textContent = `${findWinner()}`;
		newGame();
	} else
		document.querySelector("#underline").textContent = `Choose your weapon!`;
}

function displayScore() {
	playerScoreDisplay.textContent = `${playerScore}`;
	computerScoreDisplay.textContent = `${computerScore}`;

	playerRoundInfo.textContent = `You(${playerScore})`;
	computerRoundInfo.textContent = `Computer(${computerScore})`;
}

function getIconSrc(selection) {
	if (selection == `Rock`) return "./img/rock.svg";
	if (selection == `Paper`) return "./img/paper.svg";
	if (selection == `Scissors`) return "./img/scissors.svg";
}

function isGameOver() {
	return playerScore == 5 || computerScore == 5;
}

function findWinner() {
	if (playerScore > computerScore) return `You won!`;
	else return `You lose!`;
}

// make the computer choice come in later
// add a modal with the result and 'playAgain' button
