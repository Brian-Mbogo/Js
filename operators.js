// arithmetic operators--for math calculations
export const add = (a, b) => a + b;     
export const subtract = (a, b) => a - b;
export const multiply = (a, b) => a * b;
export const divide = (a, b) => a / b;          
export const modulus = (a, b) => a % b;       
  
// assignment operators--for assigning values to variables      
export let x = 10;      
export let y = 5;
export const assign = (value) => { x = value; return x; };

// comparison operators--for comparing values      
export const isEqual = (a, b) => a == b;
export const isStrictEqual = (a, b) => a === b;
export const isNotEqual = (a, b) => a != b; 
export const isGreater = (a, b) => a > b;
export const isLess = (a, b) => a < b;
export const isGreaterOrEqual = (a, b) => a >= b;
export const isLessOrEqual = (a, b) => a <= b;


// logical operators--for combining conditions
export const and = (a, b) => a && b;
export const or = (a, b) => a || b;
export const not = (a) => !a;


// ternary operator--shorthand for if-else
export const ternary = (condition, valueIfTrue, valueIfFalse) => 
    condition ? valueIfTrue : valueIfFalse; 
// increment and decrement operators
export const increment = (value) => ++value;
export const decrement = (value) => --value;

// string operators--for manipulating strings
export const concatenate = (str1, str2) => str1 + str2;
export const append = (str, toAppend) => str += toAppend;