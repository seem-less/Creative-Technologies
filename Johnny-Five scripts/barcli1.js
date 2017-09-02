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
