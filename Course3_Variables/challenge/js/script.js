/**
 * Make Mr. Furious Furious
 * Erica Mercier & Maxim Yakimenko
 * 
 * This is our challenge for today's class :-) A guy who becomes visibly furious..
 */

"use strict";

/**
 * Create the canvas
 */
function setup() {
  createCanvas(400, 400);
}

// background color values
let theSky = {
  colors: {
    from: { // starting point for the sky
        r: 151,
        g: 218,
        b: 237
        },
   to: { // this will be the constrained color of the sky
        r: 3,
        g: 14, 
        b: 17}
    }
}

// Mr. Furious
let mrFurious = {
  // Position and size
  x: 400/2,
  y: 400/2,
  size: 100,
  // Colour
  fill: {
    r: 255,
    g: 225,
    b: 225
  }
};

/**
 * Draw (and update) Mr. Furious
 */
function draw() {
// background color 

background(theSky.colors.from.r,theSky.colors.from.g,theSky.colors.from.b)
// sky constraints
theSky.colors.from.r  = constrain(theSky.colors.from.r, theSky.colors.from.r, theSky.colors.to.r);
theSky.colors.from.g  = constrain(theSky.colors.from.g, theSky.colors.from.g, theSky.colors.to.g);
theSky.colors.from.b  = constrain(theSky.colors.from.b, theSky.colors.from.b, theSky.colors.to.b);
// sky color changes
theSky.colors.from.r  = theSky.colors.from.r -0.75
theSky.colors.from.g  = theSky.colors.from.g -0.25
theSky.colors.from.b  = theSky.colors.from.b -0.25

// Mr Furious color changes
  mrFurious.fill.g = mrFurious.fill.g-0.5 // remove green by a small amount each frame
  mrFurious.fill.b = mrFurious.fill.b-0.25 // remove blue by a a small amount, so that there's also a slight purple hue
drawMrFurious ()
}

function drawMrFurious() {
  // Draw Mr. Furious as a coloured circle
  push();
  noStroke();
  fill(mrFurious.fill.r, mrFurious.fill.g, mrFurious.fill.b);
  ellipse(mrFurious.x, mrFurious.y, mrFurious.size);
  pop();
}