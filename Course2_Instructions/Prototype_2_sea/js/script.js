/**
 * Challenge : Class 2 September 16th 2026
 * Erica Mercier
 * 
 * In-course assignment challenge :)
 */

"use strict";

/* colors 
bgcolor = color(34, 34, 27); //carbonblack
bgcolor2 = color(46, 46, 36); //dark brown
light1 = color(224, 226, 219); //linen grey
light2 = color(210, 212, 200); //dust grey */

/**
 * Setting up for a   
*/
function setup() {
 createCanvas(540,720,WEBGL);
 imageMode(CENTER)

angleMode(DEGREES);
background(34, 34, 27)
noStroke();
noLoop();
}

function draw() {
	drawSea();
  drawWaves();
}

 function drawSea () {
         /*** lower half of image*/
  push()
 fill(46, 46, 36);
 noStroke();
 rect(0, 360, windowWidth, 360);
 pop()
}


 function drawWaves () {
         /*** lower half of image*/
  push()
  nofill()
  ellipse(50, 50, 80, 40);
 pop()
}