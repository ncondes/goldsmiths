class Mirror {
  icon = '<i class="fa-solid fa-clone"></i>';
  name = "mirror";
  axis = "x";
  lineOfSymmetry = width / 2;

  previousMousePosition = { x: -1, y: -1 };
  previousOppositeMousePosition = { x: -1, y: -1 };

  draw() {
    // display the last save state of pixels
    updatePixels();
    // do the drawing if the mouse is pressed
    if (mouseIsPressed && Helpers.mouseIsInsideCanvas()) {
      // if the previous values are -1 set them to the current mouse location and mirrored positions
      if (this.previousMousePosition.x === -1) {
        this.previousMousePosition.x = mouseX;
        this.previousMousePosition.y = mouseY;
        this.previousOppositeMousePosition.x = this.calculateOpposite(
          mouseX,
          "x"
        );
        this.previousOppositeMousePosition.y = this.calculateOpposite(
          mouseY,
          "y"
        );
      }
      // if there are values in the previous locations
      // draw a line between them and the current positions
      else {
        line(
          this.previousMousePosition.x,
          this.previousMousePosition.y,
          mouseX,
          mouseY
        );
        this.previousMousePosition.x = mouseX;
        this.previousMousePosition.y = mouseY;
        // these are for the mirrored drawing the other side of the line of symmetry
        const oX = this.calculateOpposite(mouseX, "x");
        const oY = this.calculateOpposite(mouseY, "y");

        line(
          this.previousOppositeMousePosition.x,
          this.previousOppositeMousePosition.y,
          oX,
          oY
        );

        this.previousOppositeMousePosition.x = oX;
        this.previousOppositeMousePosition.y = oY;
      }
    }
    // if the mouse isn't pressed reset the previous values to -1
    else {
      this.previousMousePosition.x = -1;
      this.previousMousePosition.y = -1;

      this.previousOppositeMousePosition.x = -1;
      this.previousOppositeMousePosition.y = -1;
    }
    // after the drawing is done save the pixel state. We don't want the
    // line of symmetry to be part of our drawing
    loadPixels();
    // push the drawing state so that we can set the stroke weight and colour
    push();
    stroke("#2e72c0");
    // draw the line of symmetry
    if (this.axis == "x") {
      line(width / 2, 0, width / 2, height);
    } else {
      line(0, height / 2, width, height / 2);
    }
    //return to the original stroke
    pop();
  }

  calculateOpposite(n, a) {
    // if the axis isn't the one being mirrored return the same
    // value
    if (a != this.axis) return n;
    // if n is less than the line of symmetry return a coorindate
    // that is far greater than the line of symmetry by the distance from
    // n to that line.
    if (n < this.lineOfSymmetry) {
      return this.lineOfSymmetry + (this.lineOfSymmetry - n);
    }

    // otherwise a coordinate that is smaller than the line of symmetry
    // by the distance between it and n.
    else {
      return this.lineOfSymmetry - (n - this.lineOfSymmetry);
    }
  }

  options() {
    select(".options").html(`
      <label class="options-label">Axis</label>
      <div></div>
      <div class="options-stamp-grid">
        <div class="options-item" id="mirror-direction">
          <i class="fa-solid fa-grip-lines-vertical fa-rotate-90"></i>
        </div>
      </div>
    `);

    select("#mirror-direction").mouseClicked(() => {
      const button = select(`#mirror-direction`);

      if (this.axis === "x") {
        this.axis = "y";
        this.lineOfSymmetry = height / 2;

        button.html('<i class="fa-solid fa-grip-lines-vertical"></i>');
      } else {
        this.axis = "x";
        this.lineOfSymmetry = width / 2;

        button.html(
          '<i class="fa-solid fa-grip-lines-vertical fa-rotate-90"></i>'
        );
      }
    });
  }

  unselect() {
    updatePixels();
    select(".options").html("");
  }
}
