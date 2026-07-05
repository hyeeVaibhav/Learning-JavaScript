//Dates

// let myDate = new Date()
// console.log(typeof myDate)

// console.log(myDate.toString());

// console.log(myDate.toDateString());

// console.log(myDate.toLocaleString());

let createMyDate = new Date(2026, 4, 13)
 
console.log(createMyDate.toDateString())
console.log(createMyDate.toLocaleString())

let myTimeStamp = Date.now()

console.log(myTimeStamp)
console.log(createMyDate.getTime())

console.log(Date.now()/1000) 

console.log(Math.floor(Date.now()/1000))




