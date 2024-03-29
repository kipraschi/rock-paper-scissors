//UI
const buttons = document.querySelectorAll(".selector");
const playerChoice = document.querySelector("#playerSelection");
const computerChoice = document.querySelector("#computerSelection");
const playerScoreDisplay = document.querySelector(".playerScore");
const computerScoreDisplay = document.querySelector(".computerScore");

const playerRoundInfo = document.createElement("div");
playerRoundInfo.setAttribute("class", "text");
document.querySelector("#playerRound").appendChild(playerRoundInfo);
const computerRoundInfo = document.createElement("div");
computerRoundInfo.setAttribute("class", "text");
document.querySelector("#computerRound").appendChild(computerRoundInfo);

const modal = document.querySelector("#modal-container");
const closeModal = document.querySelector("#close-modal");
closeModal.addEventListener("click", () => {
	modal.classList.remove("visible");
	newGame();
});

function updatePage(playerSelection, computerSelection) {
	playerChoice.src = getIconSrc(playerSelection);
	computerChoice.src = getIconSrc(computerSelection);

	document
		.querySelector(`#${playerSelection}`)
		.setAttribute("class", "clicked");

	displayScore();

	if (isGameOver()) {
		modal.classList.add("visible");
		document.querySelector("#outcome").textContent = `${findWinner()}`;
	}
}

function getIconSrc(selection) {
	if (selection == `Rock`) return "./img/rock.svg";
	if (selection == `Paper`) return "./img/paper.svg";
	if (selection == `Scissors`) return "./img/scissors.svg";
}

function displayScore() {
	playerScoreDisplay.textContent = `${playerScore}`;
	computerScoreDisplay.textContent = `${computerScore}`;

	playerRoundInfo.textContent = `You(${playerScore})`;
	computerRoundInfo.textContent = `Computer(${computerScore})`;
}

//GAME
let playerScore = 0;
let computerScore = 0;

newGame();

function newGame() {
	playerScore = computerScore = 0;
	displayScore();
	computerRoundInfo.style.color = playerRoundInfo.style.color = "black";
	playerChoice.src = "./img/question-mark.svg";
	computerChoice.src = "./img/question-mark.svg";
	buttons.forEach((button) => {
		button.removeAttribute("class", "clicked");
	});
}

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
		computerRoundInfo.style.color = playerRoundInfo.style.color = "black";
	}

	updatePage(playerSelection, computerSelection);
}

function computerPlay() {
	let random = Math.floor(Math.random() * 3) + 1;

	if (random == 1) return "Rock";
	else if (random == 2) return "Paper";
	else if (random == 3) return "Scissors";
}

function isGameOver() {
	return playerScore == 5 || computerScore == 5;
}

function findWinner() {
	if (playerScore > computerScore) return `You won!`;
	else return `You lost!`;
}
