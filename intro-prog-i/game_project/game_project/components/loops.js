function drawCanyons() {
   canyons.forEach(({ x1, x2 }) => drawCanyon(x1, x2));
}

function drawClouds() {
   clouds.forEach(({ x, y }) => drawCloud(x, y));
}

function drawMountains() {
   mountains.forEach(({ x }) => drawMountain(x));
}

function drawTrees() {
   trees.forEach(({ x }) => drawTree(x));
}

function drawPlatforms() {
   platforms.forEach(({ x, y, w }) => drawPlatform(x, y, w));
}

function drawLives() {
   lives.forEach(({ x, y }) => drawLive(x, y));
}

function drawExtraLives() {
   extraLives.forEach(({ x, y }) => drawLive(x, y));
}

function drawCollectables() {
   collectables
      .filter(({ isFound }) => !isFound)
      .forEach(({ x, y }) => drawCollectable(x, y));
}

function drawEnemies() {
   enemies.forEach((enemy) => enemy.draw());
}
