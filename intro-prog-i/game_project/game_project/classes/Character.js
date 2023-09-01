class Character {
   constructor() {
      this.direction = { left: false, right: false };
      this.isFalling = false;
      this.isJumping = false;
      this.isMoving = false;
      this.isRooted = false;
      this.platform = { isOver: false, y: floor.y };
      this.sinkSpeed = 0;
      this.speed = 2;
      this.x = 500;
      this.y = floor.y;
   }

   draw() {
      if (this.direction.left && (this.isJumping || this.isFalling)) {
         jumpingLeft(this.x, this.y);
      } else if (this.direction.right && (this.isJumping || this.isFalling)) {
         jumpingRight(this.x, this.y);
      } else if (this.direction.left) {
         walkingLeft(this.x, this.y);
      } else if (this.direction.right) {
         walkingRight(this.x, this.y);
      } else if (this.isJumping || this.isFalling) {
         jumpingForwards(this.x, this.y);
      } else {
         standingFront(this.x, this.y);
      }
   }

   move() {
      // if character is not able to move (fell into the canyon), do nothing
      if (this.isRooted) return;

      // increase speed if the character is moving continuously
      const steps = 0.1;
      // prevent from increasing the speed while the character jumps
      if (!character.isJumping) this.speed += steps;
      // set a maximun speed
      this.speed = min(5, this.speed);

      // if character stop moving reset the speed
      if (!character.isMoving) this.speed = 2;

      // move to the left
      if (this.direction.left && this.isMoving)
         this.x > width * 0.5 ? (this.x -= this.speed) : (offset += this.speed);

      // move to the right
      if (this.direction.right && this.isMoving)
         this.x < width * 0.5 ? (this.x += this.speed) : (offset -= this.speed);
   }

   collectItem() {
      // coins
      collectables.forEach((item) => {
         if (characterIsCloseTo(item)) {
            sounds.coin.play();
            // move the position of the item, so that this disapear from the previous position (prevents multiple sounds and the multiple execution of the condition if the player remains in the item position)
            item.x = -Infinity;
            item.isFound = true;
         }
      });

      // extra lives
      extraLives.forEach((item) => {
         if (characterIsCloseTo(item)) {
            sounds.live.play();
            // move the position of the item, so that this disapear from the previous position (prevents multiple sounds and the multiple execution of the condition if the player remains in the item position)
            item.x = -Infinity;
            const extra = { x: lives[lives.length - 1].x + 35, y: 20 };
            lives.push(extra);
         }
      });
   }

   checkFlagpole() {
      // check if the character is close enough to the flag
      if (abs(flagpole.x - this.x + offset) < 20) {
         flagpole.raiseFlag = true;
         sounds.background.stop();
         sounds.complete.play();
      }
      if (flagpole.raiseFlag) {
         // raise the flag if it is not in the top position
         if (flagpole.flag[1] > floor.y - 145) {
            flagpole.flag[0] -= 10;
            flagpole.flag[1] -= 10;
            flagpole.flag[2] -= 10;
         }
         // once the flag reach the top position, set to true the isReached value
         if (flagpole.flag[1] === floor.y - 145) {
            flagpole.isReached = true;
         }
      }
   }

   die() {
      if (this.y > 1000 && lives.length > 0) {
         sounds.background.stop();
         sounds.dead.play();
         lives.pop();
         if (lives.length > 0) startGame();
      }
   }

   gravity() {
      // modify the sink speed acording to the gravity value
      this.sinkSpeed += gravity;
      this.y += this.sinkSpeed;

      // if character is rooted (fell into a canyon) return
      if (this.isRooted) return;

      // if the character is over a platform, stop falling once the character reach the y level of the platform
      if (this.platform.isOver && this.y >= this.platform.y) {
         this.isJumping = false;
         this.sinkSpeed = 0;
         this.y = this.platform.y;
      }

      // if the character is in the ground, stop falling
      if (this.y >= floor.y) {
         this.isJumping = false;
         this.sinkSpeed = 0;
         this.y = floor.y;
      }
   }

   handlePlatforms() {
      // reset properties
      this.platform.isOver = false;
      this.platform.y = floor.y;
      // check platforms
      platforms.forEach(({ x, y, w }) => {
         if (
            // add the offset according to the camera position to the platform
            this.x + 15 > x + offset &&
            this.x - 15 < x + w + offset &&
            this.y <= y
         ) {
            this.platform.isOver = true;
            this.platform.y = y;
         }
      });
   }

   plummeting() {
      canyons.forEach(({ x1, x2 }) => {
         if (
            this.x - 15 > x1 + offset &&
            this.x + 15 < x2 + offset &&
            this.y === floor.y
         ) {
            this.direction = { left: false, right: false };
            this.isFalling = true;
            this.isRooted = true;
         }
      });
   }
}
