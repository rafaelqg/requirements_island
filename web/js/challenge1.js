var Challenge1 = function () {
    this.numberOfTries = 0;
    this.startedTime = 0;
    this.concludedTime = 0;
    this.challenge1Answers = new Array();
    this.currentAnswerIndex=1;

    this.initializeAnswersChallenge1 = function () {
        for (i = 0; i <= 6; i++) {
            this.challenge1Answers[i] = 0;
        }
    }

    this.initializeChallenge1 = function () {
        this.initializeAnswersChallenge1();
        document.getElementById("tries_c1").innerHTML = challenge1.numberOfTries;
    }

    this.tryAgainChallenge1 = function () {
        $("#droppable_c1_1").html("");
        $("#droppable_c1_1").css("background-color", "#CCC");
        $("#droppable_c1_2").html("");
        $("#droppable_c1_2").css("background-color", "#CCC");
        $("#droppable_c1_3").html("");
        $("#droppable_c1_3").css("background-color", "#CCC");
        $("#droppable_c1_4").html("");
        $("#droppable_c1_4").css("background-color", "#CCC");
        $("#droppable_c1_5").html("");
        $("#droppable_c1_5").css("background-color", "#CCC");
        $("#droppable_c1_6").html("");
        $("#droppable_c1_6").css("background-color", "#CCC");
        

        //$("#draggable_c1_1").css("margin-top", "50px");
        //$("#draggable_c1_1").css("margin-left", "10px");
        $("#draggable_c1_1").show();

        //$("#draggable_c1_2").css("margin-top", "50px");
        //$("#draggable_c1_2").css("margin-left", "200px");
        $("#draggable_c1_2").show();

        //$("#draggable_c1_3").css("margin-top", "50px");
       // $("#draggable_c1_3").css("margin-left", "400px");
        $("#draggable_c1_3").show();

        //$("#draggable_c1_4").css("margin-top", "180px");
        //$("#draggable_c1_4").css("margin-left", "500px");
        $("#draggable_c1_4").show();

        //$("#draggable_c1_5").css("margin-top", "180px");
        //$("#draggable_c1_5").css("margin-left", "100px");
        $("#draggable_c1_5").show();

        //$("#draggable_c1_6").css("margin-top", "180px");
        //$("#draggable_c1_6").css("margin-left", "300px");
        $("#draggable_c1_6").show();
        this.initializeAnswersChallenge1();
        this.currentAnswerIndex=1;
        timeManager.mistakePenalty();
    };

    this.analizeChallenge1 = function () {
        this.numberOfTries++;
        document.getElementById("tries_c1").innerHTML = challenge1.numberOfTries;
        var notConcluded = false;
        var sucessChallenge1 = false;
        for(i=1;i<=6;i++){
            if(this.challenge1Answers[i]===0){
                notConcluded =true;
            }
        }
        
        if (!notConcluded) {
            if (this.challenge1Answers[1] === 3 && this.challenge1Answers[2] === 2 && this.challenge1Answers[3] === 1 && this.challenge1Answers[4] === 4 && this.challenge1Answers[5] === 5 && this.challenge1Answers[6] === 6) {
                sucessChallenge1 = true;             
                this.concludedTime = timeManager.remainingTimeInSeconds;
                player.saveChallengResult(1, this.startedTime, this.concludedTime,  this.numberOfTries);
                $("#challenge_1_msgs").css("color","#FFA500");
                $("#challenge_1_msgs").html(language[28]);            
                textScreen.showTextScreen("stage_challenge_1", [36,37]);
            } else {
                $("#challenge_1_msgs").css("color","#F00");
                $("#challenge_1_msgs").html(language[29]);
                timeManager.mistakePenalty();
            }
        }else{
            $("#challenge_1_msgs").css("color","#F00");
            $("#challenge_1_msgs").html(language[38]);
            
        }
        return sucessChallenge1;
    };

    this.handleDropChallenge1 = function (el, event, ui) {
        if ($(el).html() == "") {
            ui.draggable.hide();
            var index = parseInt($(el).attr("id")[13]);
            var answer = parseInt(ui.draggable.attr("id")[13]);

            this.challenge1Answers[index] = answer;
            $(el).html(ui.draggable.html());
            el.style.backgroundColor = "#FFF";
        } else {
            window.alert("Position already in use!");
        }
    }
    
    this.handleDoubleClick=function(el){
        el.style.display="none";
        var index=this.currentAnswerIndex++;
        var answer = parseInt(el.id[13]);
        this.challenge1Answers[index] = answer;
        $("#droppable_c1_"+index).html(el.innerHTML);
        $("#droppable_c1_"+index).css("background-color","#FFF");
    }
}