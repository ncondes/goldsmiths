/*

Officer: 5031189
CaseNum: 501-2-38684754-5031189

Case 501 - Marrieta Von Neuman - stage 3

For Marrieta a different approach is needed again.
Follow Madame McCarthy’s advice below.

Marrieta was a doting mother but she was also mean player of dice.
To speak to Marrieta beyond the grave you must place a dice in each of the dashed circles.
Use the image() and the dice variable command to place each dice in its position.
You will need to use two for loops in a nested pattern to create the grid.

There are many possible ways of completing this task,
but you should ONLY use the following commands:

 * for()
 * image()

*/

var backgroundImg, dice;

function preload() {
   backgroundImg = loadImage('background.jpg');
   dice = loadImage('Dice.png');
}

function setup() {
   createCanvas(backgroundImg.width, backgroundImg.height);
   image(backgroundImg, 0, 0);

   imageMode(CENTER);
}

function draw() {
   // add your for loop below
   for (let i = 0; i < 9; i++) {
      const x = i * 72;
      for (let j = 0; j < 4; j++) {
         const y = j * 69;
         image(dice, 510 + x, 372 + y);
      }
   }
}
