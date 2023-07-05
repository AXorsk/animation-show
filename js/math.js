var canvas = document.querySelector("canvas");
var context = canvas.getContext('2d');
canvas.width = 600;
canvas.height = 600;
var no = 250;
var a = 0;
var color = 360 * Math.random();

function animate() {
	a += 0.01;
	context.beginPath();
	var x = canvas.width / 2 + canvas.width / 2 * Math.cos(no * a) * Math.cos(a);
	var y = -(-canvas.height / 2 + canvas.width / 2 * Math.cos(no * a) * Math.sin(a));
	context.arc(x, y, 1, 0, 2 * Math.PI, false);
	context.strokeStyle = "hsl(" + color++ + ",100%,50%)";
	context.stroke();
	if (a > 6.5) {
		a = 0.01;
		no = Math.floor(Math.random() * 9) + 2;
		context.clearRect(0, 0, canvas.width, canvas.height);
	}
	if (no >= 80) {

		//context.strokeStyle ="hsl("+360+",100%,50%)";
		context.moveTo(canvas.width / 2, canvas.height / 2);
		context.lineTo(x, y);
		context.stroke();
	}
	requestAnimationFrame(animate);
}

requestAnimationFrame(animate);