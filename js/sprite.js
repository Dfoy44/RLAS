
	function spriteFrame2 (spObject, currFrame) {
		//spriteFrame(target, 0)
		
		switch (objName) {
			
			case target:
				return objName.frameX[currFrame+1];
				break; 
			case playerN:
				return objName.frameX[currFrame+1];
				break; 
			case playerS:
				return objName.frameX[currFrame+1];
				break;
		}
	
	}
	
var spriteFrame	= function (spObject) {
		
		if (gameTicks % spObject.ticks != 0) {
			//no change here
			var frameX = spObject.frameX[spObject.currFrame];
		}
		
		if (gameTicks % spObject.ticks == 0) {
		//cycle through the frames retuning the x
		if (spObject.currFrame < spObject.frameX.length) {
			var frameX = spObject.frameX[spObject.currFrame];
			spObject.currFrame ++;
		}
		
		//reset to 0 frame when reaching last frame
		if (spObject.currFrame == spObject.frameX.length) {
			var frameX = 0;
			spObject.currFrame = 0
		}
	}
		return frameX;
}


var stopStillNorth = function () {
	var northTeam = [north1, north2, north3, north4, north5, north6]; 
	var northTargetX = [mTargetx, mTargetx2, mTargetx3, mTargetx4, mTargetx5, mTargetx6]; 
	var northTargetY = [mTargety, mTargety2, mTargety3, mTargety4, mTargety5, mTargety6]; 
	//original ticks 
	for (var i = 0; i < northTeam.length; i++) {
		if ((northTeam[i].y +10) > (northTargetY[i]) && (northTeam[i].y -10) < (northTargetY[i]) && (northTeam[i].x -10) < (northTargetX[i]) && (northTeam[i].x +10) > (northTargetX[i])) {
			northTeam[i].ticks = 130000000000000; 
		}
		else {
			northTeam[i].ticks = 13; 
			}
	}
}

var stopStillSouth = function () {
	var southTeam = [south1, south2, south3, south4, south5, south6]; 
	var southTargetX = [hTargetx, hTargetx2, hTargetx3, hTargetx4, hTargetx5, hTargetx6]; 
	var southTargetY = [hTargety, hTargety2, hTargety3, hTargety4, hTargety5, hTargety6]; 
	//original ticks 
	for (var i = 0; i < southTeam.length; i++) {
		if ((southTeam[i].y +10) > (southTargetY[i]) && (southTeam[i].y -10) < (southTargetY[i]) && (southTeam[i].x -10) < (southTargetX[i]) && (southTeam[i].x +10) > (southTargetX[i])) {
			southTeam[i].ticks = 130000000000000; 
		}
		else {
			southTeam[i].ticks = 13; 
			}
	}
}
