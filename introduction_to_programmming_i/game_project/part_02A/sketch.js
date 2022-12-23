/*

The Game Project

2 - Game character

Use p5 drawing functions such as rect, ellipse, line, triangle and
point to draw the different states of your game character.

Write the code so that your character appears inside the box for each
state.

IMPORTANT: For each box the variables gameChar_x & gameChar_y are set to the bottom
center of the box. You must combine these variables with arithmetic to
determine the position of each shape that you draw. This will later allow
you to adjust the position of your game character.

Each state is worth two marks:

//standing front facing = 2
//jumping facing forwards = 2
//walking left = 2
//walking right = 2
//jumping left and jumping right = 2

0 marks = not a reasonable attempt
1 mark = attempted but it lacks detail and you didn't use gameChar_x and gameChar_y correctly
2 marks = you've used a selction of shape functions and made consistent use of gameChar_x and gameChar_y

WARNING: Do not get too carried away. Around 10-20 lines of code should work for each state of your game character.

*/

let gameChar_x = 0;
let gameChar_y = 0;

const theme = {
   primary: '#182225',
   secondary: '#efd81d',
   skin: '#fbba8a',
};

function setup() {
   createCanvas(400, 600);
}

function draw() {
   background(255);

   //Standing, facing frontwards

   stroke(100);
   noFill();
   rect(20, 60, 50, 80);
   noStroke();
   fill(0);
   text('1. standing front facing', 20, 160);

   gameChar_x = 45;
   gameChar_y = 140;
   //Add your code here ...
   standingFront(gameChar_x, gameChar_y);

   //Jumping facing forwards
   stroke(100);
   noFill();
   rect(220, 60, 50, 80);
   noStroke();
   fill(0);
   text('2. jumping facing forwards', 220, 160);

   gameChar_x = 245;
   gameChar_y = 140;
   //Add your code here ...
   jumpingForwards(gameChar_x, gameChar_y);

   //Walking, turned left
   stroke(100);
   noFill();
   rect(20, 260, 50, 80);
   noStroke();
   fill(0);
   text('3. Walking left', 20, 360);

   gameChar_x = 45;
   gameChar_y = 340;
   //Add your code here ...
   walkingLeft(gameChar_x, gameChar_y);

   //Walking, turned right
   stroke(100);
   noFill();
   rect(220, 260, 50, 80);
   noStroke();
   fill(0);
   text('4. Walking right', 220, 360);

   gameChar_x = 245;
   gameChar_y = 340;
   //Add your code here ...
   walkingRight(gameChar_x, gameChar_y);

   //Jumping right
   stroke(100);
   noFill();
   rect(20, 460, 50, 80);
   noStroke();
   fill(0);
   text('5. Jumping to the right', 20, 560);

   gameChar_x = 45;
   gameChar_y = 540;
   //Add your code here ...
   jumpingRight(gameChar_x, gameChar_y);

   //Jumping to the left
   stroke(100);
   noFill();
   rect(220, 460, 50, 80);
   noStroke();
   fill(0);
   text('6. Jumping to the left', 220, 560);

   gameChar_x = 245;
   gameChar_y = 540;
   //Add your code here ...
   jumpingLeft(gameChar_x, gameChar_y);
}

function standingFront(x, y) {
   // body
   fill(theme.primary);
   ellipse(x, y - 50, 30, 30);
   rect(x - 15, y - 50, 30, 30);
   ellipse(x, y - 20, 30, 20);

   // eyes
   fill(theme.skin);
   ellipse(x - 8, y - 47.5, 3, 5);
   rect(x - 8, y - 50, 16, 5);
   ellipse(x + 8, y - 47.5, 3, 5);
   fill(theme.primary);
   ellipse(x - 5, y - 47.5, 2);
   ellipse(x + 5, y - 47.5, 2);

   // legs
   ellipse(x + 10, y - 15, 10);
   rect(x + 5, y, 10, -15);
   ellipse(x - 10, y - 15, 10);
   rect(x - 15, y, 10, -15);

   // arms
   fill(theme.skin);
   ellipse(x + 15, y - 40, 10, 10);
   rect(x + 10, y - 40, 10, 15);
   ellipse(x + 15, y - 25, 10, 10);
   ellipse(x - 15, y - 40, 10, 10);
   rect(x - 20, y - 40, 10, 15);
   ellipse(x - 15, y - 25, 10, 10);

   // logo
   fill(theme.secondary);
   textSize(8);
   text('JS', x - 5, y - 35);
}

function jumpingForwards(x, y) {
   // body
   fill(theme.primary);
   ellipse(x, y - 50, 30, 30);
   rect(x - 15, y - 50, 30, 30);
   ellipse(x, y - 20, 30, 20);

   // eyes
   fill(theme.skin);
   ellipse(x - 8, y - 47.5, 3, 5);
   rect(x - 8, y - 50, 16, 5);
   ellipse(x + 8, y - 47.5, 3, 5);
   fill(theme.primary);
   ellipse(x - 5, y - 47.5, 2);
   ellipse(x + 5, y - 47.5, 2);

   // legs
   ellipse(x + 7.5, y - 12.5, 10);
   rect(x + 7.5, y - 7.5, 15, -15);
   ellipse(x - 7.5, y - 12.5, 10);
   rect(x - 22.5, y - 7.5, 15, -15);

   // arms
   fill(theme.skin);
   ellipse(x - 15, y - 60, 10, 10);
   rect(x - 20, y - 60, 10, 15);
   ellipse(x - 15, y - 45, 10, 10);
   ellipse(x + 15, y - 60, 10, 10);
   rect(x + 10, y - 60, 10, 15);
   ellipse(x + 15, y - 45, 10, 10);

   // logo
   fill(theme.secondary);
   textSize(8);
   text('JS', x - 5, y - 35);
}

function walkingLeft(x, y) {
   // left arm
   fill(theme.skin);
   ellipse(x - 12.5, y - 40, 10, 10);
   rect(x - 17.5, y - 40, 10, 15);
   ellipse(x - 12.5, y - 25, 10, 10);

   // body
   fill(theme.primary);
   ellipse(x, y - 50, 30, 30);
   rect(x - 15, y - 50, 30, 30);
   ellipse(x, y - 20, 30, 20);

   // eyes
   fill(theme.skin);
   ellipse(x - 12, y - 47.5, 3, 5);
   rect(x - 12, y - 50, 16, 5);
   ellipse(x + 4, y - 47.5, 3, 5);
   fill(theme.primary);
   ellipse(x - 10, y - 47.5, 2);
   ellipse(x, y - 47.5, 2);

   // legs
   ellipse(x + 10, y - 15, 10);
   rect(x + 5, y, 10, -15);
   ellipse(x - 10, y - 15, 10);
   rect(x - 15, y, 10, -15);

   // right arm
   fill(theme.skin);
   ellipse(x + 15, y - 40, 10, 10);
   rect(x + 10, y - 40, 10, 15);
   ellipse(x + 15, y - 25, 10, 10);

   // logo
   fill(theme.secondary);
   textSize(8);
   text('JS', x - 12.5, y - 35);
}

function walkingRight(x, y) {
   // right arm
   fill(theme.skin);
   ellipse(x + 12.5, y - 40, 10, 10);
   rect(x + 7.5, y - 40, 10, 15);
   ellipse(x + 12.5, y - 25, 10, 10);

   // body
   fill(theme.primary);
   ellipse(x, y - 50, 30, 30);
   rect(x - 15, y - 50, 30, 30);
   ellipse(x, y - 20, 30, 20);

   // eyes
   fill(theme.skin);
   ellipse(x - 4, y - 47.5, 3, 5);
   rect(x - 4, y - 50, 16, 5);
   ellipse(x + 12, y - 47.5, 3, 5);
   fill(theme.primary);
   ellipse(x, y - 47.5, 2);
   ellipse(x + 10, y - 47.5, 2);

   // legs
   ellipse(x + 10, y - 15, 10);
   rect(x + 5, y, 10, -15);
   ellipse(x - 10, y - 15, 10);
   rect(x - 15, y, 10, -15);

   // left arm
   fill(theme.skin);
   ellipse(x - 12.5, y - 40, 10, 10);
   rect(x - 17.5, y - 40, 10, 15);
   ellipse(x - 12.5, y - 25, 10, 10);

   // logo
   fill(theme.secondary);
   textSize(8);
   text('JS', x + 2.5, y - 35);
}

function jumpingRight(x, y) {
   // right arm
   fill(theme.skin);
   ellipse(x + 15, y - 60, 10, 10);
   rect(x + 10, y - 60, 10, 15);
   ellipse(x + 15, y - 45, 10, 10);

   // body
   fill(theme.primary);
   ellipse(x, y - 50, 30, 30);
   rect(x - 15, y - 50, 30, 30);
   ellipse(x, y - 20, 30, 20);

   // eyes
   fill(theme.skin);
   ellipse(x - 4, y - 47.5, 3, 5);
   rect(x - 4, y - 50, 16, 5);
   ellipse(x + 12, y - 47.5, 3, 5);
   fill(theme.primary);
   ellipse(x, y - 47.5, 2);
   ellipse(x + 10, y - 47.5, 2);

   // legs
   ellipse(x + 7.5, y - 12.5, 10);
   rect(x + 7.5, y - 7.5, 15, -15);
   ellipse(x - 7.5, y - 12.5, 10);
   rect(x - 22.5, y - 7.5, 15, -15);

   // left arm
   fill(theme.skin);
   ellipse(x - 12.5, y - 40, 10, 10);
   rect(x - 17.5, y - 40, 10, 15);
   ellipse(x - 12.5, y - 25, 10, 10);

   // logo
   fill(theme.secondary);
   textSize(8);
   text('JS', x + 2.5, y - 35);
}

function jumpingLeft(x, y) {
   // left arm
   fill(theme.skin);
   ellipse(x - 15, y - 60, 10, 10);
   rect(x - 20, y - 60, 10, 15);
   ellipse(x - 15, y - 45, 10, 10);

   // body
   fill(theme.primary);
   ellipse(x, y - 50, 30, 30);
   rect(x - 15, y - 50, 30, 30);
   ellipse(x, y - 20, 30, 20);

   // eyes
   fill(theme.skin);
   ellipse(x - 12, y - 47.5, 3, 5);
   rect(x - 12, y - 50, 16, 5);
   ellipse(x + 4, y - 47.5, 3, 5);
   fill(theme.primary);
   ellipse(x - 10, y - 47.5, 2);
   ellipse(x, y - 47.5, 2);

   // legs
   ellipse(x + 7.5, y - 12.5, 10);
   rect(x + 7.5, y - 7.5, 15, -15);
   ellipse(x - 7.5, y - 12.5, 10);
   rect(x - 22.5, y - 7.5, 15, -15);

   // right arm
   fill(theme.skin);
   ellipse(x + 15, y - 40, 10, 10);
   rect(x + 10, y - 40, 10, 15);
   ellipse(x + 15, y - 25, 10, 10);

   // logo
   fill(theme.secondary);
   textSize(8);
   text('JS', x - 12.5, y - 35);
}
