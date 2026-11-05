/**
 * 
 * Reproducing a painting by Agnes Martin
 * Procedurally generate this painting 
 * Erica Mercier
 */


/**
 * elements to this painting
 *  1) a domino-shaped grid on a square image
 *  2) in each segment, there is 2 dots, roughly in the top and bottom half of the domino
 */

/**
 * Create the canvas and the arrays needed for each type of line.
 */ 

let horizontalLines = [];
let verficalLines =[];
let dots = [];

function setup() {
  // Create the canvas
  createCanvas(windowHeight*0.8, windowHeight*0.8);
  background(0); 
}


