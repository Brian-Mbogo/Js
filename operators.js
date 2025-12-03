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
export const and = (a, b) => a && b;//{-->;coditions should be truthy   }
export const or = (a, b) => a || b;//-->;at least one condition should be truthy
export const not = (a) => !a;//-->;negates the condition


// ternary operator--shorthand for if-else
export const ternary = (condition, valueIfTrue, valueIfFalse) => 
    condition ? valueIfTrue : valueIfFalse; 
// increment and decrement operators
export const increment = (value) => ++value;
export const decrement = (value) => --value;

// string operators--for manipulating strings
export const concatenate = (str1, str2) => str1 + str2;
export const append = (str, toAppend) => str += toAppend;


// type operators--for checking data types
export const typeOf = (value) => typeof value;
export const instanceOf = (obj, constructor) => obj instanceof constructor;

// bitwise operators--for manipulating bits
export const bitwiseAnd = (a, b) => a & b;  
export const bitwiseOr = (a, b) => a | b;  
export const bitwiseXor = (a, b) => a ^ b;
export const bitwiseNot = (a) => ~a;
export const leftShift = (a, b) => a << b;
export const rightShift = (a, b) => a >> b;
export const unsignedRightShift = (a, b) => a >>> b;

// comma operator--evaluates multiple expressions and returns the last one
export const commaOperator = (expr1, expr2) => (expr1, expr2);

// delete operator--deletes a property from an object
export const deleteProperty = (obj, prop) => {
    delete obj[prop];
    return obj;
};  

// spread operator--expands an iterable into individual elements
export const spreadArray = (arr) => [...arr];   
export const spreadObject = (obj) => ({...obj});

// rest operator--collects multiple elements into an array
export const restParameters = (...args) => args;    

// optional chaining operator--safely access nested object properties
export const optionalChaining = (obj, prop) => obj?.[prop];

// nullish coalescing operator--provides a default value for null or undefined
export const nullishCoalescing = (value, defaultValue) => value ?? defaultValue;    

// exponentiation operator--raises a base to the power of an exponent
export const exponentiation = (base, exponent) => base ** exponent; 
// logical nullish assignment operator--assigns a value if the variable is null or undefined
export const logicalNullishAssignment = (obj, prop, value) => {
    obj[prop] ??= value;
    return obj;
};  

// logical AND assignment operator--assigns a value if the variable is truthy
export const logicalAndAssignment = (obj, prop, value) => {
    obj[prop] &&= value;
    return obj;
};
// logical OR assignment operator--assigns a value if the variable is falsy
export const logicalOrAssignment = (obj, prop, value) => {
    obj[prop] ||= value;
    return obj;
};
// void operator--evaluates an expression and returns undefined
export const voidOperator = (expr) => void expr;
// yield operator--used in generator functions to pause and resume execution
export function* yieldExample() {
    yield 1;
    yield 2;
    yield 3;
}   
// await operator--used to wait for a Promise to resolve in async functions         
export const awaitExample = async (promise) => {
    const result = await promise;
    return result;
}

// falsy values in JavaScript are values that evaluate to false when converted to a boolean context. The following values are considered falsy:
// 1. false    
// 2. 0 (zero) 
// 3. -0 (negative zero)
// 4. 0n (BigInt zero)
// 5. "" (empty string)
// 6. null
// 7. undefined
// 8. NaN (Not-a-Number)
// // truthy values in JavaScript are values that evaluate to true when converted to a boolean context. Any value that is not falsy is considered truthy. Some common examples of truthy values include:
// 1. true
// 2. Non-zero numbers (e.g., 1, -1, 3.14)
// 3. Non-empty strings (e.g., "hello", "0", "false")
// 4. Objects (e.g., {}, [])
// 5. Functions        