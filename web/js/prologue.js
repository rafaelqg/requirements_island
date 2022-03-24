function startGame() {
    document.getElementById("game_start_panel").style.display = "none";
    $("#main_canvas").css("display", "block");
    timeManager.updateRemaingTime();
    setInterval("timeManager.updateRemaingTime()", 1000);
    drawMap();
    initiateJackSprite();
    $("#stage_main_menu").css("display", "none");
    $("#stage_prologue").css("display", "block");
    
}



