console.log(2>1);
console.log(2>=1);

//what if we compare different dataypes
//JavaScript allows comparison between different datatypes, but it will convert the values to numbers in order to compare them.

console.log("2" > 1); // true, string is converted to number
console.log("2" >= 1); // true, string is converted to number

console.log(null > 0); // false, null is converted to 0
console.log(null >= 0); // true, null is converted to 0
console.log(null == 0); // false, null is only equal to undefined

console.log(undefined == 0); // false, undefined is converted to NaN
console.log(undefined > 0); // false, undefined is converted to NaN
console.log(undefined >= 0); // false, undefined is converted to NaN

// === strict equality operator, no type conversion

console.log(2 === 1); // false
console.log("2" === 1); // false