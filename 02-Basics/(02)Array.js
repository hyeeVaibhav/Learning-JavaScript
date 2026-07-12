const marvel_heros = ["thor", "spiderman", "ironman"];
const dc_heros = ["superman", "flash", "batman"];

// ---------------------- push() ----------------------
// Adds the entire array as a single element to the existing array.
// Modifies the original array.

// marvel_heros.push(dc_heros);
// console.log(marvel_heros);
// Output:
// [
//   "thor",
//   "spiderman",
//   "ironman",
//   ["superman", "flash", "batman"]
// ]

// ---------------------- concat() ----------------------
// Merges two arrays and returns a NEW array.
// Does NOT modify the original arrays.

const all_heros = marvel_heros.concat(dc_heros);
console.log(all_heros);
// Output:
// ["thor", "spiderman", "ironman", "superman", "flash", "batman"]


// ---------------------- Spread Operator (...) ----------------------
// Modern and preferred way to merge arrays.
// Can also be used to add extra elements while merging.

const all_new_heros = [...marvel_heros, ...dc_heros];
console.log(all_new_heros);
// Output:
// ["thor", "spiderman", "ironman", "superman", "flash", "batman"]


// ---------------------- flat() ----------------------
// Flattens nested arrays into a single array.
// Infinity means flatten all nested levels.

const new_arr = [1, 2, 3, 4, [5, 3], 8, [9, 2, 5], 4, 1];

const usable_new_arr = new_arr.flat(Infinity);
console.log(usable_new_arr);
// Output:
// [1, 2, 3, 4, 5, 3, 8, 9, 2, 5, 4, 1]


// ---------------------- Array.isArray() ----------------------
// Checks whether a value is an array.
// Returns true or false.

console.log(Array.isArray("vaibhav"));
// false


// ---------------------- Array.from() ----------------------
// Creates a new array from an iterable or array-like object.

console.log(Array.from("vaibhav"));
// ['v', 'a', 'i', 'b', 'h', 'a', 'v']


// ---------------------- Interview Question ----------------------
// Objects are NOT iterable.
// Since { name: "vaibhav" } is neither iterable nor array-like,
// Array.from() returns an empty array.

console.log(Array.from({ name: "vaibhav" }));
// []


// ---------------------- Array.of() ----------------------
// Creates a new array from the given values.
// Useful when you want an array from individual variables.

let score1 = 100;
let score2 = 200;
let score3 = 300;

console.log(Array.of(score1, score2, score3));
// [100, 200, 300]


/*
======================== Quick Revision ========================

push()         -> Adds an array as ONE element (modifies original array).

concat()       -> Merges arrays and returns a NEW array.

spread (...)   -> Modern way to merge or copy arrays.

flat(depth)    -> Flattens nested arrays.

Array.isArray() -> Checks whether a value is an array.

Array.from()   -> Converts iterable/array-like objects into an array.

Array.of()     -> Creates an array from individual values.

===============================================================
*/