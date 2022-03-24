var Challenge5 = function () {
    this.numberOfTries = 0;
    this.startedTime = 0;
    this.concludedTime = 0;
    this.playerFallOnTrap=false;//try to build the boat before validate the requirements
    
    this.verifyAnswerPart1= function(){
        this.numberOfTries++;
        $("#tries_c5").html(this.numberOfTries);
        var a1=$("#c5_a1").is(":checked");
        var a2=$("#c5_a2").is(":checked");
        var a3=$("#c5_a3").is(":checked");
        var a4=$("#c5_a4").is(":checked");
        var a5=$("#c5_a5").is(":checked");
        var a6=$("#c5_a6").is(":checked");
         if (a1 && a2 && !a3 && !a4 && !a5 && !a6 ) {
            $("#c5_part_1").hide();
            $("#c5_part_2").show();
        } else {
            $("#challenge_5_msgs").css("color","#F00");
            $("#challenge_5_msgs").html(language[29]);
            timeManager.mistakePenalty();
        }
    };
    
       this.verifyAnswerPart2= function(){
        this.numberOfTries++;
        $("#tries_c5").html(this.numberOfTries);
        var a7=$("#c5_a7").is(":checked");
        var a8=$("#c5_a8").is(":checked");
        var a9=$("#c5_a9").is(":checked");
        var a10=$("#c5_a10").is(":checked");
        var a11=$("#c5_a11").is(":checked");
         if (a7 && a8 && !a9 && !a10 && !a11) {
            $("#challenge_5_msgs").css("color","#FFA500");
            $("#challenge_5_msgs").html(language[28]);
            this.concludedTime = timeManager.remainingTimeInSeconds;
            player.saveChallengResult(5, this.startedTime, this.concludedTime,  this.numberOfTries);
            textScreen.showTextScreen("stage_challenge_5", [117]);
        } else {
            $("#challenge_5_msgs").css("color","#F00");
            $("#challenge_5_msgs").html(language[29]);
            timeManager.mistakePenalty();
        }
    };
    

    
    this.tryAgain= function(){
        timeManager.mistakePenalty();
    } 
    
    this.initialize = function () {
        //reset selection
        $("#tries_c4").html(this.numberOfTries);
        $("#hints_c4").html(hintManager.hintsAvailable);
        this.functionalSelected = new Array();
        this.nonFunctionalSelected = new Array();
        //configure drag and drop elements
        for (i = 1; i <= 8; i++) {
            $("#draggable_c4_" + i).draggable();
            $("#draggable_c4_" + i).draggable("option", "containment", "#draggable_area_c4");
        }
        $("#droppable_c4_1").droppable({drop: function (event, ui) {
                challenge4.handleDrop(this, event, ui);
            }});
        $("#droppable_c4_1").css("margin-top","190px");
        $("#droppable_c4_1").css("margin-left","150px");
        
        $("#droppable_c4_2").droppable({drop: function (event, ui) {
                challenge4.handleDrop(this, event, ui);
            }});
        $("#droppable_c4_2").css("margin-top","190px");
        $("#droppable_c4_2").css("margin-left","300px");
    };
    
    this.handleDrop = function (el, event, ui) {
        ui.draggable.fadeOut("slow");
        var index = parseInt($(el).attr("id")[13]);
        var answer = parseInt(ui.draggable.attr("id")[13]);
        if(index===1){
            this.functionalSelected.push(answer);
        }else if (index===2){
            this.nonFunctionalSelected.push(answer);
        }
        //somevisual effect for confirmation   
    };
    
};