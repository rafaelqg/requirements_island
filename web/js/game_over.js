var GameOver = function () {
    
    this.prepareForDisplay = function(){     
        for (i=0;i<challenges.length;i++){
            $("#c"+(i+1)+"_time_begin").html(timeManager.timeFormat(challenges[i].startedTime));
            $("#c"+(i+1)+"_time_end").html(timeManager.timeFormat(challenges[i].concludedTime));
            $("#c"+(i+1)+"_tries_go").html(challenges[i].numberOfTries);
        }
        player.calculatePoints();
        $("#go_player_name").html(player.name);
        $("#go_remaining_hints").html(hintManager.hintsAvailable);
        $("#go_points").html(player.points);
        
        if(challenge7.concludedTime>0){
            $("#go_return_map").hide();//does not allow returning to map
        }
        
    };  
    
    this.showRanking = function(){
            $.ajax({
                type: "GET",
                url: "get_shared_score",
                data: "",
                success: function( data ) {
                    var scores=JSON.parse(data);
                    var result="";
                    for(i=0;i<scores.length;i++){
                        if (scores[i][0] !=null ){
                            result+=(i+1)+". " +scores[i][1] +" - " +scores[i][2];
                            result+="<br />"
                        }
                    }
                    $("#ranking").html(result);
                },
                dataType: "text"
            });
    }
}