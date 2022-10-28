const canvasWidth = window.innerWidth;
const canvasHeight = window.innerHeight; 

// feel free to change these values as you like!
const c1 = {
    x: 100,
    y: 300,
    width: 200,
    speed: 2,
    color: 'hotpink'
};

const c2 = {
    x: 100,
    y: 500,
    width: 200,
    speed: 2,
    color: 'green'
};

const c3 = {
    x: 400,
    y: 600,
    width: 300,
    speed: 2,
    color: 'blue'
};

// required to set up the canvas:
function setup() {
    createCanvas(canvasWidth, canvasHeight);
}


// animation loop:
function draw() {

    // clear the canvas:
    clear();

    // move the car:
    c1.x += c1.speed;
    c2.x += c2.speed;
    c3.x += c3.speed;
    
    // redraw the car:
    drawCar(c1.x, c1.y, c1.width, c1.color);
    drawCar(c2.x, c2.y, c2.width, c2.color);
    drawCar(c3.x, c3.y, c3.width, c3.color);

    // draw the grid (optional -- feel free to remove this line):
    drawGrid(canvasWidth, canvasHeight);
window.requestAnimationFrame(draw);
}


function drawCar(x, y, size, fillColor, wheelColor='black') {
    strokeWeight(0);
    
    // body
    fill(fillColor);
    rect(x - size/4, y - (size/5 + size/7), size / 2, size/7); // top
    rect(x - size/2, y - size/5, size, size/5); // bottom

    // wheels:
    fill(wheelColor);
    circle(x - size / 4, y, size / 6);
    circle(x + size / 4, y, size / 6);
}
