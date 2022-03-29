const computerChoiceDisplay = document.getElementById('computer-choice');
const playerChoiceDisplay = document.getElementById('player-choice');
const resultDisplay = document.getElementById('result');
const choices = document.querySelectorAll('button');
const computerScoreDisplay = document.getElementById('computer-score');
const playerScoreDisplay = document.getElementById('player-score');
let playerChoice;
let computerChoice;
let result;
let playerScore = 0;
let computerScore = 0;




choices.forEach(choice => choice.addEventListener('click', (e) => {

    // set choice to the id of whatever button is clicked, then change display to show the selection
    playerChoice = e.target.id;
    playerChoiceDisplay.innerHTML = playerChoice;
    computerPlay();
    getResult();
    getWinner();
    
}));

const computerPlay = () => {
    const num = Math.floor(Math.random() * 3);
    
    if (num <= 1) {
        computerChoice = "rock";
    } else if (num >= 2) {
        computerChoice = "paper";
    } else {
        computerChoice = "scissors";
    }
    
    computerChoiceDisplay.innerHTML = computerChoice;
}

const getResult = () => {
    if (computerChoice === "rock" && playerChoice === "paper") {
        result = "you win!";
        playerScore++;
        playerScoreDisplay.innerHTML = playerScore;
    } else if (computerChoice === "rock" && playerChoice === "scissors") {
        result = "you lose!"
        computerScore++;
        computerScoreDisplay.innerHTML = computerScore;
    } else if (computerChoice === "paper" && playerChoice === "scissors") {
        result = "you win!"
        playerScore++;
        playerScoreDisplay.innerHTML = playerScore;
    } else if (computerChoice === "paper" && playerChoice === "rock") {
        result = "you lose!"
        computerScore++;
        computerScoreDisplay.innerHTML = computerScore;
    } else if (computerChoice === "scissors" && playerChoice === "rock") {
        result = "you win!"
        playerScore++;
        playerScoreDisplay.innerHTML = playerScore;
    } else if (computerChoice === "scissors" && playerChoice === "paper") {
        result = "you lose!"
        computerScore++;
        computerScoreDisplay.innerHTML = computerScore;
    } else {
        result = "draw!"
    }
        
    resultDisplay.innerHTML = result;
}

const getWinner = () => {
    if (computerScore === 5) {
        result = "computer wins!"
    } else if (playerScore === 5) {
        result = "player wins!"
    }
    resultDisplay.innerHTML = result;
    return;
}

