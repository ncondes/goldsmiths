/**
 * The Game Project
 * Week 14 - Part 6
 * Nicolas Conde salazar
 */

// floor level
let floor;
// object with character properties
let character;
// array with position of each canyon drawn
let canyons;
// array with position of each tree drawn
let trees;
// array with the position of each cloud drawn
let clouds;
// array with the position of each mountain drawn
let mountains;
// array with collectable items props
let collectables;
// object with hex colors for each element on the game
let theme;
// camera variable to set the scroll of the screen
let camera;
// value for items collected
let game_score;
// object with flagpole properties
let flagpole;
// lives counter
let lives;

function setup() {
   createCanvas(1024, 576);

   // initialize variables
   lives = 3;
   floor = { pos: { y: 430 } };

   startGame();
}

function draw() {
   // sky
   background(theme.sky.blue);
   noStroke();

   // ground
   drawGround(0, width);

   push();
   translate(camera.pos.x, 0);

   // canyons
   drawCanyons();

   // mountains
   drawMountains();

   // trees
   drawTrees();

   // clouds
   drawClouds();

   // collectable items
   drawCollectables();

   // flagpole
   renderFlagpole(flagpole.pos.x);

   pop();

   // lives
   drawLives();

   // score
   drawScore();

   // text
   if (drawText()) return;

   // character
   drawCharacter();

   // interaction
   characterMovement();
   collectItems();
   gravity();
   plummeting();
   checkPlayerDie();

   if (!flagpole.isReached) {
      checkFlagpole();
   }
}

// listener docs
// https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener
// window docs
// https://developer.mozilla.org/en-US/docs/Web/API/Window/location

// note: i decided to use this method because once we do a return in the draw function the game interaction functions are disabled

// listener that checks if the keyup event occurs
document.addEventListener('keyup', (event) => {
   // validate if the key pressed is the 'space' and if the player is run out of lives or completed the level
   if (event.code === 'Space' && (lives === 0 || flagpole.isReached)) {
      // use the window object to reload the page (easy way to restart the game)
      window.location.reload();
   }
});

/**
 * functions for game interactions
 */

// start game
function startGame() {
   character = {
      pos: {
         x: 500,
         y: floor.pos.y,
      },
      direction: {
         left: false,
         right: false,
      },
      isMoving: false,
      isJumping: false,
      isFalling: false,
      rooted: false,
   };

   canyons = [
      { pos: { x1: 650, x2: 800 } },
      { pos: { x1: 1150, x2: 1300 } },
      { pos: { x1: 2000, x2: 2150 } },
      { pos: { x1: 2650, x2: 2800 } },
   ];

   trees = [
      { pos: { x: 400 } },
      { pos: { x: 900 } },

      { pos: { x: 1400 } },
      { pos: { x: 1900 } },

      { pos: { x: 2400 } },
      { pos: { x: 2900 } },
   ];

   clouds = [
      { pos: { x: 150, y: 75 } },
      { pos: { x: 400, y: 100 } },
      { pos: { x: 800, y: 80 } },

      { pos: { x: 1150, y: 75 } },
      { pos: { x: 1400, y: 100 } },
      { pos: { x: 1800, y: 80 } },

      { pos: { x: 2150, y: 75 } },
      { pos: { x: 2400, y: 100 } },
      { pos: { x: 2800, y: 80 } },
   ];

   mountains = [
      { pos: { x: 150 } },
      { pos: { x: 1600 } },
      { pos: { x: 3100 } },
   ];

   collectables = [
      { pos: { x: 350 }, isFound: false },
      { pos: { x: 600 }, isFound: false },
      { pos: { x: 950 }, isFound: false },

      { pos: { x: 1350 }, isFound: false },
      { pos: { x: 1600 }, isFound: false },
      { pos: { x: 1950 }, isFound: false },

      { pos: { x: 2350 }, isFound: false },
      { pos: { x: 2600 }, isFound: false },
      { pos: { x: 2950 }, isFound: false },
   ];

   game_score = 0;

   flagpole = {
      pos: { x: 3500 },
      isReached: false,
      raiseFlag: false,
      flag: [floor.pos.y - 5, floor.pos.y - 45, floor.pos.y - 25],
   };

   theme = {
      canyon: { lightBrown: '#b79576', brown: '#ab7434', darkBrown: '#a24f2c' },
      character: { black: '#182225', yellow: '#efd81d', skin: '#fbba8a' },
      collectable: {
         yellow: '#f6ca05',
         darkYellow: '#f6a303',
         orange: '#e7791e',
      },
      flagpole: {
         gray: '#a7a6a5',
         darkGray: '#505050',
         green: '#5eb750',
         red: '#e73d2a',
      },
      ground: { green: '#5ead2a' },
      lives: { red: '#ec4134' },
      mountains: [
         { green: '#5E865C', darkGreen: '#344432' },
         { green: '#3d613b', darkGreen: '#1F2F1E' },
      ],
      sky: { blue: '#649bff' },
      tree: { brown: '#7c5b41', green: '#2ec654', darkGreen: '#0b492c' },
   };

   camera = { pos: { x: 0 } };
}

// function that handles gravity in our game
function gravity() {
   const fall = 5;

   // character fell in the canyon
   if (character.rooted && character.isFalling) {
      character.pos.y += 2 * fall;
      if (character.pos.y > height) {
         character.isFalling = false;
      }
   }

   // check that the character is over the ground and is falling
   if (character.pos.y < floor.pos.y && character.isFalling) {
      character.pos.y += fall;
      // if the character reach the ground, stop falling
      if (character.pos.y === floor.pos.y) {
         character.isFalling = false;
      }
   }
}

// function that handles if the character falls into the canyon
function plummeting() {
   const offset = camera.pos.x;
   let isCharacterInTheCanyon = false;

   for (let i = 0; i < canyons.length; i++) {
      if (
         // add the offset according to the camera position to the canyon, so that the character can fall into it
         character.pos.x - 15 > canyons[i].pos.x1 + offset &&
         character.pos.x + 15 < canyons[i].pos.x2 + offset
      ) {
         isCharacterInTheCanyon = true;
      }
   }

   // if more than the half of the character is in the area of the canyon and the character is at the ground level too, then plummeting
   if (isCharacterInTheCanyon && character.pos.y >= floor.pos.y) {
      character.direction = { left: false, right: false };
      character.isFalling = true;
      // root the character (deactivate the ability to move)
      character.rooted = true;
   }
}

// function that handles the character movement and scroll of the camera
function characterMovement() {
   // if character is not able to move (fell into the canyon), do nothing
   if (character.rooted) return;

   const steps = 4;
   const jump = 10;

   // move to the left
   if (character.direction.left && character.isMoving) {
      character.pos.x > width * 0.5
         ? (character.pos.x -= steps)
         : (camera.pos.x += steps);
   }

   // move to the right
   if (character.direction.right && character.isMoving) {
      character.pos.x < width * 0.5
         ? (character.pos.x += steps)
         : (camera.pos.x -= steps);
   }

   // jump
   if (character.isJumping) {
      character.pos.y -= jump;
      if (character.pos.y <= floor.pos.y - 150) {
         character.isJumping = false;
         character.isFalling = true;
      }
   }
}

// function that checks if the character is close enough to an element
function characterIsCloseEnoughTo(element, distance = 30) {
   // distance is how close has to be the character to pick up the item, by default is 30
   const offset = camera.pos.x;

   const result =
      dist(
         // add the offset according to the camera position to the element position, so that the character can pick it up
         element + offset,
         floor.pos.y,
         character.pos.x,
         character.pos.y
      ) < distance;

   return result;
}

// function that handles collecting an item by the character
function collectItems() {
   for (let i = 0; i < collectables.length; i++) {
      // check if the character is close enough to pick up the item
      if (characterIsCloseEnoughTo(collectables[i].pos.x)) {
         collectables[i].isFound = true;
      }
   }

   // check the collectable items that were found, if the item was found increase the score
   game_score = collectables.reduce((acc, curr) => {
      curr.isFound ? acc++ : null;
      return acc;
   }, 0);
}

// function that handles when character reach the flagpole
function checkFlagpole() {
   // check if the character is close enough to the flag
   if (characterIsCloseEnoughTo(flagpole.pos.x, 20)) {
      flagpole.raiseFlag = true;
   }

   if (flagpole.raiseFlag) {
      // raise the flag if is not in the top position
      if (flagpole.flag[1] > floor.pos.y - 145) {
         flagpole.flag[0] -= 10;
         flagpole.flag[1] -= 10;
         flagpole.flag[2] -= 10;
      }

      // once the flag reach the top position, set to true the isReached value
      if (flagpole.flag[1] === floor.pos.y - 145) {
         flagpole.isReached = true;
      }
   }
}

// function that handles character's lives
function checkPlayerDie() {
   if (character.pos.y > height + 500 && lives > 0) {
      lives--;
      if (lives > 0) startGame();
   }
}

function keyPressed() {
   if (character.rooted) return;

   // if user press 'a'
   if (keyCode === 65) {
      // reset character direction
      character.direction = { left: false, right: false };
      character.isMoving = true;
      character.direction.left = true;
   }

   // if user press 'd'
   if (keyCode === 68) {
      // reset character direction
      character.direction = { left: false, right: false };
      character.isMoving = true;
      character.direction.right = true;
   }

   // if user press 'w'
   if (keyCode === 87) {
      // check that the character is at the same level of the ground to be able to jump, this prevents from doing a double jump
      if (character.pos.y === floor.pos.y) {
         character.isJumping = true;
      }
   }
}

function keyReleased() {
   // if user release the key 'a'
   if (keyCode === 65) {
      // check if character is moving to the other direction, to prevent stop the movement of the character if the user press another movement key faster than releasing the other.
      if (character.direction.right && character.isMoving) return;
      character.isMoving = false;
   }

   // if user release the key 'd'
   if (keyCode === 68) {
      // check if character is moving to the other direction, to prevent stop the movement of the character if the user press another movement key faster than releasing the other.
      if (character.direction.left && character.isMoving) return;
      character.isMoving = false;
   }
}

/**
 * functions for each element on the game.
 * so the code inside the draw function is easier to read.
 */

// draw the ground from a position x1 to a position x2
function drawGround(x1, x2) {
   fill(theme.ground.green);
   rect(x1, floor.pos.y, x2 - x1, height);
}

// draw a canyon from a position x1 to a position x2
function drawCanyon(x1, x2) {
   fill(theme.sky.blue);
   rect(x1, floor.pos.y, x2 - x1, floor.pos.y + 100);

   fill(theme.canyon.lightBrown);
   rect(x1, floor.pos.y + 110, x2 - x1, height);

   fill(theme.canyon.brown);
   rect(x1, floor.pos.y + 120, x2 - x1, height);

   fill(theme.canyon.darkBrown);
   rect(x1, floor.pos.y + 130, x2 - x1, height);
}

// draw a two mountains
function drawMountain(x) {
   // big mountain
   fill(theme.mountains[0].green);
   noStroke();
   triangle(x - 125, floor.pos.y, x + 125, floor.pos.y, x, floor.pos.y - 200);
   // peak
   fill(theme.mountains[0].darkGreen);
   beginShape();
   vertex(x, floor.pos.y - 200);
   vertex(x + 44, floor.pos.y - 130);
   vertex(x + 10, floor.pos.y - 155);
   vertex(x + 0, floor.pos.y - 140);
   vertex(x - 10, floor.pos.y - 160);
   vertex(x - 44, floor.pos.y - 130);
   endShape();

   // little mountain
   fill(theme.mountains[1].green);
   triangle(
      x - 25,
      floor.pos.y,
      x + 150,
      floor.pos.y,
      x + 62.5,
      floor.pos.y - 140
   );
   // peak
   fill(theme.mountains[1].darkGreen);
   beginShape();
   vertex(x + 62.5, floor.pos.y - 140);
   vertex(x + 100, floor.pos.y - 80);
   vertex(x + 70, floor.pos.y - 105);
   vertex(x + 60, floor.pos.y - 85);
   vertex(x + 50, floor.pos.y - 100);
   vertex(x + 25, floor.pos.y - 80);
   endShape();
}

// draw a tree with a determinate position x
function drawTree(x) {
   // dimensions of the tree
   const dim = { treeH: 55, treeW: 14 };

   // trunk
   fill(theme.tree.brown);
   triangle(
      x - dim.treeW + 3,
      floor.pos.y,
      x,
      floor.pos.y - 15,
      x + dim.treeW - 3,
      floor.pos.y
   );
   rect(x - dim.treeW / 2, floor.pos.y, dim.treeW, -dim.treeH);

   // leaves
   fill(theme.tree.green);
   stroke(theme.tree.darkGreen);
   strokeWeight(1 / 4);
   ellipse(x - 30, floor.pos.y - (dim.treeH + 10), 20);
   ellipse(x + 30, floor.pos.y - (dim.treeH + 10), 20);
   rect(x - 30, floor.pos.y - (dim.treeH + 20), 60, 20);
   for (let i = 0; i < 5; i++) {
      ellipse(
         x - (i * -7.5 + 40),
         floor.pos.y - (i * 10 + (dim.treeH + 20)),
         20
      );
      ellipse(
         x + (i * -7.5 + 40),
         floor.pos.y - (i * 10 + (dim.treeH + 20)),
         20
      );
      rect(
         x - (i * -7.5 + 40),
         floor.pos.y - (i * 10 + (dim.treeH + 30)),
         i * -15 + 80,
         20
      );
   }
   noStroke();
}

// draw a cloud with a determinate position x and y
function drawCloud(x, y) {
   fill(255);
   ellipse(x + 00, y, 50, 50);
   ellipse(x + 30, y, 30, 30);
   ellipse(x + 50, y, 20, 20);
}

// draw a collectable item
function drawCollectable(x) {
   fill(theme.collectable.yellow);
   ellipse(x, floor.pos.y - 15, 30);

   stroke(0);
   strokeWeight(1);
   fill(theme.collectable.darkYellow);
   ellipse(x, floor.pos.y - 15, 20);

   fill(theme.collectable.orange);
   triangle(
      x - 5,
      floor.pos.y - 15 + 4,
      x + 5,
      floor.pos.y - 15 + 4,
      x,
      floor.pos.y - 15 - 6
   );
   noStroke();
}

// draw flagpole
function renderFlagpole(x) {
   // pole
   stroke(theme.flagpole.darkGray);
   fill(theme.flagpole.gray);
   rect(x - 2.5, floor.pos.y, 5, -150);
   ellipse(x, floor.pos.y - 150, 10);

   // flag
   fill(flagpole.isReached ? theme.flagpole.green : theme.flagpole.red);
   triangle(
      x + 4,
      flagpole.flag[0],
      x + 4,
      flagpole.flag[1],
      x + 75,
      flagpole.flag[2]
   );
}

// draw heart
function drawHeart(x) {
   const size = 25;

   beginShape();
   fill(theme.lives.red);
   vertex(x, 20);
   bezierVertex(
      x - size / 2,
      20 - size / 2,
      x - size,
      20 + size / 3,
      x,
      20 + size
   );
   bezierVertex(x + size, 20 + size / 3, x + size / 2, 20 - size / 2, x, 20);
   endShape(CLOSE);
}

// display 'game over' or 'level complete'
function drawText() {
   // variable to indicate if we should stop the game (return in draw function)
   let stop = false;
   let message = '';

   // set message according to the condition established
   if (lives === 0) message = `GAME OVER`;
   if (flagpole.isReached) message = 'LEVEL COMPLETE';

   if (message) {
      fill(0, 0, 0, 125);
      rect(0, 0, width, height);

      fill(255);
      textSize(48);
      textAlign(CENTER);
      text(message, width / 2, height / 2 - 20);
      textSize(24);
      text('Press space to continue', width / 2, height / 2 + 20);

      stop = true;
   }

   return stop;
}

// draw a score with the items collected at the top right corner of the screen
function drawScore() {
   textSize(20);
   fill(0);
   stroke(theme.collectable.darkYellow);
   strokeWeight(1);
   text(`${game_score}`, width - 40, 40);

   noStroke();
   fill(theme.collectable.yellow);
   ellipse(width - 65, 33, 30);

   stroke(0);
   strokeWeight(1);
   fill(theme.collectable.darkYellow);
   ellipse(width - 65, 33, 20);

   fill(theme.collectable.orange);
   triangle(width - 65 - 5, 33 + 4, width - 65 + 5, 33 + 4, width - 65, 33 - 6);
   noStroke();
}

/**
 * functions to draw background elements (loops)
 */

function drawCanyons() {
   // for loop to iterate through the canyons array and draw it.
   for (let i = 0; i < canyons.length; i++) {
      drawCanyon(canyons[i].pos.x1, canyons[i].pos.x2);
   }
}

function drawMountains() {
   // for loop to iterate through the mountains array and draw it.
   for (let i = 0; i < mountains.length; i++) {
      drawMountain(mountains[i].pos.x);
   }
}

function drawTrees() {
   // for loop to iterate through the trees array and draw it.
   for (let i = 0; i < trees.length; i++) {
      drawTree(trees[i].pos.x);
   }
}

function drawClouds() {
   // for loop to iterate through the clouds array and draw it.
   for (let i = 0; i < clouds.length; i++) {
      drawCloud(clouds[i].pos.x, clouds[i].pos.y);
   }
}

function drawCollectables() {
   // for loop to iterate through the collectable items array and draw it.
   for (let i = 0; i < collectables.length; i++) {
      if (!collectables[i].isFound) {
         drawCollectable(collectables[i].pos.x);
      }
   }
}

function drawLives() {
   const x = [30, 65, 100];
   for (let i = 0; i < lives; i++) {
      drawHeart(x[i]);
   }
}

/**
 * character
 */

// draw character
function drawCharacter() {
   if (
      character.direction.left &&
      (character.isJumping || character.isFalling)
   ) {
      jumpingLeft(character.pos.x, character.pos.y);
   } else if (
      character.direction.right &&
      (character.isJumping || character.isFalling)
   ) {
      jumpingRight(character.pos.x, character.pos.y);
   } else if (character.direction.left) {
      walkingLeft(character.pos.x, character.pos.y);
   } else if (character.direction.right) {
      walkingRight(character.pos.x, character.pos.y);
   } else if (character.isJumping || character.isFalling) {
      jumpingForwards(character.pos.x, character.pos.y);
   } else {
      standingFront(character.pos.x, character.pos.y);
   }
}

// draw the character standing front
function standingFront(x, y) {
   // body
   fill(theme.character.black);
   ellipse(x, y - 50, 30, 30);
   rect(x - 15, y - 50, 30, 30);
   ellipse(x, y - 20, 30, 20);

   // eyes
   fill(theme.character.skin);
   ellipse(x - 8, y - 47.5, 3, 5);
   rect(x - 8, y - 50, 16, 5);
   ellipse(x + 8, y - 47.5, 3, 5);
   fill(theme.character.black);
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
   fill(theme.character.yellow);
   textSize(8);
   text('JS', x - 5, y - 35);
}

// draw the character jumping forwards
function jumpingForwards(x, y) {
   // body
   fill(theme.character.black);
   ellipse(x, y - 50, 30, 30);
   rect(x - 15, y - 50, 30, 30);
   ellipse(x, y - 20, 30, 20);

   // eyes
   fill(theme.character.skin);
   ellipse(x - 8, y - 47.5, 3, 5);
   rect(x - 8, y - 50, 16, 5);
   ellipse(x + 8, y - 47.5, 3, 5);
   fill(theme.character.black);
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
   fill(theme.character.yellow);
   textSize(8);
   text('JS', x - 5, y - 35);
}

// draw the character walking left
function walkingLeft(x, y) {
   // left arm
   fill(theme.character.skin);
   ellipse(x - 12.5, y - 40, 10, 10);
   rect(x - 17.5, y - 40, 10, 15);
   ellipse(x - 12.5, y - 25, 10, 10);

   // body
   fill(theme.character.black);
   ellipse(x, y - 50, 30, 30);
   rect(x - 15, y - 50, 30, 30);
   ellipse(x, y - 20, 30, 20);

   // eyes
   fill(theme.character.skin);
   ellipse(x - 12, y - 47.5, 3, 5);
   rect(x - 12, y - 50, 16, 5);
   ellipse(x + 4, y - 47.5, 3, 5);
   fill(theme.character.black);
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
   fill(theme.character.yellow);
   textSize(8);
   text('JS', x - 12.5, y - 35);
}

// draw the character walking right
function walkingRight(x, y) {
   // right arm
   fill(theme.character.skin);
   ellipse(x + 12.5, y - 40, 10, 10);
   rect(x + 7.5, y - 40, 10, 15);
   ellipse(x + 12.5, y - 25, 10, 10);

   // body
   fill(theme.character.black);
   ellipse(x, y - 50, 30, 30);
   rect(x - 15, y - 50, 30, 30);
   ellipse(x, y - 20, 30, 20);

   // eyes
   fill(theme.character.skin);
   ellipse(x - 4, y - 47.5, 3, 5);
   rect(x - 4, y - 50, 16, 5);
   ellipse(x + 12, y - 47.5, 3, 5);
   fill(theme.character.black);
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
   fill(theme.character.yellow);
   textSize(8);
   text('JS', x + 2.5, y - 35);
}

// draw the character jumping left
function jumpingLeft(x, y) {
   // left arm
   fill(theme.character.skin);
   ellipse(x - 15, y - 60, 10, 10);
   rect(x - 20, y - 60, 10, 15);
   ellipse(x - 15, y - 45, 10, 10);

   // body
   fill(theme.character.black);
   ellipse(x, y - 50, 30, 30);
   rect(x - 15, y - 50, 30, 30);
   ellipse(x, y - 20, 30, 20);

   // eyes
   fill(theme.character.skin);
   ellipse(x - 12, y - 47.5, 3, 5);
   rect(x - 12, y - 50, 16, 5);
   ellipse(x + 4, y - 47.5, 3, 5);
   fill(theme.character.black);
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
   fill(theme.character.yellow);
   textSize(8);
   text('JS', x - 12.5, y - 35);
}

// draw the character jumping right
function jumpingRight(x, y) {
   // right arm
   fill(theme.character.skin);
   ellipse(x + 15, y - 60, 10, 10);
   rect(x + 10, y - 60, 10, 15);
   ellipse(x + 15, y - 45, 10, 10);

   // body
   fill(theme.character.black);
   ellipse(x, y - 50, 30, 30);
   rect(x - 15, y - 50, 30, 30);
   ellipse(x, y - 20, 30, 20);

   // eyes
   fill(theme.character.skin);
   ellipse(x - 4, y - 47.5, 3, 5);
   rect(x - 4, y - 50, 16, 5);
   ellipse(x + 12, y - 47.5, 3, 5);
   fill(theme.character.black);
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
   fill(theme.character.yellow);
   textSize(8);
   text('JS', x + 2.5, y - 35);
}
