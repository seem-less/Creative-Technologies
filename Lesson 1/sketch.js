function setup() {
  createCanvas(1024, 768);
  background(0);
}

function draw() {
  if (mouseIsPressed){ // The functions below occur when the mouse is pressed
    noStroke(); // takes out the outline of the circle.
    fill(255,0,0); // last parameter is transperency
    ellipse(mouseX, mouseY, 50); //using the mouse for the location of the ellipse
  }

}
