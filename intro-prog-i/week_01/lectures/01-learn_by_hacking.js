console.log('Hello World');

function setup() {
   // In p5.js we create an area of pixels on a webpage we can draw to:
   // This is called the canvas
   // A canvas need width and height
   createCanvas(500, 500);
}

// function draw() {
//    background(200);

//    noStroke();

//    fill(204, 101, 192, 127);

//    triangle(18, 18, 18, 360, 81, 360);

//    // rect(x, t, width, height)
//    rect(81, 81, 63, 63);

//    quad(189, 18, 216, 360, 144, 360);

//    ellipse(252, 144, 72, 72);

//    triangle(288, 18, 351, 360, 288, 360);

//    arc(479, 300, 280, 280, PI, TWO_PI);
// }

function draw() {
   fill('#282828');
   noStroke();
   rect(100, 100, 100, 100);

   fill('#AA0000');
   noStroke();
   rect(300, 100, 100, 100);
}
