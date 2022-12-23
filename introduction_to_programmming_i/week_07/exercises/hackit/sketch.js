/*
Hack it: Conditionals

Make the robot heads bounce of the sides of the canvas.

You'll need to write several if statements to test if the robots have reached
the edge of the screen.

HINT:
You can easy switch the direction of the robot by mulitplying the current speed
by -1 I.E.

robotSpeed_x *= -1;

Extensions and alternatives
1. Customise the robots and add additional animations, such as flashing antenna
or mouths

2. Instead of bouncing of the edge of the screen make the robots wrap around to the
other corner

3. Make the robots bouce off one another as well. (this is quite tricky so don't
get into it unless you are feeling confident and have the time!)

*/

const robots = [];

function setup() {
   createCanvas(800, 600);

   robots.push(
      {
         id: 0,
         x: random(0, width - 100),
         y: random(0, height - 100),
         speed: {
            x: random(2, 5),
            y: random(2, 5),
         },
      },
      {
         id: 1,
         x: random(0, width - 100),
         y: random(0, height - 100),
         speed: {
            x: random(2, 5),
            y: random(2, 5),
         },
      }
   );
}

function draw() {
   background(255);
   strokeWeight(2);

   //robot heads
   fill(200);
   rect(robots[0].x, robots[0].y, 100, 100, 10);
   fill(70, 70, 100);
   rect(robots[1].x, robots[1].y, 100, 100, 10);

   //ears
   fill(255, 0, 0);

   //robot 1
   rect(robots[0].x - 7, robots[0].y + 30, 10, 33);
   rect(robots[0].x + 97, robots[0].y + 30, 10, 33);

   //robot 2
   rect(robots[1].x - 7, robots[1].y + 30, 10, 33);
   rect(robots[1].x + 97, robots[1].y + 30, 10, 33);

   //robots' antennas
   fill(250, 250, 0);
   ellipse(robots[0].x + 50, robots[0].y - 7, 10, 10);
   ellipse(robots[1].x + 50, robots[1].y - 7, 10, 10);

   fill(200, 0, 200);
   rect(robots[0].x + 40, robots[0].y - 3, 20, 10);
   rect(robots[1].x + 40, robots[1].y - 3, 20, 10);

   //robot 1's eyes
   fill(255);
   ellipse(robots[0].x + 25, robots[0].y + 30, 26, 26);
   point(robots[0].x + 25, robots[0].y + 30);
   ellipse(robots[0].x + 75, robots[0].y + 30, 26, 26);
   point(robots[0].x + 75, robots[0].y + 30);

   //robot 2's eyes
   ellipse(robots[1].x + 25, robots[1].y + 30, 26, 26);
   point(robots[1].x + 25, robots[1].y + 30);
   ellipse(robots[1].x + 75, robots[1].y + 30, 26, 26);
   point(robots[1].x + 75, robots[1].y + 30);

   //robots' noses
   fill(255, 0, 0);
   triangle(
      robots[0].x + 50,
      robots[0].y + 35,
      robots[0].x + 35,
      robots[0].y + 60,
      robots[0].x + 65,
      robots[0].y + 60
   );
   triangle(
      robots[1].x + 50,
      robots[1].y + 35,
      robots[1].x + 35,
      robots[1].y + 60,
      robots[1].x + 65,
      robots[1].y + 60
   );

   //robot 1 mouth
   noFill();
   beginShape();
   vertex(robots[0].x + 28, robots[0].y + 75);
   vertex(robots[0].x + 36, robots[0].y + 85);
   vertex(robots[0].x + 42, robots[0].y + 75);
   vertex(robots[0].x + 50, robots[0].y + 85);
   vertex(robots[0].x + 58, robots[0].y + 75);
   vertex(robots[0].x + 66, robots[0].y + 85);
   vertex(robots[0].x + 74, robots[0].y + 75);
   endShape();

   //robot 2 mouth
   beginShape();
   vertex(robots[1].x + 28, robots[1].y + 75);
   vertex(robots[1].x + 36, robots[1].y + 85);
   vertex(robots[1].x + 42, robots[1].y + 75);
   vertex(robots[1].x + 50, robots[1].y + 85);
   vertex(robots[1].x + 58, robots[1].y + 75);
   vertex(robots[1].x + 66, robots[1].y + 85);
   vertex(robots[1].x + 74, robots[1].y + 75);
   endShape();

   //update the robots location
   robots[0].x += robots[0].speed.x;
   robots[0].y += robots[0].speed.y;
   robots[1].x += robots[1].speed.x;
   robots[1].y += robots[1].speed.y;

   //place your if statements here

   // robot 1
   if (robots[0].x <= 0 || robots[0].x >= width - 100) changeDirection(0, 'x');
   if (robots[0].y <= 0 || robots[0].y >= height - 100) changeDirection(0, 'y');

   // robot 2
   if (robots[1].x <= 0 || robots[1].x >= width - 100) changeDirection(1, 'x');
   if (robots[1].y <= 0 || robots[1].y >= height - 100) changeDirection(1, 'y');

   let temp = true;

   // robots collision
   if (robots[0].x + 100 >= robots[1].x && robots[0].x <= robots[1].x + 100) {
      if (
         robots[0].y + 100 >= robots[1].y &&
         robots[0].y <= robots[1].y + 100
      ) {
         changeDirection(0, 'x');
         changeDirection(1, 'x');
      }
   }

   if (robots[0].y + 100 >= robots[1].y && robots[0].y <= robots[1].y + 100) {
      if (
         robots[0].x + 100 >= robots[1].x &&
         robots[0].x <= robots[1].x + 100
      ) {
         changeDirection(0, 'y');
         changeDirection(1, 'y');
      }
   }
}

function changeDirection(robot, axis) {
   axis === 'x' ? (robots[robot].speed.x *= -1) : (robots[robot].speed.y *= -1);
}
