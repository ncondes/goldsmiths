/*

Officer: 5031189
CaseNum: 701-1-83679795-5031189

Case 701 - Credible cat thief - stage 2

Kid they need you down at the precinct again.
This time it's a sneaky cat thief who has been absconding with the neighbourhoods felines for some time.
Luckily old Mrs Olivetti caught a glimpse of them as they disappeared over her back fence.
We’ve a bunch of likely characters lined-up but we need your brains to solve the mystery.

Please create a function that takes a suspect object as parameter from the data structure below.
Your function should return a boolean value indicating whether or not they match the witness statement.
You should use conditional statements to compare the suspect's properties to the statement.
It should only return "true" if the suspect matches the description in full.

The function is already being called in draw() but it is your job to implement it.

There are many possible ways of carrying out your duties,
but you should complete this task using ONLY the following
commands:

 - function checkSuspectTraits(suspectObj){}
 - if()

Witness statement:

It all started when I was exiting the store. That's when I noticed them. I'll never forget their brown eyes. The person I saw was female. They were carrying a big black envelope. It's hard to say. I'm not quite sure. Their expression seemed nerveous. I think they were more than 180 cm tall. They were quite big, they probably weigh more than 61 Kg. That's all I know officer. 

*/

var lineupLog = [
   {
      name: 'RANDEE DAVISWOOD',
      gender: 'male',
      accessory: 'orange plastic bag',
      expression: 'menacing',
      height: 171,
      weight: 80,
   },
   {
      name: 'SUMMER ZETLAND',
      gender: 'female',
      accessory: 'big black envelope',
      expression: 'nerveous',
      height: 190,
      weight: 64,
   },
   {
      name: 'LESLEY JENI',
      gender: 'male',
      accessory: 'brown paper bag',
      expression: 'confused',
      height: 192,
      weight: 73,
   },
   {
      name: 'MALINDA JOYER',
      gender: 'male',
      accessory: 'red backpack',
      expression: 'sad',
      height: 205,
      weight: 100,
   },
   {
      name: 'LAVERNE DEAUVILLE',
      gender: 'male',
      accessory: 'black duffle bag',
      expression: 'blank',
      height: 150,
      weight: 69,
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
//  - function checkSuspectTraits(suspectObj){}
//  - if()

// Witness statement:

// It all started when I was exiting the store. That's when I noticed them. I'll never forget their brown eyes. The person I saw was female. They were carrying a big black envelope. It's hard to say. I'm not quite sure. Their expression seemed nerveous. I think they were more than 180 cm tall. They were quite big, they probably weigh more than 61 Kg. That's all I know officer.

function checkSuspectTraits(suspectObj) {
   return (
      suspectObj.gender === 'female' &&
      suspectObj.accessory === 'big black envelope' &&
      suspectObj.expression === 'nerveous' &&
      suspectObj.height > 180 &&
      suspectObj.weight > 61
   );
}

function draw() {
   //You don't need to alter this code
   image(backgroundImg, 0, 0);

   for (let i = 0; i < lineupLog.length; i++) {
      if (checkSuspectTraits(lineupLog[i]) == true) {
         fill(255, 0, 0);
         text(lineupLog[i].name + ' is guilty!', 60, 60 + i * 20);
      } else {
         fill(0, 155, 0);
         text(lineupLog[i].name + ' is not guilty', 60, 60 + i * 20);
      }
   }
}
