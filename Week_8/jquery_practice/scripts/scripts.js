console.log("Hello there!");

$(document).ready(function ()  {

    console.log("jQuery is ready!");

    // css jQuery Method
    $("p").css("font-size", "100px");

    $("body").css("color", "#777777");

    $("div")

    $("div").css("width", "400px");
    $("div").css("height", "400px");
    $("div").css("background-color", "red");
    $("div").css("border", "1px solid white");

    var array1 = [100, 1000, 10000];
    
    // Quick overview of Objects
    var object1 = {
        "name": "Jainene",
        "age": "34",
        "hair color": "brown",


    };
    // Accessing object properties
    console.log(object1["age"]);
    console.log(object1.age);

    $("#box").css({
        "background-color": "red",
        "border-radius": "25px",
        "margin-left": "100px",
    });

    $("#box").css("border", "");

    // End of css jQuery Method


    // HTML jQuery Method syntax --> !().html();
    jQuery("#box").html("<p>Hello World!</p>");

    $("#box p").css("color", "yellow");
    $("#box p").css("font-size", "24px");
    $("#box p").css("padding", "13px");

   // $("#box").html("<p>Taking over the world!</p>");
    // End HTML jQuery

    //jQuery Click Handler
    $("#change-bg").click(function () {
        
        $("#box").css("background-color", "green");


    

    });

    $("#change-bg").click(function () {
        $("#stop").css("background-color", "red");
        $("#yield").css("background-color", "yellow");
        $("#proceed").css("background-color", "green");

    });
    /*
    $("input").keypress( function (event) {

        if(event.which == 101){
            console.log("You pressed the E key");

            var currentMargin = $("#box").css("margin-left");
            console.log(currentMargin);

            c
            


        }
    
    console.log("Key Pressed");


});
*/


jQuery();
$();

// target.action(    callbackfunction (){} );

