// ===================================================
// Nested Scope & Function Hoisting in JavaScript
// ===================================================


// ================================================
// 1. Nested Functions (Lexical Scope)
// ================================================

function one() {

    const username = "Vaibhav";

    function two() {

        const website = "Chrome";

        // Inner function can access variables
        // from its parent function.
        console.log(username);

    }

    // console.log(website);
    // ❌ Error: website is not defined
    // Because 'website' belongs only to function two().

    two();

}

// one();


// Output:
// Vaibhav


/*
Explanation:

one()
│
├── username = "Vaibhav"
│
└── two()
      │
      ├── website = "Chrome"
      └── Can access username because it belongs
          to the outer (parent) scope.

This is called Lexical Scope.
An inner function can access variables
of its parent function,
but the parent cannot access variables
of the child function.
*/


// ================================================
// 2. Nested Block Scope
// ================================================

if (true) {

    const username = "Vaibhav";

    if (username === "Vaibhav") {

        const website = "Chrome";

        console.log(username + " " + website);

    }

    // console.log(website);
    // ❌ Error: website is block scoped.

}

// console.log(username);
// ❌ Error: username is also block scoped.


// Output:
// Vaibhav Chrome


/*
Explanation:

Outer Block
│
├── username
│
└── Inner Block
      │
      ├── website
      └── Can access username

Inner block can access outer variables.

Outer block cannot access inner variables.
*/


// ===================================================
// 3. Function Declaration vs Function Expression
// ===================================================


// ---------- Function Declaration ----------

function addOne(num) {
    return num + 1;
}

console.log(addOne(5));

// Output:
// 6


/*
Function declarations are hoisted completely.

This means JavaScript stores the entire function
before executing the code.

So even this works:

console.log(addOne(5));

function addOne(num){
    return num + 1;
}
*/


// ---------- Function Expression ----------

const addTwo = function(num) {
    return num + 2;
};

console.log(addTwo(5));

// Output:
// 7


/*
Function expressions are NOT fully hoisted.

Only the variable (addTwo) is hoisted,
not the function assigned to it.

So this will throw an error:

console.log(addTwo(5));

const addTwo = function(num){
    return num + 2;
}

Error:
Cannot access 'addTwo' before initialization
*/


// ===================================================
// Key Points (Revision Notes)
// ===================================================

// ✅ Inner functions can access variables
//    of their parent function.

// ✅ Parent functions CANNOT access variables
//    declared inside child functions.

// ✅ This behavior is called Lexical Scope.

// ✅ Nested blocks follow the same rule:
//    Inner block → can access outer variables.
//    Outer block → cannot access inner variables.

// ✅ Function Declaration:
//    - Fully hoisted.
//    - Can be called before its definition.

// ✅ Function Expression:
//    - Stored inside a variable.
//    - Cannot be called before initialization.

// ✅ Remember:
//    Function Declaration  → Hoisted ✅
//    Function Expression   → Not Hoisted ❌

// ✅ Interview Trick:
//    Declaration works before definition.
//    Expression throws:
//    "Cannot access before initialization."