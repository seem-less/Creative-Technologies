var spot = {
  x: 200,
  y:300,
  d:50,
  t:100
};

function setup(){
  createCanvas(1024, 540);
  background(255);
  frameRate(2);
};

function draw(){
  spot.x = random(0,1024);
  spot.y = random(0,540);
  spot.t = random(0,100);
  noStroke();
  fill(0,0,200, spot.t);
  ellipse(spot.x, spot.y, spot.d);
  console.log(spot.x);
}















// var spot = {
//     x : 200,
//     y : 200,
//     d : 40
// }
//
// function setup() {
//   createCanvas(1024, 600);
//   background(255);
//   frameRate(2);
// };
//
// function draw() {
//   noStroke();
//   spot.x = random(0, 1024);
//   spot.y = random(0, 600);
//   spot.d = random(0, 200);
//   fill(random(0,255), random(0,255), random(0,255));
//   ellipse(spot.x, spot.y, spot.d);
// };
