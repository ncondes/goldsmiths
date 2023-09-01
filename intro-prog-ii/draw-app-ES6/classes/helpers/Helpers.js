class Helpers {
  static removeBorders(element) {
    // remove active borders from received elements
    const items = selectAll(element);
    items.forEach((item) => {
      item.style("border", "none");
    });
  }

  static addBorder(id) {
    const element = select(`#${id}`);
    element.style("border", "solid 2px #2e72c0");
  }

  static undoToPreviousState() {
    // if there are no previous states stored, do nothing
    if (state.previous.length === 0) return;
    // store the current state in the next array
    state.next.push(get());
    // clear the canvas
    background(255);
    // draw the last state in the canvas
    image(state.previous[state.previous.length - 1], 0, 0);
    // remove the last state
    state.previous.pop();
  }

  static redoToNextState() {
    // if there are no next states stored, do nothing
    if (state.next.length === 0) return;
    // store the current state in the previous array
    state.previous.push(get());
    // clear the canvas
    background(255);
    // draw the next state in the canvas
    image(state.next[state.next.length - 1], 0, 0);
    // remove the next state
    state.next.pop();
  }

  static mouseIsInsideCanvas() {
    return mouseX > 0 && mouseX < width && mouseY > 0 && mouseY < height;
  }
}
