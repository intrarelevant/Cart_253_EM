/**
 * sparkle drawing tool
 * Erica Mercier
 * 
 * click and drag to create particles
 */

"use strict";

//** calling variables so they exist *//
let weights;
let shape;
let shapeExist = false;
let displayHelpText = true;

// these will store the pos of the last mouse press
let lastPressX;
let lastPressY;

//** color pallette *//

const myColors = {
  backgroundFull : "#2F1B25",
  mainLight: "#A15E49",
  mainDark:"#4E3822",
  }
// potential alternatives:  #0A100D = onyx, #B9BAA3 = ash grey

/** Setup create canvas & do some math on the base positions **/ 
function setup() {
  angleMode(DEGREES);
  createCanvas(displayHeight*0.8, displayHeight*0.8); // square based on display height..
  background(myColors.backgroundFull); // background
  
// These are controls to easily impact shape based on Variables
weights = { 
  sizeIncrement: 1,
  shapeJitter:50
  } 

// starting values

  shape = {
    x:width/2, // will become mouseX
    y:height/2, // will become mouseY
    size:12,
  };
}

// when the mouse button is pressed, set the shape location
function mousePressed() {
  shapeExist = true; 
  displayHelpText = false;
  shape.x = mouseX;
  shape.y = mouseY;
}

function mouseReleased() {
  shapeExist = false; 
}

// draw runs at 60 fps
function draw() {  
  
  if (shapeExist==true) { // when the mouse is pressed, this is set to TRUE
    drawShape();
    shape.x = mouseX;
    shape.y = mouseY;
    displayHelpText == false;
    }

  }
  


  

function drawShape() {
  push()
  stroke(myColors.mainDark);
  noFill()
   bezier( // this is the second shore
    0, shape.y,  // starting point
    width/2, shape.y + 100,    // first control point
    width/2, shape.y - 100, // second control point
    width, shape.y   // ending point
  );
  
  pop()
}