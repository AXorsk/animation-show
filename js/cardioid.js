//canvas global variable
var canvas, w, h, ctx;

//global variable for cardioid
var total = 200,
	r, factor = 0;

window.onload = function() {

	//to create a canvas 
	canvas = document.createElement('canvas');
	ctx = canvas.getContext('2d');
	w = canvas.width;
	h = canvas.height = w;

	//to take radius
	r = w - 170;
	ctx.translate(w / 2, h / 2);

	document.body.appendChild(canvas);

	draw();
}

var colorArray = ['cyan', 'red', 'yellow', 'green', 'blue'], cnt = 0, pos = 0;

function calcColor() {
	cnt++;
	if (cnt == 10) {
		pos = (pos + 1) % colorArray.length;
		cnt = 0;
	}
	return colorArray[pos];
}

function draw() {

	//to clear the canvas
	ctx.fillStyle = "black";
	ctx.fillRect(-w / 2, -h / 2, w, h);

	ctx.lineWidth = '0.6';

	//to draw points and line
	for (let i = 0; i < total; i++) {

		var angle = 2 * Math.PI / total * i + Math.PI;
		var angle1 = 2 * Math.PI / total * ((i * factor) % total) + Math.PI;

		var x = r * Math.cos(angle);
		var y = r * Math.sin(angle);
		var x1 = r * Math.cos(angle1);
		var y1 = r * Math.sin(angle1);

		//to draw points this can be skipped, still a cardiod will be drawn
		ctx.beginPath();
		ctx.fillStyle = "white";
		ctx.arc(x, y, 2, 0, 2 * Math.PI);
		ctx.fill();
		ctx.closePath();

		//to draw required lines
		ctx.beginPath();
		ctx.strokeStyle = calcColor();
		ctx.moveTo(x, y);
		ctx.lineTo(x1, y1);
		ctx.stroke();
		ctx.closePath();
	}

	factor += 0.008;
	requestAnimationFrame(draw);
}