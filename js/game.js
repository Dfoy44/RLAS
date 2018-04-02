//Audio/////////////////////////////////////////////////////

//Opening title
var aud = new Audio('images/Theme.mp3');

aud.play();
aud.volume = 0.09;

var crowdAmb = new Audio("images/amb.mpeg")
crowdAmb.volume = 0.22;
crowdAmb.loop = true;
var bigCheer = new Audio("images/cheer.mp3")
var build = new Audio("images/build.mp3")
build.volume = 0.99;

var boo = new Audio("images/boo.mp3")
boo.volume = 0.99;

var clap = new Audio("images/clap.mp3")
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

$("canvas").css("padding-left", "0");
$("canvas").css("padding-right", "0");
$("canvas").css("margin-left", "auto");
$("canvas").css("margin-right", "auto");
$("canvas").css("display", "block");

var init = 0;

// Cache elements
var $canvas = $('canvas');



// Background image
var bgReady = false;
var bgImage = new Image();
bgImage.onload = function() {
 bgReady = true;
};
bgImage.src = "images/background1.jpg";


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Images /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


// south image
var southReady = false;
var southImage = new Image();
var southImageCap = new Image();
var SouthImageSprite = new Image();
southImage.onload = function() {
 southReady = true;
};
southImage.src = "images/south.png";
southImageCap.src = "images/southRed.png";

// north image
var northReady = false;
var northImage = new Image();
var northImageCap = new Image();
var NorthImageSprite = new Image();
northImage.onload = function() {
 northReady = true;
};

//greenArrow
var greenArrow = new Image();

// Ball image
var ballReady = false;
var ballImage = new Image();
ballImage.onload = function() {
 ballReady = true;
};

// Target image
var targetReady = false;
var targetImage = new Image();
targetImage.onload = function() {
 targetReady = true;
};


northImage.src = "images/north.png";
northImageCap.src = "images/northRed.png";
ballImage.src = "images/Ball.png";
greenArrow.src = "images/GreenArrow.png";
targetImage.src = "images/red_star2.png";
SouthImageSprite.src = "sprites/SouthImageSpriteBasic.png";
NorthImageSprite.src = "sprites/NorthImageSpriteBasic.png";


//play on
var southPlayOn = 1;

//XorY
var XorY = "X";

//ball target
var ballCarrier = "N1";

//ball target
var teamPoss = "N";

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

//ticks
var gameTicks = 0;

//ballCarrierOBJ
var ballCarrierOBJ;

///////////////its a button thing/////////

function startGame() {
 $(".menu").hide();
 document.body.appendChild(canvas);
 DefensiveSpeed();
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
 gameStart();
 sendGame();


 var screen = $(window)
 if (screen.width() < 640) {
  viewport = document.querySelector("meta[name=viewport]");
  viewport.setAttribute('content', 'width=device-width, initial-scale=0.5, maximum-scale=0.5, user-scalable=0');
 }

 //styling
 $("canvas").css("padding-left", "0");
 $("canvas").css("padding-right", "0");
 $("canvas").css("margin-left", "auto");
 $("canvas").css("margin-right", "auto");
 $("canvas").css("display", "block");

}

function PTB() {

 //if the dummy half is near enough
 if (PTB == 1) {
  PTB = 0;
  $(PTBbutton).hide();
 }
 $(PTBbutton).hide();

}


////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Game objects ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//teams
var NorthTeam = "Yorkshire";
var SouthTeam = "Queensland";


//SouthImageSprite.src = loadPlayerSpriteS(SouthTeam);

//souths
var south1 = {
 name: "Queensland 1",
 speed: 76, // movement in pixels per second
 originalspeed: 76,
 passing: 100, // speed at which a player passes the ball
 onside: 1,
 strength: 50,
 x: 0,
 y: 0,
 lock: 0, // 1 they are onside and can run anywhere, 0 they need to get onside
 //animation
 currFrame: 0,
 frameX: [0, 21, 42, 63],
 ticks: 20
};
var south2 = {
 name: "Queensland 2",
 speed: 76, // movement in pixels per second
 originalspeed: 76,
 passing: 100, // speed at which a player passes the ball
 onside: 1,
 strength: 50,
 x: 0,
 y: 0,
 lock: 0,
 //animation
 currFrame: 0,
 frameX: [0, 21, 42, 63],
 ticks: 20
};
var south3 = {
 name: "Queensland 3",
 speed: 76, // movement in pixels per second
 originalspeed: 76,
 passing: 100, // speed at which a player passes the ball
 onside: 1,
 strength: 50,
 x: 0,
 y: 0,
 lock: 0,
 //animation
 currFrame: 0,
 frameX: [0, 21, 42, 63],
 ticks: 20
};

var south4 = {
 name: "Queensland 4",
 speed: 76, // movement in pixels per second
 originalspeed: 66,
 passing: 100, // speed at which a player passes the ball
 onside: 1,
 strength: 50,
 x: 0,
 y: 0,
 lock: 0,
 //animation
 currFrame: 0,
 frameX: [0, 21, 42, 63],
 ticks: 20
}

var south5 = {
 name: "Queensland 5",
 speed: 66, // movement in pixels per second
 originalspeed: 66,
 passing: 100, // speed at which a player passes the ball
 onside: 1,
 strength: 50,
 x: 0,
 y: 0,
 lock: 0,
 //animation
 currFrame: 0,
 frameX: [0, 21, 42, 63],
 ticks: 20
}

var south6 = {
 name: "Queensland 6",
 speed: 66, // movement in pixels per second
 originalspeed: 66,
 passing: 100, // speed at which a player passes the ball
 onside: 1,
 strength: 50,
 x: 0,
 y: 0,
 lock: 0,
 //animation
 currFrame: 0,
 frameX: [0, 21, 42, 63],
 ticks: 20
}


//norths
var north1 = {
 name: "Yorkshire 1",
 speed: 75, // movement in pixels per second
 originalspeed: 75,
 passing: 100, // speed at which a player passes the ball
 onside: 1,
 strength: 50,
 x: 0,
 y: 0,
 lock: 0,
 position: 'Player One',
 //animation
 currFrame: 0,
 frameX: [0, 20, 40, 60],
 ticks: 11
};
var north2 = {
 name: "Yorkshire 2",
 speed: 65, // movement in pixels per second
 originalspeed: 65,
 passing: 100, // speed at which a player passes the ball
 onside: 1,
 strength: 50,
 x: 0,
 y: 0,
 lock: 0,
 position: 'Player Two',
 //animation
 currFrame: 0,
 frameX: [0, 20, 40, 60],
 ticks: 17
};
var north3 = {
 name: "Yorkshire 3",
 speed: 70, // movement in pixels per second
 originalspeed: 75,
 passing: 100, // speed at which a player passes the ball
 onside: 1,
 strength: 50,
 x: 0,
 y: 0,
 lock: 0,
 position: 'Player Three',
 //animation
 currFrame: 0,
 frameX: [0, 20, 40, 60],
 ticks: 15
};
var north4 = {
 name: "Yorkshire 4",
 speed: 60, // movement in pixels per second
 originalspeed: 65,
 passing: 100, // speed at which a player passes the ball
 onside: 1,
 strength: 50,
 x: 0,
 y: 0,
 lock: 0,
 position: 'Player Four',
 //animation
 currFrame: 0,
 frameX: [0, 20, 40, 60],
 ticks: 10
};
var north5 = {
 name: "Yorkshire 5",
 speed: 70, // movement in pixels per second
 originalspeed: 75,
 passing: 100, // speed at which a player passes the ball
 onside: 1,
 strength: 50,
 x: 0,
 y: 0,
 lock: 0,
 position: 'Player Five',
 //animation
 currFrame: 0,
 frameX: [0, 20, 40, 60],
 ticks: 10
};

var north6 = {
 name: "Yorkshire 6",
 speed: 60, // movement in pixels per second
 originalspeed: 65,
 passing: 100, // speed at which a player passes the ball
 onside: 1,
 strength: 50,
 x: 0,
 y: 0,
 lock: 0,
 position: 'Player Six',
 //animation
 currFrame: 0,
 frameX: [0, 20, 40, 60],
 ticks: 12
};

//ball
var ball = {
 speed: 220, // movement in pixels per second
 team: 1, // 0 - free ball - 1 top team in posession - 2 bottom team in possession
 //bTargetx : 300,
 //bTargety : 300,

};

//click Marker
var target = {
 //postion
 x: 50,
 y: 50,
 //animation
 currFrame: 0,
 frameX: [0, 500, 1000, 1500, 2000, 2500, 3000],
 ticks: 20
};

//tackle count
var tackleCount = 0;

//score
var score = -1;
var scoreSouth = 0

//onside lines
var NorthOnside; //north
var SouthOnside; //south

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


//init 
 init = 1;


// Click Events ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//$canvas.on('mousedown', function(e) {



canvas.onmousedown = function(e) {

 var pageX = e.pageX - canvas.offsetLeft;
 var pageY = e.pageY - canvas.offsetTop;

 var isMobile = navigator.userAgent.match(/(iPad)|(iPhone)|(iPod)|(android)|(webOS)/i);

 if (isMobile) {

  //scale click for scaled canvas
  scaleX = innerWidth / canvas.width;
  scaleY = innerHeight / canvas.height;

  pageX = pageX / scaleX;
  pageY = pageY / scaleY;

 }

 // mousedown on a player should pass to that player
 // if epage equals any of the playerx and ys we will try and pass to that player?
 var pass = 0

 if (attackReady == 1 && ball.team == 1) {

  if (north1.x <= (pageX + 60) && pageX <= (north1.x + 60) && north1.y <= (pageY + 40) && pageY <= (north1.y + 40)) {
   pass = 1;
   ballCarrier = "N1";
   inPossesion(north1);
   if (north1.y > ball.y) {
    turnOverToSouth();
	newLine(['FORWARD PASS']);
   }
  }

  if (north2.x <= (pageX + 60) && pageX <= (north2.x + 60) && north2.y <= (pageY + 40) && pageY <= (north2.y + 40)) {
   pass = 1;
   ballCarrier = "N2";
   inPossesion(north2);
   if (north2.y > ball.y) {
    turnOverToSouth();
	newLine(['FORWARD PASS']);
   }
  }

  if (north3.x <= (pageX + 60) && pageX <= (north3.x + 60) && north3.y <= (pageY + 40) && pageY <= (north3.y + 40)) {
   pass = 1;
   ballCarrier = "N3";
   inPossesion(north3);
   if (north3.y > ball.y) {
    turnOverToSouth();
	newLine(['FORWARD PASS']);
   }
  }

  if (north4.x <= (pageX + 60) && pageX <= (north4.x + 60) && north4.y <= (pageY + 40) && pageY <= (north4.y + 40)) {
   pass = 1;
   ballCarrier = "N4";
   inPossesion(north4);
   if (north4.y > ball.y) {
    turnOverToSouth();
	newLine(['FORWARD PASS']);
   }
  }

  if (north5.x <= (pageX + 60) && pageX <= (north5.x + 60) && north5.y <= (pageY + 40) && pageY <= (north5.y + 40)) {
   pass = 1;
   ballCarrier = "N5";
   inPossesion(north5);
   if (north5.y > ball.y) {
    turnOverToSouth();
	newLine(['FORWARD PASS']);
   }
  }

  if (north6.x <= (pageX + 60) && pageX <= (north6.x + 60) && north6.y <= (pageY + 40) && pageY <= (north6.y + 40)) {
   pass = 1;
   ballCarrier = "N6";
   inPossesion(north6);
   if (north6.y > ball.y) {
    turnOverToSouth();
	newLine(['FORWARD PASS']);
   }
  }

 }

 if (pass == 0) {

  target.x = pageX;
  target.y = pageY;

  // on mouse down we set the targets of the user players
  //defensive positions

  mTargetx = pageX;
  mTargety = pageY;

  mTargetx2 = pageX - 100;
  mTargety2 = pageY;

  mTargetx3 = pageX + 100;
  mTargety3 = pageY;

  mTargetx4 = pageX - 200;
  mTargety4 = pageY;

  mTargetx5 = pageX + 200;
  mTargety5 = pageY;

  mTargetx6 = pageX;
  mTargety6 = pageY -150;
  
  //console.log("reg def");


  ////on mouse down when a player has the ball, that player dictates the target//////////

  if (ballCarrier == "N1") {
   mTargetx = pageX -20;
   mTargety = pageY;

   mTargetx2 = pageX - 100;
   mTargety2 = pageY -5;

   mTargetx3 = pageX + 200;
   mTargety3 = ball.y - 10;

   mTargetx4 = pageX - 100;
   mTargety4 = ball.y - 10;

   mTargetx5 = pageX + 300;
   mTargety5 = ball.y - 20;

   mTargetx6 = pageX - 200;
   mTargety6 = ball.y - 20;

  }
  
  if (ballCarrier == "N2") {
   mTargetx = pageX + 100;
   mTargety = ball.y - 5;

   mTargetx2 = pageX - 20;
   mTargety2 = pageY;

   mTargetx3 = pageX + 200;
   mTargety3 = ball.y - 10;

   mTargetx4 = pageX - 100;
   mTargety4 = ball.y - 10;

   mTargetx5 = pageX + 300;
   mTargety5 = ball.y - 20;

   mTargetx6 = pageX - 200;
   mTargety6 = ball.y - 20;

  }

  if (ballCarrier == "N3") {
   mTargetx = pageX - 100;
   mTargety = ball.y - 10;

   mTargetx2 = pageX - 200;
   mTargety2 = ball.y - 5;

   mTargetx3 = pageX - 20;
   mTargety3 = pageY;

   mTargetx4 = pageX - 300;
   mTargety4 = ball.y - 10;

   mTargetx5 = pageX + 100;
   mTargety5 = ball.y - 20;

   mTargetx6 = pageX - 400;
   mTargety6 = ball.y - 20;

  }

  if (ballCarrier == "N4") {
   mTargetx = pageX + 200;
   mTargety = ball.y - 20;

   mTargetx2 = pageX + 100;
   mTargety2 = ball.y - 10;

   mTargetx3 = pageX + 300;
   mTargety3 = ball.y - 5;

   mTargetx4 = pageX - 20;
   mTargety4 = pageY

   mTargetx5 = pageX + 400;
   mTargety5 = ball.y - 10;

   mTargetx6 = pageX - 100;
   mTargety6 = ball.y - 20;

  }

  if (ballCarrier == "N5") {
   mTargetx = pageX - 200;
   mTargety = ball.y - 20;

   mTargetx2 = pageX - 300;
   mTargety2 = ball.y - 20;

   mTargetx3 = pageX - 100;
   mTargety3 = ball.y - 10;

   mTargetx4 = pageX - 400;
   mTargety4 = ball.y - 5;

   mTargetx5 = pageX - 20;
   mTargety5 = pageY;

   mTargetx6 = pageX - 500;
   mTargety6 = ball.y - 10;

  }

  if (ballCarrier == "N6") {
   mTargetx = pageX + 200;
   mTargety = ball.y - 20;

   mTargetx2 = pageX + 300;
   mTargety2 = ball.y - 20;

   mTargetx3 = pageX + 400;
   mTargety3 = ball.y - 10;

   mTargetx4 = pageX + 100;
   mTargety4 = ball.y - 10;

   mTargetx5 = pageX + 500;
   mTargety5 = ball.y - 5;

   mTargetx6 = pageX - 20;
   mTargety6 = pageY;

  }


 }

 if (PTB == 1) {
  mTargety = ball.y - 120;
  mTargety2 = ball.y - 120;
  mTargety3 = ball.y - 120;
  mTargety4 = ball.y - 120;
  mTargety5 = ball.y - 120;
  mTargety6 = ball.y - 120;
 }

if (attackReady == 1 && ball.team == 2) {
	
	//refer to cpu plays

}
 
 
};

////testing inputs ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

if (init == 0) {
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

 var hTargetx = 100;
 var hTargety = 200;

 var hTargetx2 = 200;
 var hTargety2 = 200;

 var hTargetx3 = 300;
 var hTargety3 = 200;

 var hTargetx4 = 400;
 var hTargety4 = 200;

 var hTargetx5 = 500;
 var hTargety5 = 200;

 var hTargetx6 = 600;
 var hTargety6 = 500;

}

// Handle keyboard controls
var keysDown = {};

addEventListener("keydown", function(e) {
 keysDown[e.keyCode] = true;
}, false);

addEventListener("keyup", function(e) {
 delete keysDown[e.keyCode];
}, false);

// Reset the game when the player catches a north
var reset = function(message) {
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
 north1.x = 400;
 north1.y = 140;

 north2.x = 300;
 north2.y = 140;

 north3.x = 500;
 north3.y = 140;

 north4.x = 250;
 north4.y = 140;

 north5.x = 720;
 north5.y = 140;

 north6.x = 720;
 north6.y = 140;

 ball.x = north1.x;
 ball.y = north1.y + 20;

 if (init == 0) {
  var message = "Welcome to Rugby League All-Stars"


 }
 //alert(message);
};

function lockAll() {

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

function unlockAll() { 

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
var Try = function() {

 restoreSpeeds();
 onsideAll();
 $("#Pow").hide();
 

 buildOnce();
 bigCheer.play();
 crowdAmb.volume = 0.50;
 Cbuild = 0;


 
 if (score != -1) {
  $(BigScreen).text("TRY!");
  $(BigScreen).append("<h1>" + tryScorer() + "</h1>")
  $(BigScreen).addClass("large");
  tackleCount = 0;
 }
 


 if (init == 1 && ball.team == 1) {
  score++;
 }
 
  if (init == 1 && ball.team == 2) {
  scoreSouth++;
   var TS = tryScorer();
   console.log("TRYS!" + TS);
   sendTry(TS);
 }

 // Reset norths
 north1.x = 400;
 north1.y = 150;

 north2.x = 300;
 north2.y = 150;

 north3.x = 500;
 north3.y = 150;

 north4.x = 150;
 north4.y = 150;

 north5.x = 700;
 north5.y = 150;

 north6.x = 600;
 north6.y = 150;



 //souths
 south1.x = 400;
 south1.y = 250;

 south2.x = 300;
 south2.y = 250;

 south3.x = 500;
 south3.y = 250;

 south4.x = 100;
 south4.y = 250;

 south5.x = 700;
 south5.y = 250;

 south6.x = 500;
 south6.y = 550;

 //ball
 ball.x = 400;
 ball.y = 150;

 ballCarrier = "N1"
 lockAll();
 tackleCount = 0;

 $(PTBbutton).text("Tap Off");
 $(PTBbutton).show();
 $(PTBbutton).removeAttr('disabled');

 $(BigScreen).show();
 $("#BigScreen").css("left", ball.x + canvas.offsetLeft - 310);
 $("#BigScreen").css("top", ball.y + canvas.offsetTop + 150);

 $("#PTBbutton").css("left", ball.x + canvas.offsetLeft - 50);
 $("#PTBbutton").css("top", ball.y + canvas.offsetTop + 150);
 restoreSpeeds();


}

var TryNorth = function() {

 restoreSpeeds();
 onsideAll();
 $("#Pow").hide();
 


 buildOnce();
 bigCheer.play();
 crowdAmb.volume = 0.50;
 Cbuild = 0;

 if (score != -1) {
  $(BigScreen).text("TRY!");
  $(BigScreen).append("<h1>" + tryScorer() + "</h1>")
  $(BigScreen).addClass("large");
  tackleCount = 0;
 }

 if (init == 1 && ball.team == 1) {
  score++;
  var TS = tryScorer();
  console.log("TRYN!" + TS);
  sendTry(TS);
 }
 
  if (init == 1 && ball.team == 2) {
  scoreSouth++;
 }

 // Reset norths
 north1.x = 400;
 north1.y = 650;

 north2.x = 300;
 north2.y = 650;

 north3.x = 500;
 north3.y = 650;

 north4.x = 150;
 north4.y = 650;

 north5.x = 700;
 north5.y = 650;

 north6.x = 400;
 north6.y = 550;



 //souths
 south1.x = 400;
 south1.y = 750;

 south2.x = 300;
 south2.y = 750;

 south3.x = 500;
 south3.y = 750;

 south4.x = 100;
 south4.y = 750;

 south5.x = 700;
 south5.y = 750;

 south6.x = 500;
 south6.y = 750;

 //ball
 ball.x = 400;
 ball.y = 700;

 ballCarrier = "S1"
 lockAll();
 tackleCount = 0;

 $(PTBbutton).text("Tap Off");
 $(PTBbutton).show();
 $(PTBbutton).removeAttr('disabled');

 $(BigScreen).show();
 $("#BigScreen").css("left",canvas.offsetLeft + 100);
 $("#BigScreen").css("top", canvas.offsetTop + 400);

 $("#PTBbutton").css("left", canvas.offsetLeft + 300);
 $("#PTBbutton").css("top", canvas.offsetTop + 450);
 restoreSpeeds();

}


// Tackle occurs, set all targets to onside and lets play on
var tackle = function(message) {

if (ball.team == 1) {
 // set the onside if the mons have it
  NorthOnside = ball.y - 50;
 MdummyHalf = ball.x
}

 
if (ball.team == 2) {
 // set the onside if the mons have it
  SouthOnside = ball.y;
  NorthOnside = ball.y - 100;
} 

if (NorthOnside < 110) {
 // set the onside if too north
  NorthOnside = 110;
} 

 
 $("canvas").effect("shake", {
  distance: 10
 });

 restoreSpeeds();
 $("#Pow").hide();

 //ptb
 PTB = 1;
 southPlayOn = 0;


 var isMobile = navigator.userAgent.match(/(iPad)|(iPhone)|(iPod)|(android)|(webOS)/i);

 if (isMobile) {
  //scale click for scaled canvas
  scaleX = innerWidth / canvas.width;
  scaleY = innerHeight / canvas.height;
  var ballx = ball.x / scaleX;
  var bally = ball.y / scaleY;
 }

 var ballx = ball.x;
 var bally = ball.y;

 if (bally > 700) {
  bally = 400;
 }

 if (ball.team == 1) {
 $(PTBbutton).text("Play The Ball");
 $(PTBbutton).attr('disabled', 'disabled');
 $(PTBbutton).show();
 }
 
  if (ball.team == 2) {
 $(PTBbutton).text("Continue");
 $(PTBbutton).show();
 southPlayOn = 0;
 $(PTBbutton).attr('disabled', 'disabled');

 }

 $("#PTBbutton").css("left", ballx + canvas.offsetLeft - 50);
 $("#PTBbutton").css("top", bally + canvas.offsetTop + 150);

 //back 100 for the souths
 SouthOnside = ball.y + 100;

 if (PTB == 1 && ball.team == 1) {
  mTargety = ball.y - 100;
  mTargety2 = ball.y - 110;
  mTargety3 = ball.y - 110;
  mTargety4 = ball.y - 110;
  mTargety5 = ball.y - 130;
  mTargety6 = ball.y - 130;
 }

 //lock the player with the ball

 if (ballCarrier == "N1") {
  north1.lock = 1;
 }
 if (ballCarrier == "N2") {
  north2.lock = 1;
 }
 if (ballCarrier == "N3") {
  north3.lock = 1;
 }
 if (ballCarrier == "N4") {
  north4.lock = 1;
 }
 if (ballCarrier == "N5") {
  north5.lock = 1;
 }
 if (ballCarrier == "N6") {
  north6.lock = 1;
 }

 if (ballCarrier == "S1") {
  south1.lock = 1;
 }
 if (ballCarrier == "S2") {
  south2.lock = 1;
 }
 if (ballCarrier == "S3") {
  south3.lock = 1;
 }
 if (ballCarrier == "S4") {
  south4.lock = 1;
 }
 if (ballCarrier == "S5") {
  south5.lock = 1;
 }
 if (ballCarrier == "S6") {
  south6.lock = 1;
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

 dropOut();
 newPlay();

 //alert(message);
};


function forwardPass() {

 boo.play();
 crowdAmb.volume = 0.20;
 
 newLine("Forward Pass");


 if (score != -1) {
  $(BigScreen).text("FORWARD PASS");
  $(BigScreen).removeClass("large");
  tackleCount = 0;
 }

 
 // Reset norths
 north1.x = 400;
 north1.y = 150;

 north2.x = 300;
 north2.y = 150;

 north3.x = 500;
 north3.y = 150;

 north4.x = 150;
 north4.y = 150;

 north5.x = 700;
 north5.y = 150;

 north6.x = 400;
 north6.y = 150;



 //souths
 south1.x = 400;
 south1.y = 250;

 south2.x = 300;
 south2.y = 250;

 south3.x = 500;
 south3.y = 250;

 south4.x = 100;
 south4.y = 250;

 south5.x = 700;
 south5.y = 250;

 south6.x = 500;
 south6.y = 550;

 //ball
 ball.x = 400;
 ball.y = 150;

 ballCarrier = "N1"
 lockAll();
 tackleCount = 0;

 $(PTBbutton).text("Tap Off");
 $(PTBbutton).show();
 $(PTBbutton).removeAttr('disabled');

 $(BigScreen).show();
 onsideAll();



}


function turnOver() {

 boo.play();
 crowdAmb.volume = 0.20;
 onsideAll();
 

 if (score != -1) {
  $(BigScreen).text("Turnover - 5M Tap " + NorthTeam);
  $(BigScreen).removeClass("large");
  tackleCount = 0;
 }


 // Reset norths
 north1.x = 400;
 north1.y = 150;

 north2.x = 400;
 north2.y = 110;

 north3.x = 500;
 north3.y = 150;

 north4.x = 150;
 north4.y = 150;

 north5.x = 700;
 north5.y = 150;

 north6.x = 000;
 north6.y = 150;



 //souths
 south1.x = 400;
 south1.y = 250;

 south2.x = 300;
 south2.y = 250;

 south3.x = 500;
 south3.y = 250;

 south4.x = 100;
 south4.y = 250;

 south5.x = 700;
 south5.y = 250;

 south6.x = 500;
 south6.y = 550;

 //ball
 ball.x = 400;
 ball.y = 150;

 ballCarrier = "N1"
 lockAll();
 tackleCount = 0;

 $(PTBbutton).text("Tap Off");
 $(PTBbutton).show();
 $(PTBbutton).removeAttr('disabled');

 $(BigScreen).show();
 onsideAll();
 restoreSpeeds();


}

function turnOverToSouth() {

 boo.play();
 crowdAmb.volume = 0.20;
 NorthOnside = 650;
 onsideAll();

 if (score != -1) {
  $(BigScreen).text("Turnover - 5M Tap " + SouthTeam);
  $(BigScreen).removeClass("large");
  tackleCount = 0;
 }

 
 // Reset norths
 north1.x = 400;
 north1.y = 650;

 north2.x = 300;
 north2.y = 650;

 north3.x = 500;
 north3.y = 650;

 north4.x = 150;
 north4.y = 650;

 north5.x = 700;
 north5.y = 650;

 north6.x = 400;
 north6.y = 550;



 //souths
 south1.x = 400;
 south1.y = 750;

 south2.x = 300;
 south2.y = 750;

 south3.x = 500;
 south3.y = 750;

 south4.x = 100;
 south4.y = 750;

 south5.x = 700;
 south5.y = 750;

 south6.x = 500;
 south6.y = 750;

 //ball
 ball.x = 400;
 ball.y = 700;

 ballCarrier = "S1"
 lockAll();
 tackleCount = 0;

 $(PTBbutton).text("Tap Off");
 $(PTBbutton).show();
 $(PTBbutton).removeAttr('disabled');

 $(BigScreen).show();
 onsideAll();
 restoreSpeeds();



}


function endGame() {
	
	
 $(PTBbutton).removeAttr('disabled');
 buildOnce();
 crowdAmb.volume = 0.99;
 aud.play();
 aud.volume = 0.80;

 if (score != -1) {
  $(BigScreen).html("** Final Score **<br>" + NorthTeam + " : " + score + "<br>" + SouthTeam + " : " + scoreSouth);
  $(BigScreen).removeClass("large");
  tackleCount = 0;
 }

 if (init == 1) {
  time = 0;
 }

 //ball
 ball.x = 400;
 ball.y = 400;
 ballCarrier = "";
 lockAll();
 tackleCount = 99;

 $(PTBbutton).text("Game Over - Play Again");
 newLine(['And so ends another chapter in the great book of Rugby League']);
 $(PTBbutton).show();

 $(BigScreen).show();
 onsideAll();

}


function buildOnce() {

 if (Cbuild == 0) {
  build.play();
  Cbuild = 1;
 }

}

function PTBall() {

 if (PTB == 1) {
  PTB = 0
 }

 if (tackleCount > 98) {

  location.reload();

 }

 unlockAll();
 $(PTBbutton).hide();
 $(BigScreen).hide();
 start = 1;
 
 if(ball.team == 2) {
	CPULoadPlay();
	southPlayOn = 1;
 }
	 


}

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Update game objects //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


////key test ///

var update = function(modifier) {
 if (38 in keysDown) { // Player holding up
  //lockAll();

 }
 if (40 in keysDown) { // Player holding down

  //$(BigScreen).show();


 }





 //////targets section loops////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

 if (time == 0) {

  endGame();
 }

 if (tackleCount == 6 && ball.team == 2) {
  turnOver();
 }

  if (tackleCount == 6 && ball.team == 1) {
  turnOverToSouth();
 }

 

 //the cheeky minus 1 start
 if (score == -1 && init == 1 && clicked == 1) {
  Try();
 }


 //near the line excitement
 if (ball.y > 600) {
  crowdAmb.volume = .99;
  buildOnce();
 }

 

 var PassCheck = function() {
  var northTeam = [north1, north2, north3, north4, north5, north6];
  var southTeam = [south1, south2, south3, south4, south5, south6];
  var northBallCarrierArray = ["N1", "N2", "N3", "N4", "N5", "N6"];
  var southBallCarrierArray = ["S1", "S2", "S3", "S4", "S5", "S6"];

  //north with the ball 
  for (var i = 0; i < northTeam.length; i++) {
   if (ballCarrier == northBallCarrierArray[i]) {

    if (northTeam[i].x > ball.x + 30 || northTeam[i].x < ball.x - 30) {
     return true
    }
   }
  }
 }



 if (start == 1 && ball.team == 1) {

  if (ball.x < 200) {
   hTargetx = north1.x;
   hTargetx2 = north2.x;
   hTargetx3 = north3.x;
   hTargetx4 = north4.x;
   hTargetx5 = north5.x;
   hTargetx6 = ball.x - 20;


   hTargety = north1.y;
   hTargety2 = north2.y;
   hTargety3 = north3.y;
   hTargety4 = north4.y;
   hTargety5 = north5.y;
   hTargety6 = ball.y + 120;
  }

  if (ball.x > 200) {
   hTargetx = north1.x;
   hTargetx2 = north2.x;
   hTargetx3 = north3.x;
   hTargetx4 = north4.x;
   hTargetx5 = north5.x;
   hTargetx6 = ball.x - 20;


   hTargety = north1.y;
   hTargety2 = north2.y;
   hTargety3 = north3.y;
   hTargety4 = north4.y;
   hTargety5 = north5.y;
   hTargety6 = ball.y + 120;
  }




  if (ball.y > south1.y + 10 && ball.y > south2.y + 10 && ball.y > south3.y + 10 && ball.y > south4.y + 10 && ball.y > south5.y + 10) {
   hTargety6 = ball.y + 5
   hTargetx6 = ball.x;
   crowdAmb.volume = .99;
   buildOnce();
  }

  checkSouthRange();

 }

 // get behind the ball - may need to change this
 if (north1.y > ball.y && north1.onside == 1 && ball.team == 1) {
  mTargety = ball.y - 5
 }
 if (north2.y > ball.y && north2.onside == 1 && ball.team == 1) {
  mTargety2 = ball.y - 5
 }
 if (north3.y > ball.y && north3.onside == 1 && ball.team == 1) {
  mTargety3 = ball.y - 10
 }
 if (north4.y > ball.y && north4.onside == 1 && ball.team == 1) {
  mTargety4 = ball.y - 10
 }
 if (north5.y > ball.y && north5.onside == 1 && ball.team == 1) {
  mTargety5 = ball.y - 20
 }
 if (north6.y > ball.y && north6.onside == 1 && ball.team == 1) {
  mTargety6 = ball.y - 20
 }


 //north one needs to get to dummy half
 if (ballCarrier != "N1" && attackReady == 0) {
  mTargetx = ball.x;
  mTargety = ball.y;
 }

 if (ballCarrier == "N1" && attackReady == 0) {
  mTargetx2 = ball.x;
  mTargety2 = ball.y;
 }

 //dummy half 
 if (ballCarrier != "N1" && attackReady == 0 && north1.x >= ball.x - 20 && north1.x < ball.x + 20 && north1.y >= ball.y - 70 && north1.y <= ball.y - 10 && PTB == 0) {
  attackReady = 1;
  ballCarrier = "N1";

  north1.lock = 0;
  north2.lock = 0;
  north3.lock = 0;
  north4.lock = 0;
  north5.lock = 0;
  north6.lock = 0;
 }

 //dummy half if our N1 gets tackled
 if (ballCarrier == "N1" && attackReady == 0 && north2.x >= ball.x - 20 && north2.x < ball.x + 20 && north2.y >= ball.y - 70 && north2.y <= ball.y - 10 && PTB == 0) {
  attackReady = 1;
  ballCarrier = "N2";

  north1.lock = 0;
  north2.lock = 0;
  north3.lock = 0;
  north4.lock = 0;
  north5.lock = 0;
  north6.lock = 0;
 }
 



 //are they onside
 if (north1.y <= NorthOnside && north1.onside == 0 && attackReady == 1) {
  north1.onside = 1;
 }
 if (north2.y <= NorthOnside && north2.onside == 0 && attackReady == 1) {
  north2.onside = 1;
 }
 if (north3.y <= NorthOnside && north3.onside == 0 && attackReady == 1) {
  north3.onside = 1;
 }
 if (north4.y <= NorthOnside && north4.onside == 0 && attackReady == 1) {
  north4.onside = 1;
 }
 if (north5.y <= NorthOnside && north5.onside == 0 && attackReady == 1) {
  north5.onside = 1;
 }
 if (north6.y <= NorthOnside && north6.onside == 0 && attackReady == 1) {
  north6.onside = 1;
 }

 // are the south onside
 if (south1.y >= SouthOnside && south1.onside == 0 && attackReady == 1) {
  south1.onside = 1;
 }
 if (south2.y >= SouthOnside && south2.onside == 0 && attackReady == 1) {
  south2.onside = 1;
 }
 if (south3.y >= SouthOnside && south3.onside == 0 && attackReady == 1) {
  south3.onside = 1;
 }
 if (south4.y >= SouthOnside && south4.onside == 0 && attackReady == 1) {
  south4.onside = 1;
 }
 if (south5.y >= SouthOnside && south5.onside == 0 && attackReady == 1) {
  south5.onside = 1;
 }
 if (south6.y >= SouthOnside && south6.onside == 0 && attackReady == 1) {
  south6.onside = 1;
 }

 // gerrum onside
 if (north1.y > NorthOnside && north1.onside == 0) {
  mTargety = NorthOnside - 10;
 }
 if (north2.y > NorthOnside && north2.onside == 0) {
  mTargety2 = NorthOnside - 10;
 }
 if (north3.y > NorthOnside && north3.onside == 0) {
  mTargety3 = NorthOnside - 30;
 }
 if (north4.y > NorthOnside && north4.onside == 0) {
  mTargety4 = NorthOnside - 30;
 }
 if (north5.y > NorthOnside && north5.onside == 0) {
  mTargety5 = NorthOnside - 40;
 }
 if (north6.y > NorthOnside && north6.onside == 0) {
  mTargety6 = NorthOnside - 40;
 }

 // gerrum onside south
 if (south1.y < SouthOnside && south1.onside == 0) {
  hTargety = SouthOnside + 10;
 }
 if (south2.y < SouthOnside && south2.onside == 0) {
  hTargety2 = SouthOnside + 10;
 }
 if (south3.y < SouthOnside && south3.onside == 0) {
  hTargety3 = SouthOnside + 10;
 }
 if (south4.y < SouthOnside && south4.onside == 0) {
  hTargety4 = SouthOnside + 10;
 }
 if (south5.y < SouthOnside && south5.onside == 0) {
  hTargety5 = SouthOnside + 10;
 }
 if (south6.y < SouthOnside && south6.onside == 0) {
  hTargety6 = SouthOnside + 10;
 }

 // lock check
 if (north1.lock == 1) {
  mTargety = north1.y;
  mTargetx = north1.x;
 }
 if (north2.lock == 1) {
  mTargety2 = north2.y;
  mTargetx2 = north2.x;
 }
 if (north3.lock == 1) {
  mTargety3 = north3.y;
  mTargetx3 = north3.x;
 }
 if (north4.lock == 1) {
  mTargety4 = north4.y;
  mTargetx4 = north4.x;
 }
 if (north5.lock == 1) {
  mTargety5 = north5.y;
  mTargetx5 = north5.x;
 }
 if (north6.lock == 1) {
  mTargety6 = north6.y;
  mTargetx6 = north6.x;
 }


 // lock check
 if (south1.lock == 1) {
  hTargety = south1.y;
  hTargetx = south1.x;
 }
 if (south2.lock == 1) {
  hTargety2 = south2.y;
  hTargetx2 = south2.x;
 }
 if (south3.lock == 1) {
  hTargety3 = south3.y;
  hTargetx3 = south3.x;
 }
 if (south4.lock == 1) {
  hTargety4 = south4.y;
  hTargetx4 = south4.x;
 }
 if (south5.lock == 1) {
  hTargety5 = south5.y;
  hTargetx5 = south5.x;
 }
 if (south6.lock == 1) {
  hTargety6 = south6.y;
  hTargetx6 = south6.x;
 }




 //ball movement homing
 if (ballCarrier == "N1") {
  ball.bTargetx = north1.x + 3;
  ball.bTargety = north1.y + 14;
 }

 if (ballCarrier == "N2") {
  ball.bTargetx = north2.x + 3;
  ball.bTargety = north2.y + 14;
 }

 if (ballCarrier == "N3") {
  ball.bTargetx = north3.x + 3;
  ball.bTargety = north3.y + 14;
 }

 if (ballCarrier == "N4") {
  ball.bTargetx = north4.x + 3;
  ball.bTargety = north4.y + 14;
 }

 if (ballCarrier == "N5") {
  ball.bTargetx = north5.x + 3;
  ball.bTargety = north5.y + 14;
 }

 if (ballCarrier == "N6") {
  ball.bTargetx = north6.x + 3;
  ball.bTargety = north6.y + 14;
 }

 //ball movement homing
 if (ballCarrier == "S1") {
  ball.bTargetx = south1.x + 3;
  ball.bTargety = south1.y;
 }

 if (ballCarrier == "S2") {
  ball.bTargetx = south2.x + 3;
  ball.bTargety = south2.y;
 }

 if (ballCarrier == "S3") {
  ball.bTargetx = south3.x + 3;
  ball.bTargety = south3.y;
 }

 if (ballCarrier == "S4") {
  ball.bTargetx = south4.x + 3;
  ball.bTargety = south4.y;
 }

 if (ballCarrier == "S5") {
  ball.bTargetx = south5.x + 3;
  ball.bTargety = south5.y;
 }

 if (ballCarrier == "S6") {
  ball.bTargetx = south6.x + 3;
  ball.bTargety = south6.y;
 }

 //ball target

 bxDist = Math.abs(ball.x - ball.bTargetx);
 byDist = Math.abs(ball.y - ball.bTargety);


 if (bxDist > byDist) {

  if (ball.x > ball.bTargetx) {
   ball.x -= ball.speed * modifier;
  }

  if (ball.x < ball.bTargetx) {
   ball.x += ball.speed * modifier;
  }

 }

 if (byDist > bxDist) {

  if (ball.y > ball.bTargety) {
   ball.y -= ball.speed * modifier;
  }

  if (ball.y < ball.bTargety) {
   ball.y += ball.speed * modifier;
  }

 }

 if (XorY == "X") {
  XorY = "Y";
 }
 if (XorY == "Y") {
  XorY = "X";
 }


 if (PTB == 1) {
  dummyHalfInPosition();
 }

 //no going out of play	
 if (north5.x >= 640) {
  north5.x = 640;
 }
 if (north3.x >= 640) {
  north3.x = 640;
 }
 if (north2.x >= 640) {
  north2.x = 640;
 }
 if (north1.x >= 640) {
  north1.x = 640;
 }
 if (north4.x >= 640) {
  north4.x = 640;
 }
 if (north6.x >= 640) {
  north6.x = 640;
 }


 if (south5.x >= 640) {
  south5.x = 640;
 }
 if (south3.x >= 640) {
  south3.x = 640;
 }
 if (south2.x >= 640) {
  south2.x = 640;
 }
 if (south1.x >= 640) {
  south1.x = 640;
 }
 if (south4.x >= 640) {
  south4.x = 640;
 }
 if (south6.x >= 640) {
  south6.x = 640;
 }


 if (north6.x <= 45) {
  north6.x = 45;
 }
 if (north5.x <= 45) {
  north5.x = 45;
 }
 if (north3.x <= 45) {
  north3.x = 45;
 }
 if (north2.x <= 45) {
  north2.x = 45;
 }
 if (north1.x <= 45) {
  north1.x = 45;
 }
 if (north4.x <= 45) {
  north4.x = 45;
 }


 if (south5.x <= 45) {
  south5.x = 45;
 }
 if (south3.x <= 45) {
  south3.x = 45;
 }
 if (south2.x <= 45) {
  south2.x = 45;
 }
 if (south1.x <= 45) {
  south1.x = 45;
 }
 if (south4.x <= 45) {
  south4.x = 45;
 }
 if (south6.x <= 45) {
  south6.x = 45;
 }


 if (north6.y <= 58) {
  north6.y = 58;
 }
 if (north5.y <= 58) {
  north5.y = 58;
 }
 if (north3.y <= 58) {
  north3.y = 58;
 }
 if (north2.y <= 58) {
  north2.y = 58;
 }
 if (north1.y <= 58) {
  north1.y = 58;
 }
 if (north4.y <= 58) {
  north4.y = 58;
 }


 if (ball.team == 1) {
 
 if (south5.y >= 810) {
  south5.y = 810;
  SouthOnside = 805;
 }
 if (south3.y >= 810) {
  south3.y = 810;
  SouthOnside = 805;
 }
 if (south2.y >= 810) {
  south2.y = 810;
  SouthOnside = 805;
 }
 if (south1.y >= 810) {
  south1.y = 810;
  SouthOnside = 805;
 }
 if (south4.y >= 810) {
  south4.y = 810;
  SouthOnside = 805;
 }
 if (south6.y >= 810) {
  south6.y = 810;
  SouthOnside = 805;
 }

 }

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

 if (PassCheck() == true) {
  StayBackNorth();

 }


 // if the south have the ball////////////////////////////////////////////////////////////////////////////////////////////////// 		

 if (ball.team == 2) {

	CPULoadPlay();
	

  }


 ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
 //////collisions //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
 // Are they touching? is a tackle/intercept/catch made

 if (ball.team == 1) { //the north team is team one

  if (ball.y > 810) {
   TryNorth();
  }

  var tackler = 0;


  if ((south1.x <= ball.x + 30 && south1.x > ball.x - 30) && (south1.y <= ball.y + 3 && ball.y <= south1.y + 20)) {
   tackler = south1;
  }
  if ((south2.x <= ball.x + 30 && south2.x > ball.x - 30) && (south2.y <= ball.y + 3 && ball.y <= south2.y + 20)) {
   tackler = south2;
  }
  if ((south3.x <= ball.x + 30 && south3.x > ball.x - 30) && (south3.y <= ball.y + 3 && ball.y <= south3.y + 20)) {
   tackler = south3;
  }
  if ((south4.x <= ball.x + 30 && south4.x > ball.x - 30) && (south4.y <= ball.y + 3 && ball.y <= south4.y + 20)) {
   tackler = south4;
  }
  if ((south5.x <= ball.x + 30 && south5.x > ball.x - 30) && (south5.y <= ball.y + 3 && ball.y <= south5.y + 20)) {
   tackler = south5;
  }
  if ((south6.x <= ball.x + 30 && south6.x > ball.x - 30) && (south6.y <= ball.y + 3 && ball.y <= south6.y + 20)) {
   tackler = south6;
   clap.play();
  }


  if (tackler != 0 && attackReady == 1 && TackleBroken(tackler) == false && tackler.onside == 1 && !ballInAir()) {
   ++tackleCount;
   tackle();
   tacklerCredit(tackler);
   sendTackle(tackler);
  }

  if (tackler != 0 && init == 0) {
   reset("tackle : " + tackleCount);
  }


 }

 if (ball.team == 2) { //the north team is team two

  if (ball.y < 100) {
   Try();
  }

  var tackler = 0;


  if ((north1.x <= ball.x + 30 && north1.x > ball.x - 30) && (north1.y <= ball.y + 20 && ball.y <= north1.y + 3)) {
   tackler = north6;
  }
  if ((north2.x <= ball.x + 30 && north2.x > ball.x - 30) && (north2.y <= ball.y + 20 && ball.y <= north2.y + 3)) {
   tackler = north2;
  }
  if ((north3.x <= ball.x + 30 && north3.x > ball.x - 30) && (north3.y <= ball.y + 20 && ball.y <= north3.y + 3)) {
   tackler = north3;
  }
  if ((north4.x <= ball.x + 30 && north4.x > ball.x - 30) && (north4.y <= ball.y + 20 && ball.y <= north4.y + 3)) {
   tackler = north4;
  }
  if ((north5.x <= ball.x + 30 && north5.x > ball.x - 30) && (north5.y <= ball.y + 20 && ball.y <= north5.y + 3)) {
   tackler = north5;
  }
  if ((north6.x <= ball.x + 30 && north6.x > ball.x - 30) && (north6.y <= ball.y + 20 && ball.y <= north6.y + 3)) {
   tackler = north1;
   clap.play();
  }


  if (tackler != 0 && attackReady == 1 && TackleBroken(tackler) == false && tackler.onside == 1 && !ballInAir()) {
   ++tackleCount;
   tackle();
   tacklerCredit(tackler);
   sendTackle(tackler);
  }

  if (tackler != 0 && init == 0) {
   reset("tackle : " + tackleCount);
  }


 }

 
};

// Draw everything ////////////////////////////////////////////////////////////////////////////////////////////////////////////////



var render = function() {

 if (inplay == 1) {


  if (bgReady) {
   ctx.drawImage(bgImage, 0, 0);
  }

  if (targetReady) {
   ctx.drawImage(targetImage, spriteFrame(target), 0, 500, 500, target.x - 15, target.y - 15, 30, 30);
  };


 }



 if (northReady) {
  stopStillNorth();
  //ctx.drawImage(northImage, north1.x, north1.y);
  //ctx.drawImage(northImage, north2.x, north2.y);
  //ctx.drawImage(northImage, north3.x, north3.y);
  //ctx.drawImage(northImage, north4.x, north4.y);
  //ctx.drawImage(northImageCap, north5.x, north5.y);
  //ctx.drawImage(northImageCap, north6.x, north6.y);
  ctx.drawImage(NorthImageSprite, spriteFrame(north1), 0, 21, 26, north1.x - 10, north1.y, 30, 40);
  ctx.drawImage(NorthImageSprite, spriteFrame(north2), 0, 21, 26, north2.x - 10, north2.y, 30, 40);
  ctx.drawImage(NorthImageSprite, spriteFrame(north3), 0, 21, 26, north3.x - 10, north3.y, 30, 40);
  ctx.drawImage(NorthImageSprite, spriteFrame(north4), 0, 21, 26, north4.x - 10, north4.y, 30, 40);
  ctx.drawImage(NorthImageSprite, spriteFrame(north5), 0, 21, 26, north5.x - 10, north5.y, 30, 40);
  ctx.drawImage(NorthImageSprite, spriteFrame(north6), 0, 21, 26, north6.x - 10, north6.y, 30, 40);
 }

 if (ballReady) {

  ctx.drawImage(ballImage, ball.x - 4, ball.y - 2);
  ctx.drawImage(greenArrow, ballCarrierOBJ.x - 4, ballCarrierOBJ.y - 24);
 }

 if (southReady) {
  stopStillSouth();
  //ctx.drawImage(southImageCap, south1.x, south1.y);
  //ctx.drawImage(southImage, south2.x, south2.y);
  //ctx.drawImage(southImage, south3.x, south3.y);
  //ctx.drawImage(southImage, south4.x, south4.y);
  //ctx.drawImage(southImage, south5.x, south5.y);
  //ctx.drawImage(southImage, south6.x, south6.y);
  ctx.drawImage(SouthImageSprite, spriteFrame(south1), 0, 21, 26, south1.x - 10, south1.y, 30, 40);
  ctx.drawImage(SouthImageSprite, spriteFrame(south2), 0, 21, 26, south2.x - 10, south2.y, 30, 40);
  ctx.drawImage(SouthImageSprite, spriteFrame(south3), 0, 21, 26, south3.x - 10, south3.y, 30, 40);
  ctx.drawImage(SouthImageSprite, spriteFrame(south4), 0, 21, 26, south4.x - 10, south4.y, 30, 40);
  ctx.drawImage(SouthImageSprite, spriteFrame(south5), 0, 21, 26, south5.x - 10, south5.y, 30, 40);
  ctx.drawImage(SouthImageSprite, spriteFrame(south6), 0, 21, 26, south6.x - 10, south6.y, 30, 40);
 }




 if (start == 1) {
  time--;

 }

 var timeString = time.toString();
 var min = timeString.substring(0, 2);
 var sec = timeString.substring(2, 4);



 // Score - Heads Up Display
 ctx.fillStyle = "rgb(250, 250, 250)";
 ctx.font = "16px HeadsUp";
 ctx.textAlign = "left";
 ctx.textBaseline = "top";
 ctx.font = "16px EuroTag";
 ctx.fillText("RUGBY  LEAGUE  ALL-STARS", 235, 0);
 ctx.font = "24px HeadsUp";
 ctx.fillStyle = "rgb(250, 250, 250)";
 ctx.fillText("Tackle: " + tackleCount, 540, 55);
 ctx.fillText("Time: " + min + ":" + sec, 540, 40);
 ctx.fillText(NorthTeam + " " + score, 50, 40);
 ctx.fillText(SouthTeam + " " + scoreSouth, 50, 55);
 //ticks
 gameTicks++;
 matchUpdate();
};



// The main game loop
 var main = function() {
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

