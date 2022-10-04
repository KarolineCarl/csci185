function setup() {
    const canvasWidth = window.innerWidth;
    const canvasHeight = window.innerHeight; 
    createCanvas(canvasWidth, canvasHeight);

    // Exercise 1:
    drawCircle( 300, 300, 50, 'yellow');
    drawCircle( 100, 100, 100, 'pink');
    drawCircle( 200, 100, 50, 'blue');
    drawCircle( 300, 100, 100, 'red');
    drawCircle( 400, 100, 50, 'yellow');

    // Exercise 2: 
    drawOval();

    // Exercise 3:
    drawBullseye(100, 300, 100, 'navy', 'white');
    drawBullseye(200, 300, 50, 'yellow', 'white');
    drawBullseye(300, 300, 100, 'red', 'blue');

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
function drawOval() {
    fill('teal');
    ellipse(100, 200, 100, 62.5);
}


// modify this function so that it accepts and honors
// the following 3 parameters: centerX, centerY, and size
function drawBullseye(centerX, centerY, size, color1, color2) {
    fill(color1);
    circle(centerX, centerY, size);
    fill(color2);
    circle(centerX, centerY, size * .75);
    fill(color1);
    circle(centerX, centerY, size * .5);
    fill(color2);
    circle(centerX, centerY, size * .25);
}

// modify this function so that it accepts and honors
// the following 3 parameters: centerX, centerY, and size
function drawFace() {
    fill('white');
    circle(100, 400, 50);
    fill('black');
    circle(92, 392, 8);
    circle(108, 392, 8);
}
