/* Original JavaScript Code per Specification of The Odin Project */

const choices = ['Rock', 'Paper', 'Scissor'];

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

function computerPlay() {
    return choices[getRandomInt(3)];
}

function toTitleCase(str) {
    return str.replace(/\w\S*/g, (txt) => { return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase(); });
}

function playRound(playerSelection, computerSelection) {
    const playerSelect = toTitleCase(playerSelection);

    if (playerSelect === computerSelection) {
        return `You Tied with ${computerSelection}!`
    }

    if (playerSelect === 'Rock' && computerSelection === 'Scissor' ||
        playerSelect === 'Paper' && computerSelection === 'Rock' ||
        playerSelect === 'Scissor' && computerSelection === 'Paper') {
        return `You Win! ${playerSelect} beats ${computerSelection}`;
    } else {
        return `You Lose! ${computerSelection} beats ${playerSelect}`;
    }

}

function getPlayerSelection() {
    let userInput = prompt('Rock, Paper, or Scissor?').toLowerCase();
    while (userInput !== 'rock' && userInput !== 'scissor' && userInput !== 'paper') {
        userInput = prompt('Invalid input. Rock, Paper, or Scissor?').toLowerCase();
    }
    return userInput;
}

function game() {
    let playerScore = 0;
    let computerScore = 0;
    for (i = 0; i < 5; i++) {
        let result = playRound(getPlayerSelection(), computerPlay());
        console.log(result);
        if (result.indexOf('Win') !== -1) {
            playerScore++;
        } else if (result.indexOf('Lose') !== -1) {
            computerScore++;
        } else {
            playerScore += 0.5;
            computerScore += 0.5;
        }
    }

    if (playerScore === computerScore) {
        console.log("You're both winners!")
    } else if (playerScore > computerScore) {
        console.log(`You won with a score of ${playerScore} compared to the computer with a score of ${computerScore}.`);
    } else {
        console.log(`You lost with a score of ${playerScore} compared to the computer with a score of ${computerScore}.`);
    }
}

// Running our 5 round game of Rock, Paper, Scissors
game();