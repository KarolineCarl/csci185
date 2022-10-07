function setup() {
    const canvasWidth = window.innerWidth;
    const canvasHeight = window.innerHeight; 
    createCanvas(canvasWidth, canvasHeight);

    // Once you've created your drawCreature function, 
    // invoke drawCreature 5 times with the following arguments
    // (feel free to change the sizes, positions, and colors):
   
     drawCreature(92, 115, 85, '#5e6976', '#1b324d');
     drawCreature(487, 110, 101, '#bfdc65', '#abb880');
     drawCreature(454, 423, 141, '#aebb83', '#227876');
     drawCreature(333, 227, 99, '#94ba77', '#3f5364');
     drawCreature(117, 314, 300, '#648d8e');
    
    drawGrid(canvasWidth, canvasHeight);
}







// modify this function so that it accepts and honors
// the following 3 parameters: centerX, centerY, and size
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



