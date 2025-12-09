// numbers--->values with digits
let userage = 25;
console.log("My age is:", userage);

// strings--->values with characters
let username = "Alice Smith"; //double quotes are used to define strings
console.log("My name is:", username);
let city = 'Los Angeles'; // single quotes are also used to define strings
console.log("I live in:", city);    
let country = `USA`; // backticks are used for template literals
console.log("My country is:", country);       

// boolen--->values with true or false
let isStudent = true;
console.log("Am I a student?:", isStudent);
let isEmployed = false;
console.log("Am I employed?:", isEmployed);

// undefined--->value not assigned
let address;// variable declared but not assigned   
console.log("My address is:", address);

// null--->intentionally empty value
let phoneNumber = null; 
console.log("My phone number is:", phoneNumber);

// bigint--->for very large numbers
let bigIntValue = 9007199254741991n; 
console.log("A big integer value is:", bigIntValue);

// symbol--->unique identifier
let uniqueId = Symbol("id"); 
console.log("A unique identifier is:", uniqueId);

// object--->collection of key-value pairs

    let person = { name: "Brian", age: 17 };
console.log("Person object:", person);

// array--->ordered collection of values
let colors = ["red", "green", "blue"];
console.log("Colors array:", colors);

// null vs undefined
let score;  // undefined -->variable declared but not assigned as in null establishes difference
console.log("Score (undefined):", score);
let level = null; // null--->intentionally no value compaRred to undefined    
console.log("Level (null):", level);        
