const displayPlayerScore = document.querySelector(".playerScore");
const displayComputerScore = document.querySelector(".computerScore");
const displayPlayerChoice = document.querySelector(".playerChoice");
const displayComputerChoice = document.querySelector(".computerChoice");
const buttonContainer = document.querySelector(".buttons");
const resultDisplay = document.querySelector(".result");
const restartButton = document.querySelector(".restart");
restartButton.textContent = "Play again";
restartButton.addEventListener(`click`, resetGame);

const elements = [`Rock`, `Paper`, `Scissors`];

// Create buttons with icons from on the elements array
const buttons = elements.map(element => {
    const btn = document.createElement("button");
    const img = document.createElement("img");
    btn.className = element;
    img.src = `./img/${element.toLowerCase()}.svg`;
    img.alt = element;
    btn.addEventListener(`click`, playRound);
    btn.append(img, element);
    buttonContainer.appendChild(btn);
    return btn;
});

let playerScore = 0, computerScore = 0;

function playRound(e) {
    const buttonClicked = e.currentTarget;
    resetRound();
    
    let playerChoice = buttonClicked.textContent;
    let computerChoice = getComputerChoice();

    //Check who won the round
    if (playerChoice === computerChoice) {
        updateDisplay("tie");
    }
    else if (
        (playerChoice == "Rock" && computerChoice === "Paper") ||
        (playerChoice === "Paper" && computerChoice === "Scissors") ||
        (playerChoice === "Scissors" && computerChoice === "Rock")) {
            setRoundWinner("computer");
        }
    else {
        setRoundWinner("player");
    }

    function updateDisplay(result) {
        updateResult(result);
        highlightResult(result, buttonClicked);
        updateScore();
        updateChoices(playerChoice, computerChoice);
    }

    function setRoundWinner(winner) {
        if (winner == "computer") {
            computerScore++;
            updateDisplay("lost");
        } 
        else {
            playerScore++;
            updateDisplay("won");
        }
        if (isGameOver()) stopGame();
    }
}

function getComputerChoice() {
    let randomNumber = Math.floor(Math.random() * 3);
    return elements[randomNumber];
};

function isGameOver() {
    return playerScore == 5 || computerScore == 5;
}

function stopGame() {
    restartButton.style.visibility = "visible";
    disableButtons(true);
    let gameWinner = playerScore > computerScore ? "You" : "Computer";
    resultDisplay.textContent = `${gameWinner} won the game!`
}

function resetGame() {
    playerScore = 0;
    computerScore = 0;
    resetRound();
    restartButton.style.visibility = "hidden";
    updateScore();
    disableButtons(false);
}

function resetRound() {
    buttons.forEach(btn => {
        const color = "black";
        btn.style.color = color;
        btn.style.borderColor = color;
    });
    resultDisplay.textContent = "Choose your weapon...";
    resultDisplay.style.color = "black";
    updateChoices(">>>", "<<<");
}

function updateScore() {
    displayPlayerScore.textContent = `Player: ${playerScore}`;
    displayComputerScore.textContent = `Computer: ${computerScore}`;
}

function updateChoices(playerChoice, computerChoice) {
    displayPlayerChoice.textContent = playerChoice;
    displayComputerChoice.textContent = computerChoice;
}

function updateResult(result){
    if (result == "tie") {
        resultDisplay.textContent ="It's a tie!";
    }
    else {
        resultDisplay.textContent = `You ${result}!`
    }
}

function highlightResult(result, buttonClicked){
    let color = result == "won" ? "green" : result == "lost" ? "red" : "purple";
    buttonClicked.style.color = color;
    buttonClicked.style.borderColor = color;
    resultDisplay.style.color = color;
}

function disableButtons(state) {
    buttons.forEach(btn => {
        btn.disabled = state;
    });
}