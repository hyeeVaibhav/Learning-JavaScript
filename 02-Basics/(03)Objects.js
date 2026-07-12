// ====================== Objects in JavaScript ======================

// Singleton Objects
// -> Created using constructors (e.g., Object.create())
// -> Object literals do NOT create singleton objects.

// ==================================================================
// Object Literal

const mySym = Symbol("key1");

const JsUser = {
  name: "Vaibhav",
  "full name": "Vaibhav Kr Singh",

  // ❌ Wrong way (creates a normal string key)
  // mySym: "mykey1",

  // ✅ Correct way to use a Symbol as an object key
  [mySym]: "mykey1",

  age: 19,
  location: "Bihar",
  isLoggedIn: false,
  lastLoginDays: ["Monday", "Tuesday"]
};

// ==================================================================
// Accessing Object Properties

// 1. Dot Notation (Most commonly used)
console.log(JsUser.location);

// 2. Bracket Notation
console.log(JsUser["location"]);

// Bracket notation is required when:
// ✔ Property name contains spaces
// ✔ Property name is stored in a variable
// ✔ Accessing Symbol keys

console.log(JsUser["full name"]);

// ❌ Invalid Syntax
// console.log(JsUser."full name");

// ==================================================================
// Accessing Symbol Properties

// ❌ Looks for a property literally named "mySym"
console.log(JsUser.mySym);           // undefined
console.log(typeof JsUser.mySym);    // "undefined"

// ✅ Correct way to access Symbol property
console.log(JsUser[mySym]);          // "mykey1"
console.log(typeof mySym);           // "symbol"

// ==================================================================
// Object.freeze()

// Updating before freezing
JsUser.location = "Delhi";

// Prevents any further changes to the object
// Object.freeze(JsUser);

// This change will work only if Object.freeze() is commented out
JsUser.location = "Noida";

console.log(JsUser);

// ==================================================================
// Adding Methods to an Object

// Method 1
JsUser.greeting = function () {
  console.log("Hello JS User");
};

// Prints the function definition
console.log(JsUser.greeting);

// Executes the function
JsUser.greeting();

// ------------------------------------------------------------------

// Method 2 - Using 'this' keyword
// 'this' refers to the current object.

JsUser.greetingTwo = function () {
  console.log(`Hello JS User, your age is ${this.age}`);
};

// Executes the function
JsUser.greetingTwo();

/*
======================== Quick Revision ========================

Dot Notation:
obj.key

Bracket Notation:
obj["key"]

Use Bracket Notation when:
✔ Property name contains spaces
✔ Property name is stored in a variable
✔ Accessing Symbol keys

Object.freeze(obj)
-> Prevents adding, deleting, or modifying properties.

this
-> Refers to the current object.

===============================================================
*/