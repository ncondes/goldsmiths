class Enemy {
   constructor(x, y) {
      this.isRooted = false;
      this.platform = { isOver: false, y: floor.y };
      this.sinkSpeed = 0;
      this.x = x;
      this.y = y;
   }

   draw() {
      // text decorator
      fill(theme.enemy.black);
      textSize(8);
      textStyle(BOLD);
      textAlign(CENTER);
      text('BUG', this.x, this.y - 22);

      // head
      ellipse(this.x - 16, this.y - 10, 10);
      stroke(theme.enemy.black);
      line(this.x - 16, this.y - 10, this.x - 23, this.y - 15);
      line(this.x - 16, this.y - 10, this.x - 24, this.y - 12);
      ellipse(this.x - 23, this.y - 15, 1.5);
      ellipse(this.x - 24, this.y - 12, 1.5);

      // shell
      noStroke();
      fill(theme.enemy.red);
      arc(this.x, this.y - 5, 30, 30, PI, TWO_PI);

      // black details
      fill(theme.enemy.black);
      ellipse(this.x - 7, this.y - 9, 5);
      ellipse(this.x, this.y - 15, 5);
      ellipse(this.x + 9, this.y - 10, 5);
      ellipse(this.x + 1, this.y - 9, 2);
      ellipse(this.x + 7, this.y - 15, 2);

      // legs
      rect(this.x - 12, this.y - 5, 2, 5);
      rect(this.x - 9, this.y - 5, 2, 5);
      rect(this.x - 2, this.y - 5, 2, 5);
      rect(this.x + 1, this.y - 5, 2, 5);
      rect(this.x + 8, this.y - 5, 2, 5);
      rect(this.x + 11, this.y - 5, 2, 5);
   }

   move() {
      const speed = 1;
      this.x -= speed;
   }

   gravity() {
      // modify the sink speed acording to the gravity value
      this.sinkSpeed += gravity;
      this.y += this.sinkSpeed;

      // if enemy is rooted (fell into a canyon) return
      if (this.isRooted) return;

      // if the enemy is over a platform, stop falling once the enemy reach the y level of the platform
      if (this.platform.isOver && this.y >= this.platform.y) {
         this.sinkSpeed = 0;
         this.y = this.platform.y;
      }

      // if the enemy is in the ground, stop falling
      if (this.y >= floor.y) {
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
         if (this.x + 15 > x && this.x - 15 < x + w && this.y <= y) {
            this.platform.isOver = true;
            this.platform.y = y;
         }
      });
   }

   plummeting() {
      canyons.forEach(({ x1, x2 }) => {
         if (this.x - 15 > x1 && this.x + 15 < x2 && this.y === floor.y) {
            this.isRooted = true;
         }
      });
   }

   attack() {
      if (enemies.some((enemy) => characterIsCloseTo(enemy, 20))) {
         sounds.background.stop();
         sounds.dead.play();
         lives.pop();
         if (lives.length > 0) startGame();
      }
   }
}
