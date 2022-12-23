/*

Officer: 5031189
CaseNum: 401-0-26794259-5031189

Case 401 - The Case of Norbert's Weiner Stand
Stage 1 - Noxious Weiner

Console city has been plunged into chaos. The notorious poisoner Norbert has struck the population down with a potent poison. Word has it that he is smuggling his venomous filth via a streetside weiner stand. Hundreds of people have been affected, and the municipal water company tells me that their sewers are at full capacity. This is no laughing matter. I need you to head down to our lab and work on an antidote.

You must develop the antidote by using conditional statements in the draw loop to
do the following:

	- When SpiderVenom dips below 0.39, decrement protamine by 0.03
	- When sarin goes above 0.26, try increasing protamine by 0.03
	- When sarin dips below 0.71, reduce aspirin by 0.03
	- When SpiderVenom goes above 0.62, try increasing aspirin by 0.03
	- If cyanide dips below 0.31, try decreasing Calcium_Gluconate by 0.04
	- When sarin goes above 0.75, increase Calcium_Gluconate by 0.05


Your conditional statements should consider the following poisons:

	- SpiderVenom
	- cyanide
	- sarin


Your conditional statements should modify the following antidotes:

	- protamine
	- aspirin
	- Calcium_Gluconate


- There are many ways to complete this task but you should only use the following commands and operators:

	if(){}
	>
	<
	+=
	-=

*/

//Declare the poison variables
var SpiderVenom;
var cyanide;
var sarin;

//Declare the antidote variables
var protamine;
var aspirin;
var Calcium_Gluconate;

//This variable is used for drawing the graph
var graphs;

function setup() {
   createCanvas(800, 600);
   strokeWeight(2);

   //initialise the poisons and antidotes
   SpiderVenom = 0.5;
   cyanide = 0.5;
   sarin = 0.5;
   protamine = 0.5;
   aspirin = 0.5;
   Calcium_Gluconate = 0.5;

   //fills the graph with empty values
   graphs = [];

   for (var i = 0; i < 3; i++) {
      graphs.push([]);
      for (var j = 0; j < 512; j++) {
         graphs[i].push(0.5);
      }
   }
}

function draw() {
   // - When SpiderVenom dips below 0.39, decrement protamine by 0.03
   // - When sarin goes above 0.26, try increasing protamine by 0.03
   // - When sarin dips below 0.71, reduce aspirin by 0.03
   // - When SpiderVenom goes above 0.62, try increasing aspirin by 0.03
   // - If cyanide dips below 0.31, try decreasing Calcium_Gluconate by 0.04
   // - When sarin goes above 0.75, increase Calcium_Gluconate by 0.05

   //Develop the antidote below
   //Write conditional statements to change the amount of each substance ...

   //////////////////////////////////////////////////////
   if (SpiderVenom < 0.39) protamine -= 0.03;
   if (sarin > 0.26) protamine += 0.03;
   if (sarin < 0.71) aspirin -= 0.03;
   if (SpiderVenom > 0.62) aspirin += 0.03;
   if (cyanide < 0.31) Calcium_Gluconate -= 0.04;
   if (sarin > 0.75) Calcium_Gluconate += 0.05;

   //the code below generates new values using random numbers

   /*
		For testing, you might want to temporarily comment out
		these lines and set the same variables to constant values
		instead.
	*/

   SpiderVenom = nextValue(graphs[0], SpiderVenom);
   cyanide = nextValue(graphs[1], cyanide);
   sarin = nextValue(graphs[2], sarin);

   protamine = constrain(protamine, 0, 1);
   aspirin = constrain(aspirin, 0, 1);
   Calcium_Gluconate = constrain(Calcium_Gluconate, 0, 1);

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
   text('SpiderVenom: ' + nf(SpiderVenom, 1, 2), 20, 20);
   fill(colors[1]);
   text('cyanide: ' + nf(cyanide, 1, 2), 20, 40);
   fill(colors[2]);
   text('sarin: ' + nf(sarin, 1, 2), 20, 60);

   //draw the antidotes bar chart
   drawBar(protamine, 50, 'protamine');
   drawBar(aspirin, 200, 'aspirin');
   drawBar(Calcium_Gluconate, 350, 'Calcium_Gluconate');
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
