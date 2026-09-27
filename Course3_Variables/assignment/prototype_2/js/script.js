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

let myColors = {
    bg: { // background color
        r:1, g:22, b:30 },// "inkblack"
    wavegenerated: {
        r:89, g:131, b:146}, // "air force blue"
    waveendpoint: {
      r:18, g:69, b:89} // "dark teal"
}

function setup() {
createCanvas(500, 500);
frameRate(random(4,6)) // slow the framerate
background(myColors.bg.r, myColors.bg.g, myColors.bg.b); // apply the background color
}



let waveSize = {
    start: {minw:50, maxw:100, minh: 20, maxh: 30}
    //max: {minw:80, maxw:100, minh: 41, maxh: 50}

}

/// REFERENCE FOR ME
//Example: movingY = 400 + 20 * sin(frameCount * 0.05);
//400 is the base position
//20 is the movement  amplitude. <- defined here
//0.05 controls the speed. <- defined here
//sin(...) creates smooth, continuous movement (in the functions later

let trigValues = { // I will use these values to control the motion of the scaling
  s: {amp:10, speed:0.5}
  }

/// Draw starts and runs every frame
function draw() {
background(myColors.bg.r, myColors.bg.g, myColors.bg.b, 50); // apply the background color and but with low opacity to create feedback.

drawCircle()
}

// create a circle at the mouse origin

function drawCircle (){
push()
stroke(myColors.wavegenerated.r,myColors.wavegenerated.g,myColors.wavegenerated.b) // pick the colors
noFill()
// I want the circles to have some random size but also ease / in out, so I use some trig functions
ellipse(mouseX, mouseY, (random(waveSize.start.minw, waveSize.start.maxw) + trigValues.s.amp * cos(frameCount*trigValues.s.speed) ), (random(waveSize.start.minh, waveSize.start.maxh)+ trigValues.s.amp * sin(frameCount*trigValues.s.speed)));

pop()
}
