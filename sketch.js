let walls = [];
let particle;

function setup() {
    createCanvas(400, 400);
    for (let i = 0; i < 5; i++) {
        let x1 = random(width);
        let x2 = random(width);
        let y1 = random(height);
        let y2 = random(height);
        walls.push(new Boundary(x1, x2, y1, y2));
    }

    //screen limit
    walls.push(new Boundary(0, 0, width, 0));
    walls.push(new Boundary(width, 0, width, height));
    walls.push(new Boundary(width, height, 0, height));
    walls.push(new Boundary(0, height, 0, 0));

    //house
    // walls.push(new Boundary(75, 75, width - 75, 75));
    // walls.push(new Boundary(width - 75, 75, width - 75, height - 75));
    // walls.push(new Boundary(width - 75, height - 75, width - width / 2 + 10, height - 75));
    // walls.push(new Boundary(width / 2 - 10, height - 75, 75, height - 75));
    // walls.push(new Boundary(75, height - 75, 75, 75));

    particle = new Particle();
}

function draw() {
    background(0);
    for (let wall of walls) {
        wall.show();
    }
    
    particle.update(mouseX, mouseY);
    particle.show();
    particle.look(walls);
    // ray.lookAt(mouseX, mouseY);

    // let point = ray.cast(wall);
    // console.log(point);
    // if (point) {
    //     fill(255);
    //     ellipse(point.x, point.y, 8, 8);
    // }
}