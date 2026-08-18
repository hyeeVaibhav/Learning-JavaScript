// ============================================================
// JAVASCRIPT - CONDITIONAL STATEMENTS & CONTROL FLOW
// ============================================================


// ------------------------------------------------------------
// 1. BASIC IF STATEMENT
// ------------------------------------------------------------

const isUserLoggedIn = true;
const temperature = 41;

// if statement executes only when the condition is true.

// == checks only the value, not the data type.
// 2 == "2" → true because JavaScript performs type conversion.
if (2 == "2") {
  console.log("executed");
}


// ------------------------------------------------------------
// 2. COMPARISON OPERATORS
// ------------------------------------------------------------

// <   → less than
// >   → greater than
// <=  → less than or equal to
// >=  → greater than or equal to
// !=  → not equal (after type conversion)
// !== → strictly not equal
// ==  → equal (after type conversion)
// === → strictly equal (value AND data type)


// ------------------------------------------------------------
// 3. STRICT EQUALITY (===)
// ------------------------------------------------------------

// 2 is a number
// "2" is a string
// === checks both value AND data type.
// Therefore, 2 === "2" → false.

if (2 === "2") {
  console.log("executed");
}


// ------------------------------------------------------------
// 4. NOT EQUAL (!=)
// ------------------------------------------------------------

// 2 != 3 → true
// Therefore, the block will execute.

if (2 != 3) {
  console.log("executed");
}


// ------------------------------------------------------------
// 5. IF STATEMENT WITH A VARIABLE
// ------------------------------------------------------------

if (temperature < 50) {
  console.log("temperature is less than 50");
}


// ------------------------------------------------------------
// 6. IF...ELSE STATEMENT
// ------------------------------------------------------------

if (temperature === 40) {
  console.log("temperature is 40");
} else {
  // temperature is 41, so the condition is false
  // and the else block executes.
  console.log("temperature is not 40");
}

console.log("Execute");


// ------------------------------------------------------------
// 7. CONTROL FLOW WITH SCOPE
// ------------------------------------------------------------

// `let` and `const` are block-scoped.

// const score = 200;

// if (score > 100) {
//   let power = "fly";

//   console.log(`user power: ${power}`);
// }

// `power` exists only inside the if block.
// Trying to access it outside the block will cause an error.

// console.log(`user score: ${power}`);
// ❌ ReferenceError: power is not defined


// ------------------------------------------------------------
// 8. IMPLICIT SCOPE
// ------------------------------------------------------------

const balance = 1000;

// If there is only one statement after the if,
// curly braces {} can be omitted.

// This is called implicit scope.

if (balance > 500)
  console.log("user can buy the product");


// ------------------------------------------------------------
// 9. IF...ELSE IF...ELSE
// ------------------------------------------------------------

// Multiple conditions can be checked using else if.

// JavaScript checks the conditions from top to bottom.
// As soon as one condition becomes true, its block executes
// and the remaining conditions are skipped.

if (balance < 500) {

  console.log("less than 500");

} else if (balance < 750) {

  console.log("less than 750");

} else if (balance < 900) {

  console.log("less than 900");

} else {

  console.log("less than 1200");

}

// balance = 1000
// First three conditions are false.
// Therefore, the else block executes.


// ------------------------------------------------------------
// 10. LOGICAL AND OPERATOR (&&)
// ------------------------------------------------------------

const userLoggedIn = true;
const debitCard = true;

// && means AND.
//
// Both conditions must be true
// for the entire condition to be true.

if (userLoggedIn && debitCard) {
  console.log("user can buy the product");
}

// true && true → true
// Therefore, the message is printed.


// You can also combine multiple conditions:

// if (userLoggedIn && debitCard && 2 == 3) {
//   console.log("user can buy the product");
// }

// Here:
// true && true && false → false
//
// Therefore, the block will NOT execute.


// ------------------------------------------------------------
// 11. LOGICAL OR OPERATOR (||)
// ------------------------------------------------------------

const userLoggedInFromGoogle = false;
const userLoggedInFromEmail = true;

// || means OR.
//
// Only ONE condition needs to be true
// for the entire condition to be true.

if (userLoggedInFromGoogle || userLoggedInFromEmail) {
  console.log("user logged in");
}

// false || true → true
// Therefore, the message is printed.


// ============================================================
// END NOTE / QUICK REVISION
// ============================================================

// 1. if
//    → Executes code when a condition is true.
//
// 2. else
//    → Executes when the if condition is false.
//
// 3. else if
//    → Used to check multiple conditions.
//
// 4. ==
//    → Checks value after type conversion.
//
// 5. ===
//    → Checks value AND data type.
//    → Prefer === in most situations.
//
// 6. !=
//    → Not equal after type conversion.
//
// 7. !==
//    → Strictly not equal (value OR data type differs).
//
// 8. && (AND)
//    → ALL conditions must be true.
//
// 9. || (OR)
//    → AT LEAST ONE condition must be true.
//
// 10. Scope
//     → Variables declared with let/const inside {}
//       are generally accessible only inside that block.
//
// 11. Implicit scope
//     → {} can be omitted when an if/else contains
//       only one statement.
//
// 12. Ternary operator
//     → Short form of simple if...else.
//
//     condition ? valueIfTrue : valueIfFalse;
//
//     Example:
//     balance > 500
//       ? console.log("Can buy")
//       : console.log("Cannot buy");
//
// ============================================================
// IMPORTANT:
// Use === instead of == when you want predictable
// comparisons because === does NOT perform type conversion.
// ============================================================