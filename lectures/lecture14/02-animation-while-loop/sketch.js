let x = 100;
let y = 200;
let width = 50;
let speed = 10;

const canvasWidth = window.innerWidth;
const canvasHeight = window.innerHeight; 

function setup() {
    createCanvas(canvasWidth, canvasHeight);

    animateScene();
}

function sleep(ms=100) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function animateScene() {
    while(true) {
        
        x += speed;
        clear();
        noFill();
        circle(x, y, width);
        drawGrid(canvasWidth, canvasHeight);
        
        // sleep for 20 milliseconds, and then jump back to the top
        // of the loop.
        await sleep(20);
    }
}

