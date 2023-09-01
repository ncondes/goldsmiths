function setup() {
   //create a canvas for the robot
   createCanvas(500, 500);
}

// Notes:
// []: optional

const colors = {
   primary: '#334D5C',
   secondary: '#55AD7A',
   blue: '#1E5D88',
   black: '#23292E',
   gray: '#D5D5D5',
};

function draw() {
   strokeWeight(6);

   // robots head
   fill(colors.primary);
   // rect (x, y, width, heigth)
   rect(100, 100, 300, 300, 20);

   // robots antenna
   fill(colors.gray);
   // ellipse(x, y, width, [heigth])
   ellipse(250, 70, 60, 60);

   fill(colors.black);
   // rect (x, y, width, heigth)
   rect(210, 80, 80, 30);

   // robots eyes
   // TODO: give the robot screwball eyes
   fill(colors.blue);
   // ellipse(x, y, width, [heigth])
   ellipse(175, 200, 80, 80);
   // point(x, y)
   point(185, 190);
   // ellipse(x, y, width, [heigth])
   ellipse(325, 200, 80, 80);
   // point(x, y)
   point(315, 190);

   // robots nose
   fill(colors.secondary);
   // triangle(x1, y1, x2, y2, x3, y3)
   // triangle(250, 220, 200, 300, 300, 300);

   beginShape();
   vertex(240, 220);
   vertex(260, 220);
   vertex(260, 260);
   vertex(280, 260);
   vertex(280, 280);
   vertex(250, 285);
   vertex(220, 280);
   vertex(220, 260);
   vertex(240, 260);
   vertex(240, 220);
   endShape();

   // robots ears
   // rect (x, y, width, heigth)
   rect(80, 180, 30, 100);
   // rect (x, y, width, heigth)
   rect(390, 180, 30, 100);

   // robots mouth
   noFill();
   // create a custom shape
   // \/\/\/
   // beginShape();
   // vertex(175, 340);
   // vertex(200, 370);
   // vertex(225, 340);
   // vertex(250, 370);
   // vertex(275, 340);
   // vertex(300, 370);
   // vertex(325, 340);
   // endShape();

   rect(175, 340, 150, 30);
   // line(x1, y1, x2, y2)
   line(200, 340, 200, 370);
   line(225, 340, 225, 370);
   line(250, 340, 250, 370);
   line(275, 340, 275, 370);
   line(300, 340, 300, 370);
   line(325, 340, 325, 370);
   vertex();
}
