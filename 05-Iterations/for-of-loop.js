// for...of

// ["", "", ""]
// [{}, {}, {}]

const arr = [1, 2, 4, 5, 3];

// Syntax:
// for (const element of iterable) {
//   // code
// }

for (const num of arr) {
  console.log(num);
}

// Output:
// 1
// 2
// 4
// 5
// 3


const greetings = "Hello World!";

for (const greet of greetings) {
  console.log(`Each char is ${greet}`);
}

// Output:
// Each char is H
// Each char is e
// Each char is l
// ...


// Maps:

const map = new Map();

map.set("IN", "India");
map.set("USA", "United States Of America");
map.set("ENG", "England");

console.log(map);

// Output:
// Map(3) {
//   'IN' => 'India',
//   'USA' => 'United States Of America',
//   'ENG' => 'England'
// }


for (const key of map) {
  console.log(key);
}

// Output:
// ['IN', 'India']
// ['USA', 'United States Of America']
// ['ENG', 'England']


for (const [key, value] of map) {
  console.log(key, ":-", value);
}

// Output:
// IN :- India
// USA :- United States Of America
// ENG :- England


// Objects:

const myObject = {
  IN: "India",
  USA: "United States Of America",
  ENG: "England"
};

for (const [key, value] of myObject) {
  console.log(key, ":-", value);
}

// Output:
// TypeError: myObject is not iterable


/*
Notes:

1. The for...of loop is used to iterate over iterable objects.

2. Arrays, Strings, Maps, and Sets are iterable.

3. When iterating over a Map:
   - Each item is returned as [key, value].
   - We can use destructuring:
       for (const [key, value] of map)

4. Normal JavaScript objects are NOT directly iterable,
   so for...of cannot be used directly on them.

5. To iterate over an object, we can use:
   - Object.keys()
   - Object.values()
   - Object.entries()
*/