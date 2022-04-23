//Rock Paper Scissors Project From The Odin Project

//Function to generate random numbers between 1 - 3
function getRandomNum() {
    let randomFloat = Math.random();
    let randomInt = Math.floor(randomFloat*3)+1;
    return randomInt;
}

let randomNum = getRandomNum();

//Assign each random numbers to Rock, Paper and Scissors
function randomNumToWords() {
    if (randomNum === 1) {
        return 'rock';
    } else if (randomNum === 2) {
        return 'paper';
    } else if (randomNum === 3) {
        return 'scissors';
    } else {
        alert('Error: Something wrong with game algorithm')
    }
}
console.log(randomNumToWords());