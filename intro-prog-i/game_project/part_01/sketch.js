/*

The Game Project

1 - Background Scenery

Use p5 drawing functions such as rect, ellipse, line, triangle and
point to draw the scenery as set out in the code comments. The items
should appear next to the text titles.

Each bit of scenery is worth two marks:

0 marks = not a reasonable attempt
1 mark = attempted but it's messy or lacks detail
2 marks = you've used several shape functions to create the scenery

I've given titles and chosen some base colours, but feel free to
imaginatively modify these and interpret the scenery titles loosely to
match your game theme.

WARNING: Do not get too carried away. If you're shape takes more than 15 lines of code to draw then you've probably over done it.


*/

let cloudx = 100;
let cloudy = 100;

function setup() {
   createCanvas(1024, 576);
}

function draw() {
   background(100, 155, 255); //fill the sky blue

   noStroke();
   fill(0, 155, 0);
   rect(0, 432, 1024, 144); //draw some green ground

   //1. a cloud in the sky
   //... add your code here

   makeCloud(cloudx, cloudy - 50);
   makeCloud(cloudx + 100, cloudy + 100);
   //increase the position of the cloud to simulate movement
   cloudx += 0.1;

   fill('#68b746');
   noStroke();
   triangle(300, 432, 700, 432, 500, 100);
   fill('#3d613b');
   triangle(475, 432, 725, 432, 600, 200);

   noStroke();
   fill(255);
   text('cloud', 200, 100);

   //2. a mountain in the distance
   //... add your code here

   noStroke();
   fill(255);
   text('mountain', 500, 256);

   //3. a tree
   //... add your code here
   makeTree(880, 432);

   noStroke();
   fill(255);
   text('tree', 800, 346);

   //4. a canyon
   //NB. the canyon should go from ground-level to the bottom of the screen
   makeCanyon();

   //... add your code here

   noStroke();
   fill(255);
   text('canyon', 100, 480);

   //5. a collectable token - eg. a jewel, fruit, coins
   //... add your code here
   makeCollectableItem(550, 412);

   noStroke();
   fill(255);
   text('collectable item', 400, 400);

   //A helpful mouse pointer
   push();
   fill(0);
   noStroke();
   text(mouseX + ',' + mouseY, mouseX, mouseY);
   pop();
}

function makeCloud(cloudx, cloudy) {
   fill(250);
   noStroke();
   ellipse(cloudx, cloudy, 70, 50);
   ellipse(cloudx + 10, cloudy + 10, 70, 50);
   ellipse(cloudx - 20, cloudy + 10, 70, 50);
}

function makeTree(treex, treey) {
   fill('#8a562c');
   rect(treex, treey, 20, -100);
   rect(treex - 2, treey - 10, 10, -50);
   rect(treex + 12, treey - 30, 10, -50);
   rect(treex - 8, treey, 35, -3);

   const leavesx = treex + 15;
   const leavesy = treey - 120;

   fill('#9eb531');
   ellipse(leavesx, leavesy, 70, 50);
   ellipse(leavesx + 10, leavesy + -20, 70, 50);
   ellipse(leavesx - 20, leavesy + -10, 70, 50);
   ellipse(leavesx - 20, leavesy + 20, 70, 50);
   ellipse(leavesx, leavesy, 70, 50);
   ellipse(leavesx + -40, leavesy + 10, 70, 50);
   ellipse(leavesx + 30, leavesy + 10, 70, 50);
   ellipse(leavesx + 20, leavesy + 20, 70, 50);

   fill('#7ea837');
   ellipse(leavesx, leavesy, 70, 50);
   ellipse(leavesx + 10, leavesy + 10, 70, 50);
   ellipse(leavesx - 20, leavesy + 10, 70, 50);
}

function makeCollectableItem(itemx, itemy) {
   fill('#f6ca05');
   ellipse(itemx, itemy, 40);
   fill('#f6a303');
   ellipse(itemx, itemy, 30);
   fill('#e7791e');
   strokeWeight(100);
   triangle(itemx + 10, itemy - 10, itemx - 10, itemy - 10, itemx, itemy + 15);
   triangle(itemx - 10, itemy + 10, itemx + 10, itemy + 10, itemx, itemy - 15);
}

function makeCanyon() {
   fill('#a0522d');
   strokeWeight(12);
   beginShape();
   vertex(175, 432);
   vertex(120, 576);
   vertex(340, 576);
   vertex(280, 490);
   vertex(225, 432);
   endShape(CLOSE);

   fill('#cd853f');
   beginShape();
   vertex(150, 576);
   vertex(182, 490);
   vertex(185, 432);
   vertex(220, 432);
   vertex(236, 480);
   vertex(265, 506);
   vertex(300, 576);
   endShape(CLOSE);

   fill(100, 155, 255);
   beginShape();
   vertex(184, 458);
   vertex(185, 432);
   vertex(220, 432);
   vertex(229, 458);

   endShape(CLOSE);
}
