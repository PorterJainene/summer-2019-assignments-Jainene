var stringInput = process.argv[2];

function alternateCaps(string) {

    // Lower case each character of the string.
    string = string.toLowerCase();


    // Split the string into an array.
    var arrayOfCharacters = string.split("");

    // Go through each items of the array..
    for (var i = 0; i < arrayOfCharacters.length; i++) {

    // ...and if the index is odd...
    if (i % 2 == 1) {
        // .... Change the current item to a capitalized version, and store in the same place.
        arrayOfCharacters[i] = arrayOfCharacters[i].toUpperCase();
    }

    var modifiedString = arrayOfCharacters.join("");
    console.log(modifiedString);

    }

if (stingInput == undefined) {
    alternateCaps("Please type in a sentence surrounded by quotes after the node command.");
} else if (typeof stringInput == "string") {
    alternateCaps(stringInput);
}

}

alternateCaps(stringInput);