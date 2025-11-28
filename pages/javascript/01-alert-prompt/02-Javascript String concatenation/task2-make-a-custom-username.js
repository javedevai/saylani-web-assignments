/*
Task 2: Make a Custom Username
Instruction:
Ask the user to input their first name and a favorite number. Concatenate them to create a
simple username like:
"john42"
Display the result with a message: "Your new username is: john42"
*/

let firstName = prompt("Enter your first name:");
let favoriteNumber = prompt("Enter your favorite number:");
let username = firstName + favoriteNumber;
alert("Your new username is: " + username);
