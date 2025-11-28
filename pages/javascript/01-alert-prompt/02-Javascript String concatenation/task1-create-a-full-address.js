/*
Task 1: Create a Full Address
Instruction:
Ask the user to enter their street, city, and country. Concatenate these values into one full
address string and display it like:
"Your full address is: 123 Main St, Springfield, USA"
*/

let street = prompt("Enter your street:");
let city = prompt("Enter your city:");
let country = prompt("Enter your country:");
let fullAddress = "Your full address is: " + street + ", " + city + ", " + country;
alert(fullAddress);
