/*
801
Stage 1: Rigoletto

Officer: 5031189
CaseNum: 801-0-68056795-5031189

At the rotten core of Console City are a series of secretive orders who pull all the criminal strings. If we get to them we can clean up this town for good. 

Now we have a chance - the Order of The Knuth's will be at the command performance of Rigoletto at the console city Opera house tonight. Our person on the inside is working the box office. We’ve got intell and access to the lighting desk. 

- Set the spotlights to shine on the members of the order. 
- Do this by setting the recognised  property of the element in crowd to true. 
- We know that one member of the order is seated in the 5th row, 3rd seat
- But you can identify the other 7 members of the order by their trademark no hat. 

There are many ways to complete the case but you should only use crowd[#][#] to update the property.


*/

var crowdImg;
var spotlight;

var crowd = [
   [
      { x: 50, y: 50, recognised: false },
      { x: 150, y: 50, recognised: false },
      { x: 250, y: 50, recognised: false },
      { x: 350, y: 50, recognised: false },
      { x: 450, y: 50, recognised: false },
      { x: 550, y: 50, recognised: false },
      { x: 650, y: 50, recognised: false },
      { x: 750, y: 50, recognised: false },
      { x: 850, y: 50, recognised: false },
      { x: 950, y: 50, recognised: false },
   ],
   [
      { x: 50, y: 140, recognised: false },
      { x: 150, y: 140, recognised: false },
      { x: 250, y: 140, recognised: false },
      { x: 350, y: 140, recognised: false },
      { x: 450, y: 140, recognised: false },
      { x: 550, y: 140, recognised: false },
      { x: 650, y: 140, recognised: false },
      { x: 750, y: 140, recognised: false },
      { x: 850, y: 140, recognised: false },
      { x: 950, y: 140, recognised: false },
   ],
   [
      { x: 50, y: 230, recognised: false },
      { x: 150, y: 230, recognised: false },
      { x: 250, y: 230, recognised: false },
      { x: 350, y: 230, recognised: false },
      { x: 450, y: 230, recognised: false },
      { x: 550, y: 230, recognised: false },
      { x: 650, y: 230, recognised: false },
      { x: 750, y: 230, recognised: false },
      { x: 850, y: 230, recognised: false },
      { x: 950, y: 230, recognised: false },
   ],
   [
      { x: 50, y: 320, recognised: false },
      { x: 150, y: 320, recognised: false },
      { x: 250, y: 320, recognised: false },
      { x: 350, y: 320, recognised: false },
      { x: 450, y: 320, recognised: false },
      { x: 550, y: 320, recognised: false },
      { x: 650, y: 320, recognised: false },
      { x: 750, y: 320, recognised: false },
      { x: 850, y: 320, recognised: false },
      { x: 950, y: 320, recognised: false },
   ],
   [
      { x: 50, y: 410, recognised: false },
      { x: 150, y: 410, recognised: false },
      { x: 250, y: 410, recognised: false },
      { x: 350, y: 410, recognised: false },
      { x: 450, y: 410, recognised: false },
      { x: 550, y: 410, recognised: false },
      { x: 650, y: 410, recognised: false },
      { x: 750, y: 410, recognised: false },
      { x: 850, y: 410, recognised: false },
      { x: 950, y: 410, recognised: false },
   ],
   [
      { x: 50, y: 500, recognised: false },
      { x: 150, y: 500, recognised: false },
      { x: 250, y: 500, recognised: false },
      { x: 350, y: 500, recognised: false },
      { x: 450, y: 500, recognised: false },
      { x: 550, y: 500, recognised: false },
      { x: 650, y: 500, recognised: false },
      { x: 750, y: 500, recognised: false },
      { x: 850, y: 500, recognised: false },
      { x: 950, y: 500, recognised: false },
   ],
   [
      { x: 50, y: 590, recognised: false },
      { x: 150, y: 590, recognised: false },
      { x: 250, y: 590, recognised: false },
      { x: 350, y: 590, recognised: false },
      { x: 450, y: 590, recognised: false },
      { x: 550, y: 590, recognised: false },
      { x: 650, y: 590, recognised: false },
      { x: 750, y: 590, recognised: false },
      { x: 850, y: 590, recognised: false },
      { x: 950, y: 590, recognised: false },
   ],
   [
      { x: 50, y: 680, recognised: false },
      { x: 150, y: 680, recognised: false },
      { x: 250, y: 680, recognised: false },
      { x: 350, y: 680, recognised: false },
      { x: 450, y: 680, recognised: false },
      { x: 550, y: 680, recognised: false },
      { x: 650, y: 680, recognised: false },
      { x: 750, y: 680, recognised: false },
      { x: 850, y: 680, recognised: false },
      { x: 950, y: 680, recognised: false },
   ],
   [
      { x: 50, y: 770, recognised: false },
      { x: 150, y: 770, recognised: false },
      { x: 250, y: 770, recognised: false },
      { x: 350, y: 770, recognised: false },
      { x: 450, y: 770, recognised: false },
      { x: 550, y: 770, recognised: false },
      { x: 650, y: 770, recognised: false },
      { x: 750, y: 770, recognised: false },
      { x: 850, y: 770, recognised: false },
      { x: 950, y: 770, recognised: false },
   ],
   [
      { x: 50, y: 860, recognised: false },
      { x: 150, y: 860, recognised: false },
      { x: 250, y: 860, recognised: false },
      { x: 350, y: 860, recognised: false },
      { x: 450, y: 860, recognised: false },
      { x: 550, y: 860, recognised: false },
      { x: 650, y: 860, recognised: false },
      { x: 750, y: 860, recognised: false },
      { x: 850, y: 860, recognised: false },
      { x: 950, y: 860, recognised: false },
   ],
];

function setup() {
   createCanvas(1100, 1100);

   crowdImg = loadImage('crowd.png');
   spotlight = loadImage('spotlight.png');
}

// you should have an assignment command for each member of the gang

function draw() {
   image(crowdImg, 0, 0);
   ////////////YOUR CODE GOES HERE////////////////////////

   crowd[9][2].recognised = true;
   crowd[0][8].recognised = true;
   crowd[1][4].recognised = true;
   crowd[3][3].recognised = true;
   crowd[4][2].recognised = true;
   crowd[5][2].recognised = true;
   crowd[7][5].recognised = true;
   crowd[7][7].recognised = true;

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
         if (crowd[i][j].recognised) {
            image(spotlight, crowd[i][j].x, crowd[i][j].y, 100, 100);
         }
      }
   }
}
