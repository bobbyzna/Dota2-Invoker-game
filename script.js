var difficultyImg = ["bronze", "silver", "gold", "platinum", "master", "grand_master"];
var i = 0;
var diffImgs = document.querySelector(".diffImage");
// document.querySelector(".diffImage").style.display = "none";
// document.querySelector(".invokeSpell").style.display = "none";
// Změna obtížnosti
document.getElementById("changeDifficulty").addEventListener("click", function(){
    if(i == difficultyImg.length -1){
        i = 0;
    }
    else{
        i++;
    }
    diffImgs.src = "Images/Difficulty/" + difficultyImg[i] + ".jpg";
});

//zjištění nastavené obtížnosti
function setDifficulty(){
return  document.getElementsByClassName("diffImage")[0].getAttribute("src").slice(4, -4)
};

// Zachytávání kláves
document.body.addEventListener("keyup", function(event){
    if(event.key == "q"){console.log("quas")}
    else if(event.key == "w"){console.log("wex")}
    else if(event.key == "e"){console.log("exort")}
    else if(event.key == "r"){console.log("invoke")}
    else{""}
});