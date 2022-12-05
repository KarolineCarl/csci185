const canvasWidth = window.innerWidth;
const canvasHeight = window.innerHeight; 

function setup() {
    createCanvas(canvasWidth, canvasHeight);

    // function invocations goes here:
    drawMonster(100, 100, 150, '#0bc9cd', false);
    drawMonster(300, 200, 75, '#8093f1', true);
    drawMonster(100, 325, 100, '#8093f1', false);
    drawMonster(250, 375, 125, '#7fb285', true);
    drawMonster(550, 200, 250, '#7fb285',  false);

    drawGrid(canvasWidth, canvasHeight);
}


// function definition goes here:
function drawMonster(X, Y, size, color, isSurprised) {
    strokeWeight(1);
    fill(color);


rectMode(CENTER);
    fill(color);
    rect(X, Y, size);

    fill('white');
    let eye = size / 4.5;
    rect(X - eye, Y - eye, eye);
    rect(X + eye, Y - eye, eye);

    fill('black');
    let pupil = size/ 4.5;
    rect(X - pupil, Y - pupil/1.3, pupil/2);
    rect(X + pupil, Y - pupil/1.3, pupil/2);

    fill('black');
    if (isSurprised === false) {
    rect(X, Y + size/7, size/2, size/6);
    } else {
        rect(X, Y + size/7, size/4, size/6);
    }


}
