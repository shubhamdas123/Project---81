canvas = document.getElementById("myCanvas");
ctx = canvas.getContext("2d");

function circle(centerX, centerY, color) {
    ctx.beginPath();
    ctx.strokeStyle = color;
    ctx.lineWidth = 5;
    ctx.arc(centerX, centerY, 40, 0, 2 * Math.PI);
    ctx.stroke();
}

circle(100, 100, "blue");
circle(200, 100, "black");
circle(300, 100, "red");
circle(150, 150, "yellow");
circle(250, 150, "green");