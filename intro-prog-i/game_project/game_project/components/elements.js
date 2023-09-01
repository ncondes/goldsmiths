function drawCharacter() {
   character.draw();
}

function drawSky() {
   background(theme.sky.blue);
   noStroke();
}

function drawGround() {
   fill(theme.ground.green);
   rect(0, floor.y, width, height);
}

function drawCanyon(x1, x2) {
   // void
   fill(theme.sky.blue);
   rect(x1, floor.y, x2 - x1, floor.y + 100);
   // layer 1
   fill(theme.canyon.lightBrown);
   rect(x1, floor.y + 110, x2 - x1, height);
   // layer 2
   fill(theme.canyon.brown);
   rect(x1, floor.y + 120, x2 - x1, height);
   // layer 3
   fill(theme.canyon.darkBrown);
   rect(x1, floor.y + 130, x2 - x1, height);
}

function drawMountain(x) {
   // big mountain
   fill(theme.mountains[0].green);
   noStroke();
   triangle(x - 125, floor.y, x + 125, floor.y, x, floor.y - 200);
   // peak
   fill(theme.mountains[0].darkGreen);
   beginShape();
   vertex(x, floor.y - 200);
   vertex(x + 44, floor.y - 130);
   vertex(x + 10, floor.y - 155);
   vertex(x + 0, floor.y - 140);
   vertex(x - 10, floor.y - 160);
   vertex(x - 44, floor.y - 130);
   endShape();
   // little mountain
   fill(theme.mountains[1].green);
   triangle(x - 25, floor.y, x + 150, floor.y, x + 62.5, floor.y - 140);
   // peak
   fill(theme.mountains[1].darkGreen);
   beginShape();
   vertex(x + 62.5, floor.y - 140);
   vertex(x + 100, floor.y - 80);
   vertex(x + 70, floor.y - 105);
   vertex(x + 60, floor.y - 85);
   vertex(x + 50, floor.y - 100);
   vertex(x + 25, floor.y - 80);
   endShape();
}

function drawTree(x) {
   // trunk
   fill(theme.tree.brown);
   triangle(x - 14 + 3, floor.y, x, floor.y - 15, x + 14 - 3, floor.y);
   rect(x - 14 / 2, floor.y, 14, -55);
   // leaves
   fill(theme.tree.green);
   stroke(theme.tree.darkGreen);
   strokeWeight(1 / 4);
   ellipse(x - 30, floor.y - (55 + 10), 20);
   ellipse(x + 30, floor.y - (55 + 10), 20);
   rect(x - 30, floor.y - (55 + 20), 60, 20);
   for (let i = 0; i < 5; i++) {
      ellipse(x - (i * -7.5 + 40), floor.y - (i * 10 + (55 + 20)), 20);
      ellipse(x + (i * -7.5 + 40), floor.y - (i * 10 + (55 + 20)), 20);
      rect(
         x - (i * -7.5 + 40),
         floor.y - (i * 10 + (55 + 30)),
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
   // outer circle
   fill(theme.collectable.yellow);
   ellipse(x, y - 15, 30);
   // inner circle
   stroke(0);
   strokeWeight(1);
   fill(theme.collectable.darkYellow);
   ellipse(x, y - 15, 20);
   // triangle
   fill(theme.collectable.orange);
   triangle(x - 5, y - 15 + 4, x + 5, y - 15 + 4, x, y - 15 - 6);
   noStroke();
}

function drawFlagpole(x) {
   // pole
   stroke(theme.flagpole.darkGray);
   fill(theme.flagpole.gray);
   rect(x - 2.5, floor.y, 5, -150);
   ellipse(x, floor.y - 150, 10);
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
   image(castle, x, floor.y - 196);
}

function drawPlatform(x, y, w) {
   // note: w must be a multiple of 25
   if (w % 25 !== 0) return;
   // theme
   fill(theme.platforms.terracotta);
   stroke(theme.platforms.gray);
   // dimensions for the platform
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

function drawLive(x, y) {
   beginShape();
   fill(theme.lives.red);
   vertex(x, y);
   bezierVertex(x - 25 / 2, y - 25 / 2, x - 25, y + 25 / 3, x, y + 25);
   bezierVertex(x + 25, y + 25 / 3, x + 25 / 2, y - 25 / 2, x, y);
   endShape(CLOSE);
}

function drawText() {
   // stop variable to indicate if we should stop the game (return in draw function)
   let stop = false;
   let message = '';
   // set message according to the condition established
   if (lives.length === 0) message = 'GAME OVER';
   if (flagpole.isReached) message = 'LEVEL COMPLETE';
   // display only if the message exists
   if (message) {
      push();
      // background opacity
      fill(0, 0, 0, 125);
      rect(0, 0, width, height);
      // text
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
   // check the collectable items that were found, if the item was found increase the score
   const score = collectables.reduce((acc, curr) => {
      curr.isFound ? acc++ : null;
      return acc;
   }, 0);
   // score number text
   textSize(20);
   fill(0);
   stroke(theme.collectable.darkYellow);
   strokeWeight(1);
   text(`${score}`, width - 40, 40);
   // collectable icon
   drawCollectable(width - 65, 48);
}
