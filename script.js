const displayPlayerScore = document.querySelector(".playerScore");
const displayComputerScore = document.querySelector(".computerScore");
const displayPlayerChoice = document.querySelector(".playerChoice");
const displayComputerChoice = document.querySelector(".computerChoice");
const buttonContainer = document.querySelector(".buttons");
const result = document.querySelector(".result");
const restartButton = document.querySelector(".restart");
restartButton.textContent = "Play again";

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

    buttons.forEach(btn => {
        const color = "black";
        btn.style.color = color;
        btn.style.borderColor = color;
    });
    
    document.querySelector(".tie").style.visibility = "hidden";

    if (!gameOver()) {
        let playerChoice = e.currentTarget.textContent;
        let computerChoice = getComputerChoice();
        console.log(`Player (${playerChoice}) ${playerScore} : ${computerScore} Computer (${computerChoice})`);
    
        function updateDisplay(color) {
            displayPlayerChoice.textContent = playerChoice;
            displayComputerChoice.textContent = computerChoice;
            displayPlayerScore.textContent = `Player: ${playerScore}`;
            displayComputerScore.textContent = `Computer: ${computerScore}`;
            e.currentTarget.style.color = color;
            e.currentTarget.style.borderColor = color;
        }
    
        function setRoundWinner(winner) {
            if (winner == "computer") {
                computerScore++;
                updateDisplay("red");
            } 
            else {
                playerScore++;
                updateDisplay("green");
            }
        }
        
        if (playerChoice.toLowerCase() === computerChoice.toLowerCase()) {
            updateDisplay("purple");
            document.querySelector(".tie").style.visibility = "visible";
        }
        else if (
            (playerChoice.toLowerCase() == "rock" && computerChoice.toLowerCase() === "paper") ||
            (playerChoice.toLowerCase() === "paper" && computerChoice.toLowerCase() === "scissors") ||
            (playerChoice.toLowerCase() === "scissors" && computerChoice.toLowerCase() === "rock")) {
                setRoundWinner("computer");
        }
        else {
            setRoundWinner("player");
        }
    }
}

function gameOver() {
    return (playerScore == 5 || computerScore == 5);
}

function getComputerChoice() {
    let randomNumber = Math.floor(Math.random() * 3);
    return elements[randomNumber];
};

