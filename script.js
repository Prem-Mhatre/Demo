const firebaseConfig = {
    apiKey: "AIzaSyAfx45CGw4X0DlObJHo-pIaPrXNQ71UDUA",
    authDomain: "my-home-69792.firebaseapp.com",
    databaseURL: "https://my-home-69792-default-rtdb.firebaseio.com",
    projectId: "my-home-69792",
    storageBucket: "my-home-69792.appspot.com",
    messagingSenderId: "870816106481",
    appId: "1:870816106481:web:d84bfa3fa6bdbc9e2a2650",
    measurementId: "G-2C8JNB8YLC"
  };
  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  console.log(firebase);
  
document.getElementById("openTb_button").addEventListener("click", () => {
    if(document.getElementById("tabs").style.left == -300 + "px"){
        document.getElementById("tabs").style.left = 0 + "px";
        setTimeout(function(){
            document.querySelector(".blur_background").style.background = "grey";
            document.querySelector(".blur_background").style.height = 100 + "%";
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


document.querySelector(".ele_container").addEventListener("click", () => {
    if(document.getElementById("tabs").style.left == 0 + "px"){
        document.getElementById("tabs").style.left = -300 + "px";
        document.querySelector(".blur_background").style.background = "transparent";
        document.querySelector(".blur_background").style.height = 0;
    }
})

document.querySelector(".header_container").addEventListener("click", () => {
    if(document.getElementById("tabs").style.left == 0 + "px"){
        document.getElementById("tabs").style.left = -300 + "px";
        document.querySelector(".blur_background").style.background = "transparent";
        document.querySelector(".blur_background").style.height = 0;
    }
})

function checkSloganCollapsed(){
    if(window.innerWidth < 721){
        console.log("slogan is collapsed");

        document.getElementById("slogan_tab").innerHTML = "#No Broker No Commission";
    }
}


    function getData(){
        checkSloganCollapsed();
    }

    getData();