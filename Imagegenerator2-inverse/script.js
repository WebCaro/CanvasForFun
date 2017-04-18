// Counter for counting repetitions until the canvas gets cleared
counter = 0;
function draw2() {

    var bgColors = ['cornflower', 'crimson', 'peachpuff', 'chartreuse', 'seagreen','salmon', 'rosybrown', 'slategrey', 'tomato', 'cadetblue', 'firebrick'];
    var colors = ['whitesmoke', 'azure', 'aliceblue', 'papayawhip', 'oldlace', 'snow', 'linen']

    var ctx = document.getElementById('canvas').getContext('2d');

    // Specifies background
    ctx.globalAlpha = Math.random();
    ctx.fillStyle = bgColors[Math.floor(Math.random() * bgColors.length)];
    ctx.fillRect(0,0,canvas.width,canvas.height);

    // Specifies the strokes of the curves
    ctx.lineWidth = Math.floor(Math.random() * 30) + 1;
    ctx.strokeStyle= colors[Math.floor(Math.random() * colors.length)];

    // Initial coordinates of the curves
    var mx = Math.floor(Math.random() * 110) + 105;
    var my = Math.floor(Math.random() * -200) -400;

    // Counts repetitions until the canvas gets cleared
    counter+=1;
    ctx.beginPath();
    if (counter < 3) {
        // Loop which generates 3 to 7 Bezier Curves
        for (var i = 0; i < Math.floor(Math.random() * 7) + 3; i++) {
            ctx.globalAlpha = Math.random();
            mx+=Math.floor(Math.random() * 170) + 10;
            my+=Math.floor(Math.random() * 140) + 20;
            ctx.moveTo(mx,my);
            ctx.bezierCurveTo(Math.floor(Math.random() * 130) + 10,
                              Math.floor(Math.random() * 800) + 100,
                              Math.floor(Math.random() * 140) + 40,
                              Math.floor(Math.random() * 210) + 140,
                              1130,200);
            ctx.stroke();
        };
    }
    else {
        ctx.closePath();
        // Canvas gets cleared
        ctx.clearRect(0,0,canvas.width,canvas.height);
        counter = 0;
        // One new curve is generated
        ctx.beginPath()
        ctx.moveTo(Math.floor(Math.random() * 130) + 10, Math.floor(Math.random() * 130) + 10);
         ctx.bezierCurveTo(Math.floor(Math.random() * 130) + 10,
                              Math.floor(Math.random() * 800) + 100,
                              Math.floor(Math.random() * 140) + 40,
                              Math.floor(Math.random() * 210) + 140,
                              1130,200);
        ctx.stroke();
        ctx.closePath();
    }
};
