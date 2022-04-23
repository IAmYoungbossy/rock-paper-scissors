//Rock Paper Scissors Project From The Odin Project

function getRandomNum() {
    const randomFloat = Math.random();
    const randomInt = Math.floor(randomFloat*3)+1;
    return randomInt;
}

console.log(getRandomNum());