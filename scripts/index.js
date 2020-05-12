//define translations
const keys = ['i', 'j', 'a', 'q', 'w', 'u', 'n', 'm', 'b', 'd', 'p', 'r', 'I', 'J', 'A', 'Q', 'W', 'U', 'N', 'M', 'B', 'D', 'P', 'R'];
const values = ['j', 'i', 'q', 'a', 'uu', 'w', 'm', 'nn', 'd', 'b', 'r', 'p', 'J', 'I', 'Q', 'A', 'UU', 'W', 'M', 'NN', 'D', 'B', 'R', 'P'];

//initiate T(ranslation) MAP
let tmap = new Map();

//test to make sure i didn't mess up with the arrays
if (keys.length === values.length) {
    //calculate length once
    let len = keys.length;

    //standard for loop stuff
    for (let i = 0; i < len; i++) {
        // set keys within map
        tmap.set(keys[i], values[i]);
    }
}

//define user input fields
let ott = document.querySelector('.ott');

//define default mode
let mode = 0;

//oh boy coding
translate = function(target) {
    //make an array with all the letters
    let stringArray = target.split('');

    //iterate through said array
    stringArray.forEach(function(letter, index) {
        // helps with preventing double translations
        let hasRun = false;

        //check to make sure it hasn't translated and the letter isn't a space
        if (letter !== " " || hasRun !== true) {
            //now iterate through the tmap we generated earlier
            tmap.forEach(function (value, key) {
                //return if we've translated
                if (hasRun) {
                    return;
                } else {
                    //check if the letter matches the current key/value pair
                    if (letter === key) {
                        //set the current array value to the translation value
                        stringArray[index] = value;

                        //set hasRun so we don't double translate
                        hasRun = true;
                        return;
                    } else {
                        //if it doesn't match, return and loop again
                        return;
                    }
                }
            })
        }
    })
    //return the final array as a string
    return stringArray.join('');
}

//main loop
testInput = function() {
    //grab user input
    let original = document.querySelector('.original');
    let translation = document.querySelector('.translated');

    //run the translation function and set it to the value of the output field
    translation.value = translate(original.value.toString());
}

//run everything when the button is clicked
ott.addEventListener("click", function() {testInput()});

