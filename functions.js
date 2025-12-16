//functions--is a reusable block of code that performs a specific task
//function declaration
function greet(name) {
    return "Hello, " + name + "!";
}       

//function expression
const add = function(a, b) {
    return a + b;
};  
//arrow function
const multiply = (a, b) => a * b;

//function with default parameters
function power(base, exponent = 2) {
    return Math.pow(base, exponent);
}       

//function with rest parameters
function sum(...numbers) {
    return numbers.reduce((total, num) => total + num, 0);
}   

//higher-order function
function filter(array, predicate) {
    const result = [];  
    for (const item of array) {
        if (predicate(item)) {
            result.push(item);
        }       
    }
    return result;
}   

//example usage
console.log(greet("Alice"));    
console.log(add(5, 3));
console.log(multiply(4, 2));
console.log(power(3));
console.log(sum(1, 2, 3, 4, 5));
console.log(filter([1, 2, 3, 4, 5], num => num % 2 === 0));



// This code demonstrates various types of functions in JavaScript, including function declarations, function expressions, arrow functions, functions with default parameters, rest parameters, and higher-order functions. Each function performs a specific task and can be reused throughout the code.   
//console.log("hey")


  //  function callMe() {
    //console.log("i have been called");
//}


//console.log("Hey there!");

//callMe();



    console.log("hey");


console.log("i have been called");

function returnMe() {
console.log("hey there");

}
returnMe();




