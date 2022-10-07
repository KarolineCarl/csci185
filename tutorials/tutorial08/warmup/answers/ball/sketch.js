const canvasWidth = window.innerWidth;
const canvasHeight = window.innerHeight; 
const centerX = canvasWidth / 2;
    
function setup() {
    createCanvas(canvasWidth, canvasHeight);
}

let ball = {
    x: centerX,
    y: 400,
    speed: 3,
    width: 50,
};

let leftWall = {
    x: centerX - 200, 
    y: 0, 
    width: 20, 
    height: canvasHeight,
    speed: 1
};

let rightWall = {
    x: centerX + 200, 
    y: 0, 
    width: 20, 
    height: canvasHeight,
    speed: -1
};

function draw() {
    // frameRate(4);
    clear();

    // draw walls:
    fill('red');
    rect(leftWall.x, leftWall.y, leftWall.width, leftWall.height);
    rect(rightWall.x, rightWall.y, rightWall.width, rightWall.height);

    // draw circle:
    fill('black');
    if (ball.x + ball.width / 2 >= rightWall.x) {
        ball.speed = Math.abs(ball.speed) * -1;
    }
    if (ball.x - ball.width / 2 <= leftWall.x + leftWall.width) {
        ball.speed = Math.abs(ball.speed);
    }
    circle(ball.x, ball.y, ball.width);
    ball.x += ball.speed;
    if (rightWall.x - leftWall.x <= ball.width + rightWall.width) {
        // walls are smashing the ball
        leftWall.speed *= -1;
        rightWall.speed *= -1;
    } else if (rightWall.x + rightWall.width >= canvasWidth) {
        // right wall hit the right edge of the canvas
        rightWall.speed *= -1;
    } else if (leftWall.x <= 0) {
        // left wall hit the left edge of the canvas
        leftWall.speed *= -1;
    }
    leftWall.x += leftWall.speed;
    rightWall.x += rightWall.speed;
    console.log("ball x position is:", ball.x);
}