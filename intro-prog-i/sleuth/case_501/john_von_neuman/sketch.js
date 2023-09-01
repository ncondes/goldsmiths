/*

Officer: 5031189
CaseNum: 501-3-55586178-5031189

Case 501 - John Von Neuman - stage 4

This is our last chance to catch that killer kid.
Let's hope that John Von Neuman can identify the killer.
To speak to him follow Madame McCarthy’s advice below.

John was ever the keen chess player. Many an hour was spent considering his next move.
To speak to John beyond the grave you must place a chess piece in each of the dashed circles.
Use the image() and the pieceImage variable command to place the pieces in their positions.
Do this by using two for loops in a nested pattern.
You will need to use some conditional statements in order to position each row to match the pattern.

There are many possible ways of completing this task,
but you should ONLY use the following commands:

 * for()
 * image()
 * if()

*/

var backgroundImg, pieceImage;

function preload() {
   backgroundImg = loadImage('background.jpg');
   pieceImage = loadImage('Piece.png');
}

function setup() {
   createCanvas(backgroundImg.width, backgroundImg.height);
   image(backgroundImg, 0, 0);
   imageMode(CENTER);
}

function draw() {
   // add your for loop below
   for (let i = 0; i < 6; i++) {
      const x = i * 64;
      for (let j = 0; j < 3; j++) {
         const y = j * 65;
         if (
            (![0, 1].includes(i) && j === 0) ||
            (![0, 5].includes(i) && j === 1) ||
            (![4, 5].includes(i) && j === 2)
         ) {
            image(pieceImage, 676 + x, 340 + y);
         }
      }
   }
}
