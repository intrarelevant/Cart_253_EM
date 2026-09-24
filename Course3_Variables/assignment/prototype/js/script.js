/**
 * Anagram
 * Erica Mercier
 * I was inspired by this website for the band 'Powder': https://powd.jp/ for some of the letter motion
 * wonk = > know.
 */

"use strict";

// setting up a variable to keep track of time
let absTime = 0;

/*** Create the canvas*/
function setup() {
  createCanvas(800, 800);
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

// 2: I want the individual letters to wiggle around at an even pace and be able to control the motion in one place

/// REFERENCE FOR ME
//Example: movingY = 400 + 20 * sin(frameCount * 0.05);
//
//400 is the center position which will be defined in 3 (the position of the letters)
//20 is the movement  amplitude. <- defined here
//0.05 controls the speed. <- defined here
//sin(...) creates smooth, continuous movement (in the function)

let letterWiggle = {
  y: {amp:20, speed:0.05},
  s: {amp:5, speed:0.04}
  }

// 3: Rearranging the letters
let wordLetters = { // I want to act on each letter individually, these are the starting positions.
    pos1: {x:200, y:400},
    pos2: {x:300, y:400},
    pos3: {x:500, y:400},
    pos4: {x:600, y:400},
    abs: { // but I will also need an absolute origin that doesn't change.
          pos1: {x:200, y:400},
          pos2: {x:350, y:400},
          pos3: {x:450, y:400},
          pos4: {x:600, y:400},
          xtranslate: 1.02 // speed of horizontal motion
    }
  }

/// Draw starts and runs every frame
function draw() {
absTime = frameCount/600 ;// duration - 10 seconds // I want absTime to function as a timer if I need it.
background(myColors.bg.r, myColors.bg.g, myColors.bg.b); // apply the background color 

// I want the letters to be constrained to their ending positions in terms of the x axis.
// W pos 1 -> pos 4, and O pos 2 -> pos 3 so, advance but choose the min of both values.
wordLetters.pos1.x = min (wordLetters.pos1.x + (wordLetters.abs.xtranslate*random(0.9,1.1)), wordLetters.abs.pos4.x) 
wordLetters.pos2.x = min (wordLetters.pos2.x + (wordLetters.abs.xtranslate*random(0.9,1.1)), wordLetters.abs.pos3.x)
// N pos 3 -> pos 2 and K pos 4 -> pos 1, so, I want the max of both values
wordLetters.pos3.x = max (wordLetters.pos3.x - (wordLetters.abs.xtranslate*random(0.9,1.1)), wordLetters.abs.pos2.x) 
wordLetters.pos4.x = max (wordLetters.pos4.x - (wordLetters.abs.xtranslate*random(0.9,1.1)), wordLetters.abs.pos1.x)
  printLetter1()
  printLetter2()
  printLetter3()
  printLetter4()
}

//Example: movingY = 400 + 20 * sin(frameCount * 0.05);

function printLetter1() { // starting position 1, "w"
  push();
  textSize(12)
  text('w', wordLetters.pos1.x, wordLetters.pos1.y + letterWiggle.y.amp * sin(frameCount*letterWiggle.y.speed)) // the y coordinate moves up and down on the sine wave.
  pop();
}

function printLetter2() { // starting position 2, "o"
  push();
  textSize(12)
  text('o',wordLetters.pos2.x, wordLetters.pos2.y + letterWiggle.y.amp * cos(frameCount*letterWiggle.y.speed)*-1) // adding some variation by switching function
  pop();
}

function printLetter3() { // starting position 3, "n"
  push();
  textSize(12)
  text('n',wordLetters.pos3.x, wordLetters.pos3.y + letterWiggle.y.amp * sin(frameCount*letterWiggle.y.speed)*-1) // same thing
  pop();
}

function printLetter4() { // starting position 4, "k"
  push();
  textSize(12)
  text('k',wordLetters.pos4.x, wordLetters.pos4.y + letterWiggle.y.amp * cos(frameCount*letterWiggle.y.speed)) // yay
  pop();
}


