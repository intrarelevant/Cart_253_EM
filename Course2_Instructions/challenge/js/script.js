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
 noStroke();

}

function draw() {
	drawSun();
	drawHorizon();
    drawSilhouette();
    drawShadow();
}

 function drawSun () {
     /*** draw ellipse as the sun for the landscape*/
push()
 fill(199, 214, 109);
 noStroke();
 ellipse(windowWidth/2, windowHeight/2, 600, 400);
 pop ()
 push()
 fill(199, 214, 200, 50);
 noStroke();
 ellipse(windowWidth/2, windowHeight/2, 550, 300);
 pop ()
 }

 function drawHorizon () {
         /*** draw a basic two-toned background with*/
  push()
 fill(220, 234, 178);
 noStroke();
 rect(0, windowHeight*0.7, windowWidth, windowHeight);
 pop()
  push()
 fill(220, 234, 30, 50);
 noStroke();
 rect(0, windowHeight*0.75, windowWidth, windowHeight);
 pop()
}

 function drawSilhouette() {
    /*** draw an ellipse to represent a silhouette against the sun...*/
  push()
 fill(83, 59, 77);
 noStroke();
 ellipse(windowWidth/2.5, windowHeight*0.8, 50, 150);
 pop()
}

 function drawShadow() {
    /*** draws the shadow of the silhouette...*/
  push()
 fill(83, 59, 77,190);
 noStroke();
 ellipse(windowWidth/2.5, windowHeight*0.9, 50, 150);
 rotate(-45);
 pop()
}

function windowResized() {
        /*** keep elements proportional when the canvas is resized*/
  resizeCanvas(windowWidth, windowHeight);
  background(168, 204, 201)
}