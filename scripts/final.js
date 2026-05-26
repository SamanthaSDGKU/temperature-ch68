// creating variables
let temperatures = []; // this is an empty array
const days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
// step 1 - user inputs the scale
let scale = prompt("Enter the scale: C or F ");


for(let i=0; i<7; i++){
    let temp = prompt("Enter the temp of " + days[i]); // getting the temp
    temperatures.push(temp);// adding elements to the array

    document.getElementById().innerHTML=`<p> ${days[i]} ${temperatures[i]} </p>`
}

console.log(temperatures);


// use the document.getElementById() to display on the HTML the values
// 1. HTML and create the element with id
// 2. use the document.getElementById() 
// 3. document.getElementById().innerHTML=`temperatures[]`;