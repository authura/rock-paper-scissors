// create function computerPlay
function computerPlay() {
    const number = (Math.random() * 3);
    if (number <= 1) {
        return 'Rock'
    } else if (number >= 2) {
        return 'Paper'
    } else {
        return 'Scissors'
    }
}

let playerScore = 0;
let computerScore = 0;


// Create function to handle rounds, if player wins, playerScore goes up by 1, if not then computerScore goes up by 1
function playRound(playerSelection, computerSelection) {
    if (playerSelection === 'Rock' && computerSelection === 'Paper') {
        computerScore++
        return `You Lose! Paper covers Rock! Score: ${playerScore} to ${computerScore}`;
    } else if (playerSelection === 'Rock' && computerSelection === 'Scissors') {
        playerScore++;
        return `You win! Rock smashes Scissors! Score: ${playerScore} to ${computerScore}`;
    } else if (playerSelection === 'Paper' && computerSelection === 'Scissors'){
        computerScore++;
        return `You lose! Scissors shred Paper! Score: ${playerScore} to ${computerScore}`;
    } else if (playerSelection === 'Paper' && computerSelection === 'Rock') {
        playerScore++;
        return `You win! Paper covers Rock! Score: ${playerScore} to ${computerScore}`;
    } else if (playerSelection === 'Scissors' && computerSelection === 'Rock'){
        computerScore++;
        return `You lose! Rock smashes Scissors! Score: ${playerScore} to ${computerScore}`;
    } else if (playerSelection === 'Scissors' && computerSelection === 'Paper') {
        playerScore++;
        return `You win! Rock smashes Scissors! Score: ${playerScore} to ${computerScore}`
    } else {
        return `Draw! Score: ${playerScore} to ${computerScore}`;
    }
}

 function game() {
    for (let i = 0; i < 5; i++) {
        let playerSelection = prompt('Type: Rock, Paper, or Scissors');
        const computerSelection = computerPlay();
        console.log(playRound(playerSelection, computerSelection));
    }
    if (playerScore > computerScore) {
        console.log(`You win the game! Score: ${playerScore} to ${computerScore}`)
    } else if (playerScore < computerScore) {
        console.log(`You lost the game! Score: ${playerScore} to ${computerScore}`)
    } else {
        console.log(`The game has ended in a draw. Score: ${playerScore} to ${computerScore}`);
    } 

} 

game();
