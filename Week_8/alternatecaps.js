var oldString = "This is the sentence that will be modified.";



var arrayOfCharacters = oldString.split("");

// Loop through arrayOfCharacters



for (var i = 0; i < arrayOfCharacters.length; i++) {


    // % 2 == 1 for odds and % 2 == 0 for evens
    if (i % 2 == 1)


/*   options
oldString.length;
arrayOfCharacters.length;
*/

    console.log ( arrayOfCharacters [i] );
    // var currentCharacter = arrayOf Characters[i];

    // Grabs original character from aray, capitalizes it, and updates the array of the same item.
    arrayOfCharacters[i] = arrayOfCharacters[i].toUpperCase();

}

/*
//                  index character
arrayOfCharacters[1] = "H";

arrayOfCharacters[3] = "S";

arrayOfCharacters[5] = "I";

arrayOfCharacters[7] = " ";

arrayOfCharacters[9] = "H";

console.log(arrayOfCharacters);

*/

var newString = arrayOfCharacters.join("")

console.log(newString);

/* else{
    continue; // once the loop reaches this, stop and go to the next loop
    break; // once the loop reaches this, stop the whole loop.
}
*/

