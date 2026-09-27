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
    wave: {
        r:89, g:131, b:146}, // "air force blue"
    rain: {
      r:18, g:69, b:89} // "dark teal"
}

function setup() {
createCanvas(windowHeight, windowHeight);
frameRate(12) // slow the framerate
background(myColors.bg.r, myColors.bg.g, myColors.bg.b); // apply the background color
}

let waveSize = {
    start: {minw:75, maxw:200, minh: 20, maxh: 30}
}


/// REFERENCE FOR ME
//Example: movingY = 400 + 20 * sin(frameCount * 0.05);
//400 is the base position
//20 is the movement  amplitude. <- defined here
//0.05 controls the speed. <- defined here
//sin(...) creates smooth, continuous movement (in the functions later

let trigValues = { // I will use these values to control the motion of the scaling
  s: {amp:10, speed:0.75}
  }

/// Draw starts and runs every frame
function draw() {
background(myColors.bg.r, myColors.bg.g, myColors.bg.b, 20); // apply the background color and but with low opacity to create feedback.
drawWave()
drawRain()
}

// create a circle at the mouse origin
function drawWave (){
push()
strokeWeight(1);
stroke(myColors.wave.r,myColors.wave.g,myColors.wave.b) // pick the colors
noFill()
// I want the circles to have some random size but also ease / in out, so I use some trig functions
ellipse(mouseX+random(-50,50), mouseY+random(-10,10), (random(waveSize.start.minw, waveSize.start.maxw) + trigValues.s.amp * cos(frameCount*trigValues.s.speed) ), (random(waveSize.start.minh, waveSize.start.maxh)+ trigValues.s.amp * sin(frameCount*trigValues.s.speed)));
pop()
}

// create a line pointing to the mouse origin
function drawRain (){
push()
strokeWeight(1);
stroke(myColors.rain.r,myColors.rain.g,myColors.rain.b) // pick the colors
noFill()
line(mouseX,mouseY,mouseX+random(10,30),0)
pop()
}
