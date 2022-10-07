function setup() {
    const canvasWidth = window.innerWidth;
    const canvasHeight = window.innerHeight; 
    createCanvas(canvasWidth, canvasHeight);
    
    ////////////
    // POINTS //
    ////////////
    // https://p5js.org/reference/#/p5/point
    strokeWeight(10);
    point(110, 20);
    point(120, 40);
    point(130, 20);
    point(140, 40);
    point(150, 20);
    point(160, 40);
    point(170, 20);

    //////////
    // TEXT //
    //////////
    // https://p5js.org/reference/#/p5/text
    text("Here is some text", 200, 40);

    textSize(22);
    textFont('Helvetica');
    textStyle(BOLD);
    fill('teal');
    text("Here is some more text", 400, 40);

    /////////////
    // CIRCLES //
    /////////////
    // https://p5js.org/reference/#/p5/circle
    fill('red');
    circle(550, 100, 100);
    fill('red');
    circle(700, 100, 35);

    ///////////
    // OVALS //
    ///////////
    // https://p5js.org/reference/#/p5/ellipse
    fill('teal');
    ellipse(100, 200, 60, 100);
    fill('teal');
    strokeWeight(10);
    stroke('red');
    ellipse(300, 200, 150, 100);
    strokeWeight(1);
    stroke('black');

    //////////////
    // POLYGONS //
    //////////////
    // https://p5js.org/reference/#/p5/beginShape
    // first poly:
    strokeWeight(5);
    stroke('teal');
    noFill();
    beginShape();
    vertex(100, 300);
    vertex(150, 350);
    vertex(200, 300);
    vertex(250, 350);
    vertex(300, 300);
    endShape();

    beginShape();
    fill('hotpink');
    stroke('teal');
    // uncomment if you want your polygon to be more rounded:
    // strokeWeight(45);
    // strokeJoin(ROUND);
    vertex(400, 300);
    vertex(450, 350);
    vertex(500, 300);
    vertex(550, 350);
    vertex(600, 300);
    endShape(CLOSE);


    ////////////////////
    // LINES & CURVES //
    ////////////////////
    // line
    // https://p5js.org/reference/#/p5/line
    stroke('red');
    strokeWeight(5);
    line(100, 400, 300, 450);

    // curve (smiley)
    // https://p5js.org/reference/#/p5/curve
    noFill()
    stroke('black');
    curve(
        300, 0,       // control point
        400, 400, 
        600, 400,
        700, 0        // control point
    );

    // curve (frowny)
    // https://p5js.org/reference/#/p5/curve
    fill(color(255, 0, 0, 100))
    stroke('navy');
    curve(
        600, 850,       // control point
        700, 450, 
        900, 450,
        1000, 850        // control point
    );


    ////////////////
    // RECTANGLES //
    ////////////////
    // https://p5js.org/reference/#/p5/rect
    rect(30, 500, 50, 100);
    rect(130, 500, 50, 100, 200); // smoothing


    drawGrid(canvasWidth, canvasHeight);
}
