const canvasWidth = window.innerWidth;
const canvasHeight = window.innerHeight; 

    
function setup() {
    createCanvas(canvasWidth, canvasHeight);
}

// replace this function with YOUR creature!
function drawCreature(centerX, centerY, size, primaryColor='yellow', secondaryColor= 'gold') {
    strokeWeight(0);
    fill(secondaryColor);
    ellipse(centerX + size * 2/3, centerY, size, size /4); 
    fill(primaryColor);
    circle(centerX, centerY, size); // 100, 400, 50
    fill('black');
    let sf = size / 6.5;
    circle(centerX - sf, centerY - sf, sf);     // left eye
    circle(centerX + sf, centerY - sf, sf);    // right eye
    fill ('pink')
    circle(centerX, centerY + size /10, size /5)
    
    
}

function mouseClicked() {
    drawCreature(mouseX, mouseY, Math.random()* 50 + 50);
}

function mouseDragged() {
    drawCreature(mouseX, mouseY, Math.random()* 50 + 50);
}
