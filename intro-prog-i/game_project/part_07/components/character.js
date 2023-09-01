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
