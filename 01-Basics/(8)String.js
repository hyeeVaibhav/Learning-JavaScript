const name = "vaibhav";
const repoCount = 9

// console.log (name + repoCount + " repositories"); // vaibhav9 repositories

// this way of concatenating is not recommended because it can lead to unexpected results when dealing with different data types. Instead, we can use template literals to concatenate strings and variables in a more readable and maintainable way.

//backticks `` are used to create template literals, and we can use ${} to insert variables or expressions into the string.
console.log (`Hello my name is ${name} and my repo count is ${repoCount}`); // Hello my name is vaibhav and my repo count is 9

//declaring string using new String() constructor function:-
const myName = new String("vaibhav-kr");
console.log (myName);

// string is object in JS and it is a non-primitive data type. 
// It is a collection of characters enclosed in single quotes '', double quotes "", or backticks ``. 
// Strings are immutable, which means that once a string is created, it cannot be changed. 
// However, we can create a new string by concatenating or manipulating existing strings.

// we can access the characters of a string using bracket notation and the index of the character we want to access. 
// The index starts at 0 for the first character, 1 for the second character, and so on. 
// We can also use the charAt() method to access a character at a specific index.

console.log(myName[0]); // v
console.log(myName.charAt(0)); // v

console.log(myName._proto_); // String {"", constructor: ƒ, anchor: ƒ, big: ƒ, blink: ƒ, …}

console.log(myName.length); // 7


console.log(myName.toUpperCase()); // VAIBHAV
//this doesnt mean that original string is changed, it will return a new string with all characters in uppercase. Strings are immutable in JS.

console.log (myName.indexOf("a")); // 1

//Slicing a string:- (substring and slice keyword is used to slice a string)
const newString = myName.substring(0, 5); // it will return a new string from index 0 to index 5 (not including index 5)

console.log(newString); // vaibh

const anotherString = myName.slice(-8, 4); // it will return a new string from index 5 to the end of the string
console.log(anotherString);

// Trim and replace methods:-
const newString2 = "   vaibhav-kr   ";
console.log(newString2)
console.log(newString2.trim()); // vaibhav-kr

const url = "https://www.vaibhav-kr.com";

url.replace("https://", ""); // it will return a new string with "https://" replaced with an empty string
console.log(url.replace("https://", "")); // www.vaibhav-kr.com

//includes method:- it is used to check if a string contains a specific substring or not. It returns true if the substring is found, otherwise it returns false.
console.log(url.includes("vaibhav")); // true

// split method:- it is used to split a string into an array of substrings based on a specified separator. It returns an array of substrings.
const newString3 = "vaibhav-kr";
console.log(newString3.split("-")); // ["vaibhav", "kr"]