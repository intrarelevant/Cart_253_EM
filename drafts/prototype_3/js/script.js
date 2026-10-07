/**
 * sound bowl
 * Erica Mercier
 * 
 * when the bell goes to the edge, it triggers a gong 
 */

// there are a few boxes or 'chimes.. 
// when the user moves the mouse they determine the direction of the 'wind'

// https://p5js.org/tutorials/coordinates-and-transformations/

"use strict";

//** calling variables so they exist *//

let w;
let chime;

//** color pallette *//


/** Setup create canvas & do some math on the base positions **/ 
function setup() {
  createCanvas(displayHeight - 0.2 * displayHeight, displayHeight - 0.2 * displayHeight, WEBGL);
  angleMode(DEGREES);

// weights will be the controls for various aspects of the drawing // 

  w = {
    chimeRotation: 25,
    chimeShear: 30,
  };
}


function draw() {
  background(200);
  // Enable orbiting with the mouse.
  orbitControl();
  lights();
  drawChimes();
}


function drawChimes() {
  push()
  let chimeYrotation = map(mouseX, 0, width, -1*w.chimeRotation, w.chimeRotation); // based on the width, remap to a max rotation within 50 degrees
  rotateY(chimeYrotation);
  rotateX(10); // just so I can see the side
  shearX(map(mouseX, 0, width, -1*w.chimeShear, w.chimeShear));
  box(40, 600, 40);
  model (chime);
  pop()
}