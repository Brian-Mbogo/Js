// function.js---a reusable block of code designed to perform a particular task
// function declaration---helps to avoid repeating code
function greet(name) {
    return `Hello, ${name}!`;
}
console.log(greet("Ezekiel"));

// calling the function multiple times with different arguments
// console.log(greet("Alice"));
// console.log(greet("Bob"));
// function expression---assigning a function to a variable
// const add = function(a, b) {
    // return a + b;
// };

// calling a function--use the function name followed by parentheses
console.log(add(5, 3));  Outputs: 8
    //parameters/arguments--inputs to the function
// arrow function syntax---a more concise way to write functions
const multiply = (a, b) => a * b;
console.log(multiply(4, 6));  Outputs: 24 

// functions with no parameters
const sayHello = () => "Hello, World!";
// console.log(sayHello());  Outputs: Hello, World!
// functions with default parameters
const power = (base, exponent = 2) => Math.pow(base, exponent);
console.log(power(3));;  Outputs: 9
console.log(power(2, 3));;  Outputs: 8

// functions that return values
const square = (x) => x * x;
let result = square(5);
console.log(result);  Outputs: 25

// functions without return values (void functions)
const logMessage = (message) => {
    console.log("Log:", message);
};
// logMessage("This is a test message.");  Outputs: Log: This is a test message.   