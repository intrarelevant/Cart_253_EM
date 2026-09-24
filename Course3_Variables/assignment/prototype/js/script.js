/**
 * Anagram
 * Erica Mercier
 * I was inspired by this website for the band 'Powder': https://powd.jp/ for some of the letter motion
 * know – wonk.
 */

"use strict";

// setting up a variable to keep track of time
let absTime = 0;

/*** Create the canvas*/
function setup() {
  createCanvas(600, 600);
  absTime = frameCount/60 // time in seconds
}

// So, I want to  
// 1) Have the colors of the letters be modified over time..
// 2) I want all letters to have a bit of movement
// 3) Have the letters be re-arranged...

// 1 I want to have my color variables set up. 
let myColors = {
    bg: { // background color
        r:224, g:216, b:222 },// "Lavender Blush"

    maintext: { //color for the main text
      r:106, g:98, b:98 }, // "Dim Grey"

    activetext: { //color for the changing letters
      r:207, g:210, b:178 }, // "Sand Dune" kind of like green
}

// 2 I want the individual letters to wiggle around at an even pace and be able to control the motion
let letterWiggle = {
    movement: {
    intensity: {x: 1.05, y: 1.1, scale: 1.2} // setting up
  }
}

// I'll do 3 later. For now, I will just print the text.

/// Draw starts and runs every frame
function draw() {
absTime = frameCount/600 ;// duration - 10 seconds // I want absTime to function as a timer.
background(myColors.bg.r, myColors.bg.g, myColors.bg.b); // apply the background color 
printText()
}

function printText() {
  push();
  textSize(12)
  text('wonk',width/2,width/2)
  pop();
}