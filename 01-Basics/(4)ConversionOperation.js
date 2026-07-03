let value = "33abc"
console.log(typeof value);

//convert string to number:-
let valueInNumber = Number(value)
console.log(typeof valueInNumber); // 33abc is not a number still it will convert to number but it will give NaN => Not a Number
console.log(valueInNumber); //NaN => Not a Number

//understanding null and undefined in JS
let value1 = null
console.log(typeof value1);

let value1InNumber = Number(value1)
console.log(typeof value1InNumber); // null is a falsy value so it will convert to number 0
console.log(value1InNumber); //0

let value2 = undefined
console.log(typeof value2); 

let value2InNumber = Number(value2)
console.log(typeof value2InNumber); // undefined is a falsy value so it will convert to number NaN => Not a Number
console.log(value2InNumber); //NaN => Not a Number

//Boolean to number conversion
let value3 = true
console.log(typeof value3);

let value3InNumber = Number(value3)
console.log(typeof value3InNumber); // boolean is a falsy value so it will convert to number 1    
console.log(value3InNumber); //1

/* summary of type conversion in JS:-
1. "33" => 33
2. "33abc" => NaN
3. null => 0
4. undefined => NaN
5. true => 1
6. false => 0
*/

//conversion into boolean:-

let isLoggedIn = 1
console.log(typeof isLoggedIn);

let isLoggedIn_Boolean = Boolean(isLoggedIn);
console.log(isLoggedIn_Boolean); //true because 1 is a truthy value

let isLoggedOut = ""
console.log(typeof isLoggedOut);
let isLoggedOut_Boolean = Boolean(isLoggedOut);
console.log(isLoggedOut_Boolean); //false because "" is a falsy value

//number to string conversion
let value4 = 33
console.log(typeof value4);

let value4InString = String(value4)
console.log(typeof value4InString); //string
console.log(value4InString); // "33"

