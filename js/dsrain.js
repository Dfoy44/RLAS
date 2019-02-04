/*!
// rain.js - v0.0.3
// kurisubrooks.com
*/

// Amount of rainflakes
var rainMax = 75;

// rainflake Colours
var rainColor = ["#00FFFF", "#000FFF"];

// rain Entity
var rainEntity = "&#x2022;";

// Falling Velocity
var rainSpeed =  30.0;

// Minimum Flake Size
var rainMinSize = 4;

// Maximum Flake Size
var rainMaxSize = 5;

// Refresh Rate (in milliseconds)
var rainRefresh = 50;

// Additional Styles
var rainStyles = "cursor: default; -webkit-user-select: none; -moz-user-select: none; -ms-user-select: none; -o-user-select: none; user-select: none;";

/*
// End of Configuration
// ----------------------------------------
// Do not modify the code below this line
*/

var rain = [],
	pos = [],
	coords = [],
	lefr = [],
	marginBottom,
	marginRight;

function randomise(range) {
	rand = Math.floor(range * Math.random());
	return rand;
}

function initRain() {
	var rainSize = rainMaxSize - rainMinSize;
	marginBottom = document.body.scrollHeight - 350;
	marginRight = document.body.clientWidth - 150;

	for (i = 0; i <= rainMax; i++) {
		coords[i] = 0;
		lefr[i] = Math.random() * 15;
		pos[i] = 0.03 + Math.random() / 10;
		rain[i] = document.getElementById("flake" + i);
		rain[i].style.fontFamily = "inherit";
		rain[i].size = randomise(rainSize) + rainMinSize;
		rain[i].style.fontSize = rain[i].size + "px";
		rain[i].style.color = rainColor[randomise(rainColor.length)];
		rain[i].style.zIndex = 1000;
		rain[i].sink = rainSpeed * rain[i].size / 5;
		rain[i].posX = randomise(marginRight - rain[i].size);
		rain[i].posY = randomise(2 * marginBottom - marginBottom - 2 * rain[i].size);
		rain[i].style.left = rain[i].posX + "px";
		rain[i].style.top = rain[i].posY + "px";
	}

	moverain();
}

function resize() {
	marginBottom = document.body.scrollHeight - 350;
	marginRight = document.body.clientWidth - 150;
}

function moverain() {
	for (i = 0; i <= rainMax; i++) {
		coords[i] += pos[i];
		rain[i].posY += rain[i].sink;
		rain[i].style.left = rain[i].posX + lefr[i] * Math.sin(coords[i]) + "px";
		rain[i].style.top = rain[i].posY + "px";

		if (rain[i].posY >= marginBottom - 2 * rain[i].size || parseInt(rain[i].style.left) > (marginRight - 3 * lefr[i])) {
			rain[i].posX = randomise(marginRight - rain[i].size);
			rain[i].posY = 0;
		}
	}

	setTimeout("moverain()", rainRefresh);
}

for (i = 0; i <= rainMax; i++) {
	document.write("<span id='flake" + i + "' style='" + rainStyles + "position:absolute;top:-" + rainMaxSize + "'>" + rainEntity + "</span>");
}

window.addEventListener('resize', resize);
//window.addEventListener('load', initrain);
