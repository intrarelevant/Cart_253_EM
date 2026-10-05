/**
 * string
 * Erica Mercier
 * 
 * 
 */

// when the user clicks, a number of lines appear and stay on the canvas at an angle
// each click changes the color
// the angle is always at a 45, 90, 135, 180 degree angle & depends on the relative mouse position

"use strict";

//** calling variables so they exist *//

//** color pallette *//

const myColors = {
  background: "#DFD9E2",
  option1: "#592941", // these options will be called later in colorArray
  option2: "#F8F32B",
  option3: "#EA8C55",
  option4: "#065A82"
}

let colorArray;
let colorChoice;

/** Setup create canvas & do some math on the base positions **/ 
function setup() {
  createCanvas(displayHeight - 0.2 * displayHeight, displayHeight - 0.2 * displayHeight);

 colorArray = [myColors.option1, myColors.option2, myColors.option3, myColors.option4]; // defined above
 colorChoice = random(colorArray); // this will need to be called again outside of setup
 background(myColors.background);
}

function draw() {
  stroke (colorChoice)
  point (height/2, width/2)
}

