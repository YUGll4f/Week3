const prompt = require('prompt-sync')()
let num = Number(prompt("Enter number : "))
function int(num){
    if (num > 0){
        return console.log("True")
    }else{
        return console.log("False")
    }
}
int(num)