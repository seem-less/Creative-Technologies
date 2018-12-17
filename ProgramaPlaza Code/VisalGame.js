//Visal's ball searching game editted for ProgramaLaPlaza Madrid

var subSec = 0;							// Creating a timer, this will subtract by 1 second
var win = false;						// Check if there is a win
var timer = 0;							// Value of timer in second 
var dotY, dotX;
var moveSpeed = 6;

var boldness = 5;						// The radius of the slave dot
var tStart = 0;							//

var g = {								// Number of dots in the grid
	x: 10,
	y: 10
}

  var s = {								// Value of the space for each dot
	x: 192/g.x,
	y: 157/g.y
}

var pd = 2;								// Length of the padding dots

var h = {								// Hidden position of the expecting dot
	x: 1,
	y: 1
}

var ar = {								// Scanner pole position
	x: 192/2,
	y: 157/2
}

function setup(){
  api.tracking.connect();
  
	createCanvas(windowWidth, windowHeight);				// 700 because to make things fit and fast
	h.x = round(random(1, g.x));
	h.y = round(random(1, g.y));
	//timer = prompt("Number of time in second");	
	timer = 60; //should be set to 2-3 minutes for the time that the sketch is shown in madrid
}

function draw(){
  
	time();
	var timeLeft = timer - subSec;		// Set timing - 1 second from the function
	background('#232323');				// Set background to light black
	
	if(timeLeft < 1){
		background('#f7f7f7');

		strokeWeight(2);
		stroke('#ed225d');
		fill('#f7f7f7');
		rect(20, 50, 150, 70, 50, 0, 50, 0);

		strokeWeight(5);
		stroke('#848484');

		textFont('Arial');
		textAlign(CENTER);

		textSize(20);
		//fill('#848484');
		text('Game Over!', windowWidth/2, (windowWidth/2-5));
	
		
	} else if(win == true){
		background('#f7f7f7');

		strokeWeight(2);
		stroke('#ed225d');
		fill('#f7f7f7');
		rect(20, 50, 150, 70, 50, 0, 50, 0);

		strokeWeight(5);
		stroke('#848484');

		textFont('Arial');
		textAlign(CENTER);

		textSize(20);
		fill('#848484');
		text('You Won!', windowWidth/2, (windowWidth/2-5));
	} else{
		var ballPos = "(" + h.x + ", " + h.y + ")";
		var ballNow = "(" + dotX + ", " + dotY + ")";

		textSize(5);
		textAlign(CENTER);

		fill('white');
		textFont('Georgia');
		text('Time: ', 90, 6);

		fill('red');
		text(timeLeft, 108, 6);

		fill('white');
		text('Balls Left: ', 90, 15);
		text(pd, 108, 15);

		text('Ball\'s Position: ', 55, 26);
		text(ballPos, 78, 26);

		text('Current Position: ', 118, 26);
		text(ballNow, 148, 26);

//keyboard usage here
		// if (keyIsDown(LEFT_ARROW)) {		// When the left arrow pressed down
		//   ar.x -= moveSpeed;						// Change the x value by -16
		// }

		// if (keyIsDown(RIGHT_ARROW)) {		// When the right arrow pressed down
		//   ar.x += moveSpeed;						// Change the x value by +16
		// }

		// if (keyIsDown(UP_ARROW)) {			// When the up arrow pressed down
		//   ar.y -= moveSpeed;						// Change the y value by -16
		// }	

		// if (keyIsDown(DOWN_ARROW)) {		// When the down arrow pressed down
		//   ar.y += moveSpeed;						// Change the y value by +16
		// } 	
		
		//tracking usage here
		
		var blobs = api.tracking.getBlobs();
		if(blobs.length > 0){
  		//console.log(blobs[0].x);
  		ar.x = blobs[0].x;
  		ar.y = blobs[0].y;
		

  		for(var l = 1; l < g.y; l++){												// looping number of row
  			dotX = Math.round(map(ar.x, 0, windowWidth, 0, g.x));							// converting ar.x to number of dots in x direction
  			dotY = Math.round(map(ar.y, 0, windowHeight, 0, g.y));							// converting ar.y to number of dots in y direction
  
  			var y = l * s.y;														// setting space value by the number of l
  			for(var i = 1; i < g.x; i++){											// looping each dot in a row
  				var x =  i * s.x;													// setting space value by the number of i
  				var gap = {															// calculating the padding
  					Xi: dotX - pd,
  					Xa: dotX + pd,
  					Yi: dotY - pd,
  					Ya:dotY + pd
  				};
  				if((gap.Xi < i && i < gap.Xa) && (gap.Yi < l && l < gap.Ya)){		// if minimum X < i < maximum X and minimum Y < l < maximum Y
  					if(i == h.x && l == h.y){										// if any padding dot equal to the hidden
  						if(pd > 1){
  							pd--;													// take one column out
  							h.x = round(random(1, g.x-2));
  							h.y = round(random(1, g.y-2));
  						} else{														// need alert system
  							pd = 1;
  							win = true;
  						}
  					}
  					fill('#36afff');												// fill padding with yellowish
  					strokeWeight(0);												// set stroke weight to 0 which looks like no stroke
  					ellipse(x, y, boldness, boldness);								// make an ellipse
  					if(i == dotX && l == dotY){										// this is the exact dot value
  						fill('#36afff');											// fill it with blue
  						ellipse(x, y, 10, 10);										// make a big ellipse
  						strokeWeight(3);											// add a thick stroke 
  						stroke(66, 134, 244, 50);									// make a blue color with transparency
  
  						stroke('white');
  						line(0,0, x, y);											// create a line at the top left angle
  						line(700,0, x, y);											// create a line at the top right angle
  						line(0,560, x, y);											// create a line at the bottom left angle
  						line(700,560, x, y);										// create a line at the bottom right angle
  					}
  				} else {															// if the nothing matches the padding dot
  					noStroke();														// make no stroke
  					fill('#9dac60');												// fill with blue
  					ellipse(x, y, 2,2);												// create a normal dot with a low thickness
  				}
  			}
  		}
		}
	}
}

function time(){																	// Timing function for the timer and will return 1 second
	var cur = second();
	if(cur - tStart != 0){
		subSec += 1;
	} else {
		subSec += 0;
	}
	tStart = cur;
}
