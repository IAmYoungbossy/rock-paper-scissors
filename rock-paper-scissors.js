//Global Variable
let playerWin = 0;
let computerWin = 0;
let tieScore = 0;
let totalScore;
//DOM caching
let playerScore = document.querySelector('#playerp');
let computerScore = document.querySelector('#computerp');
//
const playAgain = document.querySelector('.playAgain');
const modal = document.querySelector('.modal');
const modalContent = document.querySelector('.modal-content');
const closeButton = document.querySelector('.close-button');
let gameOver = document.querySelector('.modal-content > h5');
//
const rock = document.querySelector('#rock');
const paper = document.querySelector('#paper');
const scissors = document.querySelector('#scissors');
const button = document.querySelector('.btn');
//Added new div for displaying each round result
const body = document.querySelector('#body');
let div = document.createElement('div');
let tie = document.querySelector('#tie');
div.classList.add('result');
div.style.marginTop = '30px';
body.appendChild(div);
div.textContent = 'Pick a choice to start game.'

//Function to generate random numbers between 1 and 3.
function getRandomNum() {
    let randomFloat = Math.random();
    let randomInt = +Math.floor((randomFloat*3)+1);
    return randomInt;
}

//Function to convert random numbers to Rock, Paper or Scissors.
function computerPlay() {
    if (getRandomNum() === 1) {
        return ('Rock').toUpperCase();
    } else if (getRandomNum() === 2) {
        return ('Paper').toUpperCase();
    } else {
        return ('Scissors').toUpperCase();
    }
}


//Function to match player selection to computer selection.
function playRound(playerSelection, computerSelection) {
let message;
//Keeps records of Player and Computer scores.
	if ((playerSelection === 'ROCK' && computerSelection === 'PAPER') || (playerSelection === 'PAPER' && computerSelection === 'SCISSORS') || (playerSelection === 'SCISSORS' && computerSelection === 'ROCK')) {
		computerWin++;
		computerScore.textContent = 'Computer: '+computerWin;
	}
	if ((playerSelection === 'PAPER' && computerSelection === 'ROCK') || (playerSelection === 'SCISSORS' && computerSelection === 'PAPER') || (playerSelection === 'ROCK' && computerSelection === 'SCISSORS')) {
		playerWin++;
		playerScore.textContent = 'Player: ' +playerWin;
	}
    if (playerSelection === computerSelection) {
        tieScore++;
        tie.textContent = 'Tie: '+tieScore;
    }

    if (computerWin === 5) {
        totalScore = playerWin+computerWin+tieScore;
        toggleModal();
        gameOver.textContent = 'You Lost';
        restartGame();
        return div.textContent = 'Pick a choice to play again';
    } else if (playerWin === 5) {
        totalScore = playerWin+computerWin+tieScore;
        toggleModal();
        gameOver.textContent = 'You Won';
        restartGame();
        return div.textContent = 'Pick a choice to play again';
    }

//Announces the winner of each round played.
message =
    ((playerSelection === 'ROCK') && (computerSelection === 'PAPER'))? 'You Lose! Paper covers Rock.':
    ((playerSelection === 'PAPER') && (computerSelection === 'SCISSORS'))? 'You Lose! Scissors cuts Paper.':
    ((playerSelection === 'SCISSORS') && (computerSelection === 'ROCK'))? 'You Lose! Rock crushes Scissors.':
    ((playerSelection === 'PAPER') && (computerSelection === 'ROCK'))? 'You Win! Paper covers Rock.':
    ((playerSelection === 'SCISSORS') && (computerSelection === 'PAPER'))? 'You Win! Scissors cuts Paper.':
    ((playerSelection === 'ROCK') && (computerSelection === 'SCISSORS'))? 'You Win! Rock crushes Scissors.':
    (playerSelection === computerSelection)? 'It\'s a tie.': 'Invalid play';
    return message;
}

//Functions for player selections
function play() {
function pickRock() {
	div.textContent = playRound('ROCK', computerPlay());
    if (div.textContent === 'You Lose! Paper covers Rock.') { document.querySelector('#rock').classList.add('red-glow');
    setTimeout(function() {document.querySelector('#rock').classList.remove('red-glow');}, 300);
    }
    if (div.textContent === 'You Win! Rock crushes Scissors.') { document.querySelector('#rock').classList.add('green-glow');
    setTimeout(function() {document.querySelector('#rock').classList.remove('green-glow');}, 300);
    }
    if (div.textContent === 'It\'s a tie.') { document.querySelector('#rock').classList.add('grey-glow');
    setTimeout(function() {document.querySelector('#rock').classList.remove('grey-glow');}, 300);
    }
 	return (div.textContent);
}
function pickPaper() {
	div.textContent = playRound('PAPER', computerPlay());
    if (div.textContent === 'You Lose! Scissors cuts Paper.') { document.querySelector('#paper').classList.add('red-glow');
    setTimeout(function() {document.querySelector('#paper').classList.remove('red-glow');}, 300);
    }
    if (div.textContent === 'You Win! Paper covers Rock.') { document.querySelector('#paper').classList.add('green-glow');
    setTimeout(function() {document.querySelector('#paper').classList.remove('green-glow');}, 300);
    }
    if (div.textContent === 'It\'s a tie.') { document.querySelector('#paper').classList.add('grey-glow');
    setTimeout(function() {document.querySelector('#paper').classList.remove('grey-glow');}, 300);
    }
	return (div.textContent);
}
function pickScissors() {
	div.textContent = playRound('SCISSORS', computerPlay());
    if (div.textContent === 'You Lose! Rock crushes Scissors.') { document.querySelector('#scissors').classList.add('red-glow');
    setTimeout(function() {document.querySelector('#scissors').classList.remove('red-glow');}, 300);
    }
    if (div.textContent === 'You Win! Scissors cuts Paper.') { document.querySelector('#scissors').classList.add('green-glow');
    setTimeout(function() {document.querySelector('#scissors').classList.remove('green-glow');}, 300);
    }
    if (div.textContent === 'It\'s a tie.') { document.querySelector('#scissors').classList.add('grey-glow');
    setTimeout(function() {document.querySelector('#scissors').classList.remove('grey-glow');}, 300);
    }
	return (div.textContent);
}
rock.addEventListener('click', pickRock);
paper.addEventListener('click', pickPaper);
scissors.addEventListener('click', pickScissors);
}

function restartGame() {
    playerWin = 0;
    computerWin = 0;
    tieScore = 0;
    computerScore.textContent = 'Computer: '+computerWin;
    playerScore.textContent = 'Player: ' +playerWin;
    tie.textContent = 'Tie: '+tieScore;
    div.textContent = 'Pick a choice to start game.';
}

function toggleModal() {
    modal.classList.toggle("show-modal");
}

playAgain.addEventListener('click', toggleModal);
button.addEventListener('click', restartGame);
play();