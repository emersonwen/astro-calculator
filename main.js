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



function calculateWeight(weight, planetName) {
    // 2. Write the code to return the correct weight

    //If the planet selected in the dropdown is equal to a specific STRING in the planet array, 
    //then the Earth weight entered in the form will multiply by the associate FLOAT number in 
    //the planet array. 
    //And then the result will be appended back to the HTML input box ID = 'user-weight'. 
    var userWeight = document.getElementById('user-weight').value;
    var planetName = document.getElementById('planets').value;

    function muti(val) {
        var val =
        switch (planetName) {
            case planetName===planet[0][0]:
                val = planet[0][1];
                break;
            case planetName===planet[1][0]:
                val = planet[1][1];
                break;
            case planetName===planet[2][0]:
                val = planet[2][1];
                break;
            case planetName===planet[3][0]:
                val = planet[3][1];
                break;
            case planetName===planet[4][0]:
                val = planet[4][1];
                break;
            case planetName===planet[5][0]:
                val = planet[5][1];
                break;
            case planetName===planet[6][0]:
                val = planet[6][1];
                break;
            case planetName===planet[7][0]:
                val = planet[7][1];
                break;
            case planetName===planet[8][0]:
                val = planet[8][1];
                break;
            case planetName===planet[9][0]:
                val = planet[9][1];
                break;
            case planetName===planet[10][0]:
                val = planet[10][1];
                break;
        }
            //A switch statement that evaluates the different planetNames and assigns the associated 
            //planet array values to val. //
        let result = userWeight * val; //Multiply userWeight value with val value defined in the switch statement.
        return result;
    }
        //A function that mulitplies the userWeight with the associated Float value of each planet.//
    
    let weight = multi();
        //Weight captures the output value of the multi() function.//



    return weight;
        //The output value of weight variable returned.//
}




function handleClickEvent(e) {
     // 3. Create a variable called userWeight and assign the value of the user's weight.
    var userWeight = document.getElementById('user-weight').value;
    // 4. Create a variable called planetName and assign the name of the selected planet from the drop down.
    var planetName = document.getElementById('planets').value;
    // 5. Create a variable called result and assign the value of the new calculated weight.
    var result = calculatedWeight();
    // 6. Write code to display the message shown in the screenshot.
    function writeMessage(message, planetName, userWeight) {
        switch (planetName) {
            case planetName===planet[0][0]:
                message = 'If you were on Pluto, you would weigh ' + result + ' lbs!';
                break;
            case planetName===planet[1][0]:
                message = 'If you were on Neptune, you would weigh ' + result + ' lbs!';
                break;
            case planetName===planet[2][0]:
                message = 'If you were on Uranus, you would weigh ' + result + ' lbs!';
                break;
            case planetName===planet[3][0]:
                message = 'If you were on Saturn, you wouuld weigh ' + result + ' lbs!';
                break;
            case planetName===planet[4][0]:
                message = 'If you were on Jupiter, you would weigh ' + result + ' lbs!';
                break;
            case planetName===planet[5][0]:
                message = 'If you were on Mars, you would weigh ' + result + ' lbs!';
                break;
            case planetName===planet[6][0]:
                message = 'If you were on Moon, you would weigh ' + result + ' lbs!';
                break;
            case planetName===planet[7][0]:
                message = 'If you were on Earth, you would weigh ' + result + ' lbs!';
                break;
            case planetName===planet[8][0]:
                message = 'If you were on Venus, you would weigh ' + result + ' lbs!';
                break;
            case planetName===planet[9][0]:
                message = 'If you were on Mercury, you would weigh ' + result + ' lbs!';
                break;
            case planetName===planet[10][0]:
                message = 'If you were on Sun, you would weigh ' + result + ' lbs!';
                break;
            default:
                console.log('Enter your true weight and select a planet to find out how much you would weigh on that planet.');
                break;
        };
    };
    var msg = writeMessage();
    var post = document.getElementById("output");
    var elem = document.createElement('p');
    elem.textContent = msg;
    elem.value = msg;
    post.appendChild(elem);
};

// 7. Set the #calculate-button element's onclick method to use the handleClickEvent function.

// 8. Make it look nice by attaching  a style.css file to your index.html and writing some basic styling,
// feel free to add classes and id's to the HTML elements as you need,
// import.a google font and use it for some or all of the text on your page.


// Bonus Challenges
// 8. Reverse the drop down order so that the sun is first.

