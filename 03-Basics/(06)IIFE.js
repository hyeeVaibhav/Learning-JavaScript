// ==========================================================
// Immediately Invoked Function Expression (IIFE)
// ==========================================================

// Normal Function

// function hello() {
//   console.log("DB Connected");
// }

// hello();


// ==========================================================
// IIFE Syntax
// ==========================================================

// Syntax:
// (function () {
//   // code
// })();


// Named IIFE
(function hello() {
  console.log("DB Connected");
})();


// Another Named IIFE
(function disconnectDB() {
  console.log("DB Disconnected");
})();


// ==========================================================
// Why Semicolon (;) is Important
// ==========================================================

// Every IIFE should end with a semicolon.
//
// Without it, if another IIFE starts immediately after,
// JavaScript may treat both as one expression and throw an error.

(function first() {
  console.log("First IIFE");
})();

(function second() {
  console.log("Second IIFE");
})();


// ==========================================================
// Parameterized IIFE
// ==========================================================

((name) => {
  console.log(`Welcome ${name}`);
})("Vaibhav");


// ==========================================================
// Interview Question
// ==========================================================

/*
Q. Why do we use an IIFE?

Answer:

1. Executes immediately after being defined.

2. Creates its own private scope.

3. Prevents variables/functions from polluting
   the global scope (Global Scope Pollution).

4. Commonly used in older JavaScript to achieve
   encapsulation before ES6 modules existed.
*/


// ==========================================================
// Cheat Sheet
// ==========================================================

/*
Normal Function
---------------
function one() {}
one();

IIFE
----
(function one() {})();

Arrow IIFE
----------
(() => {})();

Parameterized IIFE
------------------
((name) => {
  console.log(name);
})("Vaibhav");
*/