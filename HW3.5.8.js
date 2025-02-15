const prompt = require('prompt-sync')();
const number = Number(prompt("Enter a positive number: "));

function isPrime(number) {
    if (number <= 1) {
        console.log("Not a prime number");
        return;
    }
    
    for (let i = 2; i <= Math.sqrt(number); i++) {
        if (number % i === 0) {
            console.log("Not a prime number");
            return;
        }
    }
    
    console.log("Is a prime number");
}

isPrime(number);
