// Write your JavaScript code here!

//var select = document.getElementById('planets');
var planets = [
    ['Pluto', 0.06],
    ['Neptune', 1.148],
    ['Uranus', 0.917],
    ['Saturn', 1.139],
    ['Jupiter', 2.640],
    ['Mars', 0.3895],
    ['Moon', 0.1655],
    ['Earth', 1],
    ['Venus', 0.9032],
    ['Mercury', 0.377],
    ['Sun', 27.9]
];

// We are going to solve this by breaking the problem into three parts.
// Programmers like automating things, we'll populate the HTML drop down options using code,
// instead of having to type out all the values.
// Create a function that does the some math and gives us the new weight.
// Then create a function that responds when the user clicks on the button.

// 1. Populate the dropdown element with the data found in the planets array.
// The value of each option should be the planet's name.
// Use the following built-in methods:
// `.forEach` `document.createElement` `document.getElementById` `.appendChild`

planets.forEach(planetsDropDown);
    //Entire planetsDropDonw function will be looped for each index in the planets array.

function planetsDropDown(_item, _index) {
    var select = document.getElementById('planets');
        //This line calls the ID 'planets' from the HTML.//
    var opt = planets[_index][0];
        //This defines the first index item in the array as well as the specific array item.//
    var elem = document.createElement("option");
        //This basically creates another 'item' in the dropdown list.//
    elem.textContent = opt;
        //We're setting the 'item' to be created in the dropdown list to equal to each planet 
        //name from the array.//
    elem.value = opt;
        //This initializes the first 'item' in the dropdown list.//
    select.appendChild(elem);
        //Finally, we're passing the array item from 'planets' array that is attached to the 
        //"option" element back to the HTML ID 'planets'.//
};



function calculateWeight(planetName, userWeight) {
    // 2. Write the code to return the correct weight

    //If the planet selected in the dropdown matches the planet name in the array, 
    //then user's Earth weight entered in the form will multiply by the associated 
    //FLOAT number in the planet array. 
    
    var i, len, planetArray, value, weight; 

    value=1;
    weight=0;
    for(i=0, len=planets.length, planetArray=""; i<len; i++) {
        planetArray = planets[i][0];
        if(planetArray===planetName) {
            value = planets[i][1];
        };
    }; //Matching the planet name from the dropdown with the original array using
       //for loop. And then pull the associated value from the array.
  
    if(userWeight>=0) {
         weight = userWeight * value;
        return weight;
    } else {
        weight = 0;
        return weight;
    };
};

function handleClickEvent() {
     // 3. Create a variable called userWeight and assign the value of the user's weight.
    var userWeight = document.getElementById('user-weight').value;
    // 4. Create a variable called planetName and assign the name of the selected planet from the drop down.
    var planetName = document.getElementById('planets').value;
    // 5. Create a variable called result and assign the value of the new calculated weight.
    var result = calculateWeight(planetName, userWeight);
    // 6. Write code to display the message shown in the screenshot.
    document.getElementById("output").innerHTML = "If you were on " + planetName + ", you would weigh " + result + " lbs!";
};

// 7. Set the #calculate-button element's onclick method to use the handleClickEvent function.

// 8. Make it look nice by attaching  a style.css file to your index.html and writing some basic styling,
// feel free to add classes and id's to the HTML elements as you need,
// import.a google font and use it for some or all of the text on your page.


// Bonus Challenges
// 8. Reverse the drop down order so that the sun is first.

