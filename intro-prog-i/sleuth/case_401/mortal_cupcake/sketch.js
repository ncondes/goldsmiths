/*

Officer: 5031189
CaseNum: 401-3-74829663-5031189

Case 401 - The Case of Norbert's Weiner Stand
Stage 4 - Mortal Cupcake

It seems that Norbert is getting desperate now. In what appears to be his final stand he has set up his own cupcake shop. The laced cupcakes look delicious but they are extremely dangerous. Just a brief whiff of one can induce a series of
deadly symptoms. This is Norbert’s most complex poison to date, so you’ll have to work hard to produce a viable antidote.

You must develop the antidote by using conditional statements in the draw loop to do the following.

	- If SnakeVenom goes above 0.27 and ricin dips below 0.65, or on the other hand, cyanide dips below 0.68 and insecticide dips below 0.48, try decreasing Sodium_Bicarbonate by 0.03
	- When hemlock dips below 0.72, botulinium dips below 0.3, chlorine dips below 0.54, and also deadlyNightshade dips below 0.3, increment Sodium_Bicarbonate by 0.02
	- When SnakeVenom dips below 0.3, chlorine goes above 0.48, botulinium dips below 0.57, and also insecticide goes above 0.25, try decreasing glucagon by 0.04
	- When deadlyNightshade dips below 0.52 and hemlock goes above 0.71, or on the other hand, cyanide goes above 0.58, raise glucagon by 0.01
	- If deadlyNightshade goes above 0.3 and insecticide dips below 0.42, or on the other hand, cyanide dips below 0.62, reduce paracetamol by 0.05
	- When chlorine dips below 0.72, hemlock goes above 0.51, and also ricin goes above 0.26, increment paracetamol by 0.04
	- If botulinium dips below 0.69, whilst at the same time, chlorine goes above 0.61 or insecticide goes above 0.62, try decreasing sulphates by 0.04
	- When deadlyNightshade goes above 0.3 or SnakeVenom dips below 0.72, whilst at the same time, cyanide goes above 0.46 or ricin goes above 0.59, increase sulphates by 0.04
	- If SnakeVenom goes above 0.71 or botulinium dips below 0.27, whilst at the same time, hemlock goes above 0.58, try decreasing insulin by 0.01
	- If chlorine dips below 0.44, deadlyNightshade dips below 0.62, and also insecticide dips below 0.62, try increasing insulin by 0.03


Your conditional statements should consider the following poisons:

	- hemlock
	- chlorine
	- cyanide
	- SnakeVenom
	- botulinium
	- deadlyNightshade
	- insecticide
	- ricin


Your conditional statements should modify the following antidotes:

	- Sodium_Bicarbonate
	- glucagon
	- paracetamol
	- sulphates
	- insulin


- There are many ways to complete this task but you should only use the following commands:

	if(){}
	>
	<
	&&
	||
	+=
	-=

*/

//Declare the poison variables
var hemlock;
var chlorine;
var cyanide;
var SnakeVenom;
var botulinium;
var deadlyNightshade;
var insecticide;
var ricin;

//Declare the antidote variables
var Sodium_Bicarbonate;
var glucagon;
var paracetamol;
var sulphates;
var insulin;

//This variable is used for drawing the graph
var graphs;

function setup() {
   createCanvas(800, 600);
   strokeWeight(2);

   //initialise the poisons and antidotes
   hemlock = 0.5;
   chlorine = 0.5;
   cyanide = 0.5;
   SnakeVenom = 0.5;
   botulinium = 0.5;
   deadlyNightshade = 0.5;
   insecticide = 0.5;
   ricin = 0.5;
   Sodium_Bicarbonate = 0.5;
   glucagon = 0.5;
   paracetamol = 0.5;
   sulphates = 0.5;
   insulin = 0.5;

   //fills the graph with empty values
   graphs = [];

   for (var i = 0; i < 8; i++) {
      graphs.push([]);
      for (var j = 0; j < 512; j++) {
         graphs[i].push(0.5);
      }
   }
}

function draw() {
   //Develop the antidote below
   //Write conditional statements to change the amount of each substance ...

   // - If SnakeVenom goes above 0.27 and ricin dips below 0.65, or on the other hand, cyanide dips below 0.68 and insecticide dips below 0.48, try decreasing Sodium_Bicarbonate by 0.03

   // - When hemlock dips below 0.72, botulinium dips below 0.3, chlorine dips below 0.54, and also deadlyNightshade dips below 0.3, increment Sodium_Bicarbonate by 0.02

   // - When SnakeVenom dips below 0.3, chlorine goes above 0.48, botulinium dips below 0.57, and also insecticide goes above 0.25, try decreasing glucagon by 0.04

   // - When deadlyNightshade dips below 0.52 and hemlock goes above 0.71, or on the other hand, cyanide goes above 0.58, raise glucagon by 0.01

   // - If deadlyNightshade goes above 0.3 and insecticide dips below 0.42, or on the other hand, cyanide dips below 0.62, reduce paracetamol by 0.05

   // - When chlorine dips below 0.72, hemlock goes above 0.51, and also ricin goes above 0.26, increment paracetamol by 0.04

   // - If botulinium dips below 0.69, whilst at the same time, chlorine goes above 0.61 or insecticide goes above 0.62, try decreasing sulphates by 0.04

   // - When deadlyNightshade goes above 0.3 or SnakeVenom dips below 0.72, whilst at the same time, cyanide goes above 0.46 or ricin goes above 0.59, increase sulphates by 0.04

   // - If SnakeVenom goes above 0.71 or botulinium dips below 0.27, whilst at the same time, hemlock goes above 0.58, try decreasing insulin by 0.01

   // - If chlorine dips below 0.44, deadlyNightshade dips below 0.62, and also insecticide dips below 0.62, try increasing insulin by 0.03

   //////////////////////////////////////////////////////
   if (
      (SnakeVenom > 0.27 && ricin < 0.65) ||
      (cyanide < 0.68 && insecticide < 0.48)
   )
      Sodium_Bicarbonate -= 0.03;
   if (
      hemlock < 0.72 &&
      botulinium < 0.3 &&
      chlorine < 0.54 &&
      deadlyNightshade < 0.3
   )
      Sodium_Bicarbonate += 0.02;
   if (
      SnakeVenom < 0.3 &&
      chlorine > 0.48 &&
      botulinium < 0.57 &&
      insecticide > 0.25
   )
      glucagon -= 0.04;
   if ((deadlyNightshade < 0.52 && hemlock > 0.71) || cyanide > 0.58)
      glucagon += 0.01;
   if ((deadlyNightshade > 0.3 && insecticide < 0.42) || cyanide < 0.62)
      paracetamol -= 0.05;
   if (chlorine < 0.72 && hemlock > 0.51 && ricin > 0.26) paracetamol += 0.04;
   if (botulinium < 0.69 && (chlorine > 0.61 || insecticide > 0.62))
      sulphates -= 0.04;
   if (
      (deadlyNightshade > 0.3 || SnakeVenom < 0.72) &&
      (cyanide > 0.46 || ricin > 0.59)
   )
      sulphates += 0.04;
   if ((SnakeVenom > 0.71 || botulinium < 0.27) && hemlock > 0.58)
      insulin -= 0.01;
   if (chlorine < 0.44 && deadlyNightshade < 0.62 && insecticide < 0.62)
      insulin += 0.03;

   //the code below generates new values using random numbers

   /*
		For testing, you might want to temporarily comment out
		these lines and set the same variables to constant values
		instead.
	*/

   hemlock = nextValue(graphs[0], hemlock);
   chlorine = nextValue(graphs[1], chlorine);
   cyanide = nextValue(graphs[2], cyanide);
   SnakeVenom = nextValue(graphs[3], SnakeVenom);
   botulinium = nextValue(graphs[4], botulinium);
   deadlyNightshade = nextValue(graphs[5], deadlyNightshade);
   insecticide = nextValue(graphs[6], insecticide);
   ricin = nextValue(graphs[7], ricin);

   Sodium_Bicarbonate = constrain(Sodium_Bicarbonate, 0, 1);
   glucagon = constrain(glucagon, 0, 1);
   paracetamol = constrain(paracetamol, 0, 1);
   sulphates = constrain(sulphates, 0, 1);
   insulin = constrain(insulin, 0, 1);

   ///////// DO NOT CHANGE THE CODE BELOW ///////////

   //drawing code

   // set background
   background(0);
   noFill();

   //draw the graphs for the vitals

   var colors = [
      color(255, 0, 0),
      color(0, 255, 0),
      color(0, 0, 255),
      color(255, 0, 255),
      color(255, 255, 0),
      color(0, 255, 255),
      color(255, 100, 100),
      color(255, 100, 0),
   ];

   for (var i = 0; i < graphs.length; i++) {
      stroke(colors[i]);
      drawGraph(graphs[i]);
   }

   //draw the poisons as text
   noStroke();
   fill(colors[0]);
   text('hemlock: ' + nf(hemlock, 1, 2), 20, 20);
   fill(colors[1]);
   text('chlorine: ' + nf(chlorine, 1, 2), 20, 40);
   fill(colors[2]);
   text('cyanide: ' + nf(cyanide, 1, 2), 20, 60);
   fill(colors[3]);
   text('SnakeVenom: ' + nf(SnakeVenom, 1, 2), 20, 80);
   fill(colors[4]);
   text('botulinium: ' + nf(botulinium, 1, 2), 20, 100);
   fill(colors[5]);
   text('deadlyNightshade: ' + nf(deadlyNightshade, 1, 2), 20, 120);
   fill(colors[6]);
   text('insecticide: ' + nf(insecticide, 1, 2), 20, 140);
   fill(colors[7]);
   text('ricin: ' + nf(ricin, 1, 2), 20, 160);

   //draw the antidotes bar chart
   drawBar(Sodium_Bicarbonate, 50, 'Sodium_Bicarbonate');
   drawBar(glucagon, 200, 'glucagon');
   drawBar(paracetamol, 350, 'paracetamol');
   drawBar(sulphates, 500, 'sulphates');
   drawBar(insulin, 650, 'insulin');
}

function nextValue(graph, val) {
   //gets the next value for a vital and puts it in an array for drawing
   var delta = random(-0.03, 0.03);

   val += delta;
   if (val > 1 || val < 0) {
      delta *= -1;
      val += delta * 2;
   }

   graph.push(val);
   graph.shift();
   return val;
}

function drawGraph(graph) {
   //draws an array as a graph
   beginShape();
   for (var i = 0; i < graph.length; i++) {
      vertex((width * i) / 512, height * 0.5 - (graph[i] * height) / 3);
   }
   endShape();
}

function drawBar(val, x, name) {
   //draws the bars for bar chart
   noStroke();
   fill(0, 100, 100);
   var mh = height * 0.4 - 50;
   rect(x, height - 50 - val * mh, 100, val * mh);
   fill(255);
   text(name + ': ' + val, x, height - 20);
}
