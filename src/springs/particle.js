let particle = {
    position: null,
    velocity: null,
    raidus: 0,
    friction: 1.0,
    gravity:0,

    create: function(x, y, speed, direction, grav) {
        let obj = Object.create(this);
        obj.position = vector.create(x, y);
        obj.velocity = vector.create(0, 0);
        obj.velocity.setLength(speed);
        obj.velocity.setAngle(direction);
        obj.gravity = vector.create(0, grav || 0);
        return obj;
    },

    update: function() {
        this.velocity.addTo(this.gravity);
        this.position.addTo(this.velocity);
    }
};