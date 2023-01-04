/*
802 - The case of Monte Carlo
Stage 1 - Card sharks

Officer: 5031189
CaseNum: 802-0-89359105-5031189

Don your best threads we're off to the Monte Carlo Casino ! We're tailing a gang of high rolling statisticians who run Rossling Polling, a company used by the shady politicians of Console City to make them seem more popular than they really are.

They’re prepared to give up the dirt on their techniques if we can beat them in a game of 5 card stud poker. We can’t go in and gamble away Sleuth & Co’s cash reserves. There isn’t that much green in the evidence room to compete with these card sharks. Let’s stack the odds in our favour. First let’s learn how to mark cards.

- Write a function called  cardPicker.
- Inside the function, use a for loop to set the marked property of the deck array elements to true when the suit is Clubs or the value is 3
- Call the function from within setup

*/

var deck = [
   { marked: false, suit: 'Spades', n: 'A' },
   { marked: false, suit: 'Spades', n: '2' },
   { marked: false, suit: 'Spades', n: '3' },
   { marked: false, suit: 'Spades', n: '4' },
   { marked: false, suit: 'Spades', n: '5' },
   { marked: false, suit: 'Spades', n: '6' },
   { marked: false, suit: 'Spades', n: '7' },
   { marked: false, suit: 'Spades', n: '8' },
   { marked: false, suit: 'Spades', n: '9' },
   { marked: false, suit: 'Spades', n: '10' },
   { marked: false, suit: 'Spades', n: 'J' },
   { marked: false, suit: 'Spades', n: 'Q' },
   { marked: false, suit: 'Spades', n: 'K' },
   { marked: false, suit: 'Clubs', n: 'A' },
   { marked: false, suit: 'Clubs', n: '2' },
   { marked: false, suit: 'Clubs', n: '3' },
   { marked: false, suit: 'Clubs', n: '4' },
   { marked: false, suit: 'Clubs', n: '5' },
   { marked: false, suit: 'Clubs', n: '6' },
   { marked: false, suit: 'Clubs', n: '7' },
   { marked: false, suit: 'Clubs', n: '8' },
   { marked: false, suit: 'Clubs', n: '9' },
   { marked: false, suit: 'Clubs', n: '10' },
   { marked: false, suit: 'Clubs', n: 'J' },
   { marked: false, suit: 'Clubs', n: 'Q' },
   { marked: false, suit: 'Clubs', n: 'K' },
   { marked: false, suit: 'Hearts', n: 'A' },
   { marked: false, suit: 'Hearts', n: '2' },
   { marked: false, suit: 'Hearts', n: '3' },
   { marked: false, suit: 'Hearts', n: '4' },
   { marked: false, suit: 'Hearts', n: '5' },
   { marked: false, suit: 'Hearts', n: '6' },
   { marked: false, suit: 'Hearts', n: '7' },
   { marked: false, suit: 'Hearts', n: '8' },
   { marked: false, suit: 'Hearts', n: '9' },
   { marked: false, suit: 'Hearts', n: '10' },
   { marked: false, suit: 'Hearts', n: 'J' },
   { marked: false, suit: 'Hearts', n: 'Q' },
   { marked: false, suit: 'Hearts', n: 'K' },
   { marked: false, suit: 'Diamonds', n: 'A' },
   { marked: false, suit: 'Diamonds', n: '2' },
   { marked: false, suit: 'Diamonds', n: '3' },
   { marked: false, suit: 'Diamonds', n: '4' },
   { marked: false, suit: 'Diamonds', n: '5' },
   { marked: false, suit: 'Diamonds', n: '6' },
   { marked: false, suit: 'Diamonds', n: '7' },
   { marked: false, suit: 'Diamonds', n: '8' },
   { marked: false, suit: 'Diamonds', n: '9' },
   { marked: false, suit: 'Diamonds', n: '10' },
   { marked: false, suit: 'Diamonds', n: 'J' },
   { marked: false, suit: 'Diamonds', n: 'Q' },
   { marked: false, suit: 'Diamonds', n: 'K' },
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

   //call your cardPicker function here
   cardPicker();
}

//write your cardPicker function here
function cardPicker() {
   for (let i = 0; i < deck.length; i++) {
      if (deck[i].suit === 'Clubs' || deck[i].n === '3') {
         deck[i].marked = true;
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
      if (deck[i].marked) {
         drawCard(deck[i], 400 + i * 18, 230);
      } else {
         drawCard(deck[i], 400 + i * 18, 250);
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
         if (card.n == values[j] && card.suit == suits[i]) {
            //img, sx, sy, sWidth, sHeight, dx, dy, dWidth, dHeight
            image(deck_img, j * 200, i * 300, 200, 300, x, y, 100, 150);
            break;
         }
      }
   }
}
