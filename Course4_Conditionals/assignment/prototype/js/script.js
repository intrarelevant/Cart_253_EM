/**
 * river
 * Erica Mercier
 * 
 * text characters move through a curve defined by a bezier curve, like they're flowing through a river.
 */

"use strict";

//** calling variables so they exist *//

let shoreCurve;
let weights;
let waterPos;

//** color pallette *//

const myColors = {
  background: "#9EA3B0",
  shore:  "#0D1F2D",
  water: "#546A7B",
  feedback: "rgba(158, 163, 176, 0.002)"
// potential alternatives:  #0A100D = onyx, #B9BAA3 = ash grey
}

/** Setup create canvas & do some math on the base positions **/ 
function setup() {

  createCanvas(displayHeight, displayHeight); // square based on display height..
  background(myColors.background); // background
  
// These are controls to easily impact shape based on Variables
weights = { 
    shoreRandom: 0.04, // % random of height/width for the shore curves
    shoreMargin: 0.35, // how far from the origin can the shore be before randomization
    secondShore: height*0.25*random(0.95, 1.05), // the distance between both shores, also influenced by random
  } 

// this will define the curve using the weights above.

  shoreCurve = { 
    startX: 75+height*weights.shoreMargin, // not adding random allows to always see the curve and keep the same general shape
    startY: height*weights.shoreMargin+random(-1*weights.shoreRandom*width, weights.shoreRandom*height),
    endX: 100+height*(1-weights.shoreMargin)+random(-1*weights.shoreRandom*width, weights.shoreRandom*height),
    endY: width*(1-weights.shoreMargin), /// not adding random to always see the curve and keep the same general shape
    
    control1X: width*weights.shoreMargin+random(-1*weights.shoreRandom*width, weights.shoreRandom*height),
    control1Y: height*(1-weights.shoreMargin)+random(-1*weights.shoreRandom*width, weights.shoreRandom*height),
    control2X: width*(1-weights.shoreMargin)+random(-1*weights.shoreRandom*width, weights.shoreRandom*height),
    control2Y: height*weights.shoreMargin+random(-1*weights.shoreRandom*width, weights.shoreRandom*height)
};

// to find the midpoint of the curve
shoreCurve.middleX = bezierPoint(shoreCurve.startX, shoreCurve.control1X, shoreCurve.control2X,shoreCurve.endX,0.5);
shoreCurve.middleY = bezierPoint(shoreCurve.startY, shoreCurve.control1Y, shoreCurve.control2Y,shoreCurve.endY,0.5);

// starting position for the water
  waterPos = {
    x: shoreCurve.startX-(0.5*weights.secondShore), // halfway between both curves
    y: 150,
    size: 30,
  };
}

// draw runs at 60 fps
function draw() {  
  background(myColors.feedback); // background

  // debugDrawPoints () // shows the points 
  drawShoreline() // displays the shorelines
  drawWater () // draws the character we want to move

// add some motion to the shore... 
shoreCurve.startX = shoreCurve.startX + random(0,2)*cos(frameCount*0.05);
shoreCurve.startY = shoreCurve.startY + random(0,2)*sin(frameCount*0.05);
shoreCurve.endX = shoreCurve.endX + random(0,2)*sin(frameCount*0.05)*-1;
shoreCurve.endY = shoreCurve.endY + random(0,2)*cos(frameCount*0.05)*-1;

// check if out of bounds & reset if so
if (waterPos.y >= height-150) {
    waterPos.x = shoreCurve.startX - 0.5 * weights.secondShore + random (-100, 100);
    waterPos.y = 150;
  }
// look for the water in zone 1, please refer to sketch in journal entry
// Zone 1
else if (
  waterPos.y < shoreCurve.startY &&
  waterPos.x > shoreCurve.startX - weights.secondShore &&
  waterPos.x < shoreCurve.startX
) {
  waterPos.x += 0.1 + random(0,2)*sin(frameCount*0.1);
  waterPos.y += 1;
}

// Zone 2
else if (
  waterPos.y >= shoreCurve.startY &&
  waterPos.y <= shoreCurve.middleY
) {
  waterPos.x += 0.6 + random(0,2)*sin(frameCount*0.1);
  waterPos.y += 1;
}

// Zone 3
else if (
  waterPos.y > shoreCurve.middleY
) {
  waterPos.x += 1 + random(0,2)*sin(frameCount*0.1);
  waterPos.y += 1;
}
  
// Safety fallback
else {
  waterPos.y += 1;
}
}

/**
 * Display the shorelines
 */
function drawShoreline() {
  push();
  stroke(myColors.shore);
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
  fill(myColors.water);
  textSize(waterPos.size+random(-1,1));
  text('⁘', waterPos.x, waterPos.y);
  pop();
}


/**
 * function to debug and show the points
 
function debugDrawPoints () {
  push();
  stroke("red");
  noFill()
  strokeWeight(10);
// first curve
    point(shoreCurve.startX, shoreCurve.startY);  // starting point
    point(shoreCurve.control1X, shoreCurve.control1Y);    // first control point
    point(shoreCurve.control2X, shoreCurve.control2Y); // second control point
    point(shoreCurve.endX,shoreCurve.endY);    // ending point
// second curve
  stroke("green");
    point(shoreCurve.startX-weights.secondShore, shoreCurve.startY-weights.secondShore);  // starting point
    point(shoreCurve.control1X-weights.secondShore, shoreCurve.control1Y+weights.secondShore);    // first control point
    point(shoreCurve.control2X-weights.secondShore, shoreCurve.control2Y-weights.secondShore); // second control point
    point(shoreCurve.endX-weights.secondShore,shoreCurve.endY+weights.secondShore);   // ending point
  stroke("blue")
    point(shoreCurve.middleX, shoreCurve.middleY);
  pop();
}
*/

