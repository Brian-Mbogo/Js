// //arrays--used to store multiple values in a single variable
// let numbers = [1, 2, 3, 4, 5];
// console.log("Numbers array:", numbers); 
// let colors = ["red", "green", "blue"];
// console.log("Colors array:", colors);
//  console.log(colors[1] )
// let mixedArray = [1, "two", true, null];
// console.log("Mixed array:", mixedArray);  


// //accessing array elements using index
// console.log("First color:", colors[0]); 
// console.log("Second number:", numbers[1]); 


// //modifying array elements
// colors[1] = "yellow";       
// console.log("Modified colors array:", colors); 


// //array methods

// //PUSH METHOD
//  //adds 6 to the end of the array and returns the new length of the array
// //and its mutates the original array by adding the element  
// numbers.push(6);
// console.log("After push:", numbers); 


// //POP METHOD
// // removes the last element from the array and returns that element by 
// //mutating the original array by removing the last element
// numbers.pop(); 
// console.log("After pop:", numbers);
// let length = colors.length;       
// console.log("Colors array length:", length);   



// //SHIFT METHOD
// //removes the first element from the array and returns that element
// //mutates the original array by removing the first element
// let fiirstColor = colors.shift(); 
// console.log("First color removed using shift:", fiirstColor); //Outputs: red
// console.log("Colors array after shift:", colors);   



// //UNSHIFT METHOD    
// //adds an element to the beginning of the array and returns the new length
// //mutates the original array by adding the element at the start
// let newLength = colors.unshift("purple"); 
// console.log("New length after unshift:", newLength); 
// console.log("Colors array after unshift:", colors); 



// //ARRAY SPLICE METHOD
// //used to add/remove elements from any position in the array
// //removing 1 element at index 1 and adding "pink" and "orange" there
// colors.splice(1, 1, "pink", "orange"); 
// console.log("Colors array after splice:", colors);      


// //ARRAY SLICE METHOD
// //creates a new array by extracting a portion of the original array
// let subArray = colors.slice(1, 3); 
// console.log("Sliced colors array (1 to 3):", subArray); 

// //ARRAY CONCAT METHOD
// //combines two or more arrays into a new array
// let moreColorSs = ["cyan", "magenta"];
// let combinedColorsS = colors.concat(moreColorsS); 
// console.log("Combined colors array:", combinedColorsS);              


// //iterating over an array using for loop
// for (let i = 0; i < numbers.length; i++) {
//     console.log("Number at index", i + ":", numbers[i]);
// }       


// //iterating over an array using for...of loop
// for (let color of colors) {
//     console.log("Color:", color);
// }   


// //array destructuring
// let [firstColor, secondColor] = colors; 
// console.log("First color from destructuring:", firstColor);
// console.log("Second color from destructuring:", secondColor); 


// //array methods: map, filter, reduce
// let doubledNumbers = numbers.map(num => num * 2); 
// console.log("Doubled numbers:", doubledNumbers);    
// let evenNumbers = numbers.filter(num => num % 2 === 0); 
// console.log("Even numbers:", evenNumbers);    
// let sumOfNumbers = numbers.reduce((acc, curr) => acc + curr, 0); 
// console.log("Sum of numbers:", sumOfNumbers); 


// //nested arrays
// let matrix = [
//     [1, 2, 3],  
//     [4, 5, 6],  
//     [7, 8, 9]
// ];
// console.log("Matrix:", matrix); 
// console.log("Element at row 2, column 3:", matrix[1][2]); //Outputs: 6


// //multidimensional arrays
// let threeDArray = [
//     [       
//         [1, 2],
//         [3, 4]
//     ],   
//     [
//         [5, 6],
//         [7, 8]
//     ]   
// ];
// console.log("3D Array:", threeDArray); 
// console.log("Element at [1][0][1]:", threeDArray[1][0][1]); //Outputs: 6        
// //array spread operator     
// let moreColors = ["purple", "orange"];
// let allColors = [...colors, ...moreColors];
// console.log("All colors using spread operator:", allColors);    
// //array rest operator in function parameters
// function sumAll(...args) {
//     return args.reduce((acc, curr) => acc + curr, 0);
// }   
// console.log("Sum of all numbers using rest operator:", sumAll(1, 2, 3, 4, 5)); //Outputs: 15    
// //checking if a variable is an array
// let isArray = Array.isArray(numbers); 
// console.log("Is 'numbers' an array?:", isArray); //Outputs: true                
// //converting array to string
// let colorsString = colors.join(", ");       
// console.log("Colors as string:", colorsString); //Outputs: red, yellow, blue
// //converting string to array
// let fruitsString = "apple, banana, cherry"; 
// let fruitsArray = fruitsString.split(", "); 
// console.log("Fruits array from string:", fruitsArray); //Outputs: ["apple", "banana", "cherry"]             
// //array slice and splice
// let slicedColors = colors.slice(0, 2);          
// console.log("Sliced colors (0 to 2):", slicedColors); //Outputs: ["red", "yellow"]
// colors.splice(1, 1, "pink");



// console.log("Colors after splice:", colors); //Outputs: ["red", "pink", "blue"]
// //emptying an array
// numbers.length = 0; 
// console.log("Numbers array after emptying:", numbers); //Outputs: []
// //array concatenation
// let primaryColors = ["red", "blue"];
// let secondaryColors = ["green", "orange"];
// let allPrimaryAndSecondaryColors = primaryColors.concat(secondaryColors); 
// console.log("All primary and secondary colors:", allPrimaryAndSecondaryColors); //Outputs: ["red", "blue", "green", "orange"]
// //finding index of an element in an array
// let indexOfBlue = colors.indexOf("blue"); 
// console.log("Index of 'blue' in colors array:", indexOfBlue); //Outputs: 2
// //finding an element in an array using find method

// let foundColor = colors.find(color => color.startsWith("p")); 
// console.log("First color starting with 'p':", foundColor); //Outputs: pink  
// //sorting an array
// let unsortedNumbers = [5, 2, 9, 1, 5, 6];       
// unsortedNumbers.sort((a, b) => a - b);
// console.log("Sorted numbers:", unsortedNumbers); //Outputs: [1, 2, 5, 5, 6, 9]      
// //reversing an array
// unsortedNumbers.reverse(); 
// console.log("Reversed sorted numbers:", unsortedNumbers); //Outputs: [9, 6, 5, 5, 2, 1]     
// //flattening a nested array
// let nestedArray = [1, [2, [3, 4]], 5]; 
// let flattenedArray = nestedArray.flat(2); 
// console.log("Flattened array:", flattenedArray); //Outputs: [1, 2, 3, 4, 5] 
// //array fill method
// let filledArray = new Array(5).fill(0); 
// console.log("Filled array with 0s:", filledArray); //Outputs: [0, 0, 0, 0, 0]



//finding the most expensive price and least expensive price in an array of prices
let prices=[10, 50,90,100];
let mostexpensive=prices[0];
let leastexpexnsive=prices[0];  
for (let i = 1; i < prices.length; i++) {
    if (prices[i] > mostexpensive) {
        mostexpensive = prices[i];
    }   
    if (prices[i] < leastexpexnsive) {
        leastexpexnsive = prices[i];
    }   
}
console.log("Most expensive price:", mostexpensive);
console.log("Least expensive price:", leastexpexnsive);
//explanation of the code above:
//1. We initialize an array called prices with a list of numbers representing prices.
//2. We set two variables, mostexpensive and leastexpexnsive, to the first and last elements of the prices array respectively.  
//3. We use a for loop to iterate through each price in the prices array.
//4. Inside the loop, we check if the current price is greater than mostexpensive. If it is, we update mostexpensive to be the current price.
//5. We also check if the current price is less than leastexpexnsive. If it is, we update leastexpexnsive to be the current price.
//6. After the loop completes, we print out the most expensive and least expensive prices found in the array.


//another way to get the most expensive price and least expensive price
// let prices=[10, 20, 30, 40, 50,60,70,80,90,100];
// let mostexpensive= Math.max(...prices);
// console.log("Most expensive price using Math.max:", mostexpensive);
// let leastexpexnsive= Math.min(...prices);
// console.log("Least expensive price using Math.min:", leastexpexnsive);
// //another way to get the most expensive price and least expensive price using a simple loop
// let prices2=[15, 25, 5, 45, 55,65,75,85,95,105];
// let maxPrice=prices2[0];
// let minPrice=prices2[0];
// for (let i = 1; i < prices2.length; i++) {
//     if (prices2[i] > maxPrice) {
//         maxPrice = prices2[i];
//     }
//     if (prices2[i] < minPrice) {
//         minPrice = prices2[i];
//     }
// }
// console.log("Max price using loop:", maxPrice);
// console.log("Min price using loop:", minPrice);
// //another way to get the most expensive price and least expensive price using a for...of loop
// let prices3=[12, 22, 32, 42, 52,62,72,82,92,102];
// let maximumPrice=prices3[0];
// let minimumPrice=prices3[0];
// for (let price of prices3) {
//     if (price > maximumPrice) {
//         maximumPrice = price;
//     }   
//     if (price < minimumPrice) {
//         minimumPrice = price;
//     }       
// }
// console.log("Maximum price using for...of loop:", maximumPrice);
// console.log("Minimum price using for...of loop:", minimumPrice);
 
// let numbers=[1,2,3,4,5,6,7,8,9,10];
