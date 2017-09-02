// This script is used graph the values being received from a photoresistor to your console using the barcli NPM package.
// It also includes button events, if you have a button connected to the board.

var five = require("johnny-five");
var board = new five.Board();

var barcli = require("barcli");
var graph = new barcli({
    label: 'Photocell',
    range: [0, 1023]
});

board.on("ready", function(){
    var photocell = new five.Sensor("A1");
    var led = new five.Led(13);
    var button = new five.Button("A0");
    
      button.on("press", function() {
        console.log( "Button pressed" );
        led.on();          
  });

  button.on("release", function() {
    console.log( "Button released" );
    led.off();
  });
    
    photocell.on("data", function(){
        graph.update(this.value);
    });
});
