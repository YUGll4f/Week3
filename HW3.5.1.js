const prompt = require('prompt-sync')()
let num1 = Number(prompt("Enter fisrt number : "))
let num2 = Number(prompt("Enter second number : "))

function Sum(num1, num2){
    return num1 + num2
}
console.log("Total : ", Sum(num1, num2))