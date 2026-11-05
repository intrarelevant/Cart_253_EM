  /**
   * Reproducing a painting by Agnes Martin
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


  const cols = 20;
  const rows = 8;

  let grid = [];
  let cellWidth;
  let cellHeight;

  let dots = {
    size: 5,
    sizeRdm: 1,
    pos: 0.25, // % position of the dot within the domino
    posRdm: 4, // weight of randomness within the domino
  }

 let colors = {
  bck: '#8d909b',
  lines:'#6A7062',
  dots: '#3E442B',
 }

  // Create the canvas

  function setup() {
    createCanvas(windowHeight*0.8, windowHeight*0.8);
    background(colors.bck); 
  // create my grid values
    for (let y=0; y < rows; y++) {
      let row =[];

  // add a cell to the row for each column
    for (let x=0; x < cols; x++) {row.push(0)}
    // add the completed row to the grid 
    grid.push(row);
    }

    cellWidth = width/cols;
    cellHeight = height/rows;

    noLoop(); // this is a still image
  };

  function draw() {
    drawDotArray();
    drawVerticalLines();
    drawHorizontalLines()
  };

  function drawDotArray() {
    for (let y=1; y < rows-1; y++){ // following the painting, we want to draw only in the centre rows of the image 
      for (let x = 0; x < cols; x++)
      {
        push();
        noFill();
        stroke (colors.dots);
        ellipse ((x * cellWidth + 0.5*cellWidth+randomGaussian(+-dots.posRdm)), (y * cellHeight + 0.25*cellHeight+randomGaussian(+-dots.posRdm)), dots.size, dots.size);
        ellipse ((x * cellWidth + 0.5*cellWidth+randomGaussian(+-dots.posRdm)), (y * cellHeight + 0.75*cellHeight+randomGaussian(+-dots.posRdm)), dots.size, dots.size);
        pop();
      }
    }
  };

  function drawVerticalLines() {
    push();
    stroke(colors.lines);
    for (let x = 0; x < cols; x++) {
      const lineX = (x + 1) * cellWidth;
      line(lineX, 0, lineX, height);
    
    }
    pop();
  }

  function drawHorizontalLines() {
    push()
    stroke(colors.lines);
    for (let y = 0; y < rows; y++) {
      const lineY = (y + 1) * cellHeight;
      line(0, lineY, width, lineY);
    }
    pop();
  }
