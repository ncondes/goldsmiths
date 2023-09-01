/*

Officer: 5031189
CaseNum: 501-1-11909490-5031189

Case 501 - Max Von Neuman - stage 2

Madame McCarthy says that to summon Max Von Neuman a different approach is needed.
Follow her advice below.

How young Max loved to march with his toy soldiers.
To speak to Max beyond the grave you must place a toy soldier in each of the dashed circles.
Use the image() and the soldierImage variable command to place each soldier in its position.
You will need to use a separate for loop for each of the diagonal lines.

There are many possible ways of completing this task,
but you should ONLY use the following commands:

 * for()
 * image()

*/

var backgroundImg, soldierImage;

function preload() {
   backgroundImg = loadImage('background.jpg');
   soldierImage = loadImage('Soldier.png');
}

function setup() {
   createCanvas(backgroundImg.width, backgroundImg.height);
   image(backgroundImg, 0, 0);

   imageMode(CENTER);
}

function draw() {
   // add your for loop below
   // \
   for (let i = 0; i < 13; i++) {
      const offset = { x: i * 36, y: i * 18 };
      image(soldierImage, 558 + offset.x, 365 + offset.y);
   }
   // /
   for (let i = 0; i < 10; i++) {
      const offset = { x: i * 27, y: i * -30 };
      image(soldierImage, 674 + offset.x, 680 + offset.y);
   }
}
