class Pencil {
  icon = '<i class="fa-solid fa-pencil"></i>';
  name = "pencil";
  previousMousePosition = { x: -1, y: -1 };
  weight = createSlider(0.5, 20, 2, 0.5);
  pencils = {
    "small-pencil": 0.5,
    "medium-pencil": 3,
    "large-pencil": 10,
  };
  colours = {
    black: "#000000",
    red: "#ff0000",
    blue: "#0000ff",
  };

  constructor() {
    this.weight.style("display", "none");
  }

  setPreviousMousePosition(x, y) {
    this.previousMousePosition.x = x;
    this.previousMousePosition.y = y;
  }

  draw() {
    if (mouseIsPressed && Helpers.mouseIsInsideCanvas()) {
      // if the mouse is pressed check if there is a previous position
      if (this.previousMousePosition.x === -1) {
        this.setPreviousMousePosition(mouseX, mouseY);
      } else {
        // draw a line from the previous position to the current
        push();
        strokeWeight(this.weight.value());
        line(
          this.previousMousePosition.x,
          this.previousMousePosition.y,
          mouseX,
          mouseY
        );
        pop();
        // update the previous position
        this.setPreviousMousePosition(mouseX, mouseY);
      }
    } else {
      // if the user has released the mouse we set the previousMouse back to -1
      this.setPreviousMousePosition(-1, -1);
    }
  }

  buildOption(id, variation) {
    return `
      <div class="options-item" id="${id}">
        <i class="fa-solid fa-minus ${variation}"></i>
      </div>`;
  }

  buildFontWeightHTML() {
    const sizes = ["fa-2xs", "fa-sm", "fa-xl"];
    // create the html to be injected in the options element
    return Object.keys(this.pencils).reduce((acc, curr, i) => {
      acc += this.buildOption(curr, sizes[i]);
      return acc;
    }, "");
  }

  buildColoursHTML() {
    return Object.entries(this.colours).reduce((acc, [key, value]) => {
      acc += `<div class="options-item" id="${key}-color" style="background-color: #FFFFFF">
                <div class="options-item" style="width: 85%; height: 85%; background-color: ${value}"></div>
              </div>`;
      return acc;
    }, "");
  }

  handleOptionClick() {
    // generate the click handler for each option item
    Object.entries(this.pencils).forEach(([id, value]) => {
      select(`#${id}`).mouseClicked(() => {
        this.weight.value(value);
      });
    });
  }

  handleColourClick() {
    Object.entries(this.colours).forEach(([key, value]) => {
      select(`#${key}-color`).mouseClicked(() => {
        ColoursTool.setColour(value);
      });
    });
  }

  options() {
    select(".options").html(`
      <label class="options-label">Size</label>
      <div style="height: 3rem"></div>
      <label class="options-label">Presets</label>
      <div style="height: 1rem"></div>
      <span>Font Weight</span>
      <div class="options-stamp-grid">
        ${this.buildFontWeightHTML()}
      </div>
      <div style="height: 1rem"></div>
      <span>Colours</span>
      <div class="options-stamp-grid">
        ${this.buildColoursHTML()}
      </div>
    `);

    this.handleOptionClick();
    this.handleColourClick();

    this.weight.style("display", "block");

    this.weight.position(width + 145, 150);
    this.weight.style("width", "13rem");
    this.weight.parent("options");
  }

  unselect() {
    loadPixels();
    select(".options").html("");
  }
}
