const prompt = require('prompt-sync')(); // ใช้ prompt-sync ใน Node.js สำหรับกรอกข้อมูล

let friends = [];

for (let i = 0; i < 5; i++) {
    console.log(`Enter information for friend ${i + 1}:`);
    
    // กรอกข้อมูลเพื่อน
    let studentID = prompt("Enter student ID: ");
    let firstName = prompt("Enter first name: ");
    let lastName = prompt("Enter last name: ");
    let phoneNumber = prompt("Enter phone number: ");
    
    // กรอกที่อยู่
    let houseNumber = prompt("Enter house number: ");
    let district = prompt("Enter district: ");
    let subDistrict = prompt("Enter sub-district: ");
    let province = prompt("Enter province: ");
    let postalCode = prompt("Enter postal code: ");
    
    // สร้าง Object สำหรับเพื่อนและที่อยู่
    let friend = {
        studentID: studentID,
        firstName: firstName,
        lastName: lastName,
        phoneNumber: phoneNumber,
        address: {
            houseNumber: houseNumber,
            district: district,
            subDistrict: subDistrict,
            province: province,
            postalCode: postalCode
        }
    };

    // เพิ่มข้อมูลเพื่อนลงใน Array
    friends.push(friend);
}

console.log("\nFriends Information:");
console.log(friends);
