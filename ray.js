class Ray {
    constructor(x, y) {
        this.pos = createVector(x, y);
        this.dir = createVector(1, 1);
    }

    show() {
        stroke(255);
        push();
        translate(this.pos.x, this.pos.y);
        line(0, 0, this.dir.x * 30, this.dir.y * 30);
        pop();
    }

    cast(wall) {
        const x1 = wall.a.x; //wall starting point
        const y1 = wall.a.y;
        const x2 = wall.b.x; //wall ending point
        const y2 = wall.b.y;

        const x3 = this.pos.x; //ray starting point
        const y3 = this.pos.y;
        const x4 = this.pos.x + this.dir.x; //ray ending point
        const y4 = this.pos.y + this.dir.y;

        const den = (x1 - x2) * (y3 - y4) - (y1 - y2) * (x3 - x4); //the formula's denominator
        if (den == 0) return;

        const t = ((x1 - x3) * (y3 - y4) - (y1 - y3) * (x3 - x4)) / den; //t's formula
        const u = - ((x1 - x2) * (y1 - y3) - (y1 - y2) * (x1 - x3)) / den; //u's formula

        // if 0 < t < 1 and 0 < u then the lines intercept
        if (t > 0 && t < 1 && u > 0) {
            return true;
        }
        return;
    }
}