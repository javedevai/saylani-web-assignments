/*
Task 3: Email Generator
Instruction:
Ask the user for their first name and last name. Combine them into an email address format
like:
"firstname.lastname@example.com"
Show the result.
*/

let firstName = prompt("Enter your first name:");
let lastName = prompt("Enter your last name:");
let email = firstName + "." + lastName + "@example.com";
alert(email);
