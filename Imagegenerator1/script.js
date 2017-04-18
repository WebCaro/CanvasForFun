count = 0;

window.onload(draw());

function draw() {

    // Counts until the canvas gets cleared
    count++;

    var colors = ['cornflower', 'crimson', 'peachpuff', 'chartreuse', 'seagreen','salmon', 'rosybrown', 'slategrey', 'tomato', 'cadetblue', 'firebrick'];
    var bgColors = ['whitesmoke', 'azure', 'aliceblue', 'papayawhip', 'oldlace', 'snow', 'linen']

    var ctx = document.getElementById('canvas').getContext('2d');

    // Specifies the background
    ctx.globalAlpha = Math.random();
    ctx.fillStyle = bgColors[Math.floor(Math.random() * bgColors.length)];
    ctx.fillRect(0,0,canvas.width,canvas.height);

    // Specifies the strokes of the curves
    ctx.lineWidth = Math.floor(Math.random() * 30) + 1;
    ctx.globalAlpha = 0.5;
    ctx.strokeStyle= colors[Math.floor(Math.random() * colors.length)];

    // Initial coordinates for the curves
    var cp1x = Math.floor(Math.random() * 130) + 110;
    var cp1y = Math.floor(Math.random() * 800) + 700;
    var cp2x = Math.floor(Math.random() * 10) + 40;
    var cp2y = 50;
    var mx = -105;
    var my = -520;

    // Number of repetitions until the canvas gets cleared
    loopcount = Math.floor(Math.random() * 15) + 5;
    if (count < loopcount) {
    // Loop that generates 3 to 7 Bezier Curves
        for (var i = 0; i < Math.floor(Math.random() * 7) + 3; i++) {
            mx+=50;
            my+=30;
            cp1x+=Math.floor(Math.random() * 100) + 1;
            cp2x+=120;
            cp1y+=10;
            ctx.beginPath();
            ctx.moveTo(mx,my);
            ctx.bezierCurveTo(cp1x,cp1y,cp2x,cp2y,1130,200);
            ctx.stroke();
        };
    }
    else {
        ctx.closePath;
        // Canvas gets cleared
        ctx.clearRect(0,0,canvas.width,canvas.height);
        count = 0;
        // New curves for before the loop starts again
        ctx.beginPath();
        ctx.moveTo(Math.floor(Math.random() * 230) + 10, Math.floor(Math.random() * 100) + 10);
             ctx.bezierCurveTo(Math.floor(Math.random() * 130) + 10,
                                  Math.floor(Math.random() * 800) + 100,
                                  Math.floor(Math.random() * 140) + 40,
                                  Math.floor(Math.random() * 210) + 140,
                                  1130,200);
             ctx.bezierCurveTo(Math.floor(Math.random() * 130) + 10,
                                  Math.floor(Math.random() * 600) + 100,
                                  Math.floor(Math.random() * 240) + 40,
                                  Math.floor(Math.random() * 310) + 140,
                                  1130,200);
             ctx.bezierCurveTo(Math.floor(Math.random() * 130) + 10,
                                  Math.floor(Math.random() * 800) + 100,
                                  Math.floor(Math.random() * 180) + 40,
                                  Math.floor(Math.random() * 210) + 140,
                                  1130,200);
        ctx.stroke();
    }
}
