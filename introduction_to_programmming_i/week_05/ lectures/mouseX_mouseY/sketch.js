function setup() {
   createCanvas(600, 600);
   fill(255, 255, 255);
}

function draw() {
   // This background line clear the canvas on every iteration
   background(0, 0, 0);
   // fill(255, 255, 255);

   // mouseX and mouseY are built in variables that takes the position of the mouse
   ellipse(mouseX, mouseY, 100, 100);

   // width and height takes the measure of our canvas setup
   // ellipse(width / 2, height / 2, width, height);
}

function mousePressed() {
   fill(255, 0, 0);
}

function keyPressed() {
   fill(255, 255, 255);
}
