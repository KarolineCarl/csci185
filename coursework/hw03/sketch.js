function setup() {
    const canvasWidth = window.innerWidth;
    const canvasHeight = window.innerHeight; 
    createCanvas(canvasWidth, canvasHeight);

    // Once you've created your drawCreature function, 
    // invoke drawCreature 5 times with the following arguments
    // (feel free to change the sizes, positions, and colors):
    
    // drawCreature(92, 115, 85, '#5e6976', '#1b324d');
    // drawCreature(487, 110, 101, '#bfdc65', '#abb880');
    // drawCreature(454, 423, 141, '#aebb83', '#227876');
    // drawCreature(333, 227, 99, '#94ba77', '#3f5364');
    // drawCreature(117, 314, 91, '#648d8e', '#afc272');
    
    drawGrid(canvasWidth, canvasHeight);
}

// define your drawCreature function here:
function setup() {
    const canvasWidth = window.innerWidth;
    const canvasHeight = window.innerHeight; 
    createCanvas(canvasWidth, canvasHeight);

  

    // Exercise 2: 
    drawOval();

   
    // Exercise 4:
    drawFace();

    drawGrid(canvasWidth, canvasHeight);
}


// modify this function so that it accepts and honors
// the following parameters: centerX, centerY, size, and fillColor
function drawCircle(centerX, centerY, size, fillColor) {
    fill(fillColor);
    circle(centerX, centerY, size);
}

// modify this function so that it accepts and honors
// the following parameters: centerX, centerY, sizeX, sizeY, and fillColor
function drawOval(centerX, centerY, size, fillColor) {
    fill('gold');
    ellipse(200, 400, 100, 60);
}




// modify this function so that it accepts and honors
// the following 3 parameters: centerX, centerY, and size
function drawFace(centerX, centerY, size, fillColor) {
    fill('white');
    circle(100, 400, 50);
    fill('black');
    circle(92, 392, 8);
    circle(108, 392, 8);}

function drawFace(centerX, centerY, size, fillColor) {
     circle(100, 400, 150);
     fill('white');
    circle(100, 400, 10);
    fill('black');
    circle(92, 392, 8);
    circle(108, 392, 8);
}

