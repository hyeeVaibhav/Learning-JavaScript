const myObject = {
  js: "javascript",
  py: "python",
  rb: "ruby"
};

// for...in loop with object

for (const key in myObject) {
  console.log(myObject[key]);
}

// Output:
// javascript
// python
// ruby


// Or

for (const key in myObject) {
  console.log(`${key} shortcut is for ${myObject[key]}`);
}

// Output:
// js shortcut is for javascript
// py shortcut is for python
// rb shortcut is for ruby


// for...in loop with array

const programming = ["js", "js", "rb"];

for (const key in programming) {
  console.log(programming[key]);
}

// Output:
// js
// js
// rb


// `key` contains the indexes of the array

for (const key in programming) {
  console.log(key);
}

// Output:
// 0
// 1
// 2


// Let's try for...in loop on Map

const map = new Map();

map.set("IN", "India");
map.set("USA", "United States Of America");
map.set("ENG", "England");

for (const key in map) {
  console.log(key);
}

// Output:
// No output


/*
Notes:

1. The for...in loop iterates over enumerable keys/properties.

2. It works well with objects.

3. When used with an array, for...in gives the indexes:
   0, 1, 2, ...

4. Map properties are not enumerable in the same way as normal
   object properties, so for...in does not iterate over Map entries.


==============================
for...of vs for...in
==============================

for...of:
- Iterates over VALUES of an iterable.
- Works with Arrays, Strings, Maps, and Sets.
- Does NOT directly work with normal objects.

Example:
for (const value of array) {
  console.log(value);
}


for...in:
- Iterates over KEYS or PROPERTY NAMES.
- Mainly used with objects.
- When used with arrays, it gives the indexes.
- Does not iterate over Map entries.

Example:
for (const key in object) {
  console.log(key);
}


Quick Comparison:

Array:
for...of  -> values
for...in  -> indexes

Object:
for...of  -> not directly iterable
for...in  -> keys

Map:
for...of  -> entries / values can be accessed
for...in  -> no Map entries

String:
for...of  -> characters
for...in  -> indexes
*/