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
  frameRate(24);
  
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

function mouseWheel(event) {
  shape.size += event.delta > 0 ? 1.5 : -1.5;
  weights.ShapeJitter += event.delta > 0 ? 50 : -50;
  frameRate += event.delta > 0 ? -1 : 1;
  displayHelpText == false;
}

// draw runs at 60 fps
function draw() {  
  
  if (shapeExist==true) { // when the mouse is pressed, this is set to TRUE
    drawShape();
    shape.x = mouseX;
    shape.y = mouseY;
    displayHelpText == false;
    }

  if (displayHelpText == true) {
    helpText()
  }
  }
  


function drawShape() {
  push()
  noFill();
  stroke(myColors.mainDark);
  textSize(shape.size-5)
  text('⭐︎', shape.x+random(weights.shapeJitter*-1,weights.shapeJitter), shape.y+random(weights.shapeJitter*-1,weights.shapeJitter))
  stroke(myColors.mainLight);
  textSize(shape.size)
  text('✢', shape.x+random(weights.shapeJitter*-1,weights.shapeJitter), shape.y+random(weights.shapeJitter*-1,weights.shapeJitter))
  pop()
}

function helpText() {
  push()
  noFill();
  stroke(myColors.mainLight);
  textSize(12)
  text('click, drag & scroll', 100, height/10*9)
  pop()
}