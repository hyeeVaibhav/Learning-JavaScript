// ==============================================
// JavaScript Scope (Global Scope & Block Scope)
// ==============================================

// Scope defines where a variable can be accessed.
// A block scope is created using curly braces { }.

// ----------------------------------------------
// 1. Global Scope
// ----------------------------------------------

// Variables declared outside any block or function
// belong to the Global Scope.

// var c = 300;   // Avoid using var (explained below)


// ----------------------------------------------
// 2. Block Scope
// ----------------------------------------------

if (true) {

    let a = 10;
    const b = 20;
    var c = 30;     // Can also be written as: c = 30 (not recommended)

}

// ----------------------------------------------
// Accessing Variables
// ----------------------------------------------

// console.log(a);   // ❌ Error: a is not defined
// console.log(b);   // ❌ Error: b is not defined
// console.log(c);   // ✅ 30

/*
Why does c work?

Because 'var' is NOT block scoped.
It ignores the curly braces and becomes available
outside the block, which can lead to unexpected bugs.

This is one of the main reasons modern JavaScript
prefers 'let' and 'const' over 'var'.
*/


// ==============================================
// Shadowing (Same Variable Name in Different Scope)
// ==============================================

let x = 100;

if (true) {

    let x = 50;      // Different variable (Block Scope)
    const y = 30;

    console.log("Inner value of x:", x);
    // Output:
    // Inner value of x: 50

}

console.log(x);
// Output:
// 100


/*
Explanation:

Global x = 100

Inside the block, another variable named x is created.
This inner x temporarily hides (shadows) the global x.

Outside the block,
the inner x no longer exists,
so the global x (100) is printed.
*/


// ==============================================
// Key Points (Revision Notes)
// ==============================================

// ✅ Scope determines where a variable is accessible.

// ✅ Global Scope:
//    Variable declared outside any block or function.

// ✅ Block Scope:
//    Variable declared inside { } using let or const.

// ✅ let and const are Block Scoped.

// ✅ var is NOT Block Scoped.
//    It is Function Scoped and leaks outside blocks.

// ✅ Avoid using var in modern JavaScript.

// ✅ Variables with the same name can exist in
//    different scopes (called Shadowing).

// ✅ Inner variable does NOT change the outer variable.

// ✅ Prefer:
//    const -> when value shouldn't change.
//    let   -> when value may change.
//    var   -> avoid in modern JavaScript.