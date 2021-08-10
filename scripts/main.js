const feedback = document.querySelector('#feedback');
const results = document.querySelector('#results');
const restart = document.querySelector('#restart');
const rock = document.querySelector('#rock');
const paper = document.querySelector('#paper');
const scissor = document.querySelector('#scissor');
const computerScore = document.querySelector('#computer-score');
const playerScore = document.querySelector('#player-score');
const computerSelected = document.querySelector('#computer-select');
const playerSelected = document.querySelector('#player-select');

const choices = ['Rock', 'Paper', 'Scissor'];
const choiceImgs = {
    Rock: 'fas fa-hand-rock',
    Paper: 'fas fa-hand-paper',
    Scissor: 'fas fa-hand-scissors'
}
let userScore = 0;
let compScore = 0;

const getRandomInt = (max) => Math.floor(Math.random() * max);
const computerPlay = () => choices[getRandomInt(3)];


function playRound(playerSelect, computerSelect) {
    playerSelected.classList = choiceImgs[playerSelect];
    computerSelected.classList = choiceImgs[computerSelect];
    let result = '';

    if (playerSelect === computerSelect) {
        result = "It's a tie!"
    } else if (playerSelect === 'Rock' && computerSelect === 'Scissor' ||
        playerSelect === 'Paper' && computerSelect === 'Rock' ||
        playerSelect === 'Scissor' && computerSelect === 'Paper') {
        result = "You won!";
    } else {
        result = "You lost!";
    }

    result === "You won!" ? updateScore(++userScore, compScore) : result === "You lost!" ? updateScore(userScore, ++compScore) : '';
    feedback.innerText = result;
    checkEnd();
}

function updateScore(newUser, newComp) {
    userScore = newUser;
    compScore = newComp;
    playerScore.innerText = newUser;
    computerScore.innerText = newComp;
}

function checkEnd() {
    if (userScore === 5 || compScore === 5) {
        toggleButtons();
        restart.classList.remove('hidden');
        if (userScore === 5) {
            results.innerText = 'You Won!';
        } else {
            results.innerText = 'You Lost!';
        }
    }
}

/* Toggle the game buttons once someone wins*/
function toggleButtons() {
    rock.disabled = !rock.disabled;
    paper.disabled = !paper.disabled;
    scissor.disabled = !scissor.disabled;
}


/* Button Events */
rock.addEventListener('click', (e) => {
    const computerSelect = computerPlay();
    playRound('Rock', computerSelect);
});

paper.addEventListener('click', (e) => {
    const computerSelect = computerPlay();
    playRound('Paper', computerSelect);
});

scissor.addEventListener('click', (e) => {
    const computerSelect = computerPlay();
    playRound('Scissor', computerSelect);
});


restart.addEventListener('click', (e) => {
    updateScore(0, 0)
    playerSelected.classList = '';
    computerSelected.classList = '';
    feedback.innerText = '';
    results.innerText = '';
    toggleButtons();
    restart.classList.add('hidden');
});