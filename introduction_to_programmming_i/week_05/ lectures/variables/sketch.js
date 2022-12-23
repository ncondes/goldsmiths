let treePosX;
let cloudPosX;
let cloudScale;

function setup() {
   createCanvas(512, 512);

   treePosX = 156;
   cloudPosX = 150;
   cloudScale = 2;
}

function draw() {
   background(150, 150, 255);

   //sun
   noStroke();
   fill(255, 150, 0);
   ellipse(430, 150, 100, 100);

   //tree
   stroke(0);
   fill(180, 80, 0);
   ellipse(treePosX, 360, 40, 100);
   fill(0, 150, 0);
   ellipse(treePosX, 300, 120, 120);

   //cloud
   noStroke();
   fill(255);
   ellipse(cloudPosX + 00 * cloudScale, 50, 50 * cloudScale, 50 * cloudScale);
   ellipse(cloudPosX + 30 * cloudScale, 50, 30 * cloudScale, 30 * cloudScale);
   ellipse(cloudPosX + 50 * cloudScale, 50, 20 * cloudScale, 20 * cloudScale);

   //ground
   fill(200, 130, 0);
   rect(0, 400, width, 112);
}
