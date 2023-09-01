class Eraser {
  name = "eraser";
  icon = '<i class="fa-solid fa-eraser"></i>';
  size = createSlider(20, 300, 50);
  eraser = "square-eraser";
  erasers = {
    "square-eraser": "fa-square",
    "circle-eraser": "fa-circle",
  };

  constructor() {
    this.size.style("display", "none");
  }

  draw() {
    // erase if the mouse is pressed
    if (mouseIsPressed && Helpers.mouseIsInsideCanvas()) {
      // if mouse is pressed draw a white square
      push();
      strokeWeight(0);
      fill(255);
      if (this.eraser === "square-eraser") {
        rect(
          mouseX - this.size.value() / 2,
          mouseY - this.size.value() / 2,
          this.size.value(),
          this.size.value()
        );
      }
      if (this.eraser === "circle-eraser") {
        ellipse(mouseX, mouseY, this.size.value(), this.size.value());
      }
      pop();
    }
  }

  buildOption(id, variation) {
    return `
      <div class="options-item" id="${id}">
        <i class="fa-regular ${variation}"></i>
      </div>`;
  }

  buildHTML() {
    // create the html to be injected in the options element
    return Object.keys(this.erasers).reduce((acc, curr) => {
      acc += this.buildOption(curr, this.erasers[curr]);
      return acc;
    }, "");
  }

  handleOptionClick() {
    // generate the click handler for each option item
    Object.entries(this.erasers).forEach(([id, value]) => {
      select(`#${id}`).mouseClicked(() => {
        this.eraser = id;
        Helpers.removeBorders(".options-item");
        Helpers.addBorder(id);
      });
    });
  }

  options() {
    select(".options").html(`
      <label class="options-label">Size</label>
      <div style="height: 3rem"></div>
      <label class="options-label">Shape</label>
      <div class="options-stamp-grid">
        ${this.buildHTML()}
      </div>
    `);
    this.handleOptionClick();

    this.size.style("display", "block");

    this.size.position(width + 145, 150);
    this.size.style("width", "13rem");
    this.size.parent("options");
  }

  unselect() {
    loadPixels();
    select(".options").html("");
  }
}
