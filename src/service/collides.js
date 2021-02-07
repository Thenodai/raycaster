const collides = (ray, obstacle) => {
    const x1 = obstacle.a.x;
    const y1 = obstacle.a.y;
    const x2 = obstacle.b.x;
    const y2 = obstacle.b.y;

    const x3 = ray.position.x;
    const y3 = ray.position.y;
    const x4 = ray.position.x + ray.direction.x;
    const y4 = ray.position.y + ray.direction.y;

    const denominator = (x1 - x2) * (y3 - y4) - (y1 - y2) * (x3 - x4);
    if (denominator === 0) {
        return;
    }

    const t = ((x1 - x3) * (y3 - y4) - (y1 - y3) * (x3 - x4)) / denominator;
    const u = -((x1 - x2) * (y1 - y3) - (y1 - y2) * (x1 - x3)) / denominator;

    if (t > 0 && t < 1 && u > 1) {
        const x = x1 + t * (x2 - x1);
        const y = y1 + t * (y2 - y1);
        return p.createVector(x, y);
    }
}

export default collides;