// ======================================================
//              OBJECTS IN JAVASCRIPT
// ======================================================


// ======================================================
// 1. Creating Objects
// ======================================================

// Using the Object constructor
const tinderUser = new Object();     // Singleton Object

// Using Object Literal (Most Common Method)
const tinderUser1 = {};              // Non-singleton Object

// NOTE:
// In modern JavaScript, both create an empty object.
// The term "singleton" here is commonly used in tutorials
// because Object constructor creates an object through the
// built-in constructor, while {} creates an object literal.
// Functionally, both behave the same for normal use.

console.log(tinderUser);   // {}
console.log(tinderUser1);  // {}



// ======================================================
// 2. Adding Properties to an Object
// ======================================================

// Properties can be added anytime after object creation.
tinderUser.id = "123vsingh";
tinderUser.name = "Vaibhav Singh";
tinderUser.isLoggedIn = false;

// Object now becomes:
// {
//   id: "123vsingh",
//   name: "Vaibhav Singh",
//   isLoggedIn: false
// }



// ======================================================
// 3. Nested Objects (Object inside Object)
// ======================================================

const regularUser = {

    email: "vsingh@gmail.com",

    fullname: {

        userfullname: {

            firstName: "Vaibhav",
            secondName: "Singh"

        }

    }

};

// Accessing complete nested object
console.log(regularUser.fullname);

// Accessing deeply nested property
console.log(regularUser.fullname.userfullname.firstName);



// ======================================================
// 4. Optional Chaining (?)
// ======================================================

// Optional chaining prevents errors if any property
// in the chain doesn't exist.
//
// Without ?
// regularUser.address.city
// -> Error if address is undefined
//
// With ?
// regularUser.address?.city
// -> Returns undefined instead of crashing

console.log(
    regularUser.fullname?.userfullname.firstName
);



// ======================================================
// 5. Merging Objects
// ======================================================

const obj1 = {
    1: "a",
    2: "b"
};

const obj2 = {
    3: "c",
    4: "d"
};


// ---------- Method 1 ----------
// Object.assign(target, source)

// Changes obj1 itself
// const obj3 = Object.assign(obj1, obj2);


// ---------- Method 2 ----------
// Better approach

// Creates a new object and keeps originals unchanged
// const obj3 = Object.assign({}, obj1, obj2);


// ---------- Method 3 (Most Used) ----------
// Spread Operator

const obj3 = {
    ...obj1,
    ...obj2
};

console.log(obj3);

// Output
// {
//   1: "a",
//   2: "b",
//   3: "c",
//   4: "d"
// }



// ======================================================
// 6. Array of Objects
// ======================================================

// Mostly used when working with databases,
// APIs, JSON data, etc.

const users = [

    {
        id: 1,
        email: "xyz@gmail.com"
    },

    {
        id: 2,
        email: "yz@gmail.com"
    }

];

// Accessing second object's email
users[1].email;

// users[index].property



// ======================================================
// 7. Object Utility Methods
// ======================================================

console.log(tinderUser);


// ---------- Object.keys() ----------

// Returns all keys as an array
console.log(Object.keys(tinderUser));

// Output
// ["id", "name", "isLoggedIn"]



// ---------- Object.values() ----------

// Returns all values as an array
console.log(Object.values(tinderUser));

// Output
// ["123vsingh", "Vaibhav Singh", false]



// ---------- Object.entries() ----------

// Converts object into array of key-value pairs
console.log(Object.entries(tinderUser));

// Output
// [
//   ["id","123vsingh"],
//   ["name","Vaibhav Singh"],
//   ["isLoggedIn",false]
// ]



// ======================================================
// 8. hasOwnProperty()
// ======================================================

// Checks whether a property exists directly
// inside the object.

console.log(
    tinderUser.hasOwnProperty("isLoggedIn")
);

// true


console.log(
    tinderUser.hasOwnProperty("location")
);

// false



// ======================================================
//                  KEY TAKEAWAYS
// ======================================================

/*
1. Objects can be created using:
      {}
      new Object()

2. Properties can be added dynamically:
      obj.key = value

3. Nested objects are accessed using:
      obj.a.b.c

4. Optional chaining (?.)
      Prevents runtime errors if a property doesn't exist.

5. Merge objects using:
      - Object.assign()
      - Spread Operator (...)   ← Most Preferred

6. Arrays can contain multiple objects:
      users[0].email

7. Useful Object methods:
      Object.keys(obj)
      Object.values(obj)
      Object.entries(obj)

8. hasOwnProperty()
      Checks whether a property exists in an object.

9. Spread operator (...) is the modern and most commonly used
   way to copy or merge objects.

10. Objects are one of the most important JavaScript data
    structures because APIs, JSON, React props/state,
    MongoDB documents, and configuration data are all based
    on objects.
*/