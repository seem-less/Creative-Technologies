var spot = {
  x : 0,
  y : 300
}

var speed = {
  x : 0,
  y : 0
}

function setup(){
    createCanvas(1024, 540);

}

function draw(){
    background(0);
    speed.x += 5;
    speed.y += 5;
    spot.x = speed.x;
    spot.y = speed.y;
    ellipse(spot.x, spot.y, 25);

    if (spot.x > width){
      speed.x = -speed.x;
    }
    if (spot.y > height){
      speed.y += -5;
      speed.x += -5;
    }


}
