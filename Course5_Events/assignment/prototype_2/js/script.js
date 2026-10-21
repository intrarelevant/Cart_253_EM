/**
 * prototype for a music system
 * Erica Mercier
 * 
 * when clicking, we draw a staff with a musical character 
 */

"use strict";

//** calling variables so they exist *//
let weights;
let shape;
let countSegments = 0;
let shapeExist = false;
let displayHelpText = true;
let char = ['𝄢','𝄞','♭','♮','♯','𝄁'];

// these will store the pos of the last mouse press
let lastPressX;
let lastPressY;

//** color pallette *//

const myColors = {
  backgroundFull : "#F0EFF4",
  mainLight: "#9E829C",
  mainDark:"#291528",
  }
// potential alternatives:  #0A100D = onyx, #B9BAA3 = ash grey

/** Setup create canvas & do some math on the base positions **/ 
function setup() {
  angleMode(DEGREES);
  createCanvas(displayHeight*0.8, displayHeight*0.8); // square based on display height..
  background(myColors.backgroundFull); // background
  
// These are controls to easily impact shape based on variables
weights = { 
  sizeIncrement: 1,
  shapeRandom:35,
  numSegments: 3
  } 

// starting values

  shape = {
    x:width/2, // will become mouseX
    y:height/2, // will become mouseY
    xNote: height/2,// will become mouseX
    yNote:height/2, // will become mouseY
    peakX: width/2,
    peakY: width/2,
    size: 40,
    char:['𝄞']
    
  };
}

// when the mouse button is pressed, set the shape location
// the shape's peak will be 
function mousePressed() {
  shapeExist = true; 
  displayHelpText = false;
  shape.x = mouseX;
  // the shape stays near one of numsegment start points
  shape.y = Math.round(map(mouseY, 0, height, 0, weights.numSegments))/weights.numSegments*height*0.90+random(-1*weights.shapeRandom, weights.shapeRandom);
  shape.peakX = mouseX;
  // this equation is so that the bezier curve is at the mousexy correctly
  shape.peakY = (8*mouseY - shape.y - shape.y) / 6;
  shape.xNote = mouseX;
  shape.yNote = mouseY;
  countSegments = countSegments+1;
  shape.char = random(char)
}

function mouseReleased() {
  shapeExist = false; 
}

// draw runs at 60 fps
function draw() {  
  if (shapeExist==true) { // when the mouse is pressed, this is set to TRUE
    drawShape();
    displayHelpText == false;
    }

    if (countSegments > 12) {
    background(myColors.backgroundFull); // background
    countSegments = 0;
    }

  }
  
function drawShape() {
  push() // first section draws the bezier curve
  stroke(myColors.mainDark);
  noFill()
   bezier( // this is the second shore
    0, shape.y,  // starting point
    shape.peakX * 2 / 3, shape.peakY,  // first control point
    width-(width-shape.peakX) * 2 / 3, shape.peakY,  // second control point
    width, shape.y   // ending point
  );
  pop()
  push()
  stroke(myColors.mainLight);
  textSize(shape.size)
  text(shape.char, shape.xNote, shape.yNote)
  pop()
}