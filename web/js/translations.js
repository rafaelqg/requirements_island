var language = portuguese;
function changeToEnglish() {
    language = english;
    updateTranslations();
}

function changeToPortuguese() {
    language = portuguese;
    updateTranslations();
}

function updateTranslations() {
    for (i = 0; i < language.length; i++) {
        try{
        $("[id='"+"text_" + i+"']").html(language[i]);
        //$("#text_" + i).html(language[i]);
        }catch(e){}// try/catch just to not abort the loop when the element is not found (e.g. document.title)
    }
    document.title = language[9];
    if(selectedArea!=null){
        $("#text_selected_area").html(language[selectedArea.titleIndex]);//when in map to update area name
    }
    //this code is to update texts that are repeated in diferent HTML elements
    $("[name='hint_a']").html(language[45]);
    $("[name='hint_b']").html(language[46]);
}