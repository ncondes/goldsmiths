/*
802 - The case of Monte Carlo
Stage 2 - King of Cards


Officer: 5031189
CaseNum: 802-1-70223376-5031189

You aren’t going to look like much of a Poker player unless you can do a good shuffle. We’ll need to be able to do this with one hand tied behind our back if we are going to pose as pros at the big game.

- Write a function called fillShuffleArray.
- Declare an empty array in the function.
- Using a for loop, fill the array with 52 random integers between 1 and 57.
- Make sure you use the push method to add values to your array and the round function to convert your random values to integers.
- At the end of the function, return the array 
- Call fillShuffleArray in setup.
- Call Shuffle deck using the return value from fillShuffleArray as the argument.

*/

var playing_cards = [
   { s: 'Spades', value: 'A' },
   { s: 'Spades', value: '2' },
   { s: 'Spades', value: '3' },
   { s: 'Spades', value: '4' },
   { s: 'Spades', value: '5' },
   { s: 'Spades', value: '6' },
   { s: 'Spades', value: '7' },
   { s: 'Spades', value: '8' },
   { s: 'Spades', value: '9' },
   { s: 'Spades', value: '10' },
   { s: 'Spades', value: 'J' },
   { s: 'Spades', value: 'Q' },
   { s: 'Spades', value: 'K' },
   { s: 'Clubs', value: 'A' },
   { s: 'Clubs', value: '2' },
   { s: 'Clubs', value: '3' },
   { s: 'Clubs', value: '4' },
   { s: 'Clubs', value: '5' },
   { s: 'Clubs', value: '6' },
   { s: 'Clubs', value: '7' },
   { s: 'Clubs', value: '8' },
   { s: 'Clubs', value: '9' },
   { s: 'Clubs', value: '10' },
   { s: 'Clubs', value: 'J' },
   { s: 'Clubs', value: 'Q' },
   { s: 'Clubs', value: 'K' },
   { s: 'Hearts', value: 'A' },
   { s: 'Hearts', value: '2' },
   { s: 'Hearts', value: '3' },
   { s: 'Hearts', value: '4' },
   { s: 'Hearts', value: '5' },
   { s: 'Hearts', value: '6' },
   { s: 'Hearts', value: '7' },
   { s: 'Hearts', value: '8' },
   { s: 'Hearts', value: '9' },
   { s: 'Hearts', value: '10' },
   { s: 'Hearts', value: 'J' },
   { s: 'Hearts', value: 'Q' },
   { s: 'Hearts', value: 'K' },
   { s: 'Diamonds', value: 'A' },
   { s: 'Diamonds', value: '2' },
   { s: 'Diamonds', value: '3' },
   { s: 'Diamonds', value: '4' },
   { s: 'Diamonds', value: '5' },
   { s: 'Diamonds', value: '6' },
   { s: 'Diamonds', value: '7' },
   { s: 'Diamonds', value: '8' },
   { s: 'Diamonds', value: '9' },
   { s: 'Diamonds', value: '10' },
   { s: 'Diamonds', value: 'J' },
   { s: 'Diamonds', value: 'Q' },
   { s: 'Diamonds', value: 'K' },
];
var deck_img;
var table_img;
var drawCounter = 0;

function preload() {
   deck_img = loadImage('deck.png');
   table_img = loadImage('table.png');
}
function setup() {
   createCanvas(table_img.width, table_img.height);
   frameRate(30);

   //call your fillShuffleArray function here. Followed by a call to shuffleDeck with the return value of fillShuffleArray as an argument.
   const result = fillShuffleArray();
   shuffleDeck(result);
}

//write your fillShuffleArray function here
function fillShuffleArray() {
   const array = [];
   for (let i = 0; i < playing_cards.length; i++) {
      array.push(round(random(1, 57)));
   }

   return array;
}

/////////////////////DON'T CHANGE ANYTHING BELOW HERE/////////////////////////
function shuffleDeck(shuffleSeed) {
   //shuffle the deck by rotating the cards location with the values in
   //shuffleSeed. Repeat this a random number of times between 20 and 50
   var shuffleIterations = parseInt(random(20, 50));
   for (var i = 0; i < shuffleIterations; i++) {
      for (var j = 0; j < playing_cards.length; j++) {
         var tempCard = playing_cards.splice(j, 1);
         var newLoc = (j + shuffleSeed[j]) % 52;
         playing_cards.splice(newLoc, 0, tempCard[0]);
      }
   }
}

function draw() {
   image(table_img, 0, 0);

   if (frameCount % 7 == 0) {
      drawCounter++;
      if (drawCounter == 52) {
         noLoop();
      }
   }
   for (var i = 0; i < drawCounter; i++) {
      if (playing_cards[i].marked) {
         drawCard(playing_cards[i], 400 + i * 18, 230);
      } else {
         drawCard(playing_cards[i], 400 + i * 18, 250);
      }
   }
}

function drawCard(card, x, y) {
   var values = [
      'A',
      '2',
      '3',
      '4',
      '5',
      '6',
      '7',
      '8',
      '9',
      '10',
      'J',
      'Q',
      'K',
   ];
   var suits = ['Spades', 'Clubs', 'Hearts', 'Diamonds'];

   for (var i = 0; i < suits.length; i++) {
      for (var j = 0; j < values.length; j++) {
         if (card.value == values[j] && card.s == suits[i]) {
            //img, sx, sy, sWidth, sHeight, dx, dy, dWidth, dHeight
            image(deck_img, j * 200, i * 300, 200, 300, x, y, 100, 150);
            break;
         }
      }
   }
}
