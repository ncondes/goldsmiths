/*

Officer: 5031189
CaseNum: 401-1-81508595-5031189

Case 401 - The Case of Norbert's Weiner Stand
Stage 2 - Toxic Burrito

Norbert is at it again. This time he’s set up a burrito stall and is lacing burritos with his foul toxin. The chaos is spreading. People are dropping like flies and burrito sales have fallen through the floor. To make matters worse it seems Norbert has cottoned on to our methods and has upped the complexity of his poison. You’ll find the antidote harder to develop this time. So kid, head down to the lab and get working.

You must develop the antidote by using conditional statements in the draw loop to do the following:

	- If novichok goes above 0.53, reduce plasma by 0.01
	- When mercury dips below 0.45 and formaldehyde dips below 0.5, try increasing plasma by 0.05
	- If mercury dips below 0.25, decrease chalk by 0.02
	- If lead goes above 0.59 or formaldehyde dips below 0.33, try increasing chalk by 0.02
	- When novichok dips below 0.64, reduce protamine by 0.03
	- When lead goes above 0.5, try increasing protamine by 0.01
	- When lead dips below 0.35, reduce hydrochloric_acid by 0.03
	- If formaldehyde dips below 0.51, increment hydrochloric_acid by 0.05


Your conditional statements should consider the following poisons:

	- mercury
	- formaldehyde
	- novichok
	- lead


Your conditional statements should modify the following antidotes:

	- plasma
	- chalk
	- protamine
	- hydrochloric_acid


- There are many ways to complete this task but you should only use the following commands and operators:

	if(){}
	>
	<
	&&
	||
	+=
	-=

*/

//Declare the poison variables
var mercury;
var formaldehyde;
var novichok;
var lead;

//Declare the antidote variables
var plasma;
var chalk;
var protamine;
var hydrochloric_acid;

//This variable is used for drawing the graph
var graphs;

function setup() {
   createCanvas(800, 600);
   strokeWeight(2);

   //initialise the poisons and antidotes
   mercury = 0.5;
   formaldehyde = 0.5;
   novichok = 0.5;
   lead = 0.5;
   plasma = 0.5;
   chalk = 0.5;
   protamine = 0.5;
   hydrochloric_acid = 0.5;

   //fills the graph with empty values
   graphs = [];

   for (var i = 0; i < 4; i++) {
      graphs.push([]);
      for (var j = 0; j < 512; j++) {
         graphs[i].push(0.5);
      }
   }
}

function draw() {
   //Develop the antidote below
   //Write conditional statements to change the amount of each substance ...

   // - If novichok goes above 0.53, reduce plasma by 0.01
   // - When mercury dips below 0.45 and formaldehyde dips below 0.5, try increasing plasma by 0.05
   // - If mercury dips below 0.25, decrease chalk by 0.02
   // - If lead goes above 0.59 or formaldehyde dips below 0.33, try increasing chalk by 0.02
   // - When novichok dips below 0.64, reduce protamine by 0.03
   // - When lead goes above 0.5, try increasing protamine by 0.01
   // - When lead dips below 0.35, reduce hydrochloric_acid by 0.03
   // - If formaldehyde dips below 0.51, increment hydrochloric_acid by 0.05

   //////////////////////////////////////////////////////
   if (novichok > 0.53) plasma -= 0.01;
   if (mercury < 0.45 && formaldehyde < 0.5) plasma += 0.05;
   if (mercury < 0.25) chalk -= 0.02;
   if (lead > 0.59 || formaldehyde < 0.33) chalk += 0.02;
   if (novichok < 0.64) protamine -= 0.03;
   if (lead > 0.5) protamine += 0.01;
   if (lead < 0.35) hydrochloric_acid -= 0.03;
   if (formaldehyde < 0.51) hydrochloric_acid += 0.05;

   //the code below generates new values using random numbers

   /*
		For testing, you might want to temporarily comment out
		these lines and set the same variables to constant values
		instead.
	*/

   mercury = nextValue(graphs[0], mercury);
   formaldehyde = nextValue(graphs[1], formaldehyde);
   novichok = nextValue(graphs[2], novichok);
   lead = nextValue(graphs[3], lead);

   plasma = constrain(plasma, 0, 1);
   chalk = constrain(chalk, 0, 1);
   protamine = constrain(protamine, 0, 1);
   hydrochloric_acid = constrain(hydrochloric_acid, 0, 1);

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
   text('mercury: ' + nf(mercury, 1, 2), 20, 20);
   fill(colors[1]);
   text('formaldehyde: ' + nf(formaldehyde, 1, 2), 20, 40);
   fill(colors[2]);
   text('novichok: ' + nf(novichok, 1, 2), 20, 60);
   fill(colors[3]);
   text('lead: ' + nf(lead, 1, 2), 20, 80);

   //draw the antidotes bar chart
   drawBar(plasma, 50, 'plasma');
   drawBar(chalk, 200, 'chalk');
   drawBar(protamine, 350, 'protamine');
   drawBar(hydrochloric_acid, 500, 'hydrochloric_acid');
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
