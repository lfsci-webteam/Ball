var records = new Array();

var width = screen.width
var height = screen.height

var x = 0;
var y = 0;

var debugMode = true;

document.addEventListener("deviceready", onDeviceReady, false);

var angle = 0;
var w = window.innerWidth;
var h = window.innerHeight;
var x = w / 2;
var vx = 0;
var ax = 0;
var y = w / 2;
var vy = 0;
var ay = 0;

function ballCircle() {
	debug("ballCircle");

	//navigator.accelerometer.getCurrentAcceleration(function (acceleration) {
	vx += ax;
	vy += ay;
	//}, function () { debug("Error"); });

	if ((vx < 0 && x + vx < 0) || (vx > 0 && x + vx > w - $("#ball").width()))
		vx = -0.8 * vx;
	x += vx;

	if ((vy < 0 && y + vy < 0) || (vy > 0 && y + vy > h - $("#ball").height()))
		vy = -0.8 * vy;
	y += vy;

	$("#ball").css("left", x + 'px');
	$("#ball").css("top", y + 'px');

	setTimeout(ballCircle, 20);
	//navigator.accelerometer.getCurrentAcceleration(function (acceleration) {
	//	$("#data").html("X: " + acceleration.x + "<br />" +
	//					"Y: " + acceleration.y + "<br />" +
	//					"Z: " + acceleration.z);
	//}, function () { debug("Error"); });
}

var watchAcc = navigator.accelerometer.watchAcceleration(function (acceleration) {
	ax = acceleration.x;
	ay = acceleration.y;
}, function () { debug("error"); }, { frequency: 20 });

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