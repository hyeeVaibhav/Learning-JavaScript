// if
const isUserLoggedIn = true;
const temperature = 41

if( 2 == "2"){
  console.log("executed");
}

// <, >, <=, >=, !=, !==, ==, ===

// 1. ===
if( 2 === "2"){
  console.log("executed");
}

// 2. !=
if( 2 != 3){
  console.log("executed");
}


if( temperature < 50){
  console.log("temperature is less than 50");
} 


if(temperature === 40){
  console.log("less than 50");
} else{
  console.log("temperature is greater than 50");
}

console.log ("Execute");

//lets understand control flow with scope
// const score = 200;

// if(score > 100){
//   let power = "fly";
//   console.log(`user power: ${power}`)
// }

// console.log(`user score: ${power}`) // this will throw error because power is not defined in this scope;

//a shorthend notation of if else statement is ternary operator

const balance = 1000;

if(balance > 500) console.log("user can buy the product");//implicit scope

if(balance <500){
  console.log("less than 500");

}else if (balance < 750){
  console.log("less than 750");

}else if (balance <900){
  console.log("less than 900");

}else{
  console.log("less than 1200");
}


const userLoggedIn = true;
const debitCard = true;
const userLoggedInFromGoogle = false;
const userLoggedInFromEmail = true;

if(userLoggedIn && debitCard ){
  console.log("user can buy the product"); // user can buy the product
}

//also you can

// if(userLoggedIn && debitCard && 2==3 ){
//   console.log("user can buy the product");
// } // user can buy the product 


if(userLoggedInFromGoogle || userLoggedInFromEmail){
  console.log("user logged in"); // user can buy the product
}

