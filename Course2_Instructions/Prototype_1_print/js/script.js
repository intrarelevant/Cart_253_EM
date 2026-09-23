/**
 * Challenge : Class 2 September 16th 2026
 * Erica Mercier
 * 
 * Instructions assignment
 * Note I used the tutorial below:
 * https://p5js.org/tutorials/coordinates-and-transformations/
 * This program will draw spheres as circles in a pseudo-halftone print
 */

"use strict";

/* Store Positions */
let positions_r = [];
let scales_r = [];
let positions_g = [];
let scales_g = [];
let positions_b = [];
let scales_b = [];

/**
 * Setup, multiply the geometry and set to random positions; rotate it
*/
function setup() {
  createCanvas(900, 900, WEBGL);
  /*circle group - red*/
  for (let i = 0; i < 45; i++) {
    positions_r.push(createVector(
      random(-width / 4, width /4), // I use 1/4 because I want the spheres to remain relative concentrated
      random(-height / 4, height / 4),
      random(-width / 4, width / 4)
    ));
    scales_r.push(random(2, 3));
  }
  /*sphere group - green*/
 for (let i = 0; i < 45; i++) {
    positions_g.push(createVector(
      random(-width / 4, width /4),
      random(-height / 4, height / 4),
      random(-width / 4, width / 4)
    ));
    scales_g.push(random(2, 3));
  }
  /*sphere group - blue*/
   for (let i = 0; i < 45; i++) {
    positions_b.push(createVector(
      random(-width / 4, width /4),
      random(-height / 4, height / 4),
      random(-width / 4, width / 4)
    ));
    scales_b.push(random(2, 3));
  }
}

/*** keep elements proportional when the canvas is resized*/
function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

/*disable depth?*/
drawingContext.enable(drawingContext.DEPTH_TEST);


function draw() {
  background(236, 236, 234); // nearly white grey
  noLights();
  smooth();
  noStroke();
  drawSpheresR();  // one function for each group of spheres, the code is merely reused
  drawSpheresG();
  drawSpheresB();
}

function drawSpheresR() {
  for (let i = 0; i < positions_r.length; i++) {
    push();

    translate(
      positions_r[i].x,
      positions_r[i].y,
      positions_r[i].z
    );

    scale(scales_r[i]);

    fill(255, 107, 108, 85);
    sphere(10, 32, 16);

    pop();
  }
}

function drawSpheresG() {
  for (let i = 0; i < positions_g.length; i++) {
    push();

    translate(
      positions_g[i].x,
      positions_g[i].y,
      positions_g[i].z
    );

    scale(scales_g[i]);

    fill(218, 204, 62, 85);
    sphere(10, 32, 16);

    pop();
  }
}

function drawSpheresB() {
  for (let i = 0; i < positions_b.length; i++) {
    push();

    translate(
      positions_b[i].x,
      positions_b[i].y,
      positions_b[i].z
    );

    scale(scales_b[i]);

    fill(26, 101, 158, 85);
    sphere(10, 32, 16);

    pop();
  }
}