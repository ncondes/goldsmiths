// globals
let toolbox;
let options;
// state
const state = { previous: [], next: [] };
// stamps
let starStamp;
// classes
let ColoursTool;

function preload() {
  starStamp = loadImage("../../assets/star-stamp.png");
  moonStamp = loadImage("../../assets/moon-stamp.png");
  pencilStamp = loadImage("../../assets/pencil-stamp.png");
  characterStamp = loadImage("../../assets/character-stamp.png");
  mushroomStamp = loadImage("../../assets/mushroom-stamp.png");
  mickeyStamp = loadImage("../../assets/mickey-stamp.png");
  rageStamp = loadImage("../../assets/rage-stamp.png");
  happyStamp = loadImage("../../assets/happy-stamp.png");
  memeStamp = loadImage("../../assets/meme-stamp.png");
}

function setup() {
  // get the canvas div element from the html
  const canvasElement = select("#canvas");
  // create a canvas to fill the canvas div
  const c = createCanvas(
    canvasElement.size().width,
    canvasElement.size().height
  );
  // set the parent html element to the canvas
  c.parent("canvas");
  // listen for click events in the header
  Listeners.clearSketch();
  Listeners.saveSketch(c);
  Listeners.undoAction();
  Listeners.redoAction();

  toolbox = new Toolbox();
  // assign colours tool to acces it globally
  ColoursTool = new Colours();

  toolbox.addTool(new Pencil());
  toolbox.addTool(new Eraser());
  toolbox.addTool(new Shapes());
  toolbox.addTool(new Spray());
  toolbox.addTool(new Mirror());
  toolbox.addTool(new Stamp());
  toolbox.addTool(ColoursTool);
}

function draw() {
  try {
    // draw according to the current tool
    toolbox.selectedTool.draw();
    // listen if the state is empty, if so, disable the undo button
    Listeners.disableUndoButton();
    Listeners.disableRedoButton();
  } catch (error) {
    console.log(error);
  }
}

function mousePressed() {
  // check if the mouse is inside the canvas
  if (!Helpers.mouseIsInsideCanvas()) return;
  // the max previous steps back is 20, if the state reach the maximum, remove the first element
  if (state.previous.length === 20) state.previous.shift();
  // store the current state
  state.previous.push(get());
  // clear the next state
  state.next = [];
}
