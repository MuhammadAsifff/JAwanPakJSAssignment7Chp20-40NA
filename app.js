
// Chapter 21 (Changing Case)

// 1. Type the characters that are missing from this code.
// var allLower = userInput.toLowerCase;
// Note: Correct this statement by yourself.

// var allLower = userInput.toLowerCase();









// 2. Convert the string represented by x to lower-case and assign the
// result to the same variable.

// var x = "His World";
// x = x.toLowerCase();









// 3. Convert the string represented by y to upper-case and assign the
// result to the same variable.

// var y = "His World";
// y = y.toUpperCase();









// 4. Convert the string represented by a variable to lower-case and
// assign the result to a second variable that hasn't been declared
// beforehand.

// var originalString = "His World";
// var lowercaseString = originalString.toLowerCase();









// 5. Convert the string represented by an array element to lower-case
// and assign it to a variable that hasn't been declared beforehand.

// var myArray = ["His", "World"];
// var lowercaseElement = myArray[0].toLowerCase();









// 6. Display in an alert the upper-case version of the string
// represented by a variable.

// var myString = "His World";
// var uppercaseString = myString.toUpperCase();
// alert(uppercaseString);









// 7. var cityName = “kaRacHi”;
// Convert the string represented by a cityName in Capitalisation is
// the writing of a word with its first letter in uppercase and the
// remaining letters in lowercase.

// var cityName = "kaRacHi";
// var capitalizedCityName = cityName.charAt(0).toUpperCase() + cityName.slice(1).toLowerCase();
// console.log(capitalizedCityName);














// Chapter 22 - 25 (Strings)


// 1. "captain" has been assigned to variable “sameWords”. You want
// to slice "ap" out of it.

// let sameWords = "captain";
// let slicedWords = sameWords.slice(1, 3);

// console.log(slicedWords); // result is ap









// 2. The number of characters in the string will be assigned to the
// variable.

// let myString = "Hello, World!";
// let characterCount = myString.length;

// console.log(characterCount); // Result: 13









// 3. The string "elephant" has been assigned to the variable animal.
// Slice the four middle characters out of the string and assign it to
// the variable seg, which hasn't been declared beforehand.

// let animal = "elephant";
// let seg = animal.slice(1, 5);

// console.log(seg); // Result: "leph"









// 4. Find the number of characters in the string represented by a
// variable and assign the number to a second variable.

// let myString = "Hello, World!";
// let characterCount = myString.length;

// console.log(characterCount); // Result: 13









// 5. In a first statement measure how many characters there are in a
// string represented by a variable. In a second statement slice all
// but the first character and last 3 characters of the string and
// assign it to a second variable that hasn't been declared
// beforehand.

// let myString = "Hello, World!"; // Replace with your own string
// let characterCount = myString.length;

// let slicedString = myString.slice(1, -3);

// console.log(characterCount); // Output: 13
// console.log(slicedString); // Output: "ello, Wor"







// 6. var text = "To be or not to be.";
// var indx = text.indexOf("be");
// What is the value of indx?
// Note: Try the above both examples by yourself.

// var text = "To be or not to be.";
// var indx = text.indexOf("be"); // Result 3









// 7. var text = "To be or not to be.";
// var indx = text.lastIndexOf("be");
// What is the value of indx?
// Note: Try the above both examples by yourself.

// var text = "To be or not to be.";
// var indx = text.lastIndexOf("be"); // Result 16









// 8. Find the index of the first character of the last instance of "go" in
// the string represented by the variable text and assign the number
// to the variable indx, which hasn't been declared beforehand.

// let text = "Let it go, let it go! Can't hold it back anymore. Let it go, let it go! Turn away and slam the door.";
// let indx = text.lastIndexOf("go");

// console.log(indx); // Output: 45









// 9. Code the first line of an if statement that tests whether a segment
// with an index represented by indexNum exists in a string.

// let myString = "Hello, World!";
// let indexNum = 7;

// if (myString.charAt(indexNum)) {
//   // Code to be executed if the character at indexNum exists
//   console.log("Segment exists at index " + indexNum);
// } else {
//   // Code to be executed if the character at indexNum does not exist
//   console.log("Segment does not exist at index " + indexNum);
// }









// 10. In this string "abcde", what character is at index 2? (Use
//     charAt)

// let myString = "abcde";
// let characterAtIndex2 = myString.charAt(2);

// console.log(characterAtIndex2); // Output: "c"









// 11. Find the 10th character in the string represented by text and
// assign it to the variable cha, which hasn't been declared
// beforehand.

// let text = "This is a sample text.";
// let cha = text.charAt(9);

// console.log(cha); // Output: "a"









// 12. Find the last character in the string represented by str and
// assign it to x, which hasn't been declared beforehand.

// let str = "Hello, World!";
// let x = str[str.length - 1];

// console.log(x); // Output: "!"









// 13. Find the the 5th character in a string represented by input
// and assign it to cha, which hasn't been declared beforehand.

// let input = "Example";
// let cha = input.charAt(4);

// console.log(cha); // Output: "p"









// 14. Code the first line of an if statement that tests whether the
// 3rd character of a string represented by a variable is a particular
// character.

// let myString = "Hello";
// let desiredChar = "l";

// if (myString.charAt(2) === desiredChar) {
//   // Code to be executed if the 3rd character is the desired character
//   console.log("The 3rd character is " + desiredChar);
// } else {
//   // Code to be executed if the 3rd character is not the desired character
//   console.log("The 3rd character is not " + desiredChar);
// }









// 15. Code a for loop that cycles through all the characters of a
// string represented by a variable and assigns each character to an
// element of an array that has been declared beforehand.
// In the string represented by reply replace the first instance of "no"
// with "yes" and assign the revised string to revisedReply, which hasn't
// been declared beforehand.

// let myString = "Hello, World!";
// let charactersArray = [];

// for (let i = 0; i < myString.length; i++) {
//   charactersArray[i] = myString.charAt(i);
// }

// console.log(charactersArray); // Output: ['H', 'e', 'l', 'l', 'o', ',', ' ', 'W', 'o', 'r', 'l', 'd', '!']

// let reply = "no, it's not the answer";
// let revisedReply = reply.replace("no", "yes");

// console.log(revisedReply); // Output: "yes, it's not the answer"









// 16. In a string represented by str replace the first instance of "1"
// with "one" and assign the revised string to newStr, which hasn't
// been declared beforehand.

// let str = "I have 1 apple and 2 oranges.";
// let newStr = str.replace(/1/, "one");

// console.log(newStr); // Output: "I have one apple and 2 oranges."









// 17. If you want all instances replaced, enter 3 characters that
// need to appear in this statement.
// var y = x.replace("a", "z");

// var x = "banana";
// var y = x.replace(/a/g, "z");

// console.log(y); // Output: "bznznz"














// Chapter 26 (Rounding Numbers)


// 1. Form a statement that rounds a number to the nearest integer.

// let number = 3.7;
// let roundedNumber = Math.round(number);

// console.log(roundedNumber); // Output: 4









// 2. Round up a number represented by origNum and assign it to
// roundNum, which hasn't been declared beforehand.

// let origNum = 3.2;
// let roundNum = Math.ceil(origNum);

// console.log(roundNum); // Output: 4









// 3. Round down a number represented by origNum and assign it to
// roundNum, which hasn't been declared beforehand.

// let origNum = 3.8;
// let roundNum = Math.floor(origNum);

// console.log(roundNum); // Output: 3









// 4. Round a number represented by a variable and assign the result
// to a second variable that hasn't been declared beforehand.

// let origNum = 4.3;
// let roundedNum = Math.round(origNum);

// console.log(roundedNum); // Output: 4









// 5. Round .5 to 0 and assign it to a variable that hasn't been declared
// beforehand.

// let originalNumber = 0.5;
// let roundedNumber = Math.floor(originalNumber);

// console.log(roundedNumber); // Output: 0














// Chapter 27 (Random Numbers)


// 1. Convert a random number generated by JavaScript to a number in
// the range 1 to 50

// Generate a random number between 0 and 1
// var random = Math.random();

// // Convert the random number to a range between 1 and 50
// var numberInRange = Math.floor(random * 50) + 1;

// console.log(numberInRange);









// 2. Generate a random number and assign it to a variable that hasn't
// been declared beforehand.

// Generate a random number
// var randomNumber = Math.random();

// console.log(randomNumber);









// 3. You have to create a dice in JavaScript with the use of pseudo-
// random number.

// Define the array of possible dice values
// var diceValues = [1, 2, 3, 4, 5, 6];

// // Generate a random index within the range of the array length
// var randomIndex = Math.floor(Math.random() * diceValues.length);

// // Retrieve the value from the array using the random index
// var diceRoll = diceValues[randomIndex];

// console.log(diceRoll);









// 4. You have to create a toss (head/tail) in JavaScript with the use of
// pseudo-random number.

// Generate a random number between 0 and 1
// var randomNum = Math.random();

// // Determine the outcome of the toss based on the random number
// var tossResult = randomNum < 0.5 ? 'Head' : 'Tail';

// console.log(tossResult);














// Chapter 28, 29 (Converting Strings)

// 1. How do you convert a string to an integer in JavaScript?

// var stringNumber = "42";
// var integerValue = parseInt(stringNumber, 10);

// console.log(integerValue); // Output: 42


// var stringNumber = "42";
// var integerValue = Number(stringNumber);

// console.log(integerValue); // Output: 42









// 2. Write a JavaScript function to convert the string "123" to an
// integer.

// function stringToInteger(str) {
//     return parseInt(str, 10);
//   }
  
//   var stringNumber = "123";
//   var integerValue = stringToInteger(stringNumber);
  
//   console.log(integerValue); // Output: 123









// 3. How can you convert a string containing a decimal number to a
// floating-point number in JavaScript?

// var stringNumber = "3.14";
// var floatingNumber = parseFloat(stringNumber);

// console.log(floatingNumber); // Output: 3.14


// var stringNumber = "3.14";
// var floatingNumber = Number(stringNumber);

// console.log(floatingNumber); // Output: 3.14









// 4. How can you check if a string can be successfully converted to an
// integer or decimal in JavaScript before performing the
// conversion?

// var stringNumber = "42";

// // Check if the string can be converted to an integer
// var isInteger = !isNaN(parseInt(stringNumber));

// // Check if the string can be converted to a decimal
// var isDecimal = !isNaN(parseFloat(stringNumber));

// console.log(isInteger); // Output: true
// console.log(isDecimal); // Output: true


// var stringNumber = "42";

// // Regular expression to match integers
// var integerRegex = /^-?\d+$/;

// // Regular expression to match decimals
// var decimalRegex = /^-?\d+(\.\d+)?$/;

// // Check if the string matches the integer regular expression
// var isInteger = integerRegex.test(stringNumber);

// // Check if the string matches the decimal regular expression
// var isDecimal = decimalRegex.test(stringNumber);

// console.log(isInteger); // Output: true
// console.log(isDecimal); // Output: true




  




























