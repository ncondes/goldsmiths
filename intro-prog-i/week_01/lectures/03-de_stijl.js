const colors = {
   border: '#DBD4C7',
   red: '#DF2822',
   white: '#E0DFDB',
   blue: '#035A9D',
   yellow: '#EDDA71',
};

function setup() {
   //create a large square canvas
   createCanvas(800, 1000);
}

function draw() {
   //set the fill colour to red
   fill(255, 0, 0);

   //set a thick stroke weight for the black lines
   strokeWeight(12);

   // red rectangle
   fill(colors.red);
   rect(230, 50, 550, 550);
   // white rectangles to the left
   fill(colors.white);
   rect(50, 50, 180, 250);
   rect(50, 300, 180, 300);

   // bold line border
   strokeWeight(35);
   rect(50, 300, 180, 0);

   // reset stroke weigth
   strokeWeight(12);

   // blue rectangle
   fill(colors.blue);
   rect(50, 600, 180, 200);

   // white bottom rentangle
   fill(colors.white);
   rect(230, 600, 480, 200);

   // small rectangles at bottom right corner
   rect(710, 600, 70, 100);

   fill(colors.yellow);
   rect(710, 700, 70, 100);
}
