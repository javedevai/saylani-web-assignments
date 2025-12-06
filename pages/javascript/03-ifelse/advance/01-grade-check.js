/*
1. Age-Based Grade Check
Check a student's marks and display:
● "Distinction" if marks ≥ 80
● "Pass" if marks ≥ 50 and < 80
● "Fail" if marks < 50
● "Invalid Marks" if marks are not between 0 and 100
*/

let marks = Number(prompt('How Much are your Marks!'));

if (marks > 100 || marks < 0) {
  alert('Invalid Marks');
} else if (marks >= 80) {
  alert('Distinction');
} else if (marks >= 50) {
  alert('Pass');
} else {
  alert('Fail');
}
