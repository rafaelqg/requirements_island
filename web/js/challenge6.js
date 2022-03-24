var Challenge6 = function () {
    this.numberOfTries = 0;
    this.startedTime = 0;
    this.concludedTime = 0;
    this.challenge1Answers = new Array();
    this.currentAnswerIndex=1;

    this.initializeAnswersChallenge6 = function () {
        for (i = 0; i <= 5; i++) {
            this.challenge1Answers[i] = 0;
        }
    }

    this.initializeChallenge6 = function () {
        this.initializeAnswersChallenge6();
        document.getElementById("tries_c6").innerHTML = challenge6.numberOfTries;
        this.startedTime = timeManager.remainingTimeInSeconds;
        
    }

    this.tryAgainChallenge6 = function () {
        $("#droppable_c6_1").html("");
        $("#droppable_c6_1").css("background-color", "#CCC");
        $("#droppable_c6_2").html("");
        $("#droppable_c6_2").css("background-color", "#CCC");
        $("#droppable_c6_3").html("");
        $("#droppable_c6_3").css("background-color", "#CCC");
        $("#droppable_c6_4").html("");
        $("#droppable_c6_4").css("background-color", "#CCC");
        $("#droppable_c6_5").html("");
        $("#droppable_c6_5").css("background-color", "#CCC");

        $("#draggable_c6_1").show();
        $("#draggable_c6_2").show();
        $("#draggable_c6_3").show();
        $("#draggable_c6_4").show();
        $("#draggable_c6_5").show();

        this.initializeAnswersChallenge6();
        this.currentAnswerIndex=1;
        timeManager.mistakePenalty();
    };

    this.analizeChallenge6 = function () {
        this.numberOfTries++;
        document.getElementById("tries_c6").innerHTML = challenge6.numberOfTries;
        var notConcluded = false;
        var sucessChallenge1 = false;
        for(i=1;i<=5;i++){
            if(this.challenge1Answers[i]===0){
                notConcluded =true;
            }
        }
        
        if (!notConcluded) {
            if (this.challenge1Answers[1] === 3 && this.challenge1Answers[2] === 1 && this.challenge1Answers[3] === 5 && this.challenge1Answers[4] === 2 && this.challenge1Answers[5] === 4) {
                sucessChallenge1 = true;
                this.concludedTime = timeManager.remainingTimeInSeconds;
                player.saveChallengResult(6, this.startedTime, this.concludedTime,  this.numberOfTries);
                $("#challenge_6_msgs").css("color","#FFA500");
                $("#challenge_6_msgs").html(language[28]);
                textScreen.showTextScreen("stage_challenge_6", [119]);
            } else {
                $("#challenge_4_msgs").css("color","#F00");
                $("#challenge_4_msgs").html(language[29]);
                timeManager.mistakePenalty();
            }
        }else{
            $("#challenge_4_msgs").css("color","#F00");
            $("#challenge_4_msgs").html(language[38]);
        }
        return sucessChallenge1;
    };

    
    this.handleDoubleClick=function(el){
        el.style.display="none";
        var index=this.currentAnswerIndex++;
        var answer = parseInt(el.id[13]);
        this.challenge1Answers[index] = answer;
        $("#droppable_c6_"+index).html(el.innerHTML);
        $("#droppable_c6_"+index).css("background-color","#FFF");
    }
}