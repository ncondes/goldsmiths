/*
The case of the Python Syndicate
Stage 2


Officer: 5031189
CaseNum: 301-1-47880993-5031189

- Word on the street is that there is a new gang in town - The Python Syndicate.
It seems my bones were correct on this one. I need you to organise the gang
around the suspected leader Anna Karpinski

- The variables for Anna Karpinski have been declared and initialised.
- This time you are NOT allowed to create any new variables.
- Instead you must position each mug shot relative to Anna Karpinski
- To do this you will need to control the positions of the mugshots by adding/subtracting hard-coded values to the appropriate Anna Karpinski variable for each parameter.
- If you've got it right all six images should appear in exactly the same positions as they do now.

REMEMBER:
- Do not create any new variables
- Do not change the values of the variables for Anna Karpinski 
- Do not add any additional commands

*/

var photoBoard;
var bonesKarpinskiImg;
var adaLovelaceImg;
var annaKarpinskiImg;
var cecilKarpinskiImg;
var robbieKrayImg;
var rockyKrayImg;

var annaKarpinskiXCoordinate = 701;
var annaKarpinskiYCoordinate = 40;

function preload() {
   photoBoard = loadImage('photoBoard.png');
   bonesKarpinskiImg = loadImage('karpinskiDog.png');
   adaLovelaceImg = loadImage('ada.png');
   annaKarpinskiImg = loadImage('karpinskiWoman.png');
   cecilKarpinskiImg = loadImage('karpinskiBros1.png');
   robbieKrayImg = loadImage('krayBrothers2.png');
   rockyKrayImg = loadImage('krayBrothers1.png');
}

function setup() {
   createCanvas(photoBoard.width, photoBoard.height);
}

function draw() {
   image(photoBoard, 0, 0);

   //And update these image commands with your x and y coordinates.
   image(annaKarpinskiImg, annaKarpinskiXCoordinate, annaKarpinskiYCoordinate);

   image(
      bonesKarpinskiImg,
      annaKarpinskiXCoordinate - (701 - 115),
      annaKarpinskiYCoordinate
   );
   image(
      adaLovelaceImg,
      annaKarpinskiXCoordinate - (701 - 408),
      annaKarpinskiYCoordinate
   );
   image(
      cecilKarpinskiImg,
      annaKarpinskiXCoordinate - (701 - 115),
      annaKarpinskiYCoordinate + (309 - 40)
   );
   image(
      robbieKrayImg,
      annaKarpinskiXCoordinate - (701 - 408),
      annaKarpinskiYCoordinate + (309 - 40)
   );
   image(
      rockyKrayImg,
      annaKarpinskiXCoordinate,
      annaKarpinskiYCoordinate + (309 - 40)
   );
}
