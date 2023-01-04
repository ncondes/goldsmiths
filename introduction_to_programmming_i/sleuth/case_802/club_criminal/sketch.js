/*
802 - The case of Monte Carlo
Stage 4 - Club criminal


Officer: 5031189
CaseNum: 802-3-22850408-5031189

The card sharks from Rossling Polling are not pleased with your stellar performance and suspect foul play. They are challenging you to find a single card in the deck in just one cut.

- First write a shuffleSeed() function. Same as before, it needs to return an array of 52 random integers between 1 and 80.
- Make sure you use the push method to add values to your array and the round function to convert your random values to integers.
- Call shuffleSeed in setup and use the return value as the argument for shuffleDeck().

Now, the card you are looking for is stored in the cutHere object. You need to cut the deck at this exact location and the card sharks will be forced to give up their secrets.

- Write a function called deckCut and call it from setup.
- This should search for card matching cutHere inside cardDeck.
- Once you've found a match use the JavaScript splice() function to store the cut card and all the elements after from the cardDeck array in the deck_upto_cut array. 
- You'll need to break the loop once you've done as you don't want to keep searching.
- Finally reverse the elements in deck_upto_cut so that the card we cut the deck at is the last element and not the first. 
	- Unfortunately, if we use JavaScript's inbuilt reverse() function we’ll be spotted. You’ll have to write this yourself kid. 


*/

var cardDeck = [
   { card_suit: 'Spades', n: 'A' },
   { card_suit: 'Spades', n: '2' },
   { card_suit: 'Spades', n: '3' },
   { card_suit: 'Spades', n: '4' },
   { card_suit: 'Spades', n: '5' },
   { card_suit: 'Spades', n: '6' },
   { card_suit: 'Spades', n: '7' },
   { card_suit: 'Spades', n: '8' },
   { card_suit: 'Spades', n: '9' },
   { card_suit: 'Spades', n: '10' },
   { card_suit: 'Spades', n: 'J' },
   { card_suit: 'Spades', n: 'Q' },
   { card_suit: 'Spades', n: 'K' },
   { card_suit: 'Clubs', n: 'A' },
   { card_suit: 'Clubs', n: '2' },
   { card_suit: 'Clubs', n: '3' },
   { card_suit: 'Clubs', n: '4' },
   { card_suit: 'Clubs', n: '5' },
   { card_suit: 'Clubs', n: '6' },
   { card_suit: 'Clubs', n: '7' },
   { card_suit: 'Clubs', n: '8' },
   { card_suit: 'Clubs', n: '9' },
   { card_suit: 'Clubs', n: '10' },
   { card_suit: 'Clubs', n: 'J' },
   { card_suit: 'Clubs', n: 'Q' },
   { card_suit: 'Clubs', n: 'K' },
   { card_suit: 'Hearts', n: 'A' },
   { card_suit: 'Hearts', n: '2' },
   { card_suit: 'Hearts', n: '3' },
   { card_suit: 'Hearts', n: '4' },
   { card_suit: 'Hearts', n: '5' },
   { card_suit: 'Hearts', n: '6' },
   { card_suit: 'Hearts', n: '7' },
   { card_suit: 'Hearts', n: '8' },
   { card_suit: 'Hearts', n: '9' },
   { card_suit: 'Hearts', n: '10' },
   { card_suit: 'Hearts', n: 'J' },
   { card_suit: 'Hearts', n: 'Q' },
   { card_suit: 'Hearts', n: 'K' },
   { card_suit: 'Diamonds', n: 'A' },
   { card_suit: 'Diamonds', n: '2' },
   { card_suit: 'Diamonds', n: '3' },
   { card_suit: 'Diamonds', n: '4' },
   { card_suit: 'Diamonds', n: '5' },
   { card_suit: 'Diamonds', n: '6' },
   { card_suit: 'Diamonds', n: '7' },
   { card_suit: 'Diamonds', n: '8' },
   { card_suit: 'Diamonds', n: '9' },
   { card_suit: 'Diamonds', n: '10' },
   { card_suit: 'Diamonds', n: 'J' },
   { card_suit: 'Diamonds', n: 'Q' },
   { card_suit: 'Diamonds', n: 'K' },
];
var deck_img;
var table_img;
var drawCounter = 0;

var cutHere = { cardSuit: 'Hearts', no: '4' };
var deck_upto_cut = [];

function preload() {
   deck_img = loadImage('deck.png');
   table_img = loadImage('table.png');
}
function setup() {
   createCanvas(table_img.width, table_img.height);
   frameRate(30);

   //call your shuffleSeed() function here. Followed by a call to shuffleDeck with the return value of shuffleSeed() as an argument.
   const result = shuffleSeed();
   shuffleDeck(result);

   //call your deckCut function here
   deckCut();
}

//write your deckCut function here
function deckCut() {
   let index;

   for (let i = 0; i < cardDeck.length; i++) {
      if (
         cardDeck[i].card_suit === cutHere.cardSuit &&
         cardDeck[i].n === cutHere.no
      ) {
         index = i;
         break;
      }
   }

   const temp = [...cardDeck.splice(index)];

   for (let i = temp.length - 1; i > -1; i--) {
      deck_upto_cut.push(temp[i]);
   }
}

//write your shuffleSeed() function here.
function shuffleSeed() {
   const array = [];
   for (let i = 0; i < 52; i++) {
      array.push(round(random(1, 80)));
   }
   return array;
}

/////////////////////DON'T CHANGE ANYTHING BELOW HERE/////////////////////////
function shuffleDeck(shuffleSeed) {
   //shuffle the deck by rotating the cards location with the values in
   //shuffleSeed. Repeat this a random number of times between 20 and 50
   var shuffleIterations = parseInt(random(20, 50));
   for (var i = 0; i < shuffleIterations; i++) {
      for (var j = 0; j < cardDeck.length; j++) {
         var tempCard = cardDeck.splice(j, 1);
         var newLoc = (j + shuffleSeed[j]) % 52;
         cardDeck.splice(newLoc, 0, tempCard[0]);
      }
   }
}

function draw() {
   image(table_img, 0, 0);

   if (frameCount % 7 == 0) {
      drawCounter++;
      if (drawCounter == 5) {
         noLoop();
      }
   }
   for (var i = 0; i < drawCounter; i++) {
      if (i < deck_upto_cut.length) {
         drawCard(deck_upto_cut[i], 880 + i * 18, 750);
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
         if (card.n == values[j] && card.card_suit == suits[i]) {
            //img, sx, sy, sWidth, sHeight, dx, dy, dWidth, dHeight
            image(deck_img, j * 200, i * 300, 200, 300, x, y, 100, 150);
            break;
         }
      }
   }
}
