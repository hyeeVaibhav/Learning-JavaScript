const marvel_heros = ["thor", "spiderman", "ironman"];
const dc_heros = ["superman", "flash", "batman"];

// Push: Adds the entire array as a single element.
// marvel_heros.push(dc_heros);
// console.log(marvel_heros);

// Concat: Merges two arrays and returns a new array.
const all_heros = marvel_heros.concat(dc_heros);
console.log(all_heros);
//
// Spread (...): Modern and preferred way to merge arrays.
const all_new_heros = [...marvel_heros, ...dc_heros];
console.log(all_new_heros);

// Flat: Flattens nested arrays into a single array.
const new_arr = [1, 2, 3, 4, [5, 3], 8, [9, 2, 5], 4, 1];

const usable_new_arr = new_arr.flat(Infinity);
console.log(usable_new_arr);

/*
Quick Difference:
push()   -> Adds an array as one element.
concat() -> Merges arrays into a new array.
spread() -> Modern, flexible way to merge arrays.
flat()   -> Removes nested arrays.
*/
