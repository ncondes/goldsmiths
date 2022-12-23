/*
   The Game Project
   Week 3 - Part 3A
   Game interaction
*/

const floor = {
   y: 432,
};

const character = {
   x: 550,
   y: floor.y,
   direction: {
      left: false,
      right: false,
      falling: false,
      plummeting: false,
   },
};

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
}

function draw() {
   /////////// DRAWING CODE //////////
   background(100, 155, 255);
   noStroke();
   drawGround(0, width);

   if (character.direction.left && character.direction.falling) {
      jumpingLeft(character.x, character.y);
   } else if (character.direction.right && character.direction.falling) {
      jumpingRight(character.x, character.y);
   } else if (character.direction.left) {
      walkingLeft(character.x, character.y);
   } else if (character.direction.right) {
      walkingRight(character.x, character.y);
   } else if (character.direction.falling || character.direction.plummeting) {
      jumpingForwards(character.x, character.y);
   } else {
      standingFront(character.x, character.y);
   }

   ///////////INTERACTION CODE//////////
   characterMovement();
   gravity();
}

function characterMovement() {
   const steps = 2.5;
   const jump = 100;

   if (character.direction.left) {
      if (character.x < 0) return;
      character.x -= steps;
   }
   if (character.direction.right) {
      if (character.x > width) return;
      character.x += steps;
   }

   if (character.direction.falling && character.y === floor.y) {
      character.y -= jump;
   }

   if (character.direction.falling && character.y < floor.y) {
      character.y += 2.5;
      if (character.y === floor.y) {
         character.direction.falling = false;
      }
   }
}

function gravity() {
   if (character.y < floor.y && !character.direction.falling) {
      character.y += 2.5;
   }
}

function keyPressed() {
   if (keyCode === 65) {
      character.direction.left = true;
   }
   if (keyCode === 68) {
      character.direction.right = true;
   }
   if (keyCode === 87) {
      if (character.y === floor.y) character.direction.falling = true;
   }
}

function keyReleased() {
   if (keyCode === 65) {
      character.direction.left = false;
   }
   if (keyCode === 68) {
      character.direction.right = false;
   }
   if (keyCode === 87) {
      character.direction.falling = false;
   }
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

function jumpingForwards(x, y) {
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
   ellipse(x + 7.5, y - 12.5, 10);
   rect(x + 7.5, y - 7.5, 15, -15);
   ellipse(x - 7.5, y - 12.5, 10);
   rect(x - 22.5, y - 7.5, 15, -15);

   // arms
   fill(theme.character.skin);
   ellipse(x - 15, y - 60, 10, 10);
   rect(x - 20, y - 60, 10, 15);
   ellipse(x - 15, y - 45, 10, 10);
   ellipse(x + 15, y - 60, 10, 10);
   rect(x + 10, y - 60, 10, 15);
   ellipse(x + 15, y - 45, 10, 10);

   // logo
   fill(theme.character.secondary);
   textSize(8);
   text('JS', x - 5, y - 35);
}

function walkingLeft(x, y) {
   // left arm
   fill(theme.character.skin);
   ellipse(x - 12.5, y - 40, 10, 10);
   rect(x - 17.5, y - 40, 10, 15);
   ellipse(x - 12.5, y - 25, 10, 10);

   // body
   fill(theme.character.primary);
   ellipse(x, y - 50, 30, 30);
   rect(x - 15, y - 50, 30, 30);
   ellipse(x, y - 20, 30, 20);

   // eyes
   fill(theme.character.skin);
   ellipse(x - 12, y - 47.5, 3, 5);
   rect(x - 12, y - 50, 16, 5);
   ellipse(x + 4, y - 47.5, 3, 5);
   fill(theme.character.primary);
   ellipse(x - 10, y - 47.5, 2);
   ellipse(x, y - 47.5, 2);

   // legs
   ellipse(x + 10, y - 15, 10);
   rect(x + 5, y, 10, -15);
   ellipse(x - 10, y - 15, 10);
   rect(x - 15, y, 10, -15);

   // right arm
   fill(theme.character.skin);
   ellipse(x + 15, y - 40, 10, 10);
   rect(x + 10, y - 40, 10, 15);
   ellipse(x + 15, y - 25, 10, 10);

   // logo
   fill(theme.character.secondary);
   textSize(8);
   text('JS', x - 12.5, y - 35);
}

function walkingRight(x, y) {
   // right arm
   fill(theme.character.skin);
   ellipse(x + 12.5, y - 40, 10, 10);
   rect(x + 7.5, y - 40, 10, 15);
   ellipse(x + 12.5, y - 25, 10, 10);

   // body
   fill(theme.character.primary);
   ellipse(x, y - 50, 30, 30);
   rect(x - 15, y - 50, 30, 30);
   ellipse(x, y - 20, 30, 20);

   // eyes
   fill(theme.character.skin);
   ellipse(x - 4, y - 47.5, 3, 5);
   rect(x - 4, y - 50, 16, 5);
   ellipse(x + 12, y - 47.5, 3, 5);
   fill(theme.character.primary);
   ellipse(x, y - 47.5, 2);
   ellipse(x + 10, y - 47.5, 2);

   // legs
   ellipse(x + 10, y - 15, 10);
   rect(x + 5, y, 10, -15);
   ellipse(x - 10, y - 15, 10);
   rect(x - 15, y, 10, -15);

   // left arm
   fill(theme.character.skin);
   ellipse(x - 12.5, y - 40, 10, 10);
   rect(x - 17.5, y - 40, 10, 15);
   ellipse(x - 12.5, y - 25, 10, 10);

   // logo
   fill(theme.character.secondary);
   textSize(8);
   text('JS', x + 2.5, y - 35);
}

function jumpingRight(x, y) {
   // right arm
   fill(theme.character.skin);
   ellipse(x + 15, y - 60, 10, 10);
   rect(x + 10, y - 60, 10, 15);
   ellipse(x + 15, y - 45, 10, 10);

   // body
   fill(theme.character.primary);
   ellipse(x, y - 50, 30, 30);
   rect(x - 15, y - 50, 30, 30);
   ellipse(x, y - 20, 30, 20);

   // eyes
   fill(theme.character.skin);
   ellipse(x - 4, y - 47.5, 3, 5);
   rect(x - 4, y - 50, 16, 5);
   ellipse(x + 12, y - 47.5, 3, 5);
   fill(theme.character.primary);
   ellipse(x, y - 47.5, 2);
   ellipse(x + 10, y - 47.5, 2);

   // legs
   ellipse(x + 7.5, y - 12.5, 10);
   rect(x + 7.5, y - 7.5, 15, -15);
   ellipse(x - 7.5, y - 12.5, 10);
   rect(x - 22.5, y - 7.5, 15, -15);

   // left arm
   fill(theme.character.skin);
   ellipse(x - 12.5, y - 40, 10, 10);
   rect(x - 17.5, y - 40, 10, 15);
   ellipse(x - 12.5, y - 25, 10, 10);

   // logo
   fill(theme.character.secondary);
   textSize(8);
   text('JS', x + 2.5, y - 35);
}

function jumpingLeft(x, y) {
   // left arm
   fill(theme.character.skin);
   ellipse(x - 15, y - 60, 10, 10);
   rect(x - 20, y - 60, 10, 15);
   ellipse(x - 15, y - 45, 10, 10);

   // body
   fill(theme.character.primary);
   ellipse(x, y - 50, 30, 30);
   rect(x - 15, y - 50, 30, 30);
   ellipse(x, y - 20, 30, 20);

   // eyes
   fill(theme.character.skin);
   ellipse(x - 12, y - 47.5, 3, 5);
   rect(x - 12, y - 50, 16, 5);
   ellipse(x + 4, y - 47.5, 3, 5);
   fill(theme.character.primary);
   ellipse(x - 10, y - 47.5, 2);
   ellipse(x, y - 47.5, 2);

   // legs
   ellipse(x + 7.5, y - 12.5, 10);
   rect(x + 7.5, y - 7.5, 15, -15);
   ellipse(x - 7.5, y - 12.5, 10);
   rect(x - 22.5, y - 7.5, 15, -15);

   // right arm
   fill(theme.character.skin);
   ellipse(x + 15, y - 40, 10, 10);
   rect(x + 10, y - 40, 10, 15);
   ellipse(x + 15, y - 25, 10, 10);

   // logo
   fill(theme.character.secondary);
   textSize(8);
   text('JS', x - 12.5, y - 35);
}

function drawGround(x1, x2) {
   fill(theme.ground.green);
   rect(x1, floor.y, x2, width - floor.y);
}
