/*

Officer: 5031189
CaseNum: 303-2-95663756-5031189

Case 303 - The Case of the Crooked Attorney
Stage 3 - The Gates Bank

I’ve made an appointment for you at the Gates Bank to retrieve your safe deposit box from the vault.
Actually you will break into Torvalds’ one.

Crack the safe by doing the following:

	Whilst the mouse is moving:
	- Make ClassifiedLockerKey_0 equal to the value of mouseX
	- Use the 'max' function to prevent ClassifiedLockerKey_0 from falling below 4

	When any key is released:
	- Increment ClassifiedLockerKey_1 by 3
	- Use the 'constrain' function to prevent ClassifiedLockerKey_1 from falling below 3 and going above 11

	When the mouse button is pressed:
	- Make ClassifiedLockerKey_2 equal to the value of mouseX
	- Use the 'constrain' function to prevent ClassifiedLockerKey_2 from falling below 1 and going above 13

	When any key is pressed:
	- Increment ClassifiedLockerKey_3 by 1
	- Use the 'min' function to prevent ClassifiedLockerKey_3 from going above 9

	When the mouse button is released:
	- Make ClassifiedLockerKey_4 equal to the value of mouseY
	- Use the 'min' function to prevent ClassifiedLockerKey_4 from going above 78



This time you'll need to create the relevant event handlers yourself.

There are many possible ways of investigating this case, but you
should use ONLY the following commands:

	- The assignment operator aka. the equals sign !
	- mouseX, mouseY
	- Incrementing +=
	- Decrementing -=
	- min, max
	- constrain

*/

//declare the variables

var ClassifiedLockerKey_0;
var ClassifiedLockerKey_1;
var ClassifiedLockerKey_2;
var ClassifiedLockerKey_3;
var ClassifiedLockerKey_4;

function preload() {
   //IMAGES WILL BE LOADED HERE
}

function setup() {
   createCanvas(512, 512);

   //initialise the variables
   ClassifiedLockerKey_0 = 0;
   ClassifiedLockerKey_1 = 0;
   ClassifiedLockerKey_2 = 0;
   ClassifiedLockerKey_3 = 0;
   ClassifiedLockerKey_4 = 0;
}

///////////////////EVENT HANDLERS///////////////////
function mouseMoved() {
   ClassifiedLockerKey_0 = max(4, mouseX);
}

function keyReleased() {
   ClassifiedLockerKey_1 += 3;
   ClassifiedLockerKey_1 = constrain(ClassifiedLockerKey_1, 3, 11);
}

function mousePressed() {
   ClassifiedLockerKey_2 = mouseX;
   ClassifiedLockerKey_2 = constrain(ClassifiedLockerKey_2, 1, 13);
}

function keyPressed() {
   ClassifiedLockerKey_3 += 1;
   ClassifiedLockerKey_3 = min(ClassifiedLockerKey_3, 9);
}

function mouseReleased() {
   ClassifiedLockerKey_4 = mouseY;
   ClassifiedLockerKey_4 = min(ClassifiedLockerKey_4, 78);
}

//Create event handlers here to open the safe ...

///////////////DO NOT CHANGE CODE BELOW THIS POINT///////////////////

function draw() {
   //Draw the safe door
   background(70);
   noStroke();
   fill(29, 110, 6);
   rect(26, 26, width - 52, width - 52);

   //Draw the combination dials
   push();
   translate(120, 170);
   drawDial(140, ClassifiedLockerKey_0, 22);
   pop();

   push();
   translate(120, 380);
   drawDial(140, ClassifiedLockerKey_1, 15);
   pop();

   push();
   translate(280, 170);
   drawDial(140, ClassifiedLockerKey_2, 17);
   pop();

   push();
   translate(280, 380);
   drawDial(140, ClassifiedLockerKey_3, 13);
   pop();

   //Draw the lever
   push();
   translate(width - 125, 256);
   drawLever(ClassifiedLockerKey_4);
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
