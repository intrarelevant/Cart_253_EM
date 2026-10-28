/**
 * Erica Mercier
// 'perfect spiral'
// simple animation of a spinning & distorted series of circles.
*/

"use strict";

let shared = {
    bg: 200, // background color
};

function setup() {
    createCanvas(windowHeight, windowHeight);
    frameRate(12);
    cursor(CROSS);
    background(shared.bg); 
    pixelDensity(0.22);

};

function draw() {
translate(width/3, height/3);
    let t = frameCount * 0.01; // slowly rotate the shape
        rotate(t);
    background(shared.bg); 
    drawCircle();
}

function drawCircle(){
// drawCircles uses (radius, jitter, stroke, noiseScale, seed)
stroke(100)
const circleSeed = 99; // set the same seed for all sections
const circleJitter = 100; // set the same amount of jitter

drawCircles(height, circleJitter, height/5, 2, circleSeed)
drawCircles(height/2, circleJitter, height/8, 0.8, circleSeed)
drawCircles(height/3, circleJitter, height/13, 0.8, circleSeed)    
drawCircles(height/5, circleJitter, height/21, 0.8, circleSeed)
drawCircles(height/8, circleJitter, height/34, 0.8, circleSeed)
drawCircles(height/13, circleJitter, height/55, 0.8, circleSeed)
drawCircles(height/21, circleJitter, height/89, 0.8, circleSeed)
drawCircles(height/34, circleJitter, height/144, 0.8, circleSeed)
drawCircles(height/55, circleJitter, height/233, 0.8, circleSeed)
drawCircles(height/89, circleJitter, height/233, 0.8, circleSeed)
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