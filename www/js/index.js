var records = new Array();

var width = screen.width
var height = screen.height

var x = 0;
var y = 0;

var debugMode = true;

document.addEventListener("deviceready", onDeviceReady, false);

var angle = 0;
var x = 0;
var y = 0;
var w = (window.innerWidth - 50) / 2;
var h = (window.innerHeight - 50) / 2;

function ballCircle() {
	debug("ballCircle");
	x = w + w * Math.cos(angle * Math.PI / 180);
	y = h + h * Math.sin(angle * Math.PI / 180);

	$("#ball").css("left", x + 'px');
	$("#ball").css("top", y + 'px');

	angle++;
	if (angle > 360) {
		angle = 0;
	}
	setTimeout(ballCircle, 20);
}

function onDeviceReady() {
	ballCircle();
}

$(document).ready(function () {
});

function debug(text) {
	if (debugMode) {
		var curDate = new Date();
		console.log(curDate.getHours() + ":" + padstr(curDate.getMinutes(), 2, '0') + ":" + padstr(curDate.getSeconds(), 2, '0') + " : " + text);
	}
}

function padstr(instr, length, padchar) {
	str = instr.toString();
	while (str.length < length)
		str = padchar + str;
	
	return str;
}