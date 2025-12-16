//1.A GREETING FUNCTION
function greet(name) {
    return "Hello, " + name + "!";  
}
console.log(greet("Alice"));

//      or for arrow function version   which is more concise

const greetArrow = (name) => "Hello, " + name + "!";
console.log(greetArrow("Bob"));


//sum of two Numbers
function sum(a, b) {
    return a + b;  
}       
console.log("Sum of 5 and 3 is:", sum(5, 3));

     //  or arrow function version
const sumArrow = (a, b) => a + b;
console.log("Sum of 10 and 7 is:", sumArrow(10, 7));    
