var five = require("johnny-five");
var board = new five.Board();

board.on("ready", function(){
   var motor = new five.Motor(3);
    
    this.repl.inject({
        motor:motor
    });
});