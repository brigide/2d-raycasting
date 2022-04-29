class Particle {
    constructor() {
        this.pos = createVector(width / 2, height / 2);
        this.rays = [];
        this.heading = 0;
        for (let a = 0; a < 80; a += 1) {
            this.rays.push(new Ray(this.pos, radians(a)));
        }
    }

    rotate(angle) {
        this.heading += angle;
        for (let i = 0; i < this.rays.length; i++) {
            this.rays[i].setAngle(radians(i) + this.heading);
        }
    }

    show() {
        fill(255);
        ellipse(this.pos.x, this.pos.y, 4);
        for (let ray of this.rays) {
            ray.show();
        }
    }

    look(walls) {
        for (let ray of this.rays) {
            let closest = null;
            let record = Infinity; //we need to cast on the closest wall only
            for (let wall of walls) {
                const point = ray.cast(wall);

                if (point) {
                    const d = p5.Vector.dist(this.pos, point); //find the distance between pos and the current wall
                    if (d < record) { //update to the closest wall
                        record = d;
                        closest = point;
                    }
                }
            }
            if (closest) {
                stroke(255, 100);
                line(this.pos.x, this.pos.y, closest.x, closest.y);
            }
        }
    }

    update(x, y) {
        this.pos.set(x, y);
    }
}