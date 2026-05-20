// constansts
const city = "San Diego"
// step 1. create a fn gets C and convert it to F
function celsiusToFahrenheit(celsius){
    return celsius * 2; // change this with the correct formula
}
// step 2. Create a var for each day with C
let mondayC = 50;
let tuesdayC = 40;

// Step 3. Call the fn for every day
let mondayF = celsiusToFahrenheit(mondayC);
let tuesdayF = celsiusToFahrenheit(tuesdayC);

// Step 4. create output to the HTML
let output = "";
output += `<h3> ${city} </h3>`;
output += `<li> Monday: ${mondayC}C ->  ${mondayF}F </li>`;
output += `<li> Tuesday: ${tuesdayC}C ->  ${tuesdayF}F </li>`;

document.getElementById("forecast").innerHTML= output;


