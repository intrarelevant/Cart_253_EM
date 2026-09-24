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

// 2: I want the individual letters to wiggle around at an even pace and be able to control the motion
let letterWiggle = {
    translate: {
    intensity: {x: 1.02, y: 1.1, scale: 1.2} // setting up max intensities for movement
  }
}

// 3: Rearranging the letters
// the letters are in 4 positions (pos)
// W pos 1 -> pos 4
// O pos 2 -> pos 3
// N pos 3 -> pos 2
// K pos 4 -> pos 1
//

let wordLetters = { // the positions can be used as the origin but also as the constraints
    pos1: {x:300, y:400},
    pos2: {x:400, y:400},
    pos3: {x:500, y:400},
    pos4: {x:600, y:400},
  }


/// Draw starts and runs every frame
function draw() {
absTime = frameCount/600 ;// duration - 10 seconds // I want absTime to function as a timer.
background(myColors.bg.r, myColors.bg.g, myColors.bg.b); // apply the background color 
printLetter1()
printLetter2()
printLetter3()
printLetter4()
}

// to start I just want to get the letters in position 


function printLetter1() { // starting position 1, "w"
  push();
  textSize(12)
  text('w', wordLetters.pos1.x, wordLetters.pos1.y)
  pop();
}

function printLetter2() { // starting position 2, "o"
  push();
  textSize(12)
  text('o',wordLetters.pos2.x, wordLetters.pos2.y)
  pop();
}

function printLetter3() { // starting position 3, "n"
  push();
  textSize(12)
  text('n',wordLetters.pos3.x, wordLetters.pos3.y)
  pop();
}

function printLetter4() { // starting position 4, "k"
  push();
  textSize(12)
  text('k',wordLetters.pos4.x, wordLetters.pos4.y)
  pop();
}