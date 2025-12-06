/*
5. Subscription Access Check
Given the subscription plan and login status:
● "Welcome Premium User" if plan is "premium" and logged in
● "Welcome Free User" if plan is "free" and logged in
● "Please log in to continue" if not logged in
● "Invalid subscription" otherwise
*/

let plan;
do {
  plan = prompt('What is your plan? premium/free').toLowerCase();
} while (plan !== 'premium' && plan !== 'free');

let login;
do {
  login = prompt('are you logged in? yes/no').toLowerCase();
} while (login !== 'yes' && login !== 'no');

if (plan == 'premium' && login == 'yes') {
  alert('Welcome Premium User');
} else if (plan == 'free' && login == 'yes') {
  alert('Welcome free User');
} else if (login == 'no') {
  alert('Please log in to continue');
} else {
  alert('invalid subscription');
}
