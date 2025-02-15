const prompt = require('prompt-sync')()
let text = prompt("Enter your message (Capital letters only) : ")
function char(text){
    return text.toLowerCase()
}
let result = char(text)
console.log("", result)