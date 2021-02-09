window.onload = function() {
    var canvas = document.getElementById("canvas"),
        context = canvas.getContext("2d"),
        width = canvas.width = window.innerWidth,
        height = canvas.height = window.innerHeight;

    let centerY = height * 0.5,
        centerX = width * .5,
        baseAlpha = 0.5,
        offset = height * .4,
        // offset = 10,
        speed = 0.1,
        angle = 0;


    render();

    function render() {
        let x = centerX + Math.sin(angle) * offset;

        // context.fillStyle = "rgba(0, 0, 0, " + alpha + ")"
        context.clearRect(0, 0, width, height);
        context.beginPath();
        context.arc(x, centerY, 100, 0, Math.PI * 2, false);
        context.fill();

        angle += speed;

        requestAnimationFrame(render);
    }

};