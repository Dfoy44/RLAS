var	loadStadium = function (stadiumName) {
		
		switch (stadiumName) {
			default: 
				return "images/background1.jpg";
				break;				
			case "Watersheddings, Oldham":
				initSnow();
				return "images/backgroundWS.jpg";
				break; 
			case "Leichhardt Oval, Sydney":
				return "images/backgroundLO.jpg";
				break; 
			case "Central Park, Wigan":
				return "images/backgroundCP.jpg";
				break;
			case "Wilderspool, Warrington":
				initRain();
				return "images/backgroundWW.jpg";
				break;						
		}
	
}


var	loadPlayerSpriteN = function (teamName) {
		
		switch (teamName) {
			default: 
				return "sprites/NorthImageSpriteBasic.png";
				break;				
			case "QLD Irish":
				return "sprites/NorthImageSpriteQLDI.png";
				break; 
			case "New Zealand '86":
				return "sprites/NorthImageSpriteNZA.png";
				break; 
			case "Newcastle '88":
				return "sprites/NorthImageSpriteNEWC.png";
				break; 
			case "Brisbane":
				return "sprites/NorthImageSpriteBRIS.png";
				break;
			case "Wigan":
				return "sprites/NorthImageSpriteWIGN.png";
				break;
			case "St. Helens '98":
				return "sprites/NorthImageSpriteSTHN.png";
				break;
			case "Paris St.Germain '97":
				return "sprites/NorthImageSpritePSG97.png";
				break;
			case "Hull":
				return "sprites/NorthImageSpriteHULL.png";
				break;
			case "Manly":
				return "sprites/NorthImageSpriteMANL.png";
				break;			
			case "Oldham '87":
				return "sprites/NorthImageSpriteOLDH.png";
				break;
			case "Australia '92":
				return "sprites/NorthImageSpriteAK82.png";
				break;			
			case "GB Lions '92":
				return "sprites/NorthImageSpriteGB92.png";
				break;		
			case "South Sydney":
				return "sprites/NorthImageSpriteSSRB.png";
				break;		
			case "Salford":
				return "sprites/NorthImageSpriteSALF.png";
				break;
			case "France '67":
				return "sprites/NorthImageSpriteFRAA.png";
				break;			
		}
	
}

var	loadPlayerSpriteS = function (teamName) {
		
		
		
		switch (teamName) {
			default: 
				return "sprites/SouthImageSpriteBasic.png";
				break;				
			case "QLD Irish":
				return "sprites/SouthImageSpriteQLDI.png";
				break; 
			case "newcA":
				return "sprites/SouthImageSpriteNEWC.png";
				break; 
			case "Brisbane":
				return "sprites/SouthImageSpriteBRIS.png";
				break;
			case "Wigan":
				return "sprites/SouthImageSpriteWIGN.png";
				break;
			case "St. Helens '98":
				return "sprites/SouthImageSpriteSTHN.png";
				break;
			case "Paris St.Germain '97":
				return "sprites/SouthImageSpritePSG97.png";
				break;
			case "Hull":
				return "sprites/SouthImageSpriteHULL.png";
				break;	
			case "Oldham '87":
				return "sprites/SouthImageSpriteOLDH.png";
				break;
			case "Australia '92":
				return "sprites/SouthImageSpriteAK82.png";
				break;	
			case "GB Lions '92":
				return "sprites/SouthImageSpriteGB92.png";
				break;	
			case "South Sydney":
				return "sprites/SouthImageSpriteQLDI.png";
				break;
			case "Salford":
				return "sprites/SouthImageSpriteSALF.png";
				break;
			case "France '67":
				return "sprites/SouthImageSpriteFRAC.png";
				break;				
		}
	
}



var	loadPlayerSpriteNorth = function (spriteName) {
		
		switch (spriteName) {
//			default: 
//				return "sprites/NorthImageSpriteBasic.png";
//				break;				
			case "newA":
				return "sprites/NorthImageSpriteNEWA.png";
				break; 
			case "newB":
				return "sprites/NorthImageSpriteNEWB.png";
				break; 
			case "newcA":
				return "sprites/NorthImageSpriteNEWC.png";
				break; 
			case "canA":
				return "sprites/NorthImageSpriteCANA.png";
				break;
			case "canB":
				return "sprites/NorthImageSpriteCANB.png";
				break;
			case "canC":
				return "sprites/NorthImageSpriteCANC.png";
				break;	
			case "wigA":
				return "sprites/NorthImageSpriteWIGN.png";
				break;
			case "sthA":
				return "sprites/NorthImageSpriteSTHN.png";
				break;
			case "Paris St.Germain '97":
				return "sprites/NorthImageSpritePSG97.png";
				break;
			case "hfcA":
				return "sprites/NorthImageSpriteHULL.png";
				break;
			case "manA":
				return "sprites/NorthImageSpriteMANL.png";
				break;			
			case "oldA":
				return "sprites/NorthImageSpriteOLDH.png";
				break;
			case "ausA":
				return "sprites/NorthImageSpriteAK82A.png";
				break;
			case "ausB":
				return "sprites/NorthImageSpriteAK82B.png";
				break;					
			case "gbA":
				return "sprites/NorthImageSpriteGB92A.png";
				break;
			case "gbB":
				return "sprites/NorthImageSpriteGB92B.png";
				break;
			case "gbC":
				return "sprites/NorthImageSpriteGB92C.png";
				break;
			case "nzA":
				return "sprites/NorthImageSpriteNZA.png";
				break;				
			case "South Sydney":
				return "sprites/NorthImageSpriteSSRB.png";
				break;		
			case "Salford":
				return "sprites/NorthImageSpriteSALF.png";
				break;
			case "fraA":
				return "sprites/NorthImageSpriteFRAA.png";
				break;	
			case "fraB":
				return "sprites/NorthImageSpriteFRAB.png";
				break;	
			case "fraC":
				return "sprites/NorthImageSpriteFRAC.png";
				break;	
		}
	
}


var	loadPlayerSpriteSouth = function (spriteName) {
		
		switch (spriteName) {
//			default: 
//				return "sprites/SouthImageSpriteBasic.png";
//				break;				
			case "newA":
				return "sprites/SouthImageSpriteGB92.png";
				break; 
			case "newcA":
				return "sprites/SouthImageSpriteNEWC.png";
				break; 
			case "canB":
				return "sprites/SouthImageSpriteCANB.png";
				break;
			case "wigA":
				return "sprites/SouthImageSpriteWIGN.png";
				break;
			case "sthA":
				return "sprites/SouthImageSpriteSTHN.png";
				break;
			case "Paris St.Germain '97":
				return "sprites/SouthImageSpritePSG97.png";
				break;
			case "hfcA":
				return "sprites/SouthImageSpriteHULL.png";
				break;
			case "manA":
				return "sprites/SouthImageSpriteMANL.png";
				break;			
			case "oldA":
				return "sprites/SouthImageSpriteOLDH.png";
				break;
			case "ausA":
				return "sprites/SouthImageSpriteAK82.png";
				break;
			case "ausB":
				return "sprites/SouthImageSpriteAK82.png";
				break;			
			case "gbA":
				return "sprites/SouthImageSpriteGB92.png";
				break;
			case "gbB":
				return "sprites/SouthImageSpriteGB92.png";
				break;
			case "gbC":
				return "sprites/SouthImageSpriteGB92.png";
				break;
			case "nzA":
				return "sprites/SouthImageSpriteNZA.png";
				break;				
			case "South Sydney":
				return "sprites/SouthImageSpriteSSRB.png";
				break;		
			case "Salford":
				return "sprites/SouthImageSpriteSALF.png";
				break;
			case "fraA":
				return "sprites/SouthImageSpriteFRAA.png";
				break;	
			case "fraB":
				return "sprites/SouthImageSpriteFRAB.png";
				break;	
			case "fraC":
				return "sprites/SouthImageSpriteFRAC.png";
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
