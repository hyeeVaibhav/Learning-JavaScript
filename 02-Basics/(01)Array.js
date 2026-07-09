// ===============================
// Arrays in JavaScript
// ===============================

const myArr = [0, 1, 2, 3, 4, 5, "vaibhav"];

// Accessing an element of an array
console.log(myArr[0]); // Output: 0

const superHeros = ["Spiderman", "Batman"];

// ===============================
// Array Methods
// ===============================

// (1) push()
// Adds one or more elements to the END of the array.

myArr.push(6);
myArr.push(7);
console.log(myArr);
// Output: [0, 1, 2, 3, 4, 5, "vaibhav", 6, 7]

// --------------------------------------------------

// (2) pop()
// Removes ONLY the LAST element from the array.
// Any argument passed to pop() is ignored.

myArr.pop(3);     // Removes 7
myArr.pop(100);   // Removes 6
console.log(myArr);
// Output: [0, 1, 2, 3, 4, 5, "vaibhav"]

// --------------------------------------------------

// (3) unshift()
// Adds one or more elements to the BEGINNING of the array.
// Since all existing elements have to shift one position,
// it is slower for very large arrays.

myArr.unshift(9);
console.log(myArr);
// Output: [9, 0, 1, 2, 3, 4, 5, "vaibhav"]

// --------------------------------------------------

// (4) includes()
// Checks whether a value exists in the array.
// Returns true if found, otherwise false.

console.log(myArr.includes(9)); // true
console.log(myArr.includes(100)); // false

// --------------------------------------------------

// (5) indexOf()
// Returns the index of the element if found.
// Returns -1 if the element does not exist.

console.log(myArr.indexOf(3));    // 4
console.log(myArr.indexOf(100));  // -1

// --------------------------------------------------

// (6) join()
// Converts the array into a STRING.
// By default, elements are separated by commas.

const newArr = myArr.join();

console.log(myArr);
// Original array remains unchanged.

console.log(newArr);
// Output: "9,0,1,2,3,4,5,vaibhav"

console.log(typeof newArr);
// Output: string

// ==================================================
// slice() vs splice()
// ==================================================

const arr = [0, 1, 2, 3, 4, 5, "vaibhav"];

console.log("A", arr);

// ------------------------------
// slice(startIndex, endIndex)
// ------------------------------

// Returns a COPY of the selected elements.
// Start index is INCLUDED.
// End index is EXCLUDED.
// Does NOT modify the original array.

const myn1 = arr.slice(1, 3);

console.log(myn1);
// Output: [1, 2]

console.log("B", arr);
// Original array remains unchanged.
// Output: [0, 1, 2, 3, 4, 5, "vaibhav"]

// ------------------------------
// splice(startIndex, deleteCount)
// ------------------------------

// Removes elements from the ORIGINAL array.
// First argument = starting index.
// Second argument = number of elements to remove.
// Returns the removed elements.

const myn2 = arr.splice(1, 3);

console.log(myn2);
// Output: [1, 2, 3]

console.log("C", arr);
// Original array has been modified.
// Output: [0, 4, 5, "vaibhav"]

// ==================================================
// Quick Revision
// ==================================================

/*
push()      -> Adds element(s) at the END.
pop()       -> Removes the LAST element.
unshift()   -> Adds element(s) at the BEGINNING.
shift()     -> Removes the FIRST element.
includes()  -> Returns true/false if value exists.
indexOf()   -> Returns index of value or -1.
join()      -> Converts array to string.
slice()     -> Copies part of an array (does NOT modify original).
splice()    -> Removes/adds elements (MODIFIES original array).
*/