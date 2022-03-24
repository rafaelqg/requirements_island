var TimeManager = function(){
    this.remainingTimeInSeconds = 45 * 60;
    this.isTimeFrozen=true;
    
    this.displayRemainingTime = function () {
        var minutes = parseInt(this.remainingTimeInSeconds / 60);
        var seconds = Math.abs((minutes * 60) - this.remainingTimeInSeconds);
        var days = parseInt(minutes / 2);
        if (seconds < 10) {
            seconds = "0" + seconds;
        }
        $("#remaining_days_panel").html(days);
        $("#remaining_time_panel").html(minutes + ":" + seconds);
    };
    
    this.timeFormat= function(timeInSeconds){
        var minutes = parseInt(timeInSeconds / 60);
        var seconds = Math.abs((minutes * 60) - timeInSeconds);
        if (seconds < 10) {
            seconds = "0" + seconds;
        }
        return minutes + ":" + seconds;
    }

    this.updateRemaingTime = function () {
        if(!this.isTimeFrozen){
            this.remainingTimeInSeconds--;
            if(this.remainingTimeInSeconds<0){
                this.remainingTimeInSeconds=0;
            }
            this.displayRemainingTime();
        }
        if(this.remainingTimeInSeconds<=0){
            this.isTimeFrozen=true;
            //hide current screen
            $("#stage_airplane").hide();
            $("#stage_holy_stone").hide();
            $("#stage_vulcano").hide();
            $("#stage_geek_village").hide();
            $("#stage_beach").hide();
            $("#stage_map").hide();
            $("#stage_challenge_1").hide();
            $("#generic_text_screen_for_challenge").hide();
            $("#stage_challenge_4").hide();
            $("#stage_challenge_5").hide();
            $("#stage_challenge_6").hide();
            $("#stage_challenge_7").hide();
            //show failure
            gameOver.prepareForDisplay();
            $("#game_over").show();
            $("#game_fail").fadeIn();
            //$("#player_score").show();
            
        }
    };

    this.mistakePenalty= function (){
        this.remainingTimeInSeconds-=120;
        if(this.remainingTimeInSeconds<0){
            this.remainingTimeInSeconds=0;
        }
        //perform visual effect of penality
        $("#remaining_time_panel").css("color","#F00");
        setTimeout('$("#remaining_time_panel").css("color","#000");',2500);
    };

}