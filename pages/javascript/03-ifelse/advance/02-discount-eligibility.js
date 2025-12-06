/*
2. Discount Eligibility Based on Age and Membership
Given a person's age and membership status, show:
● "Senior Premium Discount" if age ≥ 60 and is a premium member
● "Senior Discount" if age ≥ 60
● "Premium Discount" if a premium member
● "No Discount" otherwise
*/

let age = Number(prompt('What is your age'));
let membership = prompt('What is your membership status premium or regular');

if (age >= 60 && membership == 'premium') {
  alert('Senior Premium Discount');
} else if (age >= 60) {
  alert('Senior Discount');
} else if (membership == 'premium') {
  alert('Premium Discount');
} else {
  alert('no Discount');
}
