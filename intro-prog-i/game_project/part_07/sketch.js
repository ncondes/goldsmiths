let floor; //         - floor level
let base; //          - base level for the jump
let character; //     - object with character properties
let canyons; //       - array with position of each canyon drawn
let trees; //         - array with position of each tree drawn
let clouds; //        - array with the position of each cloud drawn
let mountains; //     - array with the position of each mountain drawn
let collectables; //  - array with collectable items props
let bugs; //          - array with bug enemies
let platforms; //     - array with platforms
let theme; //         - object with hex colors for each element on the game
let film; //          - film variable to set the scroll of the screen
let game_score; //    - value for items collected
let flagpole; //      - object with flagpole properties
let lives; //         - lives counter
let sounds; //        - sounds object
let castle; //        - castle image
let playing; //       - handy variable for game over sound, prevent from execute the sound multiple times

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
}

function setup() {
   createCanvas(1024, 576);
   castle.resize(200, 200);
   lives = 3;
   playing = true;
   startGame();
}

function draw() {
   // background elements
   drawSky();
   drawGround(0, width);

   push();
   translate(film.pos.x, 0);
   drawCanyons();
   drawMountains();
   drawTrees();
   drawClouds();
   drawCollectables();
   drawEnemies();
   drawFlagpole(flagpole.pos.x);
   drawPlatforms();
   drawCastle(3700);
   pop();

   drawLives();
   drawScore();

   // display either 'level complete' or 'game over'
   if (drawText()) {
      if (lives === 0 && playing) {
         sounds.over.play();
         playing = false;
      }
      return;
   }

   // character
   drawCharacter();

   // interaction
   characterMovement();
   enemiesMovement();
   checkPlatforms();
   collectItems();
   gravity();
   plummeting();
   enemigesPlummeting();
   checkPlayerDie();

   if (!flagpole.isReached) checkFlagpole();
}
