var spot = {
  x : 200,
  y : 150,
  d : 50
}

var aye = {
  x : 0,
  y : 0
}

var col ={
  r : 0,
  g : 0,
  b : 0
}

var speed = 5;

function setup(){
  createCanvas(1024, 540);
  background(255);
  fill(0,255,0);
  quad(0,0, spot.x, spot.y, width, height, 0, height);
  frameRate(100);
}


function draw(){
  fill(255);
    if (mouseX > spot.x-25 && mouseX < spot.x+25 && mouseY > spot.y-25 && mouseY < spot.y+25){
      // aye.x += speed;
      // if (aye.x > width){
      //   aye.x = width;
      //   aye.y += speed;
      //   if (aye.y > height){
      //     aye.y = height;
      //   }
      // }
      aye.x = random(0,1024);
      aye.y = random(0,540);
      col.r = random(0,255);
      col.g = random(0,255);
      col.b = random(0,255);
      stroke(col.r,col.g,col.b);
      line(spot.x, spot.y, aye.x, aye.y);
      fill(255,255,0);
    }
  ellipse(spot.x, spot.y, spot.d);

}
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
// // var linep = {
// //   x1 : 0,
// //   y1 : 0
// // };
// //
// // var spot = {
// //   x : 800,
// //   y : 150,
// //   d : 50
// // };
// //
// // function setup(){
// //   createCanvas(1024, 540);
// //   background(0,0,255);
// //   fill(0,255,0);
// //   quad(0,0,spot.x,spot.y, width, height, 0, height);
// // }
// //
// // function draw(){
// //   fill(255);
// //     if(mouseX > spot.x-spot.d/2 && mouseX < spot.x+spot.d/2  && mouseY > spot.y-spot.d/2 && mouseY < spot.y+spot.d/2){
// //       fill(255,255,0);
// //       linep.x1 += 2;
// //         if(linep.x1>width){
// //           linep.x1 = width;
// //           linep.y1 += 2;
// //           if(linep.y1 > height){
// //             linep.y1 = height;
// //           }
// //         }
// //         stroke(255,255,0)
// //         line(spot.x, spot.y, linep.x1, linep.y1);
// //
// //     }
// //     ellipse(spot.x, spot.y, spot.d);
// // }
// // //
// // //
// // //
// // //
// // //
// // //
// // // // var spot = {
// // // //   x:800,
// // // //   y:150,
// // // //   d:50,
// // // //   r:25
// // // // }
// // // //
// // // // var line1 = {
// // // //   x1:0,
// // // //   y1:0,
// // // //   x2:0,
// // // //   y2:0,
// // // // }
// // // //
// // // // function setup() {
// // // //   createCanvas(1024,540);
// // // //   background(0,0,255);
// // // //   fill(0,200,50);
// // // //   quad(0,0,spot.x,spot.y,1024,540, 0,windowHeight);
// // // // };
// // // //
// // // // function draw() {
// // // //   ellipseMode(CENTER);
// // // //
// // // //   fill(255);
// // // //   noStroke();
// // // //   if (mouseX > spot.x-spot.r && mouseX < spot.x+spot.r && mouseY > spot.y-spot.r && mouseY < spot.y+spot.r){
// // // //     fill(255, 205, 0);
// // // //     line1.x2 += 5;
// // // //         if (line1.x2 > 1024){
// // // //           line1.x2 = 1024;
// // // //           line1.y2 += 5;
// // // //           if (line1.y2 > 540){
// // // //             line1.y2 = 540;
// // // //           }
// // // //         }
// // // //     stroke(255, 205, 0);
// // // //     line(spot.x, spot.y, line1.x2, line1.y2);
// // // //   }
// // // //   ellipse(spot.x, spot.y, spot.d);
// // // // };
