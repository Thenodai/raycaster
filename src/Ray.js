class Ray {
    constructor(position, angle) {
        this.position = position;
        this.direction = p.createVector(Math.cos(angle), Math.sin(angle));
    }

    show() {
        p.stroke(255);
        p.push();
        p.translate(this.position.x, this.position.y);
        p.line(0, 0, this.direction.x * 1000, this.direction.y * 1000);
        p.pop();
    }
}

export default Ray;
