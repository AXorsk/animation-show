window.onload = function() {
	var can = document.getElementById('canvas');
	can.width = 1000;
	can.height = 600;
	var c = can.getContext('2d');

	function randomColor() {
		var randomArray = ['red', 'red', 'yellow', 'yellow', 'green', 'green', 'blue', 'blue'];
		return randomArray[Math.floor(Math.random() * randomArray.length)];
	}

	function Circle(x, y, dx, dy, radius) {
		this.x = x;
		this.y = y;
		this.dx = dx;
		this.dy = dy;
		this.radius = radius;
		this.draw = function(flag) {
			c.beginPath();
			c.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
			c.globalAlpha = 0.8;
			c.strokeStyle = "black";
			if (flag) {
				if (colorFlag == 5) c.fillStyle = randomColor();
				else c.fillStyle = color;
				c.lineWidth = 5;
			} else {
				c.fillStyle = "white";
				c.lineWidth = 10;
			}
			c.stroke();
			c.fill();
		}
		this.update = function() {
			if (this.x + this.radius > can.width || this.x - this.radius < 0) {
				this.dx = -this.dx;
			}
			if (this.y + this.radius > can.height || this.y - this.radius < 0) {
				this.dy = -this.dy;
			}
			this.x += this.dx;
			this.y += this.dy;
			this.draw(true);
		}
	}
	var circleArray = [],
		countSec = 0,
		clearFlag = true,
		colorFlag = 0,
		color;

	function createball() {
		var radius = 20;
		var x = 200;
		var y = 100;
		var dx = Math.random() * 5;
		var dy = Math.random() * 5;
		if (colorFlag == 0) color = 'white';
		else if (colorFlag == 1) color = 'red';
		else if (colorFlag == 2) color = 'yellow';
		else if (colorFlag == 3) color = 'blue';
		else if (colorFlag == 4) color = 'green';
		circleArray.push(new Circle(x, y, dx, dy, radius));
	}

	function animate() {
		countSec++;
		if (countSec % 200 == 0) createball();
		if (clearFlag) c.clearRect(0, 0, can.width, can.height);
		var circle = new Circle(200, 100, 0, 0, 20);
		circle.draw(false);
		for (var i = 0; i < circleArray.length; i++) {
			circleArray[i].update();
		}
	}

	var id = setInterval(animate, 10);

	document.onkeydown = function(event) {
		var e = event || window.event || arguments.callee.caller.arguments[0];
		console.log(e.keyCode);
		if (e && e.keyCode == 32) circleArray.length = 0;
		if (e && e.keyCode == 187) {
			clearInterval(id);
			id = setInterval(animate, 1);
		}
		if (e && e.keyCode == 189) {
			clearInterval(id);
			id = setInterval(animate, 10);
		}
		if (e && e.keyCode == 16) colorFlag = (colorFlag + 1) % 6;
		if (e && e.keyCode == 13) clearFlag = !clearFlag;
		if (e && event.keyCode == 8) window.open("../index.html", "_self");
	}
}