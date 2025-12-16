// operators.js---various operator functions for JavaScript



// Arithmetic operators

export const add = (a, b) => a + b;
export const subtract = (a, b) => a - b;
export const multiply = (a, b) => a * b;
export const divide = (a, b) => a / b;
export const modulus = (a, b) => a % b;


// Assignment helpers
// Notes: these are pure helpers that return the computed value.
// They do NOT mutate an external variable passed as a primitive.
// -------------------------
export const assignValue = (value) => value;
export const evaluateAndAssign = (a, b) => a + b;

// "assignment-style" helpers return the new value instead of mutating parameters.
export const addAssign = (a, b) => a + b;
export const subtractAssign = (a, b) => a - b;
export const multiplyAssign = (a, b) => a * b;
export const divideAssign = (a, b) => a / b;
export const modulusAssign = (a, b) => a % b;

// Example of exported mutable variables (explicit)
export let x = 10;
export let y = 5;
export const assign = (value) => { x = value; return x; };


// Comparison operators

export const isEqual = (a, b) => a == b;//loose equality
export const isStrictEqual = (a, b) => a === b;//strict equality
export const isNotEqual = (a, b) => a != b;//loose inequality
export const isStrictNotEqual = (a, b) => a !== b; //strict inequality
export const isGreater = (a, b) => a > b;//greater than
export const isLess = (a, b) => a < b;
export const isGreaterOrEqual = (a, b) => a >= b;
export const isLessOrEqual = (a, b) => a <= b;


// Logical operators

export const and = (a, b) => a && b;//Returns the first falsy value, or the last value if all are truthy.
export const or = (a, b) => a || b;//Returns the first truthy value, or the last value if all are falsy.
export const not = (a) => !a;//Logical negation
export const nand = (a, b) => !(a && b);//Negation of AND
export const nor = (a, b) => !(a || b); //Negation of OR
export const xor = (a, b) => (a || b) && !(a && b);//Exclusive OR
export const xnor = (a, b) => !( (a || b) && !(a && b) );//Exclusive NOR
export const logicalNegation = (a) => !a;// same as not operator
export const doubleNegation = (a) => !!a;// converts value to boolean
export const shortCircuitAnd = (a, b) => a && b;// short-circuit AND
export const shortCircuitOr = (a, b) => a || b; // short-circuit OR



// Ternary shorthand
export const ternary = (condition, valueIfTrue, valueIfFalse) =>
  condition ? valueIfTrue : valueIfFalse;

// Increment / decrement (operate on the value and return result)
// Note: for primitives these return a new number; they do not mutate arguments passed by value.
export const increment = (value) => value + 1;
export const decrement = (value) => value - 1;


// String operators

export const concatenate = (str1, str2) => String(str1) + String(str2);
export const append = (str, toAppend) => String(str) + String(toAppend);


// Type operators

export const typeOf = (value) => typeof value;
export const instanceOf = (obj, constructor) => obj instanceof constructor;

// Bitwise operators

export const bitwiseAnd = (a, b) => a & b;
export const bitwiseOr = (a, b) => a | b;
export const bitwiseXor = (a, b) => a ^ b;
export const bitwiseNot = (a) => ~a;
export const leftShift = (a, b) => a << b;
export const rightShift = (a, b) => a >> b;
export const unsignedRightShift = (a, b) => a >>> b;


// Misc operators

// Comma operator: explicitly return the last expression for clarity
export const commaOperator = (expr1, expr2) => expr2;

// Delete property (mutates the passed object)
export const deleteProperty = (obj, prop) => {
  delete obj[prop];
  return obj;
};

//function to demonstrate delete operator
export const deleteExample = (obj, prop) => {
  delete obj[prop];
  return obj;
};  

// Spread / rest
export const spreadArray = (arr) => [...arr];
export const spreadObject = (obj) => ({ ...obj });
export const restParameters = (...args) => args;

// Optional chaining and nullish coalescing
export const optionalChaining = (obj, prop) => obj?.[prop];
export const nullishCoalescing = (value, defaultValue) => value ?? defaultValue;

// Exponentiation
export const exponentiation = (base, exponent) => base ** exponent;

// Logical assignment helpers (mutate the passed object)
export const logicalNullishAssignment = (obj, prop, value) => {
  obj[prop] ??= value;
  return obj;
};
export const logicalAndAssignment = (obj, prop, value) => {
  obj[prop] &&= value;
  return obj;
};
export const logicalOrAssignment = (obj, prop, value) => {
  obj[prop] ||= value;
  return obj;
};

// Void operator — ensure result is undefined
export const voidOperator = (expr) => {
  void expr;
  return undefined;
};

// Generator example
export function* yieldExample() {
  yield 1;
  yield 2;
  yield 3;
}

// Await example (returns resolved value of promise)
export const awaitExample = async (promise) => {
  const result = await promise;
  return result;
}



console.log("" && "hello");        // Output: ""//empty string is falsy
//console.log(5 && 7);               // Output: 7// both truthy, returns last because of &&
//console.log("hey there" || "false"); // Output: "hey there"// first truthy, returns first because of ||
//console.log(0 && "false");         // Output: 0// first falsy, returns first because of &&  
console.log("" || "hello");        // Output: "hello"// first falsy, returns second
console.log(0 || 7);               // Output: 7// first falsy, returns second
console.log("hey there" && "false" && true); // Output: true// all truthy, returns last or returns last  due to &&
console.log(0 || null || "false"); // Output: "false"// all falsy until last, returns last
//console.log(!"");                  // Output: true// empty string is falsy, negation is true
//console.log(!42);                  // Output: false// non-zero number is truthy, negation is false
//console.log(!!"hello");            // Output: true  // double negation converts to boolean true
//console.log(!!0);                  // Output: false // double negation converts to boolean false 
//examples to demonstrate logical operators


// && used when the first one is truethy it checks for second if both are truethy it returns last value otherwise it returns false
//|| is used when the first one is falselsy it checks for second if any one is truethy it returns true otherwise it returns false
let age = 20;

console,log(age >=18 && age <=35); //true//because both are true and && is used to combine them if they are true


console.log(age >=18 || age <=35); //true//because first is true//if any one is true with || it returns true 


console.log(age <18 || age >60); //false//both are false with || it returns false


console.log(age <18 &&"you are a child"); //you are a child//false because first is false with && it returns false


console.log(age >18 || "you are an adult"); //true//because first is true with || it returns true

console.log(age >=18 && age <=35 && "you are amoung the youth"); //youth//true because both are true with && it returns last value

console.log((age >=18 && age <=35) || "you are not amoung the youth"); //youth  //true because first is true with || it returns first value
