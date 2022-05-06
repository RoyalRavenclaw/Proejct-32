class Computer {
  constructor(x, y, width, height) {
    var options = {
      isStatic: true
    };

    this.body = Bodies.rectangle(x, y, width, height, options);

    this.width = width;
    this.height = height;
    this.image = loadImage("./assets/player.png");

    this.life1 = "red";
    this.life2 = "red";
    this.life3 = "red";
        World.add(world, this.body);
  }
  life() {
    push();
    textSize(20);
    fill("red");
    textFont("Book Antiqua");
    stroke("black");
    strokeWeight(2);
    text("Computer", this.body.position.x - 32, 40);

    fill(this.life1);
    rect(this.body.position.x - 105, 50, 70, 30);
    fill(this.life2);
    rect(this.body.position.x - 35, 50, 70, 30);
    fill(this.life3);
    rect(this.body.position.x + 35, 50, 70, 30);
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
