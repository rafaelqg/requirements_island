var TextScreen = function () {
    this.currentText = 0;//the numeric part of the text id to be shown next or the id of an html element (container) to be presented
    this.listOfTexts=null;
    this.listOfTextIndex=0;


    /**
     * 
     * @param {string} currentScreenId
     * means the current screen id
     * @param {array} listOfTextsIds
     * means the numeric part of the text id, organized in an array in the exactly position the texts have to be shown
     * @returns {void}
     */
    this.showTextScreen=function (currentScreenId, listOfTextsIds){
        var currentScreen=document.getElementById(currentScreenId);
        currentScreen.style.display="none";
        this.listOfTexts=listOfTextsIds;
        this.listOfTextIndex=0;
        this.currentText=this.listOfTexts[this.listOfTextIndex];
        document.getElementById("text_"+this.currentText).style.display="block";
        timeManager.isTimeFrozen=true;
        $("#remaining_time_panel").css("color","#0099ff");
        setTimeout('$("#remaining_time_panel").css("color","");',2500);
        $("#generic_text_screen_for_challenge").show();
    };

    this.showNext = function () {
        var id=null;
        id=isNaN(parseInt(this.currentText))?this.currentText:"text_"+this.currentText;
        document.getElementById(id).style.display="none";
       this.listOfTextIndex++;
       if(this.listOfTextIndex < this.listOfTexts.length){
           this.currentText=this.listOfTexts[this.listOfTextIndex];
           if(isNaN(parseInt(this.currentText))){
                id=this.currentText;
                $("#generic_text_screen_for_challenge").hide();
                timeManager.isTimeFrozen=false;
           }else{
               timeManager.isTimeFrozen=true;
                id="text_"+this.currentText;
           }
           document.getElementById(id).style.display="block";
       }else{
           this.currentText = 0;
           this.listOfTexts=null;
           this.listOfTextIndex=0;
           timeManager.isTimeFrozen=false;
           $("#generic_text_screen_for_challenge").hide();
           $("#stage_map").show();
       }   
    };
};


