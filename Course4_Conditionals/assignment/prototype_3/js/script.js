/**
 * rain splatter
 * Erica Mercier
 * 
 * on click, a circle arc appears, expands, then disappears
 */

// To make this happen, I need a few things: 
// 1) i need 2 similar curves that are separate from each other DONE
// 2) my characters need to move 'down' the river without collision

"use strict";

//** calling variables so they exist *//
let weights;
let ripple;
let rippleExist = false;

// these will store the pos of the last mouse press
let lastPressX;
let lastPressY;

//** color pallette *//

const myColors = {
  backgroundFull : "rgba(3, 0, 39, 1)",
  backgroundFeedback : "rgba(3, 0, 39, 0.5)",
  rippleLight: "rgba(170, 161, 200, 1)",
  rippleDark:"rgba(25, 42, 81, 1)",
  }
// potential alternatives:  #0A100D = onyx, #B9BAA3 = ash grey


/** Setup create canvas & do some math on the base positions **/ 
function setup() {
  angleMode(DEGREES);
  createCanvas(displayHeight*0.8, displayHeight*0.8); // square based on display height..
  background(myColors.backgroundFull); // background
  
  
// These are controls to easily impact shape based on Variables
weights = { 
  growth: 0.2,
  life: 300,
  sizeRandom: 50,
  arcAngles: 0.4,
  } 

// starting values
// arc(x, y, w, h, start, stop, [mode], [detail])

  ripple = {
    x:width/2, // will become mouseX
    y: height/2, // will become mouseY
    size:50,
    start:0,
    stop: 360,
    mode: 'OPEN',
    sizeStatic:50,
    remaining: 0, 
  };
}

// when the mouse button is pressed, set the ripple location to the centre, and reset the size of the ripple
function mousePressed() {
  ripple.x = mouseX;
  ripple.y = mouseY; // set the centre of the circle to the mouse XY
  ripple.size = ripple.sizeStatic; // reset the h/w of the circle
  ripple.remaining = weights.life; // this becomes a timer of 300 frames
  ripple.start = random(0,20); // reset the angles
  ripple.stop = random(340,360);
  rippleExist = true; // draws the ripple
  
}

// draw runs at 60 fps
function draw() {  
  background(myColors.backgroundFeedback); // background
  


  if (ripple.remaining <= 0) { // if life is over, reset
      rippleExist = false;
      helpText()
    }
  
  if (ripple.start >= ripple.stop) // if the angle is the same, reset so it doesn't look a glitchy mess
    {rippleExist = false;
      ripple.remaining = 0;
    }

    if (rippleExist && ripple.remaining <= weights.life*0.9) // when 90% of lifespan is reached, add another arc
    {
    drawSecondRipple();
    }


if (rippleExist && ripple.remaining <= weights.life*0.3) // when 30% of life is reached, size is modulated by sine wave
    {
   ripple.size += weights.growth + cos(frameCount); // it can decrease

    }

  if (rippleExist==true) { // when the mouse is pressed, this is set to TRUE
    ripple.size += weights.growth + sin(frameCount);
    ripple.start += weights.arcAngles;  // range decreases for the arc
    ripple.stop += weights.arcAngles*-1; // same
    ripple.remaining--; // life reduces by 1 per frame
    drawRipple();
    }
  

  
  //debugText()
  }


function drawRipple() {
  push()
  noFill();
  stroke(myColors.rippleDark);
  arc(ripple.x, ripple.y, ripple.size + weights.sizeRandom, ripple.size+ weights.sizeRandom, ripple.start, ripple.stop, ripple.mode);
  pop()
}

function drawSecondRipple() {
  push();
  noFill();
  stroke(myColors.rippleLight);
  arc(ripple.x, ripple.y, ripple.size - weights.sizeRandom, ripple.size- weights.sizeRandom, ripple.start-46, ripple.stop-92, ripple.mode);
  pop();
}

function helpText() {
noFill();
stroke(myColors.rippleLight);
text('click anywhere...', 5, 100);
}
