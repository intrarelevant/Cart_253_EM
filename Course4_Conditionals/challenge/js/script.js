/**
 * Circle Master
 * Erica Mercier
 * 
 * This will be a program in which the user can push a circle
 * on the canvas using their own circle.
 */

"use strict";

// calling all variables
let d = 0; 
let overlap = 0;
let dGoal = 0;
let overlapGoal = 0;
let numGoals = 0

// info about the puck
const puck = {
  x: 200,
  y: 200,
  size: 50,
  fill: "#ff0000"
};

// info about the user position
const user = {
  x: undefined, // will be mouseX
  y: undefined, // will be mouseY
  size: 75,
  fill: "#000000"
};

// info about the goal
const target = {
  x: 200,
  y: 50,
  size: 100,
  alpha: 50,
  sto: "#3D3522",
};


// create canvas
function setup() {
  createCanvas(400, 400);
}
// draw runs at 60 fps
function draw() {
  background("#aaaaaa", 20); // background
  
  // Move user circle
  moveUser(); // this functions moves to mousex, mousey

// Calculate distance between puck and the user 
    d = dist(user.x, user.y, puck.x, puck.y); 
    overlap = (d < user.size/2 + puck.size/2); // compare radius of the two 

// Calculate distance between puck and the target
    dGoal = dist(puck.x, puck.y, target.x, target.y);
    overlapGoal = (dGoal < puck.size/2 + target.size/2);
  
// if overlap is true, then call movePuck
if (overlap === true && d<85) {
  movePuck();
}

if (overlapGoal === true) {scoreGoal();}
else {target.fill = "#3D3522"} // if i didn't overlap w/ the target then make sure i reset to my original color

    drawPuck();
    drawUser();  // Draw the user and puck
    drawTarget();
    scoreCount ();
}

/**
 * Sets the user position to the mouse position
 */
function moveUser() {
  user.x = mouseX;
  user.y = mouseY;
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

// this function is called to move the puck if they end up overlapping.
function movePuck(){
puck.x = puck.x + (puck.x-user.x)/10 * abs(cos(1/puck.x*0.01))
puck.y = puck.y + (puck.y-user.y)/10 * abs(cos(1/puck.x*0.01))
//puck.y = puck.y+random(-1, 1)
}

function drawTarget() {
  push();
  noStroke();
  fill(target.fill, target);
  ellipse(target.x, target.y, target.size);
  pop();
}


function scoreGoal() {
    push()
    target.fill = "#386150"
    target.x = random(50, 350)
    target.y = random (50, 350)
    numGoals = numGoals + 1
    pop()
}
// //Example: movingY = 400 + 20 * sin(frameCount * 0.05);
//400 is the base position
//20 is the movement  amplitude. <- defined here
//0.05 controls the speed. <- defined here

function scoreCount (){
push()
textSize (6) // helper text
text ("Your Score", width/2, height*0.90)
text (numGoals, width/2, height*0.95)
pop()
}
