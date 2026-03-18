/* JavaScript supports the following forms of if...else statement −
1) if statement
2) if...else statement
3) if...else if... statement.
4) nested if...else statement.

/* 1. if statement:-
    Syntax:
    if (expression) {
    Statement(s) to be executed if expression is true
    }


/* 2. if...else statement:-
    Syntax:
    if (expression) {
    Statement(s) to be executed if expression is true
    } else {
    Statement(s) to be executed if expression is false
    }


/* 3. if...else if... statement
    Syntax:
    if (expression 1) {
    Statement(s) to be executed if expression 1 is true
    } else if (expression 2) {
    Statement(s) to be executed if expression 2 is true
    } else if (expression 3) {
    Statement(s) to be executed if expression 3 is true
    } else {
    Statement(s) to be executed if no expression is true
    }
*/

/* 4. nested if...else statement:-
    Syntax:
    if (expression 1) {
    Statement(s) to be executed if expression 1 is true
        if (expression 2) {
        Statement(s) to be executed if expression 2 is true
        } else {
        Statement(s) to be executed if expression 2 is false
        }
    } else {
    Statement(s) to be executed if expression 1 is false
    }
*/

let num = 10;

if (num > 5) {
  console.log("Number is greater than 5");
}

let n = 3;

if (n > 5) {
  console.log("Greater than 5");
} else {
  console.log("Less than or equal to 5");
}

let m = 0;

if (m > 0) {
  console.log("Positive number");
} else if (m < 0) {
  console.log("Negative number");
} else {
  console.log("Zero");
}

// IF EXAMPLE
const age = 25;

if (age < 18) { 
    console.log("YOU CAN NOT VOTE");
} 


// IF ELSE EXAMPLE
let prompt = require("prompt-sync")();
let age1 = prompt("Enter your age: ");
age1 = Number(age1); // convert to number

if (age1 < 18) {
    console.log("YOU CAN NOT VOTE");
} else {
    console.log("YOU CAN VOTE");
}
// IF ELSE IF EXAMPLE
const newprompt = require("prompt-sync")();

let age2 = newprompt("Enter your age: ");
age2 = Number(age2); // convert to number

if (age2 < 18) { 
    console.log("YOU CAN NOT VOTE");
} else if (age2 >= 18 && age2 < 80) {
    console.log("YOU CAN VOTE");
} else {
    console.log("YOU CAN VOTE AND YOU ARE ELDERLY");
}
// NESTED IF ELSE EXAMPLE
let a = 7;

if (a> 0) {
    // first condition
    if (a % 2 === 0) {
        console.log("Positive Even Number");
    } else {
        console.log("Positive Odd Number");
    }
} else {
    // outer else
    if (a % 2 === 0) {
        console.log("Negative Even Number");
    } else {
        console.log("Negative Odd Number");
    }
}

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
  default:
    console.log("Invalid day");
}

// SWITCH EXAMPLE MARKS
var mark= 75;
switch (true) {
    case (mark >= 90):
        console.log("Grade O"); 
        break;
    case (mark >= 80):
        console.log("Grade A");
        break;
    case (mark >= 70):
        console.log("Grade B");
        break;
    case (mark >= 60):
        console.log("Grade C");
        break;
    default:
        console.log("Grade F");
}
