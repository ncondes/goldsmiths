/*

Officer: 5031189
CaseNum: 502-3-18579578-5031189

Case 502 - A donation - stage 4

This final document will seal the deal kid. C’mon kid. Let’s send these crooks down.

In setup, fill in the redactedText String variable by replacing the redacted words
with references to the two arrays containing the missing pieces.
you can do this by indexing the appropriate items from the respective arrays.

There are many possible ways of completing this task,
but you should ONLY use the following commands:

" + array[index].property[index] + "

*/

// you dont need to change these
var missingWords;
var redactedText;

// arrays containing the names needed to fill in the paragraph
var Listing_A = [
   {
      Detail_0: ['succeed', 'play', 'rejoice', 'stuff'],
      Detail_1: ['charge', 'bake', 'start', 'hurry'],
      Detail_2: ['tug', 'radiate', 'stuff', 'sneeze'],
   },
   {
      Detail_0: ['charge', 'play', 'stuff', 'meddle'],
      Detail_1: ['hurry', 'play', 'bake', 'stuff'],
      Detail_2: ['start', 'sail', 'radiate', 'smile'],
   },
   {
      Detail_0: ['play', 'consider', 'fence', 'succeed'],
      Detail_1: ['protect', 'fence', 'bake', 'clip'],
      Detail_2: ['hurry', 'meddle', 'fence', 'rejoice'],
   },
   {
      Detail_0: ['radiate', 'stuff', 'sail', 'protect'],
      Detail_1: ['COBOL', 'plug', 'clip', 'succeed'],
      Detail_2: ['play', '$200,000', 'radiate', 'smile'],
   },
   {
      Detail_0: ['succeed', 'sneeze', 'start', 'sail'],
      Detail_1: ['rejoice', 'radiate', 'tug', 'consider'],
      Detail_2: ['radiate', 'charge', 'smile', 'mend'],
   },
];

var Listing_B = [
   {
      Detail_0: ['plug', 'radiate', 'stuff', 'tug'],
      Detail_1: ['protect', 'mend', 'charge', 'play'],
      Detail_2: ['stuff', 'ALGOL fish wholesalers', 'protect', 'consider'],
   },
   {
      Detail_0: ['syndicate', 'clip', 'sail', 'fence'],
      Detail_1: ['bake', 'plug', 'bake', 'consider'],
      Detail_2: ['charge', 'ALGOL', 'sail', 'play'],
   },
   {
      Detail_0: ['mend', 'Edsger', 'Governor Zuckerberg', 'meddle'],
      Detail_1: ['protect', 'consider', 'sneeze', 'clip'],
      Detail_2: ['development', 'stuff', 'protect', 'hurry'],
   },
   {
      Detail_0: ['tug', 'rejoice', 'mend', 'fence'],
      Detail_1: ['bake', 'sneeze', 'radiate', 'you'],
      Detail_2: ['clip', 'protect', 'succeed', 'succeed'],
   },
   {
      Detail_0: ['donation', 'stuff', 'consider', 'sail'],
      Detail_1: ['plug', 'stuff', 'protect', 'protect'],
      Detail_2: ['sneeze', 'start', 'bake', 'protect'],
   },
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
      'Edsger, donation, $200,000, ALGOL, you, ALGOL fish wholesalers, syndicate, development, COBOL, Governor Zuckerberg';

   redactedText = `My dearest ${Listing_B[2].Detail_0[1]}, I have just received your very generous ${Listing_B[4].Detail_0[0]} of ${Listing_A[3].Detail_2[1]}. Thank you. This will be invaluable to our campaign. ${Listing_B[1].Detail_2[1]} is a stalwart part of the community and I look forward to continuing our strong partnership in the future. Regard the other matter, I think you will find that all has been satisfactorily dealt with. Just read this morning’s front pages. You can rest assured that no mention was made of ${Listing_B[3].Detail_1[3]} or ${Listing_B[0].Detail_2[1]} to the ${Listing_B[1].Detail_0[0]}. Your new ${Listing_B[2].Detail_2[0]} at the ${Listing_A[3].Detail_1[0]} can now proceed without impediment. Yours sincerely, ${Listing_B[2].Detail_0[2]}`;
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
