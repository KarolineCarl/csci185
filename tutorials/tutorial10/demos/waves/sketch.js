const canvasWidth = window.innerWidth;
const canvasHeight = window.innerHeight; 

const balls = [
    { x: 500, y: 250, d: 50, speed: 4 },
    { x: 200, y: 200, d: 80, speed: 2 },
]

function setup() {
    createCanvas(canvasWidth, canvasHeight);
}

counter = 0;
function draw() {
    clear();
    
    // ball 1:
    fill('hotpink');
    circle(balls[0].x, balls[0].y, balls[0].d);
    // uses the counter and the sin function to update the position 
    balls[0].y += 5 * Math.sin(counter / 50); 

    // ball 2: 
    fill('teal');
    circle(balls[1].x, balls[1].y, balls[1].d);
    balls[1].y += 5 * Math.cos(counter / 30);
    balls[1].x += 3;

    // loop ball 2 back to the beginning if it gets to the end:
    if (balls[1].x > canvasWidth + 100) {
        balls[1].x = -100;
    }

    counter++; // don't forget to increment the counter

    displayMessage();
}

function displayMessage() {
    fill('black');
     textAlign(CENTER);
     textSize(16);
     text("Uses the Math.sin() function with a counter to control movement.", canvasWidth/2, canvasHeight/2);
}