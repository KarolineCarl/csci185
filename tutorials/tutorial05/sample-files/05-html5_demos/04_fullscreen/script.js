var requestFullscreen = function (ele) {
	if (ele.requestFullscreen) {
		ele.requestFullscreen();
	} else if (ele.webkitRequestFullscreen) {
		ele.webkitRequestFullscreen();
	} else if (ele.mozRequestFullScreen) {
		ele.mozRequestFullScreen();
	} else if (ele.msRequestFullscreen) {
		ele.msRequestFullscreen();
	} else {
		console.log('Fullscreen API is not supported.');
	}
};

var exitFullscreen = function () {
	if (document.exitFullscreen) {
		document.exitFullscreen();
	} else if (document.webkitExitFullscreen) {
		document.webkitExitFullscreen();
	} else if (document.mozCancelFullScreen) {
		document.mozCancelFullScreen();
	} else if (document.msExitFullscreen) {
		document.msExitFullscreen();
	} else {
		console.log('Fullscreen API is not supported.');
	}
};



// full screen everything:
document.getElementById('fs-doc-button').addEventListener('click', function(e) {
	e.preventDefault();
	requestFullscreen(document.documentElement);
});

document.getElementById('fs-exit-doc-button').addEventListener('click', function(e) {
	e.preventDefault();
	exitFullscreen();
});


// full screen video:
document.getElementById('fs-vid-button').addEventListener('click', function(e) {
	e.preventDefault();
	requestFullscreen(document.getElementById('video'));
});

// full screen image:
document.getElementById('fs-img-button').addEventListener('click', function(e) {
	e.preventDefault();
	requestFullscreen(document.getElementById('image'));
});