const prompt = require('prompt-sync')()
let Sum = 0, i = 0

while(true){
    let num = Number(prompt("Enter numbers (negative to stop) : "))
    if (num < 0) break
    Sum += num
    i++
}
console.log("Average:", Sum / i)