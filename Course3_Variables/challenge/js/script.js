/**
 * Make Mr. Furious Furious...
 * Erica Mercier
 * This is our challenge for today's class :-) A guy who becomes visibly furious..
 */

"use strict";

// setting up a timer for anger in seconds
let angerTime = 0;

/*** Create the canvas*/
function setup() {
  createCanvas(400, 400);
  angerTime = frameCount/60
}

// background color values
let theSky = {
  colors: {
    from: { // starting point for the sky
        r: 151,g: 218, b: 237
        },
   to: { // this will be the constrained color of the sky
        r: 3, g: 14, b: 17}
    }
}

// Mr. Furious
let mrFurious = {
  // Position and size
  x: 200,
  y: 200,
  size: 100,
  // Colour
  fill: {
    r: 255, g: 225, b: 225
  }
};

// birb
let theBirb = {
  // Position and size
  x: 25, y: 25,
  textsize:25
};

/*** Draw (and update) Mr. Furious*/
function draw() {

// reassign framecount
angerTime = frameCount/360 // timer for 6 number of seconds until he shakes

// background color 
background(theSky.colors.from.r,theSky.colors.from.g,theSky.colors.from.b)

// sky constraints so it stays within the colors i want
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

// bird moves from left to right
theBirb.x= theBirb.x+0.2

//constrain time to 1 seconds and remap
angerTime = constrain(angerTime, 0, 1)
map (angerTime, 0, 1, 0.7, 1)

drawMrFurious ()
drawBirb()
}

function drawMrFurious() {
  // Draw Mr. Furious as a coloured circle
  push();
  noStroke();
  fill(mrFurious.fill.r, mrFurious.fill.g, mrFurious.fill.b);
  ellipse(
        max(mrFurious.x*random(1,1.2)*angerTime, 
            mrFurious.x), 
            mrFurious.y, mrFurious.size); // he's shakin!! use the maximum of either the shaking and time pass..
  pop();
}

function drawBirb() {
  // Le evil bird..
  push();
  textSize(theBirb.textsize)
  text('🦅',theBirb.x,theBirb.y)
  pop();
}