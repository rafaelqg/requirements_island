function initiateJackSprite() {
    var jackImage = new Image();
    jackImage.src = "images/jack_sprit.png";
    jackImage.width = 279;
    jackImage.height = 161;
    x = -1;
    y = -1;
    var jack_canvas=document.getElementById("jack_canvas")
    jackSprite = new Sprite(jack_canvas, jackImage.width, jackImage.height, jackImage, 2, 40, x, y);
    jackImage.addEventListener("load", loopJack);
    jack_canvas.addEventListener("click", moveJack);
    jack_canvas.addEventListener("mousemove", updateCursor);
    //move jack to first area (airplane)                           
    var airPlaneArea = mapAreas[2];
    jackSprite.x = airPlaneArea.x - jackSprite.width / jackSprite.numberOfFrames / 2; //divided by 2: place the center of the image exactly where the mouse was clicked
    jackSprite.y = airPlaneArea.y - jackSprite.height / 2;
    showAreaSummary(airPlaneArea);
}

function loopJack() {
    window.requestAnimationFrame(loopJack);
    jackSprite.update();
    jackSprite.render();
}

function openArea(){
    if(selectedArea !== null){
        selectedArea.open();
    };
}

var MapArea = function (context, x, y, radius, imageSrc, titleIndex,id) {
    this.context = context;
    this.x = x;
    this.y = y;
    this.radius = radius;
    this.areaImageSrc = imageSrc;
    this.titleIndex = titleIndex;
    this.id=id;
    
    this.draw = function () {
        this.context.beginPath();
        this.context.arc(this.x, this.y, this.radius, 0, 2 * Math.PI, false);
        this.context.fillStyle = 'red';
        this.context.fill();

        this.context.lineWidth = 1;
        this.context.strokeStyle = '#000000';
        this.context.stroke();
    };
    
    this.open=function (){
        switch(this.id){
            case 1:
                if(challenge1.concludedTime === 0){
                    challenge1.startedTime=timeManager.remainingTimeInSeconds;
                    textScreen.showTextScreen("stage_map",[34,35,"stage_challenge_1"]);
                }else if (challenge4.concludedTime===0){
                    textScreen.showTextScreen("stage_map",[37]);
                }else if(challenge4.concludedTime>0 && challenge5.concludedTime===0){
                    challenge5.startedTime=timeManager.remainingTimeInSeconds; 
                    switchStage('stage_map','stage_challenge_5');
                }else if(challenge5.concludedTime>0){
                    textScreen.showTextScreen("stage_map",[117]);
                }
                break;
            case 2:
                if(challenge1.concludedTime===0){
                    switchStage('stage_map','stage_holy_stone');
                }else{ 
                    if(challenge2.concludedTime===0){
                        $("#stage_holy_stone_c1").hide();
                        $("#stage_holy_stone_c2").show();
                        challenge2.startedTime=timeManager.remainingTimeInSeconds; 
                        textScreen.showTextScreen("stage_map",[47,48,"stage_holy_stone"]);
                    }else if(challenge3.concludedTime===0){
                        textScreen.showTextScreen("stage_map",[61]);
                    }else if(challenge3.concludedTime>0 && challenge4.concludedTime===0){
                        challenge4.startedTime=timeManager.remainingTimeInSeconds; 
                        textScreen.showTextScreen("stage_map",[86,87,"stage_challenge_4"]);
                    }else if(challenge4.concludedTime>0){
                         textScreen.showTextScreen("stage_map",[100]);
                    }
                }
                break; 
            case 3:
                if(!hintManager.bateryFound){
                    hintManager.bateryFound=true;
                    hintManager.hintsAvailable+=3;
                    hintManager.updateHintsAvailable();
                    $("#text_40").show();
                }else{
                    $("#text_40").hide();
                }
                switchStage('stage_map','stage_airplane');
                break;    
            case 4:
                $("#text_101").hide();
                if(challenge4.concludedTime>0 && challenge5.concludedTime === 0 && !challenge5.playerFallOnTrap){
                    $("#text_101").show();
                    challenge5.playerFallOnTrap=true;
                    //call mistakePenalty twice to take out 4 days
                    timeManager.mistakePenalty();
                    timeManager.mistakePenalty();
                    switchStage('stage_map','stage_beach');
                }else if(challenge6.concludedTime>0){
                    challenge7.startedTime=timeManager.remainingTimeInSeconds; 
                    switchStage('stage_map','stage_challenge_7');
                }else{                 
                    switchStage('stage_map','stage_beach');
                }
                
                break;
            case 5:
                if(challenge5.concludedTime===0){
                    switchStage('stage_map','stage_geek_village');
                }else if(challenge5.concludedTime>0 && challenge6.concludedTime==0){
                    challenge6.startedTime=timeManager.remainingTimeInSeconds;
                    textScreen.showTextScreen("stage_map",[118,"stage_challenge_6"]);
                }else if(challenge6.concludedTime>0){
                    textScreen.showTextScreen("stage_map",[119]);
                }
                break;
            case 6:            
                if(challenge2.concludedTime===0){
                    switchStage('stage_map','stage_vulcano');
                }else{
                    if(challenge3.concludedTime===0){
                        $("#stage_vulcano_c1").hide();
                        $("#stage_vulcano_c2").show();
                        challenge3.startedTime=timeManager.remainingTimeInSeconds; 
                        textScreen.showTextScreen("stage_map",[65,66,"stage_vulcano"]);
                    }else{
                        textScreen.showTextScreen("stage_map",[83]);
                    }
                }
                break; 
        }
    };
};




function drawMapAreas() {
    var area = null;
    var radius = 9;
    mapAreas = new Array();
    area = new MapArea(context, 566, 238, radius, "images/nerds_trible_area.png", 3, 1);
    mapAreas.push(area);
    area.draw();

    area = new MapArea(context, 465, 215, radius, "images/holy_stone_area.png", 5, 2);
    mapAreas.push(area);
    area.draw();

    area = new MapArea(context, 312, 340, radius, "images/airplane_area.png", 2, 3);
    mapAreas.push(area);
    area.draw();

    area = new MapArea(context, 468, 309, radius, "images/beach_area.png", 4, 4);
    mapAreas.push(area);
    area.draw();

    area = new MapArea(context, 180, 244, radius, "images/geek_tribe_area.png", 1, 5);
    mapAreas.push(area);
    area.draw();

    area = new MapArea(context, 368, 173, radius, "images/vulcano_area.png", 6, 6);
    mapAreas.push(area);
    area.draw();
    
    $("#text_9").show();
    $("#text_1").show();
    $("#text_2").show();
    $("#text_3").show();
    $("#text_4").show();
    $("#text_5").show();
    $("#text_6").show();
}

function moveJack(event) {
    x = event.offsetX || event.layerX;
    y = event.offsetY || event.layerY;
    var clickedArea = clickedMapArea(x, y);
    if (clickedArea !== null) {
        jackSprite.context.clearRect(jackSprite.x, jackSprite.y, jackSprite.width / jackSprite.numberOfFrames, jackSprite.height);//clear jack
        drawMapAreas();//redraw areas
        jackSprite.x = clickedArea.x - jackSprite.width / jackSprite.numberOfFrames / 2; //divided by 2: place the center of the image exactly where the mouse was clicked
        jackSprite.y = clickedArea.y - jackSprite.height / 2;
        selectedArea=clickedArea;
        showAreaSummary(clickedArea);
    }
    return clickedArea;
}

function updateCursor(event) {
    x = event.offsetX || event.layerX;
    y = event.offsetY || event.layerY;
    var clickedArea = clickedMapArea(x, y);
    if (clickedArea !== null) {
        jackSprite.canvas.style.cursor = "pointer";
    } else {
        jackSprite.canvas.style.cursor = "default";
    }
}

function showAreaSummary(area) {
    $("#map_selected_area").css("display", "block");
    $("#img_selected_area").attr("src", area.areaImageSrc);
    $("#text_selected_area").html(language[area.titleIndex]);
}


function clickedMapArea(x, y) {
    var result = null;
    for (var i = 0; i < mapAreas.length; i++) {
        var area = mapAreas[i];
        if (x <= area.x + area.radius && x >= area.x - area.radius && y <= area.y + area.radius && y >= area.y - area.radius) {
            result = area;
            break;
        }
    }
    return result;
}

function drawMap() {
    canvas.style.backgroundImage = "url('images/mapa_antigo.png')";
    canvas.style.backgroundRepeat = "no-repeat";
    drawMapAreas();
}

function switchStage(currentStageId,nextStageId){
    $("#"+currentStageId).css("display", "none");
    $("#"+nextStageId).css("display", "block");
}