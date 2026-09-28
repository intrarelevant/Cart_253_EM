/**
 * Rain
 * Erica Mercier
// Goals
// 1) I want 'rain' to fall at the user's mouse x, y position every few seconds, represented as a line + circle. 
// 2) I want to use feedback effects
*/


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
frameRate(12) // slow the framerate for an animation feel
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

let trigValues = { // I will use these values to control the scale of the scaling
  s: {amp:20, speed:0.75}
  }

/// Draw starts and runs every frame
function draw() {
background(myColors.bg.r, myColors.bg.g, myColors.bg.b, 20); // apply the background color and but with low opacity to create feedback.
cursor(CROSS); // i want to suggest to the user that the mouse position matters!
drawRain()
drawRainSegments()
drawWave()
}

// create a circle at the mouse origin to look like the rain splatter
function drawWave (){
push()
strokeWeight(1);
stroke(myColors.wave.r,myColors.wave.g,myColors.wave.b,random(100,200)) // pick the colors
noFill()
// I want the circles to have some random size but also ease / in out, so I use some trig functions
ellipse(mouseX+random(-50,50), windowHeight*0.8+random(-10,10), (random(waveSize.start.minw, waveSize.start.maxw) + trigValues.s.amp * cos(frameCount*trigValues.s.speed) ), (random(waveSize.start.minh, waveSize.start.maxh)+ trigValues.s.amp * sin(frameCount*trigValues.s.speed)));
pop()
}

// create a line pointing to the mouse origin to look like rain
function drawRain (){
push()
strokeWeight(1);
stroke(myColors.rain.r,myColors.rain.g,myColors.rain.b) // pick the colors
noFill()
line(mouseX+random(-20,20),windowHeight*0.8+random(-20,20),mouseX+random(-20,20),0)
line(mouseX+random(-20,20),windowHeight*0.8+random(-20,20),mouseX+random(-20,20),0)
pop()
}

// create a line pointing to the mouse origin to look like rain

function drawRainSegments(){
push()
stroke(myColors.bg.r, myColors.bg.g, myColors.bg.b, random(70,120)) // to blend into the background
strokeWeight(random(30,50))
// probably should have used variables but I got lazy.. this basically draws a stroke near the mouse position to break up the lines drawn in drawRain
line(mouseX-random(-20, 29),windowHeight*random(0.05,0.2),mouseX+random(-20, 29),windowHeight*random(0.01,0.3))
line(mouseX-random(-20, 29),windowHeight*random(0.25,0.5),mouseX+random(-20, 29),windowHeight*random(0.25,0.5))
line(mouseX-random(-20, 29),windowHeight*random(0.4,0.6),mouseX+random(-20, 29),windowHeight*random(0.45,0.7))
line(mouseX-random(-20, 29),windowHeight*random(0.01,0.3),mouseX+random(-20, 29),windowHeight*random(0.01,0.3))
line(mouseX-random(-20, 29),windowHeight*random(0.25,0.5),mouseX+random(-20, 29),windowHeight*random(0.25,0.5))
line(mouseX-random(-20, 29),windowHeight*random(0.4,0.6),mouseX+random(-20, 29),windowHeight*random(0.45,0.7))
line(mouseX-random(-20, 29),windowHeight*random(0.7,0.8),mouseX+random(-20, 29),windowHeight*random(0.6,0.8)) // horizon
pop()
}