// array---is a variable thast can store multiple values the same place

//for loop to iterate over array elements
//its syntax: for(initialization; condition; increment/decrement/update) { //code to be executed }
//initialization--is where you initialize a counter variable
//condition--is where you specify the condition for the loop to run
//increment/decrement--is where you update the counter variable//update for each iteration
//example of a for loop 
//for (let i = 0; i < 5; i++) {
   // console.log("Iteration number:", i);    
//}
//process of what happens in the for loop above
//1. initialization: let i = 0; (counter variable i is initialized to 0)
//2. condition: i < 5; (the loop will continue as long as i is less than 5)
//3. code execution: console.log("Iteration number:", i); (prints the current value of i)
//4. increment: i++; (increments the value of i by 1 after each iteration)
//5. repeat steps 2-4 until the condition is no longer true

let fruits = ["apple", "banana", "cherry"];     
for (let i = 0; i < fruits.length; i++) {
    console.log("Fruit at index", i + ":", fruits[i]);
} 

for(let i=0 ; i<=5 ; i++){
    console.log("iteration", i);
}
//process of what happens in the for loop above
//1. initialization: let i = 0; (counter variable i is initialized to 0) this is understood as the starting point of the loop
//2. condition: i <= 5; (the loop will continue as long as i is less than or equal to 5) understood as the end of the loop
//3. code execution: console.log("iteration", i); (prints the current value of i) this can also be written as console.log("iteration " + i);    
//4. increment: i++; (increments the value of i by 1 after each iteration) this can also be written as i = i + 1 or i += 1;-
//i++ means what happening is that we are adding 1 to the current value of i and updating i with the new value
//5. repeat steps 2-4 until the condition is no longer true because when i becomes 6 the condition i <= 5 will be false
//  and the loop will stop executing its also called terminating condition or exit condition //also callled update expression or update statement
//flow of execution: initialization -> condition -> code execution -> increment -> condition -> code execution -> update/increment -> 
// ... -> condition (false) -> exit loop 
//the loop will run 6 times with i values from 0 to 5 inclusive
//explanation of the for loop above
//1. The loop starts with i initialized to 0.
//2. It checks if i (0) is less than or equal to 5, which is true.
//3. It prints "iteration 0" to the console.
//4. It increments i to 1.
//5. Steps 2-4 repeat until i becomes 6, at which point the condition i <= 5 is false, and the loop exits.also called update expression
//  or update statement  


//while loop to iterate until a condition is met
let count = 0;
while (count < 5) {    
    console.log("Count is:", count);    
    count++;   
}   
//process of what happens in the while loop above
//1. condition: count < 5; (the loop will continue as long as count is less than 5)
//2. code execution: console.log("Count is:", count); (prints the current value of count)
//3. increment: count++; (increments the value of count by 1 after each iteration)
//4. repeat steps 1-3 until the condition is no longer true

//do...while loop to ensure the loop runs at least once     
let number = 0;
do {
    console.log("Number is:", number);    
    number++;   
} while (number < 3);
//process of what happens in the do...while loop above
//1. code execution: console.log("Number is:", number); (prints the current value of number)
//2. increment: number++; (increments the value of number by 1 after each iteration)
//3. condition: number < 3; (the loop will continue as long as number is less than 3)
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
let car = { make: "Toyota", model: "Camry", year: 2020 };
for (let key in car) {
    console.log(key + ":", car[key]);
}  
//process of what happens in the for...in loop above
//1. initialization: let key in car; (the loop initializes the variable key to each property name in the car object)
//2. code execution: console.log(key + ":", car[key]); (prints the current property name and its value)
//3. repeat steps 1-2 for each property in the car object until all properties have been processed     

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


