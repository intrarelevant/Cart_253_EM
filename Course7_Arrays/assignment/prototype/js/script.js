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
 * Create the canvas and the array needed for the grid 
 */ 


let grid = [];
const cols = 12;
const rows = 9;

let dots = {
  size: 10,
  sizeRdm: 1,
  pos: 0.25, // % position of the dot within the domino
  posRdm: 5, // weight of randomness within the domino
}

// Create the canvas

function setup() {
  createCanvas(windowHeight*0.8, windowHeight*0.8);
  background(200); 
// create my grid values
  for (let y=0; y < rows; y++) {
    let row =[];

// add a cell to the row for each column
  for (let x=0; x < cols; x++) {
    row.push(0)
  }
  // add the completed row to the grid 
  grid.push(row);
  }
  noLoop(); // this is a still image
}


function draw() {
  drawDotArray();
}

function drawDotArray() {
  const cellWidth = width/cols;
  const cellHeight = height/rows;

  for (let y=1; y < rows-1; y++){
    for (let x = 0; x < cols; x++)
    {
      fill(0);
      stroke (1);
      ellipse ((x * cellWidth + 0.5*cellWidth+random(-dots.posRdm, dots.posRdm)), (y * cellHeight + 0.25*cellHeight+random(-dots.posRdm, dots.posRdm)), dots.size, dots.size);
      ellipse ((x * cellWidth + 0.5*cellWidth+random(-dots.posRdm, dots.posRdm)), (y * cellHeight + 0.75*cellHeight+random(-dots.posRdm, dots.posRdm)), dots.size, dots.size);
    }
  }
}
