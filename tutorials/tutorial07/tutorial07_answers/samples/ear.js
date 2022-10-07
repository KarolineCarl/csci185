function setup(){
    createCanvas(800, 800);

	background(240);

	// left ear
    push();
	translate(100, 300); 
	rotate(-1);
    fill(0);
	ellipse(0, 0, 350, 150);
    pop();

    // left ear
    push();
	translate(500, 300); 
	rotate(1);
    fill(0);
	ellipse(0, 0, 350, 150);
    pop();

    // grid
    drawGrid(800, 800);
}
