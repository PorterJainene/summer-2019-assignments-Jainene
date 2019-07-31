$(document).ready( function () {

    // Start of story
    $("#dialog").html("<p>John wakes to get ready for work.</p>");
    // Makes choice buttons
    $("#choices").append('<button id="bus">John takes the bus</button>');
    $("#choices").append('<button id="car">John takes the car</button>');

    // Click Handler for bus button
    $("#bus").click(function () {
        $("#dialog").html("<p>John takes the bus.</p>");
        $("#choices").empty();
        $("#choices").append('<button id="flat">John\'s bus gets a flat tire.</button>');
        $("#choices").append('<button id="fast">John\'s bus speeds through the city.</button>');
        // Click Handler for flat tire
        $("#flat").click(function () {
            $("#dialog").html("<p>John's bus gets a flat tire, making him late to work, and as a result he is fired. John sues SFMTA and wins $1.6 million, and retires in the Bahamas.</p>");
            $("#choices").empty();
            $("#choices").append('<button id="business">John creates a business</button>');
            $("#choices").append('<button id="boat">John decide go on a boat trip</button>');
        });
        // Click Handler for fast bus
        $("#fast").click(function () {
            $("#dialog").html("<p>The bus hits a new world speed record at 160MPH and John ends up in the news as one of the survivors.</p>");
            // Adding an Image
            $("#dialog").prepend('<img src="images/bus.jpg" alt="Really Fast Bus" width="200px" height="200px" />');
            // Adding a list using JavaScript multiline string
            $("#dialog").append(
            "<ul>" +
                "<li></li>" +
                "<li></li>" +
            "</ul>");
            // Using Template Literals
            $("#dialog").append(
                `<ul>
                    <li></li>
                    <li></li>
                </ul>`);

            var string = `'
                <p>paragraph 1</p>
                <p>paragraph 2</p>
            `
            $("#choices").empty();
            $("#choices").append('<button id="book">John writes a book</button>');
            $("#choices").append('<button id="engineer">John studies bus mechanics.</button>');
        });
    });
    // Click Handler for car button
    $("#car").click(function () {
        $("#dialog").html("<p>John takes his car to work.</p>");
        $("#choices").empty();
        $("#choices").append('<button id="slow">John\'s car is out of nitro.</button>');
        $("#choices").append('<button id="carpool">John carpools to work.</button>');
        // Click Handler for out of nitro
        $("#slow").click();
        // Click Handler for carpooling
        $("#carpool").click();
    });

});
