/*

Officer: 5031189
CaseNum: 702-0-32657037-5031189

Case 702 - The case of Vanishing Vannevar
Stage 1 - Mobilise

“Calling all units: the notorious criminal and speedster known as Vanishing Vannevar is on the run.
All cars to mobilise.” Word has it that you’re pretty nifty behind the wheel. I want you in on
this action kid. Get your car on the road by completing the </DRIVE_NAME/> function below.

There are many possible ways of completing this task,
but you should ONLY use the following commands and techniques:

	- increment variables
	- random
	- constrain
	- calling functions

HINT: make sure you take a look at the initialisation of ChaseCar to understand it's properties.

*/

///////////////////////// HELPER FUNCTIONS /////////////////////

// ChaseCar = {
//    XPos: roadLeftEdge + roadWidth / 4,
//    YPos: 300,
//    MilesAmt: 0,
//    SpeedValue: 3,
//    EngineShudderVal: 0,
//    VehicleVariety: 'detective',
//    LicencePlate: '5L3UTH',
//    exhaust: [],
// };

function move_car() {
   /*
	This function should do the following: 
	 - increment ChaseCar's MilesAmt property by its SpeedValue property 
	 - add a random amount between -0.06 and 0.06 to ChaseCar's EngineShudderVal property
	 - use the constrain function to constrain ChaseCar's EngineShudderVal property to values between 0.01 and 1.04
	 - call the turn_car_motor function passing ChaseCar as an argument
	*/
   ChaseCar.MilesAmt += ChaseCar.SpeedValue;
   ChaseCar.EngineShudderVal += random(-0.06, 0.06);
   ChaseCar.EngineShudderVal = constrain(ChaseCar.EngineShudderVal, 0.01, 1.04);
   turn_car_motor(ChaseCar);
}

//////////////DO NOT CHANGE CODE BELOW THIS LINE//////////////////

var ChaseCar;

var roadWidth = 400;
var roadLeftEdge = 200;
var carImages = {};

function preload() {
   carImages.detective = loadImage('cars/detective.png');
}

function setup() {
   createCanvas(800, 800);

   ChaseCar = {
      XPos: roadLeftEdge + roadWidth / 4,
      YPos: 300,
      MilesAmt: 0,
      SpeedValue: 3,
      EngineShudderVal: 0,
      VehicleVariety: 'detective',
      LicencePlate: '5L3UTH',
      exhaust: [],
   };
}

function draw() {
   background(0);

   move_car();

   drawRoad();
   drawCars();
}

/////////////////////////DRAWING FUNCTIONS////////////////////////

function drawRoad() {
   stroke(100);
   fill(50);
   rect(roadLeftEdge, 0, roadWidth, 800);
   stroke(255);

   for (var i = -1; i < 20; i++) {
      line(
         roadLeftEdge + roadWidth / 2,
         i * 100 + (ChaseCar.MilesAmt % 100),
         roadLeftEdge + roadWidth / 2,
         i * 100 + 70 + (ChaseCar.MilesAmt % 100)
      );
   }
}

function drawCars() {
   //draw the detective car

   image;
   drawExhaust(ChaseCar);
   image(
      carImages['detective'],
      ChaseCar.XPos -
         carImages['detective'].width / 2 +
         random(-ChaseCar.EngineShudderVal, ChaseCar.EngineShudderVal),
      ChaseCar.YPos +
         random(-ChaseCar.EngineShudderVal, ChaseCar.EngineShudderVal)
   );
}

function turn_car_motor(car) {
   car.exhaust.push({
      size: 2,
      x: car.XPos,
      y: car.YPos + carImages[car.VehicleVariety].height,
   });

   for (var i = car.exhaust.length - 1; i >= 0; i--) {
      car.exhaust[i].y += max(0.75, car.SpeedValue / 3);
      car.exhaust[i].x += random(-1, 1);
      car.exhaust[i].size += 0.5;

      if (car.exhaust[i].y > height) {
         car.exhaust.splice(i, 1);
      }
   }
}

function drawExhaust(car) {
   noStroke();
   for (var i = 0; i < car.exhaust.length; i++) {
      var alpha = map(car.exhaust[i].size, 0, 40, 50, 0);
      fill(125, alpha);
      ellipse(car.exhaust[i].x + 20, car.exhaust[i].y, car.exhaust[i].size);
   }
}
