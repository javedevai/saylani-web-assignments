/*
Task 07: Number Range
Ask for a number. If it's greater than 100, alert "Too big!", 
else alert "Within range".
*/

let number = Number(prompt("Enter a Number to check if its in range or Too big"))
if (number >= 100) {
  alert("Too Big!")
}else {
  alert("Within Range")
}