/**
 * The Only Move Is Not To Play
 * Erica Mercier
 *
 * A game where your score increases so long as you do nothing.
 */

"use strict";

// Current score
let score = 0;
// Is the game over?
let gameOver = false;
// lose reason
let loseReason



/**
 * Create the canvas
 */
function setup() {
  createCanvas(400, 400);
}

function lose(){
  gameOver = true;
}

/**
 * Update the score and display the UI
 */
function draw() {
  background("#87ceeb");
  
  // Only increase the score if the game is not over
  if (!gameOver) {
    // Score increases relatively slowly
    score += 0.05;
  }
  displayUI();

  if (mouseIsPressed){ // step 2 for lose
    lose()
    loseReason = 'You lost because you clicked on the mouse...'
  }
  if (keyIsPressed){
    lose()
    loseReason = 'You lost because you pressed a key...'
  }
  function keyReleased() {
  lose()
  loseReason = 'You lost because you released a key...'
}
  if (focused === false){
  lose()
  loseReason = 'You lost because you unfocused the browser window...'}
  // firefox navigator online/offline
if (navigator.onLine) {
  console.log("online");
} 
else {
  console.log("offline") 
  loseReason ='You lose because you went offline...';
}
}

// calling other functions
function mouseMoved() {
  lose()
  loseReason = 'You lost because you moved the mouse...'
}
function mouseWheel() {
  lose()
  loseReason = 'You lost because you scrolled the mouse wheel...'
}


/**
 * Show the game over message if needed, and the current score
 */
function displayUI() {
  if (gameOver) {
    push();
    textSize(48);
    background(77, 36, 61);
    textStyle(BOLD);
    textAlign(CENTER, CENTER);
    fill(236, 220, 201)
    text("₊˚ You lose 𓏵‧₊", width/2, height/3);
    textSize(12);
    text(loseReason, width/2, height/3*2);
    pop();
  }
  displayScore();
}

/**
 * Display the score
 */
function displayScore() {
  push();
  textSize(48);
  textStyle(BOLD);
  textAlign(CENTER, CENTER);
  if (gameOver){
  fill (208, 169, 143)
  }
  text(floor(score), width/2, height/2);
  pop();
}

function lose(){
  gameOver = true;
}

