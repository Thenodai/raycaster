import p5 from 'p5';
import Obstacle from './src/Obstacle';
import {HEIGHT, NUMBER_OF_WALLS, WIDTH} from './src/config/constants';
import collides from './src/service/collides';
import RayBall from './src/RayBall';

const sketch = (p) => {
    let obstacles = [];
    let rayBall;

    p.setup = () => {
        p.createCanvas(WIDTH, HEIGHT);
        for (let i = 0; i < NUMBER_OF_WALLS; i++) {
            obstacles.push(new Obstacle(p.random(WIDTH), p.random(HEIGHT), p.random(WIDTH), p.random(HEIGHT)));
        }
        rayBall = new RayBall();
    };

    p.draw = () => {
        p.background(0);

        rayBall.show();
        for (let i = 0; i < obstacles.length; i++) {
            obstacles[i].show();
        }

        rayBall.update(p.mouseX, p.mouseY);

        for (let i = 0; i < rayBall.rays.length; i++ ) {
            const ray = rayBall.rays[i];
            let record = Infinity;
            let closest = null
            for (let obstacle of obstacles) {
                const collidedPoint = collides(ray, obstacle);
                if (collidedPoint) {
                    const distance = p.dist(rayBall.position.x, rayBall.position.y, collidedPoint.x, collidedPoint.y);
                    if (distance < record) {
                        record = distance;
                        closest = collidedPoint;
                    }
                }
            }
            if (closest) {
                p.line(rayBall.position.x, rayBall.position.y, closest.x, closest.y)
            } else {
                ray.show();
            }
        }
    };
};

window.p = new p5(sketch, document.getElementById('root'));
