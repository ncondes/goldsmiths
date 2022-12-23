/*
The case of the Python Syndicate
Stage 3


Officer: 5031189
CaseNum: 301-2-76687031-5031189

Right kid let’s work out which of our ‘friends’ is connected to the syndicate.

- An object for Cecil Karpinski has been declared and initialised
- Position each mugshot relative to Cecil Karpinski
- Do this by modifying the x and y parameters of each image command to use the x and y properties from the Cecil Karpinski object.
- You will need to combine add and subtract operators with the relevant property for each parameter.
- If you've got it right, then all six images should appear in exactly the same positions as they do now.

REMEMBER:
- Do not create any new variables
- Do not change the values of the properties for Cecil Karpinski 
- Do not add any additional commands

*/

var photoBoard;
var anna_karpinski_img;
var cecil_karpinski_img;
var countess_hamilton_img;
var rocky_kray_img;
var robbie_kray_img;
var bones_karpinski_img;

var cecil_karpinski_object;

function preload() {
   photoBoard = loadImage('photoBoard.png');
   anna_karpinski_img = loadImage('karpinskiWoman.png');
   cecil_karpinski_img = loadImage('karpinskiBros1.png');
   countess_hamilton_img = loadImage('countessHamilton.png');
   rocky_kray_img = loadImage('krayBrothers1.png');
   robbie_kray_img = loadImage('krayBrothers2.png');
   bones_karpinski_img = loadImage('karpinskiDog.png');
}

function setup() {
   createCanvas(photoBoard.width, photoBoard.height);
   cecil_karpinski_object = {
      x: 408,
      y: 40,
      image: cecil_karpinski_img,
   };
}

function draw() {
   image(photoBoard, 0, 0);

   //And update these image commands with your x and y coordinates.
   image(
      cecil_karpinski_object.image,
      cecil_karpinski_object.x,
      cecil_karpinski_object.y
   );

   image(
      anna_karpinski_img,
      cecil_karpinski_object.x - (408 - 115),
      cecil_karpinski_object.y
   );
   image(
      countess_hamilton_img,
      cecil_karpinski_object.x + (701 - 408),
      cecil_karpinski_object.y
   );
   image(
      rocky_kray_img,
      cecil_karpinski_object.x - (408 - 115),
      cecil_karpinski_object.y + (309 - 40)
   );
   image(
      robbie_kray_img,
      cecil_karpinski_object.x,
      cecil_karpinski_object.y + (309 - 40)
   );
   image(
      bones_karpinski_img,
      cecil_karpinski_object.x + (701 - 408),
      cecil_karpinski_object.y + (309 - 40)
   );
}
