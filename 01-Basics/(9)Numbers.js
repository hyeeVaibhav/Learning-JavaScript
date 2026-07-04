// Primitive number (JavaScript automatically infers the datatype)
const score = 400;
console.log(score);

// Creating a Number object explicitly using the Number constructor.
// Note: In real-world JavaScript, using primitive numbers is preferred.
const balance = new Number(100);
console.log(balance);

// toString()
// Converts the number into a string.
// Since it returns a string, we can use string properties/methods like .length.
// It DOES NOT modify the original variable.
console.log(balance.toString().length);

// typeof returns "object" because balance was created using 'new Number()',
// which creates a Number object instead of a primitive number.
console.log(typeof balance); // object

// toFixed(n)
// Formats the number with exactly 'n' digits after the decimal point.
// Commonly used for displaying prices, currency, and percentages.
// Returns a string.
console.log(balance.toFixed(2)); // "100.00"

// toPrecision(n)
// Formats a number to the specified number of significant digits.
// Useful when you want to control the overall precision of a number.
const otherNumber = 23.747;
console.log(otherNumber.toPrecision(3)); // "23.7"

// toLocaleString()
// Converts the number into a locale-specific formatted string.
// Useful for displaying large numbers with commas according to a country's format.
const hundreds = 1000000;

// Indian number format (10,00,000)
console.log(hundreds.toLocaleString('en-IN'));

// US number format (1,000,000)
// console.log(hundreds.toLocaleString('en-US'));