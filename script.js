var difficultyImg = ["bronze","silver","gold","platinum","master","grand_master",];
var diffImgs = document.querySelector(".diffImage");
var i = 0;

// Spell variables
var spellShuffle = ["Quas", "Wex", "Exort"];
var Cold_Snap = ["Quas", "Quas", "Quas"];
var Ghost_Walk = ["Quas", "Quas", "Wex"];
var Ice_Wall = ["Exort", "Quas", "Quas"];
var EMP = ["Wex", "Wex", "Wex"];
var Tornado = ["Quas", "Wex", "Wex"];
var Alacrity = ["Exort", "Wex", "Wex"];
var Sun_Strike = ["Exort", "Exort", "Exort"];
var Forge_Spirit = ["Exort", "Exort", "Quas"];
var Chaos_Meteor = ["Exort", "Exort", "Wex"];
var Deafening_Blast = ["Exort", "Quas", "Wex"];
var spells = ["Cold_Snap","Ghost_Walk","Ice_Wall","EMP","Tornado","Alacrity","Sun_Strike","Forge_Spirit", "Chaos_Meteor","Deafening_Blast",];
var twoSpells = []

// Generate random spell
function randomSpell() {
    return Math.round(Math.random() * (spells.length - 1 - 0) + 0);
};

// Change difficulty
document.getElementById("changeDifficulty").addEventListener("click", function () {
    if (i == difficultyImg.length - 1) {
      i = 0;
    } else {
        i++;
        }
    diffImgs.src = "Images/Difficulty/" + difficultyImg[i] + ".jpg";
});

// Key listener
document.body.addEventListener("keyup", function (event) {
    if (event.key == "q") {spellShuffle.unshift("Quas");} 
    else if (event.key == "w") {spellShuffle.unshift("Wex");} 
    else if (event.key == "e") {spellShuffle.unshift("Exort");} 
    else if (event.key == "r") {invoke();} 
    else if (event.key == "Spell1") {console.log("Spell1");} 
    else if (event.key == "Speall2") {console.log("Spell2");} 
    else {("");}
  
    document.getElementById("spell1").src ="Images/Spells/" + spellShuffle[2] + ".jpg";
    document.getElementById("spell2").src ="Images/Spells/" + spellShuffle[1] + ".jpg";
    document.getElementById("spell3").src ="Images/Spells/" + spellShuffle[0] + ".jpg";
  });

// Hide spell icons
function hideSpells(status) {
    document.getElementById("spell1").style.visibility = status;
    document.getElementById("spell2").style.visibility = status;
    document.getElementById("spell3").style.visibility = status;
    document.getElementById("spell4").style.visibility = status;
    document.getElementById("spell5").style.visibility = status;
    document.getElementById("randomSpell").style.visibility = status;
};

function invoke() {
    // Catch casting spells
    let kouzlo1 = document.getElementById("spell1").getAttribute("src").slice(14, -4);
    let kouzlo2 = document.getElementById("spell2").getAttribute("src").slice(14, -4);
    let kouzlo3 = document.getElementById("spell3").getAttribute("src").slice(14, -4);
    let kouzla = [kouzlo1, kouzlo2, kouzlo3];
  
    if (kouzla.sort().every((value, index) => value === Cold_Snap[index])) {
      twoSpells.unshift("Cold_Snap")
    } else if (kouzla.sort().every((value, index) => value === Ghost_Walk[index])) {
      twoSpells.unshift("Ghost_Walk");
    } else if (kouzla.sort().every((value, index) => value === Ice_Wall[index])) {
      twoSpells.unshift("Ice_Wall");
    } else if (kouzla.sort().every((value, index) => value === EMP[index])) {
      twoSpells.unshift("EMP");
    } else if (kouzla.sort().every((value, index) => value === Tornado[index])) {
      twoSpells.unshift("Tornado");
    } else if (kouzla.sort().every((value, index) => value === Alacrity[index])) {
      twoSpells.unshift("Alacrity");
    } else if (kouzla.sort().every((value, index) => value === Sun_Strike[index])) {
      twoSpells.unshift("Sun_Strike");;
    } else if (kouzla.sort().every((value, index) => value === Forge_Spirit[index])) {
      twoSpells.unshift("Forge_Spirit");
    } else if (kouzla.sort().every((value, index) => value === Chaos_Meteor[index])) {
      twoSpells.unshift("Chaos_Meteor");
    } else if (kouzla.sort().every((value, index) => value === Deafening_Blast[index])) {
      twoSpells.unshift("Deafening_Blast");
    } 

invokeCheck()
};

function invokeCheck() {
    if (twoSpells.length > 2) {
        twoSpells.pop()
    };

    if(twoSpells[0] !== twoSpells[1]) {
        document.getElementById("spell4").src = "Images/Spells/" + twoSpells[0] + ".jpg";
        document.getElementById("spell5").src = "Images/Spells/" + twoSpells[1] + ".jpg";
    } else{
        console.log("Dvojice spellů je stejná");
      };

    if (twoSpells[0] == spells[newSpell]) {
        oldSpell = newSpell
        newSpell = randomSpell()
        while (oldSpell == newSpell) {
          newSpell = randomSpell()
        }
        document.getElementById("randomSpell").src = "Images/Spells/" + spells[newSpell] + ".jpg";
        
    } else {
      twoSpells.splice(0, twoSpells.length)
      document.getElementById("spell4").src = "Images/Spells/empty_spell.jpg.jpg";
      document.getElementById("spell5").src = "Images/Spells/empty_spell.jpg.jpg";
      hideSpells("hidden")
    }
};

function classic() {
    hideSpells("visible")
};
function survival() {
    hideSpells("visible")
};
function combo() {
    hideSpells("visible")
};
function endless() {
    hideSpells("visible")
    newSpell = randomSpell()
    document.getElementById("randomSpell").src = "Images/Spells/" + spells[newSpell] + ".jpg";
    console.log(spells[newSpell]);
};

hideSpells("hidden");

document.getElementById("classicBtn").addEventListener("click",function(){classic()});
document.getElementById("survivalBtn").addEventListener("click",function(){survival()});
document.getElementById("comboBtn").addEventListener("click",function(){combo()});
document.getElementById("endlessBtn").addEventListener("click",function(){endless()});

// all 10 spells
// random 10 spells