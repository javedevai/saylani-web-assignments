/*
3. Login and Email Verification
● If user is logged in and email is verified → "Access granted"
● If user is logged in but not verified → "Please verify your email"
● If not logged in → "Please log in"
*/

let login = true;
let emailVerified = true;
if (login == true && emailVerified == true) {
  alert('Access Granted');
} else if (login == true && emailVerified == false) {
  alert('Please verify your email.');
} else if (login != true) {
  alert('please logged in');
} else {
  alert('Try Again.');
}
