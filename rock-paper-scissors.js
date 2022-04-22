// Create a function to generate 3 random numbers.
function computerPlay() {
    let a = Math.random();
    let b = Math.floor(a*3)+1;
    return b;
}

console.log(computerPlay());