/**
 * Erica Mercier
// This is a refactor of some code I created in week 2
*/

"use strict";

let shared = {
    bg: 245, // background color
};

function setup() {
    createCanvas(windowHeight, windowHeight);
    frameRate(12);
    cursor(CROSS);
    background(shared.bg); 
};

function draw() {
    translate(width / 2, height / 2);
    drawCircle();
};

function drawCircle(){
// drawCircles uses (radius, jitter, stroke, noiseScale, seed)
drawCircles(height/2, 50, height/8, 0.8, 2)
drawCircles(height/3, 35, height/13, 0.8, 2)    
drawCircles(height/5, 35, height/21, 0.8, 2)
drawCircles(height/8, 35, height/34, 0.8, 2)
drawCircles(height/13, 35, height/55, 0.8, 2)
drawCircles(height/21, 35, height/89, 0.8, 2)
drawCircles(height/34, 35, height/144, 0.8, 2)
};

function drawCircles (radius, jitter, stroke, noiseScale, seed) {
// draw a noisy circle, distorted by scale
  push()
  noFill();
  strokeWeight(stroke);
  noiseSeed(seed);
  beginShape();
  for (let i = 0; i < 360; i++) { // repeat the process 360x. each connect the outline.
    const angle = TWO_PI * i / 360; // full arc divided by number of steps
    const n = noise(2 + cos(angle) * noiseScale, 2 + sin(angle) * noiseScale); // the noise influences the 
    const r = radius + map(n, 0, 1, -jitter, jitter); // map the 0-1 noise value to the scale of 'jitter'
    vertex(cos(angle) * r, sin(angle) * r); // a vertex is drawn based on the circle radius
  }
  endShape(CLOSE);
  pop ()   
}