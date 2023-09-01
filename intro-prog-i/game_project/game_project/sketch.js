let character; //     - object with character properties
let collectables; //  - array with collectable items props
let offset; //        - film variable to set the scroll of the screen
let flagpole; //      - object with flagpole properties
let sounds; //        - sounds object
let castle; //        - castle image
let enemies; //       - array with enemy positions

function preload() {
   castle = loadImage('./assets/images/castle.png');

   soundFormats('mp3', 'wav');

   sounds = {};
   sounds.background = loadSound('./assets/sounds/background.mp3');
   sounds.background.setVolume(0.025);
   sounds.jump = loadSound('./assets/sounds/jump.mp3');
   sounds.jump.setVolume(0.05);
   sounds.coin = loadSound('./assets/sounds/coin.mp3');
   sounds.coin.setVolume(0.1);
   sounds.dead = loadSound('./assets/sounds/dead.mp3');
   sounds.dead.setVolume(0.1);
   sounds.complete = loadSound('./assets/sounds/complete.mp3');
   sounds.complete.setVolume(0.1);
   sounds.over = loadSound('./assets/sounds/over.mp3');
   sounds.over.setVolume(0.1);
   sounds.live = loadSound('./assets/sounds/live.mp3');
   sounds.live.setVolume(0.1);
}

function setup() {
   createCanvas(1024, 576);
   castle.resize(200, 200);
   startGame();
}

function draw() {
   // background elements
   drawSky();
   drawGround();

   push();
   translate(offset, 0);
   drawCanyons();
   drawMountains();
   drawTrees();
   drawClouds();
   drawCollectables();
   drawExtraLives();
   drawEnemies();
   drawFlagpole(flagpole.x);
   drawPlatforms();
   drawCastle(3700);
   pop();

   drawLives();
   drawScore();

   // display either 'level complete' or 'game over'
   if (handleDrawText()) return;

   // character
   drawCharacter();

   // game interaction
   gameInteraction();
}
