const canvasWidth = window.innerWidth;
const canvasHeight = window.innerHeight; 
    
function setup() {
    createCanvas(canvasWidth, canvasHeight);

    // function invocations goes here:
    drawCreature(100, 100, 150, '#0bc9cd', true);
    drawCreature(300, 200, 75, '#0bc9cd', false);
    drawCreature(100, 325, 100, '#8093f1', false);
    drawCreature(250, 375, 125, '#7fb285', true);
    drawCreature(550, 200, 250, '#102e4a', true);
    drawGrid(canvasWidth, canvasHeight);
}


// function definition goes here:
function drawCreature(centerX, centerY, size, Color ) {
    strokeWeight(0);
    fill(Color);
    
    circle(centerX, centerY, size); // 100, 400, 50
    
    fill('white');
    let sf = size / 4.5;
    circle(centerX - sf, centerY - sf, sf);     // left eye
    circle(centerX + sf, centerY - sf, sf);    // right eye
  
    fill('black');
    circle(500, 145, 20);
    circle(600, 145, 20);
    circle(70, 70, 15);
    circle(130, 70, 15);
    circle(285, 185, 5);
    circle(315, 185, 5);
    circle(120, 305, 10);
    circle(80, 305, 10);
    circle(225, 350, 12);
    circle(275, 350, 12);
    
    
    fill('#db5461');
    ellipse(550, 200, 70, 100); 
    ellipse(250, 375, 35, 50); 
    ellipse(100, 100, 52.5, 75); 

    
   

}
