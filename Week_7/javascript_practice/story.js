var randomNumber = Math.floor() * 4 );
randomNumber = Math.floor(randomNumber);
console.log(randomNumber);

var vehicle = "bus";
var accident = "";
var tardinessMinutes =  0; // minutes


//This decides what the output is based on the variable vehicle.


if (vehicle == "bus") {
    console.log("John Takes the bus.");
    tardinessMinutes = tardinessMinutes + 5;
} else if (vehicle == "car") {
    console.log("John Takes his car.");
    tardinessMinutes = tardinessMinutes + 1;
} else if (vehicle == "carpet") {
    console.log("John Takes his magic carpet.");
} else {
    console.log("John doesn't know what to commute on.");
    tardinessMinutes = tardinessMinutes + 1000;
}


if (accident == "tire flat") {
    if (vehicle == "car")
        console.log("John has a flat, but luckily he had a spare tire, he is a little late to work.");
        tardinessMinutes = tardinessMinutes + 10;
} else if (vehicle == "bus") {
    console.log("John bus tire popped off and left John stranded, the next bus came 3 hours later.");
    tardinessMinutes = tardinessMinutes < 15)
}
} else {
    console.log("John's morning was the usual.");
    tardinessMinutes = tardinessMinutes - 3
}

if (ardinessMinutes >= 15) {
    console.log("John arrived" + tardinessMinutes + " minutes late. to work, He was fired on the spot.");

} else if ( tardinessMinutes > 0 && tardinessMinutes < 15) {
    console.log("John arrived a litte late, he dodged his boss's fury.");
} else {
    console.log("John arrived on time, thans to a eventless commute.");
}


