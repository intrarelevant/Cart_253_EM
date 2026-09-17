/**
 * Challenge : Class 2 September 16th 2026
 * Erica Mercier
 * 
 * In-course assignment challenge :)
 */

"use strict";

/**
 * Setup, Canvas should be height and width of browser window
*/
function setup() {
 createCanvas(windowWidth, windowHeight);
 imageMode(CENTER)
let bg1 = color(179,214,198);
let bg2 = color(168, 204, 201);
angleMode(DEGREES);
background(bg2)
}




function draw() {
	drawSun();
	drawHorizon();
    
}

 function drawSun () {
     /*** draw ellipse as the sun for the landscape*/
push()
 fill(199, 214, 109);
 noStroke();
 ellipse(windowWidth/2, windowHeight/2, 600, 400);
 pop ()
 }

 function drawHorizon () {
  push()
 fill(220, 234, 178);
 noStroke();
 rect(0, windowHeight*0.7, windowWidth, windowHeight);
 pop()
}