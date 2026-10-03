/**
 * river
 * Erica Mercier
 * 
 * text characters move through a curve defined by a bezier curve, like they're flowing through a river.
 */

// To make this happen, I need a few things: 
// 1) i need 2 similar curves that are separate from each other
// 2) my characters need to move 'down' the river without collision

"use strict";

// let's just start by creating a bezier curve
// info about the top shoreline

// calling varaibles so they exist
let shoreCurve;
let weights;


const myColors = {
  background: "#D6D5C9", // dust grey
  shore: "#7796CB", // wisteria blue
  water: "#5C81C1", // glaucous
// potential alternatives:  #0A100D = onyx, #B9BAA3 = ash grey
}


// create canvas
function setup() {
  createCanvas(displayHeight, displayHeight); // square based on display height..
  background(myColors.background); // background
  
// controls to easily impact shape.
weights = { // to easily control the weight of movement
    shoreRandom: 0.04, // % random of height/width for the shore curves
    shoreMargin: 0.4, // how far from the origin can the shore be before randomization
    secondShore: height*0.15, // the distance between both shores, also influenced by random
    secondShoreRandom: 0.02,
  } 

  shoreCurve = { // this will define the curve using the weights above.
    startX: height*weights.shoreMargin, // not adding random allows to always see the curve and keep the same general shape
    startY: height*weights.shoreMargin+random(-1*weights.shoreRandom*width, weights.shoreRandom*height),
    endX: height*(1-weights.shoreMargin)+random(-1*weights.shoreRandom*width, weights.shoreRandom*height),
    endY: width*(1-weights.shoreMargin), /// not adding random to always see the curve and keep the same general shape
    
    control1X: width*weights.shoreMargin+random(-1*weights.shoreRandom*width, weights.shoreRandom*height),
    control1Y: height*(1-weights.shoreMargin)+random(-1*weights.shoreRandom*width, weights.shoreRandom*height),
    control2X: width*(1-weights.shoreMargin)+random(-1*weights.shoreRandom*width, weights.shoreRandom*height),
    control2Y: height*weights.shoreMargin+random(-1*weights.shoreRandom*width, weights.shoreRandom*height)
};
}


// draw runs at 60 fps
function draw() {  
  background(myColors.background); // background
  drawShoreline() // displays the shoreline
}

/**
 * Displays the shoreline 
 */
function drawShoreline() {
  push();
  stroke(myColors.shore);
  strokeCap(PROJECT);
  noFill()
  strokeWeight(10);
  bezier( // this is the control curve
    shoreCurve.startX, shoreCurve.startY,    // starting point
    shoreCurve.control1X, shoreCurve.control1Y,    // first control point
    shoreCurve.control2X, shoreCurve.control2Y, // second control point
    shoreCurve.endX,shoreCurve.endY    // ending point
  );
   bezier( // this is the second shore
    shoreCurve.startX-weights.secondShore, shoreCurve.startY-weights.secondShore,  // starting point
    shoreCurve.control1X-weights.secondShore, shoreCurve.control1Y+weights.secondShore,    // first control point
    shoreCurve.control2X-weights.secondShore, shoreCurve.control2Y-weights.secondShore, // second control point
    shoreCurve.endX-weights.secondShore,shoreCurve.endY+weights.secondShore   // ending point
  );
  pop();
}
