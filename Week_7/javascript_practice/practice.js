/* Multi Line comment*/

// Single line comment


//Console log Function
//console.log("Hello World");

// Numbers, Text, Booleans

// Datatypes
// Booleans

true;
false;


// Numbers
1000;
999;
10;

// Text
"This is a sentence";
'This is another sentence';

// Variables
var mySpecialNumber =100;

// Calling: Get the value of the variable you are "calling"
var anotherVariable = mySpecialNumber;

anotherVariable = 600;

//assignment = value

mySpecialNumber;

console.log( "Before I updated anotherVariable", anotherVariable);

anotherVariable = 1000;

console.log ( "After I updated anotherVariable",anotherVariable);

console.log ( "Value 1:", 600, "Value 2:", 1000);




// Math
// Basic math functions (Math Operators) + - / * %

var myNumber = 1000 + 500;

console.log(myNumber);

var newNumber = myNumber + 1000;

console.log(newNumber);

// The computer runs the stuff on the right side of the equals sign first.
//newNumber = newNumber + myNumber;


var divided = 1000 / 200;

var multiplied = 500 * 10;

var subtraction = 10 - 1;

console.log( multiplied / subtraction);


var order = 1000 * 20 - 10 / 3;

// 20000 - 10/3;
// 20000 - 3.333;
// 19996.6

//Var order = ( multiplied + subtraction) / 3;

// 500

console.log("The value of order", order); 



if (true) {  
    console.log("I ran because this if statement allowed me to run");

}

if (true) {
    console.log("it is raining!");
}


if (true) {
    console.log ("This will run if true");
} else if (false) {
    console.log ("This will run if false");
} else {
    console.log ("Nothing was true, so I will run instead.");
}
    


// if 
// else if
// (optionally) else

var isItRaining = true;
var isItSunny = false;

if (isItRaining) {
    console.log("Make sure to take your umbrella!");
} else {
    console.log("Enjoy your day!");
}

if (isItSunny) {
    console.log("Wear sunscreen");
}


// Conditional Logic

if (1) {
    console.log ("hello!");

}

// 0 "" undefined null NaN are falsies.

// ==, !=, &&, ||, <=, >=, <, >  are comparison operators.

// EQUAL TO: ==

if ( 100 == 100) {
    console.log("Double Equal");


}

// NOT EQUAL TO: != note-both sides cannot be the same for this to be true

if ( 100 != 99 ) {
    console.log("Not equal");

}


// AND: && note-only booleans

if ( true && false) {
    console.log("Both True");

}

// OR: || note: Either side has to be true

if ( false || false) {
    console.log("Either is True")

}

// Flip Boolean: ! NOT

!true
!false

// Math Lesser or Equal <=

if ( 100 <= 50) {
    console.log("Lesser Than");

}

if (-100 <= "Hello"){
    console.log("Lesser Than");
}


// MATH Greater Than or Equal To >=, >

if ( 100 >= 59) {
    console.log ("Greater than or equal");
}

if ( 100 > 100) {
    console.log("Greater than");
}

//Nesting


if (true){

    var var1 = 100;

    if (false) {}
        var var2 = 200;

    var var3 = 300;

    if (true) {
        
        var var4 = 400;

        if (false) {

            var var5 = 500;
        }
    }

}


