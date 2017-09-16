//This script is used to measure the temperature that is received through the temperature sensor
// and enables us to graph it using the NPM package that was downloaded called 'barcli'

var five = require("johnny-five");
var board = new five.Board();

var Barcli = require("barcli");  //including the 'barcli' package so that we can use it to graph the temperatures that are received
                                 //through the sensor.

var celsiusGraph = new Barcli({  //including the celsius graph
    label : 'Celsius',  // Labelling the graph as "Celsius"      
    range : [6, 50]     // setting the range so that the values of the room will appear on the graph.
});

var kelvinGraph = new Barcli({
    label : 'Kelvin',
    range : [250, 325]
});

board.on("ready", function(){
    var temp = new five.Thermometer({ //Including the thermometer object from the Johnny-Five API
    controller: "TMP36",
    pin: "A0"
    });
    
    temp.on("data", function(){  //The 'data' event.  When data is received the functions in the 'data' event block will occur.
    kelvinGraph.update(this.kelvin);  //"this.kelvin" is the data of temperature in Kelvin, coming into the board. "Update()" is to make the graph update with every new data retrieved.
    celsiusGraph.update(this.celsius);
    });
    
});
