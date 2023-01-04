/*
Officer: 5031189
CaseNum: 601-3-33870539-5031189

Case 601 - Narrowing in - stage 4

Casey Fry is on a killing spree and we still haven’t caught her.
We need a more sophisticated approach.

In the setup function, use a for loop to traverse the sightings, marking all of the locations on the map
where she was last seen. Do this by drawing Magenta stroke vertexes at each location.

In addition, we've assembled a list of recent thefts in the area. Using another for loop to traverse the
recent crime records, you should mark those locations on the map. Do this by drawing small, Brown fill triangles centered over each location.

This time we will catch Fry by comparing both distance from the crimes and dates of sightings.
If she was within less than 82 pixels of any of the crimes within no more than 1 days of their occurrence then the details
should be pushed to the list of possible matches with the following format.

{ suspect_x: 0, suspect_y: 0 ,crime_x: 0, crime_y: 0, victimName: "John_Doe" }

Note that the possible matches are already being drawn.
Your job is to fill the array with the correct data.

Use X11 colours. You can find a reference table at https://en.wikipedia.org/wiki/Web_colors.

For this mission you will need ONLY the following:

- for loop
- if()
- dist()
- abs()
- stroke()
- beginShape(), endShape(), vertex()

- fill
- triangle() NB. Draw each triangle with the point roughly at its center.


*/

var countyMap;

var possibleMatches = [];

//Sightings of Casey Fry.

var casey_sightings_PtX = [
   518, 486, 475, 376, 316, 265, 253, 240, 220, 178, 199, 146, 115, 67, 39, 68,
];
var casey_sightings_PtY = [
   471, 508, 566, 554, 559, 614, 609, 604, 597, 600, 604, 582, 551, 495, 493,
   461,
];
var casey_sightings_recordDate = [
   12, 12, 13, 13, 13, 14, 14, 14, 15, 15, 17, 18, 20, 21, 22, 24,
];

//Recent crime records.

var crimescene_record_coord_x = [
   438, 408, 408, 642, 623, 95, 75, 269, 389, 484, 496, 546, 538, 702, 817,
];
var crimescene_record_coord_y = [
   420, 451, 377, 289, 279, 488, 522, 597, 554, 549, 484, 463, 359, 412, 474,
];
var crimescene_record_recordDate = [
   11, 11, 13, 16, 16, 17, 18, 26, 28, 2, 9, 14, 12, 17, 18,
];
var crimescene_record_fatality_details = [
   'JULIANA ADVERSANE',
   'BRAD SILVEIRA',
   'LAVERNE JACQUELIN',
   'JESUS FORSLIN',
   'JACQUELINE DURANTS',
   'TU DAVISWOOD',
   'LINETTE MOHWAWK',
   'BRIDGET BROADVIEW',
   'MAJORIE JENI',
   'ERMELINDA OORIN',
   'JAUNITA JOYER',
   'TAMICA MAUBERT',
   'DEEDEE PHINNEY',
   'NELSON TINTLE',
   'LAKESHA SYMMES',
];

function preload() {
   countyMap = loadImage('map.png');
}

function setup() {
   createCanvas(countyMap.width, countyMap.height);

   image(countyMap, 0, 0);

   //add your code below here

   beginShape();
   for (let i = 0; i < casey_sightings_PtX.length; i++) {
      for (let j = 0; j < crimescene_record_coord_x.length; j++) {
         const distance = dist(
            casey_sightings_PtX[i],
            casey_sightings_PtY[i],
            crimescene_record_coord_x[j],
            crimescene_record_coord_y[j]
         );
         const dateDif = abs(
            crimescene_record_recordDate[j] - casey_sightings_recordDate[i]
         );

         if (distance < 82 && dateDif <= 1) {
            possibleMatches.push({
               suspect_x: casey_sightings_PtX[i],
               suspect_y: casey_sightings_PtY[i],
               crime_x: crimescene_record_coord_x[j],
               crime_y: crimescene_record_coord_y[j],
               victimName: crimescene_record_fatality_details[j],
            });
         }
      }

      stroke(255, 0, 255);
      noFill();
      vertex(casey_sightings_PtX[i], casey_sightings_PtY[i]);
   }
   endShape();

   for (let i = 0; i < crimescene_record_coord_x.length; i++) {
      fill(165, 42, 42);
      noStroke();
      triangle(
         crimescene_record_coord_x[i] - 5,
         crimescene_record_coord_y[i] + 4.3,
         crimescene_record_coord_x[i] + 5,
         crimescene_record_coord_y[i] + 4.3,
         crimescene_record_coord_x[i] + 0,
         crimescene_record_coord_y[i] - 4.3
      );
   }

   // code to draw the matches ( if any)
   for (let i = 0; i < possibleMatches.length; i++) {
      stroke(127);
      strokeWeight(3);
      line(
         possibleMatches[i].crime_x,
         possibleMatches[i].crime_y,
         possibleMatches[i].suspect_x,
         possibleMatches[i].suspect_y
      );

      noStroke();
      fill(127);
      text(
         possibleMatches[i].victimName,
         possibleMatches[i].crime_x + 15,
         possibleMatches[i].crime_y + 15
      );
   }
}

//We are not using the draw function this time
