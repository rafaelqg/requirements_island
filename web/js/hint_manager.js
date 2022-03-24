var HintManager = function () {
    this.hintsAvailable = 0;
    this.bateryFound=false;
    
    this.showHint = function (text, div, elId) {
        if(this.hintsAvailable>0){
            document.getElementById(div).innerHTML = text;
            this.hintsAvailable--;
            this.updateHintsAvailable();
            var elem=document.getElementById(elId);
            elem.innerHTML="<s>"+elem.innerHTML+"</s>";
            elem.style.color = "#999";
            elem.onclick="";            
        }else{
            document.getElementById(div).innerHTML = language[33];
            document.getElementById(div).style.color = "#F00";
        }
    }
    
    this.updateHintsAvailable= function (){
        $("#hints_c1").html(this.hintsAvailable);
        $("#hints_c2").html(this.hintsAvailable);
        $("#hints_c3").html(this.hintsAvailable);
        $("#hints_c4").html(this.hintsAvailable);
        $("#hints_c5").html(this.hintsAvailable);
        $("#hints_c6").html(this.hintsAvailable);
        $("#hints_c7").html(this.hintsAvailable);
    }
}