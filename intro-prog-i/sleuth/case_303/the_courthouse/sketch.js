/*

Officer: 5031189
CaseNum: 303-3-57936231-5031189

Case 303 - The Case of the Crooked Attorney
Stage 4 - The Courthouse

Torvalds has his final safe in his courthouse chambers. Luckily there is a court case proceeding.
You can sneak into his chambers whilst he makes his closing statement.

Crack the safe by doing the following:

	When any key is pressed:
	- Use the 'random' function to produce random values ranging from 1 to 8.
	- Assign the output to SecureStorageCombination_A

	When the mouse button is released:
	- Use the 'map' function to scale mouseX to values ranging from 3 to 13.
	- Assign the output to SecureStorageCombination_B

	When any key is pressed:
	- Make SecureStorageCombination_C equal to the value of 'keyCode'

	When the mouse button is released:
	- Use the 'map' function to scale mouseX to values ranging from 11 to 78.
	- Assign the output to SecureStorageCombination_D

	Whilst the mouse is being dragged:
	- Use the 'map' function to scale mouseX to values ranging from 9 to 76.
	- Assign the output to SecureStorageCombination_E

	Whilst the mouse is moving:
	- Use the 'map' function to scale mouseX to values ranging from 9 to 80.
	- Assign the output to SecureStorageCombination_F



This time you'll need to create the relevant event handlers yourself.

There are many possible ways of investigating this case, but you
should use ONLY the following commands:

	- The assignment operator aka. the equals sign !
	- mouseX, mouseY
	- key, keyCode
	- random
	- map

*/

//declare the variables

var SecureStorageCombination_A;
var SecureStorageCombination_B;
var SecureStorageCombination_C;
var SecureStorageCombination_D;
var SecureStorageCombination_E;
var SecureStorageCombination_F;

function preload() {
   //IMAGES WILL BE LOADED HERE
}

function setup() {
   createCanvas(512, 512);

   //initialise the variables
   SecureStorageCombination_A = 0;
   SecureStorageCombination_B = '';
   SecureStorageCombination_C = '';
   SecureStorageCombination_D = 0;
   SecureStorageCombination_E = 0;
   SecureStorageCombination_F = 0;
}

///////////////////EVENT HANDLERS///////////////////

//Create event handlers here to open the safe ...
function keyPressed() {
   SecureStorageCombination_A = random(1, 8);
   SecureStorageCombination_C = keyCode;
}

function mouseReleased() {
   SecureStorageCombination_B = map(mouseX, 0, width, 3, 13);
   SecureStorageCombination_D = map(mouseX, 0, width, 11, 78);
}

function mouseDragged() {
   SecureStorageCombination_E = map(mouseX, 0, width, 9, 76);
}

function mouseMoved() {
   SecureStorageCombination_F = map(mouseX, 0, width, 9, 80);
}

///////////////DO NOT CHANGE CODE BELOW THIS POINT///////////////////

function draw() {
   //Draw the safe door
   background(70);
   noStroke();
   fill(29, 110, 6);
   rect(26, 26, width - 52, width - 52);

   //Draw the combination dial
   push();
   translate(256, 180);
   drawDial(170, SecureStorageCombination_A, 20);
   pop();

   //Draw the spinners
   push();
   translate(206, 280);
   drawSpinner(3, SecureStorageCombination_B);
   pop();

   push();
   translate(306, 280);
   drawSpinner(3, SecureStorageCombination_C);
   pop();

   //Draw the levers
   push();
   translate(125, 356);
   drawLever(SecureStorageCombination_D);
   pop();

   push();
   translate(250, 356);
   drawLever(SecureStorageCombination_E);
   pop();

   push();
   translate(375, 356);
   drawLever(SecureStorageCombination_F);
   pop();
}

function drawDial(diameter, num, maxNum) {
   //the combination lock

   var r = diameter * 0.5;
   var p = r * 0.6;

   stroke(0);
   fill(255, 255, 200);
   ellipse(0, 0, diameter, diameter);
   fill(100);
   noStroke();
   ellipse(0, 0, diameter * 0.66, diameter * 0.66);
   fill(150, 0, 0);
   triangle(-p * 0.4, -r - p, p * 0.4, -r - p, 0, -r - p / 5);

   noStroke();

   push();
   var inc = 360 / maxNum;

   rotate(radians(-num * inc));
   for (var i = 0; i < maxNum; i++) {
      push();
      rotate(radians(i * inc));
      stroke(0);
      line(0, -r * 0.66, 0, -(r - 10));
      noStroke();
      fill(0);
      text(i, 0, -(r - 10));
      pop();
   }

   pop();
}

function drawLever(rot) {
   push();
   rotate(radians(-rot));
   stroke(0);
   fill(100);
   rect(-10, 0, 20, 100);
   ellipse(0, 0, 50, 50);
   ellipse(0, 100, 35, 35);
   pop();
}

function drawSpinner(numSpinners, val) {
   var sw = 20;
   var ow = (sw + 5) * numSpinners + 5;
   stroke(0);
   fill(100);
   rect(-ow / 2, 0, ow, 35);
   if (typeof val == 'number') {
      val = floor(val).toString(); //convert to string
   }
   var d = numSpinners - val.length;

   for (var d = numSpinners - val.length; d > 0; d--) {
      val = '-' + val;
   }

   for (var i = 0; i < numSpinners; i++) {
      stroke(0);
      fill(255, 255, 200);
      rect(-ow / 2 + i * (sw + 5) + 5, 5, 20, 25);
      fill(0);
      noStroke();
      text(val[i], -ow / 2 + sw / 2 + i * (sw + 5), 25);
   }
}
