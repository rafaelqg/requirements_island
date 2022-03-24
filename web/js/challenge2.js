var Challenge2 = function () {
    this.numberOfTries = 0;
    this.startedTime = 0;
    this.concludedTime = 0;
      
    this.verifyAnswer= function(){
        var a1=$("#c2_a1").is(":checked");
        var a2=$("#c2_a2").is(":checked");
        var a3=$("#c2_a3").is(":checked");
        var a4=$("#c2_a4").is(":checked");
        var a5=$("#c2_a5").is(":checked");
        var a6=$("#c2_a6").is(":checked");
        var a7=$("#c2_a7").is(":checked");
        var a8=$("#c2_a8").is(":checked");
        var a9=$("#c2_a9").is(":checked");
        this.numberOfTries++;
        document.getElementById("tries_c2").innerHTML = challenge2.numberOfTries;
        if (a1 === false && a2 === true && a3 === false && a4 === false && a5 === true && a6 === false && a7 === true && a8 === false && a9 === true) {
            this.concludedTime = timeManager.remainingTimeInSeconds;
            player.saveChallengResult(2, this.startedTime, this.concludedTime,  this.numberOfTries);
            $("#challenge_2_msgs").css("color","#FFA500");
            $("#challenge_2_msgs").html(language[28]);
            textScreen.showTextScreen("stage_holy_stone", [60, 61]);
        } else {
            $("#challenge_2_msgs").css("color","#F00");
            $("#challenge_2_msgs").html(language[29]);
            timeManager.mistakePenalty();
        }
    }
    
}