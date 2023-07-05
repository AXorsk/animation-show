$(function() {
	setTimeout(function() {
		var i = 1;
		var id = setInterval(function() {
			$("div").css('opacity', i / 10);
			i++;
			if (i == 10) clearInterval(id);
		}, 50)
	}, 2000);
})

function left() {
	$(".left").css({
		'transform': 'rotateX(360deg)',
		'transition': 'all 2s ease'
	});
	setTimeout(function() {
		window.open("html/first.html", "_self");
	}, 2500);
}

function middle() {
	$(".middle").css({
		'transform': 'rotateY(360deg)',
		'transition': 'all 2s ease'
	});
	setTimeout(function() {
		window.open("html/second.html", "_self");
	}, 2500);
}

function right() {
	$(".right").css({
		'transform': 'rotateZ(360deg)',
		'transition': 'all 2s ease'
	});
	setTimeout(function() {
		window.open("html/third.html", "_self");
	}, 2500);
}