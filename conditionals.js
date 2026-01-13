//conditional js---used to make decision on whether is true or false
//if else statements--  used to execute different blocks of code based on a condition
let number = 10;
if (number > 0) {
    console.log(number + " is a positive number.");
} else {
    console.log(number + " is not a positive number.");
}   


 //if statement--executes a block of code if a specified condition is truethy
 let likes = 200;  
    if (likes >= 180) {    
        console.log("You are a celebrity.");
    } else {
        console.log("You are an upcoming.");
    }   

//if...else if...else statement--executes different blocks of code based on multiple conditions
    let scoreAround = 85;
    if (scoreAround >= 90) {
        console.log("Grade: A");    
    } else if (scoreAround >= 80) {
        console.log("Grade: B");    
    }
    else if (scoreAround >= 70) {
        console.log("Grade: C");    
    }
    else {
        console.log("Grade: F");    
    }   
    //
   
    

let Miaka = 25;

if (Miaka >= 3 && Miaka <= 9) {
  console.log("Lower Primary");
} else if (Miaka >= 10 && Miaka <= 13) {
  console.log("Upper Primary");
} else if (Miaka >= 14 && Miaka <= 18) {
  console.log("Secondary");
} else if (Miaka >= 19 && Miaka <= 23) {
  console.log("University");
} else {
  console.log("Not in 8-4-4 system");
}


//switch statement--executes a block of code based on different cases
    let day = 3;    
    switch (day) {
        case 1:
            console.log("Monday");    
            break;  
        case 2:
            console.log("Tuesday");    
            break;
        case 3:
            console.log("Wednesday");    
            break;  
        case 4:
            console.log("Thursday");    
            break;
        case 5:
            console.log("Friday");

            break;
        case 6:
            console.log("Saturday");    
            break;
        case 7:
            console.log("Sunday");    
            break;
        default:
            console.log("Invalid day");    
    }       

//ternary operator--shorthand for if...else statement
    let legalAge = 20;    
    let canVote = (legalAge >= 18) ? "Yes, you can vote." : "No, you cannot vote.";    
    console.log(canVote);       

//nested conditionals--
    let legalPeriod = 25;   
    if (legalPeriod >= 18) {
        if (legalPeriod >= 21) {    
            console.log("You can drink alcohol.");    
        } else {
            console.log("You can vote but cannot drink alcohol.");    
        }       
    } else {
        console.log("You are a minor.");    
    }       

//example usage
    let temperature = 30;   
    if (temperature > 30) {    
        console.log("It's a hot day.");    
    }   else if (temperature >= 20) {   
        console.log("It's a warm day.");
    }   else {
        console.log("It's a cold day.");    
    }   



    
    let lowerLimit = 18;
let upperLimit = 35;
let age = 24;

if (age >= lowerLimit && age <= upperLimit) {
  console.log("you are youth");
}


