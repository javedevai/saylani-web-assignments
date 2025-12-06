/*
6. Product Purchase Validation
Check product conditions:
● "Buy now with discount" if price > 1000, in stock, and user is a member
● "Buy now" if in stock
● "Out of stock" if stock === 0
● "Invalid product" otherwise
*/

let userMember;
do {
  userMember = prompt('are you memeber? yes/no').toLowerCase();
} while (userMember !== 'yes' && userMember !== 'no');

let price = Number(prompt('What is the price?'));
let stock = Number(prompt('How much stock left?'));

if (userMember == 'yes' && price > 1000 && stock > 0) {
  alert('Buy with discount');
} else if (stock > 0) {
  alert('Buy now');
} else if (stock === 0) {
  alert('Out of stock');
} else {
  alert('Invalid Product');
}
