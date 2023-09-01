// functions for game interactions

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

// start game, initialize game variables
function startGame() {
   sounds.background.loop();

   floor = { pos: { y: 430 } };

   theme = {
      bug: { red: '#ea3c3d', black: '#191919' },
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
      platforms: { terracotta: '#b46345', gray: '#4D4D4C' },
      sky: { blue: '#649bff' },
      tree: { brown: '#7c5b41', green: '#2ec654', darkGreen: '#0b492c' },
   };

   base = floor.pos.y;
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
      platform: {
         isOver: false,
         height: floor.pos.y,
      },
      rooted: false,
   };

   canyons = [
      { pos: { x1: 650, x2: 800 } },
      { pos: { x1: 1150, x2: 1250 } },
      { pos: { x1: 2000, x2: 2150 } },
      { pos: { x1: 2500, x2: 2800 } },
   ];

   trees = [
      { pos: { x: 400 } },
      { pos: { x: 900 } },
      { pos: { x: 1400 } },
      { pos: { x: 1900 } },
      { pos: { x: 2450 } },
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
      { pos: { x: 600, y: floor.pos.y }, isFound: false },
      { pos: { x: 800, y: 200 }, isFound: false },
      { pos: { x: 950, y: floor.pos.y }, isFound: false },
      { pos: { x: 1350, y: floor.pos.y }, isFound: false },
      { pos: { x: 1600, y: floor.pos.y }, isFound: false },
      { pos: { x: 1700, y: 350 }, isFound: false },
      { pos: { x: 1950, y: floor.pos.y }, isFound: false },
      { pos: { x: 2450, y: 250 }, isFound: false },
      { pos: { x: 2350, y: floor.pos.y }, isFound: false },
      { pos: { x: 2950, y: floor.pos.y }, isFound: false },
   ];

   bugs = [
      { pos: { x: 1100, y: floor.pos.y } },
      { pos: { x: 1800, y: floor.pos.y } },
      { pos: { x: 1850, y: floor.pos.y } },
      { pos: { x: 3900, y: floor.pos.y } },
      { pos: { x: 3950, y: floor.pos.y } },
      { pos: { x: 4100, y: floor.pos.y } },
      { pos: { x: 4400, y: floor.pos.y } },
      { pos: { x: 4500, y: floor.pos.y } },
   ];

   platforms = [
      { pos: { x: 450, y: 300, w: 200 } },
      { pos: { x: 750, y: 200, w: 100 } },
      { pos: { x: 1500, y: 350, w: 300 } },
      { pos: { x: 2200, y: 350, w: 150 } },
      { pos: { x: 2400, y: 250, w: 100 } },
      { pos: { x: 2600, y: 150, w: 50 } },
   ];

   game_score = 0;

   flagpole = {
      pos: { x: 3500 },
      isReached: false,
      raiseFlag: false,
      flag: [floor.pos.y - 5, floor.pos.y - 45, floor.pos.y - 25],
   };

   film = { pos: { x: 0 } };
}

// handles gravity
function gravity() {
   const fall = 5;

   // character fell in the canyon
   if (character.rooted && character.isFalling) {
      character.pos.y += 2 * fall;
      if (character.pos.y > height) {
         character.isFalling = false;
      }
   }

   // check that the character y level is above the floor y level
   if (character.pos.y < floor.pos.y) {
      // if the character is over a platform, stop falling and set the new base level
      if (character.platform.isOver) {
         character.isFalling = false;
         base = character.pos.y;
         return;
      }

      // decrease the character position (gravity interaction)
      character.pos.y += fall;

      // if the character reach the ground, stop falling and set the new base level
      if (character.pos.y === floor.pos.y) {
         character.isFalling = false;
         base = character.pos.y;
      }
   }
}

// handles if the characters is over a platform
function checkPlatforms() {
   const offset = film.pos.x;

   character.platform.isOver = false;
   character.platform.height = floor.pos.y;

   platforms.forEach(({ pos: { x, y, w } }) => {
      if (
         // add the offset according to the camera position to the platform
         character.pos.x + 15 > x + offset &&
         character.pos.x - 15 < x + w + offset &&
         character.pos.y === y
      ) {
         character.platform.isOver = true;
         character.platform.height = y;
      }
   });
}

// handles if the character falls into the canyon
function plummeting() {
   const offset = film.pos.x;
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

// handles when enemies fall into a canyon
function enemigesPlummeting() {
   const offset = film.pos.x;

   bugs.forEach((bug) => {
      canyons.forEach((canyon) => {
         if (
            bug.pos.x - 15 + offset > canyon.pos.x1 + offset &&
            bug.pos.x + 15 + offset < canyon.pos.x2 + offset
         ) {
            bug.pos.x++;
            bug.pos.y += 5;
         }
      });
   });
}

// handles the character movement and scroll of the camera
function characterMovement() {
   // if character is not able to move (fell into the canyon), do nothing
   if (character.rooted) return;

   const steps = 4;
   const jump = 15;

   // move to the left
   if (character.direction.left && character.isMoving) {
      character.pos.x > width * 0.5
         ? (character.pos.x -= steps)
         : (film.pos.x += steps);
   }

   // move to the right
   if (character.direction.right && character.isMoving) {
      character.pos.x < width * 0.5
         ? (character.pos.x += steps)
         : (film.pos.x -= steps);
   }

   // jump
   if (character.isJumping) {
      character.pos.y -= jump;

      if (character.pos.y <= base - 150) {
         character.isJumping = false;
         character.isFalling = true;
      }
   }
}

// handles enemies movement
function enemiesMovement() {
   bugs.forEach((bug) => bug.pos.x--);
}

// checks if the character is close enough to an element
function characterIsCloseTo(element, distance = 30) {
   // distance is how close has to be the character to interact with the element, by default is 30
   const offset = film.pos.x;

   const result =
      dist(
         // add the offset according to the camera position to the element position, so that the character can pick it up
         element.pos.x + offset,
         element.pos.y ?? floor.pos.y,
         character.pos.x,
         character.pos.y
      ) < distance;

   return result;
}

// handles collecting an item by the character
function collectItems() {
   for (let i = 0; i < collectables.length; i++) {
      // check if the character is close enough to pick up the item
      if (characterIsCloseTo(collectables[i])) {
         sounds.coin.play();
         // move the position of the item, so that this disapear from the previous position (prevents multiple sounds and the multiple execution of the condition if the player remains in the item position)
         collectables[i].pos.x = -Infinity;
         collectables[i].isFound = true;
      }
   }

   // check the collectable items that were found, if the item was found increase the score
   game_score = collectables.reduce((acc, curr) => {
      curr.isFound ? acc++ : null;
      return acc;
   }, 0);
}

// handles when character reach the flagpole
function checkFlagpole() {
   // check if the character is close enough to the flag
   const offset = film.pos.x;
   if (abs(flagpole.pos.x - character.pos.x + offset) < 20) {
      flagpole.raiseFlag = true;
      sounds.background.stop();
      sounds.complete.play();
   }

   if (flagpole.raiseFlag) {
      // raise the flag if it is not in the top position
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

// handles character's lives
function checkPlayerDie() {
   if (
      (character.pos.y === 750 && lives > 0) ||
      bugs.some((bug) => characterIsCloseTo(bug))
   ) {
      sounds.background.stop();
      sounds.dead.play();
   }

   if (
      (character.pos.y > height + 500 && lives > 0) ||
      bugs.some((bug) => characterIsCloseTo(bug))
   ) {
      lives--;
      if (lives > 0) startGame();
   }
}

function keyPressed() {
   if (!character || character.rooted) return;

   // if user press 'a' or left arrow
   if (keyCode === 65 || keyCode === 37) {
      // reset character direction
      character.direction = { left: false, right: false };
      character.isMoving = true;
      character.direction.left = true;
   }

   // if user press 'd' or right arrof
   if (keyCode === 68 || keyCode === 39) {
      // reset character direction
      character.direction = { left: false, right: false };
      character.isMoving = true;
      character.direction.right = true;
   }

   // if user press 'w' or up arrow
   if (keyCode === 87 || keyCode === 38) {
      // check that the character is at the same level of the ground to be able to jump, this prevents from doing a double jump
      if (character.pos.y === floor.pos.y || character.platform.isOver) {
         sounds.jump.play();
         character.isJumping = true;
      }
   }
}

function keyReleased() {
   if (!character) return;
   // if user release the key 'a' or left arrow
   if (keyCode === 65 || keyCode === 37) {
      // check if character is moving to the other direction, to prevent stop the movement of the character if the user press another movement key faster than releasing the other.
      if (character.direction.right && character.isMoving) return;
      character.isMoving = false;
   }

   // if user release the key 'd' or right arrow
   if (keyCode === 68 || keyCode === 39) {
      // check if character is moving to the other direction, to prevent stop the movement of the character if the user press another movement key faster than releasing the other.
      if (character.direction.left && character.isMoving) return;
      character.isMoving = false;
   }
}
