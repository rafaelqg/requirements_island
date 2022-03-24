var Player = function (){
    this.name="";
    this.email="";
    this.educationalInstitution="";
    this.program="";
    this.course="";
    this.points=0;
    this.id=-1;
    
    
    this.readUserData= function(){
        var result=true;
        this.name=$("[name='player_name']").val();
        if($.trim(this.name)!=""){
            this.email=$("[name='player_email']").val();
            this.educationalInstitution=$("[name='player_institution']").val();
            this.program=$("[name='player_program']").val();
            this.course=$("[name='player_course']").val();           
           $("#text_player_name_panel").html(this.name);
            
        }else{
            result=false;
            $("[name='player_name']").css("border-color","#F00");
        }
        return result;
    };
    
    this.calculatePoints= function(){
        var points=0;
        if (challenge7.concludedTime>0){// bonus just when the game is concluded
            points+=timeManager.remainingTimeInSeconds;
            points+=150* hintManager.hintsAvailable;
        }
        if(hintManager.bateryFound){
           points+=100;
        }
        for(i=0;i<challenges.length;i++){
            if(challenges[i].concludedTime){
                points+=100;
            }
            points-= 20 * challenges[i].numberOfTries;
        }
        this.points=points;
    };
    
    this.savePlayerData= function (){
        $.ajax({
        type: "POST",
        url: "save_player_data",
        data: $( "#player_data" ).serialize(),
        success: function( data ) {
            player.id=data;
        },
        dataType: "text"
      });
    }
    
     this.saveChallengResult= function (challengeId, startTime, endTime, tries){
         this.calculatePoints();
        var parameters="player_id="+this.id+"&challenge_id="+challengeId+"&start_time="+startTime+"&end_time="+endTime+"&tries="+tries+"&score="+this.points;
       
         $.ajax({
        type: "POST",
        url: "save_challenge_result",
        data: parameters,
        success: function( data ) {
            console.log("Saving data for challenge: "+ data);
        },
        dataType: "text"
      });
    }
    
};


