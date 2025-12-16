//1.A GREETING FUNCTION
function greet(name) {
    return "Hello, " + name + "!";  
}
console.log(greet("Alice"));

//      or for arrow function version   which is more concise

const greetArrow = (name) => "Hello, " + name + "!";
console.log(greetArrow("Bob"));


//2. sum of two Numbers
function sum(a, b) {
    return a + b;  
}       
console.log("Sum of 5 and 3 is:", sum(5, 3));

     //  or arrow function version
const sumArrow = (a, b) => a + b;
console.log("Sum of 10 and 7 is:", sumArrow(10, 7));    


//3. Even and ODD checker
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
function areaOfRectangle(length, width) {
    return length * width;  
}   
console.log("Area of rectangle with length 5 and width 3 is:", areaOfRectangle(5, 3));

    // or arrow function version
const areaOfRectangleArrow = (length, width) => length * width;
console.log("Area of rectangle with length 7 and width 4 is:", areaOfRectangleArrow(7, 4));

//5.celcius to fahrenheit converter
function celsiusToFahrenheit(celsius) {
    return (celsius * 9/5) + 32;  
}       
console.log("25°C in Fahrenheit is:", celsiusToFahrenheit(25));

    // or arrow function version
const celsiusToFahrenheitArrow = (celsius) => (celsius * 9/5) + 32;
console.log("30°C in Fahrenheit is:", celsiusToFahrenheitArrow(30));

//6.fizz buzz function
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

