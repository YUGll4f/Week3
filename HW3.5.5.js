const prompt = require('prompt-sync')()
let Fahrenheit = Number(prompt("Enter Fahrenheit : "))
function temperature(Fahrenheit){
    return Celsius = (Fahrenheit - 32) / 1.8
}
let result = temperature(Fahrenheit);  // เรียกใช้ฟังก์ชันและเก็บผลลัพธ์
console.log("Celsius : ", result);  // แสดงผลลัพธ์