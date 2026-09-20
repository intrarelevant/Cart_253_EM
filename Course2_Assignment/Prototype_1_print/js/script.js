/**
 * Challenge : Class 2 September 16th 2026
 * Erica Mercier
 * 
 * Instructions assignment
 * Note I used the tutorial below:
 * https://p5js.org/tutorials/coordinates-and-transformations/
 */

"use strict";

/* Store Positions */
let positions = [];
let rotations = [];
let scales = [];

/**
 * Setup, Canvas should be height and width of browser window; multiply the geometry
*/
function setup() {
  createCanvas(windowWidth, windowHeight, WEBGL);
  for (let i = 0; i < 10; i++) {
    positions.push(createVector(
      random(-width / 2, width / 2),
      random(-height / 2, height / 2),
      random(-width / 2, width / 2)
    ));
    rotations.push(createVector(
      random(TWO_PI),
      random(TWO_PI),
      random(TWO_PI)
    ));
    scales.push(random(0.5, 2));
  }
}

/*** keep elements proportional when the canvas is resized*/
function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

function draw() {
  background(255);
  orbitControl();
  noStroke();
  lights();

  for (let i = 0; i < 10; i += 1) {
    push();
    translate(
      positions[i].x,
      positions[i].y,
      positions[i].z
    );
    rotateX(rotations[i].x);
    rotateY(rotations[i].y);
    rotateZ(rotations[i].z);
    scale(scales[i]);
    box(20);
    pop();
  }
}