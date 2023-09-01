/*

Officer: 5031189
CaseNum: 702-2-66262591-5031189

Case 702 - The case of Vanishing Vannevar
Stage 3 - Where's Vannevar

“All units: Vannevar’s car has been sighted. It is a blue car with a Number_Plate of 96MC85. Approach with
caution.” This is your big chance kid. Don’t blow it. Complete the helper functions below to
drive through the traffic and locate Vannevar.

There are many possible ways of completing this task,
but you should ONLY use the following commands and techniques:

	- Incrementing and assiging variables
	- Maths function such as random, min, abs, and constrain
	- Conditional statements
	- Traversing arrays with for loops
	- calling functions and returning values

HINT: make sure you take a look at the initialisation of Detective_Car and the cars in
carObject_data to understand their properties.

*/

///////////////////////// HELPER FUNCTIONS /////////////////////

function move_car() {
   /*
	This function should do the following: 
	 - increment Detective_Car's Miles_Travelled property by its Speed_Val property 
	 - add a random amount between -0.07 and 0.07 to Detective_Car's Rumble_Val property
	 - use the constrain function to constrain Detective_Car's Rumble_Val property to values between 0.06 and 0.99
	 - call the run_car_engine function passing Detective_Car as an argument
	*/
   Detective_Car.Miles_Travelled += Detective_Car.Speed_Val;
   Detective_Car.Rumble_Val += random(-0.07, 0.07);
   Detective_Car.Rumble_Val = constrain(Detective_Car.Rumble_Val, 0.06, 0.99);
   run_car_engine(Detective_Car);
}

function switch_lanes(target_vehicle) {
   /*
	This function should do the following: 
	 - move target_vehicle from one lane to the other.
	 - do the move in a single step without any extra animation.
	 - use LaneCoordinate_a and LaneCoordinate_b to effect the change.
	 hint: You will need to modify the X_Pos property of target_vehicle.
	*/
   target_vehicle.X_Pos === LaneCoordinate_a
      ? (target_vehicle.X_Pos = LaneCoordinate_b)
      : (target_vehicle.X_Pos = LaneCoordinate_a);
}

function check_infront(targetVehicle_a, targetVehicle_b) {
   /*
	This function should do the following: 
	 - determine if targetVehicle_a is in the same lane and less than 200px behind targetVehicle_b.
	 - do this by comparing the two cars' Miles_Travelled properties
	 - if these requirements are met then return the Number_Plate property for targetVehicle_b. Otherwise return false.
	*/
   if (
      targetVehicle_a.X_Pos === targetVehicle_b.X_Pos &&
      abs(targetVehicle_a.Miles_Travelled - targetVehicle_b.Miles_Travelled) <
         200 &&
      targetVehicle_a.Miles_Travelled < targetVehicle_b.Miles_Travelled
   ) {
      return targetVehicle_b.Number_Plate;
   }

   return false;
}

function car_bySide(car) {
   /*
	This function should do the following: 
	 - traverse carObject_data and determine if any of the cars are parallel with car.
	 - if a car is found to be parallel to car then return the index of that car object.
	 - cars are considered parallel if the absolute difference between their Miles_Travelled properties is less than 25 px and they have non-matching X_Pos properties	*/
   for (let i = 0; i < carObject_data.length; i++) {
      const vehicle = carObject_data[i];
      if (
         abs(car.Miles_Travelled - vehicle.Miles_Travelled) < 25 &&
         car.X_Pos !== vehicle.X_Pos
      ) {
         return i;
      }
   }
}

function spot_assailant() {
   /*
	This function should do the following: 
	 - Check cars passing parallel to Detective_Car to see if they match the Number_Plate property in the assailant description.
	 - it does this by calling car_bySide.
	 - if a positive result is returned then the Number_Plate property of the found car is then checked against the assailant description.
	 - if a match is found then the car in question is assigned to the global variable assailant.
	*/
   const index = car_bySide(Detective_Car);
   if (index) {
      if (carObject_data[index].Number_Plate === '96MC85') {
         assailant = carObject_data[index];
      }
   }
}

//////////////DO NOT CHANGE CODE BELOW THIS LINE//////////////////

var Detective_Car;

var roadWidth;
var roadLeftEdge;
var LaneCoordinate_a;
var LaneCoordinate_b;
var carImages = {};
var assailant;

var carObject_data = [
   {
      X_Pos: 300,
      Y_Pos: 0,
      Miles_Travelled: -200,
      Car_Variety: 'greenCar',
      Number_Plate: 'CMQH0P',
      Speed_Val: 2,
      exhaust: [],
   },
   {
      X_Pos: 500,
      Y_Pos: 0,
      Miles_Travelled: 200,
      Car_Variety: 'redCar',
      Number_Plate: '6BC5VE',
      Speed_Val: 2,
      exhaust: [],
   },
   {
      X_Pos: 500,
      Y_Pos: 0,
      Miles_Travelled: 600,
      Car_Variety: 'whiteCar',
      Number_Plate: 'TEE9SK',
      Speed_Val: 2,
      exhaust: [],
   },
   {
      X_Pos: 300,
      Y_Pos: 0,
      Miles_Travelled: 1000,
      Car_Variety: 'blueCar',
      Number_Plate: '8ORCSK',
      Speed_Val: 2,
      exhaust: [],
   },
   {
      X_Pos: 500,
      Y_Pos: 0,
      Miles_Travelled: 1400,
      Car_Variety: 'blueCar',
      Number_Plate: 'M8GKVL',
      Speed_Val: 2,
      exhaust: [],
   },
   {
      X_Pos: 500,
      Y_Pos: 0,
      Miles_Travelled: 1800,
      Car_Variety: 'redCar',
      Number_Plate: 'OVE8TD',
      Speed_Val: 2,
      exhaust: [],
   },
   {
      X_Pos: 500,
      Y_Pos: 0,
      Miles_Travelled: 2200,
      Car_Variety: 'redCar',
      Number_Plate: 'X6DOY7',
      Speed_Val: 2,
      exhaust: [],
   },
   {
      X_Pos: 300,
      Y_Pos: 0,
      Miles_Travelled: 2600,
      Car_Variety: 'greenCar',
      Number_Plate: 'AICMGA',
      Speed_Val: 2,
      exhaust: [],
   },
   {
      X_Pos: 500,
      Y_Pos: 0,
      Miles_Travelled: 3000,
      Car_Variety: 'redCar',
      Number_Plate: 'I2NY71',
      Speed_Val: 2,
      exhaust: [],
   },
   {
      X_Pos: 500,
      Y_Pos: 0,
      Miles_Travelled: 3400,
      Car_Variety: 'whiteCar',
      Number_Plate: '0PRK1O',
      Speed_Val: 2,
      exhaust: [],
   },
   {
      X_Pos: 500,
      Y_Pos: 0,
      Miles_Travelled: 3800,
      Car_Variety: 'blueCar',
      Number_Plate: '96MC85',
      Speed_Val: 2,
      exhaust: [],
   },
   {
      X_Pos: 500,
      Y_Pos: 0,
      Miles_Travelled: 4200,
      Car_Variety: 'greenCar',
      Number_Plate: 'LEVCB1',
      Speed_Val: 2,
      exhaust: [],
   },
   {
      X_Pos: 300,
      Y_Pos: 0,
      Miles_Travelled: 4600,
      Car_Variety: 'redCar',
      Number_Plate: '6LWMLI',
      Speed_Val: 2,
      exhaust: [],
   },
   {
      X_Pos: 300,
      Y_Pos: 0,
      Miles_Travelled: 5000,
      Car_Variety: 'whiteCar',
      Number_Plate: 'AKQMFP',
      Speed_Val: 2,
      exhaust: [],
   },
   {
      X_Pos: 300,
      Y_Pos: 0,
      Miles_Travelled: 5400,
      Car_Variety: 'whiteCar',
      Number_Plate: '7GE9NI',
      Speed_Val: 2,
      exhaust: [],
   },
   {
      X_Pos: 300,
      Y_Pos: 0,
      Miles_Travelled: 5800,
      Car_Variety: 'redCar',
      Number_Plate: 'THBOOM',
      Speed_Val: 2,
      exhaust: [],
   },
   {
      X_Pos: 500,
      Y_Pos: 0,
      Miles_Travelled: 6200,
      Car_Variety: 'whiteCar',
      Number_Plate: 'R0AFA8',
      Speed_Val: 2,
      exhaust: [],
   },
   {
      X_Pos: 500,
      Y_Pos: 0,
      Miles_Travelled: 6600,
      Car_Variety: 'redCar',
      Number_Plate: '6PLNQV',
      Speed_Val: 2,
      exhaust: [],
   },
   {
      X_Pos: 300,
      Y_Pos: 0,
      Miles_Travelled: 7000,
      Car_Variety: 'greenCar',
      Number_Plate: 'G4NU1Q',
      Speed_Val: 2,
      exhaust: [],
   },
   {
      X_Pos: 300,
      Y_Pos: 0,
      Miles_Travelled: 7400,
      Car_Variety: 'whiteCar',
      Number_Plate: '1AXHZP',
      Speed_Val: 2,
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
   textSize(30);
   textAlign(CENTER);

   roadWidth = 400;
   roadLeftEdge = 200;
   LaneCoordinate_a = 300;
   LaneCoordinate_b = 500;

   Detective_Car = {
      X_Pos: roadLeftEdge + roadWidth / 4,
      Y_Pos: 550,
      Miles_Travelled: 0,
      Speed_Val: 3,
      Rumble_Val: 0,
      Car_Variety: 'detective',
      Number_Plate: '5L3UTH',
      exhaust: [],
   };
}

function draw() {
   background(0);

   drawRoad();
   drawCars();

   if (assailant) {
      fill(255);

      text('assailant found !', width / 2, height / 2);
      return;
   }

   ////////////////////// HANDLE DETECTIVE /////////////////////////

   move_car();
   for (var i = 0; i < carObject_data.length; i++) {
      var b2b = check_infront(Detective_Car, carObject_data[i]);
      if (b2b) switch_lanes(Detective_Car);
   }
   spot_assailant();

   //////////////////////HANDLE THE OTHER CARS//////////////////////

   for (var i = 0; i < carObject_data.length; i++) {
      carObject_data[i].Miles_Travelled += carObject_data[i].Speed_Val;
      carObject_data[i].Y_Pos =
         Detective_Car.Y_Pos -
         carObject_data[i].Miles_Travelled +
         Detective_Car.Miles_Travelled;
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
         i * 100 + (Detective_Car.Miles_Travelled % 100),
         roadLeftEdge + roadWidth / 2,
         i * 100 + 70 + (Detective_Car.Miles_Travelled % 100)
      );
   }
}

function drawCars() {
   //draw the detective car

   image;
   drawExhaust(Detective_Car);
   image(
      carImages['detective'],
      Detective_Car.X_Pos -
         carImages['detective'].width / 2 +
         random(-Detective_Car.Rumble_Val, Detective_Car.Rumble_Val),
      Detective_Car.Y_Pos +
         random(-Detective_Car.Rumble_Val, Detective_Car.Rumble_Val)
   );

   //draw all other cars

   for (var i = 0; i < carObject_data.length; i++) {
      if (
         carObject_data[i].Y_Pos < height &&
         carObject_data[i].Y_Pos > -height / 2
      ) {
         image(
            carImages[carObject_data[i].Car_Variety],
            carObject_data[i].X_Pos -
               carImages[carObject_data[i].Car_Variety].width / 2,
            carObject_data[i].Y_Pos
         );
         run_car_engine(carObject_data[i]);

         drawExhaust(carObject_data[i]);
      }
   }
}

function run_car_engine(car) {
   car.exhaust.push({
      size: 2,
      x: car.X_Pos,
      y: car.Y_Pos + carImages[car.Car_Variety].height,
   });

   for (var i = car.exhaust.length - 1; i >= 0; i--) {
      car.exhaust[i].y += max(0.75, car.Speed_Val / 3);
      if (car.Car_Variety != 'detective')
         car.exhaust[i].y += Detective_Car.Speed_Val - car.Speed_Val;
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
