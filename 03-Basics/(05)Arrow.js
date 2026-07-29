// =======================
// this Keyword in JavaScript
// =======================

const user = {
  username: "Vaibhav",
  price: "999",

  WelcomeMessage: function () {
    console.log(`${this.username}, welcome to website`);

    // 'this' refers to the current object that called the method.
    console.log(this);
  },
};

// user.WelcomeMessage(); // Vaibhav

// Changing the object's property changes the current context.
user.username = "Sam";
// user.WelcomeMessage(); // Sam

// In Node.js, the top-level 'this' is an empty object {}.
// In browsers, the global object is 'window'.
console.log(this);

// ==========================================================
// 'this' inside a Normal Function
// ==========================================================

function normalFunction() {
  let username = "Vaibhav";

  // 'this' does NOT refer to local variables.
  // In Node.js -> global object (or module context).
  // In browsers (non-strict mode) -> window object.
  console.log(this.username); // undefined
}

// normalFunction();


// ==========================================================
// 'this' inside an Arrow Function
// ==========================================================

const arrowFunction = () => {
  let username = "Vaibhav";

  // Arrow functions DO NOT create their own 'this'.
  // They inherit 'this' from the surrounding (lexical) scope.
  console.log(this.username); // undefined
};

arrowFunction();

/*
Interview Point:
---------------
It is NOT true that 'this' cannot be used inside an arrow function.

✔ You CAN use 'this' inside an arrow function.

❌ Arrow functions simply DON'T have their own 'this'.

Instead, they inherit 'this' from their enclosing scope.
*/


// ==========================================================
// Arrow Function Syntax
// ==========================================================

// Explicit Return
const addTwo1 = (num1, num2) => {
  return num1 + num2;
};

console.log(addTwo1(3, 4));

// Implicit Return
const addTwo2 = (num1, num2) => num1 + num2;

console.log(addTwo2(3, 4));

// Parentheses can also be used for implicit return.
const addTwo3 = (num1, num2) => (num1 + num2);

console.log(addTwo3(3, 4));

/*
Rule to Remember
----------------
{}  -> return keyword required.

() or no braces -> expression is returned automatically.
*/

// Returning an object from an arrow function.
const createUser = () => ({ username: "Vaibhav" });

console.log(createUser());