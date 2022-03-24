var Challenge3 = function () {
    this.numberOfTries = 0;
    this.startedTime = 0;
    this.concludedTime = 0;
      
    this.verifyAnswer= function(){
        var a1=$("#c3_a1").is(":checked");
        var a2=$("#c3_a2").is(":checked");
        var a3=$("#c3_a3").is(":checked");
        var a4=$("#c3_a4").is(":checked");
        var a5=$("#c3_a5").is(":checked");
        var a6=$("#c3_a6").is(":checked");
        var a7=$("#c3_a7").is(":checked");
        var a8=$("#c3_a8").is(":checked");
        var a9=$("#c3_a9").is(":checked");
        var a10=$("#c3_a10").is(":checked");
        var a11=$("#c3_a11").is(":checked");
        this.numberOfTries++;
        document.getElementById("tries_c3").innerHTML = this.numberOfTries;
        if (a1 && !a2 && !a3 && a4 && !a5 && !a6 && !a7 && !a8 && !a9 && !a10 && a11) {
            this.concludedTime = timeManager.remainingTimeInSeconds;
            player.saveChallengResult(3, this.startedTime, this.concludedTime,  this.numberOfTries);
            $("#challenge_3_msgs").css("color","#FFA500");
            $("#challenge_3_msgs").html(language[28]);
            textScreen.showTextScreen("stage_vulcano", [82, 83]);
        } else {
            $("#challenge_3_msgs").css("color","#F00");
            $("#challenge_3_msgs").html(language[29]);
            timeManager.mistakePenalty();
        }
    }
    
}