import { WIDTH, HEIGHT } from './config/constants';
import Ray from './Ray';

class RayBall {
    constructor() {
        this.position = p.createVector(WIDTH / 2, HEIGHT / 2);
        this.rays = [];
        for (let i = 1; i < 360; i+= 10) {
            this.rays.push(new Ray(this.position, p.radians(i)));
        }
    }

    update (x, y) {
        this.position.set(x, y);
    }

    show() {
        p.fill(255);
        p.ellipse(this.position.x, this.position.y, 16);
    }
}

export default RayBall;