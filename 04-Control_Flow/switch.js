// ============================================================
// JAVASCRIPT - SWITCH STATEMENT
// ============================================================


// ------------------------------------------------------------
// 1. BASIC SWITCH STATEMENT
// ------------------------------------------------------------

const month = 3;

// `switch` is used when we want to compare one value
// against multiple possible cases.
//
// switch(expression) checks the expression against each case.
//
// Syntax:
//
// switch(value) {
//   case value1:
//     // code
//     break;
//
//   case value2:
//     // code
//     break;
//
//   default:
//     // code
// }


// ------------------------------------------------------------
// 2. CASE 1
// ------------------------------------------------------------

switch (month) {

  case 1:
    console.log("January");
    break;

  case 2:
    console.log("February");
    break;

  case 3:
    console.log("March");
    break;

  default:
    console.log("Invalid month");
}


// ------------------------------------------------------------
// 3. HOW SWITCH WORKS
// ------------------------------------------------------------

// month = 3
//
// JavaScript checks the cases one by one:
//
// case 1 → 3 === 1 → false
// case 2 → 3 === 2 → false
// case 3 → 3 === 3 → true
//
// Therefore:
//
// "March" is printed.
//
// Once `break` is encountered, JavaScript exits
// the switch statement.
//
// So case 4 / default will NOT be executed.


// ------------------------------------------------------------
// 4. IMPORTANT: WHAT HAPPENS WITHOUT BREAK?
// ------------------------------------------------------------

// `break` is very important in a switch statement.
//
// If we don't use `break`, JavaScript will continue
// executing the statements in the following cases.
//
// This behavior is called "fall-through".

const day = 2;

switch (day) {

  case 1:
    console.log("Monday");

  case 2:
    console.log("Tuesday");

  case 3:
    console.log("Wednesday");

  default:
    console.log("Invalid day");
}

// Output:
//
// Tuesday
// Wednesday
// Invalid day
//
// Why?
//
// case 2 matched.
// But there was NO `break` after case 2.
//
// Therefore, JavaScript continued executing
// all the following cases until the switch ended.
//
// This is called FALL-THROUGH.


// ------------------------------------------------------------
// 5. SWITCH WITH BREAK
// ------------------------------------------------------------

const dayNumber = 2;

switch (dayNumber) {

  case 1:
    console.log("Monday");
    break;

  case 2:
    console.log("Tuesday");
    break;

  case 3:
    console.log("Wednesday");
    break;

  default:
    console.log("Invalid day");
}

// Output:
//
// Tuesday
//
// case 2 matched.
// `break` stopped the execution of the switch statement.
//
// The remaining cases and default are NOT executed.


// ------------------------------------------------------------
// 6. DEFAULT CASE
// ------------------------------------------------------------

// `default` is similar to the `else` part of an if-else.
//
// It executes when none of the cases match.

const number = 10;

switch (number) {

  case 1:
    console.log("One");
    break;

  case 2:
    console.log("Two");
    break;

  case 3:
    console.log("Three");
    break;

  default:
    console.log("Number does not match any case");
}

// Output:
//
// Number does not match any case
//
// Because 10 does not match case 1, 2, or 3.


// ------------------------------------------------------------
// 7. SWITCH USES STRICT COMPARISON
// ------------------------------------------------------------

// Switch cases are compared using strict equality (===).

const value = "3";

switch (value) {

  case 3:
    console.log("Number 3");
    break;

  case "3":
    console.log("String 3");
    break;

  default:
    console.log("No match");
}

// Output:
//
// String 3
//
// "3" !== 3
//
// The data type also matters.


// ============================================================
// END NOTE / QUICK REVISION
// ============================================================

// 1. switch
//    → Used when comparing one value against multiple cases.
//
// 2. case
//    → Represents a possible matching value.
//
// 3. break
//    → Stops the switch after a matching case.
//
// 4. default
//    → Executes when no case matches.
//
// 5. Fall-through
//    → If `break` is missing, JavaScript continues executing
//      the following cases.
//
// 6. switch uses strict comparison
//    → Cases are matched using ===
//
//    Example:
//    3   !== "3"
//    "3" !== 3
//
// 7. Normal flow:
//
//    switch(value)
//         ↓
//    Check cases
//         ↓
//    Case matches?
//      ↙     ↘
//    YES      NO
//     ↓        ↓
//   Execute   Check next case
//     ↓
//   break?
//     ↓
//    YES → Exit switch
//
// 8. IMPORTANT:
//    `break` does NOT mean "stop checking cases before finding
//    a match." JavaScript first finds the matching case.
//    After executing that case, `break` prevents execution
//    from falling through into the remaining cases.
//
// ============================================================
// MAIN THING TO REMEMBER:
//
// switch → multiple possible values
// case   → individual condition/value
// break  → exit switch
// default → no case matched
// no break → FALL-THROUGH
//
// ============================================================
