class Player {
  constructor(x, y, width, height) {
    var options = {
      isStatic: true
    };

    this.body = Bodies.rectangle(x, y, width, height, options);

    this.width = width;
    this.height = height;
    this.image = loadImage("./assets/player.png");

    this.life1 = "lightgreen";
    this.life2 = "lightgreen";
    this.life3 = "lightgreen";
    this.sheild = "aqua";

    World.add(world, this.body);
  }

  life() {
    push();
   //write a correct code to show lives as three green rectangles in a strainght line.
   textSize(20);
    fill("blue");
    textFont("Book Antiqua");
    stroke("black");
    strokeWeight(2);
    text("Player", this.body.position.x - 25, 40);

    fill(this.life1);
    rect(this.body.position.x - 140, 50, 70, 30);
    fill(this.life2);
    rect(this.body.position.x - 70, 50, 70, 30);
    fill(this.life3);
    rect(this.body.position.x, 50, 70, 30);
    fill(this.sheild);
    rect(this.body.position.x + 70, 50, 70, 30);
   
    pop();
  }

 


  display() {
    var pos = this.body.position;
    var angle = this.body.angle;
    push();
    translate(pos.x, pos.y);
    rotate(angle);
    imageMode(CENTER);
    image(this.image, 0, 0, this.width, this.height);
    pop();
  }
}
