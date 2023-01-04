/*
Officer: 5031189
CaseNum: 601-0-39975120-5031189

Case 601 - Escaped - stage 1

We've got an emergency here. The notorious killer Casey Fry has escaped from the Federal Correctional Institution.
She is on the loose and we have been asked to track her movements.

In the setup function, use a for loop to traverse the sightings, marking all of the locations on the map
where she was last seen. Do this by drawing small, Crimson stroke rectangles centered over each location.

Use X11 colours. You can find a reference table at https://en.wikipedia.org/wiki/Web_colors.

For this mission you will need ONLY the following:

- for loop
- stroke
- rect() NB. Draw each rectangle with the point at its center.


*/

var countyMap;

//Sightings of Casey Fry.

var Fugitive_Record = [
   { Position_X: 127, Position_Y: 175 },
   { Position_X: 156, Position_Y: 158 },
   { Position_X: 179, Position_Y: 192 },
   { Position_X: 200, Position_Y: 154 },
   { Position_X: 220, Position_Y: 133 },
   { Position_X: 228, Position_Y: 168 },
   { Position_X: 249, Position_Y: 149 },
   { Position_X: 269, Position_Y: 139 },
   { Position_X: 292, Position_Y: 168 },
   { Position_X: 321, Position_Y: 133 },
   { Position_X: 354, Position_Y: 159 },
   { Position_X: 390, Position_Y: 144 },
   { Position_X: 396, Position_Y: 225 },
   { Position_X: 429, Position_Y: 228 },
   { Position_X: 456, Position_Y: 230 },
   { Position_X: 467, Position_Y: 277 },
   { Position_X: 483, Position_Y: 267 },
   { Position_X: 531, Position_Y: 291 },
   { Position_X: 547, Position_Y: 278 },
   { Position_X: 571, Position_Y: 274 },
   { Position_X: 589, Position_Y: 318 },
   { Position_X: 637, Position_Y: 280 },
];

function preload() {
   countyMap = loadImage('map.png');
}

function setup() {
   createCanvas(countyMap.width, countyMap.height);

   image(countyMap, 0, 0);

   //add your code below here
   for (let i = 0; i < Fugitive_Record.length; i++) {
      stroke(220, 20, 60);
      noFill();
      rect(
         Fugitive_Record[i].Position_X - 5,
         Fugitive_Record[i].Position_Y - 5,
         10,
         10
      );
   }
}

//We are not using the draw function this time
