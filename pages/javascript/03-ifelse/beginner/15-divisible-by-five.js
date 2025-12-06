/*
Task 15: Divisible By Five
Ask the user to enter a number. If it's divisible by 5, log "Divisible by 5"; 
else log "Not divisible by 5".
*/

let number = prompt("Enter a number:");
if (number % 5 === 0) {
    console.log("Divisible by 5");
} else {
    console.log("Not divisible by 5");
}
