// functions for each element on the game

function drawSky() {
   background(theme.sky.blue);
   noStroke();
}

function drawGround(x1, x2) {
   fill(theme.ground.green);
   rect(x1, floor.pos.y, x2 - x1, height);
}

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

function drawCloud(x, y) {
   fill(255);
   ellipse(x + 00, y, 50, 50);
   ellipse(x + 30, y, 30, 30);
   ellipse(x + 50, y, 20, 20);
}

function drawCollectable(x, y) {
   fill(theme.collectable.yellow);
   ellipse(x, y - 15, 30);

   stroke(0);
   strokeWeight(1);
   fill(theme.collectable.darkYellow);
   ellipse(x, y - 15, 20);

   fill(theme.collectable.orange);
   triangle(x - 5, y - 15 + 4, x + 5, y - 15 + 4, x, y - 15 - 6);
   noStroke();
}

function drawEnemy(x, y) {
   // text decorator
   fill(theme.bug.black);
   textSize(8);
   textStyle(BOLD);
   textAlign(CENTER);
   text('BUG', x, y - 22);

   // head
   ellipse(x - 16, y - 10, 10);
   stroke(theme.bug.black);
   line(x - 16, y - 10, x - 23, y - 15);
   line(x - 16, y - 10, x - 24, y - 12);
   ellipse(x - 23, y - 15, 1.5);
   ellipse(x - 24, y - 12, 1.5);

   // shell
   noStroke();
   fill(theme.bug.red);
   arc(x, y - 5, 30, 30, PI, TWO_PI);

   // black details
   fill(theme.bug.black);
   ellipse(x - 7, y - 9, 5);
   ellipse(x, y - 15, 5);
   ellipse(x + 9, y - 10, 5);
   ellipse(x + 1, y - 9, 2);
   ellipse(x + 7, y - 15, 2);

   // legs
   rect(x - 12, y - 5, 2, 5);
   rect(x - 9, y - 5, 2, 5);

   rect(x - 2, y - 5, 2, 5);
   rect(x + 1, y - 5, 2, 5);

   rect(x + 8, y - 5, 2, 5);
   rect(x + 11, y - 5, 2, 5);
}

function drawFlagpole(x) {
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

function drawCastle(x) {
   image(castle, x, floor.pos.y - 196);
}

function drawPlatform(x, y, w) {
   // note: w must be a multiple of 25
   fill(theme.platforms.terracotta);
   stroke(theme.platforms.gray);

   const brick = { width: 25, height: 10 };
   const rows = 3;
   const columns = w / brick.width;
   const offset = brick.width / 2;

   // draw bricks
   for (let row = 0; row < rows; row++) {
      for (let column = 0; column < columns; column++) {
         const [xi, yi] = [x + column * brick.width, y + row * brick.height];

         // in the row of the middle add an offset, and if the brick is the first of the row, draw the half of it
         row % 2 !== 0
            ? column === 0
               ? rect(xi, yi, offset, brick.height)
               : rect(xi - offset, yi, brick.width, brick.height)
            : rect(xi, yi, brick.width, brick.height);
      }
   }

   // complete the right missing brick
   rect(x + w - offset, y + 10, offset, brick.height);
}

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

function drawText() {
   // variable to indicate if we should stop the game (return in draw function)
   let stop = false;
   let message = '';

   // set message according to the condition established
   if (lives === 0) message = `GAME OVER`;
   if (flagpole.isReached) message = 'LEVEL COMPLETE';

   if (message) {
      push();
      fill(0, 0, 0, 125);
      rect(0, 0, width, height);

      fill(255);
      textSize(48);
      textAlign(CENTER);
      text(message, width / 2, height / 2 - 20);
      textSize(24);
      text('Press space to continue', width / 2, height / 2 + 20);

      stop = true;
      pop();
   }

   return stop;
}

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

// functions to draw repeated background elements (loops)

function drawCanyons() {
   canyons.forEach(({ pos: { x1, x2 } }) => drawCanyon(x1, x2));
}

function drawMountains() {
   mountains.forEach(({ pos: { x } }) => drawMountain(x));
}

function drawTrees() {
   trees.forEach(({ pos: { x } }) => drawTree(x));
}

function drawClouds() {
   clouds.forEach(({ pos: { x, y } }) => drawCloud(x, y));
}

function drawCollectables() {
   collectables
      .filter(({ isFound }) => !isFound)
      .forEach(({ pos: { x, y } }) => drawCollectable(x, y));
}

function drawEnemies() {
   bugs.forEach(({ pos: { x, y } }) => drawEnemy(x, y));
}

function drawPlatforms() {
   platforms.forEach(({ pos: { x, y, w } }) => drawPlatform(x, y, w));
}

function drawLives() {
   const x = [30, 65, 100];
   for (let i = 0; i < lives; i++) {
      drawHeart(x[i]);
   }
}
