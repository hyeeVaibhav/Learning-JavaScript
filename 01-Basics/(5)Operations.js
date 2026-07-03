let value = 3
let negvalue = -value
console.log(negvalue); // -3

console.log(2+2);
console.log(2-2);
console.log(2*2);
console.log(2/2);
console.log(2%2); //modulus operator => gives remainder of the division
console.log(2**2); //exponentiation operator => gives power of the number

let str1 = "hello"
let str2 = "world"
let str3 = str1 + " " + str2
console.log(str3); // "hello world"

console.log(2 + "2"); // "22" => number is converted to string and concatenated
console.log("2" + 2); // "22" => number is converted to string and concatenated
console.log(2 + 2 + "2"); // "42" => first 2+2 is evaluated to 4 and then concatenated with string "2"
console.log("2" + 2 + 2); // "222" => first 2 is concatenated with string "2" and then concatenated with number 2

console.log(+true); // 1 => true is converted to number 1

console.log(+""); // 0 => empty string is converted to number 0

let num1, num2, num3
num1 = num2 = num3 = 2 + 2
console.log(num1, num2, num3); // 4 4 4 => all variables are assigned the value of 2+2 which is 4

let counter = 100;
++counter; // 101 => increment operator => adds 1 to the variable
console.log(counter); // 101

let counter2 = 100;
counter2++; // 100 => increment operator => adds 1 to the variable but returns the value before incrementing
console.log(counter2); // 101

let counter3 = 100;
--counter3; // 99 => decrement operator => subtracts 1 from the variable
console.log(counter3); // 99