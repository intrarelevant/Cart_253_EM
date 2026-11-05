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
    posRdm: 2, // weight of randomness within the domino
  }

  let lines ={
    posRdm:2,
  }

 let colors = {
  bck: '#DBD3D8',
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
    drawGrid();
    drawGrid2(); // this is a more solid grid to avoid too much detail being lost to blur
    drawDotArray();
  };

  function drawDotArray() {
    for (let y=1; y < rows-1; y++){ // following the painting, we want to draw only in the centre rows of the image 
      for (let x = 0; x < cols; x++)
      {
        push();
        fill(colors.dots);
        strokeWeight(1);
        ellipse ((x * cellWidth + 0.5*cellWidth+randomGaussian(+-dots.posRdm)), (y * cellHeight + 0.25*cellHeight+randomGaussian(+-dots.posRdm)), dots.size, dots.size);
        ellipse ((x * cellWidth + 0.5*cellWidth+randomGaussian(+-dots.posRdm)), (y * cellHeight + 0.75*cellHeight+randomGaussian(+-dots.posRdm)), dots.size, dots.size);
        pop();
      }
      filter(BLUR,0.002);
    }
  };


  function drawGrid() {
    push();
    stroke(colors.lines);
    for (let x = 0; x < cols; x++) {
      const lineX = (x + 1) * cellWidth;
      line(lineX, 0+randomGaussian(lines.posRdm), lineX, height-randomGaussian(lines.posRdm));
      filter(BLUR, 0.001);
    }

    for (let y = 0; y < rows; y++) {
      const lineY = (y + 1) * cellHeight;
      line(0+randomGaussian(lines.posRdm), lineY, width-randomGaussian(lines.posRdm), lineY);
      filter(BLUR, 0.001);
    }
    pop();
  }

    function drawGrid2() {
    push();
    stroke(colors.lines);
    stroke()
    for (let x = 0; x < cols; x++) {
      const lineX = (x + 1) * cellWidth;
      line(lineX, 0+randomGaussian(lines.posRdm), lineX+randomGaussian(lines.posRdm), height-randomGaussian(lines.posRdm));
    }

    for (let y = 0; y < rows; y++) {
      const lineY = (y + 1) * cellHeight;
      line(0+randomGaussian(lines.posRdm), lineY+randomGaussian(lines.posRdm), width-randomGaussian(lines.posRdm), lineY-randomGaussian(lines.posRdm));
    }
    pop();
  }