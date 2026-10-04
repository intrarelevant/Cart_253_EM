/**
 * river
 * Erica Mercier
 * 
 * text characters move through a curve defined by a bezier curve, like they're flowing through a river.
 */

// To make this happen, I need a few things: 
// 1) i need 2 similar curves that are separate from each other DONE
// 2) my characters need to move 'down' the river without collision

"use strict";

//** calling variables so they exist *//

let shoreCurve;
let weights;
let waterPos;

//** color pallette *//

const myColors = {
  background: "#D6D5C9", // dust grey
  shore: "#7796CB", // wisteria blue
  water: "#5C81C1", // glaucous
  debug: "#0A100D" // onyx
// potential alternatives:  #0A100D = onyx, #B9BAA3 = ash grey
}

/** Setup create canvas & do some math on the base positions **/ 
function setup() {

  createCanvas(displayHeight, displayHeight); // square based on display height..
  background(myColors.background); // background
  angleMode(DEGREES); // to calculate the rotation style
  
// These are controls to easily impact shape based on Variables
weights = { 

    shoreRandom: 0.04, // % random of height/width for the shore curves
    shoreMargin: 0.35, // how far from the origin can the shore be before randomization
    secondShore: height*0.25*random(0.95, 1.05), // the distance between both shores, also influenced by random
  } 

// this will define the curve using the weights above.

  shoreCurve = { 
    startX: height*weights.shoreMargin, // not adding random allows to always see the curve and keep the same general shape
    startY: height*weights.shoreMargin+random(-1*weights.shoreRandom*width, weights.shoreRandom*height),
    endX: height*(1-weights.shoreMargin)+random(-1*weights.shoreRandom*width, weights.shoreRandom*height),
    endY: width*(1-weights.shoreMargin), /// not adding random to always see the curve and keep the same general shape
    
    control1X: width*weights.shoreMargin+random(-1*weights.shoreRandom*width, weights.shoreRandom*height),
    control1Y: height*(1-weights.shoreMargin)+random(-1*weights.shoreRandom*width, weights.shoreRandom*height),
    control2X: width*(1-weights.shoreMargin)+random(-1*weights.shoreRandom*width, weights.shoreRandom*height),
    control2Y: height*weights.shoreMargin+random(-1*weights.shoreRandom*width, weights.shoreRandom*height)
};

// starting position for the water
  waterPos = {
    x: shoreCurve.startX-(0.5*weights.secondShore), // halfway between both curves
    y: 100,
    size: 20,
  };
}

// draw runs at 60 fps
function draw() {  
  background(myColors.background); // background
  drawShoreline() // displays the shorelines
  debugDrawPoints () // shows the points 
  drawWater ()
  

}

/**
 * Displays the shorelines
 */
function drawShoreline() {
  push();
  stroke(myColors.shore);
  strokeCap(SQUARE);
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
    (shoreCurve.control1X-weights.secondShore), shoreCurve.control1Y+weights.secondShore,    // first control point
    shoreCurve.control2X-weights.secondShore, shoreCurve.control2Y-weights.secondShore, // second control point
    shoreCurve.endX-weights.secondShore,shoreCurve.endY+weights.secondShore   // ending point
  );
  pop();
}

/**
 * the wave character
 */

function drawWater() {
  push();
  textSize(waterPos.size);
  text('⌇', waterPos.x, waterPos.y);
  pop();
}


/**
 * function to debug and show the points
 */
function debugDrawPoints () {
  push();
  stroke(myColors.debug);
  noFill()
  strokeWeight(3);
// first curve
    point(shoreCurve.startX, shoreCurve.startY);  // starting point
    point(shoreCurve.control1X, shoreCurve.control1Y);    // first control point
    point(shoreCurve.control2X, shoreCurve.control2Y); // second control point
    point(shoreCurve.endX,shoreCurve.endY);    // ending point
// second curve
    point(shoreCurve.startX-weights.secondShore, shoreCurve.startY-weights.secondShore);  // starting point
    point(shoreCurve.control1X-weights.secondShore, shoreCurve.control1Y+weights.secondShore);    // first control point
    point(shoreCurve.control2X-weights.secondShore, shoreCurve.control2Y-weights.secondShore); // second control point
    point(shoreCurve.endX-weights.secondShore,shoreCurve.endY+weights.secondShore);   // ending point
  pop();
}


