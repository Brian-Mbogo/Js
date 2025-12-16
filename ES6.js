//ES6--makes code more readable and easier to write

// Example of let and const---this block scope variable declaration
//has better scoping rules compared to var
//let can be reassigned, const cannot be reassigned
// Template literals--easier string interpolation using backticks (` `)
// Example of block scope with let
{
    let blockVar = "I am inside a block";
    console.log(blockVar); // Accessible here
}
//console.log(blockVar); // Error: blockVar is not defined

// Example of const
const PI = 3.14159;
//PI = 3.14; // Error: Assignment to constant variable  
console.log("Value of PI:", PI);

// Template literals        
// Using backticks for multi-line strings and embedding expressions
let name = "John";
const age = 30;
console.log(`Name: ${name}, Age: ${age}`);  

// Logical assignment operators
let user = { name: "Alice", age: null };
user.age ??= 25; // Assigns 25 if age is null or undefined
console.log("User age after nullish assignment:", user.age);    
user.name ||= "Unknown"; // Does not change name since it's truthy
console.log("User name after logical OR assignment:", user.name);
user.name &&= "Alice Smith"; // Changes name since it's truthy
console.log("User name after logical AND assignment:", user.name);
// Exponentiation operator
let base = 2;
let exponent = 3;
let result = base ** exponent; // 2 raised to the power of 3
console.log(`${base} raised to the power of ${exponent} is ${result}`);
// Optional chaining
let nestedObj = { a: { b: { c: 42 } } };
console.log("Accessing nested property with optional chaining:", nestedObj?.a?.b?.c);

//Arrow functions--shorter syntax for writing functions
const add = (x, y) => x + y;
console.log("Sum using arrow function:", add(5, 3));
// Default parameters
const greet = (name = "Guest") => `Hello, ${name}!`;
console.log(greet());
console.log(greet("Bob"));
// Rest parameters
const sumAll = (...numbers) => numbers.reduce((acc, num) => acc + num, 0);
console.log("Sum of all numbers using rest parameters:", sumAll(1, 2, 3, 4, 5));


