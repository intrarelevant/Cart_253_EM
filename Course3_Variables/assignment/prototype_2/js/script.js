/**
 * Rain
 * Erica Mercier
// Goals
// 1) I want 'rain' to fall at the user's mouse x, y position every few seconds, represented as a circle. the waves could appear as either color
// 2) I want the circle to go outwards, like a wave 
// 3) I want some degree of feedback effects
*/

// https://p5js.org/reference/p5/rotate/

"use strict";


function setup() {
createCanvas(windowWidth, windowHeight, WEBGL);
}


let myColors = {
    bg: { // background color
        r:1, g:22, b:30 },// "inkblack"
    wavegenerated: {
        r:89, g:131, b:146}, // "air force blue"
    altwave: {
      r:18, g:69, b:89} // "dark teal"
}

/// REFERENCE FOR ME
//Example: movingY = 400 + 20 * sin(frameCount * 0.05);
//400 is the base position
//20 is the movement  amplitude. <- defined here
//0.05 controls the speed. <- defined here
//sin(...) creates smooth, continuous movement (in the functions later

let trigValues = { // I will use these values to control the motion of the scaling
  y: {amp:40, speed:0.03},
  s: {amp:4, speed:0.03}
  }

/// Draw starts and runs every frame
function draw() {
background(myColors.bg.r, myColors.bg.g, myColors.bg.b, 120*random(0.95,1.05)); // apply the background color and but with low opacity to create feedback.
}
