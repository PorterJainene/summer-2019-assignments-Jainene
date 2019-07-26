
//console.log(process.argv); note to send to terminal via node.


// Storing values from the terminal into firstNumber and secondNumber
var firstNumber = process.argv[2];
var secondNumber = process.agrv[3];

// Convert the strings from firstNumber/secondNumber to actual numbers.
firstNumber = parseInt(firstNumber);
secondNumber = parseInt(secondNumber);

// Define a function that takes two number and spits out a whole bunch of information about these two number to the console.
function mathify(number1, number2) {
    
    // Test if both variables actually hold numbers
    if(typeof number1 == "number") {
        
        if (typeof number1 == "number" && typeof number2 == "number")
        // Do math.
        var sum = number1 + number2;
        var difference = number1 - number2;
        var product = number1 * number2;
        var quotient = number1 / number2;
        // Report the results to the console.
        console.log("The sum of " + number1 + " and " + number2 + " is: ", sum);
        console.log("The difference of " + number1 + " and " + number2 + " is: ", difference);
        console.log("The product of " + number1 + " and " + number2 + " is: ", product);
        console.log("The quotient of " + number1 + " and " + number2 + " is: ", quotient);
        // If not numbers...
    } else {
        // Type out the errors.
        console.log("The value of number1 is not a number! Try Again!", "The datatype of number1 is " + typeof number1);
        console.log("The value of number1 is not a number! Try Again!", "The datatype of number2 is " + typeof number2);
    }

}
// Calling the function.
mathify(firstNumber, secondNumber);



/*
mathify(1000, 5);
mathify(40, .5);
mathify(.3403, .8503);
mathify(NaN, 10);
*/

