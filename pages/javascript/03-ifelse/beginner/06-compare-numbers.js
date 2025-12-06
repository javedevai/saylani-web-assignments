/*
Task 06: Compare Numbers
Ask the user to enter two numbers. Check which one is larger and alert: "First is larger" 
or "Second is larger".
*/

let num1 = Number(prompt("Enter First Number"))
let num2 = Number(prompt("Enter Second Number"))

if (num1 > num2) {
  alert("First is Larger")
}else if(num1 < num2) {
  alert("Second is Larger")
}else {
  alert("both are equal")
}