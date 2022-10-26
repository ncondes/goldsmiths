/*

Officer: 5031189
CaseNum: 101-2-36690984-5031189

Case 101 - The Case of Anna Lovelace
Stage 3 - The Docks

You’ve followed Anna down to the docks. She sure frequents some classy places.
Okay let’s see who she’s meeting down there.

Identify Anna by drawing a Dodger Blue filled rectangle around her.
She’s the woman in the red dress of course.

Identify the heavy-set man in the fishing overalls by drawing a Sea Green filled
rectangle around him.

Identify the man in the striped top by drawing a Dark Orchid filled rectangle around
him.

The rectangles should cover the targets as accurately as possible without
including anything else.

Use X11 colours. You can find a reference table at https://www.w3.org/TR/css3-iccprof#numerical.

There are many possible ways of investigating this case, but you
should use ONLY the following commands:

  rect()
  fill() Use r,g,b values between 0 and 255. Set alpha to 100 for some opacity.

*/

var img;

function preload() {
   img = loadImage('img.jpg');
}

function setup() {
   createCanvas(img.width, img.height);
   noStroke();
}

function draw() {
   image(img, 0, 0);

   //Write your code below here ...
   fill(30, 144, 255);
   rect(658, 443, 292, 598);

   fill(46, 139, 87);
   rect(1002, 495, 510, 542);

   fill(153, 50, 204);
   rect(1572, 281, 73, 191);

   //A helpful mouse pointer
   push();
   fill(0);
   noStroke();
   text(mouseX + ',' + mouseY, mouseX, mouseY);
   pop();
}
