// nullish collescing operator is used to check if the value is null or undefined and if it is then it will return the default value otherwise it will return the value itself

let val1;

// val1 = 5 ?? 10; // if val1 is null or undefined then it will return 10 otherwise it will return val1
// console.log(val1); // 5 

// val1 = null ?? 10; // if val1 is null or undefined then it will return 10 otherwise it will return val1
// console.log(val1); // 10 

//instead of null we use undefined also
// val1 = undefined ?? 10; 
// console.log(val1); // 10

val1 = null ?? 10 ?? 15 //first value afte null or undefined
cosole.log(val1); // 10
