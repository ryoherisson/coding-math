window.onload = function() {
    let canvas = document.getElementById("canvas"),
        context = canvas.getContext("2d"),
        width = canvas.width = window.innerWidth,
        height = canvas.height = window.innerHeight,
        particles = [],
        numParticles = 100;

    for (let i = 0; i < numParticles; i++) {
        particles.push(particle.create(width / 2, height / 2, Math.random() * 5 + 2, Math.random() * Math.PI * 2, 0.1));
    }

    update();

    function update() {

        console.log(particles.length);

        context.clearRect(0, 0, width, height);

        for (let i = 0; i < numParticles; i++) {
            let p = particles[i];

            p.update();

            context.beginPath();
            context.arc(p.position.getX(), p.position.getY(), 4, 0, Math.PI * 2, false);
            context.fill();
        }
        removeDeadParticles();

        requestAnimationFrame(update);
    }

    function removeDeadParticles() {
        for (let i = particles.length - 1; i >= 0; i--) {
            let p = particles[i];

            if (p.position.getX() - p.radius > width ||
                p.position.getX() + p.radius < 0 ||
                p.position.getY() - p.radius > height ||
                p.position.getY() + p.radius < 0) {
                    particles.splice(i, 1);
                }
        }
    }

};