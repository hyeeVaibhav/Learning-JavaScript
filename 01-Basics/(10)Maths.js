// Math is a built-in JavaScript object that provides
// mathematical constants and functions.
console.log(Math);

// Math.abs()
// Returns the absolute (positive) value of a number.
console.log(Math.abs(-4)); // 4
console.log(Math.abs(4));  // 4

// Math.round()
// Rounds the number to the nearest integer.
// Decimal >= 0.5 rounds up, otherwise rounds down.
console.log(Math.round(4.6)); // 5

// Math.ceil()
// Always rounds the number UP to the next integer.
console.log(Math.ceil(4.2)); // 5

// Math.floor()
// Always rounds the number DOWN to the previous integer.
console.log(Math.floor(4.6)); // 4

// Math.min()
// Returns the smallest value from the given numbers.
console.log(Math.min(3, 4, 5, 6)); // 3

// Math.max()
// Returns the largest value from the given numbers.
console.log(Math.max(4, 5, 6, 7)); // 7

// ------------------------------------------------------
// Methods used most frequently in real-world development
// ------------------------------------------------------

// Math.random()
// Generates a random decimal number between 0 (inclusive)
// and 1 (exclusive).
console.log(Math.random());

// Multiplying by 10 changes the range to:
// 0 <= value < 10
console.log(Math.random() * 10);

// Adding 1 changes the range to:
// 1 <= value < 11
console.log((Math.random() * 10) + 1);

// Math.floor() removes the decimal part.
// Final range becomes: 1 to 10
console.log(Math.floor(Math.random() * 10) + 1);

// ------------------------------------------------------
// Generating a random number within a specific range
// Formula:
// Math.floor(Math.random() * (max - min + 1)) + min
// ------------------------------------------------------

const min = 10;
const max = 20;

// Generates a random integer between 10 and 20 (inclusive)
console.log(Math.floor(Math.random() * (max - min + 1)) + min);