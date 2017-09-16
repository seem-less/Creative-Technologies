//This scripts adds a motor object and let's us control that motor via the REPL.

var five = require("johnny-five");
var board = new five.Board();

board.on("ready", function(){
   var motor = new five.Motor(3); //adding the motor object so that it can be controlled.
    
    this.repl.inject({ //including the motor object in the REPL so that it can be controlled directly via the CMD
        motor:motor
    });
});
