/*

Officer: 5031189
CaseNum: 101-3-41047395-5031189

Case 101 - The Case of Anna Lovelace
Stage 4 - The Plaza Hotel

Okay this place is more Anna’s style. Now’s our chance to find out the root of all
of this. Lets see who is Anna meeting.

Identify Anna by drawing a Medium Turquoise filled rectangle with a Lime Green outline.
She’s the woman in the red dress of course.

Identify the man with the monocle smoking the cigar by drawing a Pale Violet Red filled
rectangle with a Olive Drab outline around him.

Identify the man reading the newspaper by drawing a Blue filled rectangle
with a Crimson outline around him.

Identify the woman with the dog by drawing a Cornflower Blue filled rectangle with a
Pale Violet Red outline around her. Make sure you include the dog too.

The rectangles should cover the targets as accurately as possible without
including anything else.

Use X11 colours. You can find a reference table at https://www.w3.org/TR/css3-iccprof#numerical.

There are many possible ways of investigating this case, but you
should use ONLY the following commands:

  rect()
  fill() Use r,g,b values between 0 and 255. Set alpha to 100 for some opacity.
  stroke() Use r,g,b values between 0 and 255.

*/

var img;

function preload() {
   img = loadImage('img.jpg');
}

function setup() {
   createCanvas(img.width, img.height);
   strokeWeight(2);
}

function draw() {
   image(img, 0, 0);

   //Write your code below here ...
   fill(72, 209, 204);
   stroke(50, 205, 50);
   rect(1485, 270, 160, 337);

   fill(219, 112, 147);
   stroke(107, 142, 35);
   rect(23, 378, 107, 152);

   fill(0, 0, 255);
   stroke(220, 20, 60);
   rect(491, 338, 285, 575);

   fill(100, 149, 237);
   stroke(219, 112, 147);
   rect(1098, 246, 158, 348);

   //A helpful mouse pointer
   push();
   fill(0);
   noStroke();
   text(mouseX + ',' + mouseY, mouseX, mouseY);
   pop();
}
