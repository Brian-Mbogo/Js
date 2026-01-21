//1.A GREETING FUNCTION
function greet(name) {
    return "Hello, " + name + "!";  
}
console.log(greet("Alice"));

//      or for arrow function version   which is more concise

const greetArrow = (name) => "Hello, " + name + "!";
console.log(greetArrow("Bob"));


//2. sum of two Numbers
//explanation: This function takes two numbers as input and returns their sum.
//returns the sum of a and b

function sum(a, b) {
    return a + b;  
}       
console.log("Sum of 5 and 3 is:", sum(5, 3));

     //  or arrow function version
const sumArrow = (a, b) => a + b;
console.log("Sum of 10 and 7 is:", sumArrow(10, 7));    


//3. Even and ODD checker
//explanation: This function checks if a number is even or odd and returns true for even numbers and false for odd numbers.
//returns true if num is even, false if odd
//modulus operator % gives the remainder of division
//if num divided by 2 has no remainder, it is even
//if there is a remainder, it is odd
//Example: 4 % 2 = 0 (even), 7 % 2 = 1 (odd)
function isEven(num) {
    return num % 2 === 0;  
}   
console.log("Is 4 even?", isEven(4));
console.log("Is 7 even?", isEven(7));   

//  or arrow function version
const isEvenArrow = (num) => num % 2 === 0;
console.log("Is 10 even?", isEvenArrow(10));
console.log("Is 15 even?", isEvenArrow(15));    

//4.calculate the area of a rectangle
//explanation: This function calculates the area of a rectangle given its length and width. 
function areaOfRectangle(length, width) {
    return length * width;  
}   
console.log("Area of rectangle with length 5 and width 3 is:", areaOfRectangle(5, 3));

    // or arrow function version
const areaOfRectangleArrow = (length, width) => length * width;
console.log("Area of rectangle with length 7 and width 4 is:", areaOfRectangleArrow(7, 4));

//5.celcius to fahrenheit converter
//explanation: This function converts a temperature from Celsius to Fahrenheit using the formula F = (C * 9/5) + 32.    
function celsiusToFahrenheit(celsius) {
    return (celsius * 9/5) + 32;  
}       
console.log("25°C in Fahrenheit is:", celsiusToFahrenheit(25));

    // or arrow function version
const celsiusToFahrenheitArrow = (celsius) => (celsius * 9/5) + 32;
console.log("30°C in Fahrenheit is:", celsiusToFahrenheitArrow(30));

//6.fizz buzz function
//explanation: This function returns "Fizz" for multiples of 3, "Buzz" for multiples of 5, "FizzBuzz" for multiples of both 3 and 5, and the number itself for other cases.
function fizzBuzz(num) {
    if (num % 3 === 0 && num % 5 === 0) {   
        return "FizzBuzz";  
    } else if (num % 3 === 0) {    
        return "Fizz";  
    } else if (num % 5 === 0) {    
        return "Buzz";  
    } else {
        return num;  
    }   
}
console.log("FizzBuzz of 15:", fizzBuzz(15));
console.log("FizzBuzz of 9:", fizzBuzz(9));
console.log("FizzBuzz of 10:", fizzBuzz(10));
console.log("FizzBuzz of 7:", fizzBuzz(7));

    // or arrow function version
const fizzBuzzArrow = (num) => {
    if (num % 3 === 0 && num % 5 === 0) {
        return "FizzBuzz";
    } else if (num % 3 === 0) {
        return "Fizz";
    } else if (num % 5 === 0) {
        return "Buzz";
    } else {
        return num;
    }   
};
console.log("FizzBuzz of 30:", fizzBuzzArrow(30));
console.log("FizzBuzz of 18:", fizzBuzzArrow(18));
console.log("FizzBuzz of 20:", fizzBuzzArrow(20));
console.log("FizzBuzz of 11:", fizzBuzzArrow(11));

//7. Leap year checker
//explanation: This function checks if a given year is a leap year. A year is a leap year if it is divisible by 4, but not divisible by 100, unless it is also divisible by 400.
//if so, the function returns true; otherwise, it returns false.
//
function isLeapYear(year) {
    return (year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0);  
}
console.log("Is 2020 a leap year?", isLeapYear(2020));
console.log("Is 1900 a leap year?", isLeapYear(1900));
console.log("Is 2000 a leap year?", isLeapYear(2000));  
console.log("Is 2021 a leap year?", isLeapYear(2021));

    // or arrow function version
const isLeapYearArrow = (year) => (year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0);
console.log("Is 2016 a leap year?", isLeapYearArrow(2016));     
console.log("Is 1800 a leap year?", isLeapYearArrow(1800));
console.log("Is 2400 a leap year?", isLeapYearArrow(2400));  
console.log("Is 2022 a leap year?", isLeapYearArrow(2022));


function checkNumber(num) {
  if (num % 12 === 0) return "Super Even";
  if (num % 6 === 0) return "Half Even";
  if (num % 2 === 0) return "Even";
  return "Odd";
}

// Examples
console.log(checkNumber(24)); 
console.log(checkNumber(18)); 
console.log(checkNumber(8));  
console.log(checkNumber(7));  



console.log(y);
var y = 10;



//How to implement arrays and loops in JavaScript

//array of fruits
//this is for demonstrating loops
let fruits = ["apple", "banana", "cherry", "date", "elderberry"];
//process of what happens in the for loop below
//1. initialization: let i = 0; (the loop initializes the variable i to 0, the starting index of the array)
//2. condition check: i < fruits.length; (the loop checks if i is less than the length of the fruits array)
//3. code execution: console.log("Fruit:", fruits[i]); (prints the current fruit at index i)
//4. increment: i++ (the loop increments i by 1 to move to the next index)
//5. repeat steps 2-4 until the condition is no longer true 
for (let i = 0; i < fruits.length; i++) {
    console.log("Fruit:", fruits[i]);    
}   
//while loop to demonstrate looping based on a condition
let count = 0;
while (count < 3) {
    console.log("Count is:", count);    
    count++;   
}
//process of what happens in the while loop above
//1. condition: count < 3; (the loop will continue as long as count is less than 3)
//2. code execution: console.log("Count is:", count); (prints the current value of count)
//3. increment: count++; (increments the value of count by 1 after each iteration)
//4. repeat steps 1-3 until the condition is no longer true
//do...while loop to ensure the loop runs at least once


let number = 0;
do {
    console.log("Number is:", number);    
    number++;   
} while (number < 2);
//process of what happens in the do...while loop above
//1. code execution: console.log("Number is:", number); (prints the current value of number)
//2. increment: number++; (increments the value of number by 1 after each iteration)
//3. condition: number < 2; (the loop will continue as long as number is less than 2)
//4. repeat steps 1-3 until the condition is no longer true

//for...of loop to iterate over array elements
for (let fruit of fruits) {
    console.log("Fruit:", fruit);
}   
//process of what happens in the for...of loop above
//1. initialization: let fruit of fruits; (the loop initializes the variable fruit to each element in the fruits array)
//2. code execution: console.log("Fruit:", fruit); (prints the current value of fruit)
//3. repeat steps 1-2 for each element in the fruits array until all elements have been processed

//for...in loop to iterate over object properties
let car = { make: "Honda", model: "Civic", year: 2019 };
for (let key in car) {
    console.log(key + ":", car[key]);
}
//process of what happens in the for...in loop above
//1. initialization: let key in car; (the loop initializes the variable key to each property name in the car object)
//2. code execution: console.log(key + ":", car[key]); (prints the current property name and its value)
//3. repeat steps 1-2 for each property in the car object until all properties have been processed  


//combination of ARRAYS and OBJECTS
//elements of the array should be objects
let students = [
    { name: "John", age: 20 },
    { name: "Jane", age: 22 },
    { name: "Jim", age: 21 }
];  
for (let student of students) {
    console.log("Student Name:", student.name + ", Age:", student.age);
}   
//process of what happens in the for...of loop above
//1. initialization: let student of students; (the loop initializes the variable student to each object in the students array)
//2. code execution: console.log("Student Name:", student.name + ", Age:", student.age); (prints the name and age of the current student)
//3. repeat steps 1-2 for each object in the students array until all objects have been processed

let fruit = ["Apple", "Banana", "Mango"];

for (let i = 0; i < fruit.length; i++) {
    console.log(fruit[i]);
}
