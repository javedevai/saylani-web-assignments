/*
Task 02: Positive Number
Ask the user to enter a number. If it's positive, log: "Positive number"; 
else log: "Not positive".
*/

let number = prompt("Enter a Number")
if (number > 0) {
  console.log("Positive Number")
} else if (number < 0) {
  console.log("Not Positive")
} else {
  console.log("Number is 0")
}