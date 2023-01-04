/*
Officer: 5031189
CaseNum: 601-2-19714071-5031189

Case 601 - Murdering Again - stage 3

Now murders are beginning to occur - we're pretty sure that this is the work of Fry.
If we can place her near any of the recent crime scenes in the area we should be able narrow down her location.

In the setup function, use a for loop to traverse the sightings, marking all of the locations on the map
where she was last seen. Do this by drawing DarkOrchid stroke vertexes at each location.

In addition, we've assembled a list of recent thefts in the area. Using another for loop to traverse the
recent crime records, you should mark those locations on the map. Do this by drawing small, Fuchsia fill triangles centered over each location.

Use X11 colours. You can find a reference table at https://en.wikipedia.org/wiki/Web_colors.

Let's try to catch Fry by looking patterns between sightings and crimes. If she was within less than 81 pixels of any of the crimes then the details
should be pushed to possible matches with the following format.

{ suspect_x: 0, suspect_y: 0 ,crime_x: 0, crime_y: 0, victimName: "John_Doe" }

Note that the possible matches are already being drawn.
Your job is simply to fill the array with the correct data.

For this mission you will need ONLY the following:

- for loop
- dist()
- if()
- stroke()
- beginShape(), endShape(), vertex()

- fill
- triangle() NB. Draw each triangle with the point roughly at its center.


*/

var countyMap;

var possibleMatches = [];

//Sightings of Casey Fry.

var SuspectSighted = [
   { point_x: 639, point_y: 288 },
   { point_x: 681, point_y: 286 },
   { point_x: 712, point_y: 293 },
   { point_x: 756, point_y: 310 },
   { point_x: 715, point_y: 368 },
   { point_x: 701, point_y: 425 },
   { point_x: 753, point_y: 436 },
   { point_x: 815, point_y: 468 },
   { point_x: 795, point_y: 506 },
   { point_x: 788, point_y: 497 },
   { point_x: 781, point_y: 486 },
   { point_x: 768, point_y: 489 },
   { point_x: 750, point_y: 500 },
   { point_x: 732, point_y: 506 },
   { point_x: 714, point_y: 514 },
   { point_x: 695, point_y: 531 },
   { point_x: 693, point_y: 552 },
   { point_x: 654, point_y: 523 },
   { point_x: 624, point_y: 500 },
   { point_x: 594, point_y: 484 },
   { point_x: 555, point_y: 474 },
];

//Recent crime records.

var IncidentRecord_Loc_X = [
   409, 443, 465, 709, 695, 652, 641, 119, 114, 90, 76, 615, 349, 456,
];
var IncidentRecord_Loc_Y = [
   446, 419, 548, 552, 421, 268, 306, 344, 359, 490, 516, 741, 796, 770,
];
var IncidentRecord_Victim_ = [
   'JACQUELINE DURANTS',
   'MALINDA GOODBURY',
   'JAUNITA JOYER',
   'LIANNE COURTWOOD',
   'ERMELINDA OORIN',
   'GAYLA WILLMAR',
   'JULIANA ADVERSANE',
   'LOUISE ZETLAND',
   'TU DAVISWOOD',
   'DARBY MYRLE',
   'LESLEY MONKSFORD',
   'NELSON TINTLE',
   'BRAD SILVEIRA',
   'LINETTE MOHWAWK',
];

function preload() {
   countyMap = loadImage('map.png');
}

function setup() {
   createCanvas(countyMap.width, countyMap.height);

   image(countyMap, 0, 0);

   //add your code below here

   beginShape();
   for (let i = 0; i < SuspectSighted.length; i++) {
      for (let j = 0; j < IncidentRecord_Loc_X.length; j++) {
         if (
            dist(
               SuspectSighted[i].point_x,
               SuspectSighted[i].point_y,
               IncidentRecord_Loc_X[j],
               IncidentRecord_Loc_Y[j]
            ) < 81
         ) {
            possibleMatches.push({
               suspect_x: SuspectSighted[i].point_x,
               suspect_y: SuspectSighted[i].point_y,
               crime_x: IncidentRecord_Loc_X[j],
               crime_y: IncidentRecord_Loc_Y[j],
               victimName: IncidentRecord_Victim_[j],
            });
         }
      }

      stroke(153, 50, 204);
      noFill();
      vertex(SuspectSighted[i].point_x, SuspectSighted[i].point_y);
   }
   endShape();

   for (let i = 0; i < IncidentRecord_Loc_X.length; i++) {
      noStroke();
      fill(255, 0, 255);
      triangle(
         IncidentRecord_Loc_X[i] - 5,
         IncidentRecord_Loc_Y[i] + 4.3,
         IncidentRecord_Loc_X[i] + 5,
         IncidentRecord_Loc_Y[i] + 4.3,
         IncidentRecord_Loc_X[i] + 0,
         IncidentRecord_Loc_Y[i] - 4.3
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
