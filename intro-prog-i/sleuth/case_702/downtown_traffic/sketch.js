/*

Officer: 5031189
CaseNum: 702-1-59722110-5031189

Case 702 - The case of Vanishing Vannevar
Stage 2 - Downtown traffic

“All units: Vannevar is heading into the downtown area. Heavy traffic ahead. Drive safely.”
Complete the helper functions below to drive the car and avoid other vehicles. Keep on it kid.

There are many possible ways of completing this task,
but you should ONLY use the following commands and techniques:

	- Incrementing and assiging variables
	- Maths function such as random and constrain
	- Conditional statements
	- Traversing arrays with for loops
	- calling functions and returning values

HINT: make sure you take a look at the initialisation of chaseVehicle and the cars in
VehicleData to understand their properties.

*/

///////////////////////// HELPER FUNCTIONS /////////////////////

function Move_Vehicle() {
   /*
	This function should do the following: 
	 - increment chaseVehicle's milesAmount property by its accelValue property 
	 - add a random amount between -0.04 and 0.04 to chaseVehicle's engineVibrateAmount property
	 - use the constrain function to constrain chaseVehicle's engineVibrateAmount property to values between 0.04 and 1.06
	 - call the Cycle_Motor function passing chaseVehicle as an argument
	*/
   chaseVehicle.milesAmount += chaseVehicle.accelValue;
   chaseVehicle.engineVibrateAmount += random(-0.04, 0.04);
   chaseVehicle.engineVibrateAmount = constrain(
      chaseVehicle.engineVibrateAmount,
      0.04,
      1.06
   );
   Cycle_Motor(chaseVehicle);
}

function Change_Lanes(vehicle) {
   /*
	This function should do the following: 
	 - move vehicle from one lane to the other.
	 - do the move in a single step without any extra animation.
	 - use LanePosA and LanePosB to effect the change.
	 hint: You will need to modify the xCoord property of vehicle.
	*/

   if (vehicle.xCoord === LanePosA) {
      vehicle.xCoord = LanePosB;
   } else {
      vehicle.xCoord = LanePosA;
   }
}

function CheckCar_Infront(CarObjA, CarObjB) {
   /*
	This function should do the following: 
	 - determine if CarObjA is in the same lane and less than 200px behind CarObjB.
	 - do this by comparing the two cars' milesAmount properties
	 - if these requirements are met then return CarObjB. Otherwise return false.
	*/
   if (
      CarObjB.xCoord === CarObjA.xCoord &&
      CarObjB.milesAmount > CarObjA.milesAmount &&
      abs(CarObjB.milesAmount - CarObjA.milesAmount) < 200
   ) {
      return CarObjB;
   }
   return false;
}

//////////////DO NOT CHANGE CODE BELOW THIS LINE//////////////////

var chaseVehicle;

var roadWidth;
var roadLeftEdge;
var LanePosA;
var LanePosB;
var carImages = {};

var VehicleData = [
   {
      xCoord: 500,
      yCoord: 0,
      milesAmount: -200,
      vehicleVariety: 'redCar',
      numberPlate: 'GZGB1W',
      accelValue: 2,
      exhaust: [],
   },
   {
      xCoord: 300,
      yCoord: 0,
      milesAmount: 200,
      vehicleVariety: 'redCar',
      numberPlate: '0UTVEN',
      accelValue: 2,
      exhaust: [],
   },
   {
      xCoord: 500,
      yCoord: 0,
      milesAmount: 600,
      vehicleVariety: 'whiteCar',
      numberPlate: 'SN8RV2',
      accelValue: 2,
      exhaust: [],
   },
   {
      xCoord: 500,
      yCoord: 0,
      milesAmount: 1000,
      vehicleVariety: 'redCar',
      numberPlate: '0I1A78',
      accelValue: 2,
      exhaust: [],
   },
   {
      xCoord: 300,
      yCoord: 0,
      milesAmount: 1400,
      vehicleVariety: 'greenCar',
      numberPlate: 'IUW7KJ',
      accelValue: 2,
      exhaust: [],
   },
   {
      xCoord: 500,
      yCoord: 0,
      milesAmount: 1800,
      vehicleVariety: 'redCar',
      numberPlate: 'VSQ46T',
      accelValue: 2,
      exhaust: [],
   },
   {
      xCoord: 300,
      yCoord: 0,
      milesAmount: 2200,
      vehicleVariety: 'redCar',
      numberPlate: 'T9EE5L',
      accelValue: 2,
      exhaust: [],
   },
   {
      xCoord: 500,
      yCoord: 0,
      milesAmount: 2600,
      vehicleVariety: 'whiteCar',
      numberPlate: 'DGDVU1',
      accelValue: 2,
      exhaust: [],
   },
   {
      xCoord: 500,
      yCoord: 0,
      milesAmount: 3000,
      vehicleVariety: 'redCar',
      numberPlate: '3L1X7I',
      accelValue: 2,
      exhaust: [],
   },
   {
      xCoord: 300,
      yCoord: 0,
      milesAmount: 3400,
      vehicleVariety: 'greenCar',
      numberPlate: 'KN8JVX',
      accelValue: 2,
      exhaust: [],
   },
   {
      xCoord: 300,
      yCoord: 0,
      milesAmount: 3800,
      vehicleVariety: 'greenCar',
      numberPlate: 'ROU1FN',
      accelValue: 2,
      exhaust: [],
   },
   {
      xCoord: 500,
      yCoord: 0,
      milesAmount: 4200,
      vehicleVariety: 'redCar',
      numberPlate: 'SFZ0JB',
      accelValue: 2,
      exhaust: [],
   },
   {
      xCoord: 500,
      yCoord: 0,
      milesAmount: 4600,
      vehicleVariety: 'greenCar',
      numberPlate: '6KLPZU',
      accelValue: 2,
      exhaust: [],
   },
   {
      xCoord: 500,
      yCoord: 0,
      milesAmount: 5000,
      vehicleVariety: 'whiteCar',
      numberPlate: 'AXE1RL',
      accelValue: 2,
      exhaust: [],
   },
   {
      xCoord: 500,
      yCoord: 0,
      milesAmount: 5400,
      vehicleVariety: 'greenCar',
      numberPlate: 'AX8NT0',
      accelValue: 2,
      exhaust: [],
   },
   {
      xCoord: 500,
      yCoord: 0,
      milesAmount: 5800,
      vehicleVariety: 'whiteCar',
      numberPlate: 'CK0TV2',
      accelValue: 2,
      exhaust: [],
   },
   {
      xCoord: 500,
      yCoord: 0,
      milesAmount: 6200,
      vehicleVariety: 'whiteCar',
      numberPlate: 'E4ERQC',
      accelValue: 2,
      exhaust: [],
   },
   {
      xCoord: 300,
      yCoord: 0,
      milesAmount: 6600,
      vehicleVariety: 'greenCar',
      numberPlate: 'NQW4V3',
      accelValue: 2,
      exhaust: [],
   },
   {
      xCoord: 300,
      yCoord: 0,
      milesAmount: 7000,
      vehicleVariety: 'greenCar',
      numberPlate: 'Z2GN60',
      accelValue: 2,
      exhaust: [],
   },
   {
      xCoord: 500,
      yCoord: 0,
      milesAmount: 7400,
      vehicleVariety: 'greenCar',
      numberPlate: 'VT106H',
      accelValue: 2,
      exhaust: [],
   },
];

function preload() {
   var carTypes = ['detective', 'redCar', 'greenCar', 'blueCar', 'whiteCar'];

   for (var i = 0; i < carTypes.length; i++) {
      carImages[carTypes[i]] = loadImage('cars/' + carTypes[i] + '.png');
   }
}

function setup() {
   createCanvas(800, 800);

   roadWidth = 400;
   roadLeftEdge = 200;
   LanePosA = 300;
   LanePosB = 500;

   chaseVehicle = {
      xCoord: roadLeftEdge + roadWidth / 4,
      yCoord: 550,
      milesAmount: 0,
      accelValue: 3,
      engineVibrateAmount: 0,
      vehicleVariety: 'detective',
      numberPlate: '5L3UTH',
      exhaust: [],
   };
}

function draw() {
   background(0);

   drawRoad();
   drawCars();

   ////////////////////// HANDLE DETECTIVE /////////////////////////

   Move_Vehicle();
   for (var i = 0; i < VehicleData.length; i++) {
      var b2b = CheckCar_Infront(chaseVehicle, VehicleData[i]);
      if (b2b) Change_Lanes(chaseVehicle);
   }

   //////////////////////HANDLE THE OTHER CARS//////////////////////

   for (var i = 0; i < VehicleData.length; i++) {
      VehicleData[i].milesAmount += VehicleData[i].accelValue;
      VehicleData[i].yCoord =
         chaseVehicle.yCoord -
         VehicleData[i].milesAmount +
         chaseVehicle.milesAmount;
   }
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
         i * 100 + (chaseVehicle.milesAmount % 100),
         roadLeftEdge + roadWidth / 2,
         i * 100 + 70 + (chaseVehicle.milesAmount % 100)
      );
   }
}

function drawCars() {
   //draw the detective car

   image;
   drawExhaust(chaseVehicle);
   image(
      carImages['detective'],
      chaseVehicle.xCoord -
         carImages['detective'].width / 2 +
         random(
            -chaseVehicle.engineVibrateAmount,
            chaseVehicle.engineVibrateAmount
         ),
      chaseVehicle.yCoord +
         random(
            -chaseVehicle.engineVibrateAmount,
            chaseVehicle.engineVibrateAmount
         )
   );

   //draw all other cars

   for (var i = 0; i < VehicleData.length; i++) {
      if (
         VehicleData[i].yCoord < height &&
         VehicleData[i].yCoord > -height / 2
      ) {
         image(
            carImages[VehicleData[i].vehicleVariety],
            VehicleData[i].xCoord -
               carImages[VehicleData[i].vehicleVariety].width / 2,
            VehicleData[i].yCoord
         );
         Cycle_Motor(VehicleData[i]);

         drawExhaust(VehicleData[i]);
      }
   }
}

function Cycle_Motor(car) {
   car.exhaust.push({
      size: 2,
      x: car.xCoord,
      y: car.yCoord + carImages[car.vehicleVariety].height,
   });

   for (var i = car.exhaust.length - 1; i >= 0; i--) {
      car.exhaust[i].y += max(0.75, car.accelValue / 3);
      if (car.vehicleVariety != 'detective')
         car.exhaust[i].y += chaseVehicle.accelValue - car.accelValue;
      car.exhaust[i].x += random(-1, 1);
      car.exhaust[i].size += 0.5;

      if (car.exhaust[i].y > height || car.exhaust[i].y < 0) {
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
