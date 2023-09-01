/*

Officer: 5031189
CaseNum: 502-2-95170708-5031189

Case 502 - Out of the picture - stage 3

Yet another document has come my way. This one is even more tricky to decipher.
The Governor must really have something to hide.

In setup, fill in the redactedText String variable by replacing the redacted words
with references to the two arrays containing the missing pieces.
you can do this by indexing the appropriate items from the respective arrays.

There are many possible ways of completing this task,
but you should ONLY use the following commands:

" + object.property[index] + "

*/

// you dont need to change these
var missingWords;
var redactedText;

// arrays containing the names needed to fill in the paragraph
var A_record = {
   word_0: ['radiate', 'clip', 'sail'],
   word_1: ['stuff', 'ALGOL', 'plug'],
   word_2: ['radiate', 'radiate', 'radiate'],
   word_3: ['mend', 'succeed', 'stuff'],
   word_4: ['meddle', 'mend', 'radiate'],
   word_5: ['bake', 'radiate', 'sneeze'],
   word_6: ['clip', 'hit', 'meddle'],
   word_7: ['smile', 'sneeze', 'plug'],
   word_8: ['fence', 'hurry', 'tug'],
   word_9: ['Edsger', 'clip', 'bake'],
};

var B_record = {
   word_0: ['sneeze', 'charge', 'radiate'],
   word_1: ['sneeze', 'Hopper', 'hurry'],
   word_2: ['start', 'fence', 'plug'],
   word_3: ['rejoice', 'radiate', 'Governor Zuckerberg'],
   word_4: ['sneeze', 'charge', 'campaign'],
   word_5: ['$200,000', 'clip', 'sneeze'],
   word_6: ['start', 'syndicate', 'smile'],
   word_7: ['smile', 'sail', 'succeed'],
   word_8: ['bake', 'rejoice', 'clip'],
   word_9: ['clip', 'protect', 'a donation'],
};

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
      'Governor Zuckerberg, a donation, campaign, $200,000, Hopper, syndicate, hit, ALGOL, Edsger';

   redactedText = `Dear ${B_record.word_3[2]}, I am sure that something could be worked out in terms of ${B_record.word_9[2]} for your ${B_record.word_4[2]}. How does ${B_record.word_5[0]} sound ? I am afraid I will need to be so crude as to spell out what ALGOL requires in return. ${B_record.word_1[1]} needs to be out of the picture. She’s caused enough trouble. Get the ${B_record.word_6[1]} to organise the ${A_record.word_6[1]} but I’d prefer it you don’t mention me or ${A_record.word_1[1]}. I owe them enough favours already. Your old friend, ${A_record.word_9[0]}`;
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
