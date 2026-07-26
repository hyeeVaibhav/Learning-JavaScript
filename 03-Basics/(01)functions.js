// ==================== Functions ====================

// Function declaration
function MyName() {
  console.log("Vaibhav");
}

MyName(); // Function call


// ==================== Parameters & Arguments ====================

function add2Numbers(number1, number2) {
  return number1 + number2;
}

console.log(add2Numbers(3, 4));      // 7
console.log(add2Numbers(3, "a"));    // 3a (string concatenation)
console.log(add2Numbers(4, null));   // 4 (null is treated as 0)


// ==================== Return Statement ====================

// 'return' sends a value back and ends the function.
const result = add2Numbers(3, 5);
console.log("Result:", result);


// ==================== Parameter Validation ====================

function loginUserMessage(username) {

  // Checks for undefined, null, "", 0, false, and NaN
  if (!username) {
    console.log("Please enter a username");
    return;
  }

  return `${username} just logged in`;
}

console.log(loginUserMessage("Vaibhav")); // Vaibhav just logged in
console.log(loginUserMessage());          // Please enter a username