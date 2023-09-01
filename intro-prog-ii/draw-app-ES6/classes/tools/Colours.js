class Colours {
  name = "colours";
  icon = '<i class="fa-solid fa-circle"></i>';

  constructor() {
    this.colorPicker = createColorPicker("#000000");
    this.colorPicker.style("border", "none");
    this.colorPicker.position(36, 452);

    // change the fill and stroke color when the user changes the color
    this.colorPicker.input(() => {
      fill(this.colorPicker.color());
      stroke(this.colorPicker.color());
    });
  }

  draw() {}

  setColour(colour) {
    this.colorPicker.value(colour);
    fill(this.colorPicker.color());
    stroke(this.colorPicker.color());
  }

  getColour() {
    return this.colorPicker.color();
  }
}
