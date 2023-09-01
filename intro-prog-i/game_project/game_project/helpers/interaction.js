function gameInteraction() {
   character.move();
   character.gravity();
   character.handlePlatforms();
   character.plummeting();
   character.collectItem();
   character.checkFlagpole();
   character.die();

   enemies.forEach((enemy) => enemy.move());
   enemies.forEach((enemy) => enemy.gravity());
   enemies.forEach((enemy) => enemy.handlePlatforms());
   enemies.forEach((enemy) => enemy.plummeting());
   enemies.forEach((enemy) => enemy.attack());
}

function startGame() {
   sounds.background.loop();

   character = new Character();

   collectables = [
      { x: 600, y: floor.y, isFound: false },
      { x: 800, y: 200, isFound: false },
      { x: 950, y: floor.y, isFound: false },
      { x: 1350, y: floor.y, isFound: false },
      { x: 1600, y: floor.y, isFound: false },
      { x: 1700, y: 350, isFound: false },
      { x: 1950, y: floor.y, isFound: false },
      { x: 2450, y: 250, isFound: false },
      { x: 2350, y: floor.y, isFound: false },
      { x: 2950, y: floor.y, isFound: false },
   ];

   enemies = [
      new Enemy(625, 295),
      new Enemy(1100, floor.y),
      new Enemy(1800, floor.y),
      new Enemy(1850, floor.y),
      new Enemy(1825, 195),
      new Enemy(3900, floor.y),
      new Enemy(3950, floor.y),
      new Enemy(4100, floor.y),
      new Enemy(4400, floor.y),
      new Enemy(4500, floor.y),
   ];

   flagpole = {
      x: 3500,
      isReached: false,
      raiseFlag: false,
      flag: [floor.y - 5, floor.y - 45, floor.y - 25],
   };

   offset = 0;
}

function handleDrawText() {
   if (drawText()) {
      if (lives.length === 0 && !gameOver) {
         sounds.over.play();
         gameOver = true;
      }
      return true;
   }
}

function keyPressed() {
   if (!character || character.isRooted) return;

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
      if (character.y === floor.y || character.platform.isOver) {
         let jump;
         // prevent double jump over a platform
         character.platform.isOver
            ? character.y - character.platform.y === 0
               ? (jump = -12.5)
               : (jump = 0)
            : (jump = -12.5);

         if (jump < 0) sounds.jump.play();
         character.isJumping = true;
         character.sinkSpeed += jump;
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

// listener docs
// https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener
// window docs
// https://developer.mozilla.org/en-US/docs/Web/API/Window/location

// note: i decided to use this method because once we do a return in the draw function the game interaction functions are disabled

// listener that checks if the keyup event occurs
document.addEventListener('keyup', (event) => {
   // validate if the key pressed is the 'space' and if the player is run out of lives or completed the level
   if (event.code === 'Space' && (lives.length === 0 || flagpole.isReached)) {
      // use the window object to reload the page (easy way to restart the game)
      window.location.reload();
   }
});
