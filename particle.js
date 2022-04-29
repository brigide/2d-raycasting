class Particle {
    constructor() {
        this.pos = createVector(width / 2, height / 2);
        this.rays = [];
        for (let a = 0; a < 360; a += 10) {
            this.rays.push(new Ray(this.pos, radians(a)));
        }
    }

    show() {
        fill(255);
        ellipse(this.pos.x, this.pos.y, 4);
        for (let ray of this.rays) {
            ray.show();
        }
    }

    look(wall) {
        for (let ray of this.rays) {
            const point = ray.cast(wall);
            if (point) {
                line(this.pos.x, this.pos.y, point.x, point.y);
            }
        }
    }

    update(x, y) {
        this.pos.set(x, y);
    }
}