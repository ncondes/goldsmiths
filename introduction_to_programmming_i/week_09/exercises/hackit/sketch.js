//Hack it - we are the robot family

//TASK 1. modify the code so that all three robots are drawn
//TASK 2. try changing the numbers to create your robot family
//TASK 3. create more arrays and use the values in them to add more variation to the robots

var robotWidths;
var robotHeights;
var headWidths;

function setup() {
   //create a canvas for the robot
   createCanvas(1000, 700);
   robotWidths = [70, 100, 150];
   robotHeights = [50, 120, 110];
   headWidths = [0.7, 0.8, 1.2];
}

function draw() {
   translate(0, 500);
   createRobot(robotWidths[0], robotHeights[0], headWidths[0]);
   createRobot(robotWidths[1], robotHeights[1], headWidths[1]);
   createRobot(robotWidths[2], robotHeights[2], headWidths[2]);
}

function createRobot(rWidth, rHeight, hWidth) {
   strokeWeight(2);

   //ROBOT
   translate(200, 0);

   fill(200);
   rect(-rWidth / 2, -rHeight - 130, rWidth, 130);
   rect(-70, -rHeight - 130, 30, 100);
   rect(40, -rHeight - 130, 30, 100);
   rect(-30, -rHeight, 30, rHeight);
   rect(0, -rHeight, 30, rHeight);

   //robot heads
   fill(200);
   rect(-50 * hWidth, -rHeight - 230, 100 * hWidth, 100, 10);

   //ears
   fill(255, 0, 0);
   rect(-50 * hWidth - 10, -rHeight - 200, 10, 33);
   rect(50 * hWidth, -rHeight - 200, 10, 33);

   //robots' antennas
   fill(250, 250, 0);
   ellipse(0, -rHeight - 237, 10, 10);
   fill(200, 0, 200);
   rect(-10, -rHeight - 233, 20, 10);

   //robot's eyes
   fill(255);
   ellipse(-25 * hWidth, -rHeight - 200, 26, 26);
   point(-25 * hWidth, -rHeight - 200);
   ellipse(25 * hWidth, -rHeight - 200, 26, 26);
   point(25 * hWidth, -rHeight - 200);

   //robots' nose
   fill(255, 0, 0);
   triangle(0, -rHeight - 190, -15, -rHeight - 170, 15, -rHeight - 170);

   //robot mouth
   noFill();
   beginShape();
   vertex(-23, -rHeight - 155);
   vertex(-15, -rHeight - 145);
   vertex(-9, -rHeight - 155);
   vertex(-1, -rHeight - 145);
   vertex(7, -rHeight - 155);
   vertex(15, -rHeight - 145);
   vertex(23, -rHeight - 155);
   endShape();
}
