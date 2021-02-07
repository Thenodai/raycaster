class Obstacle {
    constructor(x1, y1, x2, y2) {
        this.a = p.createVector(x1, y1);
        this.b = p.createVector(x2, y2);
    }

    show() {
        p.stroke(255);
        p.line(this.a.x, this.a.y, this.b.x, this.b.y);
    }
}

export default Obstacle;