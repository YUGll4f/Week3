const prompt = require('prompt-sync')()
let Numbers = []

while(true){
    let num = Number(prompt("Enter numbers (Stop with 0) : "))
    if (num < 1) break
    Numbers.push(num)
}
console.log("Max number is : ", Math.max(...Numbers))