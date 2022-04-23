//Rock Paper Scissors Project From The Odin Project

//Function to generate random numbers between 1 - 3
function getRandomNum() {
    const randomFloat = Math.random();
    const randomInt = Math.floor(randomFloat*3)+1;
    return randomInt;
}

//Assign each random numbers to Rock, Paper and Scissors
function randomNumToWords() {
    if (getRandomNum() === 1) {
        return 'rock';
    } else if (getRandomNum() === 2) {
        return 'paper';
    } else if (getRandomNum() === 3) {
        return 'scissors';}
    }
console.log(randomNumToWords());