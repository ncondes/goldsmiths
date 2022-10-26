/*

Officer: 5031189
CaseNum: 202-1-30260348-5031189

Case 202 - The case of Bob and Daisy - stage 2

Here’s another letter kid. This time it’s from Daisy (aka. Woz).
Decode it to uncover more about Woz and Job’s dastardly plan.

Discover the hidden code by commenting out all text commands except
those which produce Cyan filled text with a Orange Red outline 
(see https://www.w3.org/TR/css3-iccprof#numerical).
Only comment out text commands - leave fill & stroke commands uncommented.

There are many possible ways of investigating this case, but you
should use ONLY the following commands:

  // comments are all that are needed for this case.
  Do NOT add any new lines of code.

*/

var letterFont;

function preload() {
   letterFont = loadFont('Melissa.otf');
}

function setup() {
   createCanvas(654, 419);
   textFont(letterFont);
   textSize(28);
}

function draw() {
   background(255);

   fill(255, 140, 0);
   stroke(107, 142, 35);
   // text("desolate.", 302,180);
   fill(153, 50, 204);
   stroke(0, 250, 154);
   // text("in", 226,118);
   fill(65, 105, 225);
   stroke(34, 139, 34);
   // text("and", 550,118);
   stroke(0, 191, 255);
   // text("months", 407,84);
   fill(0, 128, 128);
   stroke(160, 82, 45);
   // text("I", 535,180);
   fill(135, 206, 235);
   stroke(255, 0, 0);
   // text("I", 45,84);
   fill(244, 164, 96);
   stroke(148, 0, 211);
   // text("I'm", 148,151);
   fill(238, 130, 238);
   stroke(0, 128, 0);
   // text("How", 7,84);
   fill(240, 128, 128);
   stroke(160, 82, 45);
   // text("we", 249,210);
   fill(100, 149, 237);
   // text("having", 103,84);
   fill(148, 0, 211);
   stroke(255, 140, 0);
   // text("lo", 459,180);
   fill(210, 105, 30);
   stroke(153, 50, 204);
   // text("return.", 354,151);
   fill(25, 25, 112);
   stroke(128, 0, 128);
   // text("last", 584,84);
   fill(32, 178, 170);
   stroke(148, 0, 211);
   // text("you.", 113,151);
   fill(176, 224, 230);
   stroke(107, 142, 35);
   // text("my", 66,180);
   fill(222, 184, 135);
   stroke(0, 0, 128);
   // text("Bob,", 93,28);
   fill(255, 105, 180);
   stroke(0, 139, 139);
   // text("night", 466,118);
   fill(178, 34, 34);
   stroke(255, 140, 0);
   // text("we", 554,84);
   fill(218, 165, 32);
   stroke(0, 0, 205);
   // text("I", 583,118);
   fill(32, 178, 170);
   stroke(128, 128, 0);
   // text("this", 132,180);
   fill(218, 165, 32);
   stroke(255, 0, 255);
   // text("Forever", 7,266);
   fill(219, 112, 147);
   stroke(184, 134, 11);
   // text("My", 7,28);
   fill(153, 50, 204);
   stroke(178, 34, 34);
   // text("x", 56,322);
   fill(107, 142, 35);
   stroke(255, 0, 255);
   // text("yours,", 71,266);
   fill(165, 42, 42);
   stroke(128, 128, 0);
   // text("miss", 60,84);
   fill(30, 144, 255);
   stroke(255, 140, 0);
   // text("much", 414,180);
   fill(72, 209, 204);
   stroke(75, 0, 130);
   // text("Daisy", 7,322);
   fill(222, 184, 135);
   stroke(128, 0, 0);
   // text("can", 598,118);
   fill(240, 230, 140);
   // text("When", 169,210);
   fill(255, 105, 180);
   // text("How", 376,180);
   fill(153, 50, 204);
   stroke(50, 205, 50);
   // text("?", 66,118);
   fill(135, 206, 235);
   stroke(127, 255, 0);
   // text("this", 60,210);
   fill(123, 104, 238);
   stroke(75, 0, 130);
   // text("at", 42,180);
   fill(160, 82, 45);
   stroke(128, 128, 0);
   // text("you", 157,84);
   fill(240, 128, 128);
   stroke(46, 139, 87);
   // text("I", 82,118);
   fill(244, 164, 96);
   stroke(153, 50, 204);
   // text("feels", 258,180);
   fill(124, 252, 0);
   stroke(184, 134, 11);
   // text("ag", 352,210);
   fill(255, 69, 0);
   stroke(0, 128, 128);
   // text("longing", 97,210);
   fill(107, 142, 35);
   stroke(25, 25, 112);
   // text("at", 410,118);
   fill(173, 255, 47);
   stroke(0, 139, 139);
   // text("to", 592,180);
   fill(106, 90, 205);
   stroke(255, 0, 255);
   // text("in", 451,151);
   fill(255, 140, 0);
   stroke(255, 0, 0);
   // text("?", 153,210);
   fill(0, 0, 139);
   stroke(0, 250, 154);
   // text("nger", 471,180);
   fill(222, 184, 135);
   stroke(255, 0, 0);
   // text("you", 10,180);
   fill(127, 255, 0);
   stroke(0, 128, 128);
   // text("united", 302,210);
   fill(199, 21, 133);
   // text("stare", 337,118);
   fill(240, 230, 140);
   stroke(0, 250, 154);
   // text("the", 469,151);
   fill(255, 215, 0);
   stroke(255, 255, 0);
   // text("you", 194,118);
   fill(255, 69, 0);
   stroke(255, 0, 0);
   // text("I", 322,118);
   fill(0, 0, 128);
   stroke(128, 0, 128);
   // text("of", 89,151);
   fill(255, 127, 80);
   stroke(199, 21, 133);
   // text("on", 240,151);
   fill(219, 112, 147);
   stroke(128, 128, 0);
   // text("only", 53,151);
   fill(0, 250, 154);
   stroke(139, 0, 139);
   // text("many", 361,84);
   fill(160, 82, 45);
   stroke(184, 134, 11);
   // text("kissed", 10,118);
   fill(178, 34, 34);
   stroke(0, 191, 255);
   // text("it", 491,84);
   fill(0, 255, 255);
   stroke(255, 69, 0);
   text('place', 277, 84);
   text('small', 169, 180);
   text('is', 471, 84);
   text('swift', 303, 151);
   text('the', 245, 84);
   text('store', 11, 210);
   text('side', 95, 180);
   fill(238, 232, 170);
   stroke(139, 0, 0);
   // text("without", 560,151);
   fill(106, 90, 205);
   stroke(32, 178, 170);
   // text("sky,", 510,118);
   fill(0, 255, 255);
   stroke(255, 69, 0);
   text('town', 214, 180);
   fill(135, 206, 235);
   stroke(0, 128, 0);
   // text("up", 386,118);
   fill(0, 255, 127);
   stroke(0, 250, 154);
   // text("hold", 157,118);
   fill(176, 224, 230);
   stroke(46, 139, 87);
   // text("ain", 370,210);
   fill(255, 140, 0);
   stroke(148, 0, 211);
   // text("my", 244,118);
   fill(233, 150, 122);
   stroke(0, 128, 0);
   // text("How", 323,84);
   fill(75, 0, 130);
   stroke(32, 178, 170);
   // text("around", 189,84);
   fill(72, 209, 204);
   stroke(0, 255, 255);
   // text("to", 133,118);
   fill(0, 0, 205);
   stroke(0, 250, 154);
   // text("spring,", 501,151);
   fill(0, 0, 128);
   stroke(255, 215, 0);
   // text("darling", 38,28);
   fill(0, 0, 139);
   stroke(25, 25, 112);
   // text("the", 434,118);
   fill(0, 0, 128);
   stroke(0, 255, 127);
   // text("long", 97,118);
   fill(0, 191, 255);
   stroke(160, 82, 45);
   // text("have", 550,180);
   fill(205, 133, 63);
   stroke(0, 139, 139);
   // text("do", 510,180);
   fill(154, 205, 50);
   // text("Even", 409,151);
   fill(148, 0, 211);
   stroke(165, 42, 42);
   // text("be", 279,210);
   fill(154, 205, 50);
   stroke(0, 0, 205);
   // text("arms.", 273,118);
   fill(139, 69, 19);
   stroke(255, 215, 0);
   // text("will", 218,210);
   fill(255, 69, 0);
   stroke(25, 25, 112);
   // text("ink", 26,151);
   fill(244, 164, 96);
   stroke(46, 139, 87);
   // text("your", 264,151);
   fill(210, 105, 30);
   stroke(178, 34, 34);
   // text("since", 509,84);
   fill(160, 82, 45);
   stroke(255, 215, 0);
   // text("banking", 179,151);
   stroke(124, 252, 0);
   // text("?", 397,210);
   fill(0, 139, 139);
   stroke(128, 0, 0);
   // text("th", 9,151);
}
