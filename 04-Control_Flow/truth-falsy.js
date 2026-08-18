// ============================================================
// JAVASCRIPT - TRUTHY & FALSY VALUES
// ============================================================

// In JavaScript, every value can be evaluated as either
// TRUTHY or FALSY when used inside a condition.

// ------------------------------------------------------------
// 1. TRUTHY VALUE
// ------------------------------------------------------------

// A non-empty string is a truthy value.

// const userEmail = "vaibhav@gmail.com";

// if (userEmail) {
//   console.log("email is verified");
// } else {
//   console.log("email is not verified");
// }

// Output:
// email is verified
//
// Because "vaibhav@gmail.com" is a truthy value.


// ------------------------------------------------------------
// 2. FALSY VALUE
// ------------------------------------------------------------

// An empty string "" is a falsy value.

// const userEmail = "";

// if (userEmail) {
//   console.log("email is verified");
// } else {
//   console.log("email is not verified");
// }

// Output:
// email is not verified
//
// Because "" is a falsy value.


// ------------------------------------------------------------
// 3. EMPTY ARRAY IS TRUTHY
// ------------------------------------------------------------

// Arrays are objects in JavaScript.
// Even an empty array [] is a truthy value.

// const userEmail = [];

// if (userEmail) {
//   console.log("email is verified");
// } else {
//   console.log("email is not verified");
// }

// Output:
// email is verified
//
// Important:
// [] is TRUTHY, even though it is empty.


// ------------------------------------------------------------
// 4. FALSY VALUES IN JAVASCRIPT
// ------------------------------------------------------------

// The main falsy values are:
//
// false
// 0
// -0
// 0n
// ""
// null
// undefined
// NaN
//
// Note:
// document.all is a special browser-specific falsy value.


// ------------------------------------------------------------
// 5. TRUTHY VALUES
// ------------------------------------------------------------

// Examples of truthy values:
//
// " "       → string containing a space
// "hello"   → non-empty string
// []        → empty array
// {}        → empty object
// true
// 1, 2, 3
// -1, -2
// function() {}


// ------------------------------------------------------------
// 6. CHECKING IF AN ARRAY IS EMPTY
// ------------------------------------------------------------

const userEmail = [];

if (userEmail.length === 0) {
  console.log("array is empty");
}

// Output:
// array is empty
//
// Important:
// userEmail itself → TRUTHY
// userEmail.length → 0 → FALSY
//
// We use .length === 0 to specifically check
// whether the array contains no elements.


// ------------------------------------------------------------
// 7. CHECKING IF AN OBJECT IS EMPTY
// ------------------------------------------------------------

const emptyObject = {};

if (Object.keys(emptyObject).length === 0) {
  console.log("object is empty");
}

// Object.keys(emptyObject)
// → returns an array containing the object's keys.
//
// {} has no keys:
//
// Object.keys({}) → []
// [].length → 0
//
// Therefore, the object is empty.


// ============================================================
// END NOTE / QUICK REVISION
// ============================================================

// TRUTHY:
// → Values that behave like true in a condition.
//
// FALSY:
// → Values that behave like false in a condition.
//
// IMPORTANT:
//
// [] → TRUTHY
// {} → TRUTHY
// " " → TRUTHY
// ""  → FALSY
// 0   → FALSY
// null → FALSY
// undefined → FALSY
// NaN → FALSY
//
// To check an empty array:
// array.length === 0
//
// To check an empty object:
// Object.keys(object).length === 0
//
// ============================================================