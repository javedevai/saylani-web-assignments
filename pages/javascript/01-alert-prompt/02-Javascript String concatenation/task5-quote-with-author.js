/*
Task 5: Quote with Author
Instruction:
Ask the user for a quote and the author's name. Display it in the format:
"The only limit is your mind." - John Doe
*/

let quote = prompt("Enter a quote:");
let author = prompt("Enter the author's name:");
let result = '"' + quote + '" - ' + author;
alert(result);
