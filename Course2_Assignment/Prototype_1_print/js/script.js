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
 * Setup, Canvas should be height and width of browser window; multiply the geometry and set to random positions; rotate it
*/
function setup() {
  createCanvas(windowWidth, windowHeight, WEBGL);
  for (let i = 0; i < 60; i++) {
    positions.push(createVector(
      random(-width / 3, width /3),
      random(-height / 2, height / 2),
      random(-width / 3, width / 3)
    ));
    scales.push(random(2, 10));
  }
}

/*** keep elements proportional when the canvas is resized*/
function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

/*disable depth?
drawingContext.enable(drawingContext.DEPTH_TEST);*/

function draw() {
/*Draw background and set render conditions for 3D Objects*/
  background(236, 236, 234); /* 'grey' */
  smooth();
  noLights();
  noStroke();

 /*Draw the spheres at the specified randomized positions*/ 
  for (let i = 0; i < 50; i += 1) {
    push();
    translate(
      positions[i].x,
      positions[i].y,
      positions[i].z
    );
    scale(scales[i]);
    fill(255, 107, 108, 40); /*grapefruit pink*/
    sphere(10,24,24);
    fill(255, 207, 108, 40); /*test*/
    sphere(10,24,24);
    pop();}
}