/*

Officer: 5031189
CaseNum: 702-3-14424764-5031189

Case 702 - The case of Vanishing Vannevar
Stage 4 - High speed chase

“All units: Vannevar is on the run. They are driving a blue car with a LicencePlate of KDW195.  Pursue at speed.
I repeat pursue at speed.” Okay Vannevar’s game is nearly up. Go get him kid.
Complete the helper functions below to locate, chase and arrest Vannevar.

There are many possible ways of completing this task,
but you should ONLY use the following commands and techniques:

	- Incrementing and assiging variables
	- Maths function such as random, min, abs, and constrain
	- Conditional statements
	- Traversing arrays with for loops
	- calling functions and returning values

HINT: make sure you take a look at the initialisation of SleuthCar and the cars in
vehicleObjects_data to understand their properties.

*/

///////////////////////// HELPER FUNCTIONS /////////////////////

function Move_Car() {
   /*
	This function should do the following: 
	 - increment SleuthCar's DistTravelled property by its GasVal property 
	 - add a random amount between -0.04 and 0.04 to SleuthCar's VibrateValue property
	 - use the constrain function to constrain SleuthCar's VibrateValue property to values between 0.06 and 0.81
	 - call the Run_Engine function passing SleuthCar as an argument
	*/
   SleuthCar.DistTravelled += SleuthCar.GasVal;
   SleuthCar.VibrateValue += random(-0.04, 0.04);
   SleuthCar.VibrateValue = constrain(SleuthCar.VibrateValue, 0.06, 0.81);
   Run_Engine(SleuthCar);
}

function Swap_Lanes(targetCar) {
   /*
	This function should do the following: 
	 - move targetCar from one lane to the other.
	 - do the move in a single step without any extra animation.
	 - use Lane_Position_a and Lane_Position_b to effect the change.
	 - finally you should return targetCar at the end of the function.
	 hint: You will need to modify the PosX property of targetCar.
	*/
   targetCar.PosX === Lane_Position_a
      ? (targetCar.PosX = Lane_Position_b)
      : (targetCar.PosX = Lane_Position_a);

   return targetCar;
}

function Search_IsAhead(targetVehicle_a, targetVehicle_b) {
   /*
	This function should do the following: 
	 - determine if targetVehicle_a is in the same lane and less than 200px behind targetVehicle_b.
	 - do this by comparing the two cars' DistTravelled properties
	 - if these requirements are met then return true. Otherwise return false.
	*/
   return (
      targetVehicle_a.PosX === targetVehicle_b.PosX &&
      abs(targetVehicle_a.DistTravelled - targetVehicle_b.DistTravelled) <
         200 &&
      targetVehicle_a.DistTravelled < targetVehicle_b.DistTravelled
   );
}

function Vehicle_IsAtSide(target_car_a, target_car_b) {
   /*
	This function should do the following: 
	 - determine if target_car_a is parallel with target_car_b.
	 - if target_car_a is found to be parallel to target_car_b then return target_car_b.
	 - cars are considered parallel if the absolute difference between their DistTravelled properties is less than 25 px and they have non-matching PosX properties	*/
   if (
      abs(target_car_a.DistTravelled - target_car_b.DistTravelled) < 25 &&
      target_car_a.PosX !== target_car_b.PosX
   ) {
      return target_car_b;
   }
}

function Detect_Suspect() {
   /*
	This function should do the following: 
	 - Check cars passing parallel to SleuthCar to see if they match the LicencePlate property in the suspect description.
	 - it does this by traversing vehicleObjects_data and calling Vehicle_IsAtSide for each car
.	 - if a positive result is returned then the LicencePlate property of the found car is then checked against the suspect description.
	 - if a match is found then the car in question is assigned to the global variable suspect.
	*/
   for (let i = 0; i < vehicleObjects_data.length; i++) {
      const vehicle = vehicleObjects_data[i];
      const car = Vehicle_IsAtSide(SleuthCar, vehicle);
      if (car) {
         if (car.LicencePlate === 'KDW195') {
            suspect = car;
         }
      }
   }
}

function Tail_Suspect() {
   /*
	This function should do the following: 
	 - only operate if the PursuingSuspect property of SleuthCar is true and the global variable suspect is assigned to an object.
	 - scale the GasVal property of SleuthCar by a factor of 1.001.
	 - use the min function to make sure that SleuthCar's GasVal property does not exceed 6.
	 - it should traverse vehicleObjects_data calling Search_IsAhead for each car to detect any cars in front of SleuthCar.
	 - if a positive result is returned it should check to see if the LicencePlate property of that car matches that of suspect.
	 - for a match, Arrest_Suspect should be called, otherwise call Swap_Lanes.
	*/
   if (SleuthCar.PursuingSuspect && suspect) {
      SleuthCar.GasVal *= 1.001;
      SleuthCar.GasVal = min([SleuthCar.GasVal, 6]);

      for (let i = 0; i < vehicleObjects_data.length; i++) {
         const vehicle = vehicleObjects_data[i];
         const result = Search_IsAhead(SleuthCar, vehicle);
         if (result) {
            if (vehicle.LicencePlate === 'KDW195') {
               Arrest_Suspect();
            } else {
               Swap_Lanes(SleuthCar);
            }
         }
      }
   }
}

function Arrest_Suspect() {
   /*
	This function should do the following: 
	 - set the apprehended property of suspect to true.
	 - set the ArrestingSuspect property of SleuthCar to true.
	 - set the GasVal properties of both vehicles to zero.
	*/
   suspect.apprehended = true;
   SleuthCar.ArrestingSuspect = true;
   SleuthCar.GasVal = 0;
   suspect.GasVal = 0;
}

//////////////DO NOT CHANGE CODE BELOW THIS LINE//////////////////

var SleuthCar;

var roadWidth;
var roadLeftEdge;
var Lane_Position_a;
var Lane_Position_b;
var carImages = {};
var suspect;

var vehicleObjects_data = [
   {
      PosX: 500,
      PosY: 0,
      DistTravelled: -200,
      VehicleModel: 'whiteCar',
      LicencePlate: 'WWSRZQ',
      GasVal: 2,
      exhaust: [],
   },
   {
      PosX: 300,
      PosY: 0,
      DistTravelled: 200,
      VehicleModel: 'greenCar',
      LicencePlate: 'AO0DHM',
      GasVal: 2,
      exhaust: [],
   },
   {
      PosX: 300,
      PosY: 0,
      DistTravelled: 600,
      VehicleModel: 'redCar',
      LicencePlate: 'XGSND8',
      GasVal: 2,
      exhaust: [],
   },
   {
      PosX: 500,
      PosY: 0,
      DistTravelled: 1000,
      VehicleModel: 'redCar',
      LicencePlate: '1VM080',
      GasVal: 2,
      exhaust: [],
   },
   {
      PosX: 300,
      PosY: 0,
      DistTravelled: 1400,
      VehicleModel: 'redCar',
      LicencePlate: '51TAU9',
      GasVal: 2,
      exhaust: [],
   },
   {
      PosX: 300,
      PosY: 0,
      DistTravelled: 1800,
      VehicleModel: 'redCar',
      LicencePlate: '7PAW7G',
      GasVal: 2,
      exhaust: [],
   },
   {
      PosX: 300,
      PosY: 0,
      DistTravelled: 2200,
      VehicleModel: 'blueCar',
      LicencePlate: 'GTM63T',
      GasVal: 2,
      exhaust: [],
   },
   {
      PosX: 300,
      PosY: 0,
      DistTravelled: 2600,
      VehicleModel: 'greenCar',
      LicencePlate: 'ZPJ7VN',
      GasVal: 2,
      exhaust: [],
   },
   {
      PosX: 500,
      PosY: 0,
      DistTravelled: 3000,
      VehicleModel: 'blueCar',
      LicencePlate: 'BFCS30',
      GasVal: 2,
      exhaust: [],
   },
   {
      PosX: 300,
      PosY: 0,
      DistTravelled: 3400,
      VehicleModel: 'blueCar',
      LicencePlate: 'KDW195',
      GasVal: 2,
      exhaust: [],
   },
   {
      PosX: 500,
      PosY: 0,
      DistTravelled: 3800,
      VehicleModel: 'redCar',
      LicencePlate: '2X21L2',
      GasVal: 2,
      exhaust: [],
   },
   {
      PosX: 500,
      PosY: 0,
      DistTravelled: 4200,
      VehicleModel: 'redCar',
      LicencePlate: 'P8KTHO',
      GasVal: 2,
      exhaust: [],
   },
   {
      PosX: 500,
      PosY: 0,
      DistTravelled: 4600,
      VehicleModel: 'redCar',
      LicencePlate: 'F2ODYA',
      GasVal: 2,
      exhaust: [],
   },
   {
      PosX: 300,
      PosY: 0,
      DistTravelled: 5000,
      VehicleModel: 'greenCar',
      LicencePlate: 'MSWAS7',
      GasVal: 2,
      exhaust: [],
   },
   {
      PosX: 500,
      PosY: 0,
      DistTravelled: 5400,
      VehicleModel: 'blueCar',
      LicencePlate: 'INN4LO',
      GasVal: 2,
      exhaust: [],
   },
   {
      PosX: 500,
      PosY: 0,
      DistTravelled: 5800,
      VehicleModel: 'redCar',
      LicencePlate: 'SLY775',
      GasVal: 2,
      exhaust: [],
   },
   {
      PosX: 300,
      PosY: 0,
      DistTravelled: 6200,
      VehicleModel: 'whiteCar',
      LicencePlate: '8WOKF6',
      GasVal: 2,
      exhaust: [],
   },
   {
      PosX: 300,
      PosY: 0,
      DistTravelled: 6600,
      VehicleModel: 'blueCar',
      LicencePlate: 'L4MXGG',
      GasVal: 2,
      exhaust: [],
   },
   {
      PosX: 300,
      PosY: 0,
      DistTravelled: 7000,
      VehicleModel: 'whiteCar',
      LicencePlate: '8TZBUM',
      GasVal: 2,
      exhaust: [],
   },
   {
      PosX: 300,
      PosY: 0,
      DistTravelled: 7400,
      VehicleModel: 'blueCar',
      LicencePlate: '8POJ6B',
      GasVal: 2,
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
   Lane_Position_a = 300;
   Lane_Position_b = 500;

   SleuthCar = {
      PosX: roadLeftEdge + roadWidth / 4,
      PosY: 550,
      DistTravelled: 0,
      GasVal: 3,
      VibrateValue: 0,
      VehicleModel: 'detective',
      LicencePlate: '5L3UTH',
      ArrestingSuspect: false,
      PursuingSuspect: false,
      exhaust: [],
   };
}

function draw() {
   background(0);

   drawRoad();
   drawCars();

   if (suspect) {
      if (suspect.apprehended) {
         fill(255);

         text('suspect apprehended!', width / 2, height / 2);
      }
   }

   ////////////////////// HANDLE DETECTIVE /////////////////////////

   if (!SleuthCar.PursuingSuspect && !SleuthCar.ArrestingSuspect) {
      Move_Car();
      for (var i = 0; i < vehicleObjects_data.length; i++) {
         var b2b = Search_IsAhead(SleuthCar, vehicleObjects_data[i]);
         if (b2b) Swap_Lanes(SleuthCar);
      }
      Detect_Suspect();
      if (suspect) SleuthCar.PursuingSuspect = true;
   } else if (!SleuthCar.ArrestingSuspect) {
      Tail_Suspect();
      Move_Car();
   }

   ////////////////////// HANDLE ASSAILANT /////////////////////////

   if (suspect) {
      if (!suspect.apprehended) {
         suspect.GasVal = 5;
         for (var i = 0; i < vehicleObjects_data.length; i++) {
            var b2b = Search_IsAhead(suspect, vehicleObjects_data[i]);
            if (b2b) {
               if (b2b.LicencePlate != suspect.LicencePlate) {
                  Swap_Lanes(suspect);
               }
            }
         }
      }
   }

   //////////////////////HANDLE THE OTHER CARS//////////////////////

   for (var i = 0; i < vehicleObjects_data.length; i++) {
      vehicleObjects_data[i].DistTravelled += vehicleObjects_data[i].GasVal;
      vehicleObjects_data[i].PosY =
         SleuthCar.PosY -
         vehicleObjects_data[i].DistTravelled +
         SleuthCar.DistTravelled;

      if (suspect) {
         if (suspect.apprehended) {
            if (vehicleObjects_data[i].PosX == SleuthCar.PosX) {
               if (
                  vehicleObjects_data[i].DistTravelled < SleuthCar.DistTravelled
               ) {
                  if (
                     vehicleObjects_data[i].DistTravelled -
                        SleuthCar.DistTravelled <
                     200
                  ) {
                     Swap_Lanes(vehicleObjects_data[i]);
                  }
               }
            }
         }
      }
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
         i * 100 + (SleuthCar.DistTravelled % 100),
         roadLeftEdge + roadWidth / 2,
         i * 100 + 70 + (SleuthCar.DistTravelled % 100)
      );
   }
}

function drawCars() {
   //draw the detective car

   drawExhaust(SleuthCar);
   image(
      carImages['detective'],
      SleuthCar.PosX -
         carImages['detective'].width / 2 +
         random(-SleuthCar.VibrateValue, SleuthCar.VibrateValue),
      SleuthCar.PosY + random(-SleuthCar.VibrateValue, SleuthCar.VibrateValue)
   );

   //draw all other cars

   for (var i = 0; i < vehicleObjects_data.length; i++) {
      if (
         vehicleObjects_data[i].PosY < height &&
         vehicleObjects_data[i].PosY > -height / 2
      ) {
         image(
            carImages[vehicleObjects_data[i].VehicleModel],
            vehicleObjects_data[i].PosX -
               carImages[vehicleObjects_data[i].VehicleModel].width / 2,
            vehicleObjects_data[i].PosY
         );
         Run_Engine(vehicleObjects_data[i]);

         drawExhaust(vehicleObjects_data[i]);
      }
   }
}

function Run_Engine(car) {
   car.exhaust.push({
      size: 2,
      x: car.PosX,
      y: car.PosY + carImages[car.VehicleModel].height,
   });

   for (var i = car.exhaust.length - 1; i >= 0; i--) {
      car.exhaust[i].y += max(0.75, car.GasVal / 3);
      if (car.VehicleModel != 'detective')
         car.exhaust[i].y += SleuthCar.GasVal - car.GasVal;
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
