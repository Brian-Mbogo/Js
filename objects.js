// objects.js
let personn = {
    name: "ezekiel",
    age: 20,
    isStudent: true
};
console.log("Person Object:", personn);

// accesing object properties
// dot notation
console.log("Name:", personn.name);
console.log("Age:", personn.age);
console.log("Is Student:", person.isStudent);
// bracket notation--is important when property names have spaces or special characters
console.log("Name (bracket):", personn["name"]);
console.log("Age (bracket):", personn["age"]);
console.log("Is Student (bracket):", personn["isStudent"]);

// modifying /adding object properties
personn.age = 21; // modifying existing property
personn.grade = "A"; // adding new property
console.log("Updated Person Object:", personn);  

// deleting object properties
delete personn.isStudent;
console.log("After Deleting isStudent Property:", personn);  

// objects can have functions as properties--these are called methods
personn.greet = function() {
    return `Hello, my name is ${this.name} and I am ${this.age} years old.`;
};
console.log(personn.greet());

// looping through object properties
for (let key in personn) {
    console.log(`${key}: ${personn[key]}`);
}   


