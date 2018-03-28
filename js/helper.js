//

//
var allBallCarrierArray = ["N1", "N2", "N3", "N4", "N5", "N6"]; 
var southBallCarrierArray = ["S1", "S2", "S3", "S4", "S5", "S6" ];
var northTeam = [north1, north2, north3, north4, north5, north6];
var southTeam = [south1, south2, south3, south4, south5, south6];  
var northTargetX = [mTargetx, mTargetx2, mTargetx3, mTargetx4, mTargetx5, mTargetx6]; 
var northTargetY = [mTargety, mTargety2, mTargety3, mTargety4, mTargety5, mTargety6]; 


var StayBackNorth = function () {
	
var northTeam = [north1, north2, north3, north4, north5, north6]; 
	
	for (var i = 0; i < northTeam.length; i++) {
		 if (northTeam[i].y + 1 >= ball.y) {
			northTeam[i].y = northTeam[i].y - 0.0000000;
		   //alert("Get Back " + northTeam[i].name)
		 }
	}
}

var checkSouthRange = function () {

var southTeam = [south1, south2, south3, south4, south5, south6];

for (i = 0; i < southTeam.length ; i++) {
		inRanger(southTeam[i]); 
	}
}

var ballInAir = function () {
	ballxDist =  Math.abs(ball.x - ball.bTargetx);
	ballyDist =  Math.abs(ball.y - ball.bTargety);
	
	if (ballxDist > 20 || ballyDist > 20) {
		return true;
	}
		return false;		
}

var whichTeam = function () {
	var NorthBallCarrierArray = ["N1", "N2", "N3", "N4", "N5", "N6"];
	var SouthBallCarrierArray = ["S1", "S2", "S3", "S4", "S5", "S6"];
	
	 for (var i = 0; i < NorthBallCarrierArray.length; i++) {
	    if (ballCarrier == NorthBallCarrierArray[i]) {
			//you know what to do
		}
	 }
	 
	 for (var i = 0; i < SouthBallCarrierArray.length; i++) {
		 if (ballCarrier == SouthBallCarrierArray[i]) {
			//you know wgat to do
			
		}
	 
	 }
		
}

var whichBallCarrier = function () {
	var NorthBallCarrierArray = ["N1", "N2", "N3", "N4", "N5", "N6"];
	var SouthBallCarrierArray = ["S1", "S2", "S3", "S4", "S5", "S6"];
	
	 for (var i = 0; i < NorthBallCarrierArray.length; i++) {
	    if (ballCarrier == NorthBallCarrierArray[i]) {
			//you know what to do
		}
	 }
	 
	 for (var i = 0; i < SouthBallCarrierArray.length; i++) {
		 if (ballCarrier == SouthBallCarrierArray[i]) {
			//you know wgat to do
			
		}
	 
	 }
		
}

var inRanger = function (player) {
	
	if (player.x + 50 > ball.x && player.y + 50 > player.y && player.x - 50 < ball.x && player.y - 50 < ball.y) { 
	//	console.log(player.name + "Drawn")
		
	if (ball.team == 2) {	
		if (player == north1) { mTargetx = ball.x;  mTargety = ball.y; }
		if (player == north2) { mTargetx2 = ball.x;  mTargety2 = ball.y; }
		if (player == north3) { mTargetx3 = ball.x;  mTargety3 = ball.y; }
		if (player == north4) { mTargetx4 = ball.x;  mTargety4 = ball.y; }
		if (player == north5) { mTargetx5 = ball.x;  mTargety5 = ball.y; }
		if (player == north6) { mTargetx6 = ball.x;  mTargety6 = ball.y; }
	}	
	
	if (ball.team == 1) {		
		if (player == south1) { hTargetx = ball.x;  hTargety = ball.y; }
		if (player == south2) { hTargetx2 = ball.x;  hTargety2 = ball.y; }
		if (player == south3) { hTargetx3 = ball.x;  hTargety3 = ball.y; }
		if (player == south4) { hTargetx4 = ball.x;  hTargety4 = ball.y; }
		if (player == south5) { hTargetx5 = ball.x;  hTargety5 = ball.y; }
		if (player == south6) { hTargetx6 = ball.x;  hTargety6 = ball.y; }
		}
	}
	
}

var TackleBroken = function(tackler) {
    var northTeam = [north1, north2, north3, north4, north5, north6];
    var allBallCarrierArray = ["N1", "N2", "N3", "N4", "N5", "N6"];

    //original ticks 
    for (var i = 0; i < northTeam.length; i++) {
        if (ballCarrier == allBallCarrierArray[i]) {
            if (northTeam[i].strength + Math.floor((Math.random() * 20) + 1) > tackler.strength + Math.floor((Math.random() * 20) + 1) + 40) {
                console.log("Missed Tackle" + tackler.x );
				tackler.speed = tackler.speed / 2;
				tackler.y = tackler.y - Math.floor((Math.random() * 10) + 1)
				tackler.x = tackler.x + Math.floor((Math.random() * 10) + 1)
				$( "canvas" ).effect( "shake",{distance:1});
				
				$("#Pow").show();
				$(".Pow").css("display", "block");
				$(".Pow").css("left", ball.x + canvas.offsetLeft);
				$(".Pow").css("top", ball.y + canvas.offsetTop);
				$( "#Pow" ).delay( 800 ).fadeOut(80);
				
				chargesForward(northTeam[i]);
				
				return true;
            }
        }
	}		
	
    return false;
  
}


var DefensiveSpeed = function() {
    var northTeam = [north1, north2, north3, north4, north5, north6];
	var southTeam = [south1, south2, south3, south4, south5, south6]; 
    var northBallCarrierArray = ["N1", "N2", "N3", "N4", "N5", "N6"];
	var southBallCarrierArray = ["S1", "S2", "S3", "S4", "S5", "S6"];

    //north with the ball 
    for (var i = 0; i < northTeam.length; i++) {
        if (ballCarrier == northBallCarrierArray[i]) {
			southTeam[5].strength = southTeam[5].strength +20;
			
		for (var i = 0; i < southTeam.length -1; i++) {

			southTeam[i].speed = southTeam[i].speed - 30;
			console.log(southTeam[i].speed);
		}			
	  }
	}	
	
	 //south with the ball 
    for (var i = 0; i < southTeam.length; i++) {
        if (ballCarrier == southBallCarrierArray[i]) {
           ballCarrierOBJ = southTeam[i]; 
			northTeam[5].strength = northTeam[5].strength +20;
		  
		for (var i = 0; i < northTeam.length -1; i++) {
			northTeam[i].speed = northTeam[i].speed - 30;
		}			
	  }
	}	
  
}

var matchUpdate = function() {
    var northTeam = [north1, north2, north3, north4, north5, north6];
	var southTeam = [south1, south2, south3, south4, south5, south6]; 
    var northBallCarrierArray = ["N1", "N2", "N3", "N4", "N5", "N6"];
	var southBallCarrierArray = ["S1", "S2", "S3", "S4", "S5", "S6"];

    //north with the ball 
    for (var i = 0; i < northTeam.length; i++) {
        if (ballCarrier == northBallCarrierArray[i]) {
		    ballCarrierOBJ = northTeam[i]; 
			ball.team = 1;
		for (var i = 0; i < southTeam.length -1; i++) {

		}			
	  }
	}	
	
	 //south with the ball 
    for (var i = 0; i < southTeam.length; i++) {
        if (ballCarrier == southBallCarrierArray[i]) {
          ballCarrierOBJ = southTeam[i]; 
		  ball.team = 2;
		for (var i = 0; i < northTeam.length -1; i++) {
		}			
	  }
	}	
  
}


var restoreSpeeds = function () {
	var allPlayers = [north1, north2, north3, north4, north5, north6, south1, south2, south3, south4, south5, south6]; 
	
	for (var i = 0; i < allPlayers.length; i++) {
		console.log(allPlayers[i].speed);
		allPlayers[i].speed = allPlayers[i].originalspeed;
	}
	
	DefensiveSpeed();
	
}


var gameInfo = function () {

	console.log(north1.speed + " " + north1.name);
	console.log(north2.speed + " " + north2.name);
	console.log(north3.speed + " " + north3.name);
	console.log(north4.speed + " " + north4.name);
	console.log(north5.speed + " " + north5.name);
	console.log(north6.speed + " " + north6.name);
}


var tryScorer = function () {
	
	for (var x = 0; x < allBallCarrierArray.length; x++) {
		if (ballCarrier == allBallCarrierArray[x]) {
			return northTeam[x].name; 
		}
	}
	
	for (var x = 0; x < southBallCarrierArray.length; x++) {
		if (ballCarrier == southBallCarrierArray[x]) {
			return southTeam[x].name; 
		}
	}
}


var statCollector = function () {
	
	for (var x = 0; x < allBallCarrierArray.length; x++) {
		if (ballCarrier == allBallCarrierArray[x]) {
			return northTeam[x].name; 
		}
	}
}

var dummyHalfInPosition = function () {

	if (ball.team == 1) {		
	
	if (ballCarrier != "N1" && north1.x > ball.x -30 && north1.x < ball.x +30  ) 
	{ $(PTBbutton).removeAttr('disabled');	};

	if (ballCarrier == "N1" && north2.x > ball.x -30 && north2.x < ball.x +30  ) 
	{ $(PTBbutton).removeAttr('disabled');	};

	}

	if (ball.team == 2) {		
	
	//$(PTBbutton).removeAttr('disabled');
	
	if (ballCarrier != "S1" && south1.x < ball.x +30 && south1.x > ball.x -30  ) 
	{ $(PTBbutton).removeAttr('disabled');	};

	if (ballCarrier == "S1" && south2.x < ball.x +30 && south2.x > ball.x -30  ) 
	{ $(PTBbutton).removeAttr('disabled');	};

	}

}


var dropOut = function () {


	if (ball.team == 1 && ball.y < 100) {		
		turnOver();

	}
	
	if (ball.team == 2 && ball.y > 800) {		
		turnOver();

	}
}

//ajax section

var sendTry = function (tryScorer) {
	
	 $.ajax({
                url: "http://etrl.rlicoach.com/RLASv02/php/lookup.php?tryScorer=" + tryScorer,
                type: 'GET',
                dataType: "text",
                success: function(obj) {
						console.log("TRY")
						console.log(obj)
				}               					
        });
}

var sendGame = function (team) {
	
	var user = "Guest";
	
	 $.ajax({
                url: "http://etrl.rlicoach.com/RLASv02/php/lookup.php?gameStarter=" + user,
                type: 'GET',
                dataType: "text",
                success: function(obj) {
						console.log("game start")
						console.log(obj)
				}               					
        });
}

var sendWin = function (team) {
	
	var user = "Guest";
	
	 $.ajax({
                url: "http://etrl.rlicoach.com/RLASv02/php/lookup.php?gameWinner=" + user,
                type: 'GET',
                dataType: "text",
                success: function(obj) {
						console.log("game start")
						console.log(obj)
				}               					
        });
}

var sendLoss = function (team) {
	
	var user = "Guest";
	
	 $.ajax({
                url: "http://etrl.rlicoach.com/RLASv02/php/lookup.php?gameLoser=" + user,
                type: 'GET',
                dataType: "text",
                success: function(obj) {
						console.log("game start")
						console.log(obj)
				}               					
        });
}


//CPU LOGIC

var CPULoadPlay = function () {

	SouthOnside = ball.y;
	
	//dummy half south
 if (ballCarrier != "S1" && attackReady == 0) {
  hTargetx = ball.x;
  hTargety = ball.y +10;
 }
 
 if (ballCarrier == "S1" && attackReady == 0) {
  hTargetx2 = ball.x;
  hTargety2 = ball.y +10;
 }


  if (southPlayOn == 1) {
 
 //dummy half 
 if (ballCarrier != "S1" && attackReady == 0 && south1.x >= ball.x - 20 && south1.x < ball.x + 20 && south1.y > ball.y && south1.y <= ball.y + 30 ) {
  ballCarrier = "S1";
  
  south1.lock = 0; south2.lock = 0; south3.lock = 0; south4.lock = 0; south5.lock = 0; south6.lock = 0;
  attackReady = 1;
 }

 //dummy half if our N1 gets tackled
 if (ballCarrier == "S1" && attackReady == 0 && south2.x >= ball.x - 20 && south2.x < ball.x + 20 && south2.y > ball.y && south2.y <= ball.y + 30) {
  ballCarrier = "S2";
  
  south1.lock = 0; south2.lock = 0; south3.lock = 0; south4.lock = 0; south5.lock = 0; south6.lock = 0;
  attackReady = 1;
 }
 
 var random = Math.floor(Math.random() * Math.floor(1));
 
 if (random == 1) {
  
	if (tackleCount == 0 &&  attackReady == 1) {ballCarrier = "S1"; hTargetx = 400; hTargety = 0; hTargety2 = ball.y +50; hTargety3 = ball.y +50; hTargety4 = ball.y +50; hTargety5 = ball.y +50; hTargety6 = ball.y +50;}
	if (tackleCount == 1 &&  attackReady == 1) {ballCarrier = "S2"; hTargetx = 400; hTargety2 = 0; hTargety = ball.y +50; hTargety3 = ball.y +50; hTargety4 = ball.y +50; hTargety5 = ball.y +50; hTargety6 = ball.y +50;}
	if (tackleCount == 2 &&  attackReady == 1) {ballCarrier = "S5"; hTargetx5 = 500; hTargety5 = 0; hTargety2 = ball.y +50; hTargety3 = ball.y +50; hTargety4 = ball.y +50; hTargety1 = ball.y +50; hTargety6 = ball.y +50;}
	if (tackleCount == 3 &&  attackReady == 1) {ballCarrier = "S1"; hTargetx2 = 100; hTargety = 0; hTargety2 = ball.y +50; hTargety3 = ball.y +50; hTargety4 = ball.y +50; hTargety5 = ball.y +50; hTargety6 = ball.y +50;}
	if (tackleCount == 4 &&  attackReady == 1) {ballCarrier = "S3"; hTargetx3 = 200; hTargety3 = 0; hTargety2 = ball.y +50; hTargety1 = ball.y +50; hTargety4 = ball.y +50; hTargety5 = ball.y +50; hTargety6 = ball.y +50;}
	if (tackleCount == 5 &&  attackReady == 1) {ballCarrier = "S4"; hTargetx4 = 300; hTargety4 = 0; hTargety2 = ball.y +50; hTargety3 = ball.y +50; hTargety1 = ball.y +50; hTargety5 = ball.y +50; hTargety6 = ball.y +50;}
	if (tackleCount == 6 &&  attackReady == 1) {ballCarrier = "S5"; hTargetx5 = 500; hTargety5 = 0; hTargety2 = ball.y +50; hTargety3 = ball.y +50; hTargety4 = ball.y +50; hTargety1 = ball.y +50; hTargety6 = ball.y +50;}
 }

	if (random == 0) {
  
	if (tackleCount == 0 &&  attackReady == 1) {ballCarrier = "S1"; hTargetx = 200; hTargety = 0; hTargety2 = ball.y +50; hTargety3 = ball.y +50; hTargety4 = ball.y +50; hTargety5 = ball.y +50; hTargety6 = ball.y +50;}
	if (tackleCount == 2 &&  attackReady == 1) {ballCarrier = "S2"; hTargetx = 200; hTargety2 = 0; hTargety = ball.y +50; hTargety3 = ball.y +50; hTargety4 = ball.y +50; hTargety5 = ball.y +50; hTargety6 = ball.y +50;}
	if (tackleCount == 1 &&  attackReady == 1) {ballCarrier = "S5"; hTargetx5 = 500; hTargety5 = 0; hTargety2 = ball.y +50; hTargety3 = ball.y +50; hTargety4 = ball.y +50; hTargety1 = ball.y +50; hTargety6 = ball.y +50;}
	if (tackleCount == 4 &&  attackReady == 1) {ballCarrier = "S1"; hTargetx2 = 500; hTargety = 0; hTargety2 = ball.y +50; hTargety3 = ball.y +50; hTargety4 = ball.y +50; hTargety5 = ball.y +50; hTargety6 = ball.y +50;}
	if (tackleCount == 3 &&  attackReady == 1) {ballCarrier = "S3"; hTargetx3 = 100; hTargety3 = 0; hTargety2 = ball.y +50; hTargety1 = ball.y +50; hTargety4 = ball.y +50; hTargety5 = ball.y +50; hTargety6 = ball.y +50;}
	if (tackleCount == 5 &&  attackReady == 1) {ballCarrier = "S4"; hTargetx4 = 100; hTargety4 = 0; hTargety2 = ball.y +50; hTargety3 = ball.y +50; hTargety1 = ball.y +50; hTargety5 = ball.y +50; hTargety6 = ball.y +50;}
	if (tackleCount == 6 &&  attackReady == 1) {ballCarrier = "S5"; hTargetx5 = 500; hTargety5 = 0; hTargety2 = ball.y +50; hTargety3 = ball.y +50; hTargety4 = ball.y +50; hTargety1 = ball.y +50; hTargety6 = ball.y +50;}

}

 
}

}