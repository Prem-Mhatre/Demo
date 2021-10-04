document.getElementById("openTb_button").addEventListener("click", () => {
    if(document.getElementById("tabs").style.left == -80 + "px"){
        document.getElementById("tabs").style.left = -0 + "px";
        document.querySelector(".blur_background").style.background = "grey";
    }
    else{
        document.getElementById("tabs").style.left = -80 + "px";
        document.querySelector(".blur_background").style.background = "transparent";
    }
});