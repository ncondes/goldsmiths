/*

Officer: 5031189
CaseNum: 403-3-30992252-5031189

Case 403 - Captured - stage 4

A coordinated action is under way to arrest Shiffman. Police are currently in pursuit on Mullenweg Street.
In order to catch him we must be able to alert all forces of his whereabouts according to the following rules:

- if Shiffman is within 119 meters from Norbert's Begel Emporium then alert local police by drawing a Olive circle around it with a radius of 119 pixels.
- if Shiffman is in Gates Department Store then the neighbourhood watch must be notified by drawing a Sienna rectangle around it.
- if Shiffman is in neither position, a global alert must be issued by drawing a Chartreuse rectangle covering the area between Turing Place, Ada Avenue, Mullenweg Street and Huffman Street.

Shiffman's position is signified by the mouse.

Note: all road coordinates are measured from their center.

Use X11 colours. You can find a reference table at https://www.w3.org/TR/css3-iccprof#numerical.

There are many possible ways of investigating this case, but you should use ONLY the following commands, operators and variables:

  if(){}
  >
  <
  &&
  else
  fill()  - Use r,g,b values between 0 and 255.
  dist()
  ellipse()
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
   if (dist(mouseX, mouseY, 830, 490) <= 119) {
      fill(128, 128, 0);
      ellipse(830, 490, 119 * 2);
   } else if (
      mouseX > 1606 &&
      mouseY > 217 &&
      mouseX < 1606 + 117 &&
      mouseY < 217 + 56
   ) {
      fill(160, 82, 45);
      rect(1606, 217, 117, 56);
   } else {
      // - if Shiffman is in neither position, a global alert must be issued by drawing a Chartreuse rectangle covering the area between Turing Place, Ada Avenue, Mullenweg Street and Huffman Street.
      fill(127, 255, 0);
      rect(380, 190, 650, 530);
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
