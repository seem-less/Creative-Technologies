var rect1 = {
  x : 400, // var rect1.x = 0;
  y : 200,// var rect1.y = 200;
  l : 50,
  w : 50
};

// var rect2 = {
//   x : 0,
//   y : 200,
//   l : 50,
//   w : 50
// };

var speed = 10;

var blue = 0;

function setup() {
  createCanvas(1024, 600);
}

function draw() {
  background(0,0,blue);
  blue = map(rect1.x, 0, width, 0, 255);
  rect1.x = rect1.x + speed;
  fill(255);
  rect(rect1.x, rect1.y, rect1.l, rect1.w);
  if(rect1.x > 800 || rect1.x < 400){       // && -> AND , || -> OR
    speed = speed * -1;
  }

    // if(rect1.x)
  // if(rect1.x < 0){
  //   rect1.x = speed;
  // }
}
