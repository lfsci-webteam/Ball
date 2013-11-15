var records = new Array();

var width = screen.width
var height = screen.height

var debugMode = true;

document.addEventListener("deviceready", onDeviceReady, false);

function onDeviceReady() {
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