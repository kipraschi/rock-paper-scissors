const container = document.querySelector(".container");
const elements = [`Rock`, `Paper`, `Scissors`];

const buttons = elements.map(element => {
   const btn = document.createElement("button");
    btn.textContent = element;
    btn.addEventListener(`click`, playRound);
    container.appendChild(btn);
    return btn;
});

function getComputerChoice () {
    let randomNumber = Math.floor(Math.random() * 3);
    return elements[randomNumber];
};

let playerScore = 0, computerScore = 0;

function playRound(e) {
    let playerChoice = e.target.textContent;
    let computerChoice = getComputerChoice();
    console.log(`Player (${playerChoice}) ${playerScore} : ${computerScore} Computer (${computerChoice})`);

    const setRoundWinner = (winner) => {
        if (winner == "computer") {
            computerScore++;
            console.log(`You Lose! ${computerChoice} beats ${playerChoice}!`)
        } 
        else {
            playerScore++;
            console.log(`You Win! ${playerChoice} beats ${computerChoice}!`);
        }
    }
    
    if (playerChoice.toLowerCase() === computerChoice.toLowerCase()) {
        console.log("It's a tie!");
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
