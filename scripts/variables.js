console.log("============")
console.log("Variables script");
console.log("============");

//String (text) ""
let firstName = "Samantha";
//numerical 34,67,3.0
let age = 99;
//boolean (true/false)
let isStudent = false;
let isProfessor = true;

console.log(firstName);
console.log(age);
console.log(isStudent);

// Mini challenge: 
// Create a variable for your last name.
let lastName = "Chen";
// Create a variable for your height.
let height = 170;
// Finally, show each variable separately in the console.
console.log(lastName);
console.log(height + "cm");

// gpa - number
// address - String
// allergies - boolean
// zip - String 
// phone - String

// Arithmetic operations
let num1 = 10;
let num2 = 20;

let sum = num1 + num2; 
let sub = num1 - num2;
let mult = num1 * num2;
let div = num1/num2;

// concatenation (join strings)
console.log(num1 + " + " + num2 + " = " + sum);
// string interpolation
console.log(`${num1} + ${num2} = ${sum}`);
console.log(`${num1} - ${num2} = ${sub}`);
console.log(`${num1} x ${num2} = ${mult}`);
console.log(`${num1} / ${num2} = ${div}`);

let aVariable; // creates the var
aVariable = 40; // assign a value
aVariable = 50;
aVariable = 100;

console.log(aVariable);

// challenge : area of a circle
let pi=3.1416;
let r=3;
let a = pi*r*r;

console.log(`The area of a circle with a radius of ${r} is the ${a}`);