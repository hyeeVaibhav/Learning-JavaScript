// ====================== DATE & TIME IN JAVASCRIPT ======================

// Creates a Date object
let createMyDate = new Date(2026, 4, 13);
// Note:
// Month is ZERO-BASED in JavaScript.
// 0 = Jan, 1 = Feb, ..., 4 = May

// Returns date in readable format
console.log(createMyDate.toDateString());
// Output: Wed May 13 2026

// Returns date and time in local format
console.log(createMyDate.toLocaleString());
// Output: 5/13/2026, 12:00:00 AM

// ----------------------------------------------------------------------

// Returns current timestamp (milliseconds since Jan 1, 1970)
let myTimeStamp = Date.now();

console.log(myTimeStamp);
// Output: 1783xxxxxxxx (Current timestamp in milliseconds)

// Returns timestamp of createMyDate
console.log(createMyDate.getTime());
// Output: 1778630400000

// Current timestamp in seconds (decimal value)
console.log(Date.now() / 1000);
// Output: 1783xxxx.xx

// Removes decimal part to get whole seconds
console.log(Math.floor(Date.now() / 1000));
// Output: 1783xxxx

// ----------------------------------------------------------------------

// Current date & time
let newDate = new Date();

console.log(newDate);
// Output: 2026-07-05T14:xx:xx.xxxZ (or equivalent)

// getMonth() returns 0-11, so +1 gives actual month
console.log(newDate.getMonth() + 1);
// Output: 7

// getDay() returns day of week
// 0 = Sunday, 1 = Monday, ..., 6 = Saturday
console.log(newDate.getDay());
// Output: 0

// ----------------------------------------------------------------------

// Customize the format of date using locale options
console.log(
  newDate.toLocaleString('default', {
    weekday: "long",
  })
);
// Output: Sunday