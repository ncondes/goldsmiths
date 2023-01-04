/*

Officer: 5031189
CaseNum: 502-1-41143633-5031189

Case 502 - A delicate matter - stage 2

We’re hot on the trail kid, and another document has come my way.
It’s a little more tricky to decipher but I know you can do it.

In setup, fill in the redactedText String variable by replacing the redacted words
with references to the two arrays containing the missing pieces.
you can do this by indexing the appropriate items from the respective arrays.

There are many possible ways of completing this task,
but you should ONLY use the following commands:

" + Array[index].property + "

*/

// you dont need to change these
var missingWords;
var redactedText;

// arrays containing the names needed to fill in the paragraph
var AExcerpt = [
   { Bit0: 'hurry', Bit1: 'romantic', Bit2: 'protect' },
   { Bit0: 'consider', Bit1: 'hurry', Bit2: 'smile' },
   { Bit0: 'clip', Bit1: 'hurry', Bit2: 'protect' },
   { Bit0: 'meddle', Bit1: 'hurry', Bit2: 'tug' },
   { Bit0: 'rejoice', Bit1: 'meddle', Bit2: 'syndicate' },
   { Bit0: 'plug', Bit1: 'sail', Bit2: 'sail' },
   { Bit0: 'sneeze', Bit1: 'meddle', Bit2: 'protect' },
   { Bit0: 'radiate', Bit1: 'charge', Bit2: 'clip' },
   { Bit0: 'rejoice', Bit1: 'radiate', Bit2: 'a donation' },
   { Bit0: 'start', Bit1: 'rejoice', Bit2: 'consider' },
];

var BExcerpt = [
   { Bit0: 'stuff', Bit1: 'bake', Bit2: 'sail' },
   { Bit0: 'protect', Bit1: 'play', Bit2: 'capital' },
   { Bit0: 'tug', Bit1: 'she has', Bit2: 'sail' },
   { Bit0: 'charge', Bit1: 'clip', Bit2: 'rejoice' },
   { Bit0: 'succeed', Bit1: 'mend', Bit2: 'succeed' },
   { Bit0: 'COBOL', Bit1: 'consider', Bit2: 'tug' },
   { Bit0: 'Edsger', Bit1: 'clip', Bit2: 'sail' },
   { Bit0: 'charge', Bit1: 'delicate', Bit2: 'radiate' },
   { Bit0: 'meddle', Bit1: 'Hopper’s', Bit2: 'Governor Zuckerberg' },
   { Bit0: 'start', Bit1: 'charge', Bit2: 'plug' },
];

var myFont;
var backgroundImg;

function preload() {
   myFont = loadFont('SpecialElite.ttf');
   backgroundImg = loadImage('Background.png');
}

function setup() {
   createCanvas(1280, 800);

   // replace all redacted words with the correct values from the data structures above

   missingWords =
      'Edsger, Hopper’s, she has, romantic, COBOL, syndicate, delicate, capital, a donation, Governor Zuckerberg';

   redactedText = `My dearest ${BExcerpt[6].Bit0}, Please don’t doubt my sincerity when I say that I hadn’t the faintest idea about ${BExcerpt[8].Bit1} intervention. I suspect that ${BExcerpt[2].Bit1} a ${AExcerpt[0].Bit1} interest at the ${BExcerpt[5].Bit0} I and the ${AExcerpt[4].Bit2} appreciate your many contributions over the years. However, this is a most ${BExcerpt[7].Bit1} matter which would require significant ${BExcerpt[1].Bit2} for me to deal with it satisfactorily. I would not be so crude as to suggest a sum but perhaps ${AExcerpt[8].Bit2} to my forthcoming campaign would help. Yours sincerely, ${BExcerpt[8].Bit2}`;
}

function draw() {
   // you don't need to change this
   image(backgroundImg, 0, 0);
   stroke(0);
   strokeWeight(3);
   line(width / 2, 10, width / 2, height - 10);
   noStroke();
   textFont(myFont);
   textSize(14);
   text(redactedText, 30, 100, 580, 600);
   text(missingWords, 670, 100, 580, 600);
}
