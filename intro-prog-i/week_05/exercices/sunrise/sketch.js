let groundHeight;
let mountain1;
let mountain2;
let mountain3;

let tree;

let moon;
let sun;
let darkness;

function setup() {
   createCanvas(800, 600);
   //set the groundHeight proportional to the canvas size
   groundHeight = (height / 3) * 2;

   //initalise the mountain objects with properties to help draw them to the canvas
   mountain1 = {
      x: 400,
      y: groundHeight,
      height: 320,
      width: 230,
   };
   mountain2 = {
      x: 556,
      y: groundHeight,
      height: 200,
      width: 60,
   };
   mountain3 = {
      x: 540,
      y: groundHeight,
      height: 270,
      width: 200,
   };

   //initalise the tree object
   tree = {
      x: 150,
      y: groundHeight + 20,
      trunkWidth: 40,
      trunkHeight: 150,
      canopyWidth: 120,
      canopyHeight: 100,
      trunkColor: '#906133',
      leavesColor: '#5cd303',
   };

   //initalise the sun
   sun = {
      x: 150,
      y: 70,
      diameter: 80,
   };

   clouds = {
      x: 100,
      y: 50,
   };

   //TASK: intialise a moon object with an extra property for brightness
   moon = {
      x: 700,
      y: 70,
      diameter: 80,
   };

   //set the initial darkness
   darkness = 0;
}

function draw() {
   //TASK: update the values for the moons brightness, the sun's position and the darkness.
   darkness = (mouseX / width) * 150;
   brightness = 255 - (mouseX / width) * 255;
   sun.y = mouseX / 2 + 70;
   clouds.x = 100 - mouseX / 50;

   //You can either map this to the mouse's location (i.e. the futher left the mouse is the more daylight) or you can just change the values gradually over time.

   //draw the sky
   background(150, 200, 255);
   noStroke();

   //draw the sun
   fill(255, 255, 0);
   ellipse(sun.x, sun.y, sun.diameter);

   // draw clouds
   noStroke();
   fill(255, brightness);
   ellipse(clouds.x + 00, clouds.y, 50, 50);
   ellipse(clouds.x + 30, clouds.y, 30, 30);
   ellipse(clouds.x + 50, clouds.y, 20, 20);

   ellipse(clouds.x + 200, clouds.y + 20, 50, 50);
   ellipse(clouds.x + 230, clouds.y + 20, 30, 30);
   ellipse(clouds.x + 250, clouds.y + 20, 20, 20);

   ellipse(clouds.x + 400, clouds.y - 10, 50, 50);
   ellipse(clouds.x + 430, clouds.y - 10, 30, 30);
   ellipse(clouds.x + 450, clouds.y - 10, 20, 20);

   //draw the ground and make it green
   fill(70, 200, 0);
   rect(0, groundHeight, width, height - groundHeight);

   //draw birds
   if (brightness > 75) {
      noStroke();
      bird(80, 150);
      bird(300, 200);
      bird(400, 170);
   }

   //draw the mountains
   fill(120);
   triangle(
      mountain1.x,
      mountain1.y,
      mountain1.x + mountain1.width,
      mountain1.y,
      mountain1.x + mountain1.width / 2,
      mountain1.y - mountain1.height
   );

   triangle(
      mountain2.x,
      mountain2.y,
      mountain2.x + mountain2.width,
      mountain2.y,
      mountain2.x + mountain2.width / 2,
      mountain2.y - mountain2.height
   );

   triangle(
      mountain3.x,
      mountain3.y,
      mountain3.x + mountain3.width,
      mountain3.y,
      mountain3.x + mountain3.width / 2,
      mountain3.y - mountain3.height
   );

   //TASK: You can draw the tree yourself
   fill(tree.trunkColor);
   rect(tree.x, tree.y, tree.trunkWidth, -tree.trunkHeight);

   fill(tree.leavesColor);
   ellipse(
      tree.x + tree.trunkWidth / 2,
      tree.y - tree.trunkHeight,
      tree.canopyWidth,
      tree.canopyHeight
   );

   //TASK: make the scene dark by drawing a rectangle that covers the whole canvas.
   fill(0, darkness);
   rect(0, 0, width, height);
   //Use the alpha value of fill to determine how dark to make it

   //TASK: you'll need to draw the moon too. Make sure you use brightness to adjust the colour
   fill(230, 232, 203, darkness);
   ellipse(moon.x, moon.y, moon.diameter);

   //draw stars
   if (brightness < 75) {
      noStroke();
      star(100, 80);
      star(210, 92);
      star(290, 86);
      star(370, 99);
      star(450, 106);
      star(570, 82);
      star(630, 91);
   }
}

function bird(x, y) {
   fill(0);
   stroke(0);
   strokeWeight(2);
   line(x - 10, y - 10, x, y);
   line(x, y, x + 10, y - 10);
   noStroke();
}

function star(x, y, brightness) {
   const size = 3;
   fill(255, brightness - 50);
   beginShape();
   vertex(x, y - size);
   vertex(x + size, y);
   vertex(x, y + size);
   vertex(x - size, y);
   vertex(x, y - size);
   endShape();
}
