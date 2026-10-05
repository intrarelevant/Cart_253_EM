/**
 * tartan
 * Erica Mercier
 * 
 * over time, generates a digital tartan
 */

// when the user clicks, a number of lines appear and stay on the canvas at an angle

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
let lineorigin

/** Setup create canvas & do some math on the base positions **/ 
function setup() {
  createCanvas(displayHeight - 0.2 * displayHeight, displayHeight - 0.2 * displayHeight);
  frameRate(12);
 colorArray = [myColors.option1, myColors.option2, myColors.option3, myColors.option4];
 background(myColors.background);
}

function draw() {
  strokeWeight(2)
  colorChoice = random(colorArray);
  stroke (colorChoice);

// change the color if the mouse is pressed
  if (mouseIsPressed === true) {
    noStroke()
  }
// check if the user's mouse is at the top left of the canvas and draw a line
 if (mouseX < width/2 && mouseY < height/2) {
  line (mouseX + (width/2), mouseY+(height/2), mouseX, mouseY)
 }
 // bottom left
 else if (mouseX < width/2 && mouseY > height/2) {
  line (mouseX, mouseY, mouseX+(width/2), mouseY-(height/2))
 }
 // bottom right
 else if (mouseX > width/2 && mouseY > height/2) {
  line (mouseX, mouseY, mouseX-(width/2), mouseY-(height/2))
 }
 // top right
 else if (mouseX > width/2 && mouseY < height/2) {
  line (mouseX, mouseY, mouseX-(width/2), mouseY+(height/2))
 }


}

