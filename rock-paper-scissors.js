//Global Variable
let playerWin = 0;
let computerWin = 0;
let tieScore = 0;
let totalScore;
//DOM caching
let playerScore = document.querySelector('#playerp');
let computerScore = document.querySelector('#computerp');
const rock = document.querySelector('#rock');
const paper = document.querySelector('#paper');
const scissors = document.querySelector('#scissors');
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
        restartGame();
        alert('You Lost! Computer won.');
        return;
    } else if (playerWin === 5) {
        restartGame();
        alert('You Won! Computer lost.');
        return;
    }

//Announces the winner of each round played.
message =
    ((playerSelection === 'ROCK') && (computerSelection === 'PAPER'))? 'You Lose! Paper covers Rock.':
    ((playerSelection === 'PAPER') && (computerSelection === 'SCISSORS'))? 'You Lose! Scissor cuts Paper.':
    ((playerSelection === 'SCISSORS') && (computerSelection === 'ROCK'))? 'You Lose! Rock crushes Scissor.':
    ((playerSelection === 'PAPER') && (computerSelection === 'ROCK'))? 'You Win! Paper covers Rock.':
    ((playerSelection === 'SCISSORS') && (computerSelection === 'PAPER'))? 'You Win! Scissor cuts Paper.':
    ((playerSelection === 'ROCK') && (computerSelection === 'SCISSORS'))? 'You Win! Rock crushes Scissor.':
    (playerSelection === computerSelection)? 'It\'s a tie.': 'Invalid play';
    return message;
}

//Functions for player selections
function play() {
function pickRock() {
	div.textContent = playRound('ROCK', computerPlay());
 	return (div.textContent);
}
function pickPaper() {
	div.textContent = playRound('PAPER', computerPlay());
	return (div.textContent);
}
function pickScissors() {
	div.textContent = playRound('SCISSORS', computerPlay());
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
    div.textContent = 'Pick a choice to play again.';
}

play();