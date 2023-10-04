/////////////////////////////apparition des information////////////////////////////////
function ToggleInfo(pId){
    if ($(document).width() < 1200) {
        if( $("#"+ pId).css("display") == "none"){
            $("#"+ pId).css("display","flex");
    
        }else {
            $("#"+ pId).css("display", "none");
        }
    }
}
