// Primitive Data Types

//7 categories of primitive data types in JavaScript:

// 1. Number
// 2. String 
// 3. Boolean
// 4. Null
// 5. Undefined
// 6. Symbol:- to make unique identifiers for objects
// 7. BigInt


// Is JS is statically typed or dynamically typed language?

// JavaScript is a dynamically typed language, which means that the type of a variable is determined at runtime 
// and can change during the execution of the program. In other words,
// you don't have to specify the data type of a variable when you declare it, 
// and you can assign different types of values to the same variable throughout the program.
// This flexibility allows for more dynamic and flexible programming, but it can also lead to unexpected behavior if not used carefully.

//for example:-

const count = 100;
// here we didnt defined the data type of count variable but JS will automatically assign the data type of count variable as number because we assigned a number value to it.

const name = "vaibhav";
const isStudent = true;
const state = null;

let userEmail;

const id = Symbol('123');
console.log(typeof id); // symbol

const anotherId = Symbol('123');
console.log(id === anotherId); // false => because symbol is unique and immutable data type so even if we create two symbols with same value they will be different symbols

const bigIntValue = 1234567890123456789012345678901234567890n; // n at the end of the number indicates that it is a BigInt
console.log(typeof bigIntValue); // bigint


// Non Primitive Data Types or Reference Data Types:-

// 1. Object
// 2. Array
// 3. Function
// 4. Date
// 5. RegExp

//array:-
const heros = ["Iron Man", "Spider Man", "Thor", "Hulk", "Captain America"];

//object:- key value pairs inside curly braces {}. It is a collection of key value pairs. 
const myObj = {
    name: "vaibhav",
    age: 20,
    isStudent: true
}

//function:- a block of code that can be called and executed when needed. It is a reusable piece of code that can take input parameters and return output values. Functions are defined using the function keyword followed by the function name and parentheses () that may contain input parameters. The function body is enclosed in curly braces {} and contains the code to be executed when the function is called.

const myFunction = function(name) {
    console.log("Hello " + name);
}

myFunction("vaibhav");
console.log (typeof myFunction); // function
