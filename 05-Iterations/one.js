// ==================== FOR LOOP ====================

// General Syntax:
// for (initialization; condition; increment/decrement) {
//     // code to be executed
// }


// ==================== BASIC FOR LOOP ====================

for (let i = 0; i < 10; i++) {
    const element = i;

    // Check if the number is even
    if (element % 2 == 0) {
        console.log("Even Number: " + element);
    }

    console.log(element);
}

// Output:
// Even Number: 0
// 0
// 1
// Even Number: 2
// 2
// 3
// Even Number: 4
// 4
// 5
// Even Number: 6
// 6
// 7
// Even Number: 8
// 8
// 9


// ==================== NESTED FOR LOOP ====================

// A loop inside another loop is called a nested loop.

for (let i = 0; i < 3; i++) {
    console.log(`Outer loop value: ${i}`);

    for (let j = 0; j < 3; j++) {
        console.log(`Inner loop value: ${j} and outer loop: ${i}`);
    }
}

// Output:
// Outer loop value: 0
// Inner loop value: 0 and outer loop: 0
// Inner loop value: 1 and outer loop: 0
// Inner loop value: 2 and outer loop: 0
// Outer loop value: 1
// Inner loop value: 0 and outer loop: 1
// Inner loop value: 1 and outer loop: 1
// Inner loop value: 2 and outer loop: 1
// Outer loop value: 2
// Inner loop value: 0 and outer loop: 2
// Inner loop value: 1 and outer loop: 2
// Inner loop value: 2 and outer loop: 2


// ==================== MULTIPLICATION USING NESTED LOOP ====================

for (let i = 0; i < 3; i++) {
    console.log(`Outer loop value: ${i}`);

    for (let j = 0; j < 3; j++) {
        console.log(`${i} * ${j} = ${i * j}`);
    }
}

// Output:
// Outer loop value: 0
// 0 * 0 = 0
// 0 * 1 = 0
// 0 * 2 = 0
// Outer loop value: 1
// 1 * 0 = 0
// 1 * 1 = 1
// 1 * 2 = 2
// Outer loop value: 2
// 2 * 0 = 0
// 2 * 1 = 2
// 2 * 2 = 4


// ==================== LOOP THROUGH ARRAY ====================

let myArray = ["Flash", "Batman", "Superman"];

console.log(myArray.length);

for (let i = 0; i < myArray.length; i++) {
    const element = myArray[i];
    console.log(element);
}

// Output:
// 3
// Flash
// Batman
// Superman

// Important:
// Array indexing starts from 0.

// myArray[0] → Flash
// myArray[1] → Batman
// myArray[2] → Superman

// myArray.length → returns the number of elements in the array


// ==================== BREAK ====================

// break is used to completely stop/terminate the loop.

for (let i = 0; i <= 20; i++) {

    if (i == 5) {
        console.log(`Detected: ${i}`);
        break;
    }

    console.log(`Value of i is: ${i}`);
}

// Output:
// Value of i is: 0
// Value of i is: 1
// Value of i is: 2
// Value of i is: 3
// Value of i is: 4
// Detected: 5

// When i becomes 5, break terminates the loop.
// Values from 6 to 20 are not executed.


// ==================== CONTINUE ====================

// continue skips the current iteration
// and moves to the next iteration.

for (let i = 0; i <= 20; i++) {

    if (i == 5) {
        console.log(`Detected: ${i}`);
        continue;
    }

    console.log(`Value of i is: ${i}`);
}

// Output:
// Value of i is: 0
// Value of i is: 1
// Value of i is: 2
// Value of i is: 3
// Value of i is: 4
// Detected: 5
// Value of i is: 6
// Value of i is: 7
// Value of i is: 8
// Value of i is: 9
// Value of i is: 10
// Value of i is: 11
// Value of i is: 12
// Value of i is: 13
// Value of i is: 14
// Value of i is: 15
// Value of i is: 16
// Value of i is: 17
// Value of i is: 18
// Value of i is: 19
// Value of i is: 20

// When i becomes 5, continue skips the console.log()
// for that iteration and moves to i = 6.

// Remember:
// break    → completely stops the loop
// continue → skips the current iteration