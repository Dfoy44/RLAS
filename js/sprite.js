
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

