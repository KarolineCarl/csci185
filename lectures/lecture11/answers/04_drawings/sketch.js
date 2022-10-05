function setup() {
    const canvasWidth = window.innerWidth;
    const canvasHeight = window.innerHeight; 
    createCanvas(canvasWidth, canvasHeight);
    background("pink");

    const centerX = canvasWidth / 2;
    const centerY = canvasHeight / 2;
    const radius = 200;
    const eyeWidth = radius / 10;
    const eyeHeight = radius / 7;
    
    fill('white');
    circle(centerX, centerY, radius);
    fill('black');
    ellipse(centerX - eyeHeight, centerY - eyeHeight, eyeWidth, eyeHeight);
    ellipse(centerX + eyeHeight, centerY - eyeHeight, eyeWidth, eyeHeight);


    // add your drawing here:
    // https://p5js.org/reference/#/p5/point
    // point(110, 20);

    // https://p5js.org/reference/#/p5/text
    // text("Here is some text", 200, 40);

    // https://p5js.org/reference/#/p5/circle
    // fill('red');
    // circle(550, 100, 100);

    // https://p5js.org/reference/#/p5/ellipse
    // fill('teal');
    // ellipse(100, 200, 60, 100);

    // Other shapes...
    // Polygon: https://p5js.org/reference/#/p5/beginShape
    // Line: https://p5js.org/reference/#/p5/line
    // Rectangle: https://p5js.org/reference/#/p5/rect
    // Curve: https://p5js.org/reference/#/p5/curve


    // for debugging:
    drawGrid(canvasWidth, canvasHeight)
}