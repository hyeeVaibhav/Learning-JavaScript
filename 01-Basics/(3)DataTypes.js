"use strict"; //treat all JS code as newer version of JS

// alert("Hello World!"); //this will show alert box with message//we are using node.js not browser so alert will not work

// when to use semicolon in JS
// semicolon is used to separate statements in JS
// semicolon is optional in JS but it is recommended to use semicolon at the end of each statement to avoid any unexpected errors

//for example
console.log(3+3); console.log("vaibhav"); //this is correct way to write semicolon at the end of statement so that code readibility 

/*
ECMA script organisation: defines the standards to wrirte the js codes.
TC39 — The people who decide how JavaScript evolves.
MDN — The best place to learn JavaScript
      MDN stands for Mozilla Developer Network.
*/

let name = "vaibhav"; //string
let age = 20;
let isStudent = true; //boolean

//number => 2 to 2^53-1 this is the range of number in JS
//bigint => 2^53-1 to infinity this is the range of bigint in JS

//string => "" 
//boolean => true or false
//null is a stand alone value that represents the absence of any value or object. It is a primitive value that can be assigned to a variable to indicate that it has no value. In JavaScript, null is a falsy value, which means that it evaluates to false in a boolean context.
//undefined is a primitive value that represents the absence of a value or object. It is the default value of uninitialized variables and function parameters. In JavaScript, undefined is also a falsy value, which means that it evaluates to false in a boolean context.

let state = null;

//symbol => unique and immutable data type that can be used as an identifier for object properties. It is a primitive data type that was introduced in ECMAScript 2015 (ES6) and is often used to create private properties or methods in objects. Symbols are created using the Symbol() function, which returns a new unique symbol each time it is called. Symbols can also be used as keys for object properties, allowing for more flexible and dynamic property names.

let id = Symbol('id');
let id2 = Symbol('id');
console.log(id === id2); // false

//object => collection of key value pairs. It is a non-primitive data type that can store multiple values of different data types. Objects are created using curly braces {} and can contain properties (key-value pairs) and methods (functions that are associated with the object). In JavaScript, almost everything is an object, including arrays, functions, and even other objects.

//typeof operator => used to check the data type of a variable or value. It returns a string that represents the data type of the operand. The typeof operator can be used with variables, literals, and expressions. It is a unary operator, which means it takes only one operand.
console.log(typeof "vaibhav"); //string
console.log(typeof 20); //number
console.log(typeof true); //boolean
console.log(typeof null); //object (this is a known bug in JavaScript)
console.log(typeof undefined); //undefined
console.log(typeof Symbol('id')); //symbol