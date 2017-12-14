function setup(){
    createCanvas(1024, 540);
    background(0);
    frameRate(10);
}

function draw(){

  for (var x = 0; x < width; x+=50){ // variable initialization, exit condition, incrementation function
    for (var y = 0; y < height; y+=50){
      fill(random(0,255),random(0,255),random(0,255));
      ellipse(x, y, 25);
    }
  }
}
