/*
Task 08: Score Check
Ask for a score. If it's 50 or higher, log "You passed!", 
else log "You failed."
*/

let score = Number(prompt("Enter Your Score!"))
if (score >= 50) {
  alert("Congratulation! You passed")
}else {
  alert("You Failed!")
}