/*
4. Contest Eligibility
Check if a person is eligible to enter a contest:

● Must be between ages 18–35
● Must be from Pakistan or India
● Must not be banned

Display appropriate messages for age, region, or ban issues.
*/

let age = Number(prompt('What is your age?'));
while (isNaN(age) || age <= 0) {
  age = Number(prompt('Please enter a valid age (number only):'));
}

let country = prompt('What is your country?').toLowerCase();

let bannedInput;
do {
  bannedInput = prompt('Are you banned? (yes/no)').toLowerCase();
} while (bannedInput !== 'yes' && bannedInput !== 'no');

let banned = bannedInput === 'yes';

if (age < 18 || age > 35) {
  alert('Sorry! Age must be between 18 and 35.');
} else if (country !== 'pakistan' && country !== 'india') {
  alert('Sorry! Only residents of Pakistan or India are eligible.');
} else if (banned) {
  alert('Sorry! You are banned from entering the contest.');
} else {
  alert('Congratulations! You are eligible for the contest.');
}

