/**
 * Rain
 * Erica Mercier
// This is a refactor of some code I created in week 2
*/

"use strict";

let circle1 = undefined;

let shared = {
    bg: 245, // background color
};


function setup() {
    createCanvas(windowHeight*0.8, windowHeight*0.8);
    frameRate(12);
    cursor(CROSS);
    background(shared.bg); 
}

function draw() {

}

    const radius = 130;
    const jitter = 35; // absolute position
    noiseScale = 0.8; // influence the trig function
    stroke = 30;
    seed = 99;


function drawCircles (radius, steps, jitter, stroke, noiseScale, seed) {
  noFill();
  stroke(stroke);
  noiseSeed();
  beginShape();
  for (let i = 0; i < 360; i++) { // repeat the process 360x. each connect the outline.
    const angle = TWO_PI * i / 360; // full arc divided by number of steps
    const n = noise(2 + cos(angle) * noiseScale, 2 + sin(angle) * noiseScale); // the noise influences the 
    const r = radius + map(n, 0, 1, -jitter, jitter); // map the 0-1 noise value to the scale of 'jitter'
    vertex(cos(angle) * r, sin(angle) * r); // a vertex is drawn based on the circle radius
  }
  endShape(CLOSE);   
}
