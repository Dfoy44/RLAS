
var allBallCarrierArray = ["N1", "N2", "N3", "N4", "N5", "N6"];
var northTeam = [north1, north2, north3, north4, north5, north6]; 
var northTargetX = [mTargetx, mTargetx2, mTargetx3, mTargetx4, mTargetx5, mTargetx6]; 
var northTargetY = [mTargety, mTargety2, mTargety3, mTargety4, mTargety5, mTargety6]; 


var newLine = function (line) {
	
	$('.typed-cursor').remove();

	A = new Typed('#typedA', {
			strings : line,
			typeSpeed: 1,
			backSpeed: 0,
			fadeOut: true,
			cursorChar: '',
			loop: false
	});
}


newLine(['Welcome to Rugby League All-Stars!', 'Select Your Matchup']);

var gameStart = function () {
	
	newLine(['Get ready for some old-fashioned Rugby League']);
	
}


var inPossesion = function (player) {

var postline = ['on the ball', 'with it', 'has it', 'in control'];
var preline = ['now its', 'to', 'heres', 'now with'];
var random = Math.floor(Math.random() * Math.floor(4));
var randomB = Math.floor(Math.random() * Math.floor(4));

if (randomB >= 2) {
newLine([player.name + ' ' + postline[random]]);
}

if (randomB < 2) {
newLine([preline[random] + ' ' + player.name]);
}

}


var tacklerCredit = function (player) {

var postline = ['with the tackle', 'the tackler', 'makes the tackle', 'with the stop'];
var preline = ['tackle by', 'fine tackle', 'great defense from', 'well defended'];
var random = Math.floor(Math.random() * Math.floor(4));
var randomB = Math.floor(Math.random() * Math.floor(4));

if (randomB >= 2) {
newLine([player.name + ' ' + postline[random]]);
}

if (randomB < 2) {
newLine([preline[random] + ' ' + player.name]);
}

}


