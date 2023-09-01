/*
Hack It: Robot Olympics

* Make each robot move down the track by increasing its x coordinate each frame. You will want to add some randomness to this so each robot races at a different speed. 
* Check which robot has won the race and display a message saying which robot won. Remember the lanes will are labelled 1-5 not 0-4. 
* Some other things to try out when you've done the basics: 
    * Switch the robots an.xd robots ar.yrays to a single array of objects. 
    * Change the look of each robot.  
    * [HARD] Make the robots run the other way, or down the screen not across. 
    * [V HARD] make the race distance longer without increasing the size of the canvas. 
    * [V HARD] add "on your marks.", "Get set" and "go" before the start of the race. 
*/

let finishLineX = 1150;
let winner;

const robots = [
   { x: 40, y: 50 },
   { x: 40, y: 200 },
   { x: 40, y: 350 },
   { x: 40, y: 500 },
   { x: 40, y: 650 },
];

function setup() {
   createCanvas(1200, 800);
}

function draw() {
   background(200, 100, 0);

   //draw the finish line and first line marker
   strokeWeight(7);
   stroke(255);
   line(finishLineX, 0, finishLineX, height);
   line(0, robots[0].y - 20, width, robots[0].y - 10);

   for (let i = 0; i < robots.length; i++) {
      //draw the robots
      strokeWeight(2);
      stroke(0);

      //robot head
      fill(200);
      rect(robots[i].x, robots[i].y, 100, 100, 10);

      //ears
      fill(255, 0, 0);

      rect(robots[i].x - 7, robots[i].y + 30, 10, 33);
      rect(robots[i].x + 97, robots[i].y + 30, 10, 33);

      //robots' antennas
      fill(250, 250, 0);
      ellipse(robots[i].x + 50, robots[i].y - 7, 10, 10);

      fill(200, 0, 200);
      rect(robots[i].x + 40, robots[i].y - 3, 20, 10);

      //eyes
      fill(255);
      ellipse(robots[i].x + 25, robots[i].y + 30, 26, 26);
      point(robots[i].x + 25, robots[i].y + 30);
      ellipse(robots[i].x + 75, robots[i].y + 30, 26, 26);
      point(robots[i].x + 75, robots[i].y + 30);

      //robots' noses
      fill(255, 0, 0);
      triangle(
         robots[i].x + 50,
         robots[i].y + 35,
         robots[i].x + 35,
         robots[i].y + 60,
         robots[i].x + 65,
         robots[i].y + 60
      );

      //robot 1 mouth
      noFill();
      beginShape();
      vertex(robots[i].x + 28, robots[i].y + 75);
      vertex(robots[i].x + 36, robots[i].y + 85);
      vertex(robots[i].x + 42, robots[i].y + 75);
      vertex(robots[i].x + 50, robots[i].y + 85);
      vertex(robots[i].x + 58, robots[i].y + 75);
      vertex(robots[i].x + 66, robots[i].y + 85);
      vertex(robots[i].x + 74, robots[i].y + 75);
      endShape();

      //draw the lower line marker for this lane
      strokeWeight(7);
      stroke(255);
      line(0, robots[i].y + 120, width, robots[i].y + 120);

      //TODO: update the robots x location
      if (robots[i].x + 100 < finishLineX && !winner) {
         const speed = 0.1 * random(1, 50);
         robots[i].x += speed;
      }

      //TODO Check if the robot has won and display message!
      if (robots[i].x + 100 >= finishLineX) {
         winner = i + 1;
      }
   }

   if (winner) {
      noStroke();
      fill(0);
      textSize(32);
      text(`Robot in lane ${winner} has won the race`, 40, 400);
   }
}
