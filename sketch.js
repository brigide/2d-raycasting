let walls = [];
let particle;

function setup() {
    createCanvas(800, 600);
    for (let i = 0; i < 5; i++) {
        let x1 = random(100, width - 100);
        let x2 = random(100, width - 100);
        let y1 = random(100, height - 100);
        let y2 = random(100, height - 100);
        walls.push(new Boundary(x1, y1, x2, y2));
    }

    //screen limit
    walls.push(new Boundary(0, 0, width, 0));
    walls.push(new Boundary(width, 0, width, height));
    walls.push(new Boundary(width, height, 0, height));
    walls.push(new Boundary(0, height, 0, 0));

    //house
    walls.push(new Boundary(100, 100, width - 100, 100));
    walls.push(new Boundary(width - 100, 100, width - 100, height - 100));
    walls.push(new Boundary(width - 100, height - 100, width - width / 2 + 10, height - 100));
    walls.push(new Boundary(width / 2 - 10, height - 100, 100, height - 100));
    walls.push(new Boundary(100, height - 100, 100, 100));

    particle = new Particle();
}

function draw() {
    if (keyIsDown(65)) { //key code for A
        particle.rotate(0.05);
    }
    else if (keyIsDown(68)) {
        particle.rotate(-0.05);
    }

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