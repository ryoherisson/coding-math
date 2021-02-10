window.onload = function() {
    var canvas = document.getElementById("canvas"),
        context = canvas.getContext("2d"),
        width = canvas.width = window.innerWidth,
        height = canvas.height = window.innerHeight,
        ship = particle.create(width/2, height/2, 0, 0),
        thrust = vector.create(0, 0),
        angle = 0,
        turningLeft = false,
        turningRight = false,
        thrusting = false;

    console.log("hello");


    update();

    window.addEventListener('keydown', e => {
        console.log(e.keyCode);
        switch(e.keyCode) {
            case 38: // up
                thrusting = true;
                break;
            case 37: // left
                turningLeft = true;
                break;
            case 39: // right
                turningRight = true;
                break;

            default:
                console.log(e.key);
                break;
        }
    });

    window.addEventListener('keyup', e => {
        console.log(e.keyCode);
        switch(e.keyCode) {
            case 38: // up
                thrusting = false;
                break;
            case 37: // left
                turningLeft = false;
                break;
            case 39: // right
                turningRight = false;
                break;

            default:
                break;
        }
    });

    // window.addEventListener('mousemove', e => {
    //     ship.position.setX(e.clientX);
    //     ship.position.setY(e.clientY);
    // });

    function update() {
        context.clearRect(0, 0, width, height);

        if (turningLeft) {
            angle -= 0.05;
        }
        if (turningRight) {
            angle += 0.05;
        }

        thrust.setAngle(angle);

        if(thrusting) {
            thrust.setLength(0.01);
        } else {
            thrust.setLength(0);
        }

        ship.accelerate(thrust);
        ship.update();

        // context.beginPath();
        // context.arc(ship.position.getX(), ship.position.getY(), 10, 0, Math.PI * 2, false);
        // context.fill();

        context.save();
        context.translate(ship.position.getX(), ship.position.getY());
        context.rotate(angle);

        context.beginPath();
        context.moveTo(10, 0);
        context.lineTo(-10, -7);
        context.lineTo(-10, 7);
        context.lineTo(10, 0);
        if(thrusting) {
            context.moveTo(-10, 0);
            context.lineTo(-18, 0);
        }
        context.stroke();

        context.restore();

        if (ship.position.getX() > width) {
            ship.position.setX(0);
        }
        if (ship.position.getX() < 0) {
            ship.position.setX(width);
        }
        if (ship.position.getY() > height) {
            ship.position.setY(0);
        }
        if (ship.position.getY() < 0) {
            ship.position.setY(height);
        }


        requestAnimationFrame(update);
    }
}