/*
201 - The case of Judge Hopper:
Stage 1 - Department of Justice

Officer: 5031189
CaseNum: 201-0-36677764-5031189

Judge Hopper has gone missing and we’ve been booked to investigate. This is the big time kid. Now I need you to head over to Hopper’s office at the Department of Justice and gather clues.

Draw a separate ellipse around 4 pieces of evidence:
Letter opener,
Death threat letters,
telephone,
and the AGOL leaflet

Each ellipse should cover the entire object whilst keeping as close to the edges as possible. You will need to use different values for the width and height arguments.

There are many possible ways of investigating this case, but you
should use ONLY the following commands:

  ellipse ()

*/

var img;

function preload() {
   img = loadImage('scene.png');
}

function setup() {
   createCanvas(img.width, img.height);
}

function draw() {
   image(img, 0, 0);
   stroke(255, 0, 0);
   strokeWeight(3);
   noFill();

   // write the code to draw around the evidence below
   ellipse(256, 226, 122);
   ellipse(420, 296, 105, 125);
   ellipse(568, 360, 50, 150);
   ellipse(720, 242, 190, 150);

   //A helpful mouse pointer
   push();
   fill(0);
   noStroke();
   text(mouseX + ',' + mouseY, mouseX, mouseY);
   pop();
}
