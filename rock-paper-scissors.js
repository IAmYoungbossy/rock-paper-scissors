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


function game() {
    let tieScore = 0;
    let computerScore = 0;
    let playerScore = 0;
    let count = 1;
    
    for (; count <= 5; count++) {
        let human = prompt('Pick a word. ROCK, PAPER, or SCISSORS.');
        let humanPlay = human.toUpperCase();
        let roundPlay = playRound(humanPlay, computerPlay);

        console.log('You: '+humanPlay+' |*| Bot: '+computerPlay);
        console.log(roundPlay);

        if (roundPlay === 'You Lose! Scissors cuts Paper.' || roundPlay === 'You Lose! Rock crushes Scissors.' || roundPlay === 'You Lose! Paper beats Rock.') {
            computerScore++;
        } else if (roundPlay === 'You Win! Rock crushes Scissors.' || roundPlay === 'You Win! Scissors cuts Paper.' || roundPlay === 'You Win! Paper beats Rock.') {
            playerScore++;
        } else {
            tieScore++;
        }
    }

    if (computerScore > playerScore) {
        console.log('');
        console.log('');
        console.log('FINAL RESULTS.')
        console.log('You Loss! Bot beats you in this round.');
        console.log('Player Score = '+playerScore+ ' ||| Computer Score = '+computerScore+' ||| Ties Score = '+tieScore);
    } else if (computerScore < playerScore) {
        console.log('');
        console.log('');
        console.log('FINAL RESULTS.')
        console.log('You Win! You beat Bot in this round.');
        console.log('Player Score = '+playerScore+ ' ||| Computer Score = '+computerScore+' ||| Ties Score = '+tieScore)
    } else {
        console.log('');
        console.log('');
        console.log('FINAL RESULTS.')
        console.log('It\'s a Tie. You can play again.');
        console.log('Player Score = '+playerScore+ ' ||| Computer Score = '+computerScore+' ||| Ties Score = '+tieScore)
    }
}

game();