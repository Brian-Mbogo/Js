// objects.js
let person = {
    name: "ezekiel",
    age: 20,
    isStudent: true
};
console.log("Person Object:", person);

// accesing object properties
// dot notation
console.log("Name:", person.name);
console.log("Age:", person.age);
console.log("Is Student:", person.isStudent);
// bracket notation--is important when property names have spaces or special characters
console.log("Name (bracket):", person["name"]);
console.log("Age (bracket):", person["age"]);
console.log("Is Student (bracket):", person["isStudent"]);

// modifying /adding object properties
person.age = 21; // modifying existing property
person.grade = "A"; // adding new property
console.log("Updated Person Object:", person);  

// deleting object properties
delete person.isStudent;
console.log("After Deleting isStudent Property:", person);  

// objects can have functions as properties--these are called methods
person.greet = function() {
    return `Hello, my name is ${this.name} and I am ${this.age} years old.`;
};
console.log(person.greet());

// looping through object properties
for (let key in person) {
    console.log(`${key}: ${person[key]}`);
}   


