/*
801
Stage 4: The Marriage of Figaro

Officer: 5031189
CaseNum: 801-3-86302134-5031189

We have a chance to record the powerful Order of Tukey before the curtain comes down on the Marriage of Figaro. They might be the most influential group in console city but they still have their quirks and will be spotable thanks their trademark monicle.

Our guy on the inside has only been able to provide us with the ticket stubs. They are stored in underSuspicion moving through the rows in order from left to right. Ticket stubbs are marked with true if they are in the gang. It’ll be tough but I’m sure you are up to it kid!

- Set the spotlights to shine on the members of the order. 
- Do this by setting the caught  property of the element in crowd to true. 
- You must use a nested for loop to pick out the members of the order


Complete the case using:
For loop (nested)
crowd[ ][ ]
You can create an additional variable if it helps.


*/

var crowdImg;
var spotlight;

var crowd = [
   [
      { x: 50, y: 50, caught: false },
      { x: 150, y: 50, caught: false },
      { x: 250, y: 50, caught: false },
      { x: 350, y: 50, caught: false },
      { x: 450, y: 50, caught: false },
      { x: 550, y: 50, caught: false },
      { x: 650, y: 50, caught: false },
      { x: 750, y: 50, caught: false },
      { x: 850, y: 50, caught: false },
      { x: 950, y: 50, caught: false },
   ],
   [
      { x: 50, y: 140, caught: false },
      { x: 150, y: 140, caught: false },
      { x: 250, y: 140, caught: false },
      { x: 350, y: 140, caught: false },
      { x: 450, y: 140, caught: false },
      { x: 550, y: 140, caught: false },
      { x: 650, y: 140, caught: false },
      { x: 750, y: 140, caught: false },
      { x: 850, y: 140, caught: false },
      { x: 950, y: 140, caught: false },
   ],
   [
      { x: 50, y: 230, caught: false },
      { x: 150, y: 230, caught: false },
      { x: 250, y: 230, caught: false },
      { x: 350, y: 230, caught: false },
      { x: 450, y: 230, caught: false },
      { x: 550, y: 230, caught: false },
      { x: 650, y: 230, caught: false },
      { x: 750, y: 230, caught: false },
      { x: 850, y: 230, caught: false },
      { x: 950, y: 230, caught: false },
   ],
   [
      { x: 50, y: 320, caught: false },
      { x: 150, y: 320, caught: false },
      { x: 250, y: 320, caught: false },
      { x: 350, y: 320, caught: false },
      { x: 450, y: 320, caught: false },
      { x: 550, y: 320, caught: false },
      { x: 650, y: 320, caught: false },
      { x: 750, y: 320, caught: false },
      { x: 850, y: 320, caught: false },
      { x: 950, y: 320, caught: false },
   ],
   [
      { x: 50, y: 410, caught: false },
      { x: 150, y: 410, caught: false },
      { x: 250, y: 410, caught: false },
      { x: 350, y: 410, caught: false },
      { x: 450, y: 410, caught: false },
      { x: 550, y: 410, caught: false },
      { x: 650, y: 410, caught: false },
      { x: 750, y: 410, caught: false },
      { x: 850, y: 410, caught: false },
      { x: 950, y: 410, caught: false },
   ],
   [
      { x: 50, y: 500, caught: false },
      { x: 150, y: 500, caught: false },
      { x: 250, y: 500, caught: false },
      { x: 350, y: 500, caught: false },
      { x: 450, y: 500, caught: false },
      { x: 550, y: 500, caught: false },
      { x: 650, y: 500, caught: false },
      { x: 750, y: 500, caught: false },
      { x: 850, y: 500, caught: false },
      { x: 950, y: 500, caught: false },
   ],
   [
      { x: 50, y: 590, caught: false },
      { x: 150, y: 590, caught: false },
      { x: 250, y: 590, caught: false },
      { x: 350, y: 590, caught: false },
      { x: 450, y: 590, caught: false },
      { x: 550, y: 590, caught: false },
      { x: 650, y: 590, caught: false },
      { x: 750, y: 590, caught: false },
      { x: 850, y: 590, caught: false },
      { x: 950, y: 590, caught: false },
   ],
   [
      { x: 50, y: 680, caught: false },
      { x: 150, y: 680, caught: false },
      { x: 250, y: 680, caught: false },
      { x: 350, y: 680, caught: false },
      { x: 450, y: 680, caught: false },
      { x: 550, y: 680, caught: false },
      { x: 650, y: 680, caught: false },
      { x: 750, y: 680, caught: false },
      { x: 850, y: 680, caught: false },
      { x: 950, y: 680, caught: false },
   ],
   [
      { x: 50, y: 770, caught: false },
      { x: 150, y: 770, caught: false },
      { x: 250, y: 770, caught: false },
      { x: 350, y: 770, caught: false },
      { x: 450, y: 770, caught: false },
      { x: 550, y: 770, caught: false },
      { x: 650, y: 770, caught: false },
      { x: 750, y: 770, caught: false },
      { x: 850, y: 770, caught: false },
      { x: 950, y: 770, caught: false },
   ],
   [
      { x: 50, y: 860, caught: false },
      { x: 150, y: 860, caught: false },
      { x: 250, y: 860, caught: false },
      { x: 350, y: 860, caught: false },
      { x: 450, y: 860, caught: false },
      { x: 550, y: 860, caught: false },
      { x: 650, y: 860, caught: false },
      { x: 750, y: 860, caught: false },
      { x: 850, y: 860, caught: false },
      { x: 950, y: 860, caught: false },
   ],
];
var underSuspicion = [
   true,
   false,
   false,
   false,
   false,
   false,
   false,
   true,
   false,
   false,
   false,
   false,
   false,
   false,
   false,
   false,
   false,
   false,
   false,
   true,
   false,
   false,
   false,
   false,
   false,
   false,
   false,
   false,
   false,
   false,
   true,
   true,
   false,
   false,
   false,
   false,
   false,
   false,
   false,
   false,
   false,
   false,
   false,
   false,
   false,
   false,
   false,
   true,
   false,
   false,
   false,
   false,
   false,
   false,
   false,
   false,
   true,
   false,
   false,
   false,
   false,
   false,
   false,
   false,
   true,
   false,
   false,
   false,
   false,
   false,
   false,
   false,
   false,
   false,
   false,
   false,
   false,
   false,
   false,
   false,
   false,
   false,
   false,
   false,
   false,
   false,
   false,
   false,
   false,
   false,
   false,
   false,
   false,
   false,
   false,
   false,
   false,
   false,
   false,
   false,
];

function setup() {
   createCanvas(1100, 1100);

   crowdImg = loadImage('crowd.png');
   spotlight = loadImage('spotlight.png');
}

function draw() {
   image(crowdImg, 0, 0);
   ////////////YOUR CODE GOES HERE////////////////////////
   let index = -1;
   for (let i = 0; i < crowd.length; i++) {
      for (let j = 0; j < crowd.length; j++) {
         index++;
         crowd[i][j].caught = underSuspicion[index];
      }
   }

   ///////////DON'T CHANGE ANY CODE BELOW HERE////////////
   blendMode(BLEND);
   background(80);
   highlight();
   blendMode(DARKEST);
   image(crowdImg, 0, 0);
}

function highlight() {
   fill(255, 0, 0, 100);

   for (var i = 0; i < crowd.length; i++) {
      for (var j = 0; j < crowd[i].length; j++) {
         if (crowd[i][j].caught) {
            image(spotlight, crowd[i][j].x, crowd[i][j].y, 100, 100);
         }
      }
   }
}
