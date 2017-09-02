var five = require("johnny-five");
var board = new five.Board();

board.on("ready", function(){

	var myLed2 = new five.Led(2);
	var myLed4 = new five.Led(4);
	var myLed6 = new five.Led(6);
	var myLed9 = new five.Led(9);

	this.repl.inject({
		myLed2 : myLed2,
		myLed9 : myLed9
	});

	myLed4.blink(50);
	myLed6.pulse(500);

});
