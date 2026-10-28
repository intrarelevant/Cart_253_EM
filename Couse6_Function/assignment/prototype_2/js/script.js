/**
 * Rain
 * Erica Mercier
// This is a refactor of some code I created in week 2
*/

"use strict";

function setup() {
createCanvas(windowHeight*0.8, windowHeight*0.8);
frameRate(12);
cursor(CROSS);
background(245); 
}

function draw() {
  translate(width / 2, height / 2); // center the image

  const radius = 130;
  const steps = 180;
  const amount = 35;

  noFill()
  stroke(30);
  beginShape();

  for (let i = 0; i < steps; i++) {
    const angle = TWO_PI * i / steps;

    // Sampling around a circle makes the noise repeat smoothly at the seam.
    const n = noise(2 + cos(angle) * 0.8, 2 + sin(angle) * 0.8);
    const r = radius + map(n, 0, 1, -amount, amount);

    vertex(cos(angle) * r, sin(angle) * r);
  }

  endShape(CLOSE);
}