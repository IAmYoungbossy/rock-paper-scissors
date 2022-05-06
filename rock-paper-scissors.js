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

let playerWin = 0;
let computerWin = 0;
//Function to match player selection to computer selection.
function playRound(playerSelection, computerSelection) {
let message;
    if (playerSelection === 'ROCK') { 
		if (computerSelection === 'PAPER') {
			computerWin++;
			console.log('Computer: '+computerWin);
			return message ='You Lose! Paper covers Rock.';
		}
	}
	if (playerSelection === 'PAPER') {
		if (computerSelection === 'SCISSORS') {
			computerWin++;
			console.log('Computer: '+computerWin);
			return message = 'You Lose! Scissor cuts Paper.';
		}
	}
	if (playerSelection === 'SCISSORS') {
		if (computerSelection === 'ROCK') {
			computerWin++;
			console.log('Computer: '+computerWin);
			return message = 'You Lose! Rock crushes Scissor.';
		}
	}
	if (playerSelection === 'PAPER') {
		if (computerSelection === 'ROCK') {
			playerWin++;
			console.log('Player: '+playerWin);
			return message = 'You Win! Paper covers Rock.';
		}
	}
	if (playerSelection === 'SCISSORS') {
		if (computerSelection === 'PAPER') {
			playerWin++;
			console.log('Player: '+playerWin);
			return message = 'You Win! Scissor cuts Paper.';
		}
	}
	if (playerSelection === 'ROCK') {
		if (computerSelection === 'SCISSORS') {
			playerWin++;
			console.log('Player: '+playerWin);
			return message = 'You Win! Rock crushes Scissor.';
		}
	}
	if (playerSelection === computerSelection) {
		return message = 'It\'s a tie.';
	}

    // let message =
    // ((playerSelection === 'ROCK') && (computerSelection === 'PAPER'))? 'You Lose! Paper covers Rock.':
    // ((playerSelection === 'PAPER') && (computerSelection === 'SCISSORS'))? 'You Lose! Scissor cuts Paper.':
    // ((playerSelection === 'SCISSORS') && (computerSelection === 'ROCK'))? 'You Lose! Rock crushes Scissor.':
    // ((playerSelection === 'PAPER') && (computerSelection === 'ROCK'))? 'You Win! Paper covers Rock.':
    // ((playerSelection === 'SCISSORS') && (computerSelection === 'PAPER'))? 'You Win! Scissor cuts Paper.':
    // ((playerSelection === 'ROCK') && (computerSelection === 'SCISSORS'))? 'You Win! Rock crushes Scissor.':
    // (playerSelection === computerSelection)? 'It\'s a tie.': 'Invalid play';
    // return message;
}


//Added new div for displaying each round result
const body = document.querySelector('#body');
let div = document.createElement('div');
div.classList.add('result');
div.style.marginTop = '30px';
body.appendChild(div);

//DOM caching
const rock = document.querySelector('#rock');
const paper = document.querySelector('#paper');
const scissors = document.querySelector('#scissors');
//Functions for player selections
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



















// //Function to call the playRound fuction to declare winner who reaches 5 points scores first.
// function game() {
//     //Score counters declaration
//     let tieCount = 0;
//     let playerWins = 0;
//     let computerWins = 0;

//     //For loop to repeat playRound function untill condition met.
//     /*for (let i = 1; i <= 10; i++) {
//         let computerSelection = computerPlay();
//         let playerSelection = prompt('Choose Your Weapon! Rock, Paper, Scissors.').toUpperCase();
//         let gameRound = (playRound(playerSelection, computerSelection));*/
// 		let gameRound = oneRound();
//         //Conditions for adding scores to players.
//         if (gameRound === 'You Lose! Paper covers Rock.' || gameRound === 'You Lose! Scissor cuts Paper.' || gameRound === 'You Lose! Rock crushes Scissor.') {
//             computerWins++;
//             //If conditon is met before player, computer wins.
//             if (computerWins === 5) {
//                 console.log ('\n You lose! The Computer has beaten you at the game.');
//                 console.log('Player Score = '+playerWins+' ||| Computer Score = '+computerWins+' ||| Tie Score = '+tieCount);
//                 // break;
//             }
//         } else if (gameRound === 'You Win! Paper covers Rock.' || gameRound === 'You Win! Scissor cuts Paper.' || gameRound === 'You Win! Rock crushes Scissor.') {
//             playerWins++;
//             //If conditon is met before computer, player wins.
//             if (playerWins === 5) {
//                 console.log ('\n You win! You have beaten the computer at the game.');
//                 console.log('Player Score = '+playerWins+' ||| computer Score = '+computerWins+' ||| Tie Score = '+tieCount);
//                 // break;
//             }
//         } else {
//             tieCount++;
//         }
// 	}

// game();