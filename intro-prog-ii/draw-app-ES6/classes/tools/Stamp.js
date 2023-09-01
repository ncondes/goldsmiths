class Stamp {
  name = "stamp";
  icon = '<i class="fa-solid fa-stamp"></i>';
  size = createSlider(10, 200, 50);
  amount = createSlider(1, 10, 1);
  fileInput = createFileInput((file) => {
    if (file.type === "image") {
      // create an image element with the file data
      this.userImg = createImg(file.data, "");
      this.userImg.hide();
      // inject the image in the options
      select("#user-stamp-upload").html(`
      <div class="options-stamp-image-container">
        <img
          src="${this.userImg.elt.src}"
          width="100%"
          height="100%"
          object-fit="cover"
          overflow="hidden"
        />
      </div>
      `);
      // remove the borders from the other options and add the border to the user image
      Helpers.removeBorders(".options-item");
      Helpers.addBorder("user-stamp-upload");
    } else {
      this.userImg = null;
    }
  });
  userImg = null;
  stamp = "star-stamp";
  stamps = [
    "star-stamp",
    "moon-stamp",
    "pencil-stamp",
    "character-stamp",
    "mushroom-stamp",
    "mickey-stamp",
    "rage-stamp",
    "happy-stamp",
    "meme-stamp",
  ];

  constructor() {
    this.size.style("display", "none");
    this.amount.style("display", "none");
    this.fileInput.style("display", "none");
  }

  getStamp() {
    const stamps = {
      "star-stamp": starStamp,
      "moon-stamp": moonStamp,
      "pencil-stamp": pencilStamp,
      "character-stamp": characterStamp,
      "mushroom-stamp": mushroomStamp,
      "mickey-stamp": mickeyStamp,
      "rage-stamp": rageStamp,
      "happy-stamp": happyStamp,
      "meme-stamp": memeStamp,
    };
    // if the user has uploaded an image, return that image, else return the stamp
    return this.userImg ?? stamps[this.stamp];
  }

  draw() {
    if (mouseIsPressed && Helpers.mouseIsInsideCanvas()) {
      if (this.amount.value() === 1) {
        const x = mouseX - this.size.value() / 2;
        const y = mouseY - this.size.value() / 2;

        image(this.getStamp(), x, y, this.size.value(), this.size.value());
      } else {
        for (let i = 0; i < this.amount.value(); i++) {
          const x = random(
            mouseX - this.size.value() / 2 - this.size.value(),
            mouseX - this.size.value() / 2 + this.size.value()
          );
          const y = random(
            mouseY - this.size.value() / 2 - this.size.value(),
            mouseY - this.size.value() / 2 + this.size.value()
          );
          image(this.getStamp(), x, y, this.size.value(), this.size.value());
        }
      }
    }
  }

  buildOption(stamp) {
    return `
      <div class="options-item" id="${stamp}">
        <div
          class="options-stamp-image-container"
          style="background-image: url(../../assets/${stamp}.png);"
        >
        </div>
      </div>`;
  }

  buildHTML() {
    // create the html to be injected in the grid
    return this.stamps.reduce((acc, curr, i) => {
      acc += this.buildOption(curr);
      return acc;
    }, "");
  }

  handleOptionClick() {
    // generate the click handler for each stamp item
    this.stamps.forEach((stamp) => {
      select(`#${stamp}`).mouseClicked(() => {
        this.stamp = stamp;
        Helpers.removeBorders(".options-item");
        Helpers.addBorder(stamp);
        // reset the user image
        this.userImg = null;
        this.fileInput.value("");
        select("#user-stamp-upload").html("");
      });
    });
  }

  options() {
    select(".options").html(`
      <label class="options-label">Size</label>
      <div style="height: 3rem"></div>
      <label class="options-label">Amount</label>
      <div style="height: 3rem"></div>
      <div class="options-stamp-grid">
        ${this.buildHTML()}
      </div>
      <label class="options-label" style="margin-top: 1.5rem">Upload your own</label>
      <div style="height: 3rem"></div>
      <div class="options-stamp-grid">
        <div class="options-item" id="user-stamp-upload"></div>
      </div>
    `);
    this.handleOptionClick();

    this.size.style("display", "block");
    this.amount.style("display", "block");
    this.fileInput.style("display", "block");

    this.size.position(width + 145, 150);
    this.size.style("width", "13rem");
    this.size.parent("options");

    this.amount.position(width + 145, 232);
    this.amount.style("width", "13rem");
    this.amount.parent("options");

    this.fileInput.position(width + 145, 506);
    this.fileInput.style("width", "12rem");
    this.fileInput.attribute("accept", "image/*");
    this.fileInput.parent("options");
  }

  unselect() {
    loadPixels();
    select(".options").html("");
  }
}
