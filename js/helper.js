
var allBallCarrierArray = ["N1", "N2", "N3", "N4", "N5", "N6"];
var northTeam = [north1, north2, north3, north4, north5, north6]; 
var northTargetX = [mTargetx, mTargetx2, mTargetx3, mTargetx4, mTargetx5, mTargetx6]; 
var northTargetY = [mTargety, mTargety2, mTargety3, mTargety4, mTargety5, mTargety6]; 

var inRange = function (player) {
	
}

var TackleBroken = function(tackler) {
    var northTeam = [north1, north2, north3, north4, north5, north6];
    var allBallCarrierArray = ["N1", "N2", "N3", "N4", "N5", "N6"];

    //original ticks 
    for (var i = 0; i < northTeam.length; i++) {
        if (ballCarrier == allBallCarrierArray[i]) {
            if (northTeam[i].strength + Math.floor((Math.random() * 20) + 1) > tackler.strength + Math.floor((Math.random() * 15) + 1)) {
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
			southTeam[i].speed = southTeam[i].speed - 20;
			console.log(southTeam[i].speed);
		}			
	  }
	}	
	
	 //south with the ball 
    for (var i = 0; i < southTeam.length; i++) {
        if (ballCarrier == southBallCarrierArray[i]) {
          
		for (var i = 0; i < northTeam.length; i++) {
			northTeam[i].speed = northTeam[i].speed - 20;
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


