const CELLSIZES = [100, 160, 200, 400];
const COLOURS = ["#FF0000", "#FFFF00", "#FFFFF0", "#00008B", "#FFFFF0", "#000000"];

function setup() {
  createCanvas(800, 800);
  noLoop();
}

function draw() {
  background(220);

  //noStroke();
  ///////////////
  //simple grid//
  ///////////////
  /*
  const CELLSIZE = 20;
  for(let y = 0; y < height; y += CELLSIZE) {
    for(let x = 0; x < width; x += CELLSIZE) {
      fill(random(255));
      rect(x, y, CELLSIZE);
    }
  } */

  /////////////////
  //Piet Mondrian//
  /////////////////
  /*
  let x = 0;
  let y = 0;
  let currentWidth = random(CELLSIZES);
  let currentHeight = random(CELLSIZES);
  strokeWeight(5);
  while(y < height) {
    while(x < width) {
      fill(random(COLOURS));
      rect(x, y, currentWidth, currentHeight);
      x += currentWidth;
      currentWidth = random(CELLSIZES);
    }
    x = 0;
    y += currentHeight;
    currentHeight = random(CELLSIZES);
  } */

  //////////////////
  //grid of shapes//
  //////////////////
  
  const ARCVALUES = [TAU * 0.25, TAU * 0.5, TAU * 0.75, TAU];
  const CELLSIZE = 100;
  noStroke();
  for(let y = 0; y < height; y += CELLSIZE) {
    for(let x = 0; x < width; x += CELLSIZE) {
      fill(random(255));
      //draw circle in middle of cell
      arc(x + CELLSIZE/2, y + CELLSIZE/2, CELLSIZE, CELLSIZE, 0, random(ARCVALUES));
      fill(random(255));
      arc(x + CELLSIZE/2, y + CELLSIZE/2, CELLSIZE/2, CELLSIZE/2, 0, random(ARCVALUES));
    }
  } 

}
