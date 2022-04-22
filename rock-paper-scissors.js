// Create a function to generate 3 random numbers.
function computerPlay() {
    let a = Math.random();
    let b = Math.floor(a*3)+1;
if (b === 1) {
    b = 'rock';  
} else if (b === 2) {
    b = 'paper'
} else if (b === 3) {
    b = 'scissors'}
    return b;
}

const player = 'ROCK';/*prompt('Enter either Rock, Paper or Scissors to play');*/
const play = player.toLowerCase();

if (computerPlay() == 'rock') {
    if (play == 'paper') {
        console.log('You Win! Paper beats Rock.');
    }
} if (computerPlay() == 'paper') {
    if (play == 'rock') {
        console.log('You Lose! Paper beats Rock.');
    }
} if (computerPlay() == 'paper') {
    if (play == 'scissors') {
        console.log('You Win! Scissors cuts Paper.');
    }
} if (computerPlay() == 'scissors') {
    if (play == 'paper') {
        console.log('You Lose! Scissors cuts Paper.');
    }
} if (computerPlay() == 'rock') {
    if (play == 'scissors') {
        console.log('You Lose! Rock crushes Scissors.');
    }
} if (computerPlay() == 'scissors') {
    if (play == 'rock') {
        console.log('You Win! Rock crushes Scissors.');
    }
}