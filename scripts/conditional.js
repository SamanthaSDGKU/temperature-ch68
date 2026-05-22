console.log("Conditionals");

// if-statement condition (y/n)
// --- SYNTAX ---
// if(condition){
// code to be run if the condition is true
//}

let result = 50; 
// > < == !
if(result > 60){ 
    console.log("You passed the exam");
}

// case 1: 5 == 5 -> true
// case 2: 5 == "5" -> true because checks the value
// case 3: 5 === "5" -> false because checks value and datatype

// if-else statement condition (y/n)
// --- SYNTAX ---
// if(condition){
// code to be run if the condition is true
//}else{
// code to be run if the condition is false
//}

let points = 100;
if(points > 60){
    console.log("You won!!!");
}else{
    console.log("You lose!!!");
}

// Challenge 1: print if the water is boiling or not
// consider 100 as the boiling temp

let waterTemp = 101;
if(waterTemp > 100){
    console.log("The water is boiling");
}else{
    console.log("The water is not boiling");
}

// else-if condition
// --- SYNTAX ---
// if(condition1){
// code to be run if the condition1 is true
//}else if(condition2){
// code to be run if the condition2 is true
//}else{
// code to be run if the conditions are falsed
//}

let age = 30;

if(age < 13){
    console.log("You are a child!");
}else if(age < 21){
    console.log("You are a teenager");
}else if(age < 64){
    console.log("You are a adult");
}else{
    console.log("You are a senior");
}

//challenge 2: 
// Scenario:
// You're designing a tiny system for self-driving bikes.
// Instructions:
// Ask for the traffic light color 
// ("green", "yellow", or "red") and tell the 
// bike what to do (Go!, Slow down, stop)
// let trafficLight = prompt("Enter the color (green, yellow, red):");
// if (trafficLight == "green") {
//     console.log("Go!");
// } else if (trafficLight === "yellow") {
//     console.log("Slow down.");
// } else if (trafficLight === "red") {
//     console.log("Stop.");
// } else {
//     console.log("Invalid input.");
// }

// Challenge 3
function weatherOutFit(){
    const div = document.getElementById("results");
    let tmp = prompt("Enter a temperature");

    
    // clear the CSS
    div.classList.remove("cold","red");
    
    if(tmp < 15){
        div.innerHTML = "Jacket";
        div.classList.add("cold");
    }else if(tmp < 25){
        div.innerHTML ="Sweater";
    }else{
        div.innerHTML ="T-Shirt";
        div.classList.add("hot");
    }
}

weatherOutFit();