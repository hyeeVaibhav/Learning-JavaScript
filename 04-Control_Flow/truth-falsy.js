// truthy-falsy concept: 

// const userEmail = "vaibhav@gmail.com";
// if(userEmail){
//   console.log("email is verified");
// }else{
//   console.log("email is not verified");
// } // email is verified because userEmail is a truthy value



// const userEmail = "";
// if(userEmail){
//   console.log("email is verified");
// }else{
//   console.log("email is not verified");
// } // email is not verified because userEmail is a falsy value



// const userEmail = [];
// if(userEmail){
//   console.log("email is verified");
// }else{
//   console.log("email is not verified");
// } // email is verified because userEmail is a truthy value


// list of falsy values in javascript:
//  0, -0,null, undefined, "", false, NaN, BigInt(0n), document.all

//list of truthy values in javascript: 
// " ", [], {}, true, function() {}, 2, 3, -1, -2, -3

const userEmail = [];
if(userEmail.length === 0){
  console.log("array is empty")
} //array is empty because userEmail is a truthy value but its length is 0 which is a falsy value

const emptyobject = {};

if(Object.keys(emptyobject).length === 0){
  console.log("object is empty")
}//object is empty because emptyobject is a truthy value but its length is 0 which is a falsy value