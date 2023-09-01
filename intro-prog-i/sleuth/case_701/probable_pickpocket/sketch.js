/*

Officer: 5031189
CaseNum: 701-0-21826556-5031189

Case 701 - Probable pick pocket - stage 1

There has been a spate of pickpocketing downtown and we’ve been asked to lend a hand down at the precinct.
They’ve managed to collect a witness statement from an unsuspecting tourist jeniffer forslin and also rounded up a bunch of the usual suspects.
We need you to unravel this mess and work out who is the guilty one.

Please create a function that takes a suspect object as parameter from the data structure below.
Your function should return a boolean value indicating whether or not they match the witness statement.
You should use conditional statements to compare the suspect's properties to the statement.
It should only return "true" if the suspect matches the description in full.

The function is already being called in draw() but it is your job to implement it.

There are many possible ways of carrying out your duties,
but you should complete this task using ONLY the following
commands:

 - function checkSuspect(suspectObj){}
 - if()

Witness statement:

It all started when I was exiting the store. That's when I noticed them. I remember they had a dragon tattoo. The person I saw was female. I'm not quite sure. It's hard to say. They were wearing a blue overcoat. I can't remember anything else about them.

*/

var suspectsArray = [
   {
      name: 'NELSON DURANTS',
      tattoo: 'anchor',
      gender: 'male',
      coat: 'yellow poncho',
   },
   {
      name: 'JESSIA MAUBERT',
      tattoo: 'bull',
      gender: 'female',
      coat: 'black overcoat',
   },
   {
      name: 'JACQUELINE ADVERSANE',
      tattoo: 'dragon',
      gender: 'female',
      coat: 'blue overcoat',
   },
];

var myFont;
var backgroundImg;

function preload() {
   myFont = loadFont('SpecialElite.ttf');
   backgroundImg = loadImage('Background.png');
}

function setup() {
   createCanvas(640, 480);
   textFont(myFont);
}

// Declare your function here

function checkSuspect(suspectObj) {
   return (
      suspectObj.tattoo === 'dragon' &&
      suspectObj.gender === 'female' &&
      suspectObj.coat === 'blue overcoat'
   );
}

//  - function checkSuspect(suspectObj){}
//  - if()

// Witness statement:

// It all started when I was exiting the store. That's when I noticed them. I remember they had a dragon tattoo. The person I saw was female. I'm not quite sure. It's hard to say. They were wearing a blue overcoat. I can't remember anything else about them.

function draw() {
   //You don't need to alter this code
   image(backgroundImg, 0, 0);

   for (let i = 0; i < suspectsArray.length; i++) {
      if (checkSuspect(suspectsArray[i]) == true) {
         fill(255, 0, 0);
         text(suspectsArray[i].name + ' is guilty!', 60, 60 + i * 20);
      } else {
         fill(0, 155, 0);
         text(suspectsArray[i].name + ' is not guilty', 60, 60 + i * 20);
      }
   }
}
