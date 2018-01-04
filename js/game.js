
//Audio/////////////////////////////////////////////////////

//Opening title
var aud = new Audio('images/Theme.mp3');
 
aud.play();
aud.volume = 0.09;

var crowdAmb = new Audio("images/amb.mpeg")
crowdAmb.volume = 0.22;
crowdAmb.loop = true;
var bigCheer = new Audio ("images/cheer.mp3")
var build = new Audio ("images/build.mp3")
build.volume = 0.99;

var boo = new Audio ("images/boo.mp3")
boo.volume = 0.99;

var clap = new Audio ("images/clap.mp3")
clap.volume = 0.99;

////////////////////////audio end////////////////////////////////

//its the start button
$(function() {
    $("#StartButton").delay(50).fadeIn(500);
});

// Create the canvas
var canvas = document.createElement("canvas");
var ctx = canvas.getContext("2d");
canvas.width = 700;
canvas.height = 900;
var init = 0;

// Cache elements
var $canvas = $('canvas');

// Background image
var bgReady = false;
var bgImage = new Image();
bgImage.onload = function () {
	bgReady = true;
};
bgImage.src = "images/background.png";


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Images /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


// south image
var southReady = false;
var southImage = new Image();
var southImageCap = new Image();
southImage.onload = function () {
	southReady = true;
};
southImage.src = "images/south.png";
southImageCap.src = "images/southRed.png";

// north image
var northReady = false;
var northImage = new Image();
var northImageCap = new Image();
northImage.onload = function () {
	northReady = true;
};

// Ball image
var ballReady = false;
var ballImage = new Image();
ballImage.onload = function () {
	ballReady = true;
};

northImage.src = "images/north.png";
northImageCap.src = "images/northRed.png";
ballImage.src = "images/Ball.png";

//ball target
var ballCarrier = "M1";

//time 
var time = 8000

//in play
var inplay = 0;

//big screen
var bigScreen = "WTE"

//display
var display;

//start
var start = 0;

//build
var Cbuild = 0;

//clicked
var clicked = 0;

///////////////its a button thing/////////

function startGame() {
	$( ".menu" ).hide();
	document.body.appendChild(canvas);
	//alert("oh my");
	//$(boom).text("DON'T PUSH ME");
	inplay = 1;
	$(StartButton).hide();
	//$(vid).hide();
	//$(Bpic).hide();
	aud.pause();
	crowdAmb.play();
	clicked = 1;
	gameInfo();
}

function PTB() {
	
	if (PTB == 1) {
		PTB = 0
		$(PTBbutton).hide();
	}
	$(PTBbutton).hide();
	
}


////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Game objects ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//souths
var south1 = {
	speed: 27, // movement in pixels per second
	passing: 100, // speed at which a player passes the ball
	onside : 1,
	x : 0,
	y : 0,
	lock : 0// 1 they are onside and can run anywhere, 0 they need to get onside
};
var south2 = {
	speed: 27, // movement in pixels per second
	passing: 100, // speed at which a player passes the ball
	onside : 1,
	x : 0,
	y : 0,
	lock : 0
};
var south3 = {
	speed: 27, // movement in pixels per second
	passing: 100, // speed at which a player passes the ball
	onside : 1,
	x : 0,
	y : 0,
	lock : 0
};

var south4 = {
	speed: 27, // movement in pixels per second
	passing: 100, // speed at which a player passes the ball
	onside : 1,
	x : 0,
	y : 0,
	lock : 0
}

var south5 = {
	speed: 27, // movement in pixels per second
	passing: 100, // speed at which a player passes the ball
	onside : 1,
	x : 0,
	y : 0,
	lock : 0
}

var south6 = {
	speed: 36, // movement in pixels per second
	passing: 100, // speed at which a player passes the ball
	onside : 1,
	x : 0,
	y : 0,
	lock : 0
}


//norths
var north1 = { 
	speed: 55, // movement in pixels per second
	passing: 100, // speed at which a player passes the ball
	onside : 1,
	x : 0,
	y : 0,
	lock : 0
};
var north2 = { 
	speed: 55, // movement in pixels per second
	passing: 100, // speed at which a player passes the ball
	onside : 1,
	x : 0,
	y : 0,
	lock : 0
};
var north3 = { 
	speed: 40, // movement in pixels per second
	passing: 100, // speed at which a player passes the ball
	onside : 1,
	x : 0,
	y : 0,
	lock : 0
};
var north4 = { 
	speed: 40, // movement in pixels per second
	passing: 100, // speed at which a player passes the ball
	onside : 1,
	x : 0,
	y : 0,
	lock : 0
};
var north5 = { 
	speed: 40, // movement in pixels per second
	passing: 100, // speed at which a player passes the ball
	onside : 1,
	x : 0,
	y : 0,
	lock : 0
};

var north6 = { 
	speed: 40, // movement in pixels per second
	passing: 100, // speed at which a player passes the ball
	onside : 1,
	x : 0,
	y : 0,
	lock : 0
};

//ball
var ball = { 
	speed: 220, // movement in pixels per second
	team: 1, // 0 - free ball - 1 top team in posession - 2 bottom team in possession
	//bTargetx : 300,
	//bTargety : 300,
};

//click Marker
var cursor = {
	x : 0,
	y : 0
};

//tackle count
var tackleCount = 0;

//score
var score = -1;

//onside lines
var Monside; //north
var Honside; //south

//dummy half
var attackReady = 1;

//ball start
ball.x = north1.x;
ball.y = north1.y + 20;

//the mark
var theTackled;

//locked
var locked = 1;

//PTB
var PTB = 0;





// Click Events ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//$canvas.on('mousedown', function(e) {

canvas.onmousedown =  function(e) {
		
// mousedown on a player should pass to that player
// if epage equals any of the playerx and ys we will try and pass to that player?
var pass = 0

if (attackReady == 1) {

	if 	( north1.x <= (e.pageX + 50)
		&& e.pageX <= (north1.x + 50)
		&& north1.y <= (e.pageY + 40)
		&& e.pageY <= (north1.y + 40)) 
		{	
		    pass = 1;
			ballCarrier = "M1";
			if (north1.y > ball.y){forwardPass();}
		}
	
	if 	( north2.x <= (e.pageX + 50)
		&& e.pageX <= (north2.x + 50)
		&& north2.y <= (e.pageY + 40)
		&& e.pageY <= (north2.y + 40)) 
		{	
			pass = 1;
			ballCarrier = "M2";	
			if (north2.y > ball.y){forwardPass();}
		}
		
	if 	( north3.x <= (e.pageX + 50)
		&& e.pageX <= (north3.x + 50)
		&& north3.y <= (e.pageY + 40)
		&& e.pageY <= (north3.y + 40)) 
		{	
			pass = 1;
			ballCarrier = "M3";	
			if (north3.y > ball.y){forwardPass();}
		}
		
	if 	( north4.x <= (e.pageX + 50)
		&& e.pageX <= (north4.x + 50)
		&& north4.y <= (e.pageY + 40)
		&& e.pageY <= (north4.y + 40)) 
		{	
			pass = 1;
			ballCarrier = "M4";	
			if (north4.y > ball.y){forwardPass();}
		}

	if 	( north5.x <= (e.pageX + 50)
		&& e.pageX <= (north5.x + 50)
		&& north5.y <= (e.pageY + 40)
		&& e.pageY <= (north5.y + 40)) 
		{	
			pass = 1;
			ballCarrier = "M5";	
			if (north5.y > ball.y){forwardPass();}
		}
		
	if 	( north6.x <= (e.pageX + 50)
		&& e.pageX <= (north6.x + 50)
		&& north6.y <= (e.pageY + 40)
		&& e.pageY <= (north6.y + 40)) 
		{	
			pass = 1;
			ballCarrier = "M6";	
			if (north6.y > ball.y){forwardPass();}
		}
		
}	


					
if (pass == 0){		

// on mouse down we set the targets of the user players

	mTargetx = e.pageX - 20;
	mTargety = e.pageY;

	mTargetx2 = e.pageX - 100;
	mTargety2 = e.pageY - 40;

	mTargetx3 = e.pageX + 100;
	mTargety3 = e.pageY - 40;
	
	mTargetx4 = e.pageX - 200;
	mTargety4 = e.pageY - 40;
	
	mTargetx5 = e.pageX + 200;
	mTargety5 = e.pageY - 40;
	
	mTargetx6 = e.pageX - 250;
	mTargety6 = e.pageY - 40;
	
	
	
	////on mouse down when a player has the ball, that player dictates the target//////////
	
	if (ballCarrier == "M2") {
		mTargetx = e.pageX + 100;
		mTargety = e.pageY -40;
		
		mTargetx2 = e.pageX -20;
		mTargety2 = e.pageY;
		
		mTargetx3 = e.pageX + 200;
		mTargety3 = e.pageY -40;

		mTargetx4 = e.pageX - 100;
		mTargety4 = e.pageY -40;
		
		mTargetx5 = e.pageX + 300;
		mTargety5 = e.pageY -40;
		
		mTargetx6 = e.pageX - 200;
		mTargety6 = e.pageY -40;
		
	}
		
	if (ballCarrier == "M3") {
		mTargetx = e.pageX - 100;
		mTargety = e.pageY - 40;
		
		mTargetx2 = e.pageX - 200;
		mTargety2 = e.pageY -40;
		
		mTargetx3 = e.pageX -20;
		mTargety3 = e.pageY;
		
		mTargetx4 = e.pageX - 300;
		mTargety4 = e.pageY -40;
		
		mTargetx5 = e.pageX + 100;
		mTargety5 = e.pageY -40;
		
		mTargetx6 = e.pageX - 400;
		mTargety6 = e.pageY -40;
		
	}
	
	if (ballCarrier == "M4") {
		mTargetx = e.pageX + 200;
		mTargety = e.pageY - 40;
		
		mTargetx2 = e.pageX + 100;
		mTargety2 = e.pageY -40;
		
		mTargetx3 = e.pageX + 300;
		mTargety3 = e.pageY -40;

		mTargetx4 = e.pageX -20;
		mTargety4 = e.pageY 
		
		mTargetx5 = e.pageX + 400;
		mTargety5 = e.pageY -40;
		
		mTargetx6 = e.pageX -100;
		mTargety6 = e.pageY -40;
		
	}
	
	if (ballCarrier == "M5") {
		mTargetx = e.pageX - 200;
		mTargety = e.pageY - 40;
		
		mTargetx2 = e.pageX - 300;
		mTargety2 = e.pageY -40;
		
		mTargetx3 = e.pageX - 100;
		mTargety3 = e.pageY -40;
		
		mTargetx4 = e.pageX  - 400;
		mTargety4 = e.pageY -40;
		
		mTargetx5 = e.pageX -20;
		mTargety5 = e.pageY;
		
		mTargetx6 = e.pageX -500;
		mTargety6 = e.pageY -40;
		
	}
	
		if (ballCarrier == "M6") {
		mTargetx = e.pageX + 200;
		mTargety = e.pageY - 40;
		
		mTargetx2 = e.pageX +300;
		mTargety2 = e.pageY -40;
		
		mTargetx3 = e.pageX +400;
		mTargety3 = e.pageY -40;
		
		mTargetx4 = e.pageX  +100;
		mTargety4 = e.pageY -40;
		
		mTargetx5 = e.pageX +500;
		mTargety5 = e.pageY -40;
		
		mTargetx6 = e.pageX -20;
		mTargety6 = e.pageY;
		
	}
	
	init = 1;
	
	
	}

};

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////testing inputs ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
 
 if (init == 0){
var mTargetx = 400;
var mTargety = 100;

var mTargetx2 = 350;
var mTargety2 = 100;

var mTargetx3 = 450;
var mTargety3 = 100;

var mTargetx4 = 450;
var mTargety4 = 100;

var mTargetx5 = 450;
var mTargety5 = 100;

var mTargetx6 = 450;
var mTargety6 = 100;


//south target

var hTargetx = 400;
var hTargety = 200;

var hTargetx2 = 400;
var hTargety2 = 200;

var hTargetx3 = 400;
var hTargety3 = 200;

var hTargetx4 = 400;
var hTargety4 = 200;

var hTargetx5 = 400;
var hTargety5 = 200;

var hTargetx6 = 500;
var hTargety6 = 500;

 }
 
// Handle keyboard controls
var keysDown = {};

addEventListener("keydown", function (e) {
	keysDown[e.keyCode] = true;
}, false);

addEventListener("keyup", function (e) {
	delete keysDown[e.keyCode];
}, false);

// Reset the game when the player catches a north
var reset = function (message) {
	south1.x = 400;
	south1.y = 300;
	
	south2.x = 300;
	south2.y = 300;
	
	south3.x = 500;
	south3.y = 300;
	
	south4.x = 200;
	south4.y = 300;
	
	south5.x = 700;
	south5.y = 300;
	
	south6.x = 300;
	south6.y = 400;
	
	
	

	// Throw the norths somewhere on the screen randomly
	north1.x =  400;
	north1.y =  140;
	
	north2.x =  300;
	north2.y =  140;
	
	north3.x =  500;
	north3.y =  140;
	
	north4.x =  250;
	north4.y =  140;
	
	north5.x =  720;
	north5.y =  140;
	
	north6.x =  720;
	north6.y =  140;
	
	ball.x = north1.x;
	ball.y = north1.y + 20;
	
	if (init == 0) {
	var message = "Welcome to Rugby League All-Stars"
	}
	//alert(message);
};


function lockAll () {

	north1.lock = 1;
	north2.lock = 1;		
	north3.lock = 1;
	north4.lock = 1;
	north5.lock = 1;
	north6.lock = 1;
	
	south1.lock = 1;
	south2.lock = 1;		
	south3.lock = 1;
	south4.lock = 1;
	south5.lock = 1;	
	south6.lock = 1;	
	
	locked = 1;
	
}	

function unlockAll () {

	north1.lock = 0;
	north2.lock = 0;		
	north3.lock = 0;
	north4.lock = 0;
	north5.lock = 0;
	north6.lock = 0;

	south1.lock = 0;
	south2.lock = 0;		
	south3.lock = 0;
	south4.lock = 0;
	south5.lock = 0;
	south6.lock = 0;
	
	locked = 0;
}	


function onsideAll() {
	
	north1.onside = 1;
	north2.onside = 1;		
	north3.onside = 1;
	north4.onside = 1;
	north5.onside = 1;
	north6.onside = 1;

	south1.onside = 1;
	south2.onside = 1;		
	south3.onside = 1;
	south4.onside = 1;
	south5.onside = 1;
	south6.onside = 1;
	
}



//Continue
function continueS() {
	$(BigScreen).hide();	
}




// Reset the game when the player catches a north
var Try = function () {
	
	buildOnce ();
	bigCheer.play();
	crowdAmb.volume = 0.50;
	Cbuild = 0;
	
	if (score != -1) {
	$(BigScreen).text("TRY!");
	$(BigScreen).addClass( "large" );
	tackleCount = 0;
	}
	
if (init == 1) {
	score ++;
	}
	
	// Reset norths
	north1.x =  400;
	north1.y =  150;
	
	north2.x =  300;
	north2.y =  150;
	
	north3.x =  500;
	north3.y =  150;
	
	north4.x =  150;
	north4.y =  150;
	
	north5.x =  700;
	north5.y =  150;
	
	north6.x =  000;
	north6.y =  150;

	
	
	//souths
	south1.x =  400;
    south1.y =  250;
	
	south2.x =  300;
	south2.y =  250;
	
	south3.x =  500;
	south3.y =  250;
	
	south4.x =  100;
	south4.y =  250;
	
	south5.x =  700;
	south5.y =  250;
	
	south6.x =  500;
	south6.y =  550;
	
	//ball
	ball.x = 400;
	ball.y = 150;
	
	ballCarrier = "M1"
	lockAll();
	tackleCount = 0;
		
	$(PTBbutton).text("Tap Off");
	$(PTBbutton).show();
	
	$(BigScreen).show();
	

}
	
	



// Tackle occurs, set all targets to onside and lets play on
var tackle = function (message) {
// set the onside if the mons have it
Monside = ball.y - 50;
MdummyHalf = ball.x
$( "canvas" ).effect( "shake",{distance:10});

//ptb
PTB = 1;
$(PTBbutton).text("Play The Ball");
$(PTBbutton).show();

//back 100 for the souths
Honside = ball.y + 100;

//lock the player with the ball

if (ballCarrier == "M1"){
	north1.lock = 1;
}
if (ballCarrier == "M2"){
	north2.lock = 1;
}
if (ballCarrier == "M3"){
	north3.lock = 1;
}
if (ballCarrier == "M4"){
	north4.lock = 1;
}
if (ballCarrier == "M5"){
	north5.lock = 1;
}
if (ballCarrier == "M6"){
	north6.lock = 1;
}


//get the central man to dummy half
attackReady = 0;


//your all off
north1.onside = 0;
north2.onside = 0;		
north3.onside = 0;
north4.onside = 0;
north5.onside = 0;	
north6.onside = 0;		
	

south1.onside = 0;
south2.onside = 0;		
south3.onside = 0;
south4.onside = 0;
south5.onside = 0;
south6.onside = 0;

		
	//alert(message);
};


function forwardPass () {
	
	boo.play();
	crowdAmb.volume = 0.20;
	
	
	if (score != -1) {
	$(BigScreen).text("FORWARD PASS - 10 Second Penalty");
	$(BigScreen).removeClass( "large" );
	tackleCount = 0;
	}
	
if (init == 1) {
	time = time -10;
	}
	
	// Reset norths
	north1.x =  400;
	north1.y =  150;
	
	north2.x =  300;
	north2.y =  150;
	
	north3.x =  500;
	north3.y =  150;
	
	north4.x =  150;
	north4.y =  150;
	
	north5.x =  700;
	north5.y =  150;
	
	north6.x =  000;
	north6.y =  150;

	
	
	//souths
	south1.x =  400;
    south1.y =  250;
	
	south2.x =  300;
	south2.y =  250;
	
	south3.x =  500;
	south3.y =  250;
	
	south4.x =  100;
	south4.y =  250;
	
	south5.x =  700;
	south5.y =  250;
	
	south6.x =  500;
	south6.y =  550;
	
	//ball
	ball.x = 400;
	ball.y = 150;
	
	ballCarrier = "M1"
	lockAll();
	tackleCount = 0;
		
	$(PTBbutton).text("Tap Off");
	$(PTBbutton).show();
	
	$(BigScreen).show();
	onsideAll();
	
	
	
}


function turnOver () {
	
	boo.play();
	crowdAmb.volume = 0.20;
	
	
	if (score != -1) {
	$(BigScreen).text("Turnover - 10 Second Penalty");
	$(BigScreen).removeClass( "large" );
	tackleCount = 0;
	}
	
if (init == 1) {
	time = time -10;
	}
	
	// Reset norths
	north1.x =  400;
	north1.y =  150;
	
	north2.x =  300;
	north2.y =  150;
	
	north3.x =  500;
	north3.y =  150;
	
	north4.x =  150;
	north4.y =  150;
	
	north5.x =  700;
	north5.y =  150;
	
	north6.x =  000;
	north6.y =  150;

	
	
	//souths
	south1.x =  400;
    south1.y =  250;
	
	south2.x =  300;
	south2.y =  250;
	
	south3.x =  500;
	south3.y =  250;
	
	south4.x =  100;
	south4.y =  250;
	
	south5.x =  700;
	south5.y =  250;
	
	south6.x =  500;
	south6.y =  550;
	
	//ball
	ball.x = 400;
	ball.y = 150;
	
	ballCarrier = "M1"
	lockAll();
	tackleCount = 0;
		
	$(PTBbutton).text("Tap Off");
	$(PTBbutton).show();
	
	$(BigScreen).show();
	onsideAll();
	
	
	
}


function endGame () {
	
	
	buildOnce ();
	crowdAmb.volume = 0.99;
	aud.play();
	aud.volume = 0.80;
	
	if (score != -1) {
	$(BigScreen).text("Final Score :  " + score);
	$(BigScreen).removeClass( "large" );
	tackleCount = 0;
	}
	
if (init == 1) {
	time = 0;
	}
	
	//ball
	ball.x = 400;
	ball.y = 150;
	
	lockAll();
	tackleCount = "G O";
		
	$(PTBbutton).text("Game Over - Play Again");
	$(PTBbutton).show();
	
	$(BigScreen).show();
	onsideAll();
	
}


function buildOnce () {

if (Cbuild == 0) { 
	build.play();
	Cbuild = 1;
	}

}

function PTBall() {
	
	if (PTB == 1) {
		PTB = 0
	}
	
	if (tackleCount == "G O"){
		
		 location.reload();
		
	}
	
	unlockAll ();
	$(PTBbutton).hide();
	$(BigScreen).hide();
	start = 1;
	
	
}

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Update game objects //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


////key test ///

var update = function (modifier) {
	if (38 in keysDown) { // Player holding up
		//lockAll();

	}
	if (40 in keysDown) { // Player holding down

		//$(BigScreen).show();
	
		
	}
	
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////targets section loops////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

if ( time == 0) {
	
	 endGame ();
}

if (tackleCount == 6) {
	turnOver();
}


//the cheeky minus 1 start
if (score == -1 && init == 1 && clicked == 1){
	Try(); }


//near the line excitement
if (ball.y > 600){
	crowdAmb.volume = .99;
	buildOnce ();
}
	
//souths need targets////////////////////////////////////////////////////////////////////////////////////////////////////////

if (start == 1){
	hTargetx = north1.x;
	hTargetx2 = north2.x;
	hTargetx3 = north3.x;
	hTargetx4 = north4.x;
	hTargetx5 = north5.x;
	hTargetx6 = ball.x -20;
	
	
	hTargety = north1.y;
	hTargety2 = north2.y;
	hTargety3 = north3.y;
	hTargety4 = north4.y;
	hTargety5 = north5.y;
	hTargety6 = south2.y + 200;
	
	if (ball.y > south1.y +10 && ball.y > south2.y +10 && ball.y > south3.y +10 && ball.y > south4.y +10 && ball.y > south5.y +10){
	hTargety6 = ball.y +10;
	crowdAmb.volume = .99;
	buildOnce();
	}
	
}
	
	// get behind the ball - may need to change this
if (north1.y > ball.y && north1.onside == 1 && ball.team == 1) {mTargety = ball.y -10}
if (north2.y > ball.y && north2.onside == 1 && ball.team == 1) {mTargety2 = ball.y -10}
if (north3.y > ball.y && north3.onside == 1 && ball.team == 1) {mTargety3 = ball.y -20}
if (north4.y > ball.y && north4.onside == 1 && ball.team == 1) {mTargety4 = ball.y - 20}
if (north5.y > ball.y && north5.onside == 1 && ball.team == 1) {mTargety5 = ball.y - 20}
if (north6.y > ball.y && north6.onside == 1 && ball.team == 1) {mTargety6 = ball.y - 20}

	
//north one needs to get to dummy half
if (ballCarrier != "M1" && attackReady == 0){
	mTargetx = ball.x;
	mTargety = ball.y;
}

if (ballCarrier == "M1" && attackReady == 0){
	mTargetx2 = ball.x;
	mTargety2 = ball.y;
}

//dummy half 
if (ballCarrier != "M1" && attackReady == 0 && north1.x >= ball.x -20 && north1.x < ball.x +20  && north1.y >= ball.y -70 && north1.y <= ball.y -10 && PTB == 0){
	attackReady = 1;
	ballCarrier = "M1";

	north1.lock = 0;
	north2.lock = 0;		
	north3.lock = 0;
	north4.lock = 0;
	north5.lock = 0;
	north6.lock = 0;
}

//dummy half if our m1 gets tackled
if (ballCarrier == "M1" && attackReady == 0 && north2.x >= ball.x -20 && north2.x < ball.x +20  && north2.y >= ball.y -70 && north1.y <= ball.y -10 && PTB == 0){
	attackReady = 1;
	ballCarrier = "M2";
	
	north1.lock = 0;
	north2.lock = 0;		
	north3.lock = 0;
	north4.lock = 0;
	north5.lock = 0;
	north6.lock = 0;
}

	
//are they onside
if (north1.y <= Monside && north1.onside == 0 && attackReady == 1) {north1.onside = 1}
if (north2.y <= Monside && north2.onside == 0 && attackReady == 1) {north2.onside = 1}
if (north3.y <= Monside && north3.onside == 0 && attackReady == 1) {north3.onside = 1}
if (north4.y <= Monside && north4.onside == 0 && attackReady == 1) {north4.onside = 1}
if (north5.y <= Monside && north5.onside == 0 && attackReady == 1) {north5.onside = 1}
if (north6.y <= Monside && north6.onside == 0 && attackReady == 1) {north6.onside = 1}

// are the south onside
if (south1.y >= Honside && south1.onside == 0 && attackReady == 1) {south1.onside = 1}
if (south2.y >= Honside && south2.onside == 0 && attackReady == 1) {south2.onside = 1}
if (south3.y >= Honside && south3.onside == 0 && attackReady == 1) {south3.onside = 1}
if (south4.y >= Honside && south4.onside == 0 && attackReady == 1) {south4.onside = 1}
if (south5.y >= Honside && south5.onside == 0 && attackReady == 1) {south5.onside = 1}
if (south6.y >= Honside && south6.onside == 0 && attackReady == 1) {south6.onside = 1}

// gerrum onside
if (north1.y > Monside && north1.onside == 0) {mTargety = Monside - 10}
if (north2.y > Monside && north2.onside == 0) {mTargety2 = Monside - 10}
if (north3.y > Monside && north3.onside == 0) {mTargety3 = Monside - 40}
if (north4.y > Monside && north4.onside == 0) {mTargety4 = Monside - 40}
if (north5.y > Monside && north5.onside == 0) {mTargety5 = Monside - 40}
if (north6.y > Monside && north6.onside == 0) {mTargety6 = Monside - 40}

// gerrum onside south
if (south1.y < Honside && south1.onside == 0) {hTargety = Honside + 10}
if (south2.y < Honside && south2.onside == 0) {hTargety2 = Honside + 10}
if (south3.y < Honside && south3.onside == 0) {hTargety3 = Honside + 10}
if (south4.y < Honside && south4.onside == 0) {hTargety4 = Honside + 10}
if (south5.y < Honside && south5.onside == 0) {hTargety5 = Honside + 10}
if (south6.y < Honside && south6.onside == 0) {hTargety6 = Honside + 10}

// lock check
if (north1.lock == 1) {mTargety = north1.y; mTargetx = north1.x; }
if (north2.lock == 1) {mTargety2 = north2.y; mTargetx2 = north2.x; }
if (north3.lock == 1) {mTargety3 = north3.y; mTargetx3 = north3.x; }
if (north4.lock == 1) {mTargety4 = north4.y; mTargetx4 = north4.x; }
if (north5.lock == 1) {mTargety5 = north5.y; mTargetx5 = north5.x; }
if (north6.lock == 1) {mTargety6 = north6.y; mTargetx6 = north6.x; }


// lock check
if (south1.lock == 1) {hTargety = south1.y; hTargetx = south1.x; }
if (south2.lock == 1) {hTargety2 = south2.y; hTargetx2 = south2.x; }
if (south3.lock == 1) {hTargety3 = south3.y; hTargetx3 = south3.x; }
if (south4.lock == 1) {hTargety4 = south4.y; hTargetx4 = south4.x; }
if (south5.lock == 1) {hTargety5 = south5.y; hTargetx5 = south5.x; }
if (south6.lock == 1) {hTargety6 = south6.y; hTargetx6 = south6.x; }




//ball movement homing
if (ballCarrier == "M1") {
	ball.bTargetx = north1.x + 10; 
    ball.bTargety = north1.y +14; 
}

if (ballCarrier == "M2") {
	ball.bTargetx = north2.x + 5; 
    ball.bTargety = north2.y +14; 
}	

if (ballCarrier == "M3") {
	ball.bTargetx = north3.x + 10; 
    ball.bTargety = north3.y +14; 
}

if (ballCarrier == "M4") {
	ball.bTargetx = north4.x + 10; 
    ball.bTargety = north4.y +14; 
}

if (ballCarrier == "M5") {
	ball.bTargetx = north5.x + 10; 
    ball.bTargety = north5.y +14; 
}

if (ballCarrier == "M6") {
	ball.bTargetx = north6.x + 10; 
    ball.bTargety = north6.y +14; 
}


		
	//ball target
	

	if (ball.y > ball.bTargety) { //
		ball.y -= ball.speed * modifier;
	}
	if (ball.y < ball.bTargety) { // 
		ball.y += ball.speed * modifier;
	}
	if (ball.x > ball.bTargetx) { // 
		ball.x -= ball.speed * modifier;
	}
	if (ball.x < ball.bTargetx) { // 
		ball.x += ball.speed * modifier;
	}

	//no going out of play	
	if (north5.x >= 640 ) {north5.x = 640;}
	if (north3.x >= 640 ) {north3.x = 640;}
	if (north2.x >= 640 ) {north2.x = 640;}
	if (north1.x >= 640 ) {north1.x = 640;}
	if (north4.x >= 640 ) {north4.x = 640;}
	if (north6.x >= 640 ) {north6.x = 640;}
	
	
	if (south5.x >= 640 ) {south5.x = 640;}
	if (south3.x >= 640 ) {south3.x = 640;}
	if (south2.x >= 640 ) {south2.x = 640;}
	if (south1.x >= 640 ) {south1.x = 640;}
	if (south4.x >= 640 ) {south4.x = 640;}
	if (south6.x >= 640 ) {south6.x = 640;}
	
	
	if (north6.x <= 45 ) {north6.x = 45;}
	if (north5.x <= 45 ) {north5.x = 45;}
	if (north3.x <= 45 ) {north3.x = 45;}
	if (north2.x <= 45 ) {north2.x = 45;}
	if (north1.x <= 45 ) {north1.x = 45;}
	if (north4.x <= 45 ) {north4.x = 45;}
	
	
	if (south5.x <= 45 ) {south5.x = 45;}
	if (south3.x <= 45 ) {south3.x = 45;}
	if (south2.x <= 45 ) {south2.x = 45;}
	if (south1.x <= 45 ) {south1.x = 45;}
	if (south4.x <= 45 ) {south4.x = 45;}
	if (south6.x <= 45 ) {south6.x = 45;}
	
	
	if (north6.y <= 58 ) {north6.y = 58;}
	if (north5.y <= 58 ) {north5.y = 58;}
	if (north3.y <= 58 ) {north3.y = 58;}
	if (north2.y <= 58 ) {north2.y = 58;}
	if (north1.y <= 58 ) {north1.y = 58;}
	if (north4.y <= 58 ) {north4.y = 58;}
	
	
	if (south5.y >= 810 ) {south5.y = 810; south5.onside == 1;}
	if (south3.y >= 810 ) {south3.y = 810; south3.onside == 1;}
	if (south2.y >= 810 ) {south2.y = 810; south2.onside == 1;}
	if (south1.y >= 810 ) {south1.y = 810; south1.onside == 1;}
	if (south4.y >= 810 ) {south4.y = 810; south4.onside == 1;}
	if (south6.y >= 810 ) {south6.y = 810; south6.onside == 1;}
	
	
	
	
	//north target
	if (north1.y > mTargety) { //
		north1.y -= north1.speed * modifier;
	}
	if (north1.y < mTargety) { // 
		north1.y += north1.speed * modifier;
	}
	
	if (north1.x > mTargetx) { // 
		north1.x -= north1.speed * modifier;
	}
	if (north1.x < mTargetx) { // 
		north1.x += north1.speed * modifier;
	}
	
	// target
	if (north2.y > mTargety2) { //
		north2.y -= north2.speed * modifier;
	}
	if (north2.y < mTargety2) { // 
		north2.y += north2.speed * modifier;
	}
	if (north2.x > mTargetx2) { // 
		north2.x -= north2.speed * modifier;
	}
	if (north2.x < mTargetx2) { // 
		north2.x += north2.speed * modifier;
	}
	
	// target
	if (north3.y > mTargety3) { //
		north3.y -= north3.speed * modifier;
	}
	if (north3.y < mTargety3) { // 
		north3.y += north3.speed * modifier;
	}
	if (north3.x > mTargetx3) { // 
		north3.x -= north3.speed * modifier;
	}
	if (north3.x < mTargetx3) { // 
		north3.x += north3.speed * modifier;
	}
	
		// target
	if (north4.y > mTargety4) { //
		north4.y -= north3.speed * modifier;
	}
	if (north4.y < mTargety4) { // 
		north4.y += north4.speed * modifier;
	}
	if (north4.x > mTargetx4) { // 
		north4.x -= north4.speed * modifier;
	}
	if (north4.x < mTargetx4) { // 
		north4.x += north4.speed * modifier;
	}
	
		// target
		
			
	if (north5.y > mTargety5) { //
		north5.y -= north5.speed * modifier;
	}
	if (north5.y < mTargety5) { // 
		north5.y += north5.speed * modifier;
	}
	if (north5.x > mTargetx5) { // 
		north5.x -= north5.speed * modifier;
	}
	if (north5.x < mTargetx5) { // 
		north5.x += north5.speed * modifier;
	}
	
	
	// target
		
			
	if (north6.y > mTargety6) { //
		north6.y -= north6.speed * modifier;
	}
	if (north6.y < mTargety6) { // 
		north6.y += north6.speed * modifier;
	}
	if (north6.x > mTargetx6) { // 
		north6.x -= north6.speed * modifier;
	}
	if (north6.x < mTargetx6) { // 
		north6.x += north6.speed * modifier;
	}
	
	
	//south Target
	if (south1.y > hTargety) { //
		south1.y -= south1.speed * modifier;
	}
	if (south1.y < hTargety) { // 
		south1.y += south1.speed * modifier;
	}
	if (south1.x > hTargetx) { // 
		south1.x -= south1.speed * modifier;
	}
	if (south1.x < hTargetx) { // 
		south1.x += south1.speed * modifier;
	}
	
	//target H2
	if (south2.y > hTargety2) { //
		south2.y -= south2.speed * modifier;
	}
	if (south2.y < hTargety2) { // 
		south2.y += south2.speed * modifier;
	}
	if (south2.x > hTargetx2) { // 
		south2.x -= south2.speed * modifier;
	}
	if (south2.x < hTargetx2) { // 
		south2.x += south2.speed * modifier;
	}
	
	//target H3
	if (south3.y > hTargety3) { //
		south3.y -= south3.speed * modifier;
	}
	if (south3.y < hTargety3) { // 
		south3.y += south3.speed * modifier;
	}
	if (south3.x > hTargetx3) { // 
		south3.x -= south3.speed * modifier;
	}
	if (south3.x < hTargetx3) { // 
		south3.x += south3.speed * modifier;
	}
	
	
		//target H4
	if (south4.y > hTargety4) { //
		south4.y -= south4.speed * modifier;
	}
	if (south4.y < hTargety4) { // 
		south4.y += south4.speed * modifier;
	}
	if (south4.x > hTargetx4) { // 
		south4.x -= south4.speed * modifier;
	}
	if (south4.x < hTargetx4) { // 
		south4.x += south4.speed * modifier;
	}
	
		//target H5
	if (south5.y > hTargety5) { //
		south5.y -= south5.speed * modifier;
	}
	if (south5.y < hTargety5) { // 
		south5.y += south5.speed * modifier;
	}
	if (south5.x > hTargetx5) { // 
		south5.x -= south5.speed * modifier;
	}
	if (south5.x < hTargetx5) { // 
		south5.x += south5.speed * modifier;
	}
	
			//target H6
	if (south6.y > hTargety6) { //
		south6.y -= south6.speed * modifier;
	}
	if (south6.y < hTargety6) { // 
		south6.y += south6.speed * modifier;
	}
	if (south6.x > hTargetx6) { // 
		south6.x -= south6.speed * modifier;
	}
	if (south6.x < hTargetx6) { // 
		south6.x += south6.speed * modifier;
	}
	
	
	
	
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////collisions //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Are they touching? is a tackle/intercept/catch made
	
	if (ball.team == 1){		//the north team is team one, all these collisions must be tackles
	
		if (ball.y > 810 ){
			Try();
		}
	
		if (
			( south1.x <= (ball.x + 40)
			&& ball.x <= (south1.x + 40)
			&& south1.y <= (ball.y + 3)
			&& ball.y <= (south1.y + 3))
			||
			( south2.x <= (ball.x + 40)
			&& ball.x <= (south2.x + 40)
			&& south2.y <= (ball.y + 3)
			&& ball.y <= (south2.y + 3))
			||
			( south3.x <= (ball.x + 40)
			&& ball.x <= (south3.x + 40)
			&& south3.y <= (ball.y + 3)
			&& ball.y <= (south3.y + 3))
			||
			( south4.x <= (ball.x + 40)
			&& ball.x <= (south4.x + 40)
			&& south4.y <= (ball.y + 3)
			&& ball.y <= (south4.y + 3))
			||
			( south5.x <= (ball.x + 40)
			&& ball.x <= (south5.x + 40)
			&& south5.y <= (ball.y + 3)
			&& ball.y <= (south5.y + 3))
			||
			( south6.x <= (ball.x + 40)
			&& ball.x <= (south6.x + 40)
			&& south6.y <= (ball.y + 3)
			&& ball.y <= (south6.y + 3))
			)
		
			{ 
			
				if (attackReady == 1){
				++tackleCount;
					//alert("a south makes the tackle");
						if (init == 0){
							reset("tackle : " + tackleCount ); 
						}
						else 
						{
							tackle();
							
							//full back tackle applause
							if ( south6.x <= (ball.x + 40)
								&& ball.x <= (south6.x + 40)
								&& south6.y <= (ball.y + 3)
								&& ball.y <= (south6.y + 3))
								{
									clap.play();
								}
							
							
						}
				}
			}
				
	} 
	 
};

// Draw everything ////////////////////////////////////////////////////////////////////////////////////////////////////////////////

var render = function () {
	
if (inplay == 1) {
	
	
		
	if (bgReady) {
		ctx.drawImage(bgImage, 0, 0);
	}

	if (southReady) {
		ctx.drawImage(southImageCap, south1.x, south1.y);
		ctx.drawImage(southImage, south2.x, south2.y);
		ctx.drawImage(southImage, south3.x, south3.y);
		ctx.drawImage(southImage, south4.x, south4.y);
		ctx.drawImage(southImage, south5.x, south5.y);
		ctx.drawImage(southImage, south6.x, south6.y);
	}

	if (northReady) {
		ctx.drawImage(northImage, north1.x, north1.y);
		ctx.drawImage(northImage, north2.x, north2.y);
		ctx.drawImage(northImage, north3.x, north3.y);
		ctx.drawImage(northImage, north4.x, north4.y);
		ctx.drawImage(northImageCap, north5.x, north5.y);
		ctx.drawImage(northImageCap, north6.x, north6.y);
	}
	
	if (ballReady){
		ctx.drawImage(ballImage, ball.x, ball.y);
	}
		
	if (start == 1 ){
		time--;
			
	}
	
	var timeString = time.toString();
	var min = timeString.substring(0, 2);
	var sec = timeString.substring(2, 4);
	
	
	
	// Score - Heads Up Display
	ctx.fillStyle = "rgb(250, 250, 250)";
	ctx.font = "24px HeadsUp";
	ctx.textAlign = "left";
	ctx.textBaseline = "top";
	ctx.font = "24px EuroTag";
	ctx.fillText("RUGBY  LEAGUE  ALL-STARS", 180, 10);
	ctx.font = "24px HeadsUp";
	ctx.fillStyle = "rgb(250, 250, 250)";
	ctx.fillText("Tackle: " + tackleCount, 200, 50);
	ctx.fillText("Time: " + min + ":" + sec, 560, 50);
	ctx.fillText("Score: " + score, 10, 50);
	ctx.fillText("Level: 1",  400, 50);
	;
	
}
	
};

// The main game loop
var main = function () {
	var now = Date.now();
	var delta = now - then;
	
	update(delta / 1000);
	render();
	
	then = now;

	// Request to do this again ASAP
	requestAnimationFrame(main);
};

// Cross-browser support for requestAnimationFrame
var w = window;
requestAnimationFrame = w.requestAnimationFrame || w.webkitRequestAnimationFrame || w.msRequestAnimationFrame || w.mozRequestAnimationFrame;

// Let's play this game!
var then = Date.now();
reset();
main();


