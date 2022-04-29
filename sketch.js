let wall;
let particle;

function setup() {
    createCanvas(400, 400);
    wall = new Boundary(300, 100, 300, 300);
    particle = new Particle();
}

function draw() {
    background(0);
    wall.show();
    particle.update(mouseX, mouseY);
    particle.show();
    particle.look(wall);
    // ray.lookAt(mouseX, mouseY);

    // let point = ray.cast(wall);
    // console.log(point);
    // if (point) {
    //     fill(255);
    //     ellipse(point.x, point.y, 8, 8);
    // }
}