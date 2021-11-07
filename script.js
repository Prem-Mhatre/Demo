document.getElementById("openTb_button").addEventListener("click", () => {
    if(document.getElementById("tabs").style.left == -300 + "px"){
        document.getElementById("tabs").style.left = 0 + "px";
        setTimeout(function(){
            document.querySelector(".blur_background").style.background = "grey";
            document.querySelector(".blur_background").style.height = 100 + "vh";
        },200)
    }
    else{
        document.getElementById("tabs").style.left = -300 + "px";
        document.querySelector(".blur_background").style.background = "transparent";
        document.querySelector(".blur_background").style.height = 0;
    }
});

document.querySelector(".blur_background").addEventListener("click", () => {
    if(document.getElementById("tabs").style.left == 0 + "px"){
        document.getElementById("tabs").style.left = -300 + "px";
        document.querySelector(".blur_background").style.background = "transparent";
        document.querySelector(".blur_background").style.height = 0;
    }
})

    function getData(){
        checkSloganCollapsed();
    }

    getData();

    function checkSloganCollapsed(){
        if(window.innerWidth < 721){
            console.log("slogan is collapsed");
    
            document.getElementById("slogan_tab").innerHTML = "#No Broker No Commission";
        }
    }