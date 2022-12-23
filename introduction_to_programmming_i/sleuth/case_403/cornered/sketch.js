/*

Officer: 5031189
CaseNum: 403-2-65631011-5031189

Case 403 - Cornered - stage 3

We have Shiffman cornered at Wrong Side of the tracks and more help is on the way.
Until our backup arrives the orders are to make sure he stays inside Wrong Side of the tracks

Your job is to indicate that Shiffman (signified by the mouse) is indeed within the North - East - South - West bounds of Wrong Side of the tracks.
Draw a DarkTurquoise rectangle covering Wrong Side of the tracks for as long as Shiffman is in it.

Use X11 colours. You can find a reference table at https://www.w3.org/TR/css3-iccprof#numerical.

There are many possible ways of investigating this case, but you should use ONLY the following commands, operators and variables:

  if(){}
  >
  <
  &&
  fill()  - Use r,g,b values between 0 and 255.
  rect()
  mouseX
  mouseY

*/

var img;

function preload() {
   img = loadImage('map.jpg');
}

function setup() {
   createCanvas(img.width, img.height);
}

function draw() {
   // draw the image
   image(img, 0, 0);

   //Write your code below here ...
   if (
      mouseX > 597 &&
      mouseY > 194 &&
      mouseX < 597 + 169 &&
      mouseY < 194 + 114
   ) {
      fill(0, 206, 209);
      rect(597, 194, 169, 114);
   }

   // finally, draw Shiffman's position
   strokeWeight(2);
   stroke(255);
   fill(255, 0, 0);
   ellipse(mouseX, mouseY, 10, 10);

   // a helpful mouse coordinate pointer
   fill(255);
   noStroke();
   text(`${mouseX},${mouseY}`, mouseX, mouseY);
}
