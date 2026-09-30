/**
 * Circle Master
 * Erica Mercier
 * 
 * This will be a program in which the user can push a circle
 * on the canvas using their own circle.
 */

"use strict";

const puck = {
  x: 200,
  y: 200,
  size: 100,
  fill: "#ff0000"
};

const user = {
  x: undefined, // will be mouseX
  y: undefined, // will be mouseY
  size: 75,
  fill: "#000000"
};

let d = 0;
let overlap = 0;

/**
 * Create the canvas
 */
function setup() {
  createCanvas(400, 400);

}

/**
 * Move the user circle, check for overlap, draw the two circles
 */
function draw() {
  background("#aaaaaa");
  
  // Move user circle
  moveUser();

  //


// Calculate distance between circles' centres
    d = dist(user.x, user.y, puck.x, puck.y);
    overlap = (d < user.size/2 + puck.size/2);
  
// if overlap is true, then call movePuck
if (overlap === true) {
  movePuck();
}
  // Draw the user and puck
  drawUser();
  drawPuck();
  debugText ();

}

/**
 * Sets the user position to the mouse position
 */
function moveUser() {
  user.x = mouseX;
  user.y = mouseY;
  console.log(event);
}

/**
 * Displays the user circle
 */
function drawUser() {
  push();
  noStroke();
  fill(user.fill);
  ellipse(user.x, user.y, user.size);
  pop();
}

/**
 * Displays the puck circle
 */
function drawPuck() {
  push();
  noStroke();
  fill(puck.fill);
  ellipse(puck.x, puck.y, puck.size);
  pop();
}




function movePuck(){
// so, the distance between the x of the mouse and the puck
puck.x = puck.x + (puck.x-user.x)*0.05 * abs(cos(frameCount*0.01))
puck.y = puck.y + (puck.y-user.y)*0.05 * abs(cos(frameCount*0.01))
//puck.y = puck.y+random(-1, 1)
}
   

// //Example: movingY = 400 + 20 * sin(frameCount * 0.05);
//400 is the base position
//20 is the movement  amplitude. <- defined here
//0.05 controls the speed. <- defined here



function debugText (){
push()
textSize (6) // helper text
text (overlap, width/2, height*0.95)
text (d, width/2, height*0.90)
pop()
}
