var difficultyImg = ["bronze", "silver", "gold", "platinum", "master", "grand_master"];
var i = 0;
var diffImgs = document.querySelector(".diffImage");
var spells = ["Cold_Snap", "Ghost_Walk", "Ice_Wall", "EMP", "Tornado", "Alacrity", "Sun_Strike", "Forge_Spirit", "Chaos_Meteor", "Deafening Blast"]

// Vygenerování náhodného spellu
function randomSpell(){
    return Math.round((Math.random()*((spells.length-1) -0)+0))
};

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
var diff = function setDifficulty(){
return  document.getElementsByClassName("diffImage")[0].getAttribute("src").slice(18, -4)
};

// Zachytávání kláves
document.body.addEventListener("keyup", function(event){
    if(event.key == "q"){console.log("quas")}
    else if(event.key == "w"){console.log("wex")}
    else if(event.key == "e"){console.log("exort")}
    else if(event.key == "r"){console.log("invoke")}
    else if(event.key == "Spell1"){console.log("Spell1")}
    else if(event.key == "Speall2"){console.log("Spell2")}
    else{""}
});

// Schování spellů
function hideSpells() {
document.getElementById("spell1").style.visibility = "hidden";    
document.getElementById("spell2").style.visibility = "hidden";    
document.getElementById("spell3").style.visibility = "hidden";    
}
hideSpells();

var spellPosition = ["spell1", "spell2", "spell3"]