// ==================== Rest Operator ====================

// Collects multiple arguments into a single array.

// function calculateCartPrice(...num1) {
//   return num1;
// }

// console.log(calculateCartPrice(200, 400, 600));
// Output: [200, 400, 600]


// Normal parameters + Rest Operator
// val1 = 200
// val2 = 400
// num1 = [500, 2000]

function calculateCartPrice(val1, val2, ...num1) {
  return num1;
}

console.log(calculateCartPrice(200, 400, 500, 2000));


// ==================== Passing Objects to Functions ====================

const user = {
  username: "Vaibhav",
  price: "90 rupees",
};

function handleObject(anyObject) {
  console.log(`Username is ${anyObject.username} and price is ${anyObject.price}`);
}

handleObject(user);

// You can also pass an object directly
handleObject({
  username: "Sam",
  price: 399,
});


// ==================== Passing Arrays to Functions ====================

const newArray = [200, 400, 700];

function returnSecondValue(getArray) {
  return getArray[1];
}

console.log(returnSecondValue(newArray)); // 400

// You can also pass an array directly
console.log(returnSecondValue([10, 20, 30])); // 20