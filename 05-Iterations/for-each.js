const myObject = {
  js: "javascript",
  py: "python",
  rb: "ruby"
};

for (const key in myObject) {
  console.log(myObject[key]);
}

// Output:
// javascript
// python
// ruby


for (const key in myObject) {
  console.log(`${key} shortcut is for ${myObject[key]}`);
}

// Output:
// js shortcut is for javascript
// py shortcut is for python
// rb shortcut is for ruby


const programming = ["js", "js", "rb"];

for (const key in programming) {
  console.log(programming[key]);
}

// Output:
// js
// js
// rb


for (const key in programming) {
  console.log(key);
}

// Output:
// 0
// 1
// 2


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
Summary:

for...in:
- Mainly used to iterate over object keys.
- With an object, it returns property names (keys).
- With an array, it returns indexes.
- It does not iterate over Map entries.

for...of:
- Used to iterate over values of iterable objects.
- Works with Arrays, Strings, Maps, and Sets.
- Does not directly work with normal objects.

Comparison:

Array:
for...in  -> indexes
for...of  -> values

Object:
for...in  -> keys
for...of  -> not directly iterable

Map:
for...in  -> no output
for...of  -> entries

String:
for...in  -> indexes
for...of  -> characters
*/