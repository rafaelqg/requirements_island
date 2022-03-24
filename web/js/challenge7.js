var Challenge7 = function () {
    this.numberOfTries = 0;
    this.startedTime = 0;
    this.concludedTime = 0;
    this.playerFallOnTrap=false;//try to build the boat before validate the requirements
    
    this.verifyAnswer= function(){
        this.numberOfTries++;
        $("#tries_c7").html(this.numberOfTries);
        var a1=$("#c7_a1").is(":checked");
        var a2=$("#c7_a2").is(":checked");
        var a3=$("#c7_a3").is(":checked");
        var a4=$("#c7_a4").is(":checked");
        var a5=$("#c7_a5").is(":checked");
         if (a1 && !a2 && a3 && a4 && !a5) {
            $("#challenge_7_msgs").css("color","#FFA500");
            $("#challenge_7_msgs").html(language[28]);
            this.concludedTime = timeManager.remainingTimeInSeconds;
            player.saveChallengResult(7, this.startedTime, this.concludedTime,  this.numberOfTries);
            switchStage('stage_challenge_7','game_over');
            //presente game over
            gameOver.prepareForDisplay();          
            timeManager.isTimeFrozen=true;
            $("#game_success").fadeIn();
            //$("#player_score").show();
        } else {
            $("#challenge_7_msgs").css("color","#F00");
            $("#challenge_7_msgs").html(language[29]);
            timeManager.mistakePenalty();
        }
    };
        
    
    this.tryAgain= function(){
        timeManager.mistakePenalty();
    } 
    
    this.initialize = function () {
        //reset selection
        $("#tries_c7").html(this.numberOfTries);
        $("#hints_c7").html(hintManager.hintsAvailable);
    };
    
};