// PRIMITIVE

//  7 type : string,number,boolean,null,undefined,symbol,bigint

const score = 100; // number
const scoreValue = "100"; // string

const isLoggedIn = false; // boolean
const outsideTemp = null; // null
let userEmail; // undefined

const id = Symbol("1234"); // symbol
const anotherId = Symbol("1234"); // symbol

// console.log(id === anotherId);

const bigNumber = 3456789012345678901234567890n; // bigint



// REFERENCE(Non Primitive)

//Array ,Object ,Function

const heros = ["shaktiman", "naagraj", "doga"]; // Array

const myObj = {
  name: "Raju",
  age: 24,
}; // Object
    
const myFunction = function sayHello() {
  // console.log("hello");
} // Function


// console.log(typeof score );
// console.log(typeof myFunction); 
// console.log(typeof heros);
// console.log(typeof myObj);
// console.log(typeof id);
// console.log(typeof bigNumber);
// console.log(typeof userEmail);