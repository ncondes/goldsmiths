class Listeners {
  static clearSketch() {
    select("#clear-button").mouseClicked(() => {
      // clear the screen by setting the background to white again
      background(255);
      // update the drawing state
      loadPixels();
    });
  }

  static saveSketch(canvas) {
    select("#save-button").mouseClicked(() => {
      // save the canvas to the local file system
      saveCanvas(canvas, "myCanvas", "jpg");
    });
  }

  static undoAction() {
    select("#undo-button").mouseClicked(() => {
      // call the undo method
      Helpers.undoToPreviousState();
    });
  }

  static redoAction() {
    select("#redo-button").mouseClicked(() => {
      // call the redo method
      Helpers.redoToNextState();
    });
  }

  static disableUndoButton() {
    const button = select("#undo-button");
    // disable button if selected tool is shapes
    if (toolbox.selectedTool instanceof Shapes) {
      button.attribute("disabled", "true");
      return;
    }
    // disable button if selected tool is mirror
    if (toolbox.selectedTool instanceof Mirror) {
      button.attribute("disabled", "true");
      return;
    }

    state.previous.length === 0
      ? button.attribute("disabled", "true")
      : button.removeAttribute("disabled");
  }

  static disableRedoButton() {
    const button = select("#redo-button");
    // disable button if selected tool is shapes
    if (toolbox.selectedTool instanceof Shapes) {
      button.attribute("disabled", "true");
      return;
    }
    // disable button if selected tool is mirror
    if (toolbox.selectedTool instanceof Mirror) {
      button.attribute("disabled", "true");
      return;
    }

    state.next.length === 0
      ? button.attribute("disabled", "true")
      : button.removeAttribute("disabled");
  }
}
