/*

Officer: 5031189
CaseNum: 701-3-89553530-5031189

Case 701 - Believable burglar - stage 4

Those guys down at the precinct need to take your brain for one final spin.
This burglar has been a particularly slippery character and now they believe that they have them.
Luckily they have a have a witness statement from nicole courtwood.
All they need is for you to do the detective work.

This time you must implement two functions:

- A checkSuspect function that takes a suspect object as parameter from the data structure below.
Your function should return a number value indicating how many of their properties match the witness statement.
You should use conditional statements to compare the suspect's properties to the statement.

- A locateGuilty function which traverses the array of suspects and returns the object representing the guilty suspect,
otherwise - return an empty object.

There are many possible ways of carrying out your duties,
but you should complete this task using ONLY the following
commands:

 - function checkSuspect(suspectObj){}
 - function locateGuilty(){}
 - if()

Witness statement:

It all started when I was exiting the store. That's when I noticed them. It's so hard to remember right now. I'll never forget their black eyes. They were fairly tall, I think between a height of 176 and 185 cm. I remember they had a jellyfish tattoo. They had ginger hair. They seemed to be between the age of 30 and 42 years old. They were wearing a yellow poncho. It was so scary! They brobably weigh between 65 and 95 kg. I distinctly remember that they were wearing a pair of leather trousers, I remember thinking that was quite unusual. I'm not quite sure. They were carrying a brown paper bag. I hope I never have to go through that again. 

*/

var allSuspects = [
   {
      name: 'DRUSILLA GOODBURY',
      accessory: 'black duffle bag',
      coat: 'red parka',
      eyes: 'pale',
      tattoo: 'bull',
      weight: 77,
      height: 175,
      age: 48,
   },
   {
      name: 'JESUS MONKSFORD',
      accessory: 'orange tote bag',
      coat: 'green army coat',
      eyes: 'black',
      tattoo: 'chinese lettering',
      weight: 72,
      height: 196,
      age: 43,
   },
   {
      name: 'LAVERNE JOYER',
      accessory: 'brown paper bag',
      coat: 'yellow poncho',
      eyes: 'black',
      tattoo: 'jellyfish',
      weight: 93,
      height: 182,
      age: 41,
   },
   {
      name: 'LESLEY ZETLAND',
      accessory: 'metal briefcase',
      coat: 'green jacket',
      eyes: 'brown',
      tattoo: 'dragon',
      weight: 77,
      height: 169,
      age: 46,
   },
   {
      name: 'DEEDEE ADVERSANE',
      accessory: 'big black envelope',
      coat: 'blue overcoat',
      eyes: 'grey',
      tattoo: 'sword',
      weight: 70,
      height: 185,
      age: 31,
   },
   {
      name: 'LARRAINE WILLMAR',
      accessory: 'glass bottle',
      coat: 'white fur coat',
      eyes: 'grey',
      tattoo: 'big arrow',
      weight: 88,
      height: 164,
      age: 54,
   },
   {
      name: 'NICOLE BROADVIEW',
      accessory: 'red backpack',
      coat: 'black hoodie',
      eyes: 'blue',
      tattoo: 'ox',
      weight: 80,
      height: 155,
      age: 30,
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

// Declare both your functions here
function checkSuspect(suspectObj) {
   let match = 0;
   if (suspectObj.eyes === 'black') match++;
   if (suspectObj.height > 176 && suspectObj.height < 185) match++;
   if (suspectObj.tattoo === 'jellyfish') match++;
   if (suspectObj.age > 30 && suspectObj.age < 42) match++;
   if (suspectObj.coat === 'yellow poncho') match++;
   if (suspectObj.weight > 65 && suspectObj.weight < 95) match++;
   if (suspectObj.accessory === 'brown paper bag') match++;

   return match;
}

// - A locateGuilty function which traverses the array of suspects and returns the object representing the guilty suspect,
// otherwise - return an empty object.

function locateGuilty() {
   let guilty = {};
   let max = 0;
   for (let i = 0; i < allSuspects.length; i++) {
      let score = checkSuspect(allSuspects[i]);
      if (score > max) {
         max = score;
         guilty = allSuspects[i];
      }
   }
   return guilty;
}

function draw() {
   //You don't need to alter this code
   image(backgroundImg, 0, 0);

   fill(255, 0, 0);
   text(locateGuilty().name + ' is guilty!', 60, 80);
}
