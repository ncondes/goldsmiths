/*
The case of the Python Syndicate
Stage 1

Officer: 5031189
CaseNum: 301-0-23244499-5031189

I gotta give it to you kid, you’ve made an excellent start, but now it’s time
to take things up a level. For some time I’ve suspected that there’s something
big going down in Console City.

These cases that we’ve been working are all connected somehow. I need to use
that considerable brain of yours to work it all out. Let’s start by laying out
who we know.

Place each mugshot in its designated position by doing the following:

- Create a new variable for the X and Y coordinates of each mugshot.
    - One has already been done for you.
    - Make sure you use the same style and format for the variable name.
- Initialise the variables with the correct values. HINT: you should be able to derive these from the image commands below.
- Finally modify the each image command replacing the hard-coded values with your variables. 
- If you've got it right all six images should appear in exactly the same positions as they do now.

*/

var photoBoard;
var bonesKarpinskiImage;
var adaLovelaceImage;
var annaKarpinskiImage;
var pawelKarpinskiImage;
var rockyKrayImage;
var cecilKarpinskiImage;

//declare your new variables below
var annaKarpinskiXLocation = 701;
var annaKarpinskiYLocation = 40;

var bonesKarpinskiXLocation = 115;
var bonesKarpinskiYLocation = 40;

var adaLovelaceXLocation = 408;
var adaLovelaceYLocation = 40;

var pawelKarpinskiXLocation = 115;
var pawelKarpinskiYLocation = 309;

var rockyKrayXLocation = 408;
var rockyKrayYLocation = 309;

var cecilKarpinskiXLocation = 701;
var cecilKarpinskiYLocation = 309;

function preload() {
   photoBoard = loadImage('photoBoard.png');
   bonesKarpinskiImage = loadImage('karpinskiDog.png');
   adaLovelaceImage = loadImage('ada.png');
   annaKarpinskiImage = loadImage('karpinskiWoman.png');
   pawelKarpinskiImage = loadImage('karpinskiBros2.png');
   rockyKrayImage = loadImage('krayBrothers1.png');
   cecilKarpinskiImage = loadImage('karpinskiBros1.png');
}

function setup() {
   createCanvas(photoBoard.width, photoBoard.height);
}

function draw() {
   image(photoBoard, 0, 0);

   //And update these image commands with your x and y coordinates.
   image(annaKarpinskiImage, annaKarpinskiXLocation, annaKarpinskiYLocation);

   image(bonesKarpinskiImage, bonesKarpinskiXLocation, bonesKarpinskiYLocation);
   image(adaLovelaceImage, adaLovelaceXLocation, adaLovelaceYLocation);
   image(pawelKarpinskiImage, pawelKarpinskiXLocation, pawelKarpinskiYLocation);
   image(rockyKrayImage, rockyKrayXLocation, rockyKrayYLocation);
   image(cecilKarpinskiImage, cecilKarpinskiXLocation, cecilKarpinskiYLocation);
}
