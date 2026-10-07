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

// these will store the pos of the last mouse press
let lastPressX;
let lastPressY;

//** color pallette *//

const myColors = {
  backgroundFull : "rgba(245, 230, 232, 1)",
  backgroundFeedback : "rgba(245, 230, 232, 0.2)",
  rippleStart: "rgba(170, 161, 200, 1)",
  rippleEnd:"rgba(25, 42, 81, 1)",
  }
// potential alternatives:  #0A100D = onyx, #B9BAA3 = ash grey


/** Setup create canvas & do some math on the base positions **/ 
function setup() {
  angleMode(DEGREES);
  createCanvas(displayHeight*0.8, displayHeight*0.8); // square based on display height..
  background(myColors.backgroundFull); // background
  
  
// These are controls to easily impact shape based on Variables
weights = { 
  growth: 0.5,
  life: 300,
  } 

// starting values
// arc(x, y, w, h, start, stop, [mode], [detail])

  ripple = {
    x:width/2, // will become mouseX
    y: height/2, // will become mouseY
    size:100,
    start:0,
    stop: 360,
    mode: 'OPEN',
    sizeStatic:100,
  };
}

function mousePressed() {
  lastPressX = mouseX;
  lastPressY = mouseY;
}

// draw runs at 60 fps
function draw() {  
  background(myColors.backgroundFeedback); // background
  ripple.x = lastPressX;
  ripple.y = lastPressY;
  ripple.size = ripple.size + weights.growth;
  drawRipple ()
}

function drawRipple() {
  noFill()
  stroke
  arc(ripple.x, ripple.y, ripple.size, ripple.size, ripple.start, ripple.stop, ripple.mode);
}

