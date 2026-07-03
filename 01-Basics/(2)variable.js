const accountId = 14532 
let accountEmail = "xyz@google.com"
var accountPassword = "123456"
const accountCity = "jaipur"
let accountState; //undefined because we have not assigned any value to accountState variable

//accountId = 2 
//this will give error because accountId is a constant variable and cannot be reassigned

accountEmail = "deiw@2003.com" //value updated because accountEmail is a let variable and can be reassigned
accountPassword = "123456789"  //value updated because accountPassword is a var variable and can be reassigned

// console.log(accountId);
// console.log(accountEmail);
// console.log(accountPassword);
// console.log(accountCity);


// instead of using .log again nd again we can use console.table()
console.table({accountId, accountEmail, accountPassword, accountCity,accountState})

/*NOTE:-
 variable can be declared using var, let and const keywords.
 never use var to declare variable because it is function scoped and can be accessed outside the block.
 let and const are block scoped and can only be accessed inside the block.
 const variable cannot be reassigned but let variable can be reassigned.
*/