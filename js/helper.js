
var allBallCarrierArray = ["N1", "N2", "N3", "N4", "N5", "N6"];
var northTeam = [north1, north2, north3, north4, north5, north6]; 
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

var inRanger = function (player) {
	
	if (player.x + 50 > ball.x && player.y + 50 > player.y && player.x - 50 < ball.x && player.y - 50 < ball.y) { 
		console.log(player.name + "Drawn")
		
		
		if (player == north1) { mTargetx = ball.x;  mTargety = ball.y; }
		if (player == north2) { mTargetx2 = ball.x;  mTargety2 = ball.y; }
		if (player == north3) { mTargetx3 = ball.x;  mTargety3 = ball.y; }
		if (player == north4) { mTargetx4 = ball.x;  mTargety4 = ball.y; }
		if (player == north5) { mTargetx5 = ball.x;  mTargety5 = ball.y; }
		if (player == north6) { mTargetx6 = ball.x;  mTargety6 = ball.y; }
		
		if (player == south1) { hTargetx = ball.x;  hTargety = ball.y; }
		if (player == south2) { hTargetx2 = ball.x;  hTargety2 = ball.y; }
		if (player == south3) { hTargetx3 = ball.x;  hTargety3 = ball.y; }
		if (player == south4) { hTargetx4 = ball.x;  hTargety4 = ball.y; }
		if (player == south5) { hTargetx5 = ball.x;  hTargety5 = ball.y; }
		if (player == south6) { hTargetx6 = ball.x;  hTargety6 = ball.y; }

	}
	
}

var TackleBroken = function(tackler) {
    var northTeam = [north1, north2, north3, north4, north5, north6];
    var allBallCarrierArray = ["N1", "N2", "N3", "N4", "N5", "N6"];

    //original ticks 
    for (var i = 0; i < northTeam.length; i++) {
        if (ballCarrier == allBallCarrierArray[i]) {
            if (northTeam[i].strength + Math.floor((Math.random() * 20) + 1) > tackler.strength + Math.floor((Math.random() * 20) + 1) + 25) {
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
          
		for (var i = 0; i < southTeam.length; i++) {
			southTeam[i].speed = southTeam[i].speed - 30;
			console.log(southTeam[i].speed);
		}			
	  }
	}	
	
	 //south with the ball 
    for (var i = 0; i < southTeam.length; i++) {
        if (ballCarrier == southBallCarrierArray[i]) {
          
		for (var i = 0; i < northTeam.length; i++) {
			northTeam[i].speed = northTeam[i].speed - 30;
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
}


var statCollector = function () {
	
	for (var x = 0; x < allBallCarrierArray.length; x++) {
		if (ballCarrier == allBallCarrierArray[x]) {
			return northTeam[x].name; 
		}
	}
}


