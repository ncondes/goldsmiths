/*

Officer: 5031189
CaseNum: 401-2-70076233-5031189

Case 401 - The Case of Norbert's Weiner Stand
Stage 3 - Bilious bagel

As I suspected Norbert has struck again. Ever inventive he’s set up a bagel stand and has laced the cream cheese with an ingenious but vicious toxin. This one is quite deadly so get yourself down to the lab right away.

You must develop the antidote by using conditional statements in the draw loop to do the following.

	- When polonium goes above 0.47, or on the other hand, lead dips below 0.67 and hemlock goes above 0.44, reduce BetaBlocker by 0.05
	- If DeadlyNightshade dips below 0.32 or arsenic goes above 0.49, try increasing BetaBlocker by 0.05
	- If arsenic goes above 0.65 or hemlock goes above 0.35, whilst at the same time, mercury goes above 0.53, reduce antibodies by 0.04
	- If lead dips below 0.73 or polonium dips below 0.28, increment antibodies by 0.01
	- If polonium dips below 0.7 or mercury goes above 0.66, reduce chalk by 0.04
	- When lead goes above 0.4 or DeadlyNightshade goes above 0.29, increase chalk by 0.01
	- When mercury goes above 0.55 or hemlock dips below 0.62, decrement insulin by 0.04
	- When polonium goes above 0.38 and arsenic dips below 0.53, or on the other hand, lead goes above 0.66, raise insulin by 0.03


Your conditional statements should consider the following poisons:

	- arsenic
	- mercury
	- polonium
	- hemlock
	- DeadlyNightshade
	- lead


Your conditional statements should modify the following antidotes:

	- BetaBlocker
	- antibodies
	- chalk
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
var arsenic;
var mercury;
var polonium;
var hemlock;
var DeadlyNightshade;
var lead;

//Declare the antidote variables
var BetaBlocker;
var antibodies;
var chalk;
var insulin;

//This variable is used for drawing the graph
var graphs;

function setup() {
   createCanvas(800, 600);
   strokeWeight(2);

   //initialise the poisons and antidotes
   arsenic = 0.5;
   mercury = 0.5;
   polonium = 0.5;
   hemlock = 0.5;
   DeadlyNightshade = 0.5;
   lead = 0.5;
   BetaBlocker = 0.5;
   antibodies = 0.5;
   chalk = 0.5;
   insulin = 0.5;

   //fills the graph with empty values
   graphs = [];

   for (var i = 0; i < 6; i++) {
      graphs.push([]);
      for (var j = 0; j < 512; j++) {
         graphs[i].push(0.5);
      }
   }
}

function draw() {
   //Develop the antidote below
   //Write conditional statements to change the amount of each substance ...

   // - When polonium goes above 0.47, or on the other hand, lead dips below 0.67 and hemlock goes above 0.44, reduce BetaBlocker by 0.05
   // - If DeadlyNightshade dips below 0.32 or arsenic goes above 0.49, try increasing BetaBlocker by 0.05
   // - If arsenic goes above 0.65 or hemlock goes above 0.35, whilst at the same time, mercury goes above 0.53, reduce antibodies by 0.04
   // - If lead dips below 0.73 or polonium dips below 0.28, increment antibodies by 0.01
   // - If polonium dips below 0.7 or mercury goes above 0.66, reduce chalk by 0.04
   // - When lead goes above 0.4 or DeadlyNightshade goes above 0.29, increase chalk by 0.01
   // - When mercury goes above 0.55 or hemlock dips below 0.62, decrement insulin by 0.04
   // - When polonium goes above 0.38 and arsenic dips below 0.53, or on the other hand, lead goes above 0.66, raise insulin by 0.03

   //////////////////////////////////////////////////////
   if (polonium > 0.47 || (lead < 0.67 && hemlock > 0.44)) BetaBlocker -= 0.05;
   if (DeadlyNightshade < 0.32 || arsenic > 0.49) BetaBlocker += 0.05;
   if ((arsenic > 0.65 || hemlock > 0.35) && mercury > 0.53) antibodies -= 0.04;
   if (lead < 0.73 || polonium < 0.28) antibodies += 0.01;
   if (polonium < 0.7 || mercury > 0.66) chalk -= 0.04;
   if (lead > 0.4 || DeadlyNightshade > 0.29) chalk += 0.01;
   if (mercury > 0.55 || hemlock < 0.62) insulin -= 0.04;
   if ((polonium > 0.38 && arsenic < 0.53) || lead > 0.66) insulin += 0.03;

   //the code below generates new values using random numbers

   /*
		For testing, you might want to temporarily comment out
		these lines and set the same variables to constant values
		instead.
	*/

   arsenic = nextValue(graphs[0], arsenic);
   mercury = nextValue(graphs[1], mercury);
   polonium = nextValue(graphs[2], polonium);
   hemlock = nextValue(graphs[3], hemlock);
   DeadlyNightshade = nextValue(graphs[4], DeadlyNightshade);
   lead = nextValue(graphs[5], lead);

   BetaBlocker = constrain(BetaBlocker, 0, 1);
   antibodies = constrain(antibodies, 0, 1);
   chalk = constrain(chalk, 0, 1);
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
   ];

   for (var i = 0; i < graphs.length; i++) {
      stroke(colors[i]);
      drawGraph(graphs[i]);
   }

   //draw the poisons as text
   noStroke();
   fill(colors[0]);
   text('arsenic: ' + nf(arsenic, 1, 2), 20, 20);
   fill(colors[1]);
   text('mercury: ' + nf(mercury, 1, 2), 20, 40);
   fill(colors[2]);
   text('polonium: ' + nf(polonium, 1, 2), 20, 60);
   fill(colors[3]);
   text('hemlock: ' + nf(hemlock, 1, 2), 20, 80);
   fill(colors[4]);
   text('DeadlyNightshade: ' + nf(DeadlyNightshade, 1, 2), 20, 100);
   fill(colors[5]);
   text('lead: ' + nf(lead, 1, 2), 20, 120);

   //draw the antidotes bar chart
   drawBar(BetaBlocker, 50, 'BetaBlocker');
   drawBar(antibodies, 200, 'antibodies');
   drawBar(chalk, 350, 'chalk');
   drawBar(insulin, 500, 'insulin');
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
