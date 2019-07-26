
// Takes in the two strings, concatenates them and console logs the result.
function concatSentence (string1, string2) {
    console.log(string1 + string2);
}

concatSentence ("$","10.50");
concatSentence ("100", "C")

function contactItself(string1, string2){
    concatSentence(string1, string2);
    concatSentence(string2, string1);

}

contactItself("ra","dar")

/* Parameters and Arguements

function functionName(parameter1, parameter2) {


}

*/