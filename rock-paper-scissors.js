//Rock Paper Scissors Project From The Odin Project

//Function to generate random numbers between 1 - 3
function getRandomNum() {
    let randomFloat = Math.random();
    let randomInt = Math.floor(randomFloat*3)+1;
    return randomInt;
}

let randomNum = getRandomNum();//Save function to variable.

//Assign each random numbers to Rock, Paper and Scissors.
function randomNumToWords() {
    if (randomNum === 1) {
        return 'ROCK';
    } else if (randomNum === 2) {
        return 'PAPER';
    } else if (randomNum === 3) {
        return 'SCISSORS';
    } else {
        alert('Error: Something wrong with game algorithm')
    }
}

let computerPlay = randomNumToWords()//Save function to variable.

//Function for one round play.
function playRound(playerSelection, computerSelection) {
    let message = (playerSelection === 'ROCK' && computerSelection === 'PAPER')? 'You Lose! Paper beats Rock.':
    (playerSelection === 'PAPER' && computerSelection === 'SCISSORS')? 'You Lose! Scissors cuts Paper.':
    (playerSelection === 'SCISSORS' && computerSelection === 'ROCK')? 'You Lose! Rock crushes Scissors.':
    (playerSelection === 'PAPER' && computerSelection === 'ROCK')? 'You Win! Paper beats Rock.':
    (playerSelection === 'SCISSORS' && computerSelection === 'PAPER')? 'You Win! Scissors cuts Paper.':
    (playerSelection === 'ROCK' && computerSelection === 'SCISSORS')? 'You Win! Rock crushes Scissors.':
    (playerSelection === computerSelection)? 'It\'s a Tie.': 'Invalid Play!.'
    return message;
}
