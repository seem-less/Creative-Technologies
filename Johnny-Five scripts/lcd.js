var five = require("johnny-five");
var board = new five.Board();

board.on("ready", function(){
    
    var l = new five.LCD({
            pins: [8, 9, 10, 11, 12, 13]
        });
    var myString = "waseem";
    var myNumber = 102;
    var myBoolean = false;
    
    l.cursor(0,0);
    l.print("Name: "+ myString);
    l.cursor(1,0);
    l.print("How young?: "+ myNumber);
    
    
});
