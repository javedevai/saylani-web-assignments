/* 1. Create an array of 3 student names and add one more using push() */

let students = ['salman', 'ali', 'javed'];
students.push('kareem');
console.log(students);
/* 2. Remove the last item from an array of fruits using pop() */
let fruits = ['apple', 'banana', 'mango', 'orange'];
fruits.pop();
console.log(fruits);

/* 3. Add "Monday" to the beginning of a days array using unshift() */
let days = ['tuesday', 'wednesday', 'thursday', 'friday', 'saturday', 'sunday'];
days.unshift('monday');
console.log(days);
/* 4. Remove the first item from an array of colors using shift() */
days.shift();
console.log(days);
/* 5. Use splice() to insert "Math" and "Science" at index 2 of a subjects array */
let subjects = ['pak studies', 'biology', 'physics', 'chemistry', 'english'];
subjects.splice(2, 0, 'math', 'science');
console.log(subjects);
/* 6. Use splice() to remove 2 elements starting from index 1 of a cities array */
let cities = [
  'karachi',
  'quetta',
  'islamabad',
  'faisalabad',
  'lahore',
  'sialkot',
  'hyderabad',
];
cities.splice(1, 2);
console.log(cities);

/* 7. Use slice() to get the first 3 items from a countries array */
let cities2 = [
  'karachi',
  'quetta',
  'islamabad',
  'faisalabad',
  'lahore',
  'sialkot',
  'hyderabad',
];
let newCities = cities2.slice(0, 3);
console.log(newCities);
/* 8. Convert the string "apple,banana,mango" into an array using split() */
let fruitNames = 'apple,banana,mango';
let newFruitNames = fruitNames.split(',');
console.log(newFruitNames);
/* 9. Join an array of characters ['J','S'] into a single string using join() */
let characters = ['J', 'S'];
let joinCharacters = characters.join();
console.log(joinCharacters);
/* 10. Combine two arrays ['pen','pencil'] and ['eraser','sharpener'] using concat() */
let writers = ['pen', 'pencil'];
let removers = ['eraser', 'sharpener'];
let writersPlusRemovers = writers.concat(removers);
console.log(writersPlusRemovers);
/* 11. Sort an array of numbers [10, 5, 2, 8] using sort() (as strings) */
let numbers = [10, 5, 2, 8];
let sortedAndString = numbers.sort((a, b) => a - b).toString();
console.log(sortedAndString);
/* 12. Sort an array of names alphabetically using sort() */
let alphabets = ['a', 'j', 'k', 'l', 'o', 'z', 'b', 'd', 'u'];
alphabets.sort();
console.log(alphabets);
/* 13. Reverse the order of an array of numbers using reverse() */
let num = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
num.sort((a, b) => b - a);
console.log(num);

/* 14. Use indexOf() to find the index of "Blue" in a colors array */
let colors = ['red', 'gray', 'blue', 'yellow', 'pink', 'orange', 'tomato'];
console.log(colors.indexOf('blue'));
/* 15. Add three new items to an empty array using push() */
let empty = [];
empty.push('html', 'css', 'js');
console.log(empty);
/* 16. Remove the middle item from an array of 5 numbers using splice() */
let randomNumbers = [3, 5, 8, 7, 9];
randomNumbers.splice(2, 1);
console.log(randomNumbers);
/* 17. Create a string "HTML CSS JavaScript" and convert it to an array using split() */
let languages = 'HTML CSS JavaScript';
let languageArray = languages.split(' ');
console.log(languageArray);
/* 18. Create an array ['a', 'b', 'c'], reverse it, then join it with - in between */
let abc = ['a', 'b', 'c'];
abc.reverse();
let joinedString = abc.join('-');
console.log(joinedString);
/* 19. Check if "Karachi" exists in an array using indexOf() and show its index */
let checkKarachi = [
  'karachi',
  'quetta',
  'islamabad',
  'faisalabad',
  'lahore',
  'sialkot',
  'hyderabad',
];
console.log(checkKarachi.indexOf("karachi"))
/* 20. Concatenate two arrays of even and odd numbers using concat() and then reverse them */

let even = [1,3,5,7,9];
let odd = [2,4,6,8,]
let concatEvenOdd = even.concat(odd).reverse();
console.log(concatEvenOdd)
