//conditional js---used to make decision on whether is true or false
 //if statement
 let likes = 200;  
    if (likes >= 180) {    
        console.log("You are a celebrity.");
    } else {
        console.log("You are an upcoming.");
    }   

//if...else if...else statement
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

//switch statement
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

//ternary operator
    let legalAge = 20;    
    let canVote = (legalAge >= 18) ? "Yes, you can vote." : "No, you cannot vote.";    
    console.log(canVote);       

//nested conditionals
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



    
    

