/*
801
Stage 3: La Traviata

Officer: 5031189
CaseNum: 801-2-93100284-5031189

La Traviata is rolling into town and we’ll be there to nab a shot for our files of the Order of Ritchie. The informant is starting to feel the heat but was able to scribble down which seat they are sitting in ordered by row in the array, gang. Each element is a seat on one row of the stalls going from row 1 to 10. Ritchie’s all have geek glasses so that might be helpful in your task.  Anyway you’ll have to untangle the array.

- Set the spotlights to shine on the members of the order. 
- Do this by setting the identified  property of the element in operaBuffs to true. 
- You must use a single for loop to pick out the members of the order

Solve the case using only:
For (not nested)
operaBuffs[ ][ ]

*/

var crowdImg;
var spotlight;

var operaBuffs = [
   [
      { x: 50, y: 50, identified: false },
      { x: 150, y: 50, identified: false },
      { x: 250, y: 50, identified: false },
      { x: 350, y: 50, identified: false },
      { x: 450, y: 50, identified: false },
      { x: 550, y: 50, identified: false },
      { x: 650, y: 50, identified: false },
      { x: 750, y: 50, identified: false },
      { x: 850, y: 50, identified: false },
      { x: 950, y: 50, identified: false },
   ],
   [
      { x: 50, y: 140, identified: false },
      { x: 150, y: 140, identified: false },
      { x: 250, y: 140, identified: false },
      { x: 350, y: 140, identified: false },
      { x: 450, y: 140, identified: false },
      { x: 550, y: 140, identified: false },
      { x: 650, y: 140, identified: false },
      { x: 750, y: 140, identified: false },
      { x: 850, y: 140, identified: false },
      { x: 950, y: 140, identified: false },
   ],
   [
      { x: 50, y: 230, identified: false },
      { x: 150, y: 230, identified: false },
      { x: 250, y: 230, identified: false },
      { x: 350, y: 230, identified: false },
      { x: 450, y: 230, identified: false },
      { x: 550, y: 230, identified: false },
      { x: 650, y: 230, identified: false },
      { x: 750, y: 230, identified: false },
      { x: 850, y: 230, identified: false },
      { x: 950, y: 230, identified: false },
   ],
   [
      { x: 50, y: 320, identified: false },
      { x: 150, y: 320, identified: false },
      { x: 250, y: 320, identified: false },
      { x: 350, y: 320, identified: false },
      { x: 450, y: 320, identified: false },
      { x: 550, y: 320, identified: false },
      { x: 650, y: 320, identified: false },
      { x: 750, y: 320, identified: false },
      { x: 850, y: 320, identified: false },
      { x: 950, y: 320, identified: false },
   ],
   [
      { x: 50, y: 410, identified: false },
      { x: 150, y: 410, identified: false },
      { x: 250, y: 410, identified: false },
      { x: 350, y: 410, identified: false },
      { x: 450, y: 410, identified: false },
      { x: 550, y: 410, identified: false },
      { x: 650, y: 410, identified: false },
      { x: 750, y: 410, identified: false },
      { x: 850, y: 410, identified: false },
      { x: 950, y: 410, identified: false },
   ],
   [
      { x: 50, y: 500, identified: false },
      { x: 150, y: 500, identified: false },
      { x: 250, y: 500, identified: false },
      { x: 350, y: 500, identified: false },
      { x: 450, y: 500, identified: false },
      { x: 550, y: 500, identified: false },
      { x: 650, y: 500, identified: false },
      { x: 750, y: 500, identified: false },
      { x: 850, y: 500, identified: false },
      { x: 950, y: 500, identified: false },
   ],
   [
      { x: 50, y: 590, identified: false },
      { x: 150, y: 590, identified: false },
      { x: 250, y: 590, identified: false },
      { x: 350, y: 590, identified: false },
      { x: 450, y: 590, identified: false },
      { x: 550, y: 590, identified: false },
      { x: 650, y: 590, identified: false },
      { x: 750, y: 590, identified: false },
      { x: 850, y: 590, identified: false },
      { x: 950, y: 590, identified: false },
   ],
   [
      { x: 50, y: 680, identified: false },
      { x: 150, y: 680, identified: false },
      { x: 250, y: 680, identified: false },
      { x: 350, y: 680, identified: false },
      { x: 450, y: 680, identified: false },
      { x: 550, y: 680, identified: false },
      { x: 650, y: 680, identified: false },
      { x: 750, y: 680, identified: false },
      { x: 850, y: 680, identified: false },
      { x: 950, y: 680, identified: false },
   ],
   [
      { x: 50, y: 770, identified: false },
      { x: 150, y: 770, identified: false },
      { x: 250, y: 770, identified: false },
      { x: 350, y: 770, identified: false },
      { x: 450, y: 770, identified: false },
      { x: 550, y: 770, identified: false },
      { x: 650, y: 770, identified: false },
      { x: 750, y: 770, identified: false },
      { x: 850, y: 770, identified: false },
      { x: 950, y: 770, identified: false },
   ],
   [
      { x: 50, y: 860, identified: false },
      { x: 150, y: 860, identified: false },
      { x: 250, y: 860, identified: false },
      { x: 350, y: 860, identified: false },
      { x: 450, y: 860, identified: false },
      { x: 550, y: 860, identified: false },
      { x: 650, y: 860, identified: false },
      { x: 750, y: 860, identified: false },
      { x: 850, y: 860, identified: false },
      { x: 950, y: 860, identified: false },
   ],
];
var gang = [2, 3, 1, 5, 5, 9, 8, 4, 1, 4];

function setup() {
   createCanvas(1100, 1100);

   crowdImg = loadImage('crowd.png');
   spotlight = loadImage('spotlight.png');
}

function draw() {
   image(crowdImg, 0, 0);
   ////////////YOUR CODE GOES HERE////////////////////////

   // La Traviata is rolling into town and we’ll be there to nab a shot for our files of the Order of Ritchie. The informant is starting to feel the heat but was able to scribble down which seat they are sitting in ordered by row in the array, gang. Each element is a seat on one row of the stalls going from row 1 to 10. Ritchie’s all have geek glasses so that might be helpful in your task.  Anyway you’ll have to untangle the array.

   const ritchies = [2, 3, 1, 5, 5, 9, 8, 4, 1, 4];

   for (let i = 0; i < operaBuffs.length; i++) {
      operaBuffs[i][ritchies[i]].identified = true;
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

   for (var i = 0; i < operaBuffs.length; i++) {
      for (var j = 0; j < operaBuffs[i].length; j++) {
         if (operaBuffs[i][j].identified) {
            image(spotlight, operaBuffs[i][j].x, operaBuffs[i][j].y, 100, 100);
         }
      }
   }
}
