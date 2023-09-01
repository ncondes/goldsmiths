class Spray {
  icon = '<i class="fa-solid fa-spray-can"></i>';
  name = "spray";
  // points holds how many pixels of paint for each mouse press.
  points = createInput("", "number");
  // spread describes how far to spread the paint from the mouse pointer
  spread = createInput("", "number");

  constructor() {
    this.points.style("display", "none");
    this.spread.style("display", "none");
    this.points.value(10);
    this.spread.value(10);
  }

  draw() {
    if (mouseIsPressed && Helpers.mouseIsInsideCanvas()) {
      for (let i = 0; i < Number(this.points.value()); i++) {
        point(
          random(
            mouseX - Number(this.spread.value()),
            mouseX + Number(this.spread.value())
          ),
          random(
            mouseY - Number(this.spread.value()),
            mouseY + Number(this.spread.value())
          )
        );
      }
    }
  }

  options() {
    select(".options").html(`
      <label class="options-label">Points</label>
      <div style="height: 3rem"></div>
      <label class="options-label">Spread</label>
      <div style="height: 3rem"></div>
    `);

    this.points.style("display", "block");
    this.spread.style("display", "block");

    this.points.position(width + 145, 150);
    this.points.style("width", "13rem");
    this.points.parent("options");

    this.spread.position(width + 145, 232);
    this.spread.style("width", "13rem");
    this.spread.parent("options");
  }

  unselect() {
    loadPixels();
    select(".options").html("");
  }
}
