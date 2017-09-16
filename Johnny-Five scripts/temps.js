var five = require("johnny-five");
var board = new five.Board();

var Barcli = require("barcli");

var celsiusGraph = new Barcli({
    label : 'Celsius',
    range : [6, 50]
});

var kelvinGraph = new Barcli({
    label : 'Kelvin',
    range : [250, 325]
});

board.on("ready", function(){
    var temp = new five.Thermometer({
    controller: "TMP36",
    pin: "A0"
    });
    
    temp.on("data", function(){
    kelvinGraph.update(this.kelvin);
    celsiusGraph.update(this.celsius);
    });
    
});