// array---is a variable thast can store multiple values the same place

//for loop to iterate over array elements
let fruits = ["apple", "banana", "cherry"];     
for (let i = 0; i < fruits.length; i++) {
    console.log("Fruit at index", i + ":", fruits[i]);
}   

//while loop to iterate until a condition is met
let count = 0;
while (count < 5) {    
    console.log("Count is:", count);    
    count++;   
}   

//do...while loop to ensure the loop runs at least once     
let number = 0;
do {
    console.log("Number is:", number);    
    number++;   
} while (number < 3);  


//for...of loop to iterate over array elements

for (let fruit of fruits) {
    console.log("Fruit:", fruit);
}

//for...in loop to iterate over object properties
let car = { make: "Toyota", model: "Camry", year: 2020 };
for (let key in car) {
    console.log(key + ":", car[key]);
}       

//nested loops
let matrixx = [
    [1, 2, 3],  
    [4, 5, 6],
    [7, 8, 9]
];  
for (let i = 0; i < matrixx.length; i++) {
    for (let j = 0; j < matrixx[i].length; j++) {
        console.log("Element at (" + i + "," + j + "):", matrixx[i][j]);
    }       
}  
//break statement to exit a loop early
for (let i = 0; i < 10; i++) {
    if (i === 5) {  
        break;
    }
    console.log("i is:", i);
}           
//continue statement to skip an iteration
for (let i = 0; i < 10; i++) {
    if (i % 2 === 0) {  
        continue;
    }
    console.log("Odd i is:", i);
}       
//labeled statements to control nested loops
outerLoop: for (let i = 0; i < 3; i++) {
    innerLoop: for (let j = 0; j < 3; j++) {    
        if (i === 1 && j === 1) {
            break outerLoop;
        }   
    }
        console.log("i:", i, "j:", j);
}       


