// Loops

/* Infinite Loops
while (true) {

}
*/


/*Loops once
var counter = true;

while (counter) {

    counter = false;
}
*/


/* To loop backwards.
var counter = 10;

while (counter >= 0) {
    
    console.log("This is loop number " + counter + ".");
    
    counter = counter - 1;
    
} 
*/

/*
var counter = 10;

while (counter >= 0) {
    console.log("While Loop: This is loop number " + counter + ".");

    counter = counter - 1;


}
// For loops
for (var counter = 0; counter <= 10; counter = counter + 1) {

    console.log("For Loop: This is loop number " + counter + ".");

}

// Shorter for Loop
for (var i=0; i < 100; i++) {

    console.log(i);

}
*/
// Counting the amount of letters in a string.
/*
var string = "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?";
var lCount = 0;

for (var i = 0; i < string.length; i++) {

    console.log("Character: " + string[i]);

    if (string[i] == "l" || string[i] == "L") {
        lCount = lCount + 1;
    }

}
*/

//console.log("The string " + " has " + lCount + " l's in it.");

function letterCounter(string, lowercase) {

    var letterCounter = 0;

    var uppercase = lowercase.toUpperCase();

    for (var i = 0; i < string.length; i++) {

    if (string[i] == lowercase || string [i] == uppercase) {
        letterCounter++;

    }

}
console.log("We found " + letterCounter + " " + lowercase + "letters inside the text.");
}

letterCounter("Hello world.", "o", "O");
letterCounter("Goodbye world", "g", "G");