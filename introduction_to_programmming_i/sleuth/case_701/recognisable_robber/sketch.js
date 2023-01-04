/*

Officer: 5031189
CaseNum: 701-2-18468202-5031189

Case 701 - Recognisable robber - stage 3

Kid you’re becoming a victim of your own success.
I just had a call from DI Max down at the precinct. He specifically requested your services.
They finally have a reliable witness for a robber who has been causing mayhem for some months.
Luckily they have a witness statement from gayla warman. You know what to do kid.

Please create a function that takes a suspect object as parameter from the data structure below.
Your function should return a number value indicating how many of their properties match the witness statement.
You should use conditional statements to compare the suspect's properties to the statement.

The function is already being called in draw() but it is your job to implement it.

There are many possible ways of carrying out your duties,
but you should complete this task using ONLY the following
commands:

 - function testProperties(suspectObj){}
 - if()

Witness statement:

I remember walking down the street and then I saw them. They seemed to be between the age of 30 and 56 years old. Their expression seemed angry. They were fairly tall, I think between a height of 155 and 192 cm. They wore cheap plastic glasses. I'm not quite sure. I distinctly remember that they were wearing a pair of leather trousers, I remember thinking that was quite unusual. They were carrying a orange plastic bag. It's so hard to remember right now. They brobably weigh between 65 and 88 kg. I'll never forget their grey eyes. That's all I know officer. 

*/

var suspectList = [
   {
      name: 'JULIANA MYRLE',
      expression: 'menacing',
      eyes: 'brown',
      item: 'red necktie',
      accessory: 'orange tote bag',
      height: 183,
      age: 66,
      weight: 68,
   },
   {
      name: 'LAVERNE DURANTS',
      expression: 'blank',
      eyes: 'black',
      item: 'fur vest',
      accessory: 'plastic box',
      height: 180,
      age: 36,
      weight: 81,
   },
   {
      name: 'JAUNITA ADVERSANE',
      expression: 'sad',
      eyes: 'pale',
      item: 'orange socks',
      accessory: 'black duffle bag',
      height: 153,
      age: 33,
      weight: 72,
   },
   {
      name: 'PIERRE SYMMES',
      expression: 'empty',
      eyes: 'blue',
      item: 'net weave shirt',
      accessory: 'red backpack',
      height: 165,
      age: 40,
      weight: 75,
   },
   {
      name: 'DARBY TINTLE',
      expression: 'angry',
      eyes: 'grey',
      item: 'pair of leather trousers',
      accessory: 'orange plastic bag',
      height: 166,
      age: 54,
      weight: 87,
   },
   {
      name: 'SUMMER THAXTER',
      expression: 'nerveous',
      eyes: 'green',
      item: 'purple hat',
      accessory: 'brown paper bag',
      height: 185,
      age: 38,
      weight: 79,
   },
   {
      name: 'NELSON COURTWOOD',
      expression: 'depressed',
      eyes: 'brown',
      item: 'dotted necktie',
      accessory: 'glass bottle',
      height: 189,
      age: 37,
      weight: 72,
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
function testProperties(suspectObj) {
   let match = 0;

   if (suspectObj.age > 30 && suspectObj.age < 56) match++;
   if (suspectObj.expression === 'angry') match++;
   if (suspectObj.height > 155 && suspectObj.height < 192) match++;
   if (suspectObj.item === 'pair of leather trousers') match++;
   if (suspectObj.accessory === 'orange plastic bag') match++;
   if (suspectObj.weight > 65 && suspectObj.weight < 88) match++;
   if (suspectObj.eyes === 'grey') match++;

   return match;
}

// I remember walking down the street and then I saw them. They seemed to be between the age of 30 and 56 years old. Their expression seemed angry. They were fairly tall, I think between a height of 155 and 192 cm. They wore cheap plastic glasses. I'm not quite sure. I distinctly remember that they were wearing a pair of leather trousers, I remember thinking that was quite unusual. They were carrying a orange plastic bag. It's so hard to remember right now. They brobably weigh between 65 and 88 kg. I'll never forget their grey eyes. That's all I know officer.

// {
//    name: 'NELSON COURTWOOD',
//    expression: 'depressed',
//    eyes: 'brown',
//    item: 'dotted necktie',
//    accessory: 'glass bottle',
//    height: 189,
//    age: 37,
//    weight: 72,
// },

function draw() {
   //You don't need to alter this code
   image(backgroundImg, 0, 0);

   for (let i = 0; i < suspectList.length; i++) {
      let matchingProperties = testProperties(suspectList[i]);
      fill(50 * matchingProperties, 250 - 50 * matchingProperties, 0);
      text(
         'found ' +
            matchingProperties +
            ' matching properties for ' +
            suspectList[i].name,
         60,
         60 + i * 20
      );
   }
}
