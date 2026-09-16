/**
 * Challenge : Class 2 September 16th 2026
 * Erica Mercier
 * 
 * In-course assignment challenge :)
 */

"use strict";

/**
 * Setup to create a canvas normalized to the viewer with a background color that varies between two shades of blue
 * NEED TO FIX THIS
*/
function setup() {
 createCanvas(windowWidth, windowHeight);
let bg1 = color(179,214,198);
let bg2 = color(168, 204, 201)
background(paletteLerp([
    [bg2, 0.05],
    [bg1, 1],
  ], millis() / 10000 % 1))
}

/**
 * The "Sun"
*/
function draw() {
 fill(199, 214, 109);
 ellipse(240, 300, 240, 240);
 noStroke();
}