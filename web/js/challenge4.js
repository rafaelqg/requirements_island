var Challenge4 = function () {
    this.numberOfTries = 0;
    this.startedTime = 0;
    this.concludedTime = 0;
    this.functionalSelected = new Array();
    this.nonFunctionalSelected = new Array();
    
    this.verifyAnswer= function(){
        this.numberOfTries++;
        document.getElementById("tries_c4").innerHTML = this.numberOfTries;
        var funtionalResult=this.functionalSelected.indexOf(2)!==-1 && this.functionalSelected.indexOf(6)!==-1 && this.functionalSelected.indexOf(8)!==-1 && this.functionalSelected.indexOf(4)!==-1;
        var nonFuntionalResult=this.nonFunctionalSelected.indexOf(1)!==-1 && this.nonFunctionalSelected.indexOf(3)!==-1  && this.nonFunctionalSelected.indexOf(5)!==-1 && this.nonFunctionalSelected.indexOf(7) !== -1;     
        if (funtionalResult && nonFuntionalResult) {
            this.concludedTime = timeManager.remainingTimeInSeconds;
            player.saveChallengResult(4, this.startedTime, this.concludedTime,  this.numberOfTries);
            $("#challenge_4_msgs").css("color","#FFA500");
            $("#challenge_4_msgs").html(language[28]);
            textScreen.showTextScreen("stage_challenge_4", [99, 100]);
        } else {
            $("#challenge_4_msgs").css("color","#F00");
            $("#challenge_4_msgs").html(language[29]);
            timeManager.mistakePenalty();
        }
    };
    

    
    this.tryAgain= function(){
        for (i = 1; i <= 8; i++) {
            $("#draggable_c4_" + i).fadeIn();
        }
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