/*
	The Game Project
	2B - using variables
*/

let floorPos_y;

let gameChar_x;
let gameChar_y;

let treePos_x;
let treePos_y;

let canyon;
let collectable;

const clouds = [
   { x: 150, y: 75 },
   { x: 400, y: 100 },
   { x: 800, y: 80 },
];

let cloudsAreMovingToTheRight = true;

let mountain;

const theme = {
   character: {
      primary: '#182225',
      secondary: '#efd81d',
      skin: '#fbba8a',
   },
   tree: {
      trunk: '#7c5b41',
      leaves: '#2ec654',
      darkGreen: '#0b492c',
   },
   ground: {
      green: '#82e33d',
      brown: '#ab7434',
      darkBrown: '#a24f2c',
   },
   mountains: {
      mountain1: '#68b746',
      peak1: '#4B8831',
      mountain2: '#3d613b',
      peak2: '#1F2F1E',
   },
   collectableItem: {
      yellow: '#f6ca05',
      darkYellow: '#f6a303',
      orange: '#e7791e',
   },
};

function setup() {
   createCanvas(1024, 576);
   floorPos_y = 432; //NB. we are now using a variable for the floor position

   //NB. We are now using the built in variables height and width
   gameChar_x = width / 2 - 20;
   gameChar_y = floorPos_y;

   treePos_x = width / 2 + 54;
   treePos_y = 432;
}

function draw() {
   // fill the sky blue
   background(100, 155, 255);
   noStroke();

   // ground
   drawGround();

   // mountains
   drawMountains(300, floorPos_y);

   // tree
   drawTree(treePos_x, treePos_y);

   // clouds
   clouds.forEach(({ x, y }) => {
      cloud(x, y);
   });

   if (cloudsAreMovingToTheRight) {
      clouds[0].x += 0.25;
      clouds[1].x += 0.25;
      clouds[2].x += 0.25;
   }

   if (!cloudsAreMovingToTheRight) {
      clouds[0].x -= 0.25;
      clouds[1].x -= 0.25;
      clouds[2].x -= 0.25;
   }

   if (clouds[0].x === 200) {
      cloudsAreMovingToTheRight = false;
   }

   if (clouds[0].x === 100) {
      cloudsAreMovingToTheRight = true;
   }

   // collectable item
   collectableItem(40, 40);

   // character;
   standingFront(gameChar_x, gameChar_y);
}

function mousePressed() {
   gameChar_x = mouseX;
   gameChar_y = mouseY;
}

function drawGround() {
   fill(theme.ground.brown);
   rect(0, floorPos_y, 634, width - floorPos_y);
   rect(830, floorPos_y, width, width - floorPos_y);

   fill(theme.ground.green);
   for (let i = 0; i < 9; i++) {
      arc(i * 70 + 15, floorPos_y, 40, 40, 0, PI);
      arc(i * 70 + 45, floorPos_y, 35, 35, 0, PI);
      arc(i * 70 + 64, floorPos_y, 20, 20, 0, PI);
   }

   noFill();
   stroke(theme.ground.darkBrown);
   strokeWeight(10);
   for (let i = 0; i < 9; i++) {
      arc(i * 70 + 15, floorPos_y + 45, 40, 20, 0, PI);
      arc(i * 70 + 50, floorPos_y + 45, 35, 17.5, 0, PI);
   }

   for (let i = 0; i < 9; i++) {
      arc(i * 70 + 15, floorPos_y + 90, 40, 20, 0, PI);
      arc(i * 70 + 50, floorPos_y + 90, 35, 17.5, 0, PI);
   }

   fill(theme.ground.green);
   noStroke();
   for (let i = 0; i < 3; i++) {
      arc(i * 70 + 850, floorPos_y, 40, 40, 0, PI);
      arc(i * 70 + 880, floorPos_y, 35, 35, 0, PI);
      arc(i * 70 + 899, floorPos_y, 20, 20, 0, PI);
   }

   noFill();
   stroke(theme.ground.darkBrown);
   strokeWeight(10);
   for (let i = 0; i < 9; i++) {
      arc(i * 70 + 855, floorPos_y + 45, 40, 20, 0, PI);
      arc(i * 70 + 890, floorPos_y + 45, 35, 17.5, 0, PI);
   }

   for (let i = 0; i < 9; i++) {
      arc(i * 70 + 855, floorPos_y + 90, 40, 20, 0, PI);
      arc(i * 70 + 890, floorPos_y + 90, 35, 17.5, 0, PI);
   }

   noStroke();
}

function standingFront(x, y) {
   // body
   fill(theme.character.primary);
   ellipse(x, y - 50, 30, 30);
   rect(x - 15, y - 50, 30, 30);
   ellipse(x, y - 20, 30, 20);

   // eyes
   fill(theme.character.skin);
   ellipse(x - 8, y - 47.5, 3, 5);
   rect(x - 8, y - 50, 16, 5);
   ellipse(x + 8, y - 47.5, 3, 5);
   fill(theme.character.primary);
   ellipse(x - 5, y - 47.5, 2);
   ellipse(x + 5, y - 47.5, 2);

   // legs
   ellipse(x + 10, y - 15, 10);
   rect(x + 5, y, 10, -15);
   ellipse(x - 10, y - 15, 10);
   rect(x - 15, y, 10, -15);

   // arms
   fill(theme.character.skin);
   ellipse(x + 15, y - 40, 10, 10);
   rect(x + 10, y - 40, 10, 15);
   ellipse(x + 15, y - 25, 10, 10);
   ellipse(x - 15, y - 40, 10, 10);
   rect(x - 20, y - 40, 10, 15);
   ellipse(x - 15, y - 25, 10, 10);

   // logo
   fill(theme.character.secondary);
   textSize(8);
   text('JS', x - 5, y - 35);
}

function drawTree(x, y) {
   const dim = { treeH: 55, treeW: 14 };

   fill(theme.tree.trunk);
   triangle(x - dim.treeW + 3, y, x, y - 15, x + dim.treeW - 3, y);
   rect(x - dim.treeW / 2, y, dim.treeW, -dim.treeH);
   fill(theme.tree.leaves);

   stroke(theme.tree.darkGreen);
   strokeWeight(1 / 4);
   ellipse(x - 30, y - (dim.treeH + 10), 20);
   ellipse(x + 30, y - (dim.treeH + 10), 20);
   rect(x - 30, y - (dim.treeH + 20), 60, 20);

   for (let i = 0; i < 5; i++) {
      ellipse(x - (i * -7.5 + 40), y - (i * 10 + (dim.treeH + 20)), 20);
      ellipse(x + (i * -7.5 + 40), y - (i * 10 + (dim.treeH + 20)), 20);
      rect(
         x - (i * -7.5 + 40),
         y - (i * 10 + (dim.treeH + 30)),
         i * -15 + 80,
         20
      );
   }

   noStroke();
}

function drawMountains(x, y) {
   fill(theme.mountains.mountain1);
   noStroke();
   triangle(x - 200, y, x + 200, y, x, y - 300);
   fill(theme.mountains.peak1);
   beginShape();
   vertex(x, y - 300);
   vertex(x + 66.5, y - 200);
   vertex(x + 20, y - 230);
   vertex(x + 10, y - 210);
   vertex(x - 20, y - 235);
   vertex(x - 66.5, y - 200);
   endShape();

   fill(theme.mountains.mountain2);
   triangle(x - 25, y, x + 225, y, x + 100, y - 200);
   fill(theme.mountains.peak2);
   beginShape();
   vertex(x + 100, y - 200);
   vertex(x + 162.5, y - 100);
   vertex(x + 110, y - 145);
   vertex(x + 90, y - 110);
   vertex(x + 80, y - 140);
   vertex(x + 37.5, y - 100);

   endShape();
}

function cloud(x, y) {
   fill(255);
   ellipse(x + 00, y, 50, 50);
   ellipse(x + 30, y, 30, 30);
   ellipse(x + 50, y, 20, 20);
}

function collectableItem(x, y) {
   fill(theme.collectableItem.yellow);
   ellipse(x, y, 40);

   fill(theme.collectableItem.darkYellow);
   ellipse(x, y, 30);

   fill(theme.collectableItem.orange);
   strokeWeight(1);
   stroke(0);
   triangle(x - 10, y + 10, x + 10, y + 10, x, y - 15);
   triangle(x + 10, y - 10, x - 10, y - 10, x, y + 15);
   ellipse(x, y, 5);
   noStroke();
}
