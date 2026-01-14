//arrays--used to store multiple values in a single variable
let numbers = [1, 2, 3, 4, 5];
console.log("Numbers array:", numbers); 
let colors = ["red", "green", "blue"];
console.log("Colors array:", colors);
 console.log(colors[1] )
let mixedArray = [1, "two", true, null];
console.log("Mixed array:", mixedArray);  


//accessing array elements using index
console.log("First color:", colors[0]); 
console.log("Second number:", numbers[1]); 


//modifying array elements
colors[1] = "yellow";       
console.log("Modified colors array:", colors); //Outputs: ["red", "yellow", "blue"]


//array methods
numbers.push(6); //adds 6 to the end of the array and returns the new length of the array
//and its mutates the original array by adding the element      
console.log("After push:", numbers); //Outputs: [1, 2, 3, 4, 5, 6]
numbers.pop(); // removes the last element from the array and returns that element by 
//mutating the original array by removing the last element
console.log("After pop:", numbers); //Outputs: [1, 2, 3, 4, 5]
let length = colors.length;       
console.log("Colors array length:", length);   

let treasures = ["gold", "silver", "diamonds"];
treasures.pop
(); // removes "diamonds"
console.log("Treasures after pop:", treasures); //Outputs: ["gold", "silver"]
treasures.push("ruby"); // adds "ruby"
console.log("Updated treasures array:", treasures); //Outputs: ["gold", "silver", "ruby"]   


//iterating over an array using for loop
for (let i = 0; i < numbers.length; i++) {
    console.log("Number at index", i + ":", numbers[i]);
}       


//iterating over an array using for...of loop
for (let color of colors) {
    console.log("Color:", color);
}   


//array destructuring
let [firstColor, secondColor] = colors; 
console.log("First color from destructuring:", firstColor);
console.log("Second color from destructuring:", secondColor); 


//array methods: map, filter, reduce
let doubledNumbers = numbers.map(num => num * 2); 
console.log("Doubled numbers:", doubledNumbers);    
let evenNumbers = numbers.filter(num => num % 2 === 0); 
console.log("Even numbers:", evenNumbers);    
let sumOfNumbers = numbers.reduce((acc, curr) => acc + curr, 0); 
console.log("Sum of numbers:", sumOfNumbers); 


//nested arrays
let matrix = [
    [1, 2, 3],  
    [4, 5, 6],  
    [7, 8, 9]
];
console.log("Matrix:", matrix); 
console.log("Element at row 2, column 3:", matrix[1][2]); //Outputs: 6


//multidimensional arrays
let threeDArray = [
    [       
        [1, 2],
        [3, 4]
    ],   
    [
        [5, 6],
        [7, 8]
    ]   
];
console.log("3D Array:", threeDArray); 
console.log("Element at [1][0][1]:", threeDArray[1][0][1]); //Outputs: 6        
//array spread operator     
let moreColors = ["purple", "orange"];
let allColors = [...colors, ...moreColors];
console.log("All colors using spread operator:", allColors);    
//array rest operator in function parameters
function sumAll(...args) {
    return args.reduce((acc, curr) => acc + curr, 0);
}   
console.log("Sum of all numbers using rest operator:", sumAll(1, 2, 3, 4, 5)); //Outputs: 15    
//checking if a variable is an array
let isArray = Array.isArray(numbers); 
console.log("Is 'numbers' an array?:", isArray); //Outputs: true                
//converting array to string
let colorsString = colors.join(", ");       
console.log("Colors as string:", colorsString); //Outputs: red, yellow, blue
//converting string to array
let fruitsString = "apple, banana, cherry"; 
let fruitsArray = fruitsString.split(", "); 
console.log("Fruits array from string:", fruitsArray); //Outputs: ["apple", "banana", "cherry"]             
//array slice and splice
let slicedColors = colors.slice(0, 2);          
console.log("Sliced colors (0 to 2):", slicedColors); //Outputs: ["red", "yellow"]
colors.splice(1, 1, "pink");



console.log("Colors after splice:", colors); //Outputs: ["red", "pink", "blue"]
//emptying an array
numbers.length = 0; 
console.log("Numbers array after emptying:", numbers); //Outputs: []
//array concatenation
let primaryColors = ["red", "blue"];
let secondaryColors = ["green", "orange"];
let allPrimaryAndSecondaryColors = primaryColors.concat(secondaryColors); 
console.log("All primary and secondary colors:", allPrimaryAndSecondaryColors); //Outputs: ["red", "blue", "green", "orange"]
//finding index of an element in an array
let indexOfBlue = colors.indexOf("blue"); 
console.log("Index of 'blue' in colors array:", indexOfBlue); //Outputs: 2
//finding an element in an array using find method

let foundColor = colors.find(color => color.startsWith("p")); 
console.log("First color starting with 'p':", foundColor); //Outputs: pink  
//sorting an array
let unsortedNumbers = [5, 2, 9, 1, 5, 6];       
unsortedNumbers.sort((a, b) => a - b);
console.log("Sorted numbers:", unsortedNumbers); //Outputs: [1, 2, 5, 5, 6, 9]      
//reversing an array
unsortedNumbers.reverse(); 
console.log("Reversed sorted numbers:", unsortedNumbers); //Outputs: [9, 6, 5, 5, 2, 1]     
//flattening a nested array
let nestedArray = [1, [2, [3, 4]], 5]; 
let flattenedArray = nestedArray.flat(2); 
console.log("Flattened array:", flattenedArray); //Outputs: [1, 2, 3, 4, 5] 
//array fill method
let filledArray = new Array(5).fill(0); 
console.log("Filled array with 0s:", filledArray); //Outputs: [0, 0, 0, 0, 0]
