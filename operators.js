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

export const isEqual = (a, b) => a == b;
export const isStrictEqual = (a, b) => a === b;
export const isNotEqual = (a, b) => a != b;
export const isStrictNotEqual = (a, b) => a !== b;
export const isGreater = (a, b) => a > b;
export const isLess = (a, b) => a < b;
export const isGreaterOrEqual = (a, b) => a >= b;
export const isLessOrEqual = (a, b) => a <= b;


// Logical operators

export const and = (a, b) => a && b;
export const or = (a, b) => a || b;
export const not = (a) => !a;

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

/*
Examples (commented) — paste into a separate example/test file or uncomment to run locally.

console.log(add(7, 3));                // 10
console.log(subtract(10, 4));          // 6
console.log(multiply(6, 5));           // 30
console.log(divide(20, 4));            // 5
console.log(modulus(10, 3));           // 1

console.log(assignValue('hello'));     // 'hello'
console.log(evaluateAndAssign(2, 3));  // 5
console.log(addAssign(10, 5));         // 15  (returns value, does not mutate input)
x = 2; console.log(assign(9));         // sets exported x to 9, returns 9

console.log(isEqual(10, '10'));        // true
console.log(isStrictEqual(10, '10'));  // false
console.log(isGreater(15, 10));        // true

console.log(and(true, false));         // false
console.log(or(true, false));          // true
console.log(ternary(1 > 0, 'yes', 'no')); // 'yes'

console.log(concatenate('a', 'b'));   // 'ab'
console.log(typeOf([]));               // 'object'
console.log(bitwiseAnd(6, 3));         // 2

console.log(commaOperator(1, 2));      // 2

const o = { a: 1 };
console.log(deleteProperty({ ...o }, 'a')); // {}

console.log(spreadArray([1,2,3]));     // [1,2,3]
console.log(spreadObject({x:1}));      // { x: 1 }

const gen = yieldExample();
console.log(gen.next().value);         // 1

// Promise example
awaitExample(Promise.resolve('done')).then(console.log); // 'done'
*/

/*
Falsy values: false, 0, -0, 0n, "", null, undefined, NaN
Truthy examples: true, non-zero numbers, non-empty strings, objects, functions
*/