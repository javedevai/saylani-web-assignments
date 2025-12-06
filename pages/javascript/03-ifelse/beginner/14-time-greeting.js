/*
Task 14: Time Greeting
Ask the user for the current hour (0–23). If it's less than 12, alert "Good morning!"; 
else alert "Good afternoon!"
*/

let asktime = Number(prompt('What time is now (0-23)'));
if (asktime < 12) {
  alert('Good Morning!');
} else {
  alert('Good Afternoon');
}
