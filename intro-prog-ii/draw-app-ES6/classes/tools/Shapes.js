class Shapes {
  icon = '<i class="fa-solid fa-vector-square"></i>';
  name = "shapes";
  shape = { vertices: [] };
  editCheckbox = createCheckbox(" Edit Shape", false);
  fillCheckbox = createCheckbox(" Fill Shape", false);
  finishButton = createButton("Finish Shape");

  constructor() {
    this.finishButton.style("display", "none");
    this.editCheckbox.style("display", "none");
    this.fillCheckbox.style("display", "none");
  }

  draw() {
    // observe canvas
    if (Helpers.mouseIsInsideCanvas()) {
      if (this.shape.vertices <= 1) {
        this.finishButton.attribute("disabled", "");
        this.editCheckbox.hide();
        this.fillCheckbox.hide();
      } else {
        this.finishButton.removeAttribute("disabled");
        this.editCheckbox.show();
        this.fillCheckbox.show();
      }
    }

    updatePixels();

    if (mouseIsPressed && Helpers.mouseIsInsideCanvas()) {
      if (!this.editCheckbox.checked()) {
        // add a vertex to the shape
        this.shape.vertices.push({ x: mouseX, y: mouseY });
      } else {
        // if the edit mode is on, move the closest vertex to the mouse position
        for (let i = 0; i < this.shape.vertices.length; i++) {
          if (
            dist(
              this.shape.vertices[i].x,
              this.shape.vertices[i].y,
              mouseX,
              mouseY
            ) < 10
          ) {
            this.shape.vertices[i].x = mouseX;
            this.shape.vertices[i].y = mouseY;
          }
        }
      }
    }
    // draw the shape
    push();
    this.fillCheckbox.checked() ? fill(ColoursTool.getColour()) : noFill();
    beginShape();
    this.shape.vertices.forEach((v) => {
      vertex(v.x, v.y);
      // draw the vertices if the edit mode is on
      if (this.editCheckbox.checked()) {
        fill("#FF6961");
        ellipse(v.x, v.y, 10);
        this.fillCheckbox.checked() ? fill(ColoursTool.getColour()) : noFill();
      }
    });
    endShape();
    pop();
  }

  handleFinishButtonClick() {
    this.finishButton.mousePressed(() => {
      // set the checkboxes to their default state
      this.editCheckbox.checked(false);
      this.editCheckbox.hide();
      this.fillCheckbox.hide();
      this.draw();
      loadPixels();
      // generate a new shape right after drawing the current one
      this.shape = { vertices: [] };
      // reset fill checkbox after drawing the shape to keep fill mode
      this.fillCheckbox.checked(false);
    });
  }

  options() {
    select(".options").html(`
      <label class="options-label">Actions</label>
      <div style="height: 3rem"></div>
      <div style="height: 3rem"></div>
      <div style="height: 2rem"></div>
      <p><b>Note:</b> Make sure to finish the shape before leaving this tool, otherwise it will not be saved.</p>
    `);

    this.handleFinishButtonClick();

    this.finishButton.style("display", "block");
    this.editCheckbox.style("display", "block");
    this.fillCheckbox.style("display", "block");

    this.finishButton.position(width + 145, 150);
    this.finishButton.style("width", "13rem");
    this.finishButton.parent("options");
    this.finishButton.class("finish-shape-button");
    this.finishButton.attribute("disabled", "");

    this.editCheckbox.position(width + 145, 210);
    this.editCheckbox.style("width", "13rem");
    this.editCheckbox.parent("options");
    this.editCheckbox.hide();

    this.fillCheckbox.position(width + 145, 250);
    this.fillCheckbox.style("width", "13rem");
    this.fillCheckbox.parent("options");
    this.fillCheckbox.hide();
  }

  unselect() {
    updatePixels();
    select(".options").html("");
  }
}
