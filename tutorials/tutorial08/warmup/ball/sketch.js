const canvasWidth = window.innerWidth;
const canvasHeight = window.innerHeight; 
    
function setup() {
    createCanvas(canvasWidth, canvasHeight);
}

let x = 200;
let speed = 5;


function draw() {
     //frameRate(1);
    clear();
if(x>=475) {
    speed=-5;
}
if(x<=175) {
    speed=5;
}

    // draw walls:
    fill('red');
    rect(100, 0, 50, canvasHeight);
    rect(500, 0, 50, canvasHeight);

    // draw circle:
    fill('black');
    circle(x, canvasHeight/2, 50);
    x += speed;
    console.log("x position is:", x);

    drawGrid(canvasWidth, canvasHeight);
}