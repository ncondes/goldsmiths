/*
Officer: 5031189
CaseNum: 601-1-24696481-5031189

Case 601 - Cross Reference - stage 2

Fry is still on the loose. We think she’s resorted to stealing to get by.
Hopefully we can track her down by cross-referencing sightings and recent thefts in the area.

In the setup function, use a for loop to traverse the sightings, marking all of the locations on the map
where she was last seen. Do this by drawing small, Brown fill triangles centered over each location.

In addition, we've assembled a list of recent thefts in the area. Using another for loop to traverse the
recent crime records, you should mark those locations on the map. Do this by drawing small, DarkOrange stroke rectangles centered over each location.

Use X11 colours. You can find a reference table at https://en.wikipedia.org/wiki/Web_colors.

For this mission you will need ONLY the following:

- for loop
- fill
- triangle() NB. Draw each triangle with the point roughly at its center.

- stroke
- rect() NB. Draw each rectangle with the point at its center.


*/

var countyMap;

//Sightings of Casey Fry.

var CaseyFry_Sighted = {
   coordX: [
      639, 681, 712, 756, 715, 701, 753, 815, 795, 788, 781, 768, 750, 732, 714,
      695, 693, 654, 624, 594, 555,
   ],
   coordY: [
      288, 286, 293, 310, 368, 425, 436, 468, 506, 497, 486, 489, 500, 506, 514,
      531, 552, 523, 500, 484, 474,
   ],
};

//Recent crime records.

var Robbery_Log_Position_X = [
   403, 402, 427, 646, 639, 830, 809, 844, 802, 683, 552, 629, 712, 783, 415,
   561, 562, 751, 680, 626, 701, 838, 322, 468, 625,
];
var Robbery_Log_Position_Y = [
   401, 360, 403, 284, 264, 434, 443, 496, 350, 413, 464, 498, 562, 603, 225,
   282, 392, 283, 359, 436, 455, 565, 508, 556, 737,
];

function preload() {
   countyMap = loadImage('map.png');
}

function setup() {
   createCanvas(countyMap.width, countyMap.height);

   image(countyMap, 0, 0);

   //add your code below here
   for (let i = 0; i < CaseyFry_Sighted.coordX.length; i++) {
      fill(165, 42, 42);
      noStroke();
      triangle(
         CaseyFry_Sighted.coordX[i] - 5,
         CaseyFry_Sighted.coordY[i] + 4.3,
         CaseyFry_Sighted.coordX[i] + 5,
         CaseyFry_Sighted.coordY[i] + 4.3,
         CaseyFry_Sighted.coordX[i] + 0,
         CaseyFry_Sighted.coordY[i] - 4.3
      );
   }

   for (let i = 0; i < Robbery_Log_Position_X.length; i++) {
      stroke(255, 140, 0);
      noFill();
      rect(
         Robbery_Log_Position_X[i] - 5,
         Robbery_Log_Position_Y[i] - 5,
         10,
         10
      );
   }
}

//We are not using the draw function this time
