//This script demonstrates using a button to switch a button on and off
//using "press" and "release" events from the Button API @ Johnny-five.io

var five = require("johnny-five");
var board = new five.Board();

board.on("ready", function() {
    var button = new five.Button(5);
    var led = new five.Led(9);
    
    button.on("press", function() {
        console.log('button pressed!');
        led.on();    
  });
  
    button.on("release", function(){
        console.log('button released!');
        led.off();
  });
  
});
