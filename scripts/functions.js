console.log("Functions");

// 1. declaration (create the fn)
function login(){
    console.log("Welcome to the system");
    // here is the block of code to login
}

//2. call/trigger/run/exdecute/use fn
login();
// (on the code, on the console, as users)


// example 2. Fn with 1 parameter
function logout(user){
    console.log(`Goodbye ${user} see you later ... `);
    console.log('Goodbye ' + user + " see you later");
}

logout("Cole");
logout("Titan");
logout("Shea");

// example 3 . Fn with 2-3 parameters
function gradeExam(student,correctItems,points){
    let totalPoints = correctItems * points;
    console.log(`${student} grade of the exam is: ${totalPoints}`);
}

gradeExam("Adam",10,0.5);
gradeExam("Tim",15,0.5);
gradeExam("Cole",12,0.5);

// Challenge 1: 
// task: 
// Create a function called `doubleScore` that takes one number (the player's score).
// The function should display the score multiplied by 2. (console)

function doubleScore(score){
    let total = score * 2;
    console.log(total);
}

doubleScore(10);
doubleScore(20);
doubleScore(30);

